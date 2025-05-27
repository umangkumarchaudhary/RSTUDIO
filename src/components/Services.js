import React, { useState } from 'react';
import {
  User, BarChart2, HeartPulse, ClipboardList, Briefcase, PlusCircle
} from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <User className="service-icon" />,
    title: "1-on-1 Nutrition Coaching",
    description: "Personalized guidance and support tailored to your unique health goals.",
    cta: "Book Now",
    link: "#contact"
  },
  {
    icon: <BarChart2 className="service-icon" />,
    title: "Weight Management",
    description: "Sustainable strategies for healthy weight loss or gain, with ongoing motivation.",
    cta: "Learn More",
    link: "#weight"
  },
  {
    icon: <HeartPulse className="service-icon" />,
    title: "Diabetes Nutrition",
    description: "Expert advice and meal planning for managing diabetes and improving wellbeing.",
    cta: "Learn More",
    link: "#diabetes"
  },
  {
    icon: <ClipboardList className="service-icon" />,
    title: "Personalized Diet Plans",
    description: "Custom meal plans designed for your lifestyle, preferences, and health needs.",
    cta: "Get Started",
    link: "#plans"
  },
  {
    icon: <Briefcase className="service-icon" />,
    title: "Corporate Wellness",
    description: "Workplace nutrition workshops and programs to boost employee health and productivity.",
    cta: "Enquire",
    link: "#corporate"
  }
  // Add more services as needed
];

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);

  // Show first 4, then Explore More as the 5th card
  const previewServices = services.slice(0, 4);

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2>How I Can Help</h2>
        <p className="services-subtitle">Choose the right support for your health journey</p>
      </div>
      <div className="services-cards services-cards-preview">
        {previewServices.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-icon-wrapper">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <a href={service.link} className="service-cta">{service.cta}</a>
          </div>
        ))}
        {/* Explore More card as the 5th in the row */}
        <button
          className="service-card explore-more-card"
          onClick={() => setModalOpen(true)}
        >
          <div className="service-icon-wrapper explore-more-icon">
            <PlusCircle className="service-icon" />
          </div>
          <h3 className="service-title">Explore More</h3>
          <p className="service-description">See all my specialized services for your unique needs.</p>
          <span className="service-cta">Show All</span>
        </button>
      </div>

      {/* Modal for all services */}
      {modalOpen && (
        <div className="services-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="services-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setModalOpen(false)}>&times;</button>
            <h2>All Services</h2>
            <div className="services-cards services-cards-modal">
              {services.map((service, idx) => (
                <div className="service-card" key={idx}>
                  <div className="service-icon-wrapper">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <a href={service.link} className="service-cta">{service.cta}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
