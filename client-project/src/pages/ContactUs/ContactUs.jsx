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
import {
  FaArrowDown,
  FaPaperPlane,
  FaPhone,
  FaEnvelope,
  FaComments,
  FaMapMarker,
  FaLink,
  FaChevronUp,
  FaChevronDown
} from "react-icons/fa";

const ContactUs = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  // Card/FAQ hover state logic
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const borderRadius = "8px";
  const blue = "#2836cc";
  const highlightColor = "#ff6b6b";
  const gray = "#777";

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f7f9fc",
        color: "#333",
      }}
    >
      {/* Responsive and interactive custom CSS */}
      <style>{`
        .contact-hero {
          background: linear-gradient(to right, #3b28cc, #011a93);
          padding: 110px 10px 80px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .cta-row {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .cta-btn {
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: bold;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: background .18s, color .18s, border .18s;
          white-space: nowrap;
          outline: none;
          margin-bottom: 8px;
        }
        .btn-getintouch {
          color: #2836cc;
          background: #fff;
          border: 2px solid #fff;
        }
        .btn-getintouch:hover, .btn-getintouch:focus {
          background: #2836cc;
          color: #fff;
        }
        .btn-callus {
          color: #fff;
          background: transparent;
          border: 2px solid #fff;
        }
        .btn-callus:hover, .btn-callus:focus {
          background: #fff;
          color: #2836cc;
        }
        .contact-hero-title {
          font-size: 2.1rem;
          line-height: 1.2;
          color: #fff;
          margin: 0 0 10px 0;
          font-weight: bold;
        }
        .contact-hero-sub {
          color: #fff;
          font-size: 1.1rem;
          margin-bottom: 28px;
        }
        @media (min-width:600px) {
          .contact-hero-title { font-size: 3rem;}
          .cta-row { gap: 32px;}
        }
        @media (min-width:900px) {
          .contact-hero-title { font-size: 4rem;}
          .cta-row { gap: 48px;}
        }
        .arrow-bounce {
          margin-top: 40px;
          animation: bounce 2s infinite;
          display: inline-block;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-12px);}
        }

        /* RESPONSIVE MAIN LAYOUT SECTIONS */
        .contact-mainwrap {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
        }
        .contact-formcol,
        .contact-cardcol {
          flex: 1;
          min-width: 280px;
        }
        @media (max-width: 800px) {
          .contact-mainwrap { flex-direction:column;}
          .contact-formcol, .contact-cardcol { min-width: 0;}
        }

        .faq-q {
          font-weight: bold;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #111826;
          font-size: 1.1rem;
        }
        .faq-q:hover, .faq-q:focus {
          color: #2836cc;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="contact-hero">
        <div style={{ maxWidth: 880, width: "100%" }}>
          <h1 className="contact-hero-title">
            Let's Start a <span style={{ color: highlightColor }}>Conversation</span>
          </h1>
          <p className="contact-hero-sub">
            We're here to help you succeed. Reach out for collaboration, support, or anything else!
          </p>
          <div className="cta-row">
            <a
              href="#contact-container"
              className="cta-btn btn-getintouch"
              tabIndex={0}
            >
              Get in Touch
            </a>
            <a
              href="tel:+15551234567"
              className="cta-btn btn-callus"
              tabIndex={0}
              style={{ display: "flex", alignItems: "center", gap: 7 }}
            >
              <FaPhone /> Call Us Now
            </a>
          </div>
          <a href="#contact-container" className="arrow-bounce" aria-label="Jump to contact">
            <FaArrowDown style={{ fontSize: "32px", color: "#fff" }} />
          </a>
        </div>
      </section>

      {/* CONTACT FORM + CARDS */}
      <section style={{ padding: "60px 15px 60px 15px", background: "#fff" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: 60,
            marginTop: 30,
          }}
        >
          <h2
            style={{
              color: "#5041BC",
              fontSize: "42px",
              marginBottom: "15px",
              fontWeight: "bold",
            }}
          >
            Ready to Connect?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "black",
              margin: "0 auto",
              maxWidth: "680px",
            }}
          >
            Choose a method that works best for you—fill out our form or use any of the options on the right to reach us directly. We look forward to hearing from you and building lasting relationships!
          </p>
        </div>
        <div className="contact-mainwrap" id="contact-container">
          {/* Contact Form */}
          <div className="contact-formcol" style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.05)"
          }}>
            <form>
              <div style={{
                display: "flex",
                gap: "20px",
                marginBottom: "20px",
                flexWrap: "wrap"
              }}>
                <div style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  minWidth: "180px"
                }}>
                  <label htmlFor="fullname" style={{ marginBottom: 8, fontWeight: "600" }}>Full Name *</label>
                  <input
                    type="text"
                    id="fullname"
                    placeholder="John Doe"
                    required
                    style={{
                      padding: "12px",
                      fontSize: 16,
                      border: "1px solid #ccc",
                      borderRadius,
                      outline: "none",
                      width: "100%",
                    }}
                  />
                </div>
                <div style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  minWidth: "180px"
                }}>
                  <label htmlFor="email" style={{ marginBottom: 8, fontWeight: "600" }}>Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    required
                    style={{
                      padding: "12px",
                      fontSize: 16,
                      border: "1px solid #ccc",
                      borderRadius,
                      outline: "none",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="subject" style={{ marginBottom: 8, fontWeight: "600" }}>Subject *</label>
                <select id="subject"
                  required
                  style={{
                    padding: "12px",
                    fontSize: 16,
                    border: "1px solid #ccc",
                    borderRadius,
                    outline: "none",
                    width: "100%",
                  }}
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales & Partnerships</option>
                  <option value="career">Career Opportunities</option>
                  <option value="feedback">Feedback & Suggestions</option>
                </select>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="message" style={{ marginBottom: 8, fontWeight: "600" }}>Message *</label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Tell us how we can help you..."
                  required
                  style={{
                    padding: "12px",
                    fontSize: 16,
                    border: "1px solid #ccc",
                    borderRadius,
                    outline: "none",
                    width: "100%",
                    minHeight: "120px",
                    resize: "vertical"
                  }}
                ></textarea>
                <button
                  type="submit"
                  style={{
                    marginTop: 12,
                    padding: "12px 24px",
                    backgroundColor: blue,
                    color: "white",
                    border: "none",
                    borderRadius,
                    cursor: "pointer",
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    width: "100%",
                  }}
                >
                  <FaPaperPlane style={{ color: "white" }} /> Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Cards */}
          <div className="contact-cardcol">
            <ContactCard
              icon={<FaPhone style={{ color: blue }} />}
              title="Phone"
              content="+1 (555) 123-4567"
              sub="Mon–Fri 8am–6pm EST"
              borderRadius={borderRadius}
            />

            <ContactCard
              icon={<FaEnvelope style={{ color: blue }} />}
              title="Email"
              content="help@company.com"
              sub="We respond within 24 hours"
              borderRadius={borderRadius}
            />
            <ContactCard
              icon={<FaComments style={{ color: blue }} />}
              title="Live Chat"
              content="Available during business hours"
              borderRadius={borderRadius}
            />
            <ContactCard
              icon={<FaMapMarker style={{ color: blue }} />}
              title="Visit Our Office"
              content="123 Business Ave, NY 10001"
              button="Get Directions"
              borderRadius={borderRadius}
            />
            <ContactCard
              icon={<FaLink style={{ color: blue }} />}
              title="Follow Us"
              social
              borderRadius={borderRadius}
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "40px 20px",
        backgroundColor: "#fff",
        textAlign: "center",
        borderRadius: borderRadius,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        maxWidth: "900px",
        margin: "40px auto",
        flexWrap: "wrap"
      }}>
        <div style={{ padding: "20px", fontSize: "1.5rem", fontWeight: "bold", color: blue, minWidth: "150px" }}>
          &lt; 2hrs<br />
          <span style={{ display: "block", fontSize: "1rem", color: gray }}>Avg. Response Time</span>
        </div>
        <div style={{ padding: "20px", fontSize: "1.5rem", fontWeight: "bold", color: blue, minWidth: "150px" }}>
          98%<br />
          <span style={{ display: "block", fontSize: "1rem", color: gray }}>Customer Satisfaction</span>
        </div>
        <div style={{ padding: "20px", fontSize: "1.5rem", fontWeight: "bold", color: blue, minWidth: "150px" }}>
          24/7<br />
          <span style={{ display: "block", fontSize: "1rem", color: gray }}>Email & Support</span>
        </div>
      </section>

      {/* FAQ SECTION */}
     {/* FAQ SECTION */}
<section style={{ padding: "60px 20px", backgroundColor: "#f0f2f5" }}>
  <h2 style={{ textAlign: "center", fontSize: "2rem", color: "#111827", marginBottom: "15px" }}>
    Frequently Asked Questions
  </h2>
  <h4 style={{ textAlign: "center", fontSize: "1rem", color: "#4B5563", margin: "0 auto 30px", maxWidth: "700px" }}>
    Quick answers to common questions
  </h4>

  {[
    ["What's the best way to reach you?", "For urgent matters, call us at +1 (555) 123-4567. Otherwise, use the contact form or email and we'll respond as soon as possible."],
    ["Do you offer phone support?", "Yes! Our phone support is available Mon–Fri 8am–6pm EST. For quick questions, try our live chat too."],
    ["How quickly do you respond to emails?", "We aim to respond to all emails within 24 hours (usually much faster during business hours)."],
    ["Can I schedule a meeting or demo?", "Absolutely! Use our form and select 'Sales & Partnerships' or email us at help@company.com to arrange a time."],
    ["Do you provide technical support?", "Yes, we offer comprehensive technical support for all our products and services."]
  ].map(([q, a], i) => (
    <div
      key={i}
      style={{
        maxWidth: "800px",
        margin: "0 auto 20px",
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s",
        transform: activeFaq === i ? "translateY(-4px)" : "none"
      }}
    >
      <div
        className="faq-q"
        tabIndex={0}
        role="button"
        aria-expanded={activeFaq === i}
        aria-controls={`faq-a${i}`}
        onClick={() => toggleFaq(i)}
        onKeyDown={e => (e.key === "Enter" ? toggleFaq(i) : undefined)}
        style={{
          border: "none",
          background: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {q}
        {/* Dynamic Up/Down Icon */}
        {activeFaq === i ? (
          <FaChevronUp style={{ color: "#2836cc" }} />
        ) : (
          <FaChevronDown style={{ color: "#2836cc" }} />
        )}
      </div>

      {activeFaq === i && (
        <div
          id={`faq-a${i}`}
          style={{ paddingTop: 10, color: gray, fontSize: "0.95rem" }}
        >
          {a}
        </div>
      )}
    </div>
  ))}
</section>


      {/* FOOTER */}
      <div
        style={{
          backgroundColor: "#111827",
          padding: "40px 20px",
          textAlign: "center"
        }}
      >
        <section>
          <h2
            style={{
              fontSize: "2rem",
              color: "white",
              marginBottom: "15px",
              fontWeight: "bold"
            }}
          >
            Still Have Questions?
          </h2>
          <p
            style={{
              margin: "0 auto 30px",
              color: "white",
              maxWidth: "700px"
            }}
          >
            Don't hesitate to reach out—our team is ready to assist you!
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            <a
              href="mailto:support@yourcompany.com"
              style={{
                padding: "12px 28px",
                borderRadius,
                backgroundColor: blue,
                color: "white",
                border: "none",
                fontWeight: "bold",
                textDecoration: "none",
                // ":hover": {
                //   backgroundColor: "darken(blue, 5)"
                // }
              }}
            >
              Email Us
            </a>
            <a
              href="tel:+1234567890"
              style={{
                padding: "12px 28px",
                borderRadius,
                border: `2px solid ${blue}`,
                color: blue,
                backgroundColor: "white",
                fontWeight: "bold",
                textDecoration: "none",
                // ":hover": {
                //   backgroundColor: 'red'
                // }
              }}
            >
              Call Now
            </a>
          </div>
        </section>
        <hr style={{ border: "1px solid #242424", margin: "28px auto" }} />
        <footer
          style={{
            marginTop: "15px",
            fontSize: "14px",
            color: gray
          }}
        >
          <p>© 2025 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

// Card component
const ContactCard = ({
  icon,
  title,
  content,
  sub,
  button,
  social,
  borderRadius
}) => (
  <div
    style={{
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius,
      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
      marginBottom: "20px",
      gap: "15px",
      transition: "all 0.3s"
    }}
  >
    <div
      style={{
        backgroundColor: "#eef2ff",
        padding: "12px",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontSize: "1.35em"
      }}
    >
      {icon}
    </div>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ fontWeight: "bold", fontSize: "16px", color: "#111827", marginBottom: "4px" }}>
        {title}
      </div>
      {social ? (
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <a href="#" aria-label="Instagram" style={{ color: "#1a1a1a", fontSize: "20px" }}>
            <i className="fa fa-instagram" />
          </a>
          <a href="#" aria-label="Twitter" style={{ color: "#1a1a1a", fontSize: "20px" }}>
            <i className="fa fa-twitter" />
          </a>
          <a href="#" aria-label="LinkedIn" style={{ color: "#1a1a1a", fontSize: "20px" }}>
            <i className="fa fa-linkedin" />
          </a>
          <a href="#" aria-label="GitHub" style={{ color: "#1a1a1a", fontSize: "20px" }}>
            <i className="fa fa-github" />
          </a>
        </div>
      ) : (
        <>
          <div>{content}</div>
          {sub && <div style={{ color: "#6b7280", fontSize: "14px" }}>{sub}</div>}
          {button && (
            <button
              style={{
                color: "white",
                backgroundColor: "black",
                padding: "8px 12px",
                borderRadius,
                marginTop: "10px",
                border: "none",
                cursor: "pointer",
                fontSize: "0.9rem"
              }}
            >
              {button}
            </button>
          )}
        </>
      )}
    </div>
  </div>
);

export default ContactUs;


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
//     primaryColor: '#2836ccff',
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
//       color: 'white',
//       background: 'transparent'
//     },
//     btnPrimaryHover: {
//       backgroundColor: 'blue',
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
//       opacity: '0.7',
//       ':hover': {
//         opacity: 1,
//         transform: 'scale(1.02)'
//       }
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
//     <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", paddingTop: '0px', backgroundColor: '#f7f9fc', color: '#333' }}>
//       {/* HERO SECTION - CENTERED */}
//       <section style={{ 
//         background: 'linear-gradient(to right, #3b28cc, #011a93)', 
//         padding: '140px 20px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         textAlign: 'center'
//       }}>
//         <div style={{ maxWidth: '800px' }}>
//           <h1 style={{ 
//             fontSize: '72px', 
//             color: 'white', 
//             margin: 0,
//             lineHeight: '1.2',
//             marginBottom: '15px'
//           }}>
//             Let's Start a <span style={{ color: styles.highlightColor }}>Conversation</span>
//           </h1>
//           <p style={{ 
//             color: 'white', 
//             fontSize: '18px', 
//             margin: '0 auto 30px',
//             maxWidth: '600px'
//           }}>
//             We're here to help you succeed...
//           </p>
//           <div style={{ 
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             gap: '20px',
//             flexWrap: 'wrap'
//           }}>
//             <a href="#" style={{ 
//               ...styles.btn, 
//               ...styles.btnPrimary,
//               ':hover': {
//                 backgroundColor: 'blue',
//                 color: 'white'
//               }
//             }}>
//               Get in Touch
//             </a>
//             <span style={{ 
//               fontWeight: 'bold', 
//               color: 'white',
//               margin: '0 5px'
//             }}>
//               or
//             </span>
//             <a href="#" style={{ 
//               ...styles.btn, 
//               ...styles.btnOutline,
//               ':hover': {
//                 backgroundColor: 'white',
//                 color: 'blue'
//               }
//             }}>
//               Call Us Now
//             </a>
//           </div>
//           <div style={{ 
//             marginTop: '40px',
//             animation: 'bounce 2s infinite'
//           }}>
//             <a href="#contact-container" style={{ 
//               color: 'white', 
//               textDecoration: 'none',
//               display: 'inline-flex',
//               alignItems: 'center',
//               justifyContent: 'center'
//             }}>
//               <FaArrowDown style={{ fontSize: '32px' }} />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* REST OF THE COMPONENT REMAINS THE SAME */}
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
//   <div style={styles.card}>
//     <div style={styles.iconBox}>{icon}</div>
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#111827', marginBottom: '4px' }}>
//         {title}
//       </div>
//       {social ? (
//         <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
//           <a href="#" style={{ color: styles.textDark, fontSize: '20px', transition: 'color 0.3s', ':hover': { color: styles.highlightColor } }}>
//             <i className="fa fa-instagram" />
//           </a>
//           <a href="#" style={{ color: styles.textDark, fontSize: '20px', transition: 'color 0.3s', ':hover': { color: styles.highlightColor } }}>
//             <i className="fa fa-twitter" />
//           </a>
//           <a href="#" style={{ color: styles.textDark, fontSize: '20px', transition: 'color 0.3s', ':hover': { color: styles.highlightColor } }}>
//             <i className="fa fa-linkedin" />
//           </a>
//           <a href="#" style={{ color: styles.textDark, fontSize: '20px', transition: 'color 0.3s', ':hover': { color: styles.highlightColor } }}>
//             <i className="fa fa-github" />
//           </a>
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

