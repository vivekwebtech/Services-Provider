<section
              id="use-info"
              ref={el => (sectionRefs.current["use-info"] = el)}
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
              }}>
              <h2 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>👤 How We Use Your Information</h2>
              <div style={{
                background: "#e8f9f0",
                padding: "15px",
                borderRadius: "8px",
                marginBottom: "20px",
                fontSize: "1rem"
              }}>
                <p>
                  We use the information we collect for legitimate business purposes,
                  including:
                </p>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "15px"
              }}>
                <div style={{
                  background: "white",
                  borderRadius: "8px",
                  padding: "15px",
                  border: "1px solid #eee",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                }}>
                  <h3 style={{ marginBottom: "10px", fontSize: "1.1rem" }}>⚡ Service Delivery</h3>
                  <ul style={{
                    paddingLeft: "20px",
                    listStyleType: "disc",
                    margin: "0"
                  }}>
                    <li style={{ marginBottom: "5px", fontSize: "0.95rem" }}>Provide and maintain our services</li>
                    <li style={{ marginBottom: "5px", fontSize: "0.95rem" }}>Process transactions and payments</li>
                    <li style={{ marginBottom: "5px", fontSize: "0.95rem" }}>Deliver customer support</li>
                    <li style={{ marginBottom: "5px", fontSize: "0.95rem" }}>Send service-related notifications</li>
                  </ul>
                </div>

                <div style={{
                  background: "white",
                  borderRadius: "8px",
                  padding: "15px",
                  border: "1px solid #eee",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                }}>
                  <h3 style={{ marginBottom: "10px", fontSize: "1.1rem" }}>📧 Communication</h3>
                  <ul style={{
                    paddingLeft: "20px",
                    listStyleType: "disc",
                    margin: "0"
                  }}>
                    <li style={{ marginBottom: "5px", fontSize: "0.95rem" }}>Respond to inquiries and requests</li>
                    <li style={{ marginBottom: "5px", fontSize: "0.95rem" }}>Send marketing communications</li>
                    <li style={{ marginBottom: "5px", fontSize: "0.95rem" }}>Provide updates and announcements</li>
                    <li style={{ marginBottom: "5px", fontSize: "0.95rem" }}>Conduct surveys and feedback collection</li>
                  </ul>
                </div>

                <div style={{
                  background: "white",
                  borderRadius: "8px",
                  padding: "15px",
                  border: "1px solid #eee",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                }}>
                  <h3 style={{ marginBottom: "10px", fontSize: "1.1rem" }}>📈 Business Operations</h3>
                  <ul style={{
                    paddingLeft: "20px",
                    listStyleType: "disc",
                    margin: "0"
                  }}>
                    <li style={{ marginBottom: "5px", fontSize: "0.95rem" }}>Analyze usage patterns and trends</li>
                    <li style={{ marginBottom: "5px", fontSize: "0.95rem" }}>Improve our products and services</li>
                    <li style={{ marginBottom: "5px", fontSize: "0.95rem" }}>Conduct research and development</li>
                    <li style={{ marginBottom: "5px", fontSize: "0.95rem" }}>Manage business relationships</li>
                  </ul>
                </div>

                <div style={{
                  background: "white",
                  borderRadius: "8px",
                  padding: "15px",
                  border: "1px solid #eee",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                }}>
                  <h3 style={{ marginBottom: "10px", fontSize: "1.1rem" }}>🛡️ Legal & Security</h3>
                  <ul style={{
                    paddingLeft: "20px",
                    listStyleType: "disc",
                    margin: "0"
                  }}>
                    <li style={{ marginBottom: "5px", fontSize: "0.95rem" }}>Comply with legal obligations</li>
                    <li style={{ marginBottom: "5px", fontSize: "0.95rem" }}>Prevent fraud and abuse</li>
                    <li style={{ marginBottom: "5px", fontSize: "0.95rem" }}>Protect our rights and property</li>
                    <li style={{ marginBottom: "5px", fontSize: "0.95rem" }}>Ensure platform security</li>
                  </ul>
                </div>
              </div>
            </section>