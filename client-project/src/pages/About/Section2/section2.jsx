import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faChartLine, 
  faBolt, 
  faMugHot, 
  faComments, 
  faAward 
} from '@fortawesome/free-solid-svg-icons';
import './section2.css'; // You'll need to create this CSS file with the styles from your original HTML

const DigitalInnovation = () => {
  return (
    <section className="hero">
      <div className="hero-content1">
        <button className="badge-btn">
          <FontAwesomeIcon icon={faBuilding} /> The RioGram Journey
        </button>
        <div className="hero-title">
          Building Tomorrow's Digital World,<br />
          <span className="highlight">One Innovation at a Time</span>
        </div>
        <p>
          Founded in 2012, RioGram began as a small team of visionary dreamers who believed that technology should enhance
          human experiences, not complicate them. What started in a modest co-working space has evolved into a global
          powerhouse for digital transformation.
        </p>
        <p>
          Today, RioGram is a thriving community of 85+ passionate professionals spanning designers, developers,
          strategists, and innovators...
        </p>
        <p>
          From our humble beginnings to serving Fortune 500 companies across 50+ countries, RioGram's journey has been
          fueled by curiosity, innovation...
        </p>
        <p>
          At RioGram, we don't just build software—we craft experiences, solve complex challenges, and create lasting
          value...
        </p>
        <div className="features">
          <div className="feature green">
            <div style={{
              background: 'linear-gradient(to right, #38ef7d, #11998e)',
              padding: '15px',
              borderRadius: '16px',
              display: 'inline-block'
            }}>
              <FontAwesomeIcon 
                icon={faChartLine} 
                style={{
                  color: 'white',
                  fontSize: '32px',
                  height: '50px'
                }} 
              />
            </div>
            <div>
              <h4 className="growth" style={{ fontSize: '20px' }}>Growth Focused</h4>
              <p className="description1" style={{ fontSize: '16px' }}>
                Sustainable scaling strategies<br />
                <span className="highlight1" style={{ fontSize: '14px' }}>
                  400% average client growth
                </span>
              </p>
            </div>
          </div>
          <div className="feature purple">
            <div style={{
              background: 'linear-gradient(to right, #c471f5, #fa71cd)',
              padding: '15px',
              borderRadius: '16px',
              display: 'inline-block'
            }}>
              <FontAwesomeIcon 
                icon={faBolt} 
                style={{
                  color: 'white',
                  fontSize: '32px',
                  height: '50px'
                }} 
              />
            </div>
            <div>
              <h4 className="innovation" style={{ fontSize: '20px' }}>Innovation First</h4>
              <p className="description2" style={{ fontSize: '16px' }}>
                Cutting-edge solutions<br />
                <span className="highlight2" style={{ fontSize: '14px' }}>
                  50+ patents filed
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img 
          className="fade-in" 
          src="https://img.freepik.com/free-photo/business-people-working_1098-15745.jpg" 
          alt="Office Work" 
        />
        {/* Coffee Cups Badge with fade-in effect */}
        <div className="badge top-right blue fade-in">
          <span className="badge-icon">
            <FontAwesomeIcon icon={faMugHot} style={{ color: 'white' }} />
          </span>
          <div className="badge-content">
            <strong>25K+</strong>
            <span>Coffee Cups</span>
            <span className="subtext1" style={{ color: '#a5f3fc' }}>
              Fueling innovation daily
            </span>
          </div>
        </div>

        {/* Support Badge with bounce animation */}
        <div className="badge middle-left fade-in">
          <FontAwesomeIcon icon={faComments} style={{ fontSize: '24px' }} />
          <strong style={{ fontSize: '18px' }}>24/7</strong>
          <span>Support</span>
        </div>
        
        {/* Industry Awards Badge with fade-in effect */}
        <div className="badge bottom-center yellow fade-in">
          <FontAwesomeIcon 
            icon={faAward} 
            className="badge-icon" 
            style={{ color: '#f1c40f' }} 
          />
          <div className="badge-content">
            <strong className="Awards" style={{ fontSize: '24px' }}>35+</strong>
            <span style={{ color: '#080808', fontSize: '16px' }}>Industry Awards</span>
            <span className="subtext2" style={{ color: '#d4a033' }}>
              Including "Best Digital Agency 2024"
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalInnovation;