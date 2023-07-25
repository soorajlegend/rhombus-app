import Link from 'next/link'

import Container from '@/components/ui/container'
import MainNav from '@/components/main-nav'
import getCategories from '@/actions/get-categories'
import NavbarActions from './navbar-actions';
import { auth } from '@clerk/nextjs';



export const revalidate = 0;

const Navbar: React.FC = async () => {

    const categories = await getCategories();

    const { userId } = auth();

    return (
        <div className='border-b fixed w-screen top-0 z-50 bg-white'>
            <Container>
                <div className="relative px-4 lg:px-0  flex h-16 items-center">
                    <Link
                        href={!!userId ? "/dashboard" : "/"}
                        className='ml-4 flex lg:ml-0 gap-x-2'
                    >
                        <p className='font-bold text-xl text-emerald-800'>Rhombus</p>
                    </Link>
                    <MainNav data={categories} loggedIn={!!userId} />
                    <NavbarActions loggedIn={!!userId} />
                </div>
            </Container>
        </div>
    )
}

export default Navbar