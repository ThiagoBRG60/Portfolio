import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../Button/Button"
import ProjectCards from "../ProjectCards/ProjectCards"
import { projectCardDetails } from "@/data/projectCardDetails"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"

const ProjectsSection = () => {
  return (
    <section id="projetos" className="relative h-auto pt-32 pb-10 px-5 flex flex-col gap-[30px] items-center justify-center portrait:sm:h-auto portrait:sm:peaksBgTop landscape:lg:peaksBgTop landscape:xl:h-dvh xl:pt-48">
      <h2 className="font-bold text-xl text-textPrimary 2xl:text-2xl">Trabalhos Freelancer</h2>
      <ProjectCards projects={projectCardDetails.freelancer}/>
      <h2 className="font-bold text-xl text-textPrimary 2xl:text-2xl">Projetos Pessoais</h2>
      <ProjectCards projects={projectCardDetails.personal}/>
      <Button className="buttonStyle w-[220px] gap-[5px]" href="/todos-os-projetos" isLink={true}>
         Ver todos os projetos
         <FontAwesomeIcon className="w-4" icon={faArrowRightFromBracket}/>
      </Button>
    </section>
  )
}

export default ProjectsSection