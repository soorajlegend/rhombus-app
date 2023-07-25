"use client"

import Image from "next/image"
import { Tab } from "@headlessui/react"

import { Image as ImageType } from "@/types"
import GalleryTab from "./gallery-tab"

interface GalleryProps {
    images: ImageType[]
}


const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
        <Tab.Group as="div" className="flex flex-col-reverse max-w-xs lg:max-w-none">
            <div className="mx-auto mt-6 hiddesn w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 lg:grid-cols-6 gap-6" >
                    {images.map((image) => (
                        <GalleryTab key={image.id} image={image} />))}
                </Tab.List>
            </div>
            <Tab.Panels className="aspect-square w-full" >
                {images?.map((image) => (
                    <Tab.Panel key={image.id}>
                        <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden bg-slate-500">
                            <Image
                                fill
                                src={image.url}
                                alt="mini image"
                                className="object-cover object-center"
                            />
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}

export default Gallery