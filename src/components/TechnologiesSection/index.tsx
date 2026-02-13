"use client"
import { useBreakpointStore } from "@/stores/breakpointStore"
import { useTechnologiesStore } from "@/stores/technologiesStore"
import { technologyDefaults } from "@/data/technologyDefaults"
import { useScrollShadow } from "@/hooks/useScrollShadow"
import { techFilters } from "@/data/techFilters"
import Section from "@/components/Section"
import Button from "@/components/Button"
import Icon from "@/components/Icon"

const TechnologiesSection = () => {
   const { breakpoint } = useBreakpointStore()
   const { visibleTechnologies, visibleCardState, activeFilter, cardAnimationKey, setVisibleCardState, setActiveFilter } = useTechnologiesStore()
   const { technologyListRef, shadowPosition, isScrollable } = useScrollShadow(breakpoint, visibleCardState)

	return (
      <Section id="tecnologias" title="Tecnologias e Ferramentas" className="flex-col gap-2.5 px-1.25 xxs:px-2.5" wavePosition="both" description="Abaixo estão as tecnologias que utilizo no desenvolvimento de projetos, incluindo frontend, backend e ferramentas de desenvolvimento.">
         <div className="grid grid-cols-2 gap-1.25 mt-1.25 xs:gap-2.5 xs:mt-2.5 lg:grid-cols-4">
            {techFilters.map((filterBtn, index) => {
               const isActiveButton = activeFilter === filterBtn.label

               return (
                  <Button key={index} onClick={() => !isActiveButton && setActiveFilter(filterBtn)} variant={isActiveButton ? "primary" : "secondary"}>
                     {filterBtn.label}
                  </Button>
               )
            })}
         </div>

         <div className={`${isScrollable && "pr-1.25 translate-x-[2.5px] xl:pr-2.5"} overflow-hidden relative after:content-[''] after:w-full after:h-full after:absolute after:bottom-0 after:left-0 after:bg-[linear-gradient(to_bottom,transparent_80%,var(--color-background))] after:duration-300 after:pointer-events-none before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[linear-gradient(to_top,transparent_80%,var(--color-background))] before:duration-300 before:pointer-events-none before:z-1 ${shadowPosition === "none" ? "after:opacity-0 before:opacity-0" : shadowPosition === "top" ? "after:opacity-100 before:opacity-0" : shadowPosition === "bottom" ? "after:opacity-0 before:opacity-100" : "after:opacity-100 before:opacity-100"}`}>
            <ul ref={technologyListRef} style={{gridTemplateColumns: `repeat(${Math.min(technologyDefaults[breakpoint].grid, visibleTechnologies.length)}, minmax(0, 1fr))`}} className={`max-h-98.75 grid gap-2.5 mt-2.5 ${isScrollable ? "overflow-y-auto pr-2.5 translate-x-1.25 xl:pr-3.75 xl:translate-x-2.5" : "overflow-hidden"} scrollbar-thin xs:mt-3.75`}>
               {(() => {
                  const slicedTechnologies = visibleTechnologies.slice(0, technologyDefaults[breakpoint].cards * visibleCardState[breakpoint].blockCount)

                  return slicedTechnologies.map((technology, index) => (
                     <li key={technology.name} className={`w-27.5 h-26.25 ${(index === 0 || index === slicedTechnologies.length - 1) && "scroll-marker"} xs:w-28.75 xs:h-27.5 md:w-30 md:h-28.75 xl:w-31.25 xl:h-30 2xl:w-32.5 2xl:h-31.25`}>
                        <div key={technology.name + cardAnimationKey} style={{animationDelay: `${(index % technologyDefaults[breakpoint].grid) * 50}ms`}} className="w-full h-full flex flex-col gap-1.25 items-center justify-center rounded-[10px] relative overflow-hidden opacity-0 animate-scaleUp border border-highlight bg-tech-card-background after:content-[''] after:w-full after:h-1.25 after:absolute after:top-0 after:left-0 after:bg-(image:--color-tech-card-accent) lg:duration-200 lg:cursor-pointer lg:hover:scale-[0.95] lg:hover:brightness-125">
                           <span className="w-10 h-10 flex items-center justify-center rounded-full bg-tech-card-icon-background md:w-11.25 md:h-11.25">
                              <Icon name={technology.icon} className="w-[55%] h-[55%] 2xl:w-[60%] 2xl:h-[60%]" type="techIcons"/>
                           </span>

                           <p className="font-medium text-sm text-center text-white-85 md:text-base">
                              {technology.name}
                           </p>
                        </div>
                     </li>
                  ))
               })()}
            </ul>
         </div>

         {visibleTechnologies.length > technologyDefaults[breakpoint].cards && (() => {
            const isAllCardsVisible = (technologyDefaults[breakpoint].cards * visibleCardState[breakpoint].blockCount) >= visibleTechnologies.length

            return (
               <Button onClick={() => isAllCardsVisible ? setVisibleCardState("reset", breakpoint) : setVisibleCardState("increment", breakpoint)} className="px-5 mt-1.25 xs:mt-2.5 xxs:px-6.25 md:px-6.25" variant="secondary">
                  {isAllCardsVisible ? "Mostrar menos" : "Mostrar mais"}
               </Button>
            )
         })()}
      </Section>
   )
}

export default TechnologiesSection