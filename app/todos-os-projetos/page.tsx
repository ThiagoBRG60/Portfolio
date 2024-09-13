'use client'
import AllProjectsCard from "@/components/AllProjectsCard/AllProjectsCard"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import { headerLeaveLink } from "@/data/headerHomeLinks"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AllProjects = () => {
  return (
   <>
    <Header links={headerLeaveLink} isOtherPage={true}/>
    <main className="flex flex-col min-h-dvh">
      <section className="flex-1 flex flex-col gap-[5px] justify-center items-center py-20 px-[10px]">
        <h2 className="text-textPrimary font-bold text-xl 2xl:text-2xl">Todos os projetos</h2>
        <p className="text-textSecondary text-sm text-center xl:text-base">
          Uma lista de projetos que eu me orgulho e que gostei de ter feito. 
          Mais projetos estão disponíveis no Github.
        </p>
        <AllProjectsCard/>
        <a href="https://github.com/ThiagoBRG60?tab=repositories" className="buttonStyle flex gap-[10px] px-[15px] mt-[40px]" target="_blank">
          Projetos do Github
          <FontAwesomeIcon icon={faArrowRightFromBracket} className="w-4"/>
        </a>
      </section>
    </main>
    <Footer/>
   </>
  )
}

export default AllProjects