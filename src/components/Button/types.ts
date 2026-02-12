interface ButtonProps {
   as?: "a" | "button" | "link"
   type?: "button" | "submit"
   onClick?: () => void
   variant?: "primary" | "secondary"
   children: React.ReactNode | string
   className?: string
   href?: string
   download?: string
   target?: "_self" | "_blank"
   disabled?: boolean
   ariaLabel?: string
}

export type { ButtonProps }