// // src/pages/ContactUs.jsx
// import React, { useState } from "react";
// import { FaBars, FaTimes, FaPhone, FaEnvelope, FaComments, FaMapMarker, FaLink, FaArrowDown, FaPaperPlane } from "react-icons/fa";

// const ContactUs = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const handleOverlayClick = () => setMenuOpen(false);
//   const toggleFaq = (index) => {
//     setActiveFaq(activeFaq === index ? null : index);
//   };

//   // Reusable styles
//   const styles = {
//     primaryColor: '#3b28cc',
//     highlightColor: '#ff6b6b',
//     bgLight: '#f9f9f9',
//     textDark: '#1a1a1a',
//     gray: '#777',
//     borderRadius: '8px',
    
//     // Button styles
//     btn: {
//       padding: '12px 24px',
//       borderRadius: '8px',
//       textDecoration: 'none',
//       fontWeight: 'bold',
//       cursor: 'pointer',
//       fontSize: '1rem',
//       whiteSpace: 'nowrap'
//     },
//     btnPrimary: {
//       backgroundColor: 'white',
//       color: 'blue',
//       fontWeight: '400'
//     },
//     btnOutline: {
//       border: '2px solid white',
//       color: 'white'
//     },
    
//     // Card styles
//     card: {
//       cursor: 'pointer',
//       display: 'flex',
//       alignItems: 'center',
//       backgroundColor: '#fff',
//       padding: '20px',
//       borderRadius: '12px',
//       boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
//       marginBottom: '20px',
//       gap: '15px',
//       transition: 'all 0.4s ease-in-out',
//       opacity: '0.7'
//     },
//     cardHover: {
//       opacity: 1,
//       transform: 'scale(1.02)'
//     },
//     iconBox: {
//       backgroundColor: '#eef2ff',
//       padding: '12px',
//       borderRadius: '12px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       flexShrink: 0
//     },
    
//     // Form styles
//     formGroup: {
//       flex: 1,
//       display: 'flex',
//       flexDirection: 'column',
//       minWidth: '200px'
//     },
//     formInput: {
//       padding: '12px',
//       fontSize: '16px',
//       border: '1px solid #ccc',
//       borderRadius: '8px',
//       outline: 'none',
//       width: '100%',
//       boxSizing: 'border-box'
//     }
//   };

//   return (
//     <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", paddingTop: '70px', backgroundColor: '#f7f9fc', color: '#333' }}>
//       {/* HERO SECTION */}
//       <section style={{ 
//         background: 'linear-gradient(to right, #3b28cc, #011a93)', 
//         padding: '140px 40px', 
//         display: 'flex', 
//         justifyContent: 'center',
//         alignItems: 'center'
//       }}>
//         <div style={{ textAlign: 'center', maxWidth: '800px' }}>
//           <h1 style={{ 
//             fontSize: '72px', 
//             color: 'white', 
//             marginTop: 0, 
//             lineHeight: '1.2',
//             marginBottom: '15px'
//           }}>
//             Let's Start a <span style={{ color: styles.highlightColor }}>Conversation</span>
//           </h1>
//           <p style={{ 
//             color: 'white', 
//             fontSize: '18px', 
//             margin: '15px auto 30px'
//           }}>
//             We're here to help you succeed...
//           </p>
//           <div style={{ 
//             margin: '20px 0', 
//             display: 'flex', 
//             justifyContent: 'center', 
//             gap: '20px', 
//             flexWrap: 'wrap'
//           }}>
//             <a href="#" style={{ ...styles.btn, ...styles.btnPrimary }}>Get in Touch</a>
//             <span style={{ alignSelf: 'center', fontWeight: 'bold', color: 'white' }}>or</span>
//             <a href="#" style={{ ...styles.btn, ...styles.btnOutline }}>Call Us Now</a>
//           </div>
//           <div style={{ 
//             marginTop: '20px', 
//             fontSize: '24px', 
//             color: '#fff',
//             animation: 'bounce 2s infinite'
//           }}>
//             <a href="#contact-container" style={{ 
//               display: 'flex', 
//               justifyContent: 'center', 
//               marginTop: '20px', 
//               color: 'white', 
//               textDecoration: 'none', 
//               fontSize: '32px'
//             }}>
//               <FaArrowDown />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section style={{ padding: '60px 20px', backgroundColor: '#fff' }}>
//         <div style={{ textAlign: 'center', marginBottom: '100px', marginTop: '50px' }}>
//           <h2 style={{ color: '#5041BC', fontSize: '48px', marginBottom: '15px' }}>Ready to Connect?</h2>
//           <p style={{ fontSize: '1rem', color: 'black', margin: '0 auto 5px', maxWidth: '700px' }}>
//             Choose the method that works best...
//           </p>
//           <p style={{ fontSize: '1rem', color: 'black', margin: '0 auto', maxWidth: '700px' }}>
//             ...building lasting relationships with our clients.
//           </p>
//         </div>
//         <div style={{ 
//           display: 'flex', 
//           gap: '30px', 
//           flexWrap: 'wrap', 
//           justifyContent: 'space-between', 
//           maxWidth: '1200px', 
//           margin: '0 auto'
//         }} id="contact-container">
//           <div style={{ 
//             flex: 1, 
//             minWidth: '300px', 
//             backgroundColor: 'white', 
//             padding: '2rem', 
//             borderRadius: styles.borderRadius, 
//             boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)'
//           }}>
//             <form>
//               <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
//                 <div style={styles.formGroup}>
//                   <label htmlFor="fullname" style={{ marginBottom: '8px', fontWeight: '600' }}>Full Name *</label>
//                   <input 
//                     type="text" 
//                     id="fullname" 
//                     placeholder="John Doe" 
//                     required 
//                     style={styles.formInput}
//                   />
//                 </div>
//                 <div style={styles.formGroup}>
//                   <label htmlFor="email" style={{ marginBottom: '8px', fontWeight: '600' }}>Email Address *</label>
//                   <input 
//                     type="email" 
//                     id="email" 
//                     placeholder="john@example.com" 
//                     required 
//                     style={styles.formInput}
//                   />
//                 </div>
//               </div>

