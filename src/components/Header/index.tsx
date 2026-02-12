"use client"
import { useNavigationStore } from "@/stores/navigationStore"
import { useDraggableMenu } from "@/hooks/useDraggableMenu"
import { usePathname } from "next/navigation"
import { navLinks } from "@/data/navLinks"
import Icon from "@/components/Icon"
import Link from "next/link"

const Header = () => {
   const { isMobileMenuActive, currentActiveSection, setIsMobileMenuActive } = useNavigationStore()
   const { menuRef } = useDraggableMenu(() => setIsMobileMenuActive(false))
   const pathname = usePathname()
   const isHomePage = pathname === "/"

	return (
      <header className="w-full h-12.5 fixed flex items-center px-2.5 top-0 left-0 z-10 after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:backdrop-blur-[15px] after:border-b after:border-highlight after:bg-background-50 after:-z-1 xs:h-15 xs:px-3.75 lg:px-7.5 xl:h-17.5">
         <nav className="w-full flex items-center justify-between xl:justify-around">
            {(() => {
               const logoContent = (
                  <span className="flex items-center gap-1.25 font-semibold text-white-85 xs:text-lg xl:text-xl xl:font-medium">
                     <span className="text-lg text-highlight xs:text-xl xl:text-[22px]">{"<"}</span>
                     Thiago Correa
                     <span className="text-lg text-highlight xs:text-xl xl:text-[22px]">{"/>"}</span>
                  </span>
               )

               return isHomePage ? <a onClick={() => setIsMobileMenuActive(false)} href="#home">{logoContent}</a> : <Link onClick={() => setIsMobileMenuActive(false)} href="/#home">{logoContent}</Link>
            })()}

            <button onClick={() => setIsMobileMenuActive(!isMobileMenuActive)} className="flex items-center md:hidden" aria-label={isMobileMenuActive ? "Fechar menu" : "Abrir menu"}>
               <Icon name={isMobileMenuActive ? "x-mark" : "bars"} className={`${isMobileMenuActive && "rotate-90"} text-highlight text-lg duration-300 xxs:text-lg xs:text-[22px]`} type="fontAwesome"/>
            </button>

            <ul ref={menuRef} className={`w-full h-full flex flex-col gap-2 items-center justify-center fixed top-0 ${isMobileMenuActive ? "left-0" : "-left-full"} touch-pan-y will-change-transform duration-500 backdrop-blur-[10px] select-none border-r border-r-highlight-25 bg-background-90 -z-1 after:content-[''] after:w-1 after:h-12.5 after:absolute after:top-1/2 after:right-2.5 after:-translate-y-1/2 after:rounded-full after:bg-highlight-50 md:static md:w-auto md:flex-row md:gap-5 md:bg-transparent md:z-1 md:after:hidden`} aria-hidden={!isMobileMenuActive}>
               {navLinks.map((navLink, index) => {
                  const navLinkClassName = `${currentActiveSection === navLink.href.replace("#", "") ? "text-white-85 after:w-full after:left-0" : "text-white-60 after:w-0 after:left-1/2"} relative text-xl font-medium duration-500 after:content-[''] after:h-1 after:absolute after:-bottom-1.25 after:rounded-full after:duration-500 after:bg-highlight xs:text-[22px] md:text-lg lg:hover:after:w-full lg:hover:after:left-0 lg:hover:text-white-85 xl:text-xl`

                  return (
                     <li key={index} onClick={() => setIsMobileMenuActive(false)} className={`${isMobileMenuActive ? "opacity-0 animate-slideRight" : "opacity-100"}`} style={{animationDelay: isMobileMenuActive ? `${(index + 1) * 100}ms` : "0ms"}}>
                        {isHomePage ? (
                           <a href={navLink.href} className={navLinkClassName}>
                              {navLink.label}
                           </a>
                        ) : (
                           <Link href={`/${navLink.href}`} className={navLinkClassName}>
                              {navLink.label}
                           </Link>
                        )}
                     </li>
                  )
               })}
            </ul>
         </nav>
      </header>
   )
}

export default Header