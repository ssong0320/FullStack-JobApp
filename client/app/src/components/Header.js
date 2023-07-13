import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-slate-700 text-white flex items-center justify-center">
            <h1 className="text-3xl p-4">FullStack Job-App</h1>
                <div className="flex-grow flex justify-center">
                    <h3 className="mr-8 hover:text-blue-500"><Link to="/" >Home</Link></h3>
                    <h3 className="mr-8 hover:text-blue-500"><Link to="/jobs" >Jobs</Link></h3>
                    <h3 className="mr-64 hover:text-blue-500"><Link to="/create" >Create</Link></h3>
                </div>
        </header>
    )
}