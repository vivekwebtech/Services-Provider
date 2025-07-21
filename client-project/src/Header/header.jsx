import React, { useEffect } from "react";
import "./header.css";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  useEffect(() => {
    const overlay = document.getElementById("overlay");
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menuItems");

    const toggleMenu = () => {
      menu.classList.toggle("show");
      if (menu.classList.contains("show")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
        overlay.style.display = "block";
      } else {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
        overlay.style.display = "none";
      }
    };

    const closeMenu = () => {
      menu.classList.remove("show");
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
      overlay.style.display = "none";
    };

    document.getElementById("menuButton").addEventListener("click", toggleMenu);
    overlay.addEventListener("click", closeMenu);

    // Handle mobile dropdown toggles
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
      overlay.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <>
      <header className="header">
        <nav className="nav">
          <a href="#" className="logo1">RioGram</a>

          <div className="menu" id="menuItems">
            <div className="dropdown">
              <a href="#" className="nav_1">Services &#9662;</a>
              <div className="dropdown-content">
                <a href="../component/Paid_Promotion/paid.html">Paid Promotion</a>

                {/* Free Product Suits */}
                <div className="dropdown">
                  <a href="#">Free Product Suits &#9656;</a>
                  <div className="dropdown-content">
                    <a href="../component/Free_Product_Suits/free.html">Free Demo</a>
                    <a href="../component/Free_Product_Suits/trial.html">Trial Subscriptions</a>
                    <a href="../component/Free_Product_Suits/membership.html">Membership</a>
                  </div>
                </div>

                {/* Growth Product Suits */}
                <div className="dropdown">
                  <a href="#">Growth Product Suits &#9656;</a>
                  <div className="dropdown-content">
                    <a href="../component/Growth_Product_Suits/free.html">Free Demo</a>
                    <a href="../component/Growth_Product_Suits/trial.html">Trial Subscriptions</a>
                    <a href="../component/Growth_Product_Suits/membership.html">Membership</a>
                    <a href="../component/Growth_Product_Suits/paid.html">Paid Promotion</a>
                  </div>
                </div>

                {/* Boost Product Suits */}
                <div className="dropdown">
                  <a href="#">Boost Product Suits &#9656;</a>
                  <div className="dropdown-content">
                    <a href="../component/Boost_Product_Suits/free.html">Free Demo</a>
                    <a href="../component/Boost_Product_Suits/trial.html">Trial Subscriptions</a>
                    <a href="../component/Boost_Product_Suits/membership.html">Membership</a>
                    <a href="../component/Boost_Product_Suits/paid.html">Paid Promotion</a>
                    <a href="../component/Boost_Product_Suits/consulting.html">Consulting</a>
                  </div>
                </div>

                <a href="../component/Automate_Product_Suits/automate.html">Automate Product Suits</a>
              </div>
            </div>

            <a href="../component/About_Us/about.html">About Us</a>
            <a href="../component/Contact_Us/contact.html">Contact Us</a>
          </div>

          <button className="icon" id="menuButton">
            <i className="fa fa-bars" id="menuIcon"></i>
          </button>
        </nav>
      </header>

      <div id="overlay"></div>
    </>
  );
};

export default Header;