//               <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
//                 <div style={{ ...styles.formGroup, width: '100%' }}>
//                   <label htmlFor="subject" style={{ marginBottom: '8px', fontWeight: '600' }}>Subject *</label>
//                   <select id="subject" required style={styles.formInput}>
//                     <option value="" disabled>Select a subject</option>
//                     <option value="general">General Inquiry</option>
//                     <option value="support">Technical Support</option>
//                     <option value="sales">Sales & Partnerships</option>
//                     <option value="career">Career Opportunities</option>
//                     <option value="feedback">Feedback & Suggestions</option>
//                   </select>
//                 </div>
//               </div>

//               <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
//                 <div style={{ ...styles.formGroup, width: '100%' }}>
//                   <label htmlFor="message" style={{ marginBottom: '8px', fontWeight: '600' }}>Message *</label>
//                   <textarea 
//                     id="message" 
//                     rows="6" 
//                     placeholder="Tell us how we can help you..." 
//                     required 
//                     style={{ ...styles.formInput, minHeight: '120px', resize: 'vertical' }}
//                   ></textarea>
//                   <button 
//                     type="submit" 
//                     style={{ 
//                       marginTop: '10px', 
//                       padding: '12px 24px', 
//                       backgroundColor: styles.primaryColor, 
//                       color: 'white', 
//                       border: 'none', 
//                       borderRadius: styles.borderRadius, 
//                       cursor: 'pointer', 
//                       width: '100%', 
//                       fontSize: '1rem',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       gap: '8px'
//                     }}
//                   >
//                     <FaPaperPlane style={{ color: 'white' }} /> Send Message
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>

//           {/* CONTACT CARDS */}
//           <div style={{ flex: 1, minWidth: '300px' }}>
//             <Card 
//               icon={<FaPhone />} 
//               title="Phone" 
//               content="+1 (555) 123-4567" 
//               sub="Mon–Fri 8am–6pm EST" 
//               styles={styles}
//             />
//             <Card 
//               icon={<FaEnvelope />} 
//               title="Email" 
//               content="help@company.com" 
//               sub="We respond within 24 hours" 
//               styles={styles}
//             />
//             <Card 
//               icon={<FaComments />} 
//               title="Live Chat" 
//               content="Available during business hours" 
//               styles={styles}
//             />
//             <Card 
//               icon={<FaMapMarker />} 
//               title="Visit Our Office" 
//               content="123 Business Ave, NY 10001" 
//               button="Get Directions" 
//               styles={styles}
//             />
//             <Card 
//               icon={<FaLink />} 
//               title="Follow Us" 
//               social 
//               styles={styles}
//             />
//           </div>
//         </div>
//       </section>

