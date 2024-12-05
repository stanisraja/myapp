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

    <link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css">
    <script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
    <df-messenger
      project-id="jollyinfo"
      agent-id="0fdb1b9c-80a9-40da-9ac5-f95d48e93833"
      language-code="en"
      max-query-length="-1">
      <df-messenger-chat-bubble
       chat-title="Jolly">
      </df-messenger-chat-bubble>
    </df-messenger>
    <style>
      df-messenger {
        z-index: 999;
        position: fixed;
        --df-messenger-font-color: #000;
        --df-messenger-font-family: Google Sans;
        --df-messenger-chat-background: #f3f6fc;
        --df-messenger-message-user-background: #d3e3fd;
        --df-messenger-message-bot-background: #fff;
        bottom: 16px;
        right: 16px;
      }
    </style>
    </div>
  );
  
};

export default Home;
