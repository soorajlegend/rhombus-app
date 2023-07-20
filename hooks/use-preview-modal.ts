import { create } from "zustand"

import {  StoreProduct } from "@/types"

interface PreviewModalStore {
isOpen: boolean;
data?: StoreProduct
onOpen: (data: StoreProduct) => void
onClose: () => void
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: StoreProduct) => set({ data, isOpen: true }),
    onClose: () => set({isOpen: false})
}))

export default usePreviewModal;