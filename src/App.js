import React from 'react';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import QuizPage from './pages/quiz';
import Soon from './pages/soon';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizPage />} /> 
      <Route path="/soon" element={<Soon />} /> 
    </Routes>
  )
}


export default App;