"use client"

import React from 'react'
import Modal from './ui/modal';
import useSendProduct from '@/hooks/use-send-product-modal';

const SendProductModal = () => {

    const sendProduct = useSendProduct();
    const storeProduct = useSendProduct((state) => state.data)

    if (!storeProduct) {
        return null
    }


    return (
        <Modal
            isOpen={sendProduct.isOpen}
            onClose={sendProduct.onClose}
        >
            <div className="w-full">
            Hello, send product modal
            </div>
        </Modal>
    )
}

export default SendProductModal