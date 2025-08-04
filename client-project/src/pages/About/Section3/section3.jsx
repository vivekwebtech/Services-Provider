import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarDays,
  faRocket,
  faAward,
  faGlobe,
  faLightbulb,
  faChartLine,
  faTrophy
} from '@fortawesome/free-solid-svg-icons';
import './section3.css'; // You'll need to create this CSS file

const Timeline = () => {
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    timelineItems.forEach(item => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="timeline-section">
      <div className="timeline-header">
        <div className="timeline-badge">
          <FontAwesomeIcon icon={faCalendarDays} /> RioGram's Evolution
        </div>
        <h2 style={{color: '#1c91a8'}}>Milestones That Define <br /><span>RioGram's <span className="highlight">Success Story</span></span></h2>
        <p>Every transformative journey is marked by pivotal moments. Here are the key milestones that shaped RioGram's evolution into a global digital innovation leader.</p>
      </div>

      <div className="timeline">
        <div className="timeline-item left">
          <div className="timeline-card">
            <div className="icon"><FontAwesomeIcon icon={faRocket} /></div>
            <div className="year">2012</div>
            <div className="subtitle">The spark that started it all</div>
            <h4>RioGram Foundation</h4>
            <p>Founded with a vision to democratize digital innovation and make cutting-edge technology accessible to businesses of all sizes.</p>
          </div>
          <div className="timeline-point"></div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-card">
            <div className="icon"><FontAwesomeIcon icon={faAward} /></div>
            <div className="year">2014</div>
            <div className="subtitle">Setting new industry standards</div>
            <h4>First Major Breakthrough</h4>
            <p>Secured our first Fortune 500 client and delivered a groundbreaking e-commerce platform that revolutionized their digital presence.</p>
          </div>
          <div className="timeline-point"></div>
        </div>

        <div className="timeline-item left">
          <div className="timeline-card">
            <div className="icon"><FontAwesomeIcon icon={faGlobe} /></div>
            <div className="year">2016</div>
            <div className="subtitle">Thinking Globally, acting Locally</div>
            <h4>Global Expansion</h4>
            <p>Opened offices across three continents, establishing RioGram as a truly global digital innovation partner with local expertise.</p>
          </div>
          <div className="timeline-point"></div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-card">
            <div className="icon"><FontAwesomeIcon icon={faLightbulb} /></div>
            <div className="year">2018</div>
            <div className="subtitle">Pioneering tomorrow's solutions</div>
            <h4>Innovation Lab Launch</h4>
            <p>Established our dedicated R&D division, focusing on AI, blockchain, and emerging technologies to stay ahead of the curve.</p>
          </div>
          <div className="timeline-point"></div>
        </div>

        <div className="timeline-item left">
          <div className="timeline-card">
            <div className="icon"><FontAwesomeIcon icon={faChartLine} /></div>
            <div className="year">2020</div>
            <div className="subtitle">Leading through change</div>
            <h4>Digital Transformation Leader</h4>
            <p>Became the go-to partner for digital transformation, helping 200+ companies navigate the new digital landscape successfully.</p>
          </div>
          <div className="timeline-point"></div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-card">
            <div className="icon"><FontAwesomeIcon icon={faTrophy} /></div>
            <div className="year">2022</div>
            <div className="subtitle">Excellence recognized worldwide</div>
            <h4>Industry Recognition</h4>
            <p>Received multiple prestigious awards for innovation, client satisfaction, and workplace excellence from leading industry bodies.</p>
          </div>
          <div className="timeline-point"></div>
        </div>

        <div className="timeline-item left">
          <div className="timeline-card">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#1c91a8" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-sparkles w-6 h-6 animate-pulse"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
              <path d="M5 3v4"></path>
              <path d="M19 17v4"></path>
              <path d="M3 5h4"></path>
              <path d="M17 19h4"></path>
            </svg>
            <div className="year">2024</div>
            <div className="subtitle">Building tomorrow, today</div>
            <h4>Future Ready Solutions</h4>
            <p>Continuing to shape the digital landscape with AI-powered solutions, sustainable technology, and next-generation user experiences.</p>
          </div>
          <div className="timeline-point"></div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;