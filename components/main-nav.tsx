'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

import { cn } from '@/app/lib/utils';



const MainNav = () => {
    const pathname = usePathname();

    const routes = [
        {
            href: "/dashboard",
            label: 'Dashboard',
            active: pathname === '/dashboard'
        },
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
        <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
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

        </nav>
    )
}

export default MainNav