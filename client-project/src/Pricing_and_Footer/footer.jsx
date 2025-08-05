import React from "react";
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
  // Inline styles
  const styles = {
    footer: {
      backgroundColor: '#0d1117',
      color: '#fff',
      padding: '110px 5% 20px',
      minHeight: '450px',
      width: '100%',
      boxSizing: 'border-box'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '40px'
    },
    column: {
      flex: '1 1 220px',
      minWidth: '200px',
      marginBottom: '30px'
    },
    title: {
      marginBottom: '20px',
      fontSize: '18px',
      color: '#ffffff'
    },
    text: {
      color: '#ccc',
      lineHeight: '1.6',
      fontSize: '14px',
      margin: '0 0 15px 0'
    },
    list: {
      listStyle: 'none',
      padding: '0',
      margin: '0'
    },
    listItem: {
      marginBottom: '12px',
      fontSize: '14px',
      color: '#ccc',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px'
    },
    logoIcon: {
      fontSize: '28px',
      color: '#3b82f6',
      marginRight: '10px'
    },
    logoText: {
      fontSize: '20px',
      fontWeight: 'bold'
    },
    socialIcons: {
      display: 'flex',
      gap: '15px',
      marginTop: '20px'
    },
    socialIcon: {
      fontSize: '18px',
      color: '#ccc',
      cursor: 'pointer',
      transition: 'color 0.3s'
    },
    newsletter: {
      marginTop: '20px'
    },
    newsletterTitle: {
      fontSize: '18px',
      color: '#ffffff',
      marginBottom: '10px',
      fontWeight: '600'
    },
    newsletterText: {
      fontSize: '13px',
      marginBottom: '10px',
      color: '#ccc'
    },
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    },
    emailInput: {
      flex: '1',
      minWidth: '150px',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '6px',
      outline: 'none',
      backgroundColor: '#1a1f29',
      color: 'white'
    },
    submitButton: {
      padding: '10px 20px',
      backgroundColor: '#2563eb',
      border: 'none',
      borderRadius: '6px',
      color: 'white',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    footerBottom: {
      borderTop: '1px solid #1e293b',
      marginTop: '40px',
      paddingTop: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      fontSize: '13px',
      color: '#ccc',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    footerLink: {
      color: '#ccc',
      marginLeft: '20px',
      textDecoration: 'none',
      transition: 'color 0.3s'
    },
    secureBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    locationIcon: { color: '#5d88ea' },
    phoneIcon: { color: '#5d88ea' },
    emailIcon: { color: '#5d88ea' },
    shieldIcon: { color: '#10b981' },

    // Media queries
    '@media (max-width: 768px)': {
      footer: {
        padding: '80px 5% 20px',
        height: 'auto'
      },
      container: {
        flexDirection: 'column',
        gap: '30px'
      },
      column: {
        flex: '1 1 100%',
        minWidth: '100%'
      },
      form: {
        flexDirection: 'column'
      },
      emailInput: {
        width: '100%'
      },
      submitButton: {
        width: '100%'
      },
      footerBottom: {
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
        textAlign: 'center'
      },
      footerLink: {
        margin: '0 10px'
      }
    },
    '@media (min-width: 769px) and (max-width: 1024px)': {
      container: {
        gap: '30px'
      },
      column: {
        flex: '1 1 45%'
      }
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Column 1 */}
        <div style={styles.column}>
          <div style={styles.logoContainer}>
            <FaGlobe style={styles.logoIcon} />
            <span style={styles.logoText}>
              Rio<span style={{ color: "#fff" }}>Gram</span>
            </span>
          </div>
          <p style={styles.text}>
            Leading web solutions provider delivering innovative digital 
            experiences and custom development services to businesses worldwide.
          </p>
          <div style={styles.socialIcons}>
            <FaFacebook style={styles.socialIcon} />
            <FaTwitter style={styles.socialIcon} />
            <FaLinkedin style={styles.socialIcon} />
            <FaInstagram style={styles.socialIcon} />
          </div>
        </div>

        {/* Column 2 - Services */}
        <div style={styles.column}>
          <h3 style={styles.title}>Services</h3>
          <ul style={styles.list}>
            {['Web Development', 'Mobile Applications', 'E-commerce Solutions', 
              'Digital Marketing', 'SEO Optimization', 'Cloud Solutions', 
              'API Development', 'Maintenance & Support'].map((service) => (
              <li key={service} style={styles.listItem}>
                <FaAngleRight /> {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div style={styles.column}>
          <h3 style={styles.title}>Company</h3>
          <ul style={styles.list}>
            {['About Us', 'Our Team', 'Careers', 'Portfolio', 
              'Case Studies', 'Blog', 'News & Updates', 'Partners'].map((item) => (
              <li key={item} style={styles.listItem}>
                <FaAngleRight /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Contact Us */}
        <div style={styles.column}>
          <h3 style={styles.title}>Contact Us</h3>
          <p style={styles.text}>
            <FaLocationDot style={styles.locationIcon} /> 123 Business Street<br />
            Tech City, TC 12345<br />
            United States
          </p>
          <p style={styles.text}>
            <FaPhone style={styles.phoneIcon} /> +1 (234) 567-8900
          </p>
          <p style={styles.text}>
            <FaEnvelope style={styles.emailIcon} /> info@riogram.com
          </p>

          <div style={styles.newsletter}>
            <span style={styles.newsletterTitle}>Newsletter</span>
            <p style={styles.newsletterText}>Stay updated with our latest news and offers.</p>
            <form style={styles.form}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                style={styles.emailInput}
              />
              <button type="submit" style={styles.submitButton}>
                <FaEnvelope />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={styles.footerBottom}>
        <div>© 2025 RioGram. All rights reserved.</div>
        <div style={styles.secureBadge}>
          <FaShieldHalved style={styles.shieldIcon} /> Secure & Trusted
        </div>
        <div>
          <a href="#" style={styles.footerLink}>Privacy Policy</a>
          <a href="#" style={styles.footerLink}>Terms of Service</a>
          <a href="#" style={styles.footerLink}>Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;