import { LoadingSpinnerProps } from "./types"

const LoadingSpinner = ({theme = "dark"}: LoadingSpinnerProps) => {
	return (
      <span className={`w-5 h-5 block animate-spin rounded-full border-3 ${theme === "dark" ? "border-l-highlight border-highlight-50" : "border-l-white-85 border-white-50"} xl:w-5.5 xl:h-5.5`}/>
   )
}

export default LoadingSpinner