import { CardStateType } from "@/stores/technologiesStore";
import { useEffect, useRef, useState } from "react";

type ShadowPositionType = "none" | "top" | "middle" | "bottom"
type ShadowPositionProps = {[key: string]: {position: ShadowPositionType}}

function useScrollShadow(breakpoint: string, visibleCardState: CardStateType) {
   const [shadowPosition, setShadowPosition] = useState<ShadowPositionProps>({"1440px": {position: "none"}, "768px": {position: "none"}, "412px": {position: "none"}, "320px": {position: "none"}})
   const technologyListRef = useRef<HTMLUListElement | null>(null)
   const observerRef = useRef<IntersectionObserver | null>(null)
   const scrollMarkersRef = useRef<Element[] | null>(null)
   const breakpointRef = useRef(breakpoint)
   const shadowPositionRef = useRef(shadowPosition[breakpointRef.current].position)

   const setElementsRef = () => scrollMarkersRef.current = Array.from(document.querySelectorAll(".scroll-marker"))
   const connectObserver = () => scrollMarkersRef.current?.forEach(element => observerRef.current?.observe(element))
   const disconnectObserver = () => observerRef.current?.disconnect()

   useEffect(() => {
      shadowPositionRef.current = shadowPosition[breakpointRef.current].position
   }, [shadowPosition])

   useEffect(() => {
      breakpointRef.current = breakpoint
   }, [breakpoint])

   useEffect(() => {
      disconnectObserver()
      setElementsRef()
      connectObserver()
   }, [visibleCardState, breakpoint])

   useEffect(() => {
      setElementsRef()

      observerRef.current = new IntersectionObserver((entries) => {
         const currentPosition = shadowPositionRef.current

         if (!isScrollable(technologyListRef.current as Element)) {
            if (currentPosition !== "none") setShadowPosition((prevState) => ({...prevState, [breakpointRef.current]: {position: "none"}}))
            return
         }
         
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               const targetIndex = scrollMarkersRef.current?.indexOf(entry.target)
               const newPosition = targetIndex === 0 ? "top" : "bottom"

               if (currentPosition !== newPosition) setShadowPosition((prevState) => ({...prevState, [breakpointRef.current]: {position: newPosition}}))
            } else {
               if (currentPosition !== "middle") setShadowPosition((prevState) => ({...prevState, [breakpointRef.current]: {position: "middle"}}))
            }
         })
      }, {root: null, rootMargin: "0px", threshold: 1})

      connectObserver()

      return () => disconnectObserver()
   }, [])

   return { technologyListRef: technologyListRef, shadowPosition: shadowPosition[breakpoint].position, isScrollable: isScrollable(technologyListRef.current as Element) }
}

function isScrollable(element: Element) {
   if (element) return element.scrollHeight !== element.clientHeight
}

export { useScrollShadow }