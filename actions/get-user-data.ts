import { User } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/users`;

const getUserData = async (id: string): Promise<User> => {
    const response = await fetch(`${URL}/${id}`);

    return response.json()
}

export default getUserData