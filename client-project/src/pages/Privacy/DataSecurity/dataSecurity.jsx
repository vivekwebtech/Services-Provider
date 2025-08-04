import React from "react";

const DataSecurity = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      margin: "20px",
      background: "#fff",
      color: "#222",
    },
    title: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#000",
      marginBottom: "15px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    box: {
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "20px",
    },
    greenBox: {
      backgroundColor: "#e6f4ea",
      border: "1px solid #a8d5b2",
    },
    yellowBox: {
      backgroundColor: "#fff8e1",
      border: "1px solid #f5d67a",
    },
    boxTitle: {
      marginTop: 0,
      fontSize: "16px",
      fontWeight: "bold",
    },
    row: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
    },
    card: {
      flex: 1,
      minWidth: "260px",
      background: "#fff",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
    },
    cardTitle: {
      fontSize: "15px",
      marginTop: 0,
      fontWeight: "bold",
    },
    ul: {
      margin: 0,
      paddingLeft: "20px",
    },
    li: {
      marginBottom: "6px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🔒 Data Security and Protection</h1>

      <div style={{ ...styles.box, ...styles.greenBox }}>
        <h2 style={styles.boxTitle}>✅ Our Commitment to Security</h2>
        <p>
          We implement industry-standard security measures to protect your personal information
          against unauthorized access, alteration, disclosure, or destruction.
        </p>
      </div>

      <div style={styles.row}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>💻 Technical Safeguards</h3>
          <ul style={styles.ul}>
            <li style={styles.li}>SSL/TLS encryption for data transmission</li>
            <li style={styles.li}>Advanced encryption for data at rest</li>
            <li style={styles.li}>Regular security audits and penetration testing</li>
            <li style={styles.li}>Multi-factor authentication systems</li>
            <li style={styles.li}>Intrusion detection and prevention systems</li>
            <li style={styles.li}>Regular software updates and patches</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>🛡 Administrative Safeguards</h3>
          <ul style={styles.ul}>
            <li style={styles.li}>Access controls and user authentication</li>
            <li style={styles.li}>Employee training on data protection</li>
            <li style={styles.li}>Background checks for personnel</li>
            <li style={styles.li}>Incident response procedures</li>
            <li style={styles.li}>Regular compliance assessments</li>
            <li style={styles.li}>Data breach notification protocols</li>
          </ul>
        </div>
      </div>

      <div style={{ ...styles.box, ...styles.yellowBox }}>
        <h2 style={styles.boxTitle}>⚠ Important Security Notice</h2>
        <p>
          While we implement robust security measures, no method of transmission over the internet
          or electronic storage is 100% secure. We cannot guarantee absolute security, but we
          continuously work to improve our security practices and respond quickly to any potential
          threats.
        </p>
      </div>
    </div>
  );
};

export default DataSecurity;
