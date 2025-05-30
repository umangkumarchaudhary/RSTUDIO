import React from 'react';
import { BarChart2, CheckCircle, MessageCircle, CalendarDays, Star } from 'lucide-react';
import './WeightManagement.css';

export default function WeightManagement() {
  return (
    <section className="wm-section">
      <div className="wm-hero">
        <div className="wm-hero-icon">
          <BarChart2 size={42} />
        </div>
        <h1 className="wm-title">
          Weight Management Program
        </h1>
        <p className="wm-subtitle">
          Achieve your ideal weight with science-backed nutrition, expert support, and a plan tailored just for you.
        </p>
      </div>

      <div className="wm-steps">
        <h2 className="wm-section-title">How It Works</h2>
        <ol className="wm-step-list">
          <li>
            <CheckCircle className="wm-step-icon" />
            <div>
              <strong>Personal Consultation:</strong> We discuss your goals, lifestyle, and challenges.
            </div>
          </li>
          <li>
            <CheckCircle className="wm-step-icon" />
            <div>
              <strong>Custom Nutrition Plan:</strong> Get a meal plan tailored to your needs, preferences, and schedule.
            </div>
          </li>
          <li>
            <CheckCircle className="wm-step-icon" />
            <div>
              <strong>Ongoing Support:</strong> Weekly check-ins, adjustments, and motivation to keep you on track.
            </div>
          </li>
          <li>
            <CheckCircle className="wm-step-icon" />
            <div>
              <strong>Real Results:</strong> Sustainable weight loss, more energy, and a healthier you—no crash diets!
            </div>
          </li>
        </ol>
      </div>

      <div className="wm-benefits">
        <h2 className="wm-section-title">Why Choose This Program?</h2>
        <ul>
          <li><Star className="wm-benefit-icon" /> Sustainable, healthy weight loss</li>
          <li><Star className="wm-benefit-icon" /> No fads or starvation diets</li>
          <li><Star className="wm-benefit-icon" /> Personalized to your life</li>
          <li><Star className="wm-benefit-icon" /> Motivation and accountability</li>
          <li><Star className="wm-benefit-icon" /> Real food, real results</li>
        </ul>
      </div>

      <div className="wm-testimonial">
        <MessageCircle className="wm-testimonial-icon" />
        <blockquote>
          “I lost 10kg in 4 months and feel more energetic than ever. The support and guidance made all the difference!”<br />
          <span>- Priya S.</span>
        </blockquote>
      </div>

      <div className="wm-cta-section">
        <h2 className="wm-cta-title">Ready to Start Your Journey?</h2>
        <p className="wm-cta-desc">
          Book a free consultation or send your query below. Let's achieve your goals together!
        </p>
        <form className="wm-form" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Your goals or questions..." rows={3} />
          <button type="submit">
            <CalendarDays className="wm-form-btn-icon" />
            Book Free Consultation
          </button>
        </form>
      </div>
    </section>
  );
}
