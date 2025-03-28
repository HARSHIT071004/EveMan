import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center">
            <div className="flex gap-3 mt-9">
                <button
                    onClick={() => navigate("/CreateEvent")}
                    className="relative px-10 py-4 text-1xl font-semibold text-white rounded-xl 
                    bg-blue-700 backdrop-blur-md border border-blue-500/30
                    hover:bg-blue-900 hover:border-blue-400
                    transition-all duration-300 ease-in-out
                    shadow-lg hover:shadow-blue-500/20
                    transform hover:-translate-y-1"
                >
                    <span className="relative z-10">Create Events</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                <button
                    onClick={() => navigate("/ExploreEvent")}
                    className="relative px-10 py-4 text-1xl font-semibold text-white rounded-xl 
                    bg-emerald-700 backdrop-blur-md border border-emerald-500/30
                    hover:bg-emerald-900 hover:border-emerald-400
                    transition-all duration-300 ease-in-out
                    shadow-lg hover:shadow-emerald-500/20
                    transform hover:-translate-y-1"
                >
                    <span className="relative z-10">Explore Events</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </button>
            </div>
        </div>
    );
};

export default CreateEvent;