import Section from "@/components/Section"
import { aboutText } from "@/data/aboutText"
import { highlightParser } from "./highlightParser"

const AboutSection = () => {
   const parsedAboutText = highlightParser(aboutText)

	return (
      <Section id="sobre-mim" title="Sobre Mim" className="flex-col items-start gap-3.75 px-2.5 xxs:px-3.75 xs:px-5 lg:px-7.5 xl:px-62.5 2xl:px-95" wavePosition="bottom">
         <div className="flex flex-col gap-3.75">
            {parsedAboutText.map((text, index) => (
               <p key={index} className="text-sm text-white-85 xs:text-base lg:text-lg">
                  {text}
               </p>
            ))}
         </div>
      </Section>
   )
}

export default AboutSection