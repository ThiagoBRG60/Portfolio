import { SocialCardsProps } from "./types"
import { socialLinks } from "@/data/socialLinks"
import Icon from "@/components/Icon"

const SocialCards = ({variant = "default"}: SocialCardsProps) => {
   const cardSizes = {default: "w-10 h-10 rounded-[10px] xs:w-11.25 xs:h-11.25 xl:w-12.5 xl:h-12.5", small: "w-6.25 h-6.25 rounded-[5px] xs:w-7.5 xs:h-7.5 xs:rounded-[10px] xl:w-8.75 xl:h-8.75"}

	return (
      <ul className={`flex ${variant === "small" ? "gap-1.25 xl:gap-2.5" : "gap-2.5"}`}>
         {socialLinks.map((socialLink, index) => (
            <li key={index} title={socialLink.label}>
               <a href={socialLink.href} target="_blank" aria-label={socialLink.label} className={`${cardSizes[variant]} flex items-center justify-center text-highlight border border-highlight-25 duration-300 bg-contact-card-socials-background lg:hover:shadow-[0_0_10px_5px_var(--color-highlight-25)]`}>
                  <Icon name={socialLink.icon} className={`${variant === "small" ? "text-sm xl:text-lg" : "xl:text-xl"}`} type="fontAwesome"/>
               </a>
            </li>
         ))}
      </ul>
   )
}

export default SocialCards