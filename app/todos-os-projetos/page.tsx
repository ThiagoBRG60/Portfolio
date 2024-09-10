'use client'
import AllProjectsCard from "@/components/AllProjectsCard/AllProjectsCard"
import CarouselButton from "@/components/CarouselButton/CarouselButton"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import { headerLeaveLink } from "@/data/headerHomeLinks"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

const AllProjects = () => {
  const positions = ['0px', '320px', '640px', '960px', '1280px'];
  const [count, setCount] = useState(0);
  const [cardPosition, setCardPosition] = useState(positions[0]);

  const incrementPosition = () => {
    if (count >= positions.length - 1) return
    setCount(prev => prev + 1);
  };

  const decrementPosition = () => {
    if (count <= 0) return
    setCount(prev => prev - 1);
  };

  useEffect(() => {
    setCardPosition(positions[count]);
  }, [count])

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
        <AllProjectsCard position={cardPosition}/>
        <CarouselButton direction="left" onClick={decrementPosition}/>
        <CarouselButton direction="right" onClick={incrementPosition}/>
        <ul className="flex gap-[5px] mt-5 2xl:hidden">
          {positions.map((_, index) => (
            <span key={index} className={`${count === index ? 'bg-highlight' : 'bg-textSecondary'} w-[10px] h-[10px] rounded-full transition duration-[400ms]`}></span>
          ))}
        </ul>
        <a href="https://github.com/ThiagoBRG60?tab=repositories" className="buttonStyle flex gap-[10px] px-[15px] mt-[20px]" target="_blank">
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