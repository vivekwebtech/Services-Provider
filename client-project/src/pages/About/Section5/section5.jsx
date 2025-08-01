// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faBullseye,
//   faLightbulb,
//   faHeart,
//   faShieldAlt,
//   faUsers,
//   faLeaf
// } from '@fortawesome/free-solid-svg-icons';
// import './section5.css'; // You'll need to create this CSS file

// const CoreValues = () => {
//   return (
//     <>
//       <section className="values-section">
//         <div className="badge">
//           <FontAwesomeIcon icon={faBullseye} /> RioGram's Core Values
//         </div>
//         <h2>
//           Values That Drive<br /><span>Everything at RioGram</span>
//         </h2>
//         <p>
//           RioGram's core values are more than principles—they're the foundation that guides every decision,
//           every interaction, and every innovative solution we create for our clients worldwide.
//         </p>
//       </section>
      
//       <section className="card-grid-section">
//         <div className="card">
//           <div className="icon" style={{ background: 'linear-gradient(to bottom right, #ffb300, #ff6f00)' }}>
//             <FontAwesomeIcon icon={faLightbulb} />
//           </div>
//           <h3>Innovation Excellence</h3>
//           <p>At RioGram, we constantly push technological boundaries, embracing emerging technologies and creative solutions to deliver exceptional results that shape the digital future.</p>
//           <span className="badge">50+ Patents Filed</span>
//         </div>

//         <div className="card">
//           <div className="icon" style={{ background: 'linear-gradient(to bottom right, #ff5e8e, #ff3d75)' }}>
//             <FontAwesomeIcon icon={faHeart} />
//           </div>
//           <h3>Passionate Dedication</h3>
//           <p>Our RioGram team is driven by genuine passion for creating meaningful digital experiences that solve real-world problems and make a lasting positive impact.</p>
//           <span className="badge">98% Team Satisfaction</span>
//         </div>

//         <div className="card">
//           <div className="icon" style={{ background: 'linear-gradient(to bottom right, #5a7dff, #354de8)' }}>
//             <FontAwesomeIcon icon={faShieldAlt} />
//           </div>
//           <h3>Unwavering Integrity</h3>
//           <p>RioGram builds lasting relationships through transparency, ethical practices, and consistent delivery on our promises to clients, partners, and stakeholders.</p>
//           <span className="badge">Zero Security Breaches</span>
//         </div>

//         <div className="card">
//           <div className="icon" style={{ background: 'linear-gradient(to bottom right, #00e676, #00c853)' }}>
//             <FontAwesomeIcon icon={faUsers} />
//           </div>
//           <h3>Collaborative Spirit</h3>
//           <p>We believe the best results emerge from true collaboration, working closely with our clients as partners to achieve shared success and mutual growth.</p>
//           <span className="badge">95% Client Retention</span>
//         </div>

//         <div className="card">
//           <div className="icon" style={{ background: 'linear-gradient(to bottom right, #b388ff, #7c4dff)' }}>
//             <FontAwesomeIcon icon={faBullseye} />
//           </div>
//           <h3>Excellence Standard</h3>
//           <p>RioGram strives for perfection in every detail, ensuring our solutions consistently exceed expectations and set new industry benchmarks for quality.</p>
//           <span className="badge">99.9% Uptime Record</span>
//         </div>

//         <div className="card">
//           <div className="icon" style={{ background: 'linear-gradient(to bottom right, #00e5ff, #00bcd4)' }}>
//             <FontAwesomeIcon icon={faLeaf} />
//           </div>
//           <h3>Visionary Leadership</h3>
//           <p>We anticipate tomorrow's opportunities today, preparing innovative solutions that help our clients stay ahead of market trends and technological shifts.</p>
//           <span className="badge">10+ Years Ahead</span>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CoreValues;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBullseye,
  faLightbulb,
  faHeart,
  faShieldAlt,
  faUsers,
  faLeaf
} from '@fortawesome/free-solid-svg-icons';
// const [isHovered, setIsHovered] = React.useState(false);

