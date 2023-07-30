'use client';

import PreviewModal from '@/components/preview-modal';
import SendProductModal from '@/components/send-product-modal';
import WithdrawProductModal from '@/components/withdraw-product-modal';
import { AddCardModal, ChangePin } from '@/components/account-modals';
import { useEffect, useState } from 'react';

const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<PreviewModal />
			<SendProductModal />
			<WithdrawProductModal />
			<AddCardModal />
			<ChangePin />
		</>
	);
};

export default ModalProvider;
