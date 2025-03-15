import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <nav>
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? { color: "blue", fontWeight: "bold" } : {}
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) =>
          isActive ? { color: "blue", fontWeight: "bold" } : {}
        }
      >
        About
      </NavLink>
    </nav>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;