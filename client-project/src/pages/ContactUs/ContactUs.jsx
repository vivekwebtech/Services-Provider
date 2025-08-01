// src/pages/ContactUs.jsx
import React, { useState } from "react";
import "./ContactUs.css";
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaComments, FaMapMarker, FaLink, FaArrowDown, FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleOverlayClick = () => setMenuOpen(false);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero1" style={{ alignItems: 'center' }}>
        <div className="hero-content">
          <h1>Let's Start a <span className="highlight">Conversation</span></h1>
          <p className="hero-description">We're here to help you succeed...</p>
          <div className="hero-buttons">
            <a href="#" className="btn btn-primary">Get in Touch</a>
            <span className="or">or</span>
            <a href="#" className="btn btn-outline">Call Us Now</a>
          </div>
          <div className="down-arrow">
            <a href="#contact-container" className="down-arrow-link"><FaArrowDown /></a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="connect">
          <h2 className="ready" style={{ color: '#5041BC' }}>Ready to Connect?</h2>
          <p className="subtext1">Choose the method that works best...</p>
          <p className="subtext2">...building lasting relationships with our clients.</p>
        </div>
        <div className="contact-container" id="contact-container">
          <div className="registration-form">
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullname">Full Name *</label>
                  <input type="text" id="fullname" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group1">
                  <label htmlFor="subject">Subject *</label>
                  <select id="subject" required>
                    <option value="" disabled>Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales & Partnerships</option>
                    <option value="career">Career Opportunities</option>
                    <option value="feedback">Feedback & Suggestions</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group1 full-width">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" rows="6" placeholder="Tell us how we can help you..." required></textarea>
                  <button type="submit" className="btn-send"><FaPaperPlane className="send-icon" /> Send Message</button>
                </div>
              </div>
            </form>
          </div>

          {/* CONTACT CARDS */}
          <div className="contact-cards">
            <Card icon={<FaPhone />} title="Phone" content="+1 (555) 123-4567" sub="Mon–Fri 8am–6pm EST" />
            <Card icon={<FaEnvelope />} title="Email" content="help@company.com" sub="We respond within 24 hours" />
            <Card icon={<FaComments />} title="Live Chat" content="Available during business hours" />
            <Card icon={<FaMapMarker />} title="Visit Our Office" content="123 Business Ave, NY 10001" button="Get Directions" />
            <Card icon={<FaLink />} title="Follow Us" social />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat-item">&lt; 2hrs<br /><span className="stat">Avg. Response Time</span></div>
        <div className="stat-item">98%<br /><span className="stat">Customer Satisfaction</span></div>
        <div className="stat-item">24/7<br /><span className="stat">Email & Support</span></div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <h4 className="faq-subtitle">Quick answers to common questions</h4>
        {[
          ["What's the best way to reach you?", "For urgent matters, call us..."],
          ["Do you offer phone support?", "Yes! Our phone support is available..."],
          ["How quickly do you respond to emails?", "We aim to respond to all emails within 24 hours."],
          ["Can I schedule a meeting or demo?", "Absolutely! Use our form and select 'Sales & Partnerships'..."],
          ["Do you provide technical support?", "Yes, we offer comprehensive technical support."],
        ].map(([q, a], i) => (
          <div key={i} className={`faq-item ${activeFaq === i ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleFaq(i)}>{q}<span>&#8964;</span></div>
            <div className="faq-answer">{a}</div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <div className="footer-container">
        <section className="contact-section1">
          <h2 className="quesstion2">Still Have Questions?</h2>
          <p className="paragraph1">Don't hesitate to reach out...</p>
          <div className="buttons">
            <a href="mailto:support@yourcompany.com" className="btn primary">Email Us</a>
            <a href="tel:+1234567890" className="btn secondary">Call Now</a>
          </div>
        </section>
        <hr style={{ border: "1px solid #242424", margin: "20px auto" }} />
        <footer className="footer">
          <p>© 2025 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

// Reusable card component
const Card = ({ icon, title, content, sub, button, social }) => (
  <div className="contact-card">
    <div className="icon-box">{icon}</div>
    <div className="contact-info">
      <div className="title">{title}</div>
      {social ? (
        <div className="social-icons">
          <a href="#"><i className="fa fa-instagram" /></a>
          <a href="#"><i className="fa fa-twitter" /></a>
          <a href="#"><i className="fa fa-linkedin" /></a>
          <a href="#"><i className="fa fa-github" /></a>
        </div>
      ) : (
        <>
          <div>{content}</div>
          {sub && <div className="hours">{sub}</div>}
          {button && <button className="btn-direction">{button}</button>}
        </>
      )}
    </div>
  </div>
);

export default ContactUs;


