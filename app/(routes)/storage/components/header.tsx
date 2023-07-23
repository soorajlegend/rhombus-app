"use client"

import React, { MouseEventHandler } from 'react'

import useWithdrawModal from '@/hooks/use-withdraw-modal';
import Button from '@/components/ui/button'

interface HeaderProps {
    amount: number
}

const Header:React.FC<HeaderProps> = ({amount}) => {

    const withdrawModal = useWithdrawModal();

    const showWithdrawModal: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        withdrawModal.onOpen()
    }

    return (
        <div className="flex justify-between space-x-3 px-3 lg:px-0">
            <h4 className='font-bold text-2xl'>Saved Product ({amount})</h4>
            <Button onClick={showWithdrawModal}>Withdraw</Button>
        </div>
    )
}

export default Header