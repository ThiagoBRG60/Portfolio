import Link from "next/link"
import { ButtonProps } from "./types"

const Button = ({as = "button", type = "button", onClick, variant, children, className, href, download, target, disabled, ariaLabel}: ButtonProps) => {
   const Element = as
   const buttonClassName = `flex items-center justify-center gap-1.25 py-0.75 px-2.5 relative rounded-[5px] z-1 overflow-hidden ${variant === "secondary" ? "text-highlight-text bg-background" : "text-white-85 bg-highlight"} border border-highlight duration-300 select-none cursor-pointer active:scale-[0.9] ${className} xxs:px-3.75 xs:py-1.25 xs:font-medium xs:rounded-[10px] md:px-5 lg:hover:scale-[1.05] 2xl:px-6.25`

   return Element === "link" ? (
      <Link onClick={onClick} href={href as string} className={buttonClassName} aria-label={ariaLabel}>
         {children}
      </Link>
   ) : (
      <Element type={type} onClick={onClick} href={href} download={download} target={target} disabled={disabled} className={buttonClassName} aria-label={ariaLabel}>
         {children}
      </Element>
   )
}

export default Button