import { create } from "zustand"


interface RegisteredProps {
isRegistered: boolean;
onSet: () => void
}

const useRegistered = create<RegisteredProps>((set) => ({
    isRegistered: false,
    onSet: () => set({ isRegistered: true }),
}))

export default useRegistered;