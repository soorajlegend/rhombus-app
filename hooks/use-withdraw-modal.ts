import { StoreItem } from "@/types";
import { create } from "zustand"

interface WithdrawModal {
isOpen: boolean;
data?: StoreItem
onOpen: (data: StoreItem) => void
onClose: () => void
}

const useWithdrawModal = create<WithdrawModal>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: StoreItem) => set({ data, isOpen: true }),
    onClose: () => set({isOpen: false})
}))

export default useWithdrawModal;