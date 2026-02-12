import { create } from "zustand"

type BreakpointType = "1440px" | "768px" | "412px" | "320px"

interface BreakpointStoreProps {
   breakpoint: BreakpointType
   setBreakpoint: (value: BreakpointType) => void
}

const useBreakpointStore = create<BreakpointStoreProps>((set) => ({
   breakpoint: "320px",
   setBreakpoint: (value) => set({breakpoint: value})
}))

export { useBreakpointStore, type BreakpointType }