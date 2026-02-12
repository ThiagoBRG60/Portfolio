import Section from "@/components/Section"
import Button from "@/components/Button"
import HeroPlanet from "@/components/HeroPlanet"

const HeroSection = () => {
	return (
      <Section id="home" className="flex-col xl:flex-row xl:gap-25">
         <div className="flex gap-3.75 opacity-0 animate-slideDown">
            <div className="w-1.25 h-45 relative before:content-[''] before:w-6.25 before:h-6.25 before:absolute before:-top-6 before:left-1/2 before:-translate-x-1/2 before:rounded-full before:bg-highlight after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:bg-(image:--color-hero-accent-gradient) xs:h-50"/>

            <div className="text-white-85">
               <span className="text-xl xs:text-[22px] xl:text-[26px] 2xl:text-[26px]">Olá, eu sou</span>
               <h1 className="leading-8 text-[26px] font-semibold text-highlight xs:text-[26px] xl:text-[32px] xl:leading-9 2xl:text-[36px] 2xl:leading-10">Thiago Correa</h1>
               <span className="text-xl xs:text-[22px] xl:text-[26px] 2xl:text-[26px]">Desenvolvedor Fullstack</span>

               <div className="flex gap-2.5 mt-2.5">
                  <Button as="a" href="/documents/curriculo.pdf" download="curriculo.pdf">
                     Baixar CV
                  </Button>
                  <Button as="a" href="#contato" variant="secondary">
                     Entrar em contato
                  </Button>
               </div>
            </div>
         </div>

         <div className="w-62.5 h-62.5 xs:w-70 xs:h-70 md:w-82.5 md:h-82.5 xl:w-87.5 xl:h-87.5 2xl:w-100 2xl:h-100">
            <HeroPlanet/>
         </div>
      </Section>
   )
}

export default HeroSection