import EmailTemplate from "@/components/EmailTemplate/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Contato Portfólio <onboarding@resend.dev>",
      to: `${process.env.TO_EMAIL}`,
      subject: "Contato Portfólio",
      react: EmailTemplate({name: name, email: email, message: message})
    });

    if (error) {
      return NextResponse.json(error, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" });
  }
}