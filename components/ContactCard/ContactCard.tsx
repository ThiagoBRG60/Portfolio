import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import IContactProps from "./types"

const ContactCard = ({contactInfo}: IContactProps) => {
  return (
    <a href={contactInfo.href} className="min-w-[100px] min-h-[50px] p-[15px] flex flex-col gap-[10px] border-[1px] border-highlight rounded-[10px] bg-cardsbg transition duration-[400ms] hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(145,94,255,0.2)]" target="_blank">
      <div className="flex items-center gap-[15px]">
        <FontAwesomeIcon className="text-highlight w-5 text-2xl" icon={contactInfo.icon}/>
        <h2 className="text-sm font-semibold text-textPrimary xs:text-base">{contactInfo.name}</h2>
      </div>
      <p className="text-sm text-textSecondary xs:text-base">
        {contactInfo.info}
      </p>
    </a>
  )
}

export default ContactCard