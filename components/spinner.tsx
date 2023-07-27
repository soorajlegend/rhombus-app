"use client"

import React from 'react'
import { ClipLoader } from 'react-spinners';

import Modal from './ui/modal';
import useLoader from '@/hooks/use-loader';

const Loader = () => {

    const Loader = useLoader();

    return (
        <Modal
            loading
            isOpen={Loader.isOpen}
            onClose={Loader.onClose}
        >
            <div className="w-full h-full flex items-center justify-center">
                <ClipLoader size={50} color="#cccccc" />
            </div>
        </Modal>
    )
}

export default Loader