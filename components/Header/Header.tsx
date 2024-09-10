import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import MobileMenu from "../MobileMenu/MobileMenu"
import HeaderLinks from "../HeaderLinks/HeaderLinks"

const Header = ({links, isOtherPage}: IHeaderProps) => {
  return (
    <header className="w-full h-[60px] flex justify-between items-center fixed z-20 px-[25px] border-b-[1px] border-highlight border-opacity-50 text-textPrimary bg-background md:h-20 lg:justify-around">
      <h2 className="flex items-center font-bold text-lg">
        <FontAwesomeIcon className="headerIcon mr-[5px]" icon={faChevronLeft}/>
        Thiago Correa
        <span className="text-2xl font-bold text-highlight ml-[5px]">/</span>
        <FontAwesomeIcon className="headerIcon" icon={faChevronRight}/>
      </h2>
      <nav>
        <HeaderLinks links={links} isMobileMenu={false} isOtherPage={isOtherPage}/>
      </nav>
      <MobileMenu links={links} isOtherPage={isOtherPage}/>
    </header>
  )
}

export default Header