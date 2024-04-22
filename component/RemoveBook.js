import React, { useState } from 'react';
import axios from 'axios';
import './RemoveBook.css';

const RemoveBooksComponent = () => {
  const [bookId, setBookId] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setBookId(e.target.value);
  };
  const token = localStorage.getItem('token');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!bookId) {
      setMessage('Please enter a book ID');
      return;
    }
    try {
      const response = await axios.delete(`http://localhost:8081/admin/deleteBook/${bookId}`,{
        headers: {
          'token': token
        }
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error removing book');
      console.error('Error removing book:', error);
    }

  };

  return (
    <div>
      <h2>Remove Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Book ID"
          value={bookId}
          onChange={handleChange}
        />
        <button type="submit">Remove Book</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RemoveBooksComponent;