// import React, { useEffect, useRef, useCallback, useState } from "react";
// import {
//   FaArrowLeft, FaFile, FaUser, FaUserShield, FaShareAlt, FaLock, FaGlobe,
//   FaCheckCircle, FaDatabase, FaPlane, FaChild, FaExclamationTriangle,
//   FaEnvelope, FaCalendar, FaChevronDown, FaChevronUp, FaMobileAlt, FaBuilding
// } from "react-icons/fa";
// import "./privacy.css";

// const sidebarSections = [
//   { id: "overview", label: "Overview", icon: <FaFile /> },
//   { id: "info-collect", label: "Information We Collect", icon: <FaUser /> },
//   { id: "use-info", label: "How We Use Information", icon: <FaUserShield /> },
//   { id: "sharing", label: "Information Sharing", icon: <FaShareAlt /> },
//   { id: "security", label: "Data Security", icon: <FaLock /> },
//   { id: "cookies", label: "Cookies & Tracking", icon: <FaGlobe /> },
//   { id: "rights", label: "Your Rights", icon: <FaCheckCircle /> },
//   { id: "retention", label: "Data Retention", icon: <FaDatabase /> },
//   { id: "transfers", label: "International Transfers", icon: <FaPlane /> },
//   { id: "children", label: "Children's Privacy", icon: <FaChild /> },
//   { id: "changes", label: "Policy Changes", icon: <FaExclamationTriangle /> },
//   { id: "contact", label: "Contact Information", icon: <FaEnvelope /> },
// ];

// const PrivacyPolicy = () => {
//   const sectionRefs = useRef({});
//   const [expandedSections, setExpandedSections] = useState({});
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Toggle section expansion
//   const toggleSection = useCallback((sectionId) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [sectionId]: !prev[sectionId]
//     }));
//   }, []);

//   // Smooth scroll & active section highlight
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPos = window.scrollY + 120;
//       let current = sidebarSections[0].id;
//       for (const sec of sidebarSections) {
//         const ref = sectionRefs.current[sec.id];
//         if (ref && ref.offsetTop <= scrollPos) {
//           current = sec.id;
//         }
//       }
//       document.querySelectorAll(".sidebar ul li").forEach((li) =>
//         li.classList.remove("active")
//       );
//       const activeLi = document.querySelector(
//         `.sidebar ul li[data-target="${current}"]`
//       );
//       if (activeLi) activeLi.classList.add("active");
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Sidebar link click handler
//   const handleSidebarClick = useCallback((e, id) => {
//     e.preventDefault();
//     const ref = sectionRefs.current[id];
//     ref?.scrollIntoView({ behavior: "smooth", block: "start" });
//     setIsMobileMenuOpen(false);
//   }, []);

//   // Auto-expand sections when they become active on scroll
//   useEffect(() => {
//     const activeLi = document.querySelector(".sidebar ul li.active");
//     if (activeLi) {
//       const sectionId = activeLi.getAttribute("data-target");
//       setExpandedSections(prev => ({ ...prev, [sectionId]: true }));
//     }
//   }, []);

//   return (
//     <div className="privacy-policy-root">
//       <header className="back-link">
//         <a href="/" aria-label="Back to Home">
//           <FaArrowLeft /> <span>Back to Home</span>
//         </a>
//       </header>

//       <div className="container">
//         {/* Mobile menu button */}
//         <button 
//           className="mobile-menu-button"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           aria-expanded={isMobileMenuOpen}
//           aria-label="Toggle privacy policy navigation"
//         >
//           {isMobileMenuOpen ? 'Hide Navigation' : 'Show Navigation'}
//           {isMobileMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
//         </button>

//         {/* Sidebar */}
//         <aside 
//           className={`sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`} 
//           aria-label="Privacy Policy navigation"
//         >
//           <h3 tabIndex={0}>Privacy Policy</h3>
//           <p className="sidebar-sub">Navigate through sections</p>
//           <nav>
//             <ul>
//               {sidebarSections.map(sec => (
//                 <li
//                   key={sec.id}
//                   data-target={sec.id}
//                   className="sidebar-link-item"
//                 >
//                   <a
//                     href={`#${sec.id}`}
//                     onClick={e => handleSidebarClick(e, sec.id)}
//                     aria-label={sec.label}
//                   >
//                     {sec.icon} <span>{sec.label}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="content" tabIndex={-1}>
//           <div className="policy-header">
//             <FaLock className="policy-icon" aria-hidden="true" />
//             <h1>Privacy Policy</h1>
//             <p>Your privacy is our priority. Learn how we protect and handle your data.</p>
//             <p className="last-updated">
//               <FaCalendar /> Last updated: August 1, 2025
//             </p>
//           </div>

//           {/* Overview Section */}
//           <section
//             id="overview"
//             className="card blue-card"
//             ref={el => (sectionRefs.current["overview"] = el)}
//             tabIndex={-1}
//           >
//             <h2>
//               <FaFile aria-hidden="true" /> Overview
//             </h2>
//             <p className="overview-text">
//               At RioGram, we are committed to protecting your privacy and ensuring the security of your personal information.
//               This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website,
//               use our services, or interact with us in any way.
//             </p>
//             <p>
//               By using our services, you consent to the data practices described in this policy.
//               We encourage you to read this policy carefully and contact us if you have any questions or concerns.
//             </p>
//           </section>

//           {/* Information We Collect Section */}
//           <section
//             id="info-collect"
//             className="card"
//             ref={el => (sectionRefs.current["info-collect"] = el)}
//             tabIndex={-1}
//           >
//             <button 
//               className="section-toggle" 
//               onClick={() => toggleSection("info-collect")}
//               aria-expanded={expandedSections["info-collect"]}
//               aria-controls="info-collect-content"
//             >
//               <h2>
//                 <FaUser aria-hidden="true" /> Information We Collect
//               </h2>
//               {expandedSections["info-collect"] ? <FaChevronUp /> : <FaChevronDown />}
//             </button>

//             <div 
//               id="info-collect-content"
//               className={`section-content ${expandedSections["info-collect"] ? 'expanded' : ''}`}
//             >
//               <h3>Personal Information</h3>
//               <p>We collect personal information that you voluntarily provide to us when you:</p>
//               <ul>
//                 <li>Create an account or register for our services</li>
//                 <li>Make a purchase or request a quote</li>
//                 <li>Subscribe to our newsletter or marketing communications</li>
//                 <li>Contact us through our website, email, or phone</li>
//                 <li>Participate in surveys, contests, or promotional activities</li>
//                 <li>Apply for employment opportunities</li>
//               </ul>

