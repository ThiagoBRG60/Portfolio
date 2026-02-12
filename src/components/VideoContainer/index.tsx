import { VideoContainerProps } from "./types"

const VideoContainer = ({slug, variant}: VideoContainerProps) => {
	return (
      <div className={`w-full p-1.25 rounded-[10px] animate-expand border border-highlight-50 sm:p-2.5 ${variant === "mobile" ? "xl:hidden" : "hidden xl:block"}`} aria-hidden="true">
         <video poster={`/images/projects/${slug}.png`} className="object-fill rounded-[5px] opacity-80" autoPlay loop muted playsInline preload="metadata">
            <source src={`/videos/${slug}.mp4`} type="video/mp4"/>
         </video>
      </div>
   )
}

export default VideoContainer