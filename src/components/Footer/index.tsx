"use client"
import { useEffect, useState } from "react"
import SocialCards from "@/components/SocialCards"

const Footer = () => {
   const [currentYear, setCurrentYear] = useState<number>()

   useEffect(() => {
      setCurrentYear(new Date().getFullYear())
   }, [])

	return (
      <footer className="h-10 px-2.5 flex items-center justify-between border-t border-t-highlight backdrop-blur-[15px] bg-background-50 xs:h-12.5 xs:px-3.75 lg:px-7.5 xl:h-15 xl:justify-around">
         <p className="flex gap-1.25 font-medium text-sm text-white-85 xxs:font-bold xl:text-base">
            &copy; {currentYear}
            <span className="text-highlight-text">Thiago Correa</span>
         </p>

         <SocialCards variant="small"/>
      </footer>
   )
}

export default Footer