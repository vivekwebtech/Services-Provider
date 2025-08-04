import React from "react";

const DataRetention = () => {
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
      backgroundColor: "#f8f9fa",
      border: "1px solid #ddd",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "20px",
    },
    tableBox: {
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
    },
    tableTitle: {
      marginTop: 0,
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    td: {
      padding: "10px",
      borderBottom: "1px solid #eee",
      verticalAlign: "top",
    },
    tdFirst: {
      fontWeight: 500,
    },
    link: {
      color: "#0056d2",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>⏱ Data Retention</h1>

      <div style={styles.introBox}>
        <p>
          We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.
        </p>
      </div>

      <div style={styles.tableBox}>
        <h3 style={styles.tableTitle}>Retention Periods</h3>
        <table style={styles.table}>
          <tbody>
            <tr>
              <td style={{ ...styles.td, ...styles.tdFirst }}>Account Information</td>
              <td style={styles.td}>
                <a style={styles.link} href="#">Duration of account + 3 years</a>
              </td>
            </tr>
            <tr>
              <td style={{ ...styles.td, ...styles.tdFirst }}>Transaction Records</td>
              <td style={styles.td}>
                <a style={styles.link} href="#">7 years (legal requirement)</a>
              </td>
            </tr>
            <tr>
              <td style={{ ...styles.td, ...styles.tdFirst }}>Marketing Communications</td>
              <td style={styles.td}>
                <a style={styles.link} href="#">Until unsubscribed + 2 years</a>
              </td>
            </tr>
            <tr>
              <td style={{ ...styles.td, ...styles.tdFirst }}>Website Analytics</td>
              <td style={styles.td}>
                <a style={styles.link} href="#">26 months</a>
              </td>
            </tr>
            <tr>
              <td style={{ ...styles.td, ...styles.tdFirst }}>Support Tickets</td>
              <td style={styles.td}>
                <a style={styles.link} href="#">3 years after resolution</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataRetention;
