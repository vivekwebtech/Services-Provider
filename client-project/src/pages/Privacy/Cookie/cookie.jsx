import React from "react";
import { FaGlobe, FaCookieBite, FaChartLine, FaCogs, FaAd } from "react-icons/fa";

const CookiesTracking = () => {
  return (
    <section
      id="cookies"
      style={{
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)',
        padding: '28px 32px',
        marginBottom: '28px',
        animation: 'fadein 0.7s',
        transition: 'box-shadow 0.3s',
        borderLeft: '5px solid #347ffc'
      }}
    >
      <h2 style={{
        fontSize: '1.5rem',
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: '#1a1a1a'
      }}>
        <FaGlobe aria-hidden="true" /> Cookies & Tracking Technologies
      </h2>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{
          fontSize: '1.2rem',
          marginBottom: '10px',
          color: '#1a1a1a'
        }}>What Are Cookies?</h3>
        <p style={{ marginBottom: '16px', color: '#444' }}>
          Cookies are small text files stored on your device when you visit our
          website. They help us provide you with a better browsing experience
          by remembering your preferences and analyzing how you use our site.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
        marginBottom: '20px'
      }}>
        <div style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)'
        }}>
          <h3 style={{
            fontSize: '1.1rem',
            marginTop: 0,
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#1a1a1a'
          }}>
            <FaCookieBite /> Essential Cookies
          </h3>
          <p style={{ marginBottom: '16px', color: '#444' }}>
            These cookies are necessary for the website to function properly:
          </p>
          <ul style={{ marginBottom: '16px', paddingLeft: '20px', color: '#444' }}>
            <li style={{ marginBottom: '8px' }}>Session management</li>
            <li style={{ marginBottom: '8px' }}>Security features</li>
            <li style={{ marginBottom: '8px' }}>Load balancing</li>
            <li style={{ marginBottom: '8px' }}>Form submissions</li>
          </ul>
        </div>

        <div style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)'
        }}>
          <h3 style={{
            fontSize: '1.1rem',
            marginTop: 0,
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#1a1a1a'
          }}>
            <FaChartLine /> Analytics Cookies
          </h3>
          <p style={{ marginBottom: '16px', color: '#444' }}>
            Help us understand how visitors interact with our website:
          </p>
          <ul style={{ marginBottom: '16px', paddingLeft: '20px', color: '#444' }}>
            <li style={{ marginBottom: '8px' }}>Page views and traffic sources</li>
            <li style={{ marginBottom: '8px' }}>User behavior patterns</li>
            <li style={{ marginBottom: '8px' }}>Performance metrics</li>
            <li style={{ marginBottom: '8px' }}>Error tracking</li>
          </ul>
        </div>

        <div style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)'
        }}>
          <h3 style={{
            fontSize: '1.1rem',
            marginTop: 0,
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#1a1a1a'
          }}>
            <FaCogs /> Functional Cookies
          </h3>
          <p style={{ marginBottom: '16px', color: '#444' }}>
            Enable enhanced functionality and personalization:
          </p>
          <ul style={{ marginBottom: '16px', paddingLeft: '20px', color: '#444' }}>
            <li style={{ marginBottom: '8px' }}>Language preferences</li>
            <li style={{ marginBottom: '8px' }}>Theme settings</li>
            <li style={{ marginBottom: '8px' }}>Saved preferences</li>
            <li style={{ marginBottom: '8px' }}>Customized content</li>
          </ul>
        </div>

        <div style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)'
        }}>
          <h3 style={{
            fontSize: '1.1rem',
            marginTop: 0,
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#1a1a1a'
          }}>
            <FaAd /> Marketing Cookies
          </h3>
          <p style={{ marginBottom: '16px', color: '#444' }}>
            Used to deliver relevant advertisements:
          </p>
          <ul style={{ marginBottom: '16px', paddingLeft: '20px', color: '#444' }}>
            <li style={{ marginBottom: '8px' }}>Targeted advertising</li>
            <li style={{ marginBottom: '8px' }}>Campaign effectiveness</li>
            <li style={{ marginBottom: '8px' }}>Social media integration</li>
            <li style={{ marginBottom: '8px' }}>Retargeting campaigns</li>
          </ul>
        </div>
      </div>

      <div style={{
        backgroundColor: '#eaf1ff',
        border: '1px solid #c5d9ff',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '10px'
      }}>
        <h3 style={{
          fontSize: '1.2rem',
          marginTop: 0,
          marginBottom: '12px',
          color: '#1a1a1a'
        }}>Managing Your Cookie Preferences</h3>
        <p style={{ marginBottom: '16px', color: '#444' }}>
          You can control and manage cookies in various ways. Most browsers allow you to:
        </p>
        <ul style={{ marginBottom: '16px', paddingLeft: '20px', color: '#444' }}>
          <li style={{ marginBottom: '8px' }}>
            <a href="#" style={{ color: '#1a73e8', textDecoration: 'none' }}>
              View what cookies are stored on your device
            </a>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <a href="#" style={{ color: '#1a73e8', textDecoration: 'none' }}>
              Delete cookies individually or all at once
            </a>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <a href="#" style={{ color: '#1a73e8', textDecoration: 'none' }}>
              Block third-party cookies
            </a>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <a href="#" style={{ color: '#1a73e8', textDecoration: 'none' }}>
              Block cookies from specific sites
            </a>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <a href="#" style={{ color: '#1a73e8', textDecoration: 'none' }}>
              Block all cookies from being set
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CookiesTracking;


                {/* {expandedSections["info-collect"] ? <FaChevronUp /> : <FaChevronDown />} */}
