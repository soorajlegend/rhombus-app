import { create } from 'zustand';

interface changePinModal {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useChangePinModal = create<changePinModal>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useChangePinModal;
