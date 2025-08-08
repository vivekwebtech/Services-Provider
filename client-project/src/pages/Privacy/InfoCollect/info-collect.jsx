import React, { useRef, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';

const InfoCollectSection = () => {
  const sectionRefs = useRef({});

  // Optional: Scroll into view logic (if used)
  useEffect(() => {
    // Example of accessing the section: sectionRefs.current["info-collect"]
  }, []);

  return (
    <section
      id="info-collect"
      ref={el => (sectionRefs.current["info-collect"] = el)}
      tabIndex={-1}
      style={{
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)',
        padding: '28px 32px',
        marginBottom: '28px',
        animation: 'fadein 0.7s',
        transition: 'box-shadow 0.3s',
        borderLeft: '5px solid #347ffc'
      }}
    >
      <h2
        style={{
          fontSize: '1.5rem',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#1a1a1a'
        }}
      >
        <FaUser aria-hidden="true" /> Information We Collect
      </h2>

      <div>
        <h3
          style={{
            fontSize: '1.2rem',
            marginTop: '20px',
            marginBottom: '10px',
            color: '#333'
          }}
        >
          Personal Information
        </h3>
        <p style={{ marginBottom: '16px', color: '#444' }}>
          We collect personal information that you voluntarily provide to us when you:
        </p>
        <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
          {[
            'Create an account or register for our services',
            'Make a purchase or request a quote',
            'Subscribe to our newsletter or marketing communications',
            'Contact us through our website, email, or phone',
            'Participate in surveys, contests, or promotional activities',
            'Apply for employment opportunities'
          ].map((item, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>
              {item}
            </li>
          ))}
        </ul>

        <div
          style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '700px',
            margin: '20px auto',
            background: '#fff'
          }}
        >
          <div style={{ flex: 1, paddingRight: '30px' }}>
            <h2 style={{ color: '#111827', fontSize: '20px', marginBottom: '15px' }}>
              Types of Personal Data
            </h2>
            <h3 style={{ color: '#111827', fontSize: '16px', marginBottom: '8px' }}>
              Contact Information:
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: '18px',
                color: '#374151',
                lineHeight: 1.6
              }}
            >
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
            </ul>
          </div>

          <div style={{ flex: 1 }}>
            <h3
              style={{
                color: '#111827',
                fontSize: '16px',
                marginBottom: '8px',
                marginTop: '50px'
              }}
            >
              Professional Information:
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: '18px',
                color: '#374151',
                lineHeight: 1.6
              }}
            >
              <li>Company name</li>
              <li>Job title</li>
              <li>Industry</li>
              <li>Business requirements</li>
            </ul>
          </div>
        </div>

        <h3
          style={{
            fontSize: '1.2rem',
            marginTop: '20px',
            marginBottom: '10px',
            color: '#333'
          }}
        >
          Automatically Collected Information
        </h3>
        <p style={{ marginBottom: '16px', color: '#444' }}>
          When you access our services, we may automatically collect:
        </p>
        <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
          {[
            'Device information (IP address, browser type, operating system)',
            'Usage data (pages visited, time spent, clickstream data)',
            'Location data (general geographic location based on IP)',
            'Cookies and similar tracking technologies'
          ].map((item, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InfoCollectSection;
