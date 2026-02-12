"use client"
import { HeroPlanetProps } from "./types"
import dynamic from "next/dynamic"
import LoadingSpinner from "@/components/LoadingSpinner"

const Planet = dynamic(() => import("@/components/Planet"), {ssr: false})

const HeroPlanet = ({fallback = <LoadingSpinner/>, onLoad}: HeroPlanetProps) => {
	return <Planet fallback={fallback} onLoad={onLoad}/>
}

export default HeroPlanet