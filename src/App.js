import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import QuizPage from './pages/quiz';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
};

export default App;