//               <h3>Automatically Collected Information</h3>
//               <p>When you access our services, we may automatically collect:</p>
//               <ul>
//                 <li>Device information (IP address, browser type, operating system)</li>
//                 <li>Usage data (pages visited, time spent, clickstream data)</li>
//                 <li>Location data (general geographic location based on IP)</li>
//                 <li>Cookies and similar tracking technologies</li>
//               </ul>
//             </div>
//           </section>

//           {/* How We Use Information Section */}
//           <section
//             id="use-info"
//             className="card"
//             ref={el => (sectionRefs.current["use-info"] = el)}
//             tabIndex={-1}
//           >
//             <button 
//               className="section-toggle" 
//               onClick={() => toggleSection("use-info")}
//               aria-expanded={expandedSections["use-info"]}
//               aria-controls="use-info-content"
//             >
//               <h2>
//                 <FaUserShield aria-hidden="true" /> How We Use Information
//               </h2>
//               {expandedSections["use-info"] ? <FaChevronUp /> : <FaChevronDown />}
//             </button>

//             <div 
//               id="use-info-content"
//               className={`section-content ${expandedSections["use-info"] ? 'expanded' : ''}`}
//             >
//               <p>We use the information we collect for various purposes, including:</p>
//               <ul>
//                 <li>To provide, operate, and maintain our services</li>
//                 <li>To improve, personalize, and expand our services</li>
//                 <li>To understand and analyze how you use our services</li>
//                 <li>To develop new products, services, features, and functionality</li>
//                 <li>To communicate with you for customer service, updates, and marketing</li>
//                 <li>To process transactions and send transaction notifications</li>
//                 <li>To prevent fraud and enhance security</li>
//                 <li>To comply with legal obligations and enforce our terms</li>
//               </ul>

//               <h3>Legal Basis for Processing</h3>
//               <p>We process your personal information based on:</p>
//               <ul>
//                 <li><strong>Consent:</strong> When you've given clear consent</li>
//                 <li><strong>Contract:</strong> When processing is necessary for a contract</li>
//                 <li><strong>Legal Obligation:</strong> When required by law</li>
//                 <li><strong>Legitimate Interests:</strong> When necessary for our legitimate business interests</li>
//               </ul>
//             </div>
//           </section>

//           {/* Information Sharing Section */}
//           <section
//             id="sharing"
//             className="card"
//             ref={el => (sectionRefs.current["sharing"] = el)}
//             tabIndex={-1}
//           >
//             <button 
//               className="section-toggle" 
//               onClick={() => toggleSection("sharing")}
//               aria-expanded={expandedSections["sharing"]}
//               aria-controls="sharing-content"
//             >
//               <h2>
//                 <FaShareAlt aria-hidden="true" /> Information Sharing
//               </h2>
//               {expandedSections["sharing"] ? <FaChevronUp /> : <FaChevronDown />}
//             </button>

//             <div 
//               id="sharing-content"
//               className={`section-content ${expandedSections["sharing"] ? 'expanded' : ''}`}
//             >
//               <p>We may share your information in the following circumstances:</p>

//               <h3>Service Providers</h3>
//               <p>We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, perform service-related services, or assist us in analyzing how our services are used.</p>

//               <h3>Business Transfers</h3>
//               <p>If we are involved in a merger, acquisition, or asset sale, your personal information may be transferred.</p>

//               <h3>Legal Requirements</h3>
//               <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities.</p>

//               <h3>With Your Consent</h3>
//               <p>We may share your information for any other purpose with your explicit consent.</p>

//               <div className="notice-box">
//                 <FaExclamationTriangle />
//                 <p>We do not sell your personal information to third parties for their marketing purposes without your explicit consent.</p>
//               </div>
//             </div>
//           </section>

//           {/* Data Security Section */}
//           <section
//             id="security"
//             className="card"
//             ref={el => (sectionRefs.current["security"] = el)}
//             tabIndex={-1}
//           >
//             <button 
//               className="section-toggle" 
//               onClick={() => toggleSection("security")}
//               aria-expanded={expandedSections["security"]}
//               aria-controls="security-content"
//             >
//               <h2>
//                 <FaLock aria-hidden="true" /> Data Security
//               </h2>
//               {expandedSections["security"] ? <FaChevronUp /> : <FaChevronDown />}
//             </button>

//             <div 
//               id="security-content"
//               className={`section-content ${expandedSections["security"] ? 'expanded' : ''}`}
//             >
//               <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
//               <ul>
//                 <li>Encryption of data in transit and at rest</li>
//                 <li>Regular security assessments and penetration testing</li>
//                 <li>Access controls and least privilege principles</li>
//                 <li>Employee security training and awareness programs</li>
//                 <li>Incident response and breach notification procedures</li>
//               </ul>

//               <p>While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or method of electronic storage is 100% secure.</p>

//               <div className="security-tips">
//                 <h3>Security Tips for Users</h3>
//                 <ul>
//                   <li>Use strong, unique passwords for your accounts</li>
//                   <li>Enable two-factor authentication where available</li>
//                   <li>Be cautious of phishing attempts</li>
//                   <li>Keep your devices and software updated</li>
//                   <li>Regularly review account activity and permissions</li>
//                 </ul>
//               </div>
//             </div>
//           </section>

//           {/* Cookies & Tracking Section */}
//           <section
//             id="cookies"
//             className="card"
//             ref={el => (sectionRefs.current["cookies"] = el)}
//             tabIndex={-1}
//           >
//             <h2>
//               <FaGlobe aria-hidden="true" /> Cookies & Tracking
//             </h2>
//             <p>We use cookies and similar tracking technologies to track activity on our service and hold certain information.</p>

//             <h3>Types of Cookies We Use</h3>
//             <ul>
//               <li><strong>Essential Cookies:</strong> Necessary for the website to function</li>
//               <li><strong>Performance Cookies:</strong> Help us understand how visitors interact</li>
//               <li><strong>Functionality Cookies:</strong> Remember choices you make</li>
//               <li><strong>Targeting Cookies:</strong> Used to deliver relevant ads</li>
//             </ul>

//             <h3>Your Cookie Choices</h3>
//             <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.</p>

//             <div className="cookie-settings">
//               <button className="cookie-prefs-button">Manage Cookie Preferences</button>
//             </div>
//           </section>

//           {/* Your Rights Section */}
//           <section
//             id="rights"
//             className="card"
//             ref={el => (sectionRefs.current["rights"] = el)}
//             tabIndex={-1}
//           >
//             <h2>
//               <FaCheckCircle aria-hidden="true" /> Your Rights
//             </h2>
//             <p>Depending on your location, you may have certain rights regarding your personal information:</p>

