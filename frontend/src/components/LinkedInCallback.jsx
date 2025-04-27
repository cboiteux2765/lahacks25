"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const LinkedInCallback = () => {
    const [profileData, setProfileData] = useState(null);
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        const fetchLinkedInData = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');

            if (code) {
                try {
                    const response = await fetch(`/api/linkedin/callback?code=${code}`);
                    const data = await response.json();

                    if (response.ok) {
                        setProfileData(data);
                        console.log('LinkedIn Profile Data:', data);
                        router.push('/dashboard'); // Redirect to dashboard
                    } else {
                        setError(data.error || 'Failed to fetch LinkedIn data');
                    }
                } catch (err) {
                    console.error('Error fetching LinkedIn data:', err);
                    setError('An error occurred. Please try again.');
                }
            }
        };

        fetchLinkedInData();
    }, [router]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : profileData ? (
                <div>
                    <h2 className="text-2xl font-bold">Welcome, {profileData.localizedFirstName}!</h2>
                    <p>Email: {profileData.email}</p>
                </div>
            ) : (
                <p>Loading LinkedIn data...</p>
            )}
        </div>
    );
};

export default LinkedInCallback;