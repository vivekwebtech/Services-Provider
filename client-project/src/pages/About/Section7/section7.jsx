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
  // Team member data with Unsplash image URLs
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'Chief Executive Officer',
      description: 'With over 15 years of experience in technology leadership, Sarah drives RioGram\'s vision for innovation and sustainable growth in the digital landscape.',
      expertise: ['Strategic Planning', 'Digital Transformation', 'Team Leadership'],
      stats: 'Led 200+ successful digital transformations',
      imgSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Technology Officer',
      description: 'Michael spearheads RioGram\'s technical strategy, ensuring we remain at the cutting edge of emerging technologies and architectural excellence.',
      expertise: ['Cloud Architecture', 'AI/ML Solutions', 'DevOps Excellence'],
      stats: 'Architected systems serving 10M+ users',
      imgSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      name: 'David Wilson',
      position: 'Lead Software Architect',
      description: 'David designs robust, scalable systems that form the foundation of RioGram\'s most complex and high-performance applications.',
      expertise: ['System Design', 'Scalability', 'Performance Optimization'],
      stats: 'Designed 50+ enterprise systems',
      imgSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Jessica Martinez',
      position: 'UX Research Director',
      description: 'Jessica leads user research initiatives that inform product design decisions and ensure exceptional user experiences across all RioGram projects.',
      expertise: ['User Research', 'Usability Testing', 'Data Analysis'],
      stats: 'Conducted 1000+ user interviews',
      imgSrc: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
    },
    {
      name: 'Robert Kim',
      position: 'DevOps Engineering Lead',
      description: 'Robert builds and maintains the infrastructure that powers RioGram\'s applications, ensuring reliability, security, and scalability.',
      expertise: ['Infrastructure', 'CI/CD', 'Cloud Security'],
      stats: 'Managed infrastructure for 500+ deployments',
      imgSrc: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Creative Design',
      description: 'Emily transforms complex ideas into stunning visual experiences, leading RioGram\'s award-winning design team with creativity and strategic insight.',
      expertise: ['UX/UI Design', 'Brand Strategy', 'Design Systems'],
      stats: 'Winner of 15+ international design awards',
      imgSrc: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
    }
  ];

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
                color: '##d1d5db',
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
        {/* Team Member Cards with individual images from Unsplash */}
        {teamMembers.map((member, index) => (
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
                src={member.imgSrc}
                alt={member.name}
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
                onError={(e) => {
                  // Fallback image if the Unsplash image fails to load
                  e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
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
                color: '#12bc3fff',
                // color: index % 2 === 0 ? '#e90e0eff' : 'inherit'
              }}>
                {member.name}
              </h3>
              <p style={{
                color: '#4d02c7ff',
                fontWeight: '600',
                fontSize: '15px',
                marginBottom: '15px'
              }}>
                {member.position}
              </p>
              <p style={{
                fontSize: '15px',
                color: '#475569',
                lineHeight: '1.6'
              }}>
                {member.description}
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
                {member.expertise.map((skill, i) => (
                  <span key={i} style={{
                    background: '#e0f2fe',
                    color: '#0369a1',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    fontSize: '13px',
                    fontWeight: '500'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
              <div style={{
                marginTop: '20px',
                fontSize: '13px',
                color: '#64748b',
                borderTop: '1px solid #e2e8f0',
                paddingTop: '15px'
              }}>
                {member.stats}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RioGramServices;