//             <div className="rights-grid">
//               <div className="right-item">
//                 <h3>Access</h3>
//                 <p>Request a copy of your personal data</p>
//               </div>
//               <div className="right-item">
//                 <h3>Rectification</h3>
//                 <p>Request correction of inaccurate data</p>
//               </div>
//               <div className="right-item">
//                 <h3>Erasure</h3>
//                 <p>Request deletion of your personal data</p>
//               </div>
//               <div className="right-item">
//                 <h3>Restriction</h3>
//                 <p>Request limitation of processing</p>
//               </div>
//               <div className="right-item">
//                 <h3>Portability</h3>
//                 <p>Request transfer of your data to another service</p>
//               </div>
//               <div className="right-item">
//                 <h3>Objection</h3>
//                 <p>Object to certain processing activities</p>
//               </div>
//             </div>

//             <p>To exercise these rights, please contact us using the information in the "Contact Information" section below.</p>
//           </section>

//           {/* Data Retention Section */}
//           <section
//             id="retention"
//             className="card"
//             ref={el => (sectionRefs.current["retention"] = el)}
//             tabIndex={-1}
//           >
//             <h2>
//               <FaDatabase aria-hidden="true" /> Data Retention
//             </h2>
//             <p>We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.</p>

//             <h3>Retention Periods</h3>
//             <ul>
//               <li><strong>Account Data:</strong> Retained while your account is active and for 3 years after deactivation</li>
//               <li><strong>Transaction Data:</strong> 7 years for tax and accounting purposes</li>
//               <li><strong>Marketing Data:</strong> Until you unsubscribe or for 2 years after last interaction</li>
//               <li><strong>Cookies:</strong> Varies by cookie type, typically 30 days to 2 years</li>
//             </ul>

//             <p>We may retain certain information for longer periods when required by law or for legitimate business purposes such as:</p>
//             <ul>
//               <li>Compliance with legal obligations</li>
//               <li>Dispute resolution</li>
//               <li>Enforcement of our agreements</li>
//               <li>Protection of vital interests</li>
//             </ul>
//           </section>

//           {/* International Transfers Section */}
//           <section
//             id="transfers"
//             className="card"
//             ref={el => (sectionRefs.current["transfers"] = el)}
//             tabIndex={-1}
//           >
//             <h2>
//               <FaPlane aria-hidden="true" /> International Transfers
//             </h2>
//             <p>Your information, including personal data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>

//             <p>If you are located outside the United States and choose to provide information to us, please note that we transfer the data, including personal data, to the United States and process it there.</p>

//             <h3>Safeguards for Transfers</h3>
//             <p>We implement appropriate safeguards for international data transfers, including:</p>
//             <ul>
//               <li>Standard Contractual Clauses approved by the European Commission</li>
//               <li>Binding Corporate Rules for intra-group transfers</li>
//               <li>Certification under the EU-US Privacy Shield Framework (where applicable)</li>
//               <li>Other legally recognized transfer mechanisms</li>
//             </ul>
//           </section>

//           {/* Children's Privacy Section */}
//           <section
//             id="children"
//             className="card"
//             ref={el => (sectionRefs.current["children"] = el)}
//             tabIndex={-1}
//           >
//             <h2>
//               <FaChild aria-hidden="true" /> Children's Privacy
//             </h2>
//             <p>Our services are not directed to individuals under the age of 13 (or 16 in some jurisdictions). We do not knowingly collect personal information from children without parental consent.</p>

//             <p>If we become aware that we have collected personal information from a child without verification of parental consent, we take steps to remove that information from our servers.</p>

//             <div className="age-verification">
//               <h3>Age Restrictions by Region</h3>
//               <ul>
//                 <li><strong>United States:</strong> Under 13 requires parental consent</li>
//                 <li><strong>European Union:</strong> Under 16 requires parental consent (may vary by country)</li>
//                 <li><strong>Other Regions:</strong> Varies by local laws and regulations</li>
//               </ul>
//             </div>

//             <p>Parents or guardians who believe their child has provided us with personal information can contact us to request deletion of such information.</p>
//           </section>

//           {/* Policy Changes Section */}
//           <section
//             id="changes"
//             className="card"
//             ref={el => (sectionRefs.current["changes"] = el)}
//             tabIndex={-1}
//           >
//             <h2>
//               <FaExclamationTriangle aria-hidden="true" /> Policy Changes
//             </h2>
//             <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>

//             <p>We will let you know via email and/or a prominent notice on our service prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>

//             <h3>Change History</h3>
//             <div className="change-log">
//               <div className="change-item">
//                 <strong>August 1, 2025:</strong> Comprehensive update to reflect new service features and regulatory requirements
//               </div>
//               <div className="change-item">
//                 <strong>March 15, 2025:</strong> Added data portability rights and international transfer details
//               </div>
//               <div className="change-item">
//                 <strong>October 1, 2024:</strong> Initial version of the privacy policy
//               </div>
//             </div>

//             <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
//           </section>

//           {/* Contact Information Section */}
//           <section
//             id="contact"
//             className="card"
//             ref={el => (sectionRefs.current["contact"] = el)}
//             tabIndex={-1}
//           >
//             <h2>
//               <FaEnvelope aria-hidden="true" /> Contact Information
//             </h2>
//             <p>If you have any questions about this Privacy Policy, please contact us:</p>

//             <div className="contact-methods">
//               <div className="contact-method">
//                 <FaEnvelope />
//                 <h3>Email</h3>
//                 <a href="mailto:privacy@riogram.com">privacy@riogram.com</a>
//               </div>

//               <div className="contact-method">
//                 <FaMobileAlt />
//                 <h3>Phone</h3>
//                 <p>+1 (800) 555-0199</p>
//               </div>

//               <div className="contact-method">
//                 <FaBuilding />
//                 <h3>Mail</h3>
//                 <address>
//                   RioGram Privacy Office<br />
//                   123 Privacy Lane<br />
//                   San Francisco, CA 94107<br />
//                   United States
//                 </address>
//               </div>
//             </div>

