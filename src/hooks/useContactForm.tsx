import { SubmitHandler, UseFormReset } from "react-hook-form"
import { FormInputs } from "@/data/contactFormFields"
import { useToastCardStore } from "@/stores/toastCardStore"
import { useEffect, useRef } from "react"

function useContactForm(resetFn: UseFormReset<FormInputs>) {
   const { isActive, setIsActive, setToastState } = useToastCardStore()
   const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)

   useEffect(() => {
      if (!isActive && timeoutIdRef.current) clearTimeout(timeoutIdRef.current)
   }, [isActive])

   const onSubmit: SubmitHandler<FormInputs> = async (data) => {
      try {
         const response = await fetch("/api/contact", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
         })
         
         const responseData: {message: string} = await response.json()
   
         resetFn()
         setToastState({message: responseData.message, status: response.ok ? "success" : "error"})
      } catch (error) {
         setToastState({message: "Erro ao enviar mensagem, tente novamente mais tarde", status: "error"})
      } finally {
         setIsActive(true)
         timeoutIdRef.current = setTimeout(() => setIsActive(false), 6500)
      }
   }
      
   return { onSubmit }
}

export { useContactForm }