
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
          ⭐ Award-winning Digital Innovation at RioGram
          
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