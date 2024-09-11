import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { socialMediaLinks } from "@/data/socialMediaLinks"

const SocialMediaLinks = ({isFooter}: ISocialMediaProps) => {
  return (
   <ul className={`flex gap-[10px] xxs:gap-[15px] text-highlight ${isFooter ? 'items-center' : 'mt-5 pl-2'}`}>
      {socialMediaLinks.map(link => (
         <li key={link.name}>
            <a href={link.href} className={`${isFooter ? "text-xl" : 'text-[26px]'} transition duration-[400ms] hover:drop-shadow-[0_0_15px_rgba(145,94,255,0.8)]`} target="_blank" aria-label={link.name}>
               <FontAwesomeIcon className="w-6" icon={link.icon}/>
            </a>
         </li>
      ))}
   </ul>
  )
}

export default SocialMediaLinks