import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../Button/Button"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"

const ContactSection = () => {
  return (
    <section id="contato" className="relative h-dvh px-3 flex items-center justify-center text-center contactBg">
      <div className="flex flex-col justify-between items-center w-[400px] h-[220px] py-6 bg-background border-[1px] border-highlight rounded-[20px] md:w-[500px] md:h-[250px] xl:w-[600px] xl:h-[300px] xl:py-10">
         <div className="flex flex-col gap-[10px]">
            <h2 className="font-bold text-textPrimary text-xl md:text-2xl">
               Entre em <span className="text-highlight">contato</span> comigo!
            </h2>
            <p className="text-textSecondary text-sm px-2 md:text-base xl:px-8">
               Tem alguma dúvida ou quer apenas conversar comigo? 
               Me chame e farei o possível para responder.
            </p>
         </div>
         <Button className="buttonStyle w-[80%] gap-[8px]" href="/contato" isLink={true}>
            Contato
            <FontAwesomeIcon className="w-4" icon={faArrowRightFromBracket}/>
         </Button>
      </div>
    </section>
  )
}

export default ContactSection