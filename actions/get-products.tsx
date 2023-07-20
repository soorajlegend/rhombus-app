import { StoreProduct } from "@/types";
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/storeProduct`;

interface Query {
    categoryId?: string;
    isFeatured?: boolean
}

const getProducts = async (query: Query): Promise<StoreProduct[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            categoryId: query.categoryId,
            isFeatured: query.isFeatured
        }
    })
    const response = await fetch(url)

    return response.json()
}

export default getProducts