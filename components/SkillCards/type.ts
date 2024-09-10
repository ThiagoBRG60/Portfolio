interface SkillsTypes {
   name: string
   image: string
   alt: string
}

interface ISkillCardProps {
   skills: readonly SkillsTypes[]
}