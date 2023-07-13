import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


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
        <main className="container">
          <div className="blog-section">
            <h1>Recent Posts</h1>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Content</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
                  <tr key={index}>
                    <th>{job.id}</th>
                    <th>{job.title}</th>
                    <th>{job.author}</th>
                    <th>{job.content}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      );
    }

    