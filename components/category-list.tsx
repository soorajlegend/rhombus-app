'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

import { cn } from '@/app/lib/utils';
import { Category } from '@/types';

interface CategoryListProps {
    data: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ data }) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }));

    return (
        <nav className='mx-0 flex items-center space-x-4 lg:space-x-6 py-2'>
            {
               routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={cn("text-xs font-bold text-muted-foreground transition-colors hover:text-black",
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

export default CategoryList