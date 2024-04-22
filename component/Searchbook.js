
import React, { useState } from 'react';
import axios from 'axios';
import './Searchbook.css';
function SearchByTitle() {
  const [title, setTitle] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const token = localStorage.getItem('token');
  const handleSearch = async () => {
    try {
const response = await axios.get(`http://localhost:8081/reader/searchByTitle/${title}`,{
    headers: {
      'token': token
    }
  });
      setSearchResult(response.data.status);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };
 
  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <p>{searchResult}</p>
    </div>
  );
}
 
export default SearchByTitle;