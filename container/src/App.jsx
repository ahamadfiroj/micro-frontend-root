import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
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
        <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? { color: "blue", fontWeight: "bold" } : {}
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? { color: "blue", fontWeight: "bold" } : {}
        }
      >
        About
      </NavLink>
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? { color: "blue", fontWeight: "bold" } : {}
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? { color: "blue", fontWeight: "bold" } : {}
        }
      >
        Privacy Policy
      </NavLink>
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