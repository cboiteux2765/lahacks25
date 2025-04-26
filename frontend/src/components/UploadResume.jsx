import React, { useState } from 'react';

const UploadResume = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle file upload logic here
        console.log('File uploaded:', file);
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-xl font-bold mb-4">Upload Your Resume</h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="mb-4"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Upload
                </button>
            </form>
        </div>
    );
};

export default UploadResume;