import React from "react";

const PrivacyRights = () => {
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
      marginBottom: "15px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    introBox: {
      backgroundColor: "#f3eaff",
      border: "1px solid #d9c8ff",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "20px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "20px",
    },
    card: {
      background: "#fff",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
    },
    cardTitle: {
      marginTop: 0,
      fontSize: "16px",
      fontWeight: "bold",
    },
    exerciseBox: {
      backgroundColor: "#f8f9fa",
      border: "1px solid #ddd",
      padding: "15px",
      borderRadius: "8px",
      marginTop: "25px",
    },
    exerciseTitle: {
      marginTop: 0,
      fontSize: "16px",
      fontWeight: "bold",
    },
    colorBorder: (color) => ({
      borderLeft: `4px solid ${color}`,
    }),
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>✔ Your Privacy Rights</h1>

      <div style={styles.introBox}>
        <p>
          Depending on your location and applicable laws (including GDPR, CCPA, and other
          privacy regulations), you may have the following rights regarding your personal
          information:
        </p>
      </div>

      <div style={styles.grid}>
        <div style={{ ...styles.card, ...styles.colorBorder("#2563eb") }}>
          <h3 style={styles.cardTitle}>Right to Access</h3>
          <p>
            Request a copy of the personal information we hold about you, including details
            about how we process it.
          </p>
        </div>

        <div style={{ ...styles.card, ...styles.colorBorder("#9333ea") }}>
          <h3 style={styles.cardTitle}>Right to Rectification</h3>
          <p>
            Request correction of inaccurate or incomplete personal information we hold
            about you.
          </p>
        </div>

        <div style={{ ...styles.card, ...styles.colorBorder("#dc2626") }}>
          <h3 style={styles.cardTitle}>Right to Deletion</h3>
          <p>
            Request deletion of your personal information, subject to certain legal and
            business requirements.
          </p>
        </div>

        <div style={{ ...styles.card, ...styles.colorBorder("#f97316") }}>
          <h3 style={styles.cardTitle}>Right to Object</h3>
          <p>
            Object to the processing of your personal information for direct marketing or
            other legitimate interests.
          </p>
        </div>

        <div style={{ ...styles.card, ...styles.colorBorder("#16a34a") }}>
          <h3 style={styles.cardTitle}>Right to Portability</h3>
          <p>
            Receive your personal information in a structured, machine-readable format for
            transfer to another service.
          </p>
        </div>

        <div style={{ ...styles.card, ...styles.colorBorder("#6b7280") }}>
          <h3 style={styles.cardTitle}>Right to Restriction</h3>
          <p>
            Request restriction of processing your personal information under certain
            circumstances.
          </p>
        </div>
      </div>

      <div style={styles.exerciseBox}>
        <h3 style={styles.exerciseTitle}>How to Exercise Your Rights</h3>
        <p>
          To exercise any of these rights, please contact us using the information provided
          in the "Contact Information" section. We will respond to your request within the
          timeframes required by applicable law, typically within 30 days.
        </p>
        <p>
          We may need to verify your identity before processing your request to ensure the
          security of your personal information.
        </p>
      </div>
    </div>
  );
};

export default PrivacyRights;
