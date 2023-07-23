import { create } from "zustand"

import {  StoreItem } from "@/types"

interface SendProductModal {
isOpen: boolean;
data?: StoreItem
onOpen: (data: StoreItem) => void
onClose: () => void
}

const useSendProduct = create<SendProductModal>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: StoreItem) => set({ data, isOpen: true }),
    onClose: () => set({isOpen: false})
}))

export default useSendProduct;