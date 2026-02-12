import { Redis } from '@upstash/redis'
import { Ratelimit } from "@upstash/ratelimit"
import { Resend } from "resend"
import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { contactFormFields } from "@/data/contactFormFields"
import { validateContactPayload } from "@/helpers/validateContactPayload"
import ContactEmailTemplate from '@/components/ContactEmailTemplate'

interface ContactDataProps {
   name: string
   email: string
   message: string
   website: string
}

const redis = Redis.fromEnv()
const resend = new Resend(process.env.RESEND_API_KEY)

const rateLimit = new Ratelimit({
   redis,
   limiter: Ratelimit.slidingWindow(4, "1 h"),
   ephemeralCache: new Map()
})

async function POST(req: Request) {
   try {
      const contactData: ContactDataProps = await req.json()
      const { name, email, message } = contactData

      const getDataOptions = (key: keyof typeof contactData) => {
         const foundData = contactFormFields.find(field => field.name === key)

         if (foundData) return {name: foundData.label, options: foundData.options}
      }

      // Input validation
      for (let [key, value] of Object.entries(contactData)) {
         if (key === "website" && value !== "") return NextResponse.json({message: "Mensagem enviada com sucesso"}, {status: 200})

         const dataOptions = getDataOptions(key as keyof ContactDataProps)
         const isValid = dataOptions ? validateContactPayload(value, dataOptions.options) : true

         if (!isValid) return NextResponse.json({message: `Campo '${dataOptions?.name.toLowerCase()}' inválido`}, {status: 400})
      }

      // Upstash logic (rate limit)
      const headersList = await headers()
      const userIP = headersList.get("x-forwarded-for") ? headersList.get("x-forwarded-for")?.split(",")[0].trim() : headersList.get("x-real-ip")

      if (!userIP) return NextResponse.json({message: "Erro ao processar requisição, tente novamente mais tarde"}, {status: 400})

      const { success } = await rateLimit.limit(userIP)

      if (!success) return NextResponse.json({message: "Muitas tentativas, tente novamente mais tarde"}, {status: 429})

      // Resend logic
      const { error } = await resend.emails.send({
         from: "Contato Portfólio <onboarding@resend.dev>",
         to: `${process.env.RESEND_DEST_EMAIL}`,
         subject: "Contato Portfólio",
         react: ContactEmailTemplate({name: name, email: email, message: message})
      })

      if (error) return NextResponse.json({message: "Erro ao enviar mensagem, tente novamente mais tarde"}, {status: 400})

      return NextResponse.json({message: "Mensagem enviada com sucesso"}, {status: 200})
   } catch (error) {
      return NextResponse.json({message: "Erro ao enviar mensagem, tente novamente mais tarde"}, {status: 500})
   }
}

export { POST }