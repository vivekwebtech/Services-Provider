import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faCompass,
  faCode,
  faPalette,
  faCloud,
  faBolt,
  faDesktop,
  faCheckCircle,
  faUsers,
  faCamera
} from '@fortawesome/free-solid-svg-icons';
import './section7.css'; // You'll need to create this CSS file

const RioGramServices = () => {
  return (
    <div className="rio-gram-services">
      {/* Services Section */}
      <div className="services-section-container">
        <section className="services-section">
          <button className="section-badge">
            <FontAwesomeIcon icon={faBriefcase} /> RioGram Services
          </button>

          <h1 className="section-title">
            Services That Transform<br />
            <span className="highlight-gradient">Your Digital Vision</span>
          </h1>

          <p className="section-description">
            RioGram offers comprehensive digital solutions that cover every aspect of your technology needs,<br />
            from strategic planning to flawless implementation and ongoing support.
          </p>
        </section>

        <section className="services-card-section">
          <div className="service-card">
            <div className="icon-box" style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}>
              <FontAwesomeIcon icon={faCompass} />
            </div>
            <h3 className="service-title">Digital Strategy & Consulting</h3>
            <p className="service-description">
              Comprehensive digital transformation strategies that align technology with your business objectives
              and market opportunities.
            </p>
            <span className="badge blue-badge">200+ strategies delivered</span>
            <ul className="service-list">
              <li><FontAwesomeIcon icon={faCheckCircle} /> Market Analysis & Research</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Technology Roadmapping</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> ROI Optimization</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Competitive Intelligence</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="icon-box" style={{ background: 'linear-gradient(135deg, #10b981, #22c55e)' }}>
              <FontAwesomeIcon icon={faCode} />
            </div>
            <h3 className="service-title">Custom Software Development</h3>
            <p className="service-description">
              Bespoke software solutions built with cutting-edge technologies, scalable architecture, and industry
              best practices.
            </p>
            <span className="badge blue-badge">500+ applications built</span>
            <ul className="service-list">
              <li><FontAwesomeIcon icon={faCheckCircle} /> Web Applications</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Mobile Apps (iOS/Android)</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> API Development</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> System Integration</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="icon-box" style={{ background: 'linear-gradient(135deg, #ec4899, #a855f7)' }}>
              <FontAwesomeIcon icon={faPalette} />
            </div>
            <h3 className="service-title">UI/UX Design Excellence</h3>
            <p className="service-description">
              User-centered design that combines aesthetic beauty with functional excellence for optimal user
              experiences and engagement.
            </p>
            <span className="badge blue-badge">300+ designs created</span>
            <ul className="service-list">
              <li><FontAwesomeIcon icon={faCheckCircle} /> User Experience Design</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Interface Design</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Design Systems</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Prototyping & Testing</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="icon-box" style={{ background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)' }}>
              <FontAwesomeIcon icon={faCloud} />
            </div>
            <h3 className="service-title">Cloud & Infrastructure</h3>
            <p className="service-description">
              Scalable cloud solutions and infrastructure management that ensures reliability, security, and
              optimal performance.
            </p>
            <span className="badge blue-badge">150+ cloud migrations</span>
            <ul className="service-list">
              <li><FontAwesomeIcon icon={faCheckCircle} /> Cloud Migration</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> DevOps Implementation</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Security Solutions</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Performance Optimization</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="icon-box" style={{ background: 'linear-gradient(135deg, #f59e0b, #f97316)' }}>
              <FontAwesomeIcon icon={faBolt} />
            </div>
            <h3 className="service-title">AI & Machine Learning</h3>
            <p className="service-description">
              Intelligent solutions that leverage artificial intelligence and machine learning to automate
              processes and generate insights.
            </p>
            <span className="badge blue-badge">75+ AI solutions deployed</span>
            <ul className="service-list">
              <li><FontAwesomeIcon icon={faCheckCircle} /> Predictive Analytics</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Natural Language Processing</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Computer Vision</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Automation Solutions</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="icon-box" style={{ background: 'linear-gradient(135deg, #ef4444, #ec4899)' }}>
              <FontAwesomeIcon icon={faDesktop} />
            </div>
            <h3 className="service-title">E-commerce Solutions</h3>
            <p className="service-description">
              Complete e-commerce platforms that drive sales, enhance customer experience, and scale with your
              business growth.
            </p>
            <span className="badge blue-badge">100+ stores launched</span>
            <ul className="service-list">
              <li><FontAwesomeIcon icon={faCheckCircle} /> Online Store Development</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Payment Integration</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Inventory Management</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Analytics & Reporting</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Team Section */}
      <section className="team-intro-section">
        <div className="team-badge">
          <FontAwesomeIcon icon={faUsers} /> Meet the RioGram Team
        </div>
        <h2 className="team-heading">
          The Visionaries Behind<br />
          <span className="highlight-text">RioGram's Success</span>
        </h2>

        <p className="team-description">
          Meet the passionate individuals who bring creativity, expertise, and innovation to every RioGram project.
          Our diverse team combines years of experience with fresh perspectives to deliver exceptional results.
        </p>
      </section>

      <section className="team-members-section">
        <div className="team-member-card">
          <div className="image-container">
            <img src="../Screenshot 2025-07-03 182345.png" alt="Sarah Johnson" className="member-photo fade-effect" />
            <FontAwesomeIcon icon={faCamera} className="camera-icon" />
          </div>
          <div className="member-info">
            <h3>Sarah Johnson</h3>
            <p className="title">Chief Executive Officer</p>
            <p className="bio">
              With over 15 years of experience in technology leadership, Sarah drives RioGram's vision for innovation and sustainable growth in the digital landscape.
            </p>
            <div className="expertise-label">Expertise:</div>
            <div className="tags">
              <span>Strategic Planning</span>
              <span>Digital Transformation</span>
              <span>Team Leadership</span>
            </div>
            <div className="footer-note">Led 200+ successful digital transformations</div>
          </div>
        </div>

        <div className="team-member-card">
          <div className="image-container">
            <img src="../Screenshot 2025-07-03 182345.png" alt="Michael Chen" className="member-photo fade-effect" />
            <FontAwesomeIcon icon={faCamera} className="camera-icon" />
          </div>
          <div className="member-info">
            <h3 className="highlighted-name">Michael Chen</h3>
            <p className="title">Chief Technology Officer</p>
            <p className="bio">
              Michael spearheads RioGram's technical strategy, ensuring we remain at the cutting edge of emerging technologies and architectural excellence.
            </p>
            <div className="expertise-label">Expertise:</div>
            <div className="tags">
              <span>Cloud Architecture</span>
              <span>AI/ML Solutions</span>
              <span>DevOps Excellence</span>
            </div>
            <div className="footer-note">Architected systems serving 10M+ users</div>
          </div>
        </div>

        <div className="team-member-card">
          <div className="image-container">
            <img src="../Screenshot 2025-07-03 182345.png" alt="Michael Chen" className="member-photo fade-effect" />
            <FontAwesomeIcon icon={faCamera} className="camera-icon" />
          </div>
          <div className="member-info">
            <h3 className="highlighted-name">Michael Chen</h3>
            <p className="title">Chief Technology Officer</p>
            <p className="bio">
              Michael spearheads RioGram's technical strategy, ensuring we remain at the cutting edge of emerging technologies and architectural excellence.
            </p>
            <div className="expertise-label">Expertise:</div>
            <div className="tags">
              <span>Cloud Architecture</span>
              <span>AI/ML Solutions</span>
              <span>DevOps Excellence</span>
            </div>
            <div className="footer-note">Architected systems serving 10M+ users</div>
          </div>
        </div>

        <div className="team-member-card">
          <div className="image-container">
            <img src="../Screenshot 2025-07-03 182345.png" alt="Michael Chen" className="member-photo fade-effect" />
            <FontAwesomeIcon icon={faCamera} className="camera-icon" />
          </div>
          <div className="member-info">
            <h3 className="highlighted-name">Michael Chen</h3>
            <p className="title">Chief Technology Officer</p>
            <p className="bio">
              Michael spearheads RioGram's technical strategy, ensuring we remain at the cutting edge of emerging technologies and architectural excellence.
            </p>
            <div className="expertise-label">Expertise:</div>
            <div className="tags">
              <span>Cloud Architecture</span>
              <span>AI/ML Solutions</span>
              <span>DevOps Excellence</span>
            </div>
            <div className="footer-note">Architected systems serving 10M+ users</div>
          </div>
        </div>

        <div className="team-member-card">
          <div className="image-container">
            <img src="../Screenshot 2025-07-03 182345.png" alt="Michael Chen" className="member-photo fade-effect" />
            <FontAwesomeIcon icon={faCamera} className="camera-icon" />
          </div>
          <div className="member-info">
            <h3 className="highlighted-name">Michael Chen</h3>
            <p className="title">Chief Technology Officer</p>
            <p className="bio">
              Michael spearheads RioGram's technical strategy, ensuring we remain at the cutting edge of emerging technologies and architectural excellence.
            </p>
            <div className="expertise-label">Expertise:</div>
            <div className="tags">
              <span>Cloud Architecture</span>
              <span>AI/ML Solutions</span>
              <span>DevOps Excellence</span>
            </div>
            <div className="footer-note">Architected systems serving 10M+ users</div>
          </div>
        </div>

        <div className="team-member-card">
          <div className="image-container">
            <img src="../Screenshot 2025-07-03 182345.png" alt="Emily Rodriguez" className="member-photo fade-effect" />
            <FontAwesomeIcon icon={faCamera} className="camera-icon" />
          </div>
          <div className="member-info">
            <h3>Emily Rodriguez</h3>
            <p className="title">Head of Creative Design</p>
            <p className="bio">
              Emily transforms complex ideas into stunning visual experiences, leading RioGram's award-winning design team with creativity and strategic insight.
            </p>
            <div className="expertise-label">Expertise:</div>
            <div className="tags">
              <span>UX/UI Design</span>
              <span>Brand Strategy</span>
              <span>Design Systems</span>
            </div>
            <div className="footer-note">Winner of 15+ international design awards</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RioGramServices;