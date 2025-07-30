import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBullseye,
  faLightbulb,
  faHeart,
  faShieldAlt,
  faUsers,
  faLeaf
} from '@fortawesome/free-solid-svg-icons';
import './section5.css'; // You'll need to create this CSS file

const CoreValues = () => {
  return (
    <>
      <section className="values-section">
        <div className="badge">
          <FontAwesomeIcon icon={faBullseye} /> RioGram's Core Values
        </div>
        <h2>
          Values That Drive<br /><span>Everything at RioGram</span>
        </h2>
        <p>
          RioGram's core values are more than principles—they're the foundation that guides every decision,
          every interaction, and every innovative solution we create for our clients worldwide.
        </p>
      </section>
      
      <section className="card-grid-section">
        <div className="card">
          <div className="icon" style={{ background: 'linear-gradient(to bottom right, #ffb300, #ff6f00)' }}>
            <FontAwesomeIcon icon={faLightbulb} />
          </div>
          <h3>Innovation Excellence</h3>
          <p>At RioGram, we constantly push technological boundaries, embracing emerging technologies and creative solutions to deliver exceptional results that shape the digital future.</p>
          <span className="badge">50+ Patents Filed</span>
        </div>

        <div className="card">
          <div className="icon" style={{ background: 'linear-gradient(to bottom right, #ff5e8e, #ff3d75)' }}>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <h3>Passionate Dedication</h3>
          <p>Our RioGram team is driven by genuine passion for creating meaningful digital experiences that solve real-world problems and make a lasting positive impact.</p>
          <span className="badge">98% Team Satisfaction</span>
        </div>

        <div className="card">
          <div className="icon" style={{ background: 'linear-gradient(to bottom right, #5a7dff, #354de8)' }}>
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
          <h3>Unwavering Integrity</h3>
          <p>RioGram builds lasting relationships through transparency, ethical practices, and consistent delivery on our promises to clients, partners, and stakeholders.</p>
          <span className="badge">Zero Security Breaches</span>
        </div>

        <div className="card">
          <div className="icon" style={{ background: 'linear-gradient(to bottom right, #00e676, #00c853)' }}>
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <h3>Collaborative Spirit</h3>
          <p>We believe the best results emerge from true collaboration, working closely with our clients as partners to achieve shared success and mutual growth.</p>
          <span className="badge">95% Client Retention</span>
        </div>

        <div className="card">
          <div className="icon" style={{ background: 'linear-gradient(to bottom right, #b388ff, #7c4dff)' }}>
            <FontAwesomeIcon icon={faBullseye} />
          </div>
          <h3>Excellence Standard</h3>
          <p>RioGram strives for perfection in every detail, ensuring our solutions consistently exceed expectations and set new industry benchmarks for quality.</p>
          <span className="badge">99.9% Uptime Record</span>
        </div>

        <div className="card">
          <div className="icon" style={{ background: 'linear-gradient(to bottom right, #00e5ff, #00bcd4)' }}>
            <FontAwesomeIcon icon={faLeaf} />
          </div>
          <h3>Visionary Leadership</h3>
          <p>We anticipate tomorrow's opportunities today, preparing innovative solutions that help our clients stay ahead of market trends and technological shifts.</p>
          <span className="badge">10+ Years Ahead</span>
        </div>
      </section>
    </>
  );
};

export default CoreValues;