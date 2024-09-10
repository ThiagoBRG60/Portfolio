'use client'
import ContactCard from "@/components/ContactCard/ContactCard"
import Footer from "@/components/Footer/Footer"
import FormInput from "@/components/FormInput/FormInput"
import FormStatusMessage from "@/components/FormStatusMessage/FormStatusMessage"
import Header from "@/components/Header/Header"
import { headerLeaveLink } from "@/data/headerHomeLinks"
import { contactInfo } from "@/data/contactInfo"
import useContactForm from "@/hooks/useContactForm"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const Contact = () => {
  const [data, setData] = useState({name: '', email: '', message: ''})
  const [status, setStatus] = useState('')
  const [sent, setSent] = useState(false)

  const {handleChange, handleSubmit} = useContactForm()

  return (
    <>
      <Header links={headerLeaveLink} isOtherPage={true}/>
      <main className="flex flex-col min-h-dvh">
        <section className="flex-1 flex flex-col py-20 px-5 items-center sm:justify-center">
          <h1 className="font-bold text-xl text-textPrimary 2xl:text-2xl sm:mb-3">Contato</h1>
          <p className="text-sm text-textSecondary text-center mb-[25px] sm:text-base sm:mb-[30px]">
            Entre em contato comigo pelos links abaixo ou pelo formulário.
          </p>
          <div className="flex flex-col gap-[15px] sm:flex-row xl:gap-[30px]">
            <ContactCard contactInfo={contactInfo.whatsapp}/>
            <ContactCard contactInfo={contactInfo.email}/>
          </div>
          <form onSubmit={(e) => handleSubmit(e, data, setData, setStatus, setSent)} className="w-full max-w-[600px] mt-[30px] flex flex-col gap-[20px] sm:mt-[40px]">
            <FormInput type="text" onChange={(e) => handleChange(e, setData)} value={data.name} name="name" nomeInput="Nome"/>
            <FormInput type="email" onChange={(e) => handleChange(e, setData)} value={data.email} name="email" nomeInput="Email"/>
            <FormInput element="textarea" onChange={(e) => handleChange(e, setData)} value={data.message} name="message" nomeInput="Mensagem"/>
            <button type="submit" className="w-full max-w-[150px] h-[50px] mt-[10px] flex justify-center self-center items-center gap-[10px] border-[1px] border-highlight rounded-[10px] text-textPrimary font-semibold bg-background transition duration-[400ms] hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(145,94,255,0.2)]">
              Enviar
              <FontAwesomeIcon className="w-4" icon={faPaperPlane}/>
            </button>
          </form>
          <FormStatusMessage status={status} messageSent={sent}/>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Contact