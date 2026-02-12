import { IconProps } from "./types"

const Icon = ({name, className, type}: IconProps) => {
   const iconPaths = {
      fontAwesome: "/images/font-awesome-icons.svg",
      techIcons: "/images/tech-icons.svg"
   }

	return (
      <svg className={className} width="1em" height="1em" aria-hidden="true">
         <use href={`${iconPaths[type]}#${name}`}/>
      </svg>
   )
}

export default Icon