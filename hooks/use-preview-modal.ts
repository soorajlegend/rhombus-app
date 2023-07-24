import { create } from "zustand"

import {  StoreItem } from "@/types"

interface PreviewModalStore {
isOpen: boolean;
data?: StoreItem
onOpen: (data: StoreItem) => void
onClose: () => void
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: StoreItem) => set({ data, isOpen: true }),
    onClose: () => set({isOpen: false})
}))

export default usePreviewModal;