//             <h3>Data Protection Officer</h3>
//             <p>For EU-specific inquiries, you may contact our Data Protection Officer at:</p>
//             <a href="mailto:dpo@riogram.com">dpo@riogram.com</a>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;
import React, { useEffect, useRef, useCallback, useState } from "react";
import {
  FaArrowLeft, FaFile, FaUser, FaUserShield, FaShareAlt, FaLock, FaGlobe,
  FaCheckCircle, FaDatabase, FaPlane, FaChild, FaExclamationTriangle,
  FaEnvelope, FaAd, FaCogs,
  FaEye,
  FaEdit,
  FaTrash,
  FaBan,
  FaBell,
  FaPhone,
  FaBullhorn,
  FaExchangeAlt,
  FaPauseCircle,
  FaChartLine, FaCookieBite, FaCalendar, FaChevronDown, FaUserLock, FaShieldAlt, FaChevronUp, FaMobileAlt, FaBuilding, FaClock, FaHistory, FaChartBar, FaHeadset,
  FaUsers, FaBalanceScale, FaFileContract, FaCalendarAlt, FaGlobeAmericas, FaArrowRight, FaChevronRight, FaChevronLeft, FaPlus, FaMinus, FaSearch, FaTimes, FaCheck, FaInfoCircle, FaQuestionCircle, FaEnvelopeOpenText, FaPhoneAlt, FaMapMarkerAlt, FaMapMarkedAlt, FaMapSigns, FaMapPin, FaMapMarker, FaBars
} from "react-icons/fa";

const sidebarSections = [
  { id: "overview", label: "Overview", icon: <FaFile /> },
  { id: "info-collect", label: "Information We Collect", icon: <FaUser /> },
  { id: "use-info", label: "How We Use Information", icon: <FaUserShield /> },
  { id: "sharing", label: "Information Sharing", icon: <FaShareAlt /> },
  { id: "security", label: "Data Security", icon: <FaLock /> },
  { id: "cookies", label: "Cookies & Tracking", icon: <FaGlobe /> },
  { id: "rights", label: "Your Rights", icon: <FaCheckCircle /> },
  { id: "retention", label: "Data Retention", icon: <FaDatabase /> },
  { id: "transfers", label: "International Transfers", icon: <FaPlane /> },
  { id: "children", label: "Children's Privacy", icon: <FaChild /> },
  { id: "changes", label: "Policy Changes", icon: <FaExclamationTriangle /> },
  { id: "contact", label: "Contact Information", icon: <FaEnvelope /> },
];

