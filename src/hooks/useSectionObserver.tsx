import { useNavigationStore } from "@/stores/navigationStore"
import { useEffect } from "react"

function useSectionObserver() {
   const { setCurrentActiveSection } = useNavigationStore()

	useEffect(() => {
      const sections = document.querySelectorAll("section")

      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               setCurrentActiveSection(entry.target.id)
            }
         })
      }, {root: null, rootMargin: "0px", threshold: 0.5})

      sections.forEach(section => observer.observe(section))

      return () => observer.disconnect()
   }, [])
}

export default useSectionObserver