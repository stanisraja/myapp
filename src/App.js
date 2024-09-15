import React from 'react';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import QuizPage from './pages/quiz';
import Weather from './pages/weather';
import Video from './pages/Video/Video';
import Tube from './pages/Tube/Tube';
import NavbarFaftube from './Components/NavbarFaftube/NavbarFaftube';
import { useState } from 'react';
import './Components/NavbarFaftube/NavbarFaftube.css';
import './index-faftube.css';
import './Components/Feed/Feed.css';
import './Components/PlayVideo/PlayVideo.css';
import './Components/Recommended/Recommended.css';
import './Components/Sidebar/Sidebar.css';
import './pages/Tube/Tube.css';
import './pages/Video/Video.css';

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizPage />} /> 
      <Route path="/weather" element={<Weather />} /> 
      <Route path="/faftube" element={
        
        <div>
          <NavbarFaftube setSidebar={setSidebar} /> 
          <Tube sidebar={sidebar} />
        </div>
      } />
      <Route path="/faftube/video/:categoryId/:videoId" element={<Video />} />
    </Routes>
  )
}
export default App;