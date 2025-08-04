
import React from 'react';
import { FaPlay, FaEye, FaCode, FaDatabase, FaBolt, FaCloud, FaMobileAlt, FaLayerGroup } from 'react-icons/fa';
import { FiSparkles } from 'react-icons/fi';
import './section1.css';

const RioGramHero = () => {
  return (
    <section className="hero-section">
      <div className="bg-blur-image"></div>

      <div className="animated-bg">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      <div className="overlay"></div>

      <div className="hero-content">
        <span className="badge3">
          ⭐ Award-winning Digital Innovation at RioGram <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#1c91a8" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-sparkles w-6 h-6 animate-pulse"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
              <path d="M5 3v4"></path>
              <path d="M19 17v4"></path>
              <path d="M3 5h4"></path>
              <path d="M17 19h4"></path>
            </svg>
          
        </span>

        <div className="hero-heading">
          <div className="highlight">RioGram</div>
          <div className="sub-heading">Transforms Digital Dreams</div>
          <div className="main-heading">Into Reality</div>
        </div>

        <p className="subtext">
          A passionate team of 85+ innovators, designers, and developers at RioGram,<br />
          dedicated to transforming bold ideas into extraordinary digital experiences that<br />
          shape industries and inspire the future.
        </p>

        <div className="hero-buttons">
          <a href="#" className="btn btn-primary"><FaPlay /> Discover RioGram's Story</a>
          <a href="#" className="btn btn-outline"><FaEye /> View Our Portfolio</a>
        </div> 

        <div className="icon-wrapper">
          <div className="icon-box"><FaCode /></div>
          <div className="icon-box"><FaDatabase /></div>
          <div className="icon-box"><FaBolt /></div>
          <div className="icon-box"><FaCloud /></div>
          <div className="icon-box"><FaMobileAlt /></div>
          <div className="icon-box"><FaLayerGroup /></div>
        </div>
      </div>

      
    </section>
  );
};

export default RioGramHero;