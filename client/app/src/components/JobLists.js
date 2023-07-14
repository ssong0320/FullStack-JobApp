import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function JobLists() {

    const [jobs, setJobs] = useState([]);

    const fetchJobs = async () => {
        try {
            const res = await axios.get('http://localhost:5001/joblist');
            setJobs(res.data)
        }
        catch (error) {
            console.log('Failed to get the jobs', error);
        };
    };
    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <section className="py-20 text-center">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
            <h2 className="text-2xl font-semibold md:text-3xl">Job Postings</h2>
      
            <div className="mt-12 grid grid-auto-fit-lg gap-8">
              {jobs.map((job) => (
                <div key={job.id} className="grid2-item bg-slate-200 border border-gray-300 p-4 rounded-lg">
                    <h3>Position: {job.title}</h3>
                    <p>By: {job.author}</p>
                    <p>Description: {job.content}</p>
                    <button className="bg-white rounded-lg py-2 px-4 mt-4">Learn more</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}