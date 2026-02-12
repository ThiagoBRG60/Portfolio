"use client"
import { GlobalBackgroundProps } from "./types"
import { useNavigationStore } from "@/stores/navigationStore"

const GlobalBackground = ({variant}: GlobalBackgroundProps) => {
   const { currentActiveSection } = useNavigationStore()

	return (
      <div style={{backgroundImage: "url(/images/background.png)", backgroundPosition: "center"}} className={`w-full h-full fixed top-0 left-0 -z-1 ${currentActiveSection !== "home" && "blur-[3px]"} duration-500 ${variant === "darker" && "opacity-50"}`}/>
   )
}

export default GlobalBackground