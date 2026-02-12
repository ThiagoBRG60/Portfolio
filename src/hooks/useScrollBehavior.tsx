import { usePathname } from "next/navigation"
import { useLayoutEffect } from "react"

function useScrollBehavior() {
   const pathname = usePathname()

   useLayoutEffect(() => {
      document.documentElement.style.scrollBehavior = pathname === "/" ? "smooth" : "auto"
   }, [pathname])
}

export { useScrollBehavior }