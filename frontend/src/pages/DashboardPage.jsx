import React from 'react';
import Dashboard from '../components/Dashboard';

const DashboardPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold text-center py-5">User Dashboard</h1>
            <Dashboard />
        </div>
    );
};

export default DashboardPage;