//       {/* STATS */}
//       <section style={{ 
//         display: 'flex', 
//         justifyContent: 'center', 
//         gap: '20px', 
//         padding: '40px 20px', 
//         backgroundColor: '#fff', 
//         textAlign: 'center', 
//         borderRadius: styles.borderRadius, 
//         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
//         maxWidth: '900px', 
//         margin: '40px auto', 
//         flexWrap: 'wrap'
//       }}>
//         <div style={{ padding: '20px', fontSize: '1.5rem', fontWeight: 'bold', color: 'blue', minWidth: '150px' }}>
//           &lt; 2hrs<br />
//           <span style={{ display: 'block', fontSize: '1rem', color: styles.gray }}>Avg. Response Time</span>
//         </div>
//         <div style={{ padding: '20px', fontSize: '1.5rem', fontWeight: 'bold', color: 'blue', minWidth: '150px' }}>
//           98%<br />
//           <span style={{ display: 'block', fontSize: '1rem', color: styles.gray }}>Customer Satisfaction</span>
//         </div>
//         <div style={{ padding: '20px', fontSize: '1.5rem', fontWeight: 'bold', color: 'blue', minWidth: '150px' }}>
//           24/7<br />
//           <span style={{ display: 'block', fontSize: '1rem', color: styles.gray }}>Email & Support</span>
//         </div>
//       </section>

//       {/* FAQ SECTION */}
//       <section style={{ padding: '60px 20px', backgroundColor: '#f0f2f5' }}>
//         <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#111827', marginBottom: '15px' }}>
//           Frequently Asked Questions
//         </h2>
//         <h4 style={{ textAlign: 'center', fontSize: '1rem', color: '#4B5563', margin: '0 auto 30px', maxWidth: '700px' }}>
//           Quick answers to common questions
//         </h4>
//         {[
//           ["What's the best way to reach you?", "For urgent matters, call us..."],
//           ["Do you offer phone support?", "Yes! Our phone support is available..."],
//           ["How quickly do you respond to emails?", "We aim to respond to all emails within 24 hours."],
//           ["Can I schedule a meeting or demo?", "Absolutely! Use our form and select 'Sales & Partnerships'..."],
//           ["Do you provide technical support?", "Yes, we offer comprehensive technical support."],
//         ].map(([q, a], i) => (
//           <div 
//             key={i} 
//             style={{ 
//               maxWidth: '800px', 
//               margin: '0 auto 20px', 
//               backgroundColor: '#ffffff', 
//               padding: '20px', 
//               borderRadius: styles.borderRadius, 
//               boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
//               transition: 'transform 0.2s',
//               transform: activeFaq === i ? 'translateY(-4px)' : 'none'
//             }}
//           >
//             <div 
//               style={{ 
//                 fontWeight: 'bold', 
//                 cursor: 'pointer', 
//                 display: 'flex', 
//                 justifyContent: 'space-between', 
//                 alignItems: 'center', 
//                 color: '#111826', 
//                 fontSize: '1.1rem'
//               }} 
//               onClick={() => toggleFaq(i)}
//             >
//               {q}<span>&#8964;</span>
//             </div>
//             {activeFaq === i && (
//               <div style={{ paddingTop: '10px', color: styles.gray, fontSize: '0.95rem' }}>
//                 {a}
//               </div>
//             )}
//           </div>
//         ))}
//       </section>

//       {/* FOOTER */}
//       <div style={{ backgroundColor: '#111827', padding: '40px 20px', textAlign: 'center' }}>
//         <section>
//           <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '15px' }}>Still Have Questions?</h2>
//           <p style={{ margin: '0 auto 30px', color: 'white', maxWidth: '700px' }}>
//             Don't hesitate to reach out...
//           </p>
//           <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
//             <a 
//               href="mailto:support@yourcompany.com" 
//               style={{ 
//                 ...styles.btn, 
//                 backgroundColor: 'blue', 
//                 color: 'white'
//               }}
//             >
//               Email Us
//             </a>
//             <a 
//               href="tel:+1234567890" 
//               style={{ 
//                 ...styles.btn, 
//                 border: '2px solid #3b28cc', 
//                 color: '#3b28cc', 
//                 backgroundColor: 'white'
//               }}
//             >
//               Call Now
//             </a>
//           </div>
//         </section>
//         <hr style={{ border: "1px solid #242424", margin: "20px auto" }} />
//         <footer style={{ marginTop: '20px', fontSize: '14px', color: styles.gray }}>
//           <p>© 2025 Your Company. All rights reserved.</p>
//         </footer>
//       </div>

//       {/* Add global styles for animations */}
//       <style>{`
//         @keyframes bounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-12px); }
//         }
//       `}</style>
//     </div>
//   );
// };

