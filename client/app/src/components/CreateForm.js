import React, { useState } from 'react';
import axios from 'axios';

const CreateForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !author || !content) {
      return;
    }

    try {
      await axios.post('http://localhost:5001/jobadd', { title, author, content });
      setTitle('');
      setAuthor('');
      setContent('');
      console.log('Posting created successfully!');
    } catch (error) {
      console.error('Error creating posting:', error.response?.data || error.message);
    }
  };

  return (
    <div className="m-20 p-20 bg-gray-200 rounded-lg text-center">
      <h1 className="font-bold text-2xl">Create Posting</h1>
      <div>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-5">
            <label htmlFor="title" className="block">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="author" className="block">
              Author:
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="content" className="block">
              Content:
            </label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>

          <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
