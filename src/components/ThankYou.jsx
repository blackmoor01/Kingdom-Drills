import React from "react";
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return(
        <div
            className="bg-gradient-to-b from-[#4682B4] to-gray-800 min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-lg text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
                <p className="text-lg mb-8">Your request has been received. We will get back to you as soon as
                    possible.</p>
                <Link to="/" className="text-blue-500 hover:text-blue-700">Back to Home</Link>
            </div>
        </div>
    )
};

export default ThankYou;