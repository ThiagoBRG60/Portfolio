import { ProjectDetailsPageProps } from "./types"
import { projectCardActions } from "@/data/projectCardActions"
import { projectDetailsSections } from "@/data/projectDetailsSections"
import { FeaturesType, ProjectDetailType, projects, ProjectsProps } from "@/data/projects"
import { notFound } from "next/navigation"
import GlobalBackground from "@/components/GlobalBackground"
import VideoContainer from "@/components/VideoContainer"
import Icon from "@/components/Icon"
import Button from "@/components/Button"
import Link from "next/link"

const ProjectDetailsPage = async ({params}: ProjectDetailsPageProps) => {
   const { slug } = await params
   const currentProject = projects.find(project => project.slug === slug)

   if (!currentProject) notFound()

   return (
      <main className="w-full min-h-dvh py-20 px-2.5 xs:pt-22.5 xs:px-3.75 sm:flex sm:justify-center lg:pt-25">
         <GlobalBackground variant="darker"/>

         <article className="sm:max-w-125 lg:max-w-150 xl:max-w-237.5">
            <Link href="/#projetos" className="flex items-center gap-1.25 font-semibold text-sm text-highlight xs:text-base xl:text-lg">
               <Icon name="arrow-left" type="fontAwesome"/>
               <p className="relative after:content-[''] after:w-0 after:h-0.5 after:absolute after:-bottom-px after:left-1/2 after:rounded-full after:duration-500 after:bg-highlight lg:hover:after:w-full lg:hover:after:left-0">
                  Voltar aos projetos
               </p>
            </Link>

            <div className="mt-3.75 xl:grid xl:grid-cols-[65%_35%] xl:[grid-template-areas:'main_sidebar'] xl:gap-7.5">
               <aside className="flex flex-col gap-2.5 xl:[grid-area:sidebar] xl:max-h-fit xl:p-5 xl:sticky xl:top-25 xl:rounded-[10px] xl:border xl:border-highlight-25 xl:bg-(image:--color-contact-card-background)">
                  <h1 className="self-start font-semibold text-xl text-transparent bg-clip-text bg-(image:--color-project-card-title-gradient) xs:text-[22px]">
                     {currentProject.name}
                  </h1>

                  <p className="wrap-break-word text-sm text-white-85 xs:text-base">
                     {currentProject.shortDescription}
                  </p>

                  <VideoContainer slug={slug} variant="mobile"/>

                  <hr className="hidden xl:block xl:my-1.25 xl:text-highlight-25"/>

                  <h2 className="font-medium text-lg text-white-85 xs:text-xl">
                     Tecnologias
                  </h2>

                  <ul className="flex flex-wrap gap-1.25">
                     {currentProject.technologies.map((technology, index) => (
                        <li key={index} className="flex items-center gap-1.25 py-1.25 px-2.5 rounded-[5px] border border-highlight-50 bg-project-card-tech-background xs:py-1.5 sm:gap-2.5">
                           <Icon name={technology.icon} className="w-3.75 h-3.75 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5" type="techIcons"/>
                           
                           <p className="font-medium text-xs text-white-85 xs:text-sm">
                              {technology.name}
                           </p>
                        </li>
                     ))}
                  </ul>

                  <hr className="text-highlight-25 my-1.25 xl:my-2.5"/>

                  <div className="flex gap-2.5 xl:flex-col">
                     {projectCardActions.map((action, index) => {
                        const isValidButton = action.isDynamicHref && Object.keys(currentProject).includes(action.href)
                        const buttonHref = currentProject[action.href as "repoUrl" | "demoUrl"]

                        return isValidButton && (
                           <Button key={index} href={buttonHref} as="a" target="_blank" className={`flex-1 py-1.25 sm:py-2 ${action.label === "Demo" && "xl:border-highlight-50 xl:bg-project-card-tech-background"}`} variant={`${action.label === "Demo" ? "secondary" : "primary"}`}>
                              <Icon name={action.icon} className={`${action.label === "Demo" && "text-sm"}`} type="fontAwesome"/>
                              {action.label}
                           </Button>
                        )
                     })}
                  </div>
               </aside>

               <div className="flex flex-col gap-5 mt-5 xl:[grid-area:main] xl:mt-0">
                  <section className="hidden xl:block">
                     <VideoContainer slug={slug} variant="desktop"/>
                  </section>

                  {projectDetailsSections.map((section, index) => {
                     const sectionContent = currentProject[section.key as keyof ProjectsProps]

                     return (
                        <section key={index} className="flex flex-col gap-2.5">
                           <h2 className="flex items-center gap-2.5 font-medium text-lg text-highlight-text xs:text-xl xl:text-[22px]">
                              {section.title}
                              <hr className="flex-1 text-highlight-25"/>
                           </h2>

                           {section.key === "longDescription" ? (
                              <p className="whitespace-pre-line text-sm text-white-85 xs:text-base xl:text-lg">
                                 {sectionContent as string}
                              </p>
                           ) : section.key === "features" ? (
                              <ul className="flex flex-col gap-2.5">
                                 {(sectionContent as FeaturesType[]).map((feature, idx) => (
                                    <li key={idx} className="p-2.5 text-highlight rounded-[10px] border border-highlight-25 bg-(image:--color-contact-card-background)">
                                       <span className="w-5 h-5 flex items-center justify-center rounded-[5px] bg-highlight-25 xs:w-6.25 xs:h-6.25 xl:w-7.5 xl:h-7.5">
                                          <Icon name={feature.icon} className="text-xs xs:text-sm xl:text-base" type="fontAwesome"/>
                                       </span>

                                       <h3 className="font-medium text-sm mt-2.5 xs:text-base xl:text-lg">
                                          {feature.title}
                                       </h3>

                                       <p className="text-xs text-white-85 mt-1.25 xs:text-sm xl:text-base">
                                          {feature.description}
                                       </p>
                                    </li>
                                 ))}
                              </ul>
                           ) : (
                              <ul className="flex flex-col gap-3.75">
                                 {(sectionContent as ProjectDetailType[]).map((item, idx) => (
                                    <li key={idx} className="flex flex-col gap-1.25 pl-2.5 border-l-2 border-l-highlight-50">
                                       <h3 className="font-medium text-sm text-white-85 xs:text-base xl:text-lg">
                                          {item.title}
                                       </h3>
                                       
                                       <p className="text-xs text-white-60 xs:text-sm xl:text-base">
                                          {item.description}
                                       </p>
                                    </li>
                                 ))}
                              </ul>
                           )}
                        </section>
                     )
                  })}
               </div>
            </div>
         </article>
      </main>
   )
}

export default ProjectDetailsPage