import React, { useRef, useEffect } from 'react';
import { FaShareAlt } from 'react-icons/fa';

const SharingSection = () => {
  const sectionRefs = useRef({});

  useEffect(() => {
    // Optional useRef logic can go here
  }, []);

  return (
    <section
      id="sharing"
      ref={el => (sectionRefs.current["sharing"] = el)}
      tabIndex={-1}
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
        <FaShareAlt aria-hidden="true" /> Information Sharing
      </h2>

      <div
        style={{
          backgroundColor: '#fdecea',
          border: '1px solid #f5c2c0',
          padding: '15px',
          borderRadius: '8px',
          margin: '15px 0'
        }}
      >
        <strong
          style={{
            color: '#c62828',
            display: 'block',
            marginBottom: '5px'
          }}
        >
          ⚠ Important Notice
        </strong>
        We do not sell, rent, or trade your personal information to third parties for
        their marketing purposes. We only share your information in the limited
        circumstances described below.
      </div>

      {/* Service Providers */}
      <div
        style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '20px'
        }}
      >
        <h3 style={{ fontSize: '1.2rem', marginTop: 0, marginBottom: '10px' }}>
          Service Providers
        </h3>
        <p>
          We may share your information with trusted third-party service providers who
          assist us in:
        </p>
        <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
          {[
            'Payment processing and financial services',
            'Cloud hosting and data storage',
            'Email delivery and communication services',
            'Analytics and performance monitoring',
            'Customer support and help desk services',
            'Marketing and advertising platforms'
          ].map((item, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>
              {item}
            </li>
          ))}
        </ul>
        <p>
          These service providers are contractually obligated to protect your
          information and use it only for the specific services they provide to us.
        </p>
      </div>

      {/* Legal Requirements */}
      <div
        style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '20px'
        }}
      >
        <h3 style={{ fontSize: '1.2rem', marginTop: 0, marginBottom: '10px' }}>
          Legal Requirements
        </h3>
        <p>
          We may disclose your information when required by law or when we believe
          disclosure is necessary to:
        </p>
        <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
          {[
            'Comply with legal processes, court orders, or government requests',
            'Enforce our terms of service and other agreements',
            'Protect the rights, property, or safety of RioGram, our users, or others',
            'Investigate and prevent fraud, security breaches, or illegal activities',
            'Respond to emergency situations involving potential harm'
          ].map((item, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Business Transfers */}
      <div
        style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '20px'
        }}
      >
        <h3 style={{ fontSize: '1.2rem', marginTop: 0, marginBottom: '10px' }}>
          Business Transfers
        </h3>
        <p>
          In the event of a merger, acquisition, reorganization, or sale of assets, your
          information may be transferred as part of the transaction. We will notify you
          via email and/or prominent notice on our website of any change in ownership or
          control of your personal information.
        </p>
      </div>
    </section>
  );
};

export default SharingSection;
