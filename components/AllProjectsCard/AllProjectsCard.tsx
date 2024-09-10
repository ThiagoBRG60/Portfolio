import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AllProjectsDetails } from "@/data/allProjectsDetails"
import IProjectCardProps from "./types"

const AllProjectsCard = ({position}: IProjectCardProps) => {
  return (
   <div className="w-[300px] min-h-[400px] overflow-hidden mt-5 md:w-[620px] xl:w-[940px] 2xl:w-full 2xl:px-5 2xl:flex 2xl:justify-center">
      <ul style={{transform: `translateX(-${position})`}} className={`flex gap-[20px] w-max h-full transition duration-[400ms] md:mt-5 2xl:translate-x-0`}>
         {AllProjectsDetails.map((project) => (
            <li key={project.id} className="flex flex-col w-[300px] min-h-[400px] border-[1px] border-highlight rounded-[10px]">
               <div className="w-[300px] h-[150px] rounded-t-[10px]" 
                  style={{backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}/>
               <div className="flex-1 flex flex-col text-center min-h-1/2 py-3 px-5 xs:text-left">
                  <p className="text-textSecondary text-sm mt-4 xxs:mt-2 xs:mt-0 xl:text-base">
                     {project.description}
                  </p>
                  <ul className="flex justify-center flex-wrap gap-x-[10px] gap-y-[5px] mt-[10px] mb-[30px] xs:justify-normal">
                     {project.techs.map((tech, index) => (
                        <li key={index} className="text-textPrimary text-sm xl:text-base">
                           {tech}
                        </li>
                     ))}
                  </ul>
                  <div className="mt-auto flex gap-[20px] text-textSecondary text-sm xl:text-base">
                     <a className="text-highlight text-opacity-70 flex items-center gap-[5px] transition duration-[400ms] hover:text-highlight" href={project.website} target="_blank">
                        Ver Website
                        <FontAwesomeIcon className="w-4" icon={faGlobe}/>
                     </a>
                     <a className="text-highlight text-opacity-70 flex items-center gap-[5px] transition duration-[400ms] hover:text-highlight" href={project.github} target="_blank">
                        Repositório
                        <FontAwesomeIcon className="w-4" icon={faGithub}/>
                     </a>
                  </div>
               </div>
            </li>
         ))}
      </ul>
   </div>
  )
}

export default AllProjectsCard