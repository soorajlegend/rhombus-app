import { create } from "zustand"

interface UserLocationModal {
isOpen: boolean;
onOpen: () => void
onClose: () => void
}

const useUserLocationModal = create<UserLocationModal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({isOpen: false})
}))

export default useUserLocationModal;