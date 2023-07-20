import getStoreData from '@/actions/get-storage-items'
import Container from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import { auth } from '@clerk/nextjs';

import React from 'react'
import ItemsList from './components/items-list';
import Button from '@/components/ui/button';

const page = async () => {

    const { userId } = auth();

    if (!userId) {
        return null;
    }

    const data = await getStoreData(userId);

    return (
        <div>
            <Container>
                <div className="w-full h-full flex flex-col space-y-3">
                    <div className="flex justify-between space-x-3">
                        <h4 className='font-bold text-2xl'>Saved Product ({data.storage.length})</h4>
                        <Button>Withdraw</Button>
                    </div>
                    <Separator />
                    <ItemsList data={data.storage} />
                </div>
            </Container>
        </div>
    )
}

export default page