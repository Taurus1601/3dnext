import React from 'react';

const Navigation = () => {
    return (
        <nav className="fixed z-50 w-full flex items-center justify-between  bg-black text-white p-5">
            <div className="flex items-center">
                <h1 className="ml-2 text-xl font-bold">
                    SM
                </h1>
                <h1 className="ml-2 text-lg font-semibold">Student Management</h1>
            </div>
            <div>
                <button className="bg-white text-black px-4 mx-2 py-2 rounded">Login</button>
                <button className="bg-white text-black px-4 py-2 rounded">Register</button>
            </div>
        </nav>
    );
};

export default Navigation;