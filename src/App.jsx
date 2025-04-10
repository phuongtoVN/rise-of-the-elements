// src/App.jsx
import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Performance from './components/Performance';
import Activities from './components/Activities';
import Menu from './components/Menu';
import './App.css';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle hash-based redirects from 404.html
    if (location.hash && location.pathname === '/index.html') {
      const path = location.hash.replace('#', '');
      navigate(path);
    }
  }, [location, navigate]);

  return (
    <Routes>
      <Route path="/" element={<><Header isHome={true} /><Home /></>} />
      <Route path="/performance" element={<><Header isHome={false} /><Performance /></>} />
      <Route path="/activities" element={<><Header isHome={false} /><Activities /></>} />
      <Route path="/menu" element={<><Header isHome={false} /><Menu /></>} />
      <Route path="*" element={<h1 style={{ textAlign: 'center' }}>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
