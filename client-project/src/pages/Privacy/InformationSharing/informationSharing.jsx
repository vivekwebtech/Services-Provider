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
    transition: 'box-shadow 0.3s'
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
    <FaShareAlt aria-hidden="true" /> Information Sharing
  </h2>

  <div style={{
    backgroundColor: '#fdecea',
    border: '1px solid #f5c2c0',
    padding: '15px',
    borderRadius: '8px',
    margin: '15px 0'
  }}>
    <strong style={{ color: '#c62828', display: 'block', marginBottom: '5px' }}>⚠ Important Notice</strong>
    We do not sell, rent, or trade your personal information to third parties
    for their marketing purposes. We only share your information in the
    limited circumstances described below.
  </div>

  <div style={{
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px'
  }}>
    <h3 style={{ fontSize: '1.2rem', marginTop: 0, marginBottom: '10px' }}>Service Providers</h3>
    <p>
      We may share your information with trusted third-party service
      providers who assist us in:
    </p>
    <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
      <li style={{ marginBottom: '8px' }}>Payment processing and financial services</li>
      <li style={{ marginBottom: '8px' }}>Cloud hosting and data storage</li>
      <li style={{ marginBottom: '8px' }}>Email delivery and communication services</li>
      <li style={{ marginBottom: '8px' }}>Analytics and performance monitoring</li>
      <li style={{ marginBottom: '8px' }}>Customer support and help desk services</li>
      <li style={{ marginBottom: '8px' }}>Marketing and advertising platforms</li>
    </ul>
    <p>
      These service providers are contractually obligated to protect your
      information and use it only for the specific services they provide to
      us.
    </p>
  </div>

  <div style={{
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px'
  }}>
    <h3 style={{ fontSize: '1.2rem', marginTop: 0, marginBottom: '10px' }}>Legal Requirements</h3>
    <p>
      We may disclose your information when required by law or when we
      believe disclosure is necessary to:
    </p>
    <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
      <li style={{ marginBottom: '8px' }}>Comply with legal processes, court orders, or government requests</li>
      <li style={{ marginBottom: '8px' }}>Enforce our terms of service and other agreements</li>
      <li style={{ marginBottom: '8px' }}>Protect the rights, property, or safety of RioGram, our users, or others</li>
      <li style={{ marginBottom: '8px' }}>Investigate and prevent fraud, security breaches, or illegal activities</li>
      <li style={{ marginBottom: '8px' }}>Respond to emergency situations involving potential harm</li>
    </ul>

    <div style={{
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px'
  }}>
    <h3 style={{ fontSize: '1.2rem', marginTop: 0, marginBottom: '10px' }}>Business Transfers</h3>
    <p>
      In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of the transaction. We will notify you via email and/or prominent notice on our website of any change in ownership or control of your personal information.
    </p>
    </div>
  </div>
</section>