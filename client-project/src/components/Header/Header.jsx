import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../../pages/Home/home';
import Pricing from '../../Pricing_and_Footer/pricing';
import Footer from '../../Pricing_and_Footer/footer';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  // Track open state for parent and each nested dropdown
  const [openDropdowns, setOpenDropdowns] = useState({
    services: false,
    freeProducts: false,
    growthProducts: false,
    boostProducts: false,
  });

  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth <= 767;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMenuOpen(false);
        // Close all dropdowns on desktop
        setOpenDropdowns({
          services: false,
          freeProducts: false,
          growthProducts: false,
          boostProducts: false,
        });
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setOpenDropdowns({
        services: false,
        freeProducts: false,
        growthProducts: false,
        boostProducts: false,
      });
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdowns({
      services: false,
      freeProducts: false,
      growthProducts: false,
      boostProducts: false,
    });
  };

  const toggleDropdown = (e, dropdownName) => {
    e.preventDefault();
    setOpenDropdowns((prev) => ({
      ...prev,
      [dropdownName]: !prev[dropdownName],
    }));
  };

  // Inline styles as in your original
  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      width: '100%',
      background: '#fff',
      zIndex: 1000,
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      position: 'relative',
    },
    logo: {
      fontWeight: 'bold',
      fontSize: '24px',
      color: '#5041BC',
      textDecoration: 'none',
      zIndex: 1001,
    },
    iconContainer: {
      display: isMobile ? 'block' : 'none',
      position: 'relative',
      zIndex: 1001,
    },
    icon: {
      fontSize: '24px',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      color: '#5041BC',
      padding: '10px',
    },
    menu: {
      display: 'flex',
      alignItems: 'center',
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      right: '-100%',
      width: '80%',
      maxWidth: '300px',
      height: '100vh',
      background: '#fff',
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingTop: '70px',
      transition: 'right 0.3s ease',
      zIndex: 1000,
    },
    mobileMenuShow: {
      right: 0,
    },
    navLink: {
      color: '#5041BC',
      textDecoration: 'none',
      padding: '10px 20px',
      display: 'block',
      transition: 'background 0.2s',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    dropdown: {
      position: 'relative',
    },
    dropdownContent: {
      display: 'none',
      position: 'absolute',
      background: '#fff',
      minWidth: '200px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      zIndex: 999,
    },
    dropdownContentShow: {
      display: 'block',
    },
    mobileDropdownContent: {
      position: 'relative',
      boxShadow: 'none',
      display: 'none',
      width: '100%',
    },
    mobileDropdownContentShow: {
      display: 'block',
      paddingLeft: '20px',
    },
    nestedDropdown: {
      marginLeft: '15px',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 998,
      display: 'none',
    },
    overlayActive: {
      display: 'block',
    },
  };

  return (
    <>
      <style>
        {`
          body {
            padding-top: 70px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f7f9fc;
          }
          @media screen and (min-width: 768px) {
            .dropdown:hover > .dropdown-content {
              display: block !important;
            }
            .dropdown .dropdown:hover > .dropdown-content {
              left: 100% !important;
              top: 0 !important;
              margin-left: 2px !important;
            }
          }
        `}
      </style>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <header style={styles.header}>
        <nav style={styles.nav}>
          <NavLink to="./home" style={styles.logo}>
            RioGram
          </NavLink>

          <div style={styles.iconContainer}>
            <button
              style={styles.icon}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <i
                className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}
                style={{ color: '#5041BC' }}
              ></i>
            </button>
          </div>

          <div
            style={{
              ...styles.menu,
              ...(isMobile ? styles.mobileMenu : {}),
              ...(isMobile && isMenuOpen ? styles.mobileMenuShow : {}),
              ...(isMobile ? { flexDirection: 'column', alignItems: 'flex-start', width: '100%' } : {}),
            }}
          >
            {/* Services Dropdown – Parent */}
            <div style={styles.dropdown} className="dropdown">
              <NavLink
                to="#"
                style={styles.navLink}
                onClick={(e) => toggleDropdown(e, 'services')}
              >
                Services &#9662;
              </NavLink>
              <div
                style={{
                  ...(isMobile
                    ? styles.mobileDropdownContent
                    : styles.dropdownContent),
                  ...(openDropdowns.services &&
                  (isMobile
                    ? styles.mobileDropdownContentShow
                    : styles.dropdownContentShow)),
                }}
                className="dropdown-content"
              >
                {/* Paid Promotion */}
                <NavLink to="#" style={styles.navLink} onClick={closeMenu}>
                  Paid Promotion
                </NavLink>

                {/* Free Product Suits Dropdown */}
                <div style={styles.dropdown} className="dropdown">
                  <NavLink
                    to="#"
                    style={styles.navLink}
                    onClick={(e) => toggleDropdown(e, 'freeProducts')}
                  >
                    Free Product Suits &#9656;
                  </NavLink>
                  <div
                    style={{
                      ...(isMobile
                        ? { ...styles.mobileDropdownContent, ...styles.nestedDropdown }
                        : styles.dropdownContent),
                      ...(openDropdowns.freeProducts &&
                      (isMobile
                        ? styles.mobileDropdownContentShow
                        : styles.dropdownContentShow)),
                    }}
                    className="dropdown-content"
                  >
                    <NavLink to="#" style={styles.navLink} onClick={closeMenu}>Free Demo</NavLink>
                    <NavLink to="#" style={styles.navLink} onClick={closeMenu}>Trial Subscriptions</NavLink>
                    <NavLink to="#" style={styles.navLink} onClick={closeMenu}>Membership</NavLink>
                  </div>
                </div>

                {/* Growth Product Suits Dropdown */}
                <div style={styles.dropdown} className="dropdown">
                  <NavLink
                    to="#"
                    style={styles.navLink}
                    onClick={(e) => toggleDropdown(e, 'growthProducts')}
                  >
                    Growth Product Suits &#9656;
                  </NavLink>
                  <div
                    style={{
                      ...(isMobile
                        ? { ...styles.mobileDropdownContent, ...styles.nestedDropdown }
                        : styles.dropdownContent),
                      ...(openDropdowns.growthProducts &&
                      (isMobile
                        ? styles.mobileDropdownContentShow
                        : styles.dropdownContentShow)),
                    }}
                    className="dropdown-content"
                  >
                    <NavLink to="#" style={styles.navLink} onClick={closeMenu}>Free Demo</NavLink>
                    <NavLink to="#" style={styles.navLink} onClick={closeMenu}>Trial Subscriptions</NavLink>
                    <NavLink to="#" style={styles.navLink} onClick={closeMenu}>Membership</NavLink>
                    <NavLink to="#" style={styles.navLink} onClick={closeMenu}>Paid Promotion</NavLink>
                  </div>
                </div>

                {/* Boost Product Suits Dropdown */}
                <div style={styles.dropdown} className="dropdown">
                  <NavLink
                    to="#"
                    style={styles.navLink}
                    onClick={(e) => toggleDropdown(e, 'boostProducts')}
                  >
                    Boost Product Suits &#9656;
                  </NavLink>
                  <div
                    style={{
                      ...(isMobile
                        ? { ...styles.mobileDropdownContent, ...styles.nestedDropdown }
                        : styles.dropdownContent),
                      ...(openDropdowns.boostProducts &&
                      (isMobile
                        ? styles.mobileDropdownContentShow
                        : styles.dropdownContentShow)),
                    }}
                    className="dropdown-content"
                  >
                    <NavLink to="#" style={styles.navLink} onClick={closeMenu}>Free Demo</NavLink>
                    <NavLink to="#" style={styles.navLink} onClick={closeMenu}>Trial Subscriptions</NavLink>
                    <NavLink to="#" style={styles.navLink} onClick={closeMenu}>Membership</NavLink>
                    <NavLink to="#" style={styles.navLink} onClick={closeMenu}>Paid Promotion</NavLink>
                    <NavLink to="#" style={styles.navLink} onClick={closeMenu}>Consulting</NavLink>
                  </div>
                </div>

                <NavLink to="#" style={styles.navLink} onClick={closeMenu}>
                  Automate Product Suits
                </NavLink>
              </div>
            </div>

            <NavLink to="./about" style={styles.navLink} onClick={closeMenu}>
              About Us
            </NavLink>
            <NavLink to="./contact" style={styles.navLink} onClick={closeMenu}>
              Contact Us
            </NavLink>
            <NavLink to="./privacy" style={styles.navLink} onClick={closeMenu}>
              Privacy-Policy
            </NavLink>
          </div>
        </nav>
      </header>

      <div
        style={{
          ...styles.overlay,
          ...(isMenuOpen && isMobile ? styles.overlayActive : {}),
        }}
        onClick={closeMenu}
      ></div>
      {/* <Home />
      <Pricing />
      <Footer /> */}
    </>
  );
}

export default Header;
