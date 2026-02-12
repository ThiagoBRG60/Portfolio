import { Path, RegisterOptions } from "react-hook-form"

interface FormInputs {
   name: string
   email: string
   message: string
   website?: string
}

interface ContactFormFieldsProps {
   id: string
   name: Path<FormInputs>
   label: string
   type?: string
   icon: "user" | "envelope" | "pen-to-square"
   as: "input" | "textarea"
   placeholder: string
   options: RegisterOptions<FormInputs>
}

const contactFormFields: readonly ContactFormFieldsProps[] = [
   {
      id: "name",
      name: "name",
      label: "Nome",
      type: "text",
      icon: "user",
      as: "input",
      placeholder: "Seu nome",
      options: {
         required: "Digite um nome válido",
         minLength: {
            value: 2,
            message: "Nome precisa conter pelo menos 2 caracteres"
         },
         maxLength: {
            value: 64,
            message: "Nome não pode conter mais que 64 caracteres"
         }
      }
   },
   {
      id: "email",
      name: "email",
      label: "Email",
      type: "email",
      icon: "envelope",
      as: "input",
      placeholder: "Seu@email.com",
      options: {
         required: "Digite um email válido",
         pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Digite um email válido"
         }
      }
   },
   {
      id: "message",
      name: "message",
      label: "Mensagem",
      icon: "pen-to-square",
      as: "textarea",
      placeholder: "Conte um pouco sobre sua ideia ou projeto...",
      options: {
         required: "Digite uma mensagem válida",
         minLength: {
            value: 10,
            message: "Mensagem precisa conter pelo menos 10 caracteres"
         },
         maxLength: {
            value: 2500,
            message: "Mensagem não pode conter mais que 2500 caracteres"
         }
      }
   }
] as const

export { contactFormFields, type FormInputs }