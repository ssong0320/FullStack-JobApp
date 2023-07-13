import axios from "axios";
import React from "react";
import { useState } from "react";

const CreateForm = () => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (!id|| !title || !author || !content) {
        return;
      }
      try {
        await axios.post('http://localhost:5001/jobadd', {id, title, author, content });
        setId('');
        setTitle('');
        setAuthor('');
        setContent('');
      } catch (error) {
        console.error('Error adding blog:', error.response?.data || error.message);
      }
    };


    return (
        <div className="m-20 p-20 bg-gray-200 rounded-lg text-center">
            <h1 className="font-bold text-2xl">Create Posting</h1>
            <div>
            <form onSubmit={handleSubmit} className="mb-8">
                <label className="block mb-5">ID:</label>
                <input
                    type="number"
                    id="ID"
                    name="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                />

                <label className="block mb-5">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                />

                <label className="block mb-5">Author:</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                />

                <label className="block mb-5">Content:</label>
                <textarea
                    id="content"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                ></textarea>

                <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
                    Create
                </button>
                </form>

            </div>
        </div>
    )
}

export default CreateForm