// // Reusable card component with inline styles
// const Card = ({ icon, title, content, sub, button, social, styles }) => (
//   <div 
//     style={{ 
//       ...styles.card,
//       ':hover': {
//         opacity: 1,
//         transform: 'scale(1.02)'
//       }
//     }}
//   >
//     <div style={styles.iconBox}>{icon}</div>
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#111827', marginBottom: '4px' }}>
//         {title}
//       </div>
//       {social ? (
//         <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
//           <a href="#" style={{ color: styles.textDark, fontSize: '20px' }}><i className="fa fa-instagram" /></a>
//           <a href="#" style={{ color: styles.textDark, fontSize: '20px' }}><i className="fa fa-twitter" /></a>
//           <a href="#" style={{ color: styles.textDark, fontSize: '20px' }}><i className="fa fa-linkedin" /></a>
//           <a href="#" style={{ color: styles.textDark, fontSize: '20px' }}><i className="fa fa-github" /></a>
//         </div>
//       ) : (
//         <>
//           <div>{content}</div>
//           {sub && <div style={{ color: '#6b7280', fontSize: '14px' }}>{sub}</div>}
//           {button && (
//             <button style={{ 
//               color: 'white', 
//               backgroundColor: 'black', 
//               padding: '8px 12px', 
//               borderRadius: styles.borderRadius, 
//               marginTop: '10px', 
//               border: 'none', 
//               cursor: 'pointer', 
//               fontSize: '0.9rem'
//             }}>
//               {button}
//             </button>
//           )}
//         </>
//       )}
//     </div>
//   </div>
// );

// export default ContactUs;

