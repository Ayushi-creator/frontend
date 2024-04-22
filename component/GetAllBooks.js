import React, { useState, useEffect } from 'react';
import './GetAllBooks.css'
import axios from 'axios';

const GetAllBooksComponent = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
 const token=localStorage.getItem('token');
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8081/reader/getallbooks',{
          headers: {
            'token': token
          }
        });
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching books');
        setLoading(false);
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>All Books</h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <ul>
          {books.map(book => (
            <li key={book.ISBN}>
              {book.title} by {book.authors}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetAllBooksComponent;