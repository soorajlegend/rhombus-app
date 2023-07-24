"use client"

import Image from "next/image"

import IconButton from "@/components/ui/icon-button"
import { StoreItem } from '@/types';
import { X } from "lucide-react"
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

interface CartItemProps {
    data: StoreItem
}


const CartItem: React.FC<CartItemProps> = ({ data }) => {

    const cart = useCart();

    const onRemove = () => {
        cart.removeItem(data.id)
    }

    return (
        <li className="flex py-6 border-b bg-white">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image
                    fill
                    src={data.item.product.images[0].url}
                    className="object-cover object-center"
                    alt="cart-page product image"
                />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 top-0 right-0">
                    <IconButton
                        icon={<X size={15} />}
                        onClick={onRemove}
                    />
                </div>

                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold text-black">{data.item.product.name} ({data?.weight}kg)</p>
                    </div>

                    <div className="mt-1 flex text-sm">
                        <p className="text-gray-500 font-bold">{data.item.store.city}, {data.item.store.country}</p>
                        {/* <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">{data.item.store.city}</p> */}
                    </div>
                    <Currency value={data.item.price * data.weight} code={data.item.store.code}/>
                </div>

            </div>
        </li>
    )
}

export default CartItem