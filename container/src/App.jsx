import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Lazy load micro frontend components
const HomePage = lazy(() => import('main_content/HomePage'));
const AboutPage = lazy(() => import('main_content/AboutPage'));
const ContactPage = lazy(() => import('secondary_content/ContactPage'));
const PrivacyPage = lazy(() => import('secondary_content/PrivacyPage'));

const Loading = () => <div>Loading...</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </nav>
        
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;