import Link from "next/link"

const Button = ({children, className, href, download, isLink}: ButtonProps) => {
  if (isLink) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }else {
    return (
     <a href={href} className={className} download={download}>
        {children}
     </a>
    )
  }

}

export default Button