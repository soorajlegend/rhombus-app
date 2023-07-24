"use client"

import Image from "next/image"
import { Expand, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import { MouseEventHandler } from "react"

import { Store, StoreItem } from "@/types"
import Currency from "./currency"
import IconButton from "@/components/ui/icon-button"
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/use-cart"
import Parameters from "./parameters"
import { Separator } from "./separator"

interface ProductCardProps {
    data: StoreItem
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {

    const previewModal = usePreviewModal();
    const cart = useCart();
    const router = useRouter();

    const handleClick = () => {
        router.push(`/product/${data.id}`)
    }


    const showPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        previewModal.onOpen(data)
    }

    const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(data)
    }


    return (
        <div className="bg-white group cursor-pointer rounded-xl border border-slate-100 shadow-lg p-3 space-y-4">
            <div onClick={handleClick} className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    src={data.item?.product.images?.[0]?.url}
                    fill
                    alt={`${data.item.product.name} image`}
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 ">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={showPreview}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButton
                            onClick={addToCart}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>
            {/* description */}
            <div className="flex flex-col space-y-2">
                <p className="font-semibold text-lg">
                    {data.item.product.name} ({data?.weight}kg)
                </p>
                <p className="text-sm text-gray-500">
                    {data.item.product.category?.name}
                </p>
                <Separator />
                <Parameters data={data?.parameters} />
                <Separator />
                {/* price */}
                <div className="flex items-center justify-between">
                    <Currency
                        value={data.item.price * data?.weight}
                        code={data.item.store?.code}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductCard