import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        1Page.click
      </div>
      <u1 className="navbar-menu">
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/quiz">Quiz</Link> </li>
        <li> <Link to="/weather">Weather</Link> </li>
        <li> <Link to="/faftube">Faftube</Link> </li>
      </u1>
    </div>  
  )
}

export default Navbar;
