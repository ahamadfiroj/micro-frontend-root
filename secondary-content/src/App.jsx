import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ContactPage from './components/ContactPage';
import PrivacyPage from './components/PrivacyPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;