import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Quiz from './pages/quiz';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "quiz",
    element: <Quiz/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router router={router}>
    <App />
  </Router>
);