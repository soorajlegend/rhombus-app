import { auth } from '@clerk/nextjs';

import getStoreData from '@/actions/get-storage-items'

import Container from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import ItemsList from './components/items-list';
import Header from './components/header';

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
                    <Header amount={data.storage.length} />
                    <Separator />
                    <ItemsList data={data.storage} />
                </div>
            </Container>
        </div>
    )
}

export default page