// // Then in your div:
// <div 
//   style={{
//     ...baseStyles,
//     ...(isHovered ? hoverStyles : {})
//   }}
//   onMouseEnter={() => setIsHovered(true)}
//   onMouseLeave={() => setIsHovered(false)}
// >
//   ...
// </div>
const CoreValues = () => {
  return (
    <>
      <section style={{
        textAlign: 'center',
        padding: '80px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: "'Inter', sans-serif"
      }}>
        <div style={{
          display: 'inline-block',
          background: '#f3f4f6',
          color: '#7B61FF',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '600',
          marginBottom: '20px'
        }}>
          <FontAwesomeIcon icon={faBullseye} /> RioGram's Core Values
        </div>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#111827',
          marginBottom: '20px',
          lineHeight: '1.3'
        }}>
          Values That Drive<br /><span style={{ color: '#7B61FF' }}>Everything at RioGram</span>
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#4B5563',
          lineHeight: '1.6'
        }}>
          RioGram's core values are more than principles—they're the foundation that guides every decision,
          every interaction, and every innovative solution we create for our clients worldwide.
        </p>
      </section>
      
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px 80px'
      }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '40px 30px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          ':hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)'
          }
        }}>
          <div style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '28px',
            marginBottom: '25px',
            background: 'linear-gradient(to bottom right, #ffb300, #ff6f00)',
            transition: 'transform 0.3s ease'
          }}>
            <FontAwesomeIcon icon={faLightbulb} />
          </div>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '15px'
          }}>Innovation Excellence</h3>
          <p style={{
            fontSize: '1rem',
            color: '#6B7280',
            marginBottom: '20px',
            lineHeight: '1.6'
          }}>At RioGram, we constantly push technological boundaries, embracing emerging technologies and creative solutions to deliver exceptional results that shape the digital future.</p>
          <span style={{
            display: 'inline-block',
            background: '#f3f4f6',
            color: '#7B61FF',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600'
          }}>50+ Patents Filed</span>
        </div>

        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '40px 30px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          ':hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)'
          }
        }}>
          <div style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '28px',
            marginBottom: '25px',
            background: 'linear-gradient(to bottom right, #ff5e8e, #ff3d75)',
            transition: 'transform 0.3s ease'
          }}>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '15px'
          }}>Passionate Dedication</h3>
          <p style={{
            fontSize: '1rem',
            color: '#6B7280',
            marginBottom: '20px',
            lineHeight: '1.6'
          }}>Our RioGram team is driven by genuine passion for creating meaningful digital experiences that solve real-world problems and make a lasting positive impact.</p>
          <span style={{
            display: 'inline-block',
            background: '#f3f4f6',
            color: '#7B61FF',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600'
          }}>98% Team Satisfaction</span>
        </div>

        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '40px 30px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          ':hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)'
          }
        }}>
          <div style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '28px',
            marginBottom: '25px',
            background: 'linear-gradient(to bottom right, #5a7dff, #354de8)',
            transition: 'transform 0.3s ease'
          }}>
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '15px'
          }}>Unwavering Integrity</h3>
          <p style={{
            fontSize: '1rem',
            color: '#6B7280',
            marginBottom: '20px',
            lineHeight: '1.6'
          }}>RioGram builds lasting relationships through transparency, ethical practices, and consistent delivery on our promises to clients, partners, and stakeholders.</p>
          <span style={{
            display: 'inline-block',
            background: '#f3f4f6',
            color: '#7B61FF',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600'
          }}>Zero Security Breaches</span>
        </div>

        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '40px 30px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          ':hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)'
          }
        }}>
          <div style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '28px',
            marginBottom: '25px',
            background: 'linear-gradient(to bottom right, #00e676, #00c853)',
            transition: 'transform 0.3s ease'
          }}>
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '15px'
          }}>Collaborative Spirit</h3>
          <p style={{
            fontSize: '1rem',
            color: '#6B7280',
            marginBottom: '20px',
            lineHeight: '1.6'
          }}>We believe the best results emerge from true collaboration, working closely with our clients as partners to achieve shared success and mutual growth.</p>
          <span style={{
            display: 'inline-block',
            background: '#f3f4f6',
            color: '#7B61FF',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600'
          }}>95% Client Retention</span>
        </div>

        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '40px 30px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          ':hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)'
          }
        }}>
          <div style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '28px',
            marginBottom: '25px',
            background: 'linear-gradient(to bottom right, #b388ff, #7c4dff)',
            transition: 'transform 0.3s ease'
          }}>
            <FontAwesomeIcon icon={faBullseye} />
          </div>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '15px'
          }}>Excellence Standard</h3>
          <p style={{
            fontSize: '1rem',
            color: '#6B7280',
            marginBottom: '20px',
            lineHeight: '1.6'
          }}>RioGram strives for perfection in every detail, ensuring our solutions consistently exceed expectations and set new industry benchmarks for quality.</p>
          <span style={{
            display: 'inline-block',
            background: '#f3f4f6',
            color: '#7B61FF',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600'
          }}>99.9% Uptime Record</span>
        </div>

        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '40px 30px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          ':hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)'
          }
        }}>
          <div style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '28px',
            marginBottom: '25px',
            background: 'linear-gradient(to bottom right, #00e5ff, #00bcd4)',
            transition: 'transform 0.3s ease'
          }}>
            <FontAwesomeIcon icon={faLeaf} />
          </div>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '15px'
          }}>Visionary Leadership</h3>
          <p style={{
            fontSize: '1rem',
            color: '#6B7280',
            marginBottom: '20px',
            lineHeight: '1.6'
          }}>We anticipate tomorrow's opportunities today, preparing innovative solutions that help our clients stay ahead of market trends and technological shifts.</p>
          <span style={{
            display: 'inline-block',
            background: '#f3f4f6',
            color: '#7B61FF',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600'
          }}>10+ Years Ahead</span>
        </div>
      </section>
    </>
  );
};

export default CoreValues;