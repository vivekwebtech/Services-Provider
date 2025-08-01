import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faCompass,
  faCode,
  faPalette,
  faCloud,
  faBolt,
  faDesktop,
  faCheckCircle,
  faUsers,
  faCamera
} from '@fortawesome/free-solid-svg-icons';

const RioGramServices = () => {
  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      margin: 0
    }}>
      {/* Services Section */}
      <div style={{
        background: '#0f172a',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '100px 20px',
        textAlign: 'center'
      }}>
        <section style={{
          maxWidth: '900px'
        }}>
          <button style={{
            background: '#1e293b',
            color: '#38bdf8',
            border: '1px solid #334155',
            padding: '10px 20px',
            fontSize: '14px',
            borderRadius: '999px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '30px',
            boxShadow: '0 0 0 1px #334155'
          }}>
            <FontAwesomeIcon icon={faBriefcase} /> RioGram Services
          </button>

          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.3'
          }}>
            Services That Transform<br />
            <span style={{
              background: 'linear-gradient(135deg, #38bdf8, #9333ea)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Your Digital Vision</span>
          </h1>

          <p style={{
            fontSize: '18px',
            color: '#cbd5e1',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto 60px'
          }}>
            RioGram offers comprehensive digital solutions that cover every aspect of your technology needs,<br />
            from strategic planning to flawless implementation and ongoing support.
          </p>
        </section>

        <section style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
          maxWidth: '1200px',
          margin: 'auto'
        }}>
          <div style={{
            background: '#1e293b',
            borderRadius: '20px',
            padding: '30px 25px',
            flex: '1 1 300px',
            maxWidth: '350px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-10px)'
            }
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '22px',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #3b82f6, #6366f1)'
            }}>
              <FontAwesomeIcon icon={faCompass} />
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '12px',
              color: '#ffffff'
            }}>Digital Strategy & Consulting</h3>
            <p style={{
              fontSize: '15px',
              color: '#cbd5e1',
              marginBottom: '20px',
              lineHeight: '1.5'
            }}>
              Comprehensive digital transformation strategies that align technology with your business objectives
              and market opportunities.
            </p>
            <span style={{
              display: 'inline-block',
              padding: '6px 14px',
              fontSize: '13px',
              backgroundColor: '#1e40af',
              color: '#c7d2fe',
              borderRadius: '999px',
              marginBottom: '20px'
            }}>200+ strategies delivered</span>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> Market Analysis & Research</li>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> Technology Roadmapping</li>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> ROI Optimization</li>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> Competitive Intelligence</li>
            </ul>
          </div>

          <div style={{
            background: '#1e293b',
            borderRadius: '20px',
            padding: '30px 25px',
            flex: '1 1 300px',
            maxWidth: '350px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-10px)'
            }
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '22px',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #10b981, #22c55e)'
            }}>
              <FontAwesomeIcon icon={faCode} />
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '12px',
              color: '#ffffff'
            }}>Custom Software Development</h3>
            <p style={{
              fontSize: '15px',
              color: '#cbd5e1',
              marginBottom: '20px',
              lineHeight: '1.5'
            }}>
              Bespoke software solutions built with cutting-edge technologies, scalable architecture, and industry
              best practices.
            </p>
            <span style={{
              display: 'inline-block',
              padding: '6px 14px',
              fontSize: '13px',
              backgroundColor: '#1e40af',
              color: '#c7d2fe',
              borderRadius: '999px',
              marginBottom: '20px'
            }}>500+ applications built</span>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> Web Applications</li>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> Mobile Apps (iOS/Android)</li>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> API Development</li>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> System Integration</li>
            </ul>
          </div>

          <div style={{
            background: '#1e293b',
            borderRadius: '20px',
            padding: '30px 25px',
            flex: '1 1 300px',
            maxWidth: '350px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-10px)'
            }
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '22px',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #ec4899, #a855f7)'
            }}>
              <FontAwesomeIcon icon={faPalette} />
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '12px',
              color: '#ffffff'
            }}>UI/UX Design Excellence</h3>
            <p style={{
              fontSize: '15px',
              color: '#cbd5e1',
              marginBottom: '20px',
              lineHeight: '1.5'
            }}>
              User-centered design that combines aesthetic beauty with functional excellence for optimal user
              experiences and engagement.
            </p>
            <span style={{
              display: 'inline-block',
              padding: '6px 14px',
              fontSize: '13px',
              backgroundColor: '#1e40af',
              color: '#c7d2fe',
              borderRadius: '999px',
              marginBottom: '20px'
            }}>300+ designs created</span>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> User Experience Design</li>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> Interface Design</li>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> Design Systems</li>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> Prototyping & Testing</li>
            </ul>
          </div>

          <div style={{
            background: '#1e293b',
            borderRadius: '20px',
            padding: '30px 25px',
            flex: '1 1 300px',
            maxWidth: '350px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-10px)'
            }
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '22px',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)'
            }}>
              <FontAwesomeIcon icon={faCloud} />
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '12px',
              color: '#ffffff'
            }}>Cloud & Infrastructure</h3>
            <p style={{
              fontSize: '15px',
              color: '#cbd5e1',
              marginBottom: '20px',
              lineHeight: '1.5'
            }}>
              Scalable cloud solutions and infrastructure management that ensures reliability, security, and
              optimal performance.
            </p>
            <span style={{
              display: 'inline-block',
              padding: '6px 14px',
              fontSize: '13px',
              backgroundColor: '#1e40af',
              color: '#c7d2fe',
              borderRadius: '999px',
              marginBottom: '20px'
            }}>150+ cloud migrations</span>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> Cloud Migration</li>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> DevOps Implementation</li>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> Security Solutions</li>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> Performance Optimization</li>
            </ul>
          </div>

          <div style={{
            background: '#1e293b',
            borderRadius: '20px',
            padding: '30px 25px',
            flex: '1 1 300px',
            maxWidth: '350px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-10px)'
            }
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '22px',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #f59e0b, #f97316)'
            }}>
              <FontAwesomeIcon icon={faBolt} />
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '12px',
              color: '#ffffff'
            }}>AI & Machine Learning</h3>
            <p style={{
              fontSize: '15px',
              color: '#cbd5e1',
              marginBottom: '20px',
              lineHeight: '1.5'
            }}>
              Intelligent solutions that leverage artificial intelligence and machine learning to automate
              processes and generate insights.
            </p>
            <span style={{
              display: 'inline-block',
              padding: '6px 14px',
              fontSize: '13px',
              backgroundColor: '#1e40af',
              color: '#c7d2fe',
              borderRadius: '999px',
              marginBottom: '20px'
            }}>75+ AI solutions deployed</span>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> Predictive Analytics</li>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> Natural Language Processing</li>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> Computer Vision</li>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> Automation Solutions</li>
            </ul>
          </div>

          <div style={{
            background: '#1e293b',
            borderRadius: '20px',
            padding: '30px 25px',
            flex: '1 1 300px',
            maxWidth: '350px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-10px)'
            }
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '22px',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #ef4444, #ec4899)'
            }}>
              <FontAwesomeIcon icon={faDesktop} />
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '12px',
              color: '#ffffff'
            }}>E-commerce Solutions</h3>
            <p style={{
              fontSize: '15px',
              color: '#cbd5e1',
              marginBottom: '20px',
              lineHeight: '1.5'
            }}>
              Complete e-commerce platforms that drive sales, enhance customer experience, and scale with your
              business growth.
            </p>
            <span style={{
              display: 'inline-block',
              padding: '6px 14px',
              fontSize: '13px',
              backgroundColor: '#1e40af',
              color: '#c7d2fe',
              borderRadius: '999px',
              marginBottom: '20px'
            }}>100+ stores launched</span>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> Online Store Development</li>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> Payment Integration</li>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> Inventory Management</li>
              <li style={{
                fontSize: '15px',
                marginBottom: '10px',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#22c55e', fontSize: '16px' }} /> Analytics & Reporting</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Team Section */}
      <section style={{
        textAlign: 'center',
        padding: '80px 20px',
        background: 'linear-gradient(to bottom, #ffffff, #f9fafb)',
        color: '#1f2937',
        fontFamily: "'Inter', sans-serif"
      }}>
        <div style={{
          display: 'inline-block',
          background: '#e0f2fe',
          color: '#0ea5e9',
          fontSize: '14px',
          fontWeight: '600',
          padding: '10px 20px',
          borderRadius: '999px',
          marginBottom: '30px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)'
        }}>
          <FontAwesomeIcon icon={faUsers} /> Meet the RioGram Team
        </div>
        <h2 style={{
          fontSize: '38px',
          fontWeight: '800',
          color: '#0f172a',
          marginBottom: '25px'
        }}>
          The Visionaries Behind<br />
          <span style={{
            background: 'linear-gradient(to right, #0ea5e9, #6366f1)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>RioGram's Success</span>
        </h2>

        <p style={{
          fontSize: '18px',
          color: '#475569',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.7'
        }}>
          Meet the passionate individuals who bring creativity, expertise, and innovation to every RioGram project.
          Our diverse team combines years of experience with fresh perspectives to deliver exceptional results.
        </p>
      </section>

      <section style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '30px',
        padding: '60px 20px',
        backgroundColor: '#f9fafb',
        fontFamily: "'Segoe UI', sans-serif"
      }}>
        {/* Team Member Cards */}
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div key={index} style={{
            background: '#ffffff',
            borderRadius: '20px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
            width: '340px',
            overflow: 'hidden',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-5px)'
            }
          }}>
            <div style={{
              position: 'relative',
              display: 'block',
              width: '100%',
              overflow: 'hidden'
            }}>
              <img 
                src="../Screenshot 2025-07-03 182345.png" 
                alt="Team Member" 
                style={{
                  width: '100%',
                  height: '350px',
                  objectFit: 'cover',
                  display: 'block',
                  opacity: '0.9',
                  transition: 'opacity 0.3s ease, transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
                  ':hover': {
                    opacity: '0.7',
                    transform: 'scale(0.95)'
                  }
                }} 
              />
              <FontAwesomeIcon 
                icon={faCamera} 
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '15px',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '8px',
                  borderRadius: '50%',
                  fontSize: '16px',
                  zIndex: 2
                }} 
              />
            </div>
            <div style={{ padding: '20px' }}>
              <h3 style={{
                fontSize: '20px',
                margin: '10px 0 5px',
                fontWeight: '700',
                color: index % 2 === 0 ? '#0ea5e9' : 'inherit'
              }}>
                {index === 0 ? 'Sarah Johnson' : 
                 index === 5 ? 'Emily Rodriguez' : 'Michael Chen'}
              </h3>
              <p style={{
                color: '#0284c7',
                fontWeight: '600',
                fontSize: '15px',
                marginBottom: '15px'
              }}>
                {index === 0 ? 'Chief Executive Officer' : 
                 index === 5 ? 'Head of Creative Design' : 'Chief Technology Officer'}
              </p>
              <p style={{
                fontSize: '15px',
                color: '#475569',
                lineHeight: '1.6'
              }}>
                {index === 0 ? 'With over 15 years of experience in technology leadership, Sarah drives RioGram\'s vision for innovation and sustainable growth in the digital landscape.' : 
                 index === 5 ? 'Emily transforms complex ideas into stunning visual experiences, leading RioGram\'s award-winning design team with creativity and strategic insight.' : 'Michael spearheads RioGram\'s technical strategy, ensuring we remain at the cutting edge of emerging technologies and architectural excellence.'}
              </p>
              <div style={{
                fontWeight: '600',
                marginTop: '20px',
                marginBottom: '8px',
                color: '#1e293b'
              }}>Expertise:</div>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {index === 0 ? (
                  <>
                    <span style={{
                      background: '#e0f2fe',
                      color: '#0369a1',
                      padding: '6px 12px',
                      borderRadius: '999px',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}>Strategic Planning</span>
                    <span style={{
                      background: '#e0f2fe',
                      color: '#0369a1',
                      padding: '6px 12px',
                      borderRadius: '999px',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}>Digital Transformation</span>
                    <span style={{
                      background: '#e0f2fe',
                      color: '#0369a1',
                      padding: '6px 12px',
                      borderRadius: '999px',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}>Team Leadership</span>
                  </>
                ) : index === 5 ? (
                  <>
                    <span style={{
                      background: '#e0f2fe',
                      color: '#0369a1',
                      padding: '6px 12px',
                      borderRadius: '999px',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}>UX/UI Design</span>
                    <span style={{
                      background: '#e0f2fe',
                      color: '#0369a1',
                      padding: '6px 12px',
                      borderRadius: '999px',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}>Brand Strategy</span>
                    <span style={{
                      background: '#e0f2fe',
                      color: '#0369a1',
                      padding: '6px 12px',
                      borderRadius: '999px',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}>Design Systems</span>
                  </>
                ) : (
                  <>
                    <span style={{
                      background: '#e0f2fe',
                      color: '#0369a1',
                      padding: '6px 12px',
                      borderRadius: '999px',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}>Cloud Architecture</span>
                    <span style={{
                      background: '#e0f2fe',
                      color: '#0369a1',
                      padding: '6px 12px',
                      borderRadius: '999px',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}>AI/ML Solutions</span>
                    <span style={{
                      background: '#e0f2fe',
                      color: '#0369a1',
                      padding: '6px 12px',
                      borderRadius: '999px',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}>DevOps Excellence</span>
                  </>
                )}
              </div>
              <div style={{
                marginTop: '20px',
                fontSize: '13px',
                color: '#64748b',
                borderTop: '1px solid #e2e8f0',
                paddingTop: '15px'
              }}>
                {index === 0 ? 'Led 200+ successful digital transformations' : 
                 index === 5 ? 'Winner of 15+ international design awards' : 'Architected systems serving 10M+ users'}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RioGramServices;