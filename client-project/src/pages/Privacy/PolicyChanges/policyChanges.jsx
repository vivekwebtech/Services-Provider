import React from "react";

const ChangesPrivacyPolicy = () => {
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
      margin: "0 0 10px 0",
    },
    listItem: {
      marginBottom: "8px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>⚠ Changes to This Privacy Policy</h1>

      <div style={styles.infoBox}>
        <p style={styles.paragraph}>
          We may update this Privacy Policy from time to time to reflect changes in our practices,
          technology, legal requirements, or other factors. When we make changes, we will:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Update the "Last Updated" date at the top of this policy
          </li>
          <li style={styles.listItem}>
            Notify you via email if you have an account with us
          </li>
          <li style={styles.listItem}>
            Post a prominent notice on our website
          </li>
          <li style={styles.listItem}>
            Provide additional notice for material changes that affect your rights
          </li>
        </ul>
        <p style={styles.paragraph}>
          We encourage you to review this Privacy Policy periodically to stay informed about how we
          protect your information.
        </p>
      </div>
    </div>
  );
};

export default ChangesPrivacyPolicy;
