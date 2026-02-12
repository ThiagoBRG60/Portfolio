import { create } from "zustand";

type ToastStatusType = "success" | "error" | string

interface ToastStateProps {
   message: string
   status: ToastStatusType
}

interface ToastCardStoreProps {
   isActive: boolean
   toastState: ToastStateProps
   setIsActive: (value: boolean) => void
   setToastState: (value: ToastStateProps) => void
}

const useToastCardStore = create<ToastCardStoreProps>((set) => ({
   isActive: false,
   toastState: {message: "", status: ""},
   setIsActive: (value) => set({isActive: value}),
   setToastState: (value) => set({toastState: value})
}))

export { useToastCardStore }