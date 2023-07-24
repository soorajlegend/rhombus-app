'use client'

import { useEffect, useState } from "react"
import { ShoppingBag } from "lucide-react"
import { UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import Button from "@/components/ui/button"
import useCart from "@/hooks/use-cart"
import { cn } from "@/app/lib/utils"


interface NavbarActionsProps {
    loggedIn: string | null
}

const NavbarActions: React.FC<NavbarActionsProps> = ({ loggedIn }) => {

    const [isMounted, setIsMounted] = useState(false);
    
    
    const router = useRouter();
    const cart = useCart();
    const pathname = usePathname();

    useEffect(() => {
        setIsMounted(true);
    }, [])


    if (!isMounted) {
        return null
    }

    const routes = [
        {
            href: "/storage",
            label: 'My storage',
            active: pathname === '/storage'
        },
        {
            href: "/",
            label: 'Market',
            active: pathname === '/'
        },
        {
            href: "/account",
            label: 'account',
            active: pathname === '/'
        },
    ]


    return (
        <div className="ml-auto flex items-center gap-x-4">
            <div className="mx-6 flex items-center space-x-4 lg:space-x-6">
                {
                    routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn("text-sm font-medium transition-colors hover:text-black",
                                route.active ? "text-black" : "text-natural-500"
                            )}
                        >
                            {route.label}
                        </Link>
                    ))
                }
            </div>

            <Button onClick={() => router.push('/cart')} className="flex items-center rounded-full bg-emerald-800 px-4 py-2">
                <ShoppingBag
                    size={20}
                    color="white"
                />
                <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
            </Button>
            {
                !loggedIn
                    ? (
                        <Button
                            onClick={() => router.push('/sign-in')}
                            className="text-sm px-4 py-2"
                        >
                            Sign in
                        </Button>
                    ) : (
                        <UserButton afterSignOutUrl='/' />
                    )
            }
        </div>
    )
}

export default NavbarActions