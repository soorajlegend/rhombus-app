"use client"
import { useRouter } from "next/navigation";

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
            Please Wait...
        </div>
    )
}

export default UserProfileForm