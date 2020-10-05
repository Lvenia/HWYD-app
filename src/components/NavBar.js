import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul className="nav nav-tabs">
      <Link
        className="nav-link active"
        to="/start"
      >
        <li className="nav-item">Start</li>
      </Link>
      <Link
        className="nav-link active"
        to="/quiz"
      >
        <li className="nav-item">Quiz</li>
      </Link>
      <Link
        className="nav-link active"
        to="/day"
      >
        <li className="nav-item">Day</li>
      </Link>
      <Link
        className="nav-link active"
        to="/data"
      >
        <li className="nav-item">All data</li>
      </Link>
    </ul>
  );
};

export default NavBar;

