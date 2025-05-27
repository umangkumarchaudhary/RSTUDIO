import React, { useState } from 'react';
import {
  User, BarChart2, HeartPulse, ClipboardList, Briefcase, PlusCircle, X
} from 'lucide-react';
import './Services.css';

const services = [
  
  {
    icon: <BarChart2 className="service-icon" />,
    title: "Weight Management",
    description: "Sustainable strategies for healthy weight transformation with ongoing motivation and progress tracking.",
    cta: "Start Journey",
    link: "#weight",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    icon: <HeartPulse className="service-icon" />,
    title: "Diabetes Nutrition",
    description: "Expert advice and specialized meal planning for managing diabetes and improving overall wellbeing.",
    cta: "Get Support",
    link: "#diabetes",
    gradient: "from-red-400 to-pink-500"
  },
  {
    icon: <ClipboardList className="service-icon" />,
    title: "Personalized Diet Plans",
    description: "Custom meal plans designed for your lifestyle, preferences, and specific health requirements.",
    cta: "Create Plan",
    link: "#plans",
    gradient: "from-orange-400 to-amber-500"
  },
  {
    icon: <Briefcase className="service-icon" />,
    title: "Corporate Wellness",
    description: "Workplace nutrition workshops and comprehensive programs to boost employee health and productivity.",
    cta: "Learn More",
    link: "#corporate",
    gradient: "from-purple-400 to-violet-500"
  },
  {
    icon: <User className="service-icon" />,
    title: "1-on-1 Nutrition Coaching",
    description: "Personalized guidance and support tailored to your unique health goals with continuous monitoring.",
    cta: "Book Consultation",
    link: "#contact",
    gradient: "from-emerald-400 to-teal-500"
  },
];

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const previewServices = services.slice(0, 3);

  return (
    <section className="services-section" id="services">
      <div className="services-background">
        <div className="floating-elements">
          <div className="floating-element floating-element-1"></div>
          <div className="floating-element floating-element-2"></div>
          <div className="floating-element floating-element-3"></div>
        </div>
      </div>
      
      <div className="services-container">
        <div className="services-header">
          <div className="section-badge">
            <span className="badge-icon">🥗</span>
            <span>Revitalize Studio Services</span>
          </div>
          <h2 className="services-title">
            Transform Your Health
            <span className="title-highlight">Journey</span>
          </h2>
        </div>

        <div className="services-grid">
          {previewServices.map((service, idx) => (
            <div 
              className={`service-card ${hoveredCard === idx ? 'hovered' : ''}`}
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-glow"></div>
              <div className={`service-icon-wrapper ${service.gradient}`}>
                {service.icon}
                <div className="icon-pulse"></div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href={service.link} className="service-cta">
                  <span>{service.cta}</span>
                  <div className="cta-arrow">→</div>
                </a>
              </div>
              <div className="card-pattern"></div>
            </div>
          ))}
          
          <button
            className={`service-card explore-card ${hoveredCard === 'explore' ? 'hovered' : ''}`}
            onClick={() => setModalOpen(true)}
            onMouseEnter={() => setHoveredCard('explore')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-glow explore-glow"></div>
            <div className="service-icon-wrapper explore-icon">
              <PlusCircle className="service-icon" />
              <div className="icon-pulse explore-pulse"></div>
            </div>
            <div className="service-content">
              <h3 className="service-title">Explore More</h3>
              <p className="service-description">
                Discover additional specialized services tailored to your unique health needs.
              </p>
              <span className="service-cta">
                <span>View All Services</span>
                <div className="cta-arrow">→</div>
              </span>
            </div>
            <div className="card-pattern explore-pattern"></div>
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-backdrop" onClick={() => setModalOpen(false)}></div>
          <div className="services-modal">
            <div className="modal-header">
              <h2 className="modal-title">All Nutrition Services</h2>
              <button 
                className="modal-close" 
                onClick={() => setModalOpen(false)}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="modal-content">
              <div className="services-grid modal-grid">
                {services.map((service, idx) => (
                  <div className="service-card modal-card" key={idx}>
                    <div className="card-glow"></div>
                    <div className={`service-icon-wrapper ${service.gradient}`}>
                      {service.icon}
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                      <a href={service.link} className="service-cta">
                        <span>{service.cta}</span>
                        <div className="cta-arrow">→</div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}