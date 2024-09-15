import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Quiz from './pages/quiz';
import Weather from './pages/weather';
import Tube from './pages/Tube/Tube';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/quiz",
    element: <Quiz/>,
  },
  {
    path: "/weather",
    element: <Weather/>,
  },
  {
    path: "/faftube",
    element: <Tube/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router router={router}>
    <App />
  </Router>
);