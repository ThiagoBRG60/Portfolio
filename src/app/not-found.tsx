"use client"
import { useState } from "react"
import { Manrope } from "next/font/google"
import HeroPlanet from "@/components/HeroPlanet"
import Icon from "@/components/Icon"
import Button from "@/components/Button"

const manrope = Manrope({subsets: ["latin"], weight: "800"})

const NotFound = () => {
   const [isModelLoaded, setIsModelLoaded] = useState(false)

	return (
      <main className="w-full flex-1 px-2.5 flex flex-col items-center justify-center relative xs:px-3.75">
         {(() => {
            const containerSize = {width: "w-27.5 xs:w-30 sm:w-35 xl:w-40 2xl:w-45", height: "h-27.5 xs:h-30 sm:h-35 xl:h-40 2xl:h-45"}
            const spanClassName = `${containerSize.height} leading-none font-medium text-[120px] xs:text-[130px] sm:text-[150px] xl:text-[170px] 2xl:text-[190px]`

            return (
               <div className={`flex flex-wrap items-center text-white-60 ${manrope.className}`} aria-hidden="true">
                  <span className={spanClassName}>4</span>

                  <div className={`${containerSize.width} ${containerSize.height} overflow-hidden drop-shadow-[0_0_100px_#6f32f3ab]`}>
                     <div className={`flex flex-col items-center gap-1.25 ${isModelLoaded && "animate-slideUp"}`}>
                        <span className={spanClassName}>0</span>
                        <div className={`${containerSize.width} ${containerSize.height}`}>
                           <HeroPlanet onLoad={() => setIsModelLoaded(true)}/>
                        </div>
                     </div>
                  </div>

                  <span className={spanClassName}>4</span>
               </div>
            )
         })()}

         <h1 className="mt-3.75 text-lg font-medium text-highlight-text xs:text-xl xl:text-[22px] 2xl:text-[24px]">
            Página não disponível
         </h1>

         <p className="mt-1.25 text-center text-sm text-white-85 xs:text-base sm:w-[60%] lg:w-[55%] xl:text-lg">
            O recurso solicitado não foi encontrado. Utilize o menu de navegação ou retorne ao início.
         </p>

         <Button as="link" href="/#home" className="mt-3.75 px-7.5 xxs:px-8 xs:px-10 md:px-12 xl:px-15 2xl:px-16">
            <Icon name="arrow-left" type="fontAwesome"/>
            Voltar
         </Button>
      </main>
   )
}

export default NotFound