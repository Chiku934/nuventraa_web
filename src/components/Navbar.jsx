import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  ArrowRight, 
  Menu, 
  X, 
  MapPin, 
  FileText, 
  TrendingUp, 
  Calendar,
  Building,
  Sparkles,
  ShieldCheck,
  Calculator
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
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Govt. Subsidies', path: '/incentives', tag: 'IPR-2022' },
    { name: 'Our Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* =========================================================================
          COMPACT TOP EXECUTIVE STRIP (Sleek Small Height)
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
              <span>Direct Govt. Interface (Odisha DIC • IPICOL • SPCB)</span>
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
              <span>GSTIN: <strong style={{ color: '#0F2744' }}>21AFPFS3041D1ZC</strong></span>
            </div>
          </div>

          {/* Right Side: Office Location & Helpline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#64748B', fontSize: '0.725rem' }}>
              <MapPin size={12} color="#C59B27" />
              <span>Rasulgarh, Bhubaneswar</span>
            </div>

            <span style={{ color: '#E2E8F0' }}>|</span>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Phone size={12} color="#C59B27" />
              <a 
                href="tel:+917381046111" 
                style={{ fontWeight: 700, color: '#0F2744', fontSize: '0.75rem' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C59B27'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#0F2744'}
              >
                +91 73810 46111
              </a>
              <span style={{ color: '#CBD5E1' }}>/</span>
              <a 
                href="tel:+917873007666" 
                style={{ fontWeight: 700, color: '#0F2744', fontSize: '0.75rem' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C59B27'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#0F2744'}
              >
                +91 78730 07666
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          COMPACT MAIN NAVBAR (Reduced Height ~62px)
          ========================================================================= */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: scrolled ? 'rgba(255, 255, 255, 0.97)' : 'rgba(255, 255, 255, 0.94)',
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
            height: '62px'
          }}
        >
          {/* Logo with Compact 36px Height */}
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
                height: '38px', 
                maxWidth: '170px',
                objectFit: 'contain' 
              }} 
            />
          </Link>

          {/* Desktop Nav Links (Compact Size) */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '0.2rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  padding: '0.4rem 0.8rem',
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <span>{link.name}</span>
                      {link.tag && (
                        <span 
                          style={{ 
                            fontSize: '0.625rem', 
                            background: '#FAF3E0', 
                            color: '#886411', 
                            border: '1px solid rgba(197, 155, 39, 0.3)',
                            fontWeight: 800, 
                            padding: '0.08rem 0.35rem', 
                            borderRadius: '0.25rem',
                            letterSpacing: '0.03em'
                          }}
                        >
                          {link.tag}
                        </span>
                      )}
                    </div>

                    {isActive ? (
                      <span 
                        style={{
                          position: 'absolute',
                          bottom: '-0.1rem',
                          height: '2px',
                          width: '55%',
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

          {/* Right Action Buttons (Compact Height) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Link 
              to="/incentives" 
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '0.5rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#0F2744',
                background: '#FFFFFF',
                border: '1px solid rgba(197, 155, 39, 0.35)',
                textDecoration: 'none'
              }}
              className="calc-link-desktop"
            >
              <Calculator size={14} color="#C59B27" />
              <span>Estimate Subsidy</span>
            </Link>

            <Link 
              to="/contact" 
              className="btn btn-gold"
              style={{
                fontSize: '0.825rem',
                padding: '0.45rem 1rem',
                borderRadius: '0.5rem',
                gap: '0.35rem',
                fontWeight: 700,
                color: '#0A192F',
                boxShadow: '0 4px 12px rgba(197, 155, 39, 0.22)',
              }}
            >
              <Calendar size={14} />
              <span>Consultation</span>
              <ArrowRight size={14} />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
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
                  {link.tag && (
                    <span 
                      style={{ 
                        fontSize: '0.675rem', 
                        background: '#FCF9EE', 
                        color: '#886411', 
                        fontWeight: 700, 
                        padding: '0.15rem 0.4rem', 
                        borderRadius: '0.3rem',
                        border: '1px solid rgba(197, 155, 39, 0.3)'
                      }}
                    >
                      {link.tag}
                    </span>
                  )}
                </NavLink>
              ))}

              <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #E2E8F0' }}>
                <a 
                  href="tel:+917381046111" 
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0F2744', fontWeight: 700, fontSize: '0.85rem' }}
                >
                  <Phone size={14} color="#C59B27" /> Helpline: +91 73810 46111
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
          .calc-link-desktop {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
