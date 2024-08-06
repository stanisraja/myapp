import React from 'react';
import { topics } from './topics'; // Ensure the path to your data.js is correct
import './Home.css'; // Ensure the path to your CSS file is correct
import { Link } from 'react-router-dom';

const Home = () => {


  return (
    <div className="home-page">
      <img src="./../../public/img/Logo.png" alt="logo" />
      <div className="topics-container">
        {topics.map((topic) => (
          <Link
            to={`${topic.name}`}
            className="topic-card"
          >
              <img src={`https://picsum.photos/200?random=${topic.id}`} alt={topic.name} />
          </Link>
        ))}
        
      </div>
    </div>
  );
  
};

export default Home;
