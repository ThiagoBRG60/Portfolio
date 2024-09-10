import { IconDefinition } from "@fortawesome/free-brands-svg-icons"

interface ContactTypes {
   name: string
   info: string
   icon: IconDefinition
   href: string
}

interface IContactProps {
   contactInfo: ContactTypes
}

export default IContactProps