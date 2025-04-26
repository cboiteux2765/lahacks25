"use client";

import React, { useState, useEffect } from "react";

export default function InquirePage() {
    const [userGoals, setUserGoals] = useState("Software Engineering Internship"); // Example goal
    const [profiles, setProfiles] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        // Fetch LinkedIn profiles based on user goals
        const fetchProfiles = async () => {
            try {
                const response = await fetch(`/api/linkedin/search?goal=${encodeURIComponent(userGoals)}`);
                const data = await response.json();

                if (response.ok) {
                    setProfiles(data.profiles);
                } else {
                    setError(data.error || "Failed to fetch profiles.");
                }
            } catch (err) {
                console.error("Error fetching profiles:", err);
                setError("An error occurred while fetching profiles.");
            }
        };

        fetchProfiles();
    }, [userGoals]);

    const sampleMessage = (name) => `
Hi ${name},

I came across your profile while researching professionals who have achieved success in ${userGoals}. I admire your journey and accomplishments, and I would love to learn more about your experience. 

Would you be open to a quick chat or sharing some advice on how I can follow a similar path? I’d greatly appreciate your insights.

Thank you for your time!

Best regards,
[Your Name]
`;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">Inquire Page</h1>
            <p className="text-lg text-gray-700 mb-6 text-center">
                Find professionals who have achieved your goals and reach out to them for advice.
            </p>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">People to Reach Out To</h2>
                {profiles.length > 0 ? (
                    <ul className="space-y-4">
                        {profiles.map((profile, index) => (
                            <li key={index} className="border-b pb-4">
                                <p className="text-lg font-semibold text-gray-800">{profile.name}</p>
                                <p className="text-gray-700">{profile.title}</p>
                                <a
                                    href={profile.linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline"
                                >
                                    View LinkedIn Profile
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-md font-semibold text-gray-800">Sample Message:</h3>
                                    <textarea
                                        readOnly
                                        value={sampleMessage(profile.name)}
                                        className="w-full border border-gray-300 rounded-lg p-2 mt-2 bg-gray-100"
                                        rows={4}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-700">No profiles found. Please try again later.</p>
                )}
            </div>
        </div>
    );
}