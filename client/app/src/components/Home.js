import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="bg-slate-950 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl text-white font-bold mb-8">Welcome to My Full-Stack JobList Site</h1>
            <p className="text-white">Help me help you by simplifying your search</p>
            <div className="flex gap-4">
                <button className="bg-slate-300 text-black px-4 py-2 rounded"><Link to="/jobs" >Hiring</Link></button>
                <button className="bg-slate-300 text-black px-4 py-2 rounded"><Link to="/create" >Applying</Link></button>
            </div>
        </div>
    );
};