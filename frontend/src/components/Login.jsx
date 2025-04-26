"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons
import Link from 'next/link'; // Import Link for navigation

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError('Please fill in all fields');
            return;
        }

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Login successful:', data);
                router.push('/dashboard'); // Redirect to dashboard
            } else {
                if (data.error === 'User not found') {
                    router.push('/register'); // Redirect to register page
                } else {
                    setError(data.error);
                }
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('An error occurred. Please try again.');
        }
    };

    const handleOAuthLogin = (provider) => {
        window.location.href = `/api/auth/${provider}`; // Redirect to OAuth provider
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <p className="mt-4 text-gray-700 text-center">Please log in to access your dashboard.</p>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                
                <div className="mt-6 text-center">
                    <div className="flex justify-center space-x-4">
                        <button
                            type="button"
                            onClick={() => handleOAuthLogin('linkedin')}
                            className="flex items-center bg-blue-700 text-white rounded px-4 py-2 hover:bg-blue-800"
                        >
                            <FaLinkedin className="mr-2" /> LinkedIn
                        </button>
                        
                    </div>
                    <Link href="https://www.linkedin.com/" target='_blank'>No LinkedIn? Get one here</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;