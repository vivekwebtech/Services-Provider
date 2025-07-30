import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBriefcase,
  faStar,
  faUsers,
  faCalendarCheck,
  faGlobe,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import './section4.css'; // You'll need to create this CSS file

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="animated-bg">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      
      <div className="stats-header">
        <h2>Numbers That Showcase<br /><span>RioGram's Impact</span></h2>
        <p>Our achievements reflect RioGram's unwavering dedication to excellence and client success across every project, partnership, and innovation we deliver.</p>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="icon"><FontAwesomeIcon icon={faBriefcase} /></div>
          <h3>750+</h3>
          <h4>Projects Delivered</h4>
          <p>Successful digital solutions</p>
        </div> 

        <div className="stat-card">
          <div className="icon"><FontAwesomeIcon icon={faStar} /></div>
          <h3>99.2%</h3>
          <h4>Client Satisfaction</h4>
          <p>Consistently exceeding expectations</p>
        </div>

        <div className="stat-card">
          <div className="icon"><FontAwesomeIcon icon={faUsers} /></div>
          <h3>85+</h3>
          <h4>Expert Team Members</h4>
          <p>Talented professionals worldwide</p>
        </div>

        <div className="stat-card">
          <div className="icon"><FontAwesomeIcon icon={faCalendarCheck} /></div>
          <h3>12+</h3>
          <h4>Years of Excellence</h4>
          <p>Proven track record</p>
        </div>

        <div className="stat-card">
          <div className="icon"><FontAwesomeIcon icon={faGlobe} /></div>
          <h3>50+</h3>
          <h4>Countries Served</h4>
          <p>Global reach and impact</p>
        </div>

        <div className="stat-card">
          <div className="icon"><FontAwesomeIcon icon={faChartLine} /></div>
          <h3>1M+</h3>
          <h4>Users Impacted</h4>
          <p>Lives touched by our solutions</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;