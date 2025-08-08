import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section
      id="contact"
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
        <FaEnvelope aria-hidden="true" /> Contact Information
      </h2>

      <div
        style={{
          backgroundColor: '#f0f8ff',
          border: '1px solid #cce7ff',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '20px'
        }}
      >
        <p style={{ marginBottom: '16px', color: '#444' }}>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data
          practices, please don't hesitate to contact us:
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginBottom: '20px'
          }}
        >
          {/* Email */}
          <div>
            <h3
              style={{
                fontSize: '1.1rem',
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#1a1a1a'
              }}
            >
              <FaEnvelope /> Email
            </h3>
            <p style={{ marginBottom: '16px', color: '#444' }}>privacy@riogram.com</p>
          </div>

          {/* Mailing Address */}
          <div>
            <h3
              style={{
                fontSize: '1.1rem',
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#1a1a1a'
              }}
            >
              <FaMapMarkerAlt /> Mailing Address
            </h3>
            <p style={{ marginBottom: '16px', color: '#444' }}>
              RioGram Privacy Office <br />
              123 Business Avenue <br />
              Tech City, TC 12345 <br />
              United States
            </p>
          </div>

          {/* Phone */}
          <div>
            <h3
              style={{
                fontSize: '1.1rem',
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#1a1a1a'
              }}
            >
              <FaPhone /> Phone
            </h3>
            <p style={{ marginBottom: '16px', color: '#444' }}>+1 (555) 123-4567</p>
          </div>
        </div>

        {/* Response Time Box */}
        <div
          style={{
            backgroundColor: '#fff',
            border: '1px solid #dce5f0',
            borderRadius: '6px',
            padding: '15px',
            marginBottom: '10px'
          }}
        >
          <p
            style={{
              marginBottom: '16px',
              color: '#444',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <FaClock /> <strong>Response Time:</strong> We aim to respond to all privacy-related inquiries
            within 5 business days. For urgent matters, please call our privacy hotline at +1 (555) 123-4567.
          </p>
        </div>
      </div>

      <footer
        style={{
          marginTop: '20px',
          paddingTop: '15px',
          borderTop: '1px solid #ddd',
          fontSize: '0.9rem',
          color: '#666'
        }}
      >
        This Privacy Policy is effective as of August 4, 2025 and applies to all information collected by
        RioGram.
      </footer>
    </section>
  );
};

export default ContactSection;
