import { JSX } from "react"

interface PlanetProps {
   fallback: JSX.Element
   onLoad?: () => void
}

export type { PlanetProps }