import React, { useState } from "react";
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaComments, FaMapMarker, FaLink, FaArrowDown, FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleOverlayClick = () => setMenuOpen(false);
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Reusable styles
  const styles = {
    primaryColor: '#3b28cc',
    highlightColor: '#ff6b6b',
    bgLight: '#f9f9f9',
    textDark: '#1a1a1a',
    gray: '#777',
    borderRadius: '8px',
    
    // Button styles
    btn: {
      padding: '12px 24px',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '1rem',
      whiteSpace: 'nowrap'
    },
    btnPrimary: {
      backgroundColor: 'white',
      color: 'blue',
      fontWeight: '400'
    },
    btnOutline: {
      border: '2px solid white',
      color: 'white',
      background: 'transparent'
    },
    
    // Card styles
    card: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
      marginBottom: '20px',
      gap: '15px',
      transition: 'all 0.4s ease-in-out',
      opacity: '0.7',
      ':hover': {
        opacity: 1,
        transform: 'scale(1.02)'
      }
    },
    iconBox: {
      backgroundColor: '#eef2ff',
      padding: '12px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },
    
    // Form styles
    formGroup: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: '200px'
    },
    formInput: {
      padding: '12px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box'
    }
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", paddingTop: '70px', backgroundColor: '#f7f9fc', color: '#333' }}>
      {/* HERO SECTION - CENTERED */}
      <section style={{ 
        background: 'linear-gradient(to right, #3b28cc, #011a93)', 
        padding: '140px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{ 
            fontSize: '72px', 
            color: 'white', 
            margin: 0,
            lineHeight: '1.2',
            marginBottom: '15px'
          }}>
            Let's Start a <span style={{ color: styles.highlightColor }}>Conversation</span>
          </h1>
          <p style={{ 
            color: 'white', 
            fontSize: '18px', 
            margin: '0 auto 30px',
            maxWidth: '600px'
          }}>
            We're here to help you succeed...
          </p>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <a href="#" style={{ 
              ...styles.btn, 
              ...styles.btnPrimary,
              ':hover': {
                backgroundColor: 'blue',
                color: 'white'
              }
            }}>
              Get in Touch
            </a>
            <span style={{ 
              fontWeight: 'bold', 
              color: 'white',
              margin: '0 5px'
            }}>
              or
            </span>
            <a href="#" style={{ 
              ...styles.btn, 
              ...styles.btnOutline,
              ':hover': {
                backgroundColor: 'white',
                color: 'blue'
              }
            }}>
              Call Us Now
            </a>
          </div>
          <div style={{ 
            marginTop: '40px',
            animation: 'bounce 2s infinite'
          }}>
            <a href="#contact-container" style={{ 
              color: 'white', 
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <FaArrowDown style={{ fontSize: '32px' }} />
            </a>
          </div>
        </div>
      </section>

      {/* REST OF THE COMPONENT REMAINS THE SAME */}
      {/* CONTACT SECTION */}
      <section style={{ padding: '60px 20px', backgroundColor: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '100px', marginTop: '50px' }}>
          <h2 style={{ color: '#5041BC', fontSize: '48px', marginBottom: '15px' }}>Ready to Connect?</h2>
          <p style={{ fontSize: '1rem', color: 'black', margin: '0 auto 5px', maxWidth: '700px' }}>
            Choose the method that works best...
          </p>
          <p style={{ fontSize: '1rem', color: 'black', margin: '0 auto', maxWidth: '700px' }}>
            ...building lasting relationships with our clients.
          </p>
        </div>
        <div style={{ 
          display: 'flex', 
          gap: '30px', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between', 
          maxWidth: '1200px', 
          margin: '0 auto'
        }} id="contact-container">
          <div style={{ 
            flex: 1, 
            minWidth: '300px', 
            backgroundColor: 'white', 
            padding: '2rem', 
            borderRadius: styles.borderRadius, 
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)'
          }}>
            <form>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <div style={styles.formGroup}>
                  <label htmlFor="fullname" style={{ marginBottom: '8px', fontWeight: '600' }}>Full Name *</label>
                  <input 
                    type="text" 
                    id="fullname" 
                    placeholder="John Doe" 
                    required 
                    style={styles.formInput}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label htmlFor="email" style={{ marginBottom: '8px', fontWeight: '600' }}>Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    required 
                    style={styles.formInput}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <div style={{ ...styles.formGroup, width: '100%' }}>
                  <label htmlFor="subject" style={{ marginBottom: '8px', fontWeight: '600' }}>Subject *</label>
                  <select id="subject" required style={styles.formInput}>
                    <option value="" disabled>Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales & Partnerships</option>
                    <option value="career">Career Opportunities</option>
                    <option value="feedback">Feedback & Suggestions</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <div style={{ ...styles.formGroup, width: '100%' }}>
                  <label htmlFor="message" style={{ marginBottom: '8px', fontWeight: '600' }}>Message *</label>
                  <textarea 
                    id="message" 
                    rows="6" 
                    placeholder="Tell us how we can help you..." 
                    required 
                    style={{ ...styles.formInput, minHeight: '120px', resize: 'vertical' }}
                  ></textarea>
                  <button 
                    type="submit" 
                    style={{ 
                      marginTop: '10px', 
                      padding: '12px 24px', 
                      backgroundColor: styles.primaryColor, 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: styles.borderRadius, 
                      cursor: 'pointer', 
                      width: '100%', 
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <FaPaperPlane style={{ color: 'white' }} /> Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* CONTACT CARDS */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <Card 
              icon={<FaPhone />} 
              title="Phone" 
              content="+1 (555) 123-4567" 
              sub="Mon–Fri 8am–6pm EST" 
              styles={styles}
            />
            <Card 
              icon={<FaEnvelope />} 
              title="Email" 
              content="help@company.com" 
              sub="We respond within 24 hours" 
              styles={styles}
            />
            <Card 
              icon={<FaComments />} 
              title="Live Chat" 
              content="Available during business hours" 
              styles={styles}
            />
            <Card 
              icon={<FaMapMarker />} 
              title="Visit Our Office" 
              content="123 Business Ave, NY 10001" 
              button="Get Directions" 
              styles={styles}
            />
            <Card 
              icon={<FaLink />} 
              title="Follow Us" 
              social 
              styles={styles}
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px', 
        padding: '40px 20px', 
        backgroundColor: '#fff', 
        textAlign: 'center', 
        borderRadius: styles.borderRadius, 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
        maxWidth: '900px', 
        margin: '40px auto', 
        flexWrap: 'wrap'
      }}>
        <div style={{ padding: '20px', fontSize: '1.5rem', fontWeight: 'bold', color: 'blue', minWidth: '150px' }}>
          &lt; 2hrs<br />
          <span style={{ display: 'block', fontSize: '1rem', color: styles.gray }}>Avg. Response Time</span>
        </div>
        <div style={{ padding: '20px', fontSize: '1.5rem', fontWeight: 'bold', color: 'blue', minWidth: '150px' }}>
          98%<br />
          <span style={{ display: 'block', fontSize: '1rem', color: styles.gray }}>Customer Satisfaction</span>
        </div>
        <div style={{ padding: '20px', fontSize: '1.5rem', fontWeight: 'bold', color: 'blue', minWidth: '150px' }}>
          24/7<br />
          <span style={{ display: 'block', fontSize: '1rem', color: styles.gray }}>Email & Support</span>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: '60px 20px', backgroundColor: '#f0f2f5' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#111827', marginBottom: '15px' }}>
          Frequently Asked Questions
        </h2>
        <h4 style={{ textAlign: 'center', fontSize: '1rem', color: '#4B5563', margin: '0 auto 30px', maxWidth: '700px' }}>
          Quick answers to common questions
        </h4>
        {[
          ["What's the best way to reach you?", "For urgent matters, call us..."],
          ["Do you offer phone support?", "Yes! Our phone support is available..."],
          ["How quickly do you respond to emails?", "We aim to respond to all emails within 24 hours."],
          ["Can I schedule a meeting or demo?", "Absolutely! Use our form and select 'Sales & Partnerships'..."],
          ["Do you provide technical support?", "Yes, we offer comprehensive technical support."],
        ].map(([q, a], i) => (
          <div 
            key={i} 
            style={{ 
              maxWidth: '800px', 
              margin: '0 auto 20px', 
              backgroundColor: '#ffffff', 
              padding: '20px', 
              borderRadius: styles.borderRadius, 
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
              transition: 'transform 0.2s',
              transform: activeFaq === i ? 'translateY(-4px)' : 'none'
            }}
          >
            <div 
              style={{ 
                fontWeight: 'bold', 
                cursor: 'pointer', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                color: '#111826', 
                fontSize: '1.1rem'
              }} 
              onClick={() => toggleFaq(i)}
            >
              {q}<span>&#8964;</span>
            </div>
            {activeFaq === i && (
              <div style={{ paddingTop: '10px', color: styles.gray, fontSize: '0.95rem' }}>
                {a}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <div style={{ backgroundColor: '#111827', padding: '40px 20px', textAlign: 'center' }}>
        <section>
          <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '15px' }}>Still Have Questions?</h2>
          <p style={{ margin: '0 auto 30px', color: 'white', maxWidth: '700px' }}>
            Don't hesitate to reach out...
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a 
              href="mailto:support@yourcompany.com" 
              style={{ 
                ...styles.btn, 
                backgroundColor: 'blue', 
                color: 'white'
              }}
            >
              Email Us
            </a>
            <a 
              href="tel:+1234567890" 
              style={{ 
                ...styles.btn, 
                border: '2px solid #3b28cc', 
                color: '#3b28cc', 
                backgroundColor: 'white'
              }}
            >
              Call Now
            </a>
          </div>
        </section>
        <hr style={{ border: "1px solid #242424", margin: "20px auto" }} />
        <footer style={{ marginTop: '20px', fontSize: '14px', color: styles.gray }}>
          <p>© 2025 Your Company. All rights reserved.</p>
        </footer>
      </div>

      {/* Add global styles for animations */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
};

// Reusable card component with inline styles
const Card = ({ icon, title, content, sub, button, social, styles }) => (
  <div style={styles.card}>
    <div style={styles.iconBox}>{icon}</div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#111827', marginBottom: '4px' }}>
        {title}
      </div>
      {social ? (
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <a href="#" style={{ color: styles.textDark, fontSize: '20px', transition: 'color 0.3s', ':hover': { color: styles.highlightColor } }}>
            <i className="fa fa-instagram" />
          </a>
          <a href="#" style={{ color: styles.textDark, fontSize: '20px', transition: 'color 0.3s', ':hover': { color: styles.highlightColor } }}>
            <i className="fa fa-twitter" />
          </a>
          <a href="#" style={{ color: styles.textDark, fontSize: '20px', transition: 'color 0.3s', ':hover': { color: styles.highlightColor } }}>
            <i className="fa fa-linkedin" />
          </a>
          <a href="#" style={{ color: styles.textDark, fontSize: '20px', transition: 'color 0.3s', ':hover': { color: styles.highlightColor } }}>
            <i className="fa fa-github" />
          </a>
        </div>
      ) : (
        <>
          <div>{content}</div>
          {sub && <div style={{ color: '#6b7280', fontSize: '14px' }}>{sub}</div>}
          {button && (
            <button style={{ 
              color: 'white', 
              backgroundColor: 'black', 
              padding: '8px 12px', 
              borderRadius: styles.borderRadius, 
              marginTop: '10px', 
              border: 'none', 
              cursor: 'pointer', 
              fontSize: '0.9rem'
            }}>
              {button}
            </button>
          )}
        </>
      )}
    </div>
  </div>
);

export default ContactUs;