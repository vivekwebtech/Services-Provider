import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/About/about';
// import ContactUs from './pages/Contact/contact';
import MainContent from './pages/Home/home';
function App() {
  return (
    <Router>
      <Header />
      <MainContent />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/contact" element={<ContactUs />} /> */}
        {/* Other routes */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
