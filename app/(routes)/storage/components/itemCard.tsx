"use client"

import Image from "next/image"
import { Expand, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import { MouseEventHandler } from "react"

import { StoreItem } from "@/types"
import IconButton from "@/components/ui/icon-button"
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/use-cart"
import Gallery from "@/components/gallery"
import { Separator } from "@/components/ui/separator"
import Button from "@/components/ui/button"

interface ItemCardProps {
    data: StoreItem
}

const ItemCard: React.FC<ItemCardProps> = ({ data }) => {

    const previewModal = usePreviewModal();
    const cart = useCart();
    const router = useRouter();

    const handleClick = () => {
        // router.push(`/product/${data.id}`)
    }


    const showPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        // event.stopPropagation();

        // previewModal.onOpen(data)
    }


    return (
        <div className="relative bg-white shadow-xl lg:max-h-96 flex flex-col lg:flex-row gap-x-10 group cursor-pointer rounded-xl border border-slate-100 p-3 max-w-4xl">

            {/* description */}
            <div className="w-full max-w-xs lg:max-w-none lg:w-72 ">
                <Gallery images={data.item.product.images} />
            </div>
            <div className="flex flex-col space-y-4 ">
                <p className="font-bold text-2xl">
                    {data?.item.product.name}
                </p>
                <Separator />
                <p className="text-lg text-gray-700">
                    Weight: {data?.weight} kg
                </p>
                <div className="flex items-center justify-between">
                    <p className="text-lg text-gray-500">
                        Status: {data?.forSale ? "For sale" : "Not for sale"}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-lg text-gray-500 flex flex-wrap items-center gap-x-2">
                        <span>Parameters:</span> {data?.parameters?.map((each) => <Button className="bg-slate-200 text-slate-800 text-sm" key={each.id}>{each.name}</Button>) || "No parameters"}
                    </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                    <p className="text-lg text-gray-700">
                        Location: {data.item.store.city}, {data.item.store.country}
                    </p>
                </div>
                <Separator />
                <div className="flex gap-x-3">
                    <Button className="w-full">Sell</Button>
                    <Button className="w-full">Send</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemCard