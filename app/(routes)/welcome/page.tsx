import { currentUser } from '@clerk/nextjs';

import SaveUserScreen from './components/save-user-screen';
import UserProfileForm from './components/user-profile-form';

export default async function Welome() {

  const user = await currentUser();

  const meetRequirement = user?.firstName  && user?.emailAddresses[0].emailAddress;

  return (
    <div className='w-full h-full flex justify-center items-center'>
      {
        meetRequirement
          ?
          (<SaveUserScreen 
            user={{
            id: user.id,
            firstName: user?.firstName,
            lastName:  user?.lastName || '',
            emailAddress: user?.emailAddresses[0].emailAddress
          }} />)
            :
            (<UserProfileForm />)
      }
    </div>
  );
}
