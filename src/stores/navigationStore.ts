import { create } from "zustand"

interface NavigationStoreProps {
   isMobileMenuActive: boolean
   currentActiveSection: string
   setIsMobileMenuActive: (value: boolean) => void
   setCurrentActiveSection: (sectionName: string) => void
}

const useNavigationStore = create<NavigationStoreProps>((set, get) => ({
   isMobileMenuActive: false,
   currentActiveSection: "home",
   setIsMobileMenuActive: (value) => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches

      if (isMobile) {
         set({isMobileMenuActive: value})
   
         const { isMobileMenuActive } = get()
         const setBodyScroll = (type: "hidden" | "auto") => document.body.style.overflow = type
   
         setBodyScroll(isMobileMenuActive ? "hidden" : "auto")
      }
   },
   setCurrentActiveSection: (sectionName) => set({currentActiveSection: sectionName})
}))

export { useNavigationStore }