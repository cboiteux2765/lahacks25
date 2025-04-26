import React from 'react';
import ProfileForm from '../components/ProfileForm';
import UploadResume from '../components/UploadResume';

const ProfilePage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Profile Management</h1>
            <ProfileForm />
            <UploadResume />
        </div>
    );
};

export default ProfilePage;