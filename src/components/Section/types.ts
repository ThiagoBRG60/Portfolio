interface SectionProps {
   id: string
   title?: string
   description?: string
   children: React.ReactNode
   className?: string
   wavePosition?: "top" | "bottom" | "both"
}

export type { SectionProps }