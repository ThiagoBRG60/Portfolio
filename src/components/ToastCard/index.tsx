"use client"
import { useToastCardStore } from "@/stores/toastCardStore"
import Icon from "@/components/Icon"

const ToastCard = () => {
   const { isActive, toastState, setIsActive } = useToastCardStore()

	return (
      <div className={`w-full max-w-75 min-h-12.5 max-h-50 flex justify-between fixed ${isActive ? "top-15 xs:top-17.5 xl:top-20" : "-top-50"} left-1/2 -translate-x-1/2 rounded-[5px] text-white-85 duration-1000 overflow-hidden z-5 ${toastState.status === "success" ? "bg-green-600" : "bg-red-600"} xxs:w-max xxs:max-w-87.5 xxs:justify-normal xs:max-w-90 lg:max-w-100 xl:max-w-105 xl:min-h-13.75`}>
         <Icon name={toastState.status === "success" ? "circle-check" : "circle-x-mark"} className="self-center ml-2.5 mr-1.25 xxs:mr-2.5 xs:text-lg xl:text-xl" type="fontAwesome"/>

         <p className="self-center wrap-break-word py-1.25 text-sm font-medium xs:text-base">
            {toastState.message}
         </p>

         <div className="flex items-center">
            <div className="h-[70%] ml-2.5 border-r border-r-white-85"/>
         </div>

         <button onClick={() => setIsActive(false)} aria-label="fechar toast" className="flex items-center px-2.5 cursor-pointer group">
            <Icon name="x-mark" className="duration-300 group-active:scale-[0.9] xs:text-lg lg:group-hover:opacity-70 xl:text-xl" type="fontAwesome"/>
         </button>

         <span className={`w-full h-0.75 absolute bottom-0 left-0 bg-white-85 ${isActive ? "animate-shrinkLeft" : "-translate-x-full"}`}/>
      </div>
   )
}

export default ToastCard