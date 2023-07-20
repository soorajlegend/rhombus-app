import { StoreProduct } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/storeProduct`;

const getProduct = async (id: string): Promise<StoreProduct> => {
    const response = await fetch(`${URL}/${id}`);

    return response.json()
}

export default getProduct