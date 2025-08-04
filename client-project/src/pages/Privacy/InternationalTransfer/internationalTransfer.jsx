import React from "react";

const InternationalDataTransfers = () => {
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
    infoBox: {
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
    },
    paragraph: {
      marginTop: 0,
      marginBottom: "10px",
    },
    list: {
      paddingLeft: "20px",
      margin: 0,
    },
    listItem: {
      marginBottom: "8px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌐 International Data Transfers</h1>

      <div style={styles.infoBox}>
        <p style={styles.paragraph}>
          Your personal information may be transferred to and processed in countries other than your
          country of residence. These countries may have different data protection laws than your country.
        </p>
        <p style={styles.paragraph}>
          When we transfer your personal information internationally, we ensure appropriate safeguards are in place:
        </p>

        <ul style={styles.list}>
          <li style={styles.listItem}>
            Standard Contractual Clauses approved by the European Commission
          </li>
          <li style={styles.listItem}>
            Adequacy decisions by relevant data protection authorities
          </li>
          <li style={styles.listItem}>
            Binding Corporate Rules for intra-group transfers
          </li>
          <li style={styles.listItem}>
            Certification schemes and codes of conduct
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InternationalDataTransfers;
