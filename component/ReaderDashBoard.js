
import React, {useState, userState} from 'react';
import './ReaderDashBoard.css'; // Import your custom CSS file
import { Link } from 'react-router-dom';


const ReaderDashBoard = () => {
  const [ShowSearchBooks, setShowSearchBooks] = useState(false);
 const [ShowRaiseIssue, setShowRaiseIssue] = useState(false);
 const [ShowGetAllBooks, setShowGetAllBooks] = useState(false);
 

  const handleSearchBooksClick = () => {
    setShowSearchBooks(true);
  setShowRaiseIssue(false);
  setShowGetAllBooks(false);
};


const handleGetAllBooksClick = () => {
    setShowSearchBooks(false);
    setShowRaiseIssue(false);
    setShowGetAllBooks(true);
};

const handleRaiseIssueClick = () => {
    setShowSearchBooks(false);
  setShowGetAllBooks(false);
  setShowRaiseIssue(true);
};





  return (
    <div className="Reader-DahBoard">
         <header>
        <h1>Reader-DashBoard</h1>
        <h2>Bad libraries build collections, good libraries build services, great libraries build communities.</h2>
      </header>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/SearchByTitle" className="SearchBooks-button" >SearchBooks</Link>
          </li>
          <li>
          <Link to="/GetAllBooksComponent"className="GetAllBooks-button" >GetAllBooks</Link>
          </li>
          <li>
          <Link to="/RaiseIssue"className="RaiseIssue-button" >RaiseIssue</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ReaderDashBoard;

