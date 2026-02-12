import { useBreakpointStore, BreakpointType } from "@/stores/breakpointStore";
import { useEffect } from "react";

function useBreakpoint() {
   const { setBreakpoint } = useBreakpointStore()

   useEffect(() => {
      const breakpoints: BreakpointType[] = ["1440px", "768px", "412px", "320px"]
      const mediaQueries: {[key: string]: MediaQueryList} = {}
      
      for (const breakpoint of breakpoints) {
         mediaQueries[breakpoint] = window.matchMedia(`(min-width: ${breakpoint})`)
      }

      function getMatch() {
         for (const [key, value] of Object.entries(mediaQueries)) {
            if (value.matches) return key
         }
         
         return "320px"
      }

      const handleChange = () => setBreakpoint(getMatch() as BreakpointType)
      handleChange()

      Object.values(mediaQueries).forEach(mediaQuery => {
         mediaQuery.addEventListener("change", handleChange)
      })
      
      return () => {
         Object.values(mediaQueries).forEach(mediaQuery => {
            mediaQuery.removeEventListener("change", handleChange)
         })
      }
   }, [])
}

export { useBreakpoint }