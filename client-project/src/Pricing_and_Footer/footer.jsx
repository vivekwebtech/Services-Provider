import React from "react";
import "./footer.css";
import {
  FaGlobe,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaAngleRight,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaShieldHalved,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container1">
        {/* Column 1 */}
        <div className="footer-column">
          <div className="footer-logo">
            <FaGlobe />
            <span>
              Rio<span style={{ color: "#fff" }}>Gram</span>
            </span>
          </div>
          <p>
            Leading web solutions provider
            <br /> delivering innovative digital <br /> experiences and custom
            development <br /> services to businesses worldwide.
          </p>
          <div className="footer-social">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>

        {/* Column 2 - Services */}
        <div className="footer-column">
          <h3 className="footer-title1">Services</h3>
          <ul>
            <li>
              <FaAngleRight /> Web Development
            </li>
            <li>
              <FaAngleRight /> Mobile Applications
            </li>
            <li>
              <FaAngleRight /> E-commerce Solutions
            </li>
            <li>
              <FaAngleRight /> Digital Marketing
            </li>
            <li>
              <FaAngleRight /> SEO Optimization
            </li>
            <li>
              <FaAngleRight /> Cloud Solutions
            </li>
            <li>
              <FaAngleRight /> API Development
            </li>
            <li>
              <FaAngleRight /> Maintenance & Support
            </li>
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div className="footer-column">
          <h3 className="footer-title1">Company</h3>
          <ul>
            <li>
              <a href="/about">
                <FaAngleRight /> About Us
              </a>
            </li>
            <li>
              <FaAngleRight /> Our Team
            </li>
            <li>
              <FaAngleRight /> Careers
            </li>
            <li>
              <FaAngleRight /> Portfolio
            </li>
            <li>
              <FaAngleRight /> Case Studies
            </li>
            <li>
              <FaAngleRight /> Blog
            </li>
            <li>
              <FaAngleRight /> News & Updates
            </li>
            <li>
              <FaAngleRight /> Partners
            </li>
          </ul>
        </div>

        {/* Column 4 - Contact Us */}
        <div className="footer-column">
          <h3 className="footer-title1">Contact Us</h3>
          <p>
            <FaLocationDot /> 123 Business Street
            <br /> Tech City, TC 12345
            <br /> United States
          </p>
          <p>
            <FaPhone /> +1 (234) 567-8900
          </p>
          <p>
            <FaEnvelope /> info@riogram.com
          </p>

          <div className="newsletter">
            <span className="newsletter-title">Newsletter</span>
            <p>Stay updated with our latest news and offers.</p>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">
                <FaEnvelope />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div>© 2025 RioGram. All rights reserved.</div>
        <div className="secure-icon">
          <FaShieldHalved /> Secure & Trusted
        </div>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
