import React from "react";
import "./home.css";
import Pricing from "../../Pricing_and_Footer/pricing";
import Footer from "../../Pricing_and_Footer/footer";

const MainContent = () => {
  return (
    <>
      <div className="container1">
        <h1>Welcome to RioGram</h1>
        <p className="subtitle1">
          Your premier destination for digital solutions and services.
        </p>

        {/* CARDS SECTION */}
        <div className="cards1">
          <div className="card1">
            <h2 style={{ textAlign: "center" }}>Our Services</h2>
            <p>
              We offer comprehensive digital solutions including web
              development, mobile apps, digital marketing, cloud solutions, and
              IT consulting.
            </p>
          </div>
          <div className="card1">
            <h2>About Us</h2>
            <p>
              RioGram is a leading technology company dedicated to delivering
              innovative solutions that drive business growth and success.
            </p>
          </div>
          <div className="card1">
            <h2>Contact Us</h2>
            <p>
              Ready to transform your business? Get in touch with our expert
              team to discuss your project requirements and goals.
            </p>
          </div>
        </div>
      </div>

      {/* PRICING SECTION */}
      <Pricing />
      <Footer />
    </>
  );
};

export default MainContent;
