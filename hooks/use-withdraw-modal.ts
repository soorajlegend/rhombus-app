import { create } from "zustand"

interface WithdrawModal {
isOpen: boolean;
onOpen: () => void
onClose: () => void
}

const useWithdrawModal = create<WithdrawModal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({isOpen: false})
}))

export default useWithdrawModal;