import React, { useState } from 'react';
import axios from 'axios';
import './ResolveIssue.css';
 
const ResolveIssueComponent = () => {
  const [isbn, setISBN] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  const resolveIssue = async () => {
    try {
const response = await axios.put('http://localhost:8081/admin/resolveIssue/' + isbn, 
{},
{
  headers: {
    'token': token
  }
});
      if (response.data){
        setMessage("resolved issue")
      }
      setError(null);
    } catch (err) {
      setMessage('');
      setError(err.response.data.error || 'An error occurred');
    }
  };
 
  return (
    <div>
      <input
        type="number"
        value={isbn}
        onChange={(e) => setISBN(e.target.value)}
        placeholder="Enter ID"
      />
      <button onClick={resolveIssue}>Resolve Issue</button>
      {message && <p>{message}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};
 
export default ResolveIssueComponent;

