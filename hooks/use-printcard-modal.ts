import { create } from 'zustand';

interface printCardModal {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const usePrintCardModal = create<printCardModal>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default usePrintCardModal;
