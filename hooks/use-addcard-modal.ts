import { create } from 'zustand';

interface cardModal {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useCardModal = create<cardModal>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useCardModal;
