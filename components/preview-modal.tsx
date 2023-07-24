"use client"

import usePreviewModal from '@/hooks/use-preview-modal'
import React from 'react'
import Modal from './ui/modal';
import Gallery from './gallery';
import Info from './info';

const PreviewModal = () => {

    const previewModal = usePreviewModal();
    const storeProduct = usePreviewModal((state) => state.data)

    if (!storeProduct) {
        return null
    }


    return (
        <Modal
            isOpen={previewModal.isOpen}
            onClose={previewModal.onClose}
        >
            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:grid-cols-12">
                <div className="sm:col-span-4 lg:col-span-5">
                    <Gallery images={storeProduct.item.product.images} />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                    <Info data={storeProduct} />
                </div>
            </div>
        </Modal>
    )
}

export default PreviewModal