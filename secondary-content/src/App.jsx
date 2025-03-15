import React from 'react';
import { BrowserRouter, Routes, Route,  NavLink  } from 'react-router-dom';
import ContactPage from './components/ContactPage';
import PrivacyPage from './components/PrivacyPage';
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
        Policy
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) =>
          isActive ? { color: "blue", fontWeight: "bold" } : {}
        }
      >
        Privacy
      </NavLink>
    </nav>
        
        <Routes>
          <Route path="/" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;