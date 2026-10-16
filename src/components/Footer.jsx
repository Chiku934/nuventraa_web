import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  ArrowRight,
  FileText,
  Settings,
  Landmark,
  Leaf,
  ShieldCheck,
  Users,
  Check
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer className="exact-footer">
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1380px',
          margin: '0 auto',
          padding: '0 clamp(1.25rem, 3vw, 3rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: 'inherit',
          height: '100%'
        }}
      >

        {/* =========================================================================
            TOP ZONE: 5-COLUMN EDITORIAL LUXURY GRID (EXACT MOCKUP MATCH)
            ========================================================================= */}
        <div className="footer-exact-grid">

          {/* COLUMN 1: BRAND IDENTITY & SOCIALS */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '0.65rem' }}>
              <img
                src="/assets/nuventraa-logo.png"
                alt="Nuventraa Logo"
                style={{
                  height: '62px',
                  maxWidth: '190px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </Link>

            <p
              style={{
                fontSize: '0.8rem',
                color: '#334155',
                lineHeight: 1.55,
                marginBottom: '1rem',
                maxWidth: '280px'
              }}
            >
              Bridging industrial manufacturing and statutory excellence with audit-ready licensing (SPCB, Boilers) and government subsidy realization across Odisha and India.
            </p>

            {/* 5 Circular Social Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.59 1.59 0 1 0 0 3.18 1.59 1.59 0 0 0 0-3.18z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="X (Twitter)"
                aria-label="X"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="YouTube"
                aria-label="YouTube"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919090123562"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 0C5.396 0 .029 5.367.029 12.002c0 2.12.553 4.184 1.603 5.998L0 24l6.167-1.616a11.968 11.968 0 0 0 5.864 1.517h.005c6.634 0 12.001-5.367 12.001-12.002A11.94 11.94 0 0 0 12.031 0zm-.005 21.884h-.004a9.92 9.92 0 0 1-5.059-1.385l-.362-.215-3.76.986.999-3.666-.236-.376A9.914 9.914 0 0 1 2.031 12C2.031 6.494 6.516 2.01 12.031 2.01c2.671 0 5.183 1.04 7.07 2.928a9.928 9.928 0 0 1 2.93 7.064c0 5.508-4.484 9.992-10.005 9.992zm5.485-7.487c-.3-.15-1.777-.878-2.052-.977-.276-.1-.476-.15-.676.15s-.777.977-.952 1.177-.35.225-.65.075a8.204 8.204 0 0 1-2.417-1.492 9.07 9.07 0 0 1-1.674-2.083c-.176-.3-.02-.462.13-.612.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525s-.676-1.63-.926-2.233c-.244-.588-.492-.508-.676-.517l-.576-.01c-.2 0-.526.075-.801.375s-1.05 1.026-1.05 2.502 1.076 2.903 1.226 3.104c.15.2 2.118 3.235 5.132 4.536.717.31 1.277.495 1.713.633.72.229 1.375.197 1.893.12.577-.087 1.777-.726 2.027-1.428.25-.702.25-1.303.175-1.428-.074-.125-.274-.2-.574-.35z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:director@nuventraa.com"
                className="footer-social-btn"
                title="Email Us"
                aria-label="Email"
              >
                <Mail size={13} />
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.05rem',
                fontWeight: 800,
                color: '#0F2744',
                margin: '0 0 0.85rem 0',
                letterSpacing: '-0.01em'
              }}
            >
              Quick Links
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <Link to="/" className="footer-link-exact">
                <span style={{ color: '#C59B27', fontWeight: 800, marginRight: '0.45rem', fontSize: '0.9rem' }}>&rarr;</span>
                <span>Home</span>
              </Link>
              <Link to="/about" className="footer-link-exact">
                <span style={{ color: '#C59B27', fontWeight: 800, marginRight: '0.45rem', fontSize: '0.9rem' }}>&rarr;</span>
                <span>About us</span>
              </Link>
              <Link to="/services" className="footer-link-exact">
                <span style={{ color: '#C59B27', fontWeight: 800, marginRight: '0.45rem', fontSize: '0.9rem' }}>&rarr;</span>
                <span>Services</span>
              </Link>
              <Link to="/consulting" className="footer-link-exact">
                <span style={{ color: '#C59B27', fontWeight: 800, marginRight: '0.45rem', fontSize: '0.9rem' }}>&rarr;</span>
                <span>Consulting</span>
              </Link>
              <Link to="/contact" className="footer-link-exact">
                <span style={{ color: '#C59B27', fontWeight: 800, marginRight: '0.45rem', fontSize: '0.9rem' }}>&rarr;</span>
                <span>Contact us</span>
              </Link>
            </div>
          </div>

          {/* COLUMN 3: OUR SERVICES */}
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.05rem',
                fontWeight: 800,
                color: '#0F2744',
                margin: '0 0 0.35rem 0',
                letterSpacing: '-0.01em'
              }}
            >
              Our Services
            </h3>
            <div style={{ width: '26px', height: '1.5px', background: '#C59B27', marginBottom: '0.75rem' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <Link to="/services" className="footer-service-exact">
                <FileText size={14} color="#C59B27" style={{ flexShrink: 0 }} />
                <span>Custom Software Dev</span>
              </Link>
              <Link to="/services" className="footer-service-exact">
                <Settings size={14} color="#C59B27" style={{ flexShrink: 0 }} />
                <span>Industry-Specific Solutions</span>
              </Link>
              <Link to="/services" className="footer-service-exact">
                <Landmark size={14} color="#C59B27" style={{ flexShrink: 0 }} />
                <span>Co-operative Software</span>
              </Link>
              <Link to="/services" className="footer-service-exact">
                <Leaf size={14} color="#C59B27" style={{ flexShrink: 0 }} />
                <span>ERP Development</span>
              </Link>
              <Link to="/services" className="footer-service-exact">
                <ShieldCheck size={14} color="#C59B27" style={{ flexShrink: 0 }} />
                <span>Learning Management (LMS)</span>
              </Link>
              <Link to="/consulting" className="footer-service-exact">
                <Users size={14} color="#C59B27" style={{ flexShrink: 0 }} />
                <span>Consulting & Maintenance</span>
              </Link>
            </div>
          </div>

          {/* COLUMN 4: HEADQUARTERS */}
          {/* COLUMN 4: HEADQUARTERS */}
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.05rem',
                fontWeight: 800,
                color: '#0F2744',
                margin: '0 0 0.35rem 0',
                letterSpacing: '-0.01em'
              }}
            >
              Headquarters
            </h3>
            <div style={{ width: '26px', height: '1.5px', background: '#C59B27', marginBottom: '0.75rem' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                <MapPin size={15} color="#C59B27" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.8rem', color: '#334155', lineHeight: 1.4 }}>
                  Plot No 462, Saheed Nagar,<br />
                  Bhubaneswar, Odisha
                </span>
              </div>

              {/* Helpline Numbers */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                <Phone size={15} color="#C59B27" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', fontSize: '0.825rem', fontWeight: 800, lineHeight: 1.35 }}>
                  <a href="tel:+919090123562" style={{ color: '#0F2744', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C59B27'} onMouseLeave={(e) => e.currentTarget.style.color = '#0F2744'}>
                    +91 90901 23562
                  </a>
                  <a href="tel:+919437041019" style={{ color: '#0F2744', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C59B27'} onMouseLeave={(e) => e.currentTarget.style.color = '#0F2744'}>
                    +91 94370 41019
                  </a>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Mail size={15} color="#C59B27" style={{ flexShrink: 0 }} />
                <a href="mailto:info@nuventraa.com" style={{ fontSize: '0.8rem', color: '#334155', textDecoration: 'none', fontWeight: 600 }} onMouseEnter={(e) => e.currentTarget.style.color = '#C59B27'} onMouseLeave={(e) => e.currentTarget.style.color = '#334155'}>
                  info@nuventraa.com
                </a>
              </div>

              {/* Hours */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Clock size={15} color="#C59B27" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.76rem', color: '#475569', fontWeight: 500 }}>
                  Mon - Sat: 9:30 AM – 6:30 PM (IST)
                </span>
              </div>
            </div>
          </div>

          {/* COLUMN 5: STAY UPDATED */}
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.05rem',
                fontWeight: 800,
                color: '#0F2744',
                margin: '0 0 0.85rem 0',
                letterSpacing: '-0.01em'
              }}
            >
              Stay Updated
            </h3>

            <p style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.45, marginBottom: '0.85rem' }}>
              Get the latest updates on government subsidies, policy changes and industry insights.
            </p>

            {/* Newsletter Input Box */}
            <form onSubmit={handleSubscribe} className="footer-newsletter-box">
              <Mail size={14} color="#94A3B8" style={{ flexShrink: 0, marginRight: '0.35rem' }} />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  fontSize: '0.775rem',
                  color: '#0F2744',
                  width: '100%',
                  minWidth: 0
                }}
              />
              <button
                type="submit"
                className="footer-newsletter-btn"
                title="Subscribe to updates"
                aria-label="Subscribe"
              >
                {subscribed ? <Check size={13} /> : <ArrowRight size={13} />}
              </button>
            </form>

            {subscribed && (
              <div style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 600, marginTop: '0.35rem' }}>
                ✓ Thank you for subscribing to Nuventraa insights!
              </div>
            )}
          </div>

        </div>

        {/* =========================================================================
            BOTTOM ZONE: NAVY WAVE DOCKED STRIP (EXACT MOCKUP MATCH)
            ========================================================================= */}
        <div className="footer-bottom-bar-docked">
          {/* Left: Copyright and Advisory Scope */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            <div style={{ fontSize: '0.835rem', color: '#FFFFFF', letterSpacing: '0.01em', textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
              © {new Date().getFullYear()} <strong style={{ fontWeight: 800, color: '#FFFFFF' }}>Nuventraa</strong>. All rights reserved.
            </div>
            <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.75)', textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>
              Industrial Licensing, Process Optimization & Strategic Subsidy Realization.
            </div>
          </div>

          {/* Right: Policy Links and Circular Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.35rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.76rem', textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>
              <span className="footer-bottom-link">Privacy Policy</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.35)' }}>|</span>
              <span className="footer-bottom-link">Terms of Engagement</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.35)' }}>|</span>
              <span className="footer-bottom-link">Audit Guarantee</span>
            </div>

            {/* Circular Gold Back-to-Top Button & Text */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                cursor: 'pointer'
              }}
              onClick={scrollToTop}
            >
              <button
                type="button"
                onClick={scrollToTop}
                className="footer-back-to-top-circle"
                title="Scroll to top"
                aria-label="Back to top"
              >
                <ArrowUp size={15} color="#0F2744" strokeWidth={2.75} />
              </button>
              <span
                style={{
                  fontSize: '0.8rem',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  letterSpacing: '0.01em',
                  userSelect: 'none',
                  textShadow: '0 1px 4px rgba(0,0,0,0.7)'
                }}
              >
                Back to Top
              </span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
