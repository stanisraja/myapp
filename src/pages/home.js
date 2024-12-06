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
        <Link to="Quiz">
          <button className="quiz-button" style={{ fontFamily: "Kanit" }}>
            Quiz
          </button>
        </Link>
        <Link to="Weather">
          <button className="weather-button" style={{ fontFamily: "Kanit" }}>
            Weather
          </button>
        </Link>
        <Link to="Faftube">
          <button className="faftube-button" style={{ fontFamily: "Kanit" }}>
            FafTube
          </button>
        </Link>
      </div>

      {/* Add Dialogflow Messenger */}
      <link
        rel="stylesheet"
        href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"
      />
      <script
        src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"
        async
      ></script>
      <df-messenger
        project-id="jollyinfo"
        agent-id="0fdb1b9c-80a9-40da-9ac5-f95d48e93833"
        language-code="en"
        max-query-length="-1"
      >
        <df-messenger-chat-bubble chat-title="Jolly"></df-messenger-chat-bubble>
      </df-messenger>

      {/* Inline Styling for Messenger */}
      <style>
        {`
          df-messenger {
            z-index: 9999;
            position: fixed;
            --df-messenger-font-color: #000;
            --df-messenger-font-family: Google Sans;
            --df-messenger-chat-background: #f3f6fc;
            --df-messenger-message-user-background: #d3e3fd;
            --df-messenger-message-bot-background: #fff;
            bottom: 16px;
            right: 16px;
            display: block;
            width: 400px; /* Adjust as needed */
            height: 600px; /* Adjust as needed */
          }
        `}
      </style>
    </div>
  );
};

export default Home;
