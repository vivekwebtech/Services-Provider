import React, { useState } from 'react';
import { FaBolt, FaGlobe, FaStar } from 'react-icons/fa';

const Pricing = () => {
  const [activePlan, setActivePlan] = useState('free');

  // Styles
  const styles = {
    page: {
      fontFamily: "'Arial', sans-serif",
      margin: 0,
      padding: 0,
      backgroundColor: '#f5f7fa',
      color: '#333',
      minHeight: '100vh'
    },
    banner: {
      width: '100%',
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #4257eb, #9134ea, #433cc2)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      color: 'white',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    bannerTitle: {
      fontSize: '3rem',
      margin: 0,
      fontWeight: 700,
      marginTop: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    bannerSubtitle: {
      fontSize: '1.5rem',
      margin: '10px 0',
      fontWeight: 500,
      fontStyle: 'italic'
    },
    tagline: {
      fontStyle: 'italic',
      opacity: 0.9,
      maxWidth: '800px',
      margin: '0 auto'
    },
    planTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      display: 'block',
      textAlign: 'center',
      marginTop: '70px',
      color: 'black'
    },
    planDescription: {
      fontSize: '1.2rem',
      fontWeight: 500,
      display: 'block',
      textAlign: 'center',
      marginTop: '20px',
      color: 'rgb(150, 145, 145)'
    },
    section: {
      maxWidth: '1200px',
      margin: '40px auto',
      padding: '40px 20px',
      textAlign: 'center',
      backgroundColor: '#ffffff',
      borderRadius: '16px'
    },
    planSwitch: {
      display: 'inline-flex',
      gap: '10px',
      marginBottom: '30px',
      background: '#fff',
      padding: '8px 12px',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)'
    },
    switchButton: {
      background: 'none',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '6px',
      fontWeight: 600,
      cursor: 'pointer',
      color: '#333',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    activeButton: {
      background: '#2e6eff',
      color: 'white',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    },
    cardsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '20px',
      transition: 'all 0.3s ease'
    },
    card: {
      display: 'block',
      textAlign: 'left',
      background: '#fff',
      borderRadius: '16px',
      padding: '30px 24px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
      color: '#111',
      textDecoration: 'none',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      position: 'relative'
    },
    popularCard: {
      border: '2px solid #2e6eff',
      background: '#f0f6ff'
    },
    popularLabel: {
      position: 'absolute',
      top: '-12px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#6838f5',
      color: 'white',
      padding: '4px 12px',
      fontSize: '12px',
      borderRadius: '20px',
      fontWeight: 600
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: 700,
      marginBottom: '4px',
      textAlign: 'center'
    },
    cardSubtitle: {
      fontSize: '14px',
      color: '#555',
      marginBottom: '20px',
      textAlign: 'center'
    },
    cardPrice: {
      fontSize: '36px',
      fontWeight: 700,
      marginBottom: '4px',
      textAlign: 'center'
    },
    monthText: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '24px'
    },
    feature: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '12px',
      color: '#555454',
      marginBottom: '15px',
      marginTop: '20px'
    },
    button: {
      marginTop: '20px',
      display: 'inline-block',
      background: '#111',
      color: 'white',
      padding: '12px 20px',
      borderRadius: '10px',
      fontWeight: 600,
      textAlign: 'center',
      textDecoration: 'none',
      width: '80%',
      transition: 'background 0.3s ease, transform 0.2s ease',
      marginLeft: '15px',
      border: 'none',
      cursor: 'pointer'
    },
    popularButton: {
      background: '#2e6eff'
    },

    // Media queries
    '@media (max-width: 768px)': {
      banner: {
        padding: '30px 20px',
        height: 'auto'
      },
      bannerTitle: {
        fontSize: '2rem',
        marginTop: '10px'
      },
      bannerSubtitle: {
        fontSize: '1.2rem'
      },
      planTitle: {
        fontSize: '2rem',
        marginTop: '40px'
      },
      planDescription: {
        fontSize: '1rem'
      },
      cardPrice: {
        fontSize: '28px'
      },
      section: {
        padding: '20px 10px'
      }
    },
    '@media (max-width: 480px)': {
      bannerTitle: {
        fontSize: '1.8rem'
      },
      bannerSubtitle: {
        fontSize: '1rem'
      },
      planTitle: {
        fontSize: '1.8rem'
      },
      planSwitch: {
        flexDirection: 'column',
        width: '100%'
      },
      switchButton: {
        width: '100%',
        justifyContent: 'center'
      },
      cardsContainer: {
        gridTemplateColumns: '1fr'
      }
    },
    '@media (min-width: 769px) and (max-width: 1024px)': {
      banner: {
        padding: '40px 20px'
      },
      cardsContainer: {
        gridTemplateColumns: 'repeat(2, 1fr)'
      }
    }
  };

  // Plans data
  const freePlans = [
    {
      title: 'Basic',
      subtitle: 'Great for personal projects',
      price: '$0',
      features: [
        'Basic Template Design',
        'Mobile Responsive',
        'Basic SEO',
        'Contact Form',
        'Limited Support',
        'RioGram Branding',
      ],
      button: 'Start Free',
    },
    {
      title: 'Community',
      subtitle: 'Perfect for small businesses',
      price: '$0',
      features: [
        'Everything in Basic',
        '5 Pages Maximum',
        'Email Integration',
        'Basic Analytics',
        'Community Support',
        'Monthly Updates',
      ],
      button: 'Most Popular',
      popular: true,
    },
    {
      title: 'Startup',
      subtitle: 'Ideal for new startups',
      price: '$0',
      features: [
        'Everything in Community',
        '10 Pages Maximum',
        'Social Media Links',
        'Basic E-commerce',
        'Priority Community Support',
        'Bi-weekly Updates',
      ],
      button: 'Get Started',
    }
  ];

  const premiumPlans = [
    {
      title: 'Starter Pro',
      subtitle: 'Perfect for growing businesses',
      price: '$299',
      features: [
        'Custom Website Design',
        'Mobile Responsive',
        'SEO Optimization',
        'Social Media Integration',
        '24/7 Support',
        'SSL Certificate',
        'Analytics Dashboard',
      ],
      button: 'Get Started',
    },
    {
      title: 'Business Elite',
      subtitle: 'Ideal for established companies',
      price: '$599',
      features: [
        'Everything in Starter Pro',
        'E-commerce Integration',
        'Advanced Analytics',
        'Custom Plugins',
        'Priority Support',
        'Database Management',
        'API Development',
        'Performance Optimization',
      ],
      button: 'Most Popular',
      popular: true,
    },
    {
      title: 'Enterprise Max',
      subtitle: 'Complete Solution for large Enterprises',
      price: '$1,299',
      features: [
        'Everything in Business Elite',
        'Dedicated Account Manager',
        'Custom Integrations',
        'Advanced Security',
        'Multi-site Management',
        'White-label Solution',
        'Training & Consulting',
        'SLA Guarantee',
      ],
      button: 'Contact Sales',
    }
  ];

  return (
    <div style={styles.page}>
      {/* Banner Section */}
      <div style={styles.banner}>
        <h1 style={styles.bannerTitle}><FaGlobe /> RioGram</h1>
        <h2 style={styles.bannerSubtitle}>Professional Web Solutions Provider</h2>
        <p style={styles.tagline}>
          Transforming businesses through innovative web technologies, custom development,
          and strategic digital solutions
        </p>
      </div>

      {/* Plan Info */}
      <div>
        <span style={styles.planTitle}>Choose Your Plan</span>
        <p style={styles.planDescription}>
          Select the perfect solution for your business needs. From free starter plans to <br />
          enterprise solutions.
        </p>
      </div>

      {/* Pricing Section */}
      <section style={styles.section}>
        <div style={styles.planSwitch}>
          <button
            style={{
              ...styles.switchButton,
              ...(activePlan === 'premium' ? styles.activeButton : {})
            }}
            onClick={() => setActivePlan('premium')}
          >
            <FaBolt color="orange" /> Premium Plans
          </button>
          <button
            style={{
              ...styles.switchButton,
              ...(activePlan === 'free' ? styles.activeButton : {})
            }}
            onClick={() => setActivePlan('free')}
          >
            <FaStar color="rgb(255, 81, 0)" /> Free Plans
          </button>
        </div>

        {/* Free Plans */}
        {activePlan === 'free' && (
          <div style={styles.cardsContainer}>
            {freePlans.map((plan, index) => (
              <div 
                key={index}
                style={{
                  ...styles.card,
                  ...(plan.popular ? styles.popularCard : {})
                }}
              >
                {plan.popular && <div style={styles.popularLabel}>Most Popular</div>}
                <div style={styles.cardTitle}>{plan.title}</div>
                <div style={styles.cardSubtitle}>{plan.subtitle}</div>
                <div style={styles.cardPrice}>{plan.price}<span style={styles.monthText}>/month</span></div>
                {plan.features.map((feature, i) => (
                  <div style={styles.feature} key={i}>
                    <span style={{color: '#28c76f', fontWeight: 'bold'}}>✔</span> {feature}
                  </div>
                ))}
                <button 
                  style={{
                    ...styles.button,
                    ...(plan.popular ? styles.popularButton : {})
                  }}
                >
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Premium Plans */}
        {activePlan === 'premium' && (
          <div style={styles.cardsContainer}>
            {premiumPlans.map((plan, index) => (
              <div 
                key={index}
                style={{
                  ...styles.card,
                  ...(plan.popular ? styles.popularCard : {})
                }}
              >
                {plan.popular && <div style={styles.popularLabel}>Most Popular</div>}
                <div style={styles.cardTitle}>{plan.title}</div>
                <div style={styles.cardSubtitle}>{plan.subtitle}</div>
                <div style={styles.cardPrice}>{plan.price}<span style={styles.monthText}>/month</span></div>
                {plan.features.map((feature, i) => (
                  <div style={styles.feature} key={i}>
                    <span style={{color: '#28c76f', fontWeight: 'bold'}}>✔</span> {feature}
                  </div>
                ))}
                <button 
                  style={{
                    ...styles.button,
                    ...(plan.popular ? styles.popularButton : {})
                  }}
                >
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Pricing;