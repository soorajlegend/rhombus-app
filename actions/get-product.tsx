import { StoreItem } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/storeItems`;

const getProduct = async (id: string): Promise<StoreItem> => {
    const response = await fetch(`${URL}/${id}`);

    return response.json()
}

export default getProduct