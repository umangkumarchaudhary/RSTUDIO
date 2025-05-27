import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Leaf, Heart, Zap, Apple, Star} from 'lucide-react';
import './Header.css';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '1234567890';
    const message = 'Hello! I would like to book a nutrition consultation and learn about your diet programs.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1234567890';
  };

  const navItems = [
    { name: 'Home', href: '#home', icon: <Heart className="nav-icon" /> },
    { name: 'About', href: '#about', icon: <Leaf className="nav-icon" /> },
    { name: 'Diet Plans', href: '#plans', icon: <Apple className="nav-icon" /> },
    { name: 'Services', href: '#services', icon: <Zap className="nav-icon" /> },
    { name: 'Success Stories', href: '#success', icon: <Star className="nav-icon" /> }
  ];

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      {/* Animated background elements */}
      <div className="header-bg-elements">
        <div className="floating-element floating-element-1"></div>
        <div className="floating-element floating-element-2"></div>
        <div className="floating-element floating-element-3"></div>
      </div>

      <div className="header-container">
        <div className="header-content">
          
          {/* Logo Section - Enhanced */}
          <div className="logo-section">
            <div className="logo-wrapper">
              <div className="logo-icon">
                <img src={logo} alt="Revitalize Studio logo" className="logo-image" />
                <div className="logo-pulse"></div>
                <div className="logo-glow"></div>
              </div>
              
              {/* Floating health icons around logo */}
              <div className="health-icons">
                <Leaf className="health-icon health-icon-1" />
                <Heart className="health-icon health-icon-2" />
                <Apple className="health-icon health-icon-3" />
              </div>
            </div>

            <div className="brand-content">
              <div className="brand-name">
                <span className="brand-text">Revitalize Studio</span>
                <div className="brand-shimmer"></div>
              </div>
              <div className="expertise-badges">
                <span className="badge">Certified Nutritionist</span>
              </div>
            </div>
          </div>

          {/* Center Navigation - Desktop with icons */}
          <nav className="desktop-nav">
            <div className="nav-pills">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-item"
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  {item.icon}
                  <span className="nav-text">{item.name}</span>
                  <div className="nav-item-glow"></div>
                </a>
              ))}
            </div>
          </nav>

          {/* Right Section - Enhanced CTA */}
          <div className="contact-section">
            {/* Enhanced Book Consultation Button */}

            {/* Enhanced Contact Buttons */}
            <div className="contact-buttons">
              <button
                onClick={handleWhatsAppClick}
                className="contact-btn whatsapp-btn"
                aria-label="WhatsApp Consultation"
              >
                <MessageCircle className="contact-icon" />
                <div className="contact-ripple"></div>
              </button>

              <button
                onClick={handlePhoneClick}
                className="contact-btn phone-btn"
                aria-label="Call for Consultation"
              >
                <Phone className="contact-icon" />
                <div className="contact-ripple"></div>
              </button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              <div className="menu-icon-wrapper">
                {isMenuOpen ? (
                  <X className="menu-icon" />
                ) : (
                  <Menu className="menu-icon" />
                )}
                <div className="menu-btn-bg"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
          <div className="mobile-nav-content">
            <div className="mobile-nav-header">
              <Leaf className="mobile-nav-icon" />
              <span>Nutrition Menu</span>
            </div>
            
            <div className="mobile-nav-items">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="mobile-nav-item"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ '--item-delay': `${index * 0.1}s` }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <div className="mobile-item-glow"></div>
                </a>
              ))}
            </div>
            
            <button className="mobile-cta-button">
              <Zap className="mobile-cta-icon" />
              <span>Book Free Consultation</span>
              <div className="mobile-cta-shine"></div>
            </button>

            {/* Mobile contact info */}
            <div className="mobile-contact-info">
              <div className="contact-item">
                <Phone className="contact-info-icon" />
                <span>+1 (234) 567-8900</span>
              </div>
              <div className="contact-item">
                <MessageCircle className="contact-info-icon" />
                <span>WhatsApp Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;