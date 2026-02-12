import { create } from "zustand"
import { technologies } from "@/data/technologies"
import { techFilters } from "@/data/techFilters"

type TechnologiesType = (typeof technologies)[number]
type TechCategories = TechnologiesType["categories"][number]
type CardStateType = {[key: string]: {blockCount: number}}
type FiltersType = (typeof techFilters)[number]
type FilterLabelsType = FiltersType["label"]

interface TechnologiesStoreProps {
   visibleTechnologies: readonly TechnologiesType[]
   visibleCardState: CardStateType,
   activeFilter: FilterLabelsType
   cardAnimationKey: number
   setVisibleTechnologies: (filter: "all" | TechCategories) => void
   setVisibleCardState: (action: "increment" | "reset", breakpoint?: string) => void
   setActiveFilter: (filterObj: FiltersType) => void
   setCardAnimationKey: () => void
} 

const useTechnologiesStore = create<TechnologiesStoreProps>((set, get) => ({
   visibleTechnologies: technologies,
   visibleCardState: {"1440px": {blockCount: 1}, "768px": {blockCount: 1}, "412px": {blockCount: 1}, "320px": {blockCount: 1}},
   activeFilter: "Todas",
   cardAnimationKey: 0,
   setVisibleTechnologies: (filter) => {
      if (filter === "all") {
         set({visibleTechnologies: technologies})
         return
      }

      set({visibleTechnologies: technologies.filter(technology => technology.categories.includes(filter as never))})
   },
   setVisibleCardState: (action, breakpoint) => {
      set((state) => ({visibleCardState: action === "increment"
         ? {...state.visibleCardState, [breakpoint as string]: {blockCount: state.visibleCardState[breakpoint as string].blockCount + 1}}
         : Object.fromEntries(Object.entries(state.visibleCardState).map(([key, value]) => breakpoint ? (key === breakpoint ? [key, {blockCount: 1}] : [key, value]) : [key, {blockCount: 1}]))
      }))
   },
   setActiveFilter: (filterObj) => {
      const { setVisibleTechnologies, setVisibleCardState, setCardAnimationKey } = get()

      set({activeFilter: filterObj.label})
      setVisibleTechnologies(filterObj.filter)
      setVisibleCardState("reset")
      setCardAnimationKey()
   },
   setCardAnimationKey: () => set({cardAnimationKey: Math.random()})
}))

export { useTechnologiesStore, type CardStateType }