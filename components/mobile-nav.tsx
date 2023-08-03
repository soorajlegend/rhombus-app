"use client"

import { MenuIcon } from "lucide-react"
import { useEffect, useState } from "react"
import MainNav from "./main-nav"
import { usePathname } from "next/navigation"
import Button from "./ui/button"



const MobileNav = () => {

    const [showNav, setShowNav] = useState(false)
    const pathname = usePathname();

    useEffect(() => {
        setShowNav(false)
    }, [pathname])

    return (
        <>
            <Button
                onClick={() => setShowNav(!showNav)}
                className="flex lg:hidden items-center rounded-full bg-emerald-800 p-2 ml-4">
                <MenuIcon
                    size={20}
                />
            </Button>
            <div className={`fixed left-0 h-screen w-screen top-16 transition-all duration-300 z-40 flex ${showNav ? "-translate-x-0 " : "-translate-x-full"}`}>
                <div className="bg-white dark:bg-slate-900 h-full w-10/12 flex flex-col space-y-5 py-5">
                    <MainNav />
                </div>
                <div
                    className="w-2/12"
                    onClick={() => setShowNav(false)}
                />
            </div>
        </>
    )
}

export default MobileNav