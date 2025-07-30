import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhoneAlt, 
  faMapMarkerAlt, 
  faHeadphonesAlt,
  faPlay
} from '@fortawesome/free-solid-svg-icons';
import './section9.css'; // You'll need to create this CSS file

const RioGramContact = () => {
  return (
    <div className="main-container2">
      {/* Contact Section */}
      <section className="contact-section1">
        <div className="contact-left">
          <div className="contact-left-cards1">
            <h1 className="title">
              Ready to Start Your <br />
              <span className="gradient-text">RioGram Journey?</span>
            </h1>
            <p className="subtitle">
              Whether you have a groundbreaking project in mind or want to explore digital possibilities, RioGram is here to
              help. Let's create something extraordinary together that makes a real impact on your business and industry.
            </p>
          </div>

          <div className="contact-left-cards2">
            <div className="contact-card3">
              <div className="icon" style={{ background: 'linear-gradient(135deg, #00c6ff, #0072ff)' }}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="details1">
                <h3>Email RioGram</h3>
                <p>hello@riogram.com</p>
                <span className="note" style={{ color: '#00d4ff' }}>We respond within 2 hours</span>
              </div>
            </div>

            <div className="contact-card3">
              <div className="icon" style={{ background: 'linear-gradient(135deg, #ff00cc, #ff5e62)' }}>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <div className="details1">
                <h3>Call RioGram</h3>
                <p>+1 (555) 123-GRAM</p>
                <span className="note" style={{ color: '#c084fc' }}>Available 24/7 for urgent projects</span>
              </div>
            </div>

            <div className="contact-card3">
              <div className="icon" style={{ background: 'linear-gradient(135deg, #00c853, #43a047)' }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="details1">
                <h3>Visit RioGram</h3>
                <p>123 Innovation Street, Tech City, TC 12345</p>
                <span className="note" style={{ color: '#00e676' }}>Open workspace, coffee always ready</span>
              </div>
            </div>

            <div className="contact-card3">
              <div className="icon" style={{ background: 'linear-gradient(135deg, #ff9800, #ff5722)' }}>
                <FontAwesomeIcon icon={faHeadphonesAlt} />
              </div>
              <div className="details1">
                <h3>24/7 Support</h3>
                <p>support@riogram.com</p>
                <span className="note" style={{ color: '#ffb300' }}>Round-the-clock assistance</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form">
            <h2 className="form-title">Start Your RioGram Project</h2>
            <div className="form-group-double">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="John" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Doe" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" placeholder="Your Company Name" />
            </div>

            <div className="form-group">
              <label htmlFor="projectType">Project Type</label>
              <select id="projectType">
                <option>Select a RioGram Services</option>
                <option>Digital Strategy & Consulting</option>
                <option>Custom Software Development</option>
                <option>Cloud & Infrastructure</option>
                <option>UI/UX Design Excellence</option>
                <option>AI & Machine Learning</option>
                <option>E-commerce Solution</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="projectbudget">Project Budget</label>
              <select id="projectbudget">
                <option>Select budget range</option>
                <option>$10K-$25K</option>
                <option>$25K-$50K</option>
                <option>$50K-$100K</option>
                <option>$100K+</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell us about your project</label>
              <textarea 
                id="message" 
                rows="8" 
                required 
                placeholder="Describe your project goals, challenges, and how RioGram can help bring your vision to life..."
              ></textarea>
            </div>

            <div className="hero-buttons">
              <a href="#" className="btn btn-primary">
                <FontAwesomeIcon icon={faPlay} /> Launch Your RioGram Project
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <span className="brand">
            {/* Left Sparkle Icon */}
            <svg 
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

            {/* Brand Name */}
            <span className="brand-blink">RioGram</span>

            {/* Right Sparkle Icon */}
            <svg 
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

          <p className="copyright">
            © 2024 RioGram. Crafted with passion, precision, and endless creativity.
          </p>
          <p className="tagline">
            Transforming ideas into digital reality, one innovation at a time.
          </p>

          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RioGramContact;