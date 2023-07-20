"use client"
import { useRouter } from "next/navigation";

interface UserProfileFormProps {
    meetRequirement: boolean;

}

const UserProfileForm = () => {
    const router = useRouter();

    // if (minimumRequirement) {
    // const save: boolean = await saveUser(
    //   user?.id,
    //   user?.firstName || '',
    //   user?.lastName || '',
    //   user?.phoneNumbers[0].phoneNumber || '',
    //   user?.emailAddresses[0].emailAddress || ''
    // )

    // router.push('/dashboad');
    // } rhombus-app.vercel.app


    // if (!user) {
    //     router.push('/sign-in');
    //     return;
    // };
    return (
        <div>
            This is registration form
        </div>
    )
}

export default UserProfileForm