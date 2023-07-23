"use client"
import { StoreItem } from '@/types'
import React from 'react'
import ItemCard from './item-card'

interface ItemsListProps {
    data: StoreItem[]
}

const ItemsList: React.FC<ItemsListProps> = ({ data }) => {

    return (
        <div className='flex flex-col gap-5'>
            {
                data?.map((item) => (
                    <ItemCard
                        key={item.id}
                        data={item}
                    />
                ))
            }
        </div>
    )
}

export default ItemsList