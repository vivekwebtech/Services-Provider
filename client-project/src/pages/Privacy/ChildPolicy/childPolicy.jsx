import React from "react";

const ChildrensPrivacy = () => {
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
    warningBox: {
      backgroundColor: "#fff5f0",
      border: "1px solid #f5d5c4",
      padding: "15px",
      borderRadius: "8px",
    },
    warningTitle: {
      marginTop: 0,
      fontSize: "18px",
      fontWeight: "bold",
      color: "#a94442",
    },
    warningText: {
      color: "#8b2f23",
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛡 Children's Privacy</h1>

      <div style={styles.warningBox}>
        <h3 style={styles.warningTitle}>⚠ Age Restrictions</h3>
        <p style={styles.warningText}>
          Our services are not intended for children under the age of 16. We do not knowingly collect
          personal information from children under 16 years of age.
        </p>
        <p style={styles.warningText}>
          If we become aware that we have collected personal information from a child under 16, we
          will take steps to delete such information promptly. If you believe we have collected
          information from a child under 16, please contact us immediately.
        </p>
      </div>
    </div>
  );
};

export default ChildrensPrivacy;


 