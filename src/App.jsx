// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Performance from './components/Performance';
import Activities from './components/Activities';
import Menu from './components/Menu';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header isHome={true} /><Home /></>} />
        <Route path="/performance" element={<><Header isHome={false} /><Performance /></>} />
        <Route path="/activities" element={<><Header isHome={false} /><Activities /></>} />
        <Route path="/menu" element={<><Header isHome={false} /><Menu /></>} />
      </Routes>
    </Router>
  );
}


export default App;