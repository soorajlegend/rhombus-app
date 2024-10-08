"use client"

import saveUser from "@/actions/save-user-details";
import useRegistered from "@/hooks/use-registered";
import { User } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";

interface SaveUserScreenProps {
    user: {
        id: string;
        firstName: string;
        lastName: string;
        emailAddress: string;
    };
}

const SaveUserScreen: React.FC<SaveUserScreenProps> = ({ user }) => {
    const router = useRouter();
    const registered = useRegistered()

    if (registered.isRegistered) {
        router.push('/dashboard')
    }

    useEffect(() => {
        const saveData = async () => {
            const save: User | null = await saveUser(
                user?.id,
                user?.firstName,
                user?.lastName,
                user?.emailAddress
            )

            if (save) {
                registered.onSet();
                router.push("/dashboard");
            }
        };
        saveData();
    }, [router, user?.emailAddress, user?.firstName, user?.id, user?.lastName]);

    return (
        <div className="flex flex-col justify-start items-center space-y-5 min-h-[50vh]">
            <h3 className="text-3xl font-bold">Hello, {user?.firstName}</h3>
            <p className="animate-pulse text-center max-w-lg px-3 font-semibold">
                Your account is almost ready! We&apos;re putting the finishing touches to ensure an amazing
                experience. Thanks for your patience and get ready for something special!
            </p>
            <ClipLoader size={25} color="#338f6b" />
        </div>
    );
};

export default SaveUserScreen;
