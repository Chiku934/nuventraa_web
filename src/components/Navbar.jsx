import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  Menu,
  X,
  MapPin,
  ShieldCheck,
  Send
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industry Consulting', path: '/consulting' },
    { name: 'Contact us', path: '/contact' },
  ];

  return (
    <>
      {/* =========================================================================
          COMPACT TOP EXECUTIVE STRIP
          ========================================================================= */}
      <div
        style={{
          background: 'linear-gradient(90deg, #FBF9F5 0%, #FFFFFF 50%, #FAF6EE 100%)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
          fontSize: '0.75rem',
          padding: '0.25rem 0',
          color: '#475569',
          position: 'relative',
          zIndex: 1001,
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.35rem'
          }}
        >
          {/* Left Side: Live Interface & Statutory Credentials */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600, color: '#0F2744' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#10B981',
                  boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.2)',
                  display: 'inline-block'
                }}
              />
              <span>Nuventraa • Strategic Industrial & Regulatory Advisory</span>
            </div>

            <span style={{ color: '#E2E8F0', display: 'none', md: 'inline' }}>|</span>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                color: '#64748B',
                background: '#FFFFFF',
                border: '1px solid rgba(197, 155, 39, 0.25)',
                padding: '0.1rem 0.45rem',
                borderRadius: '0.3rem',
                fontSize: '0.7rem',
                fontWeight: 600
              }}
            >
              <ShieldCheck size={12} color="#C59B27" />
              <span>Mail: <strong style={{ color: '#0F2744' }}>info@nuventraa.com</strong></span>
            </div>
          </div>

          {/* Right Side: Office Location & Helpline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#64748B', fontSize: '0.725rem' }}>
              <MapPin size={12} color="#C59B27" />
              <span>Plot No 462, Saheed Nagar, Bhubaneswar</span>
            </div>

            <span style={{ color: '#E2E8F0' }}>|</span>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Phone size={12} color="#C59B27" />
              <a
                href="tel:+919090123562"
                style={{ fontWeight: 700, color: '#0F2744', fontSize: '0.75rem' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C59B27'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#0F2744'}
              >
                +91 90901 23562
              </a>
              <span style={{ color: '#CBD5E1' }}>/</span>
              <a
                href="tel:+919437041019"
                style={{ fontWeight: 700, color: '#0F2744', fontSize: '0.75rem' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C59B27'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#0F2744'}
              >
                +91 94370 41019
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN NAVBAR
          ========================================================================= */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.85)',
          boxShadow: scrolled
            ? '0 6px 20px -8px rgba(15, 29, 51, 0.08), 0 1px 0 rgba(197, 155, 39, 0.15)'
            : '0 2px 10px -5px rgba(15, 29, 51, 0.03)',
          transition: 'all 0.25s ease',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px'
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              transition: 'transform 0.2s ease'
            }}
          >
            <img
              src="/assets/nuventraa-logo.png"
              alt="Nuventraa Logo"
              style={{
                height: '42px',
                maxWidth: '180px',
                objectFit: 'contain'
              }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '0.35rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#0F2744' : '#475569',
                  borderRadius: '0.4rem',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  letterSpacing: '-0.01em',
                })}
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive ? (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '-0.1rem',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          height: '2px',
                          width: '60%',
                          background: 'linear-gradient(90deg, #E6C265, #C59B27)',
                          borderRadius: '999px',
                        }}
                      />
                    ) : null}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Button: Get A Quote */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Link
              to="/contact"
              className="btn btn-gold"
              style={{
                fontSize: '0.825rem',
                padding: '0.5rem 1.15rem',
                borderRadius: '0.5rem',
                gap: '0.4rem',
                fontWeight: 700,
                color: '#0A192F',
                boxShadow: '0 4px 14px rgba(197, 155, 39, 0.22)',
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none'
              }}
            >
              <span>Get A Quote</span>
              <ArrowRight size={14} />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '0.5rem',
                border: '1px solid #E2E8F0',
                background: '#FFFFFF',
                color: '#0F2744',
                cursor: 'pointer',
              }}
              className="mobile-toggle"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid #E2E8F0',
              padding: '1rem 1.25rem',
              boxShadow: '0 12px 24px rgba(15, 29, 51, 0.1)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={({ isActive }) => ({
                    padding: '0.65rem 0.85rem',
                    fontSize: '0.925rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#0F2744' : '#334155',
                    borderRadius: '0.5rem',
                    background: isActive ? '#FAF6EE' : 'transparent',
                    borderLeft: isActive ? '3px solid #C59B27' : '3px solid transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none'
                  })}
                >
                  <span>{link.name}</span>
                </NavLink>
              ))}

              <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #E2E8F0' }}>
                <a
                  href="tel:+919090123562"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0F2744', fontWeight: 700, fontSize: '0.85rem' }}
                >
                  <Phone size={14} color="#C59B27" /> Helpline: +91 90901 23562 / 94370 41019
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Responsive Styles */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
