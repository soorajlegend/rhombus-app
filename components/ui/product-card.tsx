"use client"

import Image from "next/image"
import { Expand, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import { MouseEventHandler } from "react"

import { StoreProduct } from "@/types"
import Currency from "./currency"
import IconButton from "@/components/ui/icon-button"
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/use-cart"

interface ProductCardProps {
    data: StoreProduct
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
                    src={data?.product.images?.[0]?.url}
                    fill
                    alt={`${data.product.name} image`}
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
            <div className="">
                <p className="font-semibold text-lg">
                    {data?.product.name}
                </p>
                <p className="text-sm text-gray-500">
                    {data?.product.category?.name}
                </p>
                {/* price */}
                <div className="flex items-center justify-between">
                    <Currency
                        value={data.price}
                        code={data?.store?.code || "USD"}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductCard