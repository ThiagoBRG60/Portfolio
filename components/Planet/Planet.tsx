import { Suspense } from "react"
import PurplePlanet from "./PurplePlanet"

const Loading = () => {
  return <div className="animate-spin w-20 h-20 rounded-full border-b-4 border-4 border-b-highlight border-background"></div>
}

const Planet = () => {
  return (
    <div className="flex flex-col items-center w-[300px] h-[300px] xxs:w-[350px] xxs:h-[350px] md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[550px] 2xl:h-[550px]">
      <Suspense fallback={<Loading/>}>
        <PurplePlanet/>
      </Suspense>
      <span className="text-textSecondary text-[10px] xxs:text-xs">
         Purple Planet, design por: Yo.Ri
         <a className="text-highlight" href="">&nbsp;(https://skfb.ly/6UErL)</a>.
      </span>
    </div>
  )
}

export default Planet