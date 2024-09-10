'use client'
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HeaderLinks = ({links, className, isMobileMenu, handleClick, isOtherPage}: IHeaderProps) => {
  return (
   <ul className={`${isMobileMenu ? 'flex' : 'hidden'} lg:flex gap-[25px] ${className}`}>
      {links.map(link => (
         <li key={link.id} onClick={() => handleClick && handleClick()}>
            <a className={`${isOtherPage && 'flex items-center gap-[10px]' } ${isMobileMenu ? "text-xl" : 'text-lg'} relative font-semibold text-textSecondary transition duration-[400ms] hover:text-textPrimary headerLinkBorder`}
               href={link.href}>
               {link.name}
               {isOtherPage && <FontAwesomeIcon icon={faArrowRightFromBracket}/>}
            </a>
         </li>
      ))}
   </ul>
  )
}

export default HeaderLinks