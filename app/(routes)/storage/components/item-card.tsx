"use client"

import { MouseEventHandler } from "react"

import { StoreItem } from "@/types"
import Gallery from "@/components/gallery"
import { Separator } from "@/components/ui/separator"
import Button from "@/components/ui/button"
import useSendProduct from "@/hooks/use-send-product-modal"

interface ItemCardProps {
    data: StoreItem
}

const ItemCard: React.FC<ItemCardProps> = ({ data }) => {

    const sendModal = useSendProduct();

  
    const showSendModal: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        sendModal.onOpen(data)
    }

    return (
        <div className="relative bg-white lg:shadow-xl lg:max-h-96 flex flex-col lg:flex-row gap-x-10 group cursor-pointer rounded-xl border border-slate-100 p-3 max-w-4xl">

            {/* description */}
            <div className="w-full max-w-xs lg:max-w-none lg:w-72 ">
                <Gallery images={data.item.product.images} />
            </div>
            <div className="flex flex-col space-y-4 ">
                <p className="font-bold text-2xl">
                    {data?.item.product.name}
                </p>
                <Separator />
                <p className="text-base text-gray-700">
                    Weight: {data?.weight} kg
                </p>
                <div className="flex items-center justify-between">
                    <p className="text-base text-gray-500">
                        Status: {data?.forSale ? "For sale" : "Not for sale"}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-base text-gray-500 flex flex-wrap items-center gap-x-2">
                        <span>Parameters:</span>{data?.parameters.length === 0 && "No parameters"} {data?.parameters?.map((each) => <Button className="bg-neutral-100 py-[0.30rem] text-slate-500 text-sm lowercase" key={each.id}>{each.name}</Button>)}
                    </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                    <p className="text-base text-gray-700">
                        Location: {data.item.store.city}, {data.item.store.country}
                    </p>
                </div>
                <Separator />
                <div className="flex gap-x-3">
                    <Button>{data.forSale ? "Remove from market" : "Put to market"}</Button>
                    <Button onClick={showSendModal}>Send</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemCard