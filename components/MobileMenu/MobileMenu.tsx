'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import HeaderLinks from "../HeaderLinks/HeaderLinks"
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks"

const MobileMenu = ({links, isOtherPage}: IHeaderProps) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(prev => !prev)
  }

  return (
    <>
      <FontAwesomeIcon onClick={handleClick} className="w-[20px] h-[20px] lg:hidden" icon={active ? faXmark : faBars}/>
      <div className={`${active && 'translate-x-0'} flex flex-col items-center pt-40 fixed top-[60px] left-0 w-full h-dvh bg-background bg-opacity-[0.97] -translate-x-[100%] transition duration-[400ms] ease-in-out landscape:pt-5 md:top-[80px] lg:hidden`}>
        <HeaderLinks handleClick={handleClick} links={links} className="flex-col items-center" isMobileMenu={true} isOtherPage={isOtherPage}/>
        <SocialMediaLinks/>
      </div>
    </>
  )
}

export default MobileMenu