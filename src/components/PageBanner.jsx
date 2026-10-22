import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function PageBanner({
  badge,
  title,
  titleHighlight,
  description,
  breadcrumbCurrent
}) {
  return (
    <section 
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '220px',
        backgroundColor: '#FFFFFF',
        backgroundImage: `
          linear-gradient(90deg, 
            rgba(255, 255, 255, 0.92) 0%, 
            rgba(255, 255, 255, 0.76) 36%, 
            rgba(255, 255, 255, 0.20) 68%, 
            rgba(255, 255, 255, 0.02) 100%),
          url('/assets/page-banner-bg.jpg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        borderBottom: '1px solid rgba(197, 155, 39, 0.25)',
        padding: 'clamp(2.25rem, 3.8vw, 3.25rem) 0 clamp(2rem, 3.5vw, 2.75rem)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Bottom subtle gold hairline */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #C59B27 0%, rgba(197, 155, 39, 0.35) 45%, transparent 100%)'
        }}
      />

      <div className="container">
        <div style={{ maxWidth: '680px' }}>
          {/* Breadcrumb Navigation Strip */}
          <nav 
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: '#64748B',
              marginBottom: '0.65rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}
          >
            <Link 
              to="/" 
              style={{ color: '#0F2744', textDecoration: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C59B27'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#0F2744'}
            >
              Home
            </Link>
            <ChevronRight size={13} color="#C59B27" />
            <span style={{ color: '#886411' }}>{breadcrumbCurrent}</span>
          </nav>

          {/* Minimal Pill Badge */}
          {badge && (
            <div style={{ marginBottom: '0.5rem' }}>
              <span 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(197, 155, 39, 0.4)',
                  padding: '0.2rem 0.65rem',
                  borderRadius: '999px',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  color: '#886411',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  boxShadow: '0 2px 4px rgba(197, 155, 39, 0.06)'
                }}
              >
                <Sparkles size={11} color="#C59B27" />
                <span>{badge}</span>
              </span>
            </div>
          )}

          {/* Clean Playfair Display Title */}
          <h1 
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.85rem, 3vw, 2.6rem)',
              color: '#0F2744',
              fontWeight: 800,
              lineHeight: 1.18,
              marginBottom: '0.65rem',
              letterSpacing: '-0.015em'
            }}
          >
            {title}{' '}
            {titleHighlight && titleHighlight.trim().toLowerCase() !== title?.trim().toLowerCase() && (
              <span 
                style={{
                  background: 'linear-gradient(135deg, #DFB757 0%, #C59B27 50%, #9B7517 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                  fontStyle: 'italic',
                  paddingRight: '0.15rem'
                }}
              >
                {titleHighlight}
              </span>
            )}
          </h1>

          {/* Minimal One-Sentence Description */}
          {description && (
            <p 
              style={{
                fontSize: 'clamp(0.925rem, 1.25vw, 1.025rem)',
                color: '#475569',
                lineHeight: 1.6,
                margin: 0
              }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
