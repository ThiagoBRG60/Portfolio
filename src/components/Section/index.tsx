import { SectionProps } from "./types"
import WaveDivider from "@/components/WaveDivider"

const Section = ({id, title, description, children, className, wavePosition}: SectionProps) => {
	return (
      <section id={id} className={`min-h-svh flex items-center justify-center py-20 relative xs:py-25 lg:min-h-dvh lg:py-30 xl:py-35 2xl:py-45 ${className}`}>
         {wavePosition && (wavePosition === "top" || wavePosition === "both") &&
            <WaveDivider position="top"/>
         }

         {title &&
            <h2 className="text-[22px] font-semibold text-transparent bg-clip-text bg-(image:--color-section-title-gradient) xs:text-[24px] xl:text-[26px]">
               {title}
            </h2>
         }

         {description &&
            <p className="text-center text-sm text-white-85 xs:text-base md:w-[80%] lg:leading-6 lg:text-lg lg:w-[70%] xl:w-[50%] 2xl:w-[45%]">
               {description}
            </p>
         }

         {children}

         {wavePosition && (wavePosition === "bottom" || wavePosition === "both") &&
            <WaveDivider position="bottom"/>
         }
      </section>
   )
}

export default Section