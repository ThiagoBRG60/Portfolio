import { useEffect, useRef } from "react"

function useDraggableMenu(setIsMobileMenuActive: () => void) {
   const menuRef = useRef<HTMLUListElement | null>(null)
   const menuPositionRef = useRef({startX: 0, deltaX: 0})
   const isDragging = useRef(false)

   useEffect(() => {
      if (!menuRef.current) return

      const mediaQuery = window.matchMedia("(max-width: 767px)")

      function handlePointerDown(e: PointerEvent) {
         if (e.button !== 0 || !menuRef.current) return

         isDragging.current = true
         menuPositionRef.current.startX = e.clientX
         menuRef.current.style.transition = "none"
         menuRef.current.setPointerCapture(e.pointerId)
      }

      function handlePointerMove(e: PointerEvent) {
         if (!menuRef.current || !isDragging.current) return

         const deltaX = e.clientX - menuPositionRef.current.startX
         const clampedDelta = Math.max(-menuRef.current.clientWidth, Math.min(0, deltaX))

         menuRef.current.style.transform = `translateX(${clampedDelta}px)`
         menuPositionRef.current.deltaX = clampedDelta
      }

      function handlePointerUp(e: PointerEvent) {
         if (!menuRef.current) return

         const percentage = 30
         const treshold = (menuRef.current.clientWidth * percentage) / 100
         const canCloseMenu = menuPositionRef.current.deltaX < -treshold

         if (canCloseMenu) setIsMobileMenuActive()

         isDragging.current = false
         menuPositionRef.current.deltaX = 0
         menuRef.current.style.transition = "0.5s"
         menuRef.current.style.transform = "translateX(0)"
         menuRef.current.releasePointerCapture(e.pointerId)
      }

      function addListeners() {
         if (!menuRef.current) return

         menuRef.current.addEventListener("pointerdown", handlePointerDown)
         menuRef.current.addEventListener("pointermove", handlePointerMove)
         menuRef.current.addEventListener("pointerup", handlePointerUp)
         menuRef.current.addEventListener("pointercancel", handlePointerUp)
      }

      function removeListeners() {
         if (!menuRef.current) return

         menuRef.current.removeEventListener("pointerdown", handlePointerDown)
         menuRef.current.removeEventListener("pointermove", handlePointerMove)
         menuRef.current.removeEventListener("pointerup", handlePointerUp)
         menuRef.current.removeEventListener("pointercancel", handlePointerUp)
      }

      function handleMediaChange(e: MediaQueryListEvent | MediaQueryList) {
         e.matches ? addListeners() : removeListeners()
      }

      handleMediaChange(mediaQuery)

      mediaQuery.addEventListener("change", handleMediaChange)
      
      return () => {
         mediaQuery.removeEventListener("change", handleMediaChange)
         removeListeners()
      }
   }, [])

   return {menuRef: menuRef}
}

export { useDraggableMenu }