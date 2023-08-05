"use client"

import React from 'react'

interface HeaderProps {
    amount: number
}

const Header:React.FC<HeaderProps> = ({amount}) => {

    return (
        <div className="flex justify-between space-x-3 px-3 lg:px-0">
            <h4 className='font-bold text-2xl'>Saved Product ({amount})</h4>
        </div>
    )
}

export default Header