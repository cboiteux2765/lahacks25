import React from 'react';

const Dashboard = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-2">Welcome, [User's Name]</h2>
                <p className="mb-4">Here you can manage your profile and view your information.</p>
                <div className="flex flex-col space-y-4">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        View Profile
                    </button>
                    <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                        Update Information
                    </button>
                    <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
                        Upload Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;