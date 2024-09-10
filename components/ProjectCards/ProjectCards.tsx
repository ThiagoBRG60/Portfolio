import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import dynamic from "next/dynamic"

const ClientSideImage = dynamic(() => import('next/image'), {ssr: false})

const TechImage = ({src, alt}: ITechImagesProps) => (
  <ClientSideImage src={src} width={35} height={35} alt={alt}/>
)

const ProjectCards = ({projects}: IProjectCardProps) => {
  return (
    <ul className="flex flex-wrap justify-center gap-[20px]">
      {projects.map(project => (
        <li key={project.id} className="relative group w-[320px] h-[170px] flex flex-col justify-end 
            rounded-[10px] border-2 border-highlight p-3 cursor-pointer xs:w-[350px] xs:h-[200px] sm:w-[400px] sm:h-[250px] cardBgDark"
            style={{backgroundImage: `url(${project.image})`, backgroundSize: "cover"}}>
          <h3 className="opacityHover font-bold text-highlight">{project.name}</h3>
          <p className="opacityHover font-semibold text-textSecondary">{project.category}</p>
          <div className="opacityHover flex items-center justify-between">
            <ul className="flex gap-[2px] mt-1">
              {project.techs.map((tech, index) => (
                <li key={index}>
                  <TechImage key={index} src={tech} alt={project.alt[index]}/>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-[10px]">
              <a className="text-white border-2 border-highlight p-1 rounded-full" href={project.preview} target="_blank" aria-label="Acessar Website">
                <FontAwesomeIcon className="w-6" icon={faGlobe}/>
              </a>
              {project.github &&
              <a className="text-white border-2 border-highlight p-1 rounded-full" href={project.github} target="_blank" aria-label="Ir para o repositório no Github">
                <FontAwesomeIcon className="w-6" icon={faGithub}/>
              </a>
              }
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ProjectCards