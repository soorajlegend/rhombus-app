"use client"

import { formatNumber } from '@/app/lib/utils'
import { useEffect, useState } from 'react';

interface CurrencyProps {
    value: string | number;
    code: string
}

const Currency: React.FC<CurrencyProps> = ({ value, code }) => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }


    return (
        <div className='font-bold'>
            {`${code} ${formatNumber(Number(value))}`}
        </div>
    )
}

export default Currency