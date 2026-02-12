import ActiveSectionObserver from "@/components/ActiveSectionObserver"
import BreakpointProvider from "@/components/BreakpointProvider"
import GlobalBackground from "@/components/GlobalBackground"
import ToastCard from "@/components/ToastCard"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import TechnologiesSection from "@/components/TechnologiesSection"
import ProjectsSection from "@/components/ProjectsSection"
import ContactSection from "@/components/ContactSection"

const Home = () => {
	return (
      <>
         <ActiveSectionObserver/>
         <BreakpointProvider/>
         <GlobalBackground/>
         <ToastCard/>

         <main>
            <HeroSection/>
            <AboutSection/>
            <TechnologiesSection/>
            <ProjectsSection/>
            <ContactSection/>
         </main>
      </>
   )
}

export default Home