const PrivacyPolicy = () => {
  const sectionRefs = useRef({});
  const [expandedSections, setExpandedSections] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const sidebarRef = useRef(null);

  const toggleSection = useCallback((sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  }, []);

  const handleSidebarClick = useCallback((e, id) => {
    e.preventDefault();
    const ref = sectionRefs.current[id];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      let current = sidebarSections[0].id;

      for (const sec of sidebarSections) {
        const ref = sectionRefs.current[sec.id];
        if (ref && ref.offsetTop <= scrollPos) {
          current = sec.id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{
      fontFamily: "'Inter', Arial, sans-serif",
      background: '#f8f9fa',
      color: '#222',
      minHeight: '100vh',
      lineHeight: 1.6,
      position: 'relative'
    }}>
      <header style={{
        padding: '18px 24px 0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <a href="/" aria-label="Back to Home" style={{
          color: '#1a73e8',
          textDecoration: 'none',
          fontWeight: 600,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          transition: 'color 0.2s'
        }}>
          <FaArrowLeft /> <span>Back to Home</span>
        </a>

        <button
          style={{
            display: 'none',
            background: '#1a73e8',
            color: 'white',
            border: 'none',
            padding: '10px 14px',
            borderRadius: '6px',
            fontWeight: 600,
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle privacy policy navigation"
        >
          <FaBars />
          <span>Menu</span>
        </button>
      </header>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
        margin: '20px auto',
        padding: '0 16px',
        maxWidth: '1200px',
        position: 'relative'
      }}>
        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 20,
            display: 'none'
          }} className="mobile-overlay" />
        )}

        {/* Sidebar */}
        <aside
          ref={sidebarRef}
          style={{
            width: '260px',
            background: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(60, 64, 67, 0.09)',
            padding: '32px 24px',
            position: 'sticky',
            top: '30px',
            alignSelf: 'flex-start',
            zIndex: 10,
            minWidth: '220px',
            transition: 'transform 0.3s ease',
            transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
            position: isMobileMenuOpen ? 'fixed' : 'sticky',
            height: isMobileMenuOpen ? '100vh' : 'auto',
            overflowY: isMobileMenuOpen ? 'auto' : 'visible',
            left: isMobileMenuOpen ? '0' : 'auto'
          }}
          className="sidebar"
          aria-label="Privacy Policy navigation"
        >
          <div style={{
            display: isMobileMenuOpen ? 'flex' : 'none',
            justifyContent: 'flex-end',
            marginBottom: '20px'
          }}>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#666'
              }}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          <h3 tabIndex={0} style={{
            marginTop: 0,
            marginBottom: '10px',
            fontSize: '1.5rem',
            fontWeight: 650,
            color: '#1a1a1a'
          }}>Privacy Policy</h3>
          <p style={{
            fontSize: '0.95rem',
            color: '#888',
            marginBottom: '18px'
          }}>Navigate through sections</p>
          <nav>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {sidebarSections.map(sec => (
                <li
                  key={sec.id}
                  data-target={sec.id}
                  style={{
                    marginBottom: '10px',
                    transition: 'all 0.2s',
                    borderRadius: '6px',
                    background: activeSection === sec.id ? '#f0f7ff' : 'transparent'
                  }}
                >
                  <a
                    href={`#${sec.id}`}
                    onClick={e => handleSidebarClick(e, sec.id)}
                    aria-label={sec.label}
                    style={{
                      textDecoration: 'none',
                      color: activeSection === sec.id ? '#1a73e8' : '#212121',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '8px 8px',
                      borderRadius: '5px',
                      fontSize: '1rem',
                      transition: 'color 0.2s',
                      fontWeight: activeSection === sec.id ? '600' : 'normal'
                    }}
                  >
                    <span style={{ color: activeSection === sec.id ? '#1a73e8' : '#666' }}>
                      {sec.icon}
                    </span>
                    <span>{sec.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div style={{
          flex: 1,
          minWidth: 0,
          maxWidth: '800px',
          margin: '0 auto',
          marginTop: '20px'
        }}>
          <div style={{
            background: '#fff',
            borderRadius: '10px',
            boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)',
            padding: '28px 32px',
            marginBottom: '28px',
            animation: 'fadein 0.7s',
            transition: 'box-shadow 0.3s'
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '30px',
              paddingBottom: '32px',
              borderBottom: '2px solid #e6eaf0',
              background: 'transparent'
            }}>
              <FaLock style={{
                fontSize: '2.2rem',
                color: '#1565c0',
                verticalAlign: 'center'
              }} aria-hidden="true" />
              <h1 style={{
                fontSize: '2.3rem',
                marginTop: '8px',
                marginBottom: '8px',
                color: '#1a1a1a'
              }}>Privacy Policy</h1>
              <p>Your privacy is our priority. Learn how we protect and handle your data.</p>
              <p style={{
                fontSize: '1rem',
                color: '#999',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                justifyContent: 'center'
              }}>
                <FaCalendar /> Last updated: August 1, 2025
              </p>
            </div>

            {/* Rest of your sections remain the same */}
            <section
              id="overview"
              ref={el => (sectionRefs.current["overview"] = el)}
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
                <FaFile aria-hidden="true" /> Overview
              </h2>
              <p style={{ marginBottom: '16px', color: '#444' }}>
                At RioGram, we are committed to protecting your privacy and ensuring the security of your personal information.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website,
                use our services, or interact with us in any way.
              </p>
              <p style={{ marginBottom: '16px', color: '#444' }}>
                By using our services, you consent to the data practices described in this policy.
                We encourage you to read this policy carefully and contact us if you have any questions or concerns.
              </p>
            </section>


            {/* <section
              id="overview"
              ref={el => (sectionRefs.current["overview"] = el)}
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
                <FaFile aria-hidden="true" /> Overview
              </h2>
              <p style={{ marginBottom: '16px', color: '#444' }}>
                At RioGram, we are committed to protecting your privacy and ensuring the security of your personal information.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website,
                use our services, or interact with us in any way.
              </p>
              <p style={{ marginBottom: '16px', color: '#444' }}>
                By using our services, you consent to the data practices described in this policy.
                We encourage you to read this policy carefully and contact us if you have any questions or concerns.
              </p>
            </section> */}

            <section
              id="info-collect"
              ref={el => (sectionRefs.current["info-collect"] = el)}
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
              }}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  width: '100%',
                  textAlign: 'left',
                  padding: 0,
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
                onClick={() => toggleSection("info-collect")}
                aria-expanded={expandedSections["info-collect"]}
                aria-controls="info-collect-content"
              >
                <h2 style={{
                  fontSize: '1.5rem',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#1a1a1a'
                }}>
                  <FaUser aria-hidden="true" /> Information We Collect
                </h2>
              </button>

              <div
                id="info-collect-content"
                style={{
                  maxHeight: expandedSections["info-collect"] ? '2000px' : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease-out'
                }}
              >
                <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '20px', borderRadius: '10px', marginBottom: '20px', maxWidth: '700px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    marginTop: '20px',
                    marginBottom: '10px',
                    color: '#333'
                  }}>Personal Information</h3>
                  <p style={{ marginBottom: '16px', color: '#444' }}>We collect personal information that you voluntarily provide to us when you:</p>
                  <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '8px' }}>Create an account or register for our services</li>
                    <li style={{ marginBottom: '8px' }}>Make a purchase or request a quote</li>
                    <li style={{ marginBottom: '8px' }}>Subscribe to our newsletter or marketing communications</li>
                    <li style={{ marginBottom: '8px' }}>Contact us through our website, email, or phone</li>
                    <li style={{ marginBottom: '8px' }}>Participate in surveys, contests, or promotional activities</li>
                    <li style={{ marginBottom: '8px' }}>Apply for employment opportunities</li>
                  </ul>
                </div>

                <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', fontFamily: 'Arial, sans-serif', display: 'flex', justifyContent: 'space-between', maxWidth: '700px', margin: '20px auto', background: '#fff' }}>
                  <div style={{ flex: 1, paddingRight: '30px' }}>
                    <h2 style={{ color: '#111827', fontSize: '20px', marginBottom: '15px' }}>Types of Personal Data</h2>
                    <h3 style={{ color: '#111827', fontSize: '16px', marginBottom: '8px' }}>Contact Information:</h3>
                    <ul style={{ margin: 0, paddingLeft: '18px', color: '#374151', lineHeight: 1.6 }}>
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Mailing address</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ color: '#111827', fontSize: '16px', marginBottom: '8px', marginTop: '50px' }}>Professional Information:</h3>
                    <ul style={{ margin: 0, paddingLeft: '18px', color: '#374151', lineHeight: 1.6 }}>
                      <li>Company name</li>
                      <li>Job title</li>
                      <li>Industry</li>
                      <li>Business requirements</li>
                    </ul>
                  </div>
                </div>




                <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '20px', borderRadius: '10px', marginBottom: '20px', maxWidth: '700px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    marginTop: '20px',
                    marginBottom: '10px',
                    color: '#333'
                  }}>Automatically Collected Information</h3>
                  <p style={{ marginBottom: '16px', color: '#444' }}>When you access our services, we may automatically collect:</p>
                  <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '8px' }}>Device information (IP address, browser type, operating system)</li>
                    <li style={{ marginBottom: '8px' }}>Usage data (pages visited, time spent, clickstream data)</li>
                    <li style={{ marginBottom: '8px' }}>Location data (general geographic location based on IP)</li>
                    <li style={{ marginBottom: '8px' }}>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

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
                transition: 'box-shadow 0.3s',
                borderLeft: '5px solid #347ffc'
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
              </div>
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
            </section>


            <section
              id="security"
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)',
                padding: '28px 32px',
                marginBottom: '28px',
                animation: 'fadein 0.7s',
                transition: 'box-shadow 0.3s',
                borderLeft: '5px solid #347ffc'
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
                <FaLock aria-hidden="true" /> Data Security
              </h2>

              <div style={{
                backgroundColor: '#e6f4ea',
                border: '1px solid #a8d5b2',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '20px'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  marginTop: 0,
                  marginBottom: '10px',
                  color: '#1a1a1a'
                }}>Our Commitment to Security</h3>
                <p style={{ marginBottom: '16px', color: '#444' }}>
                  We implement industry-standard security measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '20px',
                marginBottom: '20px',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  flex: 1,
                  minWidth: '260px',
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px',
                  boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)'
                }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    marginTop: 0,
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#1a1a1a'
                  }}>
                    <FaShieldAlt />
                    Technical Safeguards
                  </h3>
                  <ul style={{ marginBottom: '16px', paddingLeft: '20px', color: '#444' }}>
                    <li style={{ marginBottom: '8px' }}>SSL/TLS encryption for data transmission</li>
                    <li style={{ marginBottom: '8px' }}>Advanced encryption for data at rest</li>
                    <li style={{ marginBottom: '8px' }}>Regular security audits and penetration testing</li>
                    <li style={{ marginBottom: '8px' }}>Multi-factor authentication systems</li>
                    <li style={{ marginBottom: '8px' }}>Intrusion detection and prevention systems</li>
                    <li style={{ marginBottom: '8px' }}>Regular software updates and patches</li>
                  </ul>
                </div>

                <div style={{
                  flex: 1,
                  minWidth: '260px',
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px',
                  boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)'
                }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    marginTop: 0,
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#1a1a1a'
                  }}>
                    <FaUserLock /> Administrative Safeguards
                  </h3>
                  <ul style={{ marginBottom: '16px', paddingLeft: '20px', color: '#444' }}>
                    <li style={{ marginBottom: '8px' }}>Access controls and user authentication</li>
                    <li style={{ marginBottom: '8px' }}>Employee training on data protection</li>
                    <li style={{ marginBottom: '8px' }}>Background checks for personnel</li>
                    <li style={{ marginBottom: '8px' }}>Incident response procedures</li>
                    <li style={{ marginBottom: '8px' }}>Regular compliance assessments</li>
                    <li style={{ marginBottom: '8px' }}>Data breach notification protocols</li>
                  </ul>
                </div>
              </div>

              <div style={{
                backgroundColor: '#fff8e1',
                border: '1px solid #f5d67a',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '10px'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  marginTop: 0,
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#1a1a1a'
                }}>
                  <FaExclamationTriangle /> Important Security Notice
                </h3>
                <p style={{ marginBottom: '16px', color: '#444' }}>
                  While we implement robust security measures, no method of transmission over the internet
                  or electronic storage is 100% secure. We cannot guarantee absolute security, but we
                  continuously work to improve our security practices and respond quickly to any potential
                  threats.
                </p>
              </div>
            </section>


            <section
              id="cookies"
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)',
                padding: '28px 32px',
                marginBottom: '28px',
                animation: 'fadein 0.7s',
                transition: 'box-shadow 0.3s',
                borderLeft: '5px solid #347ffc'
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
                <FaGlobe aria-hidden="true" /> Cookies & Tracking Technologies
              </h2>

              <div style={{ marginBottom: '20px' }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  marginBottom: '10px',
                  color: '#1a1a1a'
                }}>What Are Cookies?</h3>
                <p style={{ marginBottom: '16px', color: '#444' }}>
                  Cookies are small text files stored on your device when you visit our
                  website. They help us provide you with a better browsing experience
                  by remembering your preferences and analyzing how you use our site.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px',
                  boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)'
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    marginTop: 0,
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#1a1a1a'
                  }}>
                    <FaCookieBite /> Essential Cookies
                  </h3>
                  <p style={{ marginBottom: '16px', color: '#444' }}>
                    These cookies are necessary for the website to function properly:
                  </p>
                  <ul style={{ marginBottom: '16px', paddingLeft: '20px', color: '#444' }}>
                    <li style={{ marginBottom: '8px' }}>Session management</li>
                    <li style={{ marginBottom: '8px' }}>Security features</li>
                    <li style={{ marginBottom: '8px' }}>Load balancing</li>
                    <li style={{ marginBottom: '8px' }}>Form submissions</li>
                  </ul>
                </div>

                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px',
                  boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)'
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    marginTop: 0,
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#1a1a1a'
                  }}>
                    <FaChartLine /> Analytics Cookies
                  </h3>
                  <p style={{ marginBottom: '16px', color: '#444' }}>
                    Help us understand how visitors interact with our website:
                  </p>
                  <ul style={{ marginBottom: '16px', paddingLeft: '20px', color: '#444' }}>
                    <li style={{ marginBottom: '8px' }}>Page views and traffic sources</li>
                    <li style={{ marginBottom: '8px' }}>User behavior patterns</li>
                    <li style={{ marginBottom: '8px' }}>Performance metrics</li>
                    <li style={{ marginBottom: '8px' }}>Error tracking</li>
                  </ul>
                </div>

                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px',
                  boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)'
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    marginTop: 0,
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#1a1a1a'
                  }}>
                    <FaCogs /> Functional Cookies
                  </h3>
                  <p style={{ marginBottom: '16px', color: '#444' }}>
                    Enable enhanced functionality and personalization:
                  </p>
                  <ul style={{ marginBottom: '16px', paddingLeft: '20px', color: '#444' }}>
                    <li style={{ marginBottom: '8px' }}>Language preferences</li>
                    <li style={{ marginBottom: '8px' }}>Theme settings</li>
                    <li style={{ marginBottom: '8px' }}>Saved preferences</li>
                    <li style={{ marginBottom: '8px' }}>Customized content</li>
                  </ul>
                </div>

                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px',
                  boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)'
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    marginTop: 0,
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#1a1a1a'
                  }}>
                    <FaAd /> Marketing Cookies
                  </h3>
                  <p style={{ marginBottom: '16px', color: '#444' }}>
                    Used to deliver relevant advertisements:
                  </p>
                  <ul style={{ marginBottom: '16px', paddingLeft: '20px', color: '#444' }}>
                    <li style={{ marginBottom: '8px' }}>Targeted advertising</li>
                    <li style={{ marginBottom: '8px' }}>Campaign effectiveness</li>
                    <li style={{ marginBottom: '8px' }}>Social media integration</li>
                    <li style={{ marginBottom: '8px' }}>Retargeting campaigns</li>
                  </ul>
                </div>
              </div>

              <div style={{
                backgroundColor: '#eaf1ff',
                border: '1px solid #c5d9ff',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '10px'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  marginTop: 0,
                  marginBottom: '12px',
                  color: '#1a1a1a'
                }}>Managing Your Cookie Preferences</h3>
                <p style={{ marginBottom: '16px', color: '#444' }}>
                  You can control and manage cookies in various ways. Most browsers allow you to:
                </p>
                <ul style={{ marginBottom: '16px', paddingLeft: '20px', color: '#444' }}>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#" style={{ color: '#1a73e8', textDecoration: 'none' }}>
                      View what cookies are stored on your device
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#" style={{ color: '#1a73e8', textDecoration: 'none' }}>
                      Delete cookies individually or all at once
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#" style={{ color: '#1a73e8', textDecoration: 'none' }}>
                      Block third-party cookies
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#" style={{ color: '#1a73e8', textDecoration: 'none' }}>
                      Block cookies from specific sites
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#" style={{ color: '#1a73e8', textDecoration: 'none' }}>
                      Block all cookies from being set
                    </a>
                  </li>
                </ul>
              </div>
            </section>

 
            <section
              id="rights"
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)',
                padding: '28px 32px',
                marginBottom: '28px',
                animation: 'fadein 0.7s',
                transition: 'box-shadow 0.3s',
                borderLeft: '5px solid #347ffc'
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
                <FaCheckCircle aria-hidden="true" /> Your Privacy Rights
              </h2>

              <div style={{
                backgroundColor: '#f3eaff',
                border: '1px solid #d9c8ff',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px'
              }}>
                <p style={{ marginBottom: '16px', color: '#444' }}>
                  Depending on your location and applicable laws (including GDPR, CCPA, and other
                  privacy regulations), you may have the following rights regarding your personal
                  information:
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px',
                  boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)',
                  borderLeft: '4px solid #2563eb'
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    marginTop: 0,
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#1a1a1a'
                  }}>
                    <FaEye /> Right to Access
                  </h3>
                  <p style={{ marginBottom: '16px', color: '#444' }}>
                    Request a copy of the personal information we hold about you, including details
                    about how we process it.
                  </p>
                </div>

                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px',
                  boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)',
                  borderLeft: '4px solid #9333ea'
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    marginTop: 0,
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#1a1a1a'
                  }}>
                    <FaEdit /> Right to Rectification
                  </h3>
                  <p style={{ marginBottom: '16px', color: '#444' }}>
                    Request correction of inaccurate or incomplete personal information we hold
                    about you.
                  </p>
                </div>

                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px',
                  boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)',
                  borderLeft: '4px solid #dc2626'
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    marginTop: 0,
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#1a1a1a'
                  }}>
                    <FaTrash /> Right to Deletion
                  </h3>
                  <p style={{ marginBottom: '16px', color: '#444' }}>
                    Request deletion of your personal information, subject to certain legal and
                    business requirements.
                  </p>
                </div>

                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px',
                  boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)',
                  borderLeft: '4px solid #f97316'
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    marginTop: 0,
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#1a1a1a'
                  }}>
                    <FaBan /> Right to Object
                  </h3>
                  <p style={{ marginBottom: '16px', color: '#444' }}>
                    Object to the processing of your personal information for direct marketing or
                    other legitimate interests.
                  </p>
                </div>

                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px',
                  boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)',
                  borderLeft: '4px solid #16a34a'
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    marginTop: 0,
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#1a1a1a'
                  }}>
                    <FaExchangeAlt /> Right to Portability
                  </h3>
                  <p style={{ marginBottom: '16px', color: '#444' }}>
                    Receive your personal information in a structured, machine-readable format for
                    transfer to another service.
                  </p>
                </div>

                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px',
                  boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)',
                  borderLeft: '4px solid #6b7280'
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    marginTop: 0,
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#1a1a1a'
                  }}>
                    <FaPauseCircle /> Right to Restriction
                  </h3>
                  <p style={{ marginBottom: '16px', color: '#444' }}>
                    Request restriction of processing your personal information under certain
                    circumstances.
                  </p>
                </div>
              </div>

              <div style={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #ddd',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '10px'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  marginTop: 0,
                  marginBottom: '12px',
                  color: '#1a1a1a'
                }}>How to Exercise Your Rights</h3>
                <p style={{ marginBottom: '16px', color: '#444' }}>
                  To exercise any of these rights, please contact us using the information provided
                  in the "Contact Information" section. We will respond to your request within the
                  timeframes required by applicable law, typically within 30 days.
                </p>
                <p style={{ marginBottom: '16px', color: '#444' }}>
                  We may need to verify your identity before processing your request to ensure the
                  security of your personal information.
                </p>
              </div>
            </section> 

            <section
              id="retention"
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)',
                padding: '28px 32px',
                marginBottom: '28px',
                animation: 'fadein 0.7s',
                transition: 'box-shadow 0.3s',
                borderLeft: '5px solid #347ffc'
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
                <FaDatabase aria-hidden="true" /> Data Retention
              </h2>

              <div style={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #ddd',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px'
              }}>
                <p style={{ marginBottom: '16px', color: '#444' }}>
                  We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
              </div>

              <div style={{
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '10px'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  marginTop: 0,
                  marginBottom: '15px',
                  color: '#1a1a1a'
                }}>Retention Periods</h3>

                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  marginBottom: '10px'
                }}>
                  <tbody>
                    <tr>
                      <td style={{
                        padding: '12px',
                        borderBottom: '1px solid #eee',
                        verticalAlign: 'top',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <FaClock /> Account Information
                      </td>
                      <td style={{
                        padding: '12px',
                        borderBottom: '1px solid #eee',
                        verticalAlign: 'top'
                      }}>
                        <a href="#" style={{ color: '#1a73e8', textDecoration: 'none' }}>
                          Duration of account + 3 years
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{
                        padding: '12px',
                        borderBottom: '1px solid #eee',
                        verticalAlign: 'top',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <FaHistory /> Transaction Records
                      </td>
                      <td style={{
                        padding: '12px',
                        borderBottom: '1px solid #eee',
                        verticalAlign: 'top'
                      }}>
                        <a href="#" style={{ color: '#1a73e8', textDecoration: 'none' }}>
                          7 years (legal requirement)
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{
                        padding: '12px',
                        borderBottom: '1px solid #eee',
                        verticalAlign: 'top',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <FaEnvelope /> Marketing Communications
                      </td>
                      <td style={{
                        padding: '12px',
                        borderBottom: '1px solid #eee',
                        verticalAlign: 'top'
                      }}>
                        <a href="#" style={{ color: '#1a73e8', textDecoration: 'none' }}>
                          Until unsubscribed + 2 years
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{
                        padding: '12px',
                        borderBottom: '1px solid #eee',
                        verticalAlign: 'top',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <FaChartBar /> Website Analytics
                      </td>
                      <td style={{
                        padding: '12px',
                        borderBottom: '1px solid #eee',
                        verticalAlign: 'top'
                      }}>
                        <a href="#" style={{ color: '#1a73e8', textDecoration: 'none' }}>
                          26 months
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{
                        padding: '12px',
                        borderBottom: '1px solid #eee',
                        verticalAlign: 'top',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <FaHeadset /> Support Tickets
                      </td>
                      <td style={{
                        padding: '12px',
                        borderBottom: '1px solid #eee',
                        verticalAlign: 'top'
                      }}>
                        <a href="#" style={{ color: '#1a73e8', textDecoration: 'none' }}>
                          3 years after resolution
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>


            <section
              id="transfers"
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)',
                padding: '28px 32px',
                marginBottom: '28px',
                animation: 'fadein 0.7s',
                transition: 'box-shadow 0.3s',
                borderLeft: '5px solid #347ffc'
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
                <FaGlobeAmericas aria-hidden="true" /> International Data Transfers
              </h2>

              <div style={{
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '10px'
              }}>
                <p style={{ marginBottom: '16px', color: '#444' }}>
                  Your personal information may be transferred to and processed in countries other than your
                  country of residence. These countries may have different data protection laws than your country.
                </p>
                <p style={{ marginBottom: '16px', color: '#444' }}>
                  When we transfer your personal information internationally, we ensure appropriate safeguards are in place:
                </p>

                <ul style={{ marginBottom: '16px', paddingLeft: '20px', color: '#444' }}>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <FaFileContract style={{ flexShrink: 0, marginTop: '3px' }} />
                    Standard Contractual Clauses approved by the European Commission
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <FaBalanceScale style={{ flexShrink: 0, marginTop: '3px' }} />
                    Adequacy decisions by relevant data protection authorities
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <FaUsers style={{ flexShrink: 0, marginTop: '3px' }} />
                    Binding Corporate Rules for intra-group transfers
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <FaShieldAlt style={{ flexShrink: 0, marginTop: '3px' }} />
                    Certification schemes and codes of conduct
                  </li>
                </ul>
              </div>
            </section>


            <section
              id="children"
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)',
                padding: '28px 32px',
                marginBottom: '28px',
                animation: 'fadein 0.7s',
                transition: 'box-shadow 0.3s',
                borderLeft: '5px solid #347ffc'
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
                <FaChild aria-hidden="true" /> Children's Privacy
              </h2>

              <div style={{
                backgroundColor: '#fff5f0',
                border: '1px solid #f5d5c4',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '10px'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  marginTop: 0,
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#a94442'
                }}>
                  <FaExclamationTriangle /> Age Restrictions
                </h3>
                <p style={{ marginBottom: '16px', color: '#8b2f23' }}>
                  Our services are not intended for children under the age of 16. We do not knowingly collect
                  personal information from children under 16 years of age.
                </p>
                <p style={{ marginBottom: '16px', color: '#8b2f23' }}>
                  If we become aware that we have collected personal information from a child under 16, we
                  will take steps to delete such information promptly. If you believe we have collected
                  information from a child under 16, please contact us immediately.
                </p>
              </div>
            </section>


            <section
              id="changes"
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)',
                padding: '28px 32px',
                marginBottom: '28px',
                animation: 'fadein 0.7s',
                transition: 'box-shadow 0.3s',
                borderLeft: '5px solid #347ffc'
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
                <FaExclamationTriangle aria-hidden="true" /> Changes to This Privacy Policy
              </h2>

              <div style={{
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '10px'
              }}>
                <p style={{ marginBottom: '16px', color: '#444' }}>
                  We may update this Privacy Policy from time to time to reflect changes in our practices,
                  technology, legal requirements, or other factors. When we make changes, we will:
                </p>

                <ul style={{ marginBottom: '16px', paddingLeft: '20px', color: '#444' }}>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <FaCalendarAlt style={{ flexShrink: 0, marginTop: '3px' }} />
                    Update the "Last Updated" date at the top of this policy
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <FaEnvelope style={{ flexShrink: 0, marginTop: '3px' }} />
                    Notify you via email if you have an account with us
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <FaBullhorn style={{ flexShrink: 0, marginTop: '3px' }} />
                    Post a prominent notice on our website
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <FaBell style={{ flexShrink: 0, marginTop: '3px' }} />
                    Provide additional notice for material changes that affect your rights
                  </li>
                </ul>

                <p style={{ marginBottom: '16px', color: '#444' }}>
                  We encourage you to review this Privacy Policy periodically to stay informed about how we
                  protect your information.
                </p>
              </div>
            </section> 


            <section
              id="contact"
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 1px 5px rgba(30, 64, 167, 0.05)',
                padding: '28px 32px',
                marginBottom: '28px',
                animation: 'fadein 0.7s',
                transition: 'box-shadow 0.3s',
                borderLeft: '5px solid #347ffc'
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
                <FaEnvelope aria-hidden="true" /> Contact Information
              </h2>

              <div style={{
                backgroundColor: '#f0f8ff',
                border: '1px solid #cce7ff',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '20px'
              }}>
                <p style={{ marginBottom: '16px', color: '#444' }}>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data
                  practices, please don't hesitate to contact us:
                </p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '1.1rem',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#1a1a1a'
                    }}>
                      <FaEnvelope /> Email
                    </h3>
                    <p style={{ marginBottom: '16px', color: '#444' }}>privacy@riogram.com</p>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.1rem',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#1a1a1a'
                    }}>
                      <FaMapMarkerAlt /> Mailing Address
                    </h3>
                    <p style={{ marginBottom: '16px', color: '#444' }}>
                      RioGram Privacy Office <br />
                      123 Business Avenue <br />
                      Tech City, TC 12345 <br />
                      United States
                    </p>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.1rem',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#1a1a1a'
                    }}>
                      <FaPhone /> Phone
                    </h3>
                    <p style={{ marginBottom: '16px', color: '#444' }}>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #dce5f0',
                  borderRadius: '6px',
                  padding: '15px',
                  marginBottom: '10px'
                }}>
                  <p style={{ marginBottom: '16px', color: '#444', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FaClock /> <strong>Response Time:</strong> We aim to respond to all privacy-related inquiries within 5
                    business days. For urgent matters, please call our privacy hotline at +1 (555) 123-4567.
                  </p>
                </div>
              </div>

              <footer style={{
                marginTop: '20px',
                paddingTop: '15px',
                borderTop: '1px solid #ddd',
                fontSize: '0.9rem',
                color: '#666'
              }}>
                This Privacy Policy is effective as of August 4, 2025 and applies to all information collected by
                RioGram.
              </footer>
            </section>



            {/* Continue with all other sections exactly as you had them before */}
            {/* ... info-collect, use-info, sharing, security, cookies, rights, retention, transfers, children, changes, contact sections ... */}

          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .sidebar {
            transform: translateX(-100%);
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            z-index: 30;
          }
          
          .mobile-menu-button {
            display: flex !important;
          }
          
          .mobile-overlay {
            display: block !important;
          }
          
          .sidebar {
            width: 280px;
            max-width: 80vw;
          }
          
          div[style*="maxWidth: '800px'"] {
            margin-top: 0 !important;
          }
        }
        
        @media (min-width: 1025px) {
          .sidebar {
            transform: translateX(0) !important;
          }
        }
        
        @media (max-width: 768px) {
          div[style*="maxWidth: '800px'"] {
            padding: 0 10px !important;
          }
          
          section {
            padding: 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;