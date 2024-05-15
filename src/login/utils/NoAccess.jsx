import React from 'react';

const NoAccess = () => {
    return (
        <div className="flex items-center justify-center h-80">
            <div className="text-center">
                <h1 className="text-xl font-bold text-gray-800 mb-4">You do not have access to view this page</h1>
                <p className="text-lg text-gray-600">Please contact the administrator for assistance.</p>
            </div>
        </div>
    );
};

export default NoAccess;
