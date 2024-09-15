import React from 'react';
import './Home.css'; // Ensure the path to your CSS file is correct
import { Link } from 'react-router-dom';
import './soon.css';
import './weather.css';

const Home = () => {

  return (
    <div className="home-page">
      <div className="logo">
        <img src="../file.png" alt="1Page.Click" />
      </div>
      <div className="topics-container">
        <Link to={`Quiz`}> 
          <button className='quiz-button' font-family="Kanit">Quiz</button>
        </Link> 
        <Link to={`Weather`}> 
          <button className='weather-button'font-family="Kanit">Weather</button>
        </Link> 
        <Link to={`Faftube`}> 
          <button className='faftube-button'font-family="Kanit">FafTube</button>
        </Link> 
      </div>
    </div>
  );
  
};

export default Home;
