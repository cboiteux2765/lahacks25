"use client";

import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Login = () => {
    const [error, setError] = useState('');

    const handleOAuthLogin = () => {
        const clientId = process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID; // Use NEXT_PUBLIC_ prefix for environment variables in Next.js
        const redirectUri = 'http://localhost:3000/api/linkedin/callback';
        const scope = 'r_liteprofile r_emailaddress';

        const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
            redirectUri
        )}&scope=${encodeURIComponent(scope)}`;

        // Redirect to LinkedIn OAuth page
        window.location.href = linkedInAuthUrl;
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <p className="mt-4 text-gray-700 text-center">Please log in to access your dashboard.</p>
                {error && <p className="text-red-500 mb-4">{error}</p>}

                <div className="flex justify-center mt-6">
                    <button
                        type="button"
                        onClick={handleOAuthLogin}
                        className="flex items-center bg-blue-700 text-white rounded px-4 py-2 hover:bg-blue-800"
                    >
                        <FaLinkedin className="mr-2" /> Log in with LinkedIn
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;