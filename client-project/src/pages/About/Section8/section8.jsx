import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import './section8.css'; // You'll need to create this CSS file

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wrapperRef = useRef(null);
  const autoSlideInterval = useRef(null);

  const testimonials = [
    {
      id: 1,
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Alexandra Smith",
      title: "CEO",
      company: "TechCorp Global",
      subtitle: "Fortune 500 Technology Company",
      text: `"RioGram transformed our entire digital ecosystem. Their innovative approach and meticulous
             attention to detail didn't just meet our expectations—they redefined what we thought was
             possible for our industry."`,
      project: "Digital Transformation",
      result: "300% engagement increase"
    },
    {
      id: 2,
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Robert Johnson",
      title: "CTO",
      company: "InnovateLabs",
      subtitle: "Leading AI Research Company",
      text: `"The technical expertise and creative vision that RioGram brought to our AI 
             platform was extraordinary. They delivered a solution that was not only 
             technically superior but also beautifully designed and user-friendly."`,
      project: "AI Platform Development",
      result: "50% faster processing speeds"
    },
    {
      id: 3,
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Maria Garcia",
      title: "Founder",
      company: "StartupX",
      subtitle: "Fast-Growing Fintech Company",
      text: `"From initial concept to successful launch, RioGram was our trusted partner
             every step of the way. Their strategic insights and flawless execution were
             instrumental in our rapid growth and market success."`,
      project: "Fintech Platform Launch",
      result: "$10M Funding raised post-launch"
    },
    {
      id: 4,
      photo: "https://randomuser.me/api/portraits/men/75.jpg",
      name: "Dr. James Wilson",
      title: "Director Of Digital Health",
      company: "Global Healthcare Network",
      subtitle: "Global Healthcare Network",
      text: `"RioGram's healthcare platform has revolutionized how we deliver patient
             care. Their understanding of both technology and healthcare needs resulted
             in a solution that truly makes a difference in people's lives."`,
      project: "Healthcare Management System",
      result: "40% improvement in patient outcomes"
    }
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const startAutoSlide = () => {
    autoSlideInterval.current = setInterval(nextSlide, 5000);
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval.current);
    startAutoSlide();
  };

  useEffect(() => {
    goToSlide(currentIndex);
    startAutoSlide();

    return () => {
      clearInterval(autoSlideInterval.current);
    };
  }, [currentIndex]);

  const handleMouseEnter = () => {
    clearInterval(autoSlideInterval.current);
  };

  const handleMouseLeave = () => {
    startAutoSlide();
  };

  return (
    <section className="testimonial-section">
      <div className="animated-bg">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      <div className="testimonial-header">
        <div className="testimonial-badge">
          <FontAwesomeIcon icon={faQuoteLeft} /> RioGram Client Stories
        </div>
        <h2>
          What Our Clients <span className="highlight">Say About Us</span>
        </h2>
      </div>

      <div 
        className="testimonial-slider" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="testimonial-wrapper" ref={wrapperRef}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-top">
                <div className="client-info">
                  <img src={testimonial.photo} alt={testimonial.name} className="client-photo" />
                  <div>
                    <div className="client-name">{testimonial.name}</div>
                    <div className="client-title">{testimonial.title}, <strong>{testimonial.company}</strong></div>
                    <div className="client-sub">{testimonial.subtitle}</div>
                  </div>
                </div>
                <div className="stars">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>

              <p className="testimonial-text">
                {testimonial.text}
              </p>

              <div className="testimonial-tags">
                <span className="tag tag-project">Project: {testimonial.project}</span>
                <span className="tag tag-result">Result: {testimonial.result}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-navigation">
          <button className="nav-button prev-btn" onClick={() => {
            prevSlide();
            resetAutoSlide();
          }}>&#8592;</button>
          
          <div className="pagination-dots">
            {testimonials.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentIndex ? 'active' : ''}`} 
                onClick={() => {
                  goToSlide(index);
                  resetAutoSlide();
                }}
              ></span>
            ))}
          </div>
          
          <button className="nav-button next-btn" onClick={() => {
            nextSlide();
            resetAutoSlide();
          }}>&#8594;</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;