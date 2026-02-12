import { WaveDividerProps } from "./types"

const WaveDivider = ({position}: WaveDividerProps) => {
	return (
      <div style={{backgroundImage: "url(/images/wave-divider.svg)", backgroundSize: "100% 100%"}} className={`w-full h-9.25 flex items-end absolute ${position === "top" ? "top-0 rotate-180" : "bottom-0"} left-0 xxs:h-11.25 xs:h-12.5 xl:h-17.5 2xl:h-22.5`}/>
   )
}

export default WaveDivider