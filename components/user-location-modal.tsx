"use client"

import React from 'react'
import Modal from './ui/modal';
import LocationSettingsForm from './ui/locations-settings-form';
import { Currency, User } from '@/types';
import useUserLocationModal from '@/hooks/use-user-location-modal';

interface SettingFormProps {
    user: User;
    countries: Currency[];
}

const UserLocationModal: React.FC<SettingFormProps> = ({user, countries}) => {

    const userLocationSetting = useUserLocationModal();
  
    return (
        <Modal
            isOpen={userLocationSetting.isOpen}
            onClose={userLocationSetting.onClose}
        >
            <LocationSettingsForm
            countries={countries}
            initialData={user}
            /> 
        </Modal>
    )
}

export default UserLocationModal