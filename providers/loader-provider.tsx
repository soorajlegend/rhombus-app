"use client"

import Loader from "@/components/Loader";
import { useEffect, useState } from "react"


const LoaderProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <>
            <Loader />
        </>
    )
}

export default LoaderProvider