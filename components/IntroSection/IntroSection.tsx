import { Poppins } from "next/font/google"
import Planet from "../Planet/Planet"
import Button from "../Button/Button"
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks"

const poppins = Poppins({weight: ["700"], subsets: ['latin']})

const IntroSection = () => {
  return (
    <section className="h-auto flex flex-col items-center gap-[50px] pt-28 bg-center bg-intro-section-bg bg-cover bg-no-repeat portrait:sm:h-dvh landscape:lg:h-dvh md:pt-32 xl:flex-row xl:justify-center xl:gap-0">
      <div className="animate-fadeInMove relative xxs:introSectionDetail  xl:self-start xl:pt-10 2xl:pt-20">
         <h1 className={`${poppins.className} font-bold text-textPrimary text-[24px] xs:text-[26px] md:text-[30px]`}>
            Olá, eu sou o
            <span className="text-highlight">&nbsp;Thiago</span>
         </h1>
         <p className="text-xl font-bold text-textSecondary">Desenvolvedor Front-End</p>
         <div className="flex gap-[10px] mt-4">
            <Button className={"buttonStyle bg-highlight text-sm xs:text-base md:w-[120px]"} href="./pdf/curriculo.pdf" download={"curriculo.pdf"}>
               Baixar CV
            </Button>
            <Button className="buttonStyle text-sm xs:text-base w-[165px] md:w-[175px]" href="#contato">
               Entrar em contato
            </Button>
         </div>
         <SocialMediaLinks/>
      </div>
      <Planet/>
    </section>
  )
}

export default IntroSection