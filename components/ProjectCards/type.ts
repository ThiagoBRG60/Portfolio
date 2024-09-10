interface ITechImagesProps {
   src: string
   alt: string
}

interface ProjectTypes {
   id: number
   name: string
   image: string
   category: string
   techs: readonly string[]
   alt: readonly string[]
   preview: string
   github?: string
}

interface IProjectCardProps {
   projects: readonly ProjectTypes[]
}