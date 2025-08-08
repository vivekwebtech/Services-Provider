

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