// App.js
import React, { useEffect } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  useEffect(() => {
    const overlay = document.getElementById("overlay");
    const menuIcon = document.getElementById("menuIcon");
    const menuItems = document.getElementById("menuItems");

    function toggleMenu() {
      menuItems.classList.toggle("show");
      if (menuItems.classList.contains("show")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
        overlay.style.display = "block";
      } else {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
        overlay.style.display = "none";
      }
    }

    function closeMenu() {
      menuItems.classList.remove("show");
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
      overlay.style.display = "none";
    }

    const iconButton = document.getElementById("menuToggleBtn");
    if (iconButton) iconButton.addEventListener("click", toggleMenu);
    if (overlay) overlay.addEventListener("click", closeMenu);

    document.querySelectorAll(".dropdown > a").forEach(link => {
      link.addEventListener("click", function (e) {
        if (window.innerWidth <= 767) {
          e.preventDefault();
          const dropdownContent = this.nextElementSibling;
          if (dropdownContent && dropdownContent.classList.contains("dropdown-content")) {
            dropdownContent.classList.toggle("show-dropdown");
          }
        }
      });
    });

    return () => {
      if (iconButton) iconButton.removeEventListener("click", toggleMenu);
      if (overlay) overlay.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

        {/* HEADER SECTION */}
        <header className="header">
          <nav className="nav">
            <NavLink to="./home" className="logo1" style={{fontSize: '24px', fontWeight: 'bold'}}>RioGram</NavLink>

            {/* MOBILE MENU */}
            <div className="menu" id="menuItems">
              {/* SERVICES DROPDOWN */}
              <div className="dropdown">
                <NavLink to="#" className="nav_1">Services &#9662;</NavLink>
                <div className="dropdown-content">
                  <NavLink to="#">Paid Promotion</NavLink>
                  <div className="dropdown">
                    <NavLink to="#">Free Product Suits &#9656;</NavLink>
                    <div className="dropdown-content">
                      <NavLink to="#">Free Demo</NavLink>
                      <NavLink to="#">Trial Subscriptions</NavLink>
                      <NavLink to="#">Membership</NavLink>
                    </div>
                  </div>
                  <div className="dropdown">
                    <NavLink to="#">Growth Product Suits &#9656;</NavLink>
                    <div className="dropdown-content">
                      <NavLink to="#">Free Demo</NavLink>
                      <NavLink to="#">Trial Subscriptions</NavLink>
                      <NavLink to="#">Membership</NavLink>
                      <NavLink to="#">Paid Promotion</NavLink>
                    </div>
                  </div>
                  <div className="dropdown">
                    <NavLink to="#">Boost Product Suits &#9656;</NavLink>
                    <div className="dropdown-content">
                      <NavLink to="#">Free Demo</NavLink>
                      <NavLink to="#">Trial Subscriptions</NavLink>
                      <NavLink to="#">Membership</NavLink>
                      <NavLink to="#">Paid Promotion</NavLink>
                      <NavLink to="#">Consulting</NavLink>
                    </div>
                  </div>
                  <NavLink to="#">Automate Product Suits</NavLink>
                </div>
              </div>
              
            
              {/* Fixed NavLink paths */}
              <NavLink to="./about">About Us</NavLink>
              <NavLink to="./contact" >Contact Us</NavLink>
              <NavLink to="./privacy">Privacy-Policy </NavLink>

              
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button className="icon" id="menuToggleBtn">
              <i className="fa fa-bars" id="menuIcon"></i>
            </button>
          </nav>
        </header>

        {/* OVERLAY FOR MOBILE MENU */}
        <div id="overlay"></div>

        {/* ROUTES */}
        
      </>
   
  );
}

export default Header;
