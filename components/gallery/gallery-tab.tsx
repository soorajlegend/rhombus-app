import { Tab } from "@headlessui/react"
import Image from "next/image"

import { cn } from "@/app/lib/utils"
import { Image as ImageType } from '@/types'

interface GalleryTabProps {
    image: ImageType
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {

    return (
        <div>
            <Tab className="relative w-full flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
                {({ selected }) => (
                    <div>
                        <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                            <Image
                                src={image.url}
                                fill
                                alt="selected product image"
                                className="object-cover object-center"
                            />
                        </span>
                        <span className={cn(
                            "absolute inset-0 rounded-md ring-2 ring-offset-2",
                            selected ? "ring-black" : "ring-transparent"
                        )} />
                    </div>
                )}
            </Tab>
        </div>
    )
}

export default GalleryTab