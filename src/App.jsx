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
      <div className="app">
        <Header /> {/* Header inside Router but outside Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;