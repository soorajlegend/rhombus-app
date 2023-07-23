"use client"

import React from 'react'
import Modal from './ui/modal';
import useWithdrawModal from '@/hooks/use-withdraw-modal';

const WithdrawProductModal = () => {

    const withdrawProduct = useWithdrawModal();

    return (
        <Modal
            isOpen={withdrawProduct.isOpen}
            onClose={withdrawProduct.onClose}
        >
            <div className="w-full">
                Hello, withdrawal modal
            </div>
        </Modal>
    )
}

export default WithdrawProductModal