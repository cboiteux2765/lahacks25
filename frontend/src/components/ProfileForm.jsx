import React, { useState } from 'react';

const ProfileForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        workExperience: '',
        skills: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Work Experience</label>
                    <textarea
                        name="workExperience"
                        value={formData.workExperience}
                        onChange={handleChange}
                        rows="4"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Skills</label>
                    <textarea
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        rows="4"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ProfileForm;