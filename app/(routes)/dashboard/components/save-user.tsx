"use client"

import useUserData from "@/hooks/use-user-data";
import { User } from "@/types"
import { useEffect } from 'react';

interface SaveUserProps {
    data: User
}
const SaveUser: React.FC<SaveUserProps> = ({ data }) => {
    const userData = useUserData();

    useEffect(() => {
        userData.saveUserData(data)
    }, [userData, data])

    return null
}

export default SaveUser