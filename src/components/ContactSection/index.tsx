"use client"
"use no memo"
import { useForm } from "react-hook-form"
import { contactFormFields, FormInputs } from "@/data/contactFormFields"
import { useContactForm } from "@/hooks/useContactForm"
import Section from "@/components/Section"
import Icon from "@/components/Icon"
import Button from "@/components/Button"
import SocialCards from "@/components/SocialCards"
import LoadingSpinner from "@/components/LoadingSpinner"

const ContactSection = () => {
   const { register, handleSubmit, reset, formState: {isSubmitting, errors} } = useForm<FormInputs>({mode: "onChange", reValidateMode: "onChange"})
   const { onSubmit } = useContactForm(reset)

   return (
      <Section id="contato" title="Contato" className="flex-col gap-2.5 px-2.5" description="Tem alguma dúvida, proposta ou ideia em mente? Entre em contato e vamos conversar.">
         <div className="w-full flex flex-col items-center p-3.75 mt-1.25 rounded-[10px] border border-highlight-25 bg-(image:--color-contact-card-background) xs:w-[90%] xs:p-5 sm:w-100 sm:mt-2.5 xl:w-107.5 xl:p-6.25">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-2.5 sm:gap-3.75">
               {contactFormFields.map(field => {
                  const inputError = errors[field.name]
                  const inputClassName = `${field.as === "input" ? "py-0.75 px-2.5 xs:py-1.25 xl:py-1.5" : "p-2.5 resize-none"} ${inputError ? "border-red-800" : "border-highlight-25"} rounded-[5px] text-sm text-white-85 border outline-none bg-contact-card-input-background placeholder:text-sm placeholder:text-white-50 scrollbar-thin sm:text-base xl:placeholder:text-base`

                  return (
                     <div key={field.id} className="flex flex-col gap-2.5">
                        <label htmlFor={field.id} className="flex items-center gap-1.25 font-medium text-sm text-white-85 sm:text-base">
                           <Icon name={field.icon} className="text-highlight xs:text-base xl:text-lg" type="fontAwesome"/>
                           {field.label}
                        </label>

                        {field.as === "input"
                           ? <input {...register(field.name, {setValueAs: value => value.trim(), ...field.options})} type={field.type} id={field.id} className={inputClassName} placeholder={field.placeholder} autoComplete={field.name}/>
                           : <textarea {...register(field.name, {setValueAs: value => value.trim(), ...field.options})} rows={4} id={field.id} className={inputClassName} placeholder={field.placeholder}/>
                        }

                        {inputError && <span className="-my-1.25 text-sm text-red-800">{inputError.message}</span>}
                     </div>
                  )
               })}

               <div className="absolute top-0 -left-2499.75" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input {...register("website", {setValueAs: value => value.trim()})} type="text" id="website" placeholder="https://example.com" autoComplete="url" tabIndex={-1}/>
               </div>

               <Button type="submit" disabled={isSubmitting} className="mt-2.5 mb-3.75 disabled:cursor-not-allowed disabled:opacity-70 xs:mb-5">
                  {isSubmitting ? <LoadingSpinner theme="light"/> : "Enviar"}
               </Button>
            </form>

            <p className="w-[85%] py-2.5 text-center text-xs text-white-85 border-t border-t-highlight-25 xs:text-sm xs:py-3.75 xl:text-base">
               Ou, se preferir, me chame pelas redes
            </p>

            <SocialCards/>
         </div>
      </Section>
   )
}

export default ContactSection