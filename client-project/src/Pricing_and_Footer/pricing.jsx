import React, { useState } from 'react';
import './pricing.css';
import { FaBolt, FaGlobe } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6'; // FontAwesome 6 star


const Pricing = () => {
  const [activePlan, setActivePlan] = useState('free');

  return (
    <div className="pricing-page">
      {/* Banner Section */}
      <div className="banner">
        <h1 className="banner-title" style={{color:'black'}}><FaGlobe /> RioGram</h1>
        <h2 className="banner-subtitle">Professional Web Solutions Provider</h2>
        <p className="tagline">
          Transforming businesses through innovative web technologies, custom development,
          and strategic digital solutions
        </p>
      </div>

      {/* Plan Info */}
      <div>
        <span className="plan-title">Choose Your Plan</span>
        <p className="plan-description">
          Select the perfect solution for your business needs. From free starter plans to <br />
          enterprise solutions.
        </p>
      </div>

      {/* Toggle Buttons */}
      <section className="pricing-section">
        <div className="plan-switch">
          <button
            id="premiumBtn"
            className={activePlan === 'premium' ? 'active' : ''}
            onClick={() => setActivePlan('premium')}
          >
            <FaBolt /> Premium Plans
          </button>
          <button
            id="freeBtn"
            className={activePlan === 'free' ? 'active' : ''}
            onClick={() => setActivePlan('free')}
          >
            <FaStar /> Free Plans
          </button>
        </div>

        {/* Free Plans */}
        {activePlan === 'free' && (
          <div className="pricing-cards visible">
            {[
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
              },
            ].map((plan, index) => (
              <a href="#" className={`pricing-card ${plan.popular ? 'most-popular' : ''}`} key={index}>
                {plan.popular && <div className="most-popular-label">Most Popular</div>}
                <div className="plan-title-card">{plan.title}</div>
                <div className="plan-subtitle">{plan.subtitle}</div>
                <div className="plan-price">{plan.price}<span className="month">/month</span></div>
                {plan.features.map((feature, i) => (
                  <div className="plan-feature" key={i}>{feature}</div>
                ))}
                <span className="plan-button">{plan.button}</span>
              </a>
            ))}
          </div>
        )}

        {/* Premium Plans */}
        {activePlan === 'premium' && (
          <div className="pricing-cards visible">
            {[
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
              },
            ].map((plan, index) => (
              <a href="#" className={`pricing-card ${plan.popular ? 'most-popular' : ''}`} key={index}>
                {plan.popular && <div className="most-popular-label">Most Popular</div>}
                <div className="plan-title-card">{plan.title}</div>
                <div className="plan-subtitle">{plan.subtitle}</div>
                <div className="plan-price">{plan.price}<span className="month">/month</span></div>
                {plan.features.map((feature, i) => (
                  <div className="plan-feature" key={i}>{feature}</div>
                ))}
                <span className="plan-button">{plan.button}</span>
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Pricing;
