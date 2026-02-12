"use client"
import { useBreakpointStore } from "@/stores/breakpointStore"
import { projectCardActions } from "@/data/projectCardActions"
import { Swiper, SwiperSlide } from "swiper/react"
import { swiperConfig } from "@/data/swiperConfig"
import { projects } from "@/data/projects"
import Section from "@/components/Section"
import Icon from "@/components/Icon"
import Button from "@/components/Button"

const ProjectsSection = () => {
   const { breakpoint } = useBreakpointStore()

	return (
      <Section id="projetos" title="Projetos" className="flex-col gap-2.5 px-1.25 xxs:px-2.5" wavePosition="top" description="Alguns dos projetos que desenvolvi, com aplicações completas do frontend ao backend. Mais projetos estão disponíveis no meu GitHub.">
         <Swiper className="w-full h-71.25 mt-1.25 sm:h-82.5 sm:mt-2.5 lg:h-88.75 xl:h-96.25 2xl:h-108.75" {...swiperConfig}>
            <Icon name="chevron-left" className="swiper-button-prev swiper-custom-prev" type="fontAwesome"/>
            <Icon name="chevron-right" className="swiper-button-next swiper-custom-next" type="fontAwesome"/>

            {projects.map((project, index) => (
               <SwiperSlide key={index} style={{["--project-image"]: `url('${project.imageSrc}')`} as React.CSSProperties} className="flex-col justify-end p-2.5 rounded-[10px] border border-highlight-50 bg-(image:--color-project-card-gradient) before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:rounded-[inherit] before:bg-no-repeat before:bg-size-[100%_100%] before:opacity-50 before:shadow-[inset_0_0_50px_15px_#000000cc] before:-z-1 sm:p-3.75 2xl:p-5">
                  <div className="flex flex-col gap-1.25 p-2.5 rounded-[10px] border border-highlight-50 backdrop-blur-[10px] bg-project-card-info-background sm:p-3.75">
                     <h3 className="self-start font-semibold text-transparent bg-clip-text bg-(image:--color-project-card-title-gradient) xs:text-lg lg:text-xl xl:text-[22px]">
                        {project.name}
                     </h3>

                     <p className="text-xs text-white-85 line-clamp-2 xs:text-sm xl:text-base 2xl:line-clamp-3">
                        {project.longDescription}
                     </p>
                     
                     <ul className="flex flex-wrap gap-1.25">
                        {(() => {
                           const maxTechnologies = breakpoint === "320px" ? 5 : 7
                           const remainingTechnologies = project.technologies.length - maxTechnologies

                           return (
                              <>
                                 {project.technologies.slice(0, maxTechnologies).map((technology, idx) => (
                                    <li key={idx} title={technology.name} className="p-1.25 mt-1.25 rounded-[5px] border border-highlight-50 bg-project-card-tech-background">
                                       <Icon name={technology.icon} className="w-4 h-4 highlighted-icons xs:w-4.5 xs:h-4.5 lg:w-5 lg:h-5 xl:w-5.5 xl:h-5.5" type="techIcons"/>
                                    </li>
                                 ))}

                                 {project.technologies.length > maxTechnologies && (
                                    <li className="flex items-center px-0.75 mt-1.25 font-medium text-sm text-highlight rounded-[5px] border border-highlight-50 bg-project-card-tech-background xs:px-1.25 xl:text-base">
                                       +{remainingTechnologies >= 99 ? "99" : remainingTechnologies}
                                    </li>
                                 )}
                              </>
                           )
                        })()}
                     </ul>

                     <div className="flex flex-wrap gap-1.25 mt-2.5 lg:gap-2.5">
                        {projectCardActions.map((action, index) => {
                           const buttonHref = project[action.href as "repoUrl" | "demoUrl"]
                           const hasAction = Object.keys(project).includes(action.href)

                           return (!action.isDynamicHref || hasAction) && (
                              <Button key={index} as={action.isDynamicHref ? "a" : "link"} href={buttonHref ? buttonHref : `${action.href}/${project.slug}`} target={action.isDynamicHref ? "_blank" : "_self"} className={`text-sm ${!action.isDynamicHref && "bg-background-50"} xl:text-base`} variant={action.isDynamicHref ? "primary" : "secondary"} ariaLabel={`${action.label} do projeto ${project.name}`}>
                                 {!action.isDynamicHref ? action.label : <Icon name={action.icon} className={`${action.label === "Demo" && "text-xs xl:text-sm"}`} type="fontAwesome"/>}
                                 {!action.isDynamicHref ? <Icon name={action.icon} className="text-xs" type="fontAwesome"/> : (breakpoint === "320px" && action.label === "Repositório") ? "Repo" : action.label}
                              </Button>   
                           )
                        })}
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>

         <Button as="a" href="https://github.com/ThiagoBRG60?tab=repositories" target="_blank" className="xs:px-6.25 lg:px-7.5 xl:mt-1.25" variant="secondary">
            <Icon name="github" type="fontAwesome"/>
            Ver todos os projetos
         </Button>
      </Section>
   )
}

export default ProjectsSection