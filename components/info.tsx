"use client"

import { StoreItem } from "@/types"
import Currency from "./ui/currency"
import Button from "./ui/button"
import { ShoppingCart } from 'lucide-react';
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";
import { Separator } from "./ui/separator";
import Parameters from "./ui/parameters";

interface InfoProps {
    data: StoreItem
}


const Info: React.FC<InfoProps> = ({ data }) => {

    const cart = useCart();
    
    const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
    
        cart.addItem(data)
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">
                {data.item.product.name} ({data?.weight}kg)
            </h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                <Currency
                        value={data.item.price * data?.weight}
                        code={data.item.store?.code}
                    />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Location:</h3>
                    <div>{data.item.store.city}, {data.item.store.country}</div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Address:</h3>
                    <div>{data.item.store.address}</div>
                </div>
                <Separator />
                <Parameters data={data?.parameters} />
                <Separator />
                <div className="mt-10 flex items-center gap-x-3">
                    <Button onClick={addToCart} className="flex items-center gap-x-2">
                        Add To Cart
                        <ShoppingCart />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Info