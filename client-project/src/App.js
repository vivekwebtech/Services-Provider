import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/About/about';
import ContactUs from './pages/ContactUs/ContactUs';
import MainContent from './pages/Home/home';
import PrivacyPolicy from './pages/Privacy/privacy';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/home" element={<MainContent />} />
        <Route path="/" element={<MainContent />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        {/* Other routes */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
