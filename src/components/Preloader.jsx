import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isFirstMount = useRef(true);

  useEffect(() => {
    // Show preloader
    setLoading(true);

    // Initial page load / refresh: 800ms
    // Route navigation: 420ms (crisp, elegant, snappy)
    const duration = isFirstMount.current ? 800 : 420;
    isFirstMount.current = false;

    const timer = setTimeout(() => {
      setLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className={`luxury-preloader-overlay ${loading ? 'active' : 'closing'}`}
      aria-hidden={!loading}
    >
      {/* Background Faint Watermark */}
      <div
        style={{
          position: 'absolute',
          width: '420px',
          height: '420px',
          opacity: 0.035,
          pointerEvents: 'none',
          userSelect: 'none',
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%'
        }}
      >
        <img
          src="/assets/nuventraa-emblem.png"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      {/* Central Visual Hub */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2
        }}
      >
        {/* Orbital Rings & Glowing Emblem Container */}
        <div
          style={{
            position: 'relative',
            width: '180px',
            height: '180px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Glowing Radial Golden Aura */}
          <div
            style={{
              position: 'absolute',
              width: '110px',
              height: '110px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(223, 183, 87, 0.25) 0%, rgba(197, 155, 39, 0.05) 70%, transparent 100%)',
              animation: 'luxuryPulseAura 2.2s ease-in-out infinite'
            }}
          />

          {/* Outer Counter-Rotating Accent Ring */}
          <svg
            width="170"
            height="170"
            viewBox="0 0 170 170"
            style={{
              position: 'absolute',
              animation: 'preloaderSpinReverse 8s linear infinite',
              pointerEvents: 'none'
            }}
          >
            <circle
              cx="85"
              cy="85"
              r="80"
              fill="none"
              stroke="rgba(197, 155, 39, 0.25)"
              strokeWidth="1"
              strokeDasharray="6 48"
            />
            {/* Golden Diamond Nodes */}
            <circle cx="85" cy="5" r="2.5" fill="#C59B27" />
            <circle cx="85" cy="165" r="2.5" fill="#DFB757" />
          </svg>

          {/* Inner Golden Dash Ring */}
          <svg
            width="142"
            height="142"
            viewBox="0 0 142 142"
            style={{
              position: 'absolute',
              animation: 'preloaderSpin 4.5s linear infinite',
              pointerEvents: 'none'
            }}
          >
            <defs>
              <linearGradient id="preloaderGoldRing" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DFB757" />
                <stop offset="50%" stopColor="#C59B27" />
                <stop offset="100%" stopColor="#886411" />
              </linearGradient>
            </defs>
            <circle
              cx="71"
              cy="71"
              r="67"
              fill="none"
              stroke="url(#preloaderGoldRing)"
              strokeWidth="1.75"
              strokeDasharray="22 12"
              strokeLinecap="round"
            />
          </svg>

          {/* Core Floating Emblem Badge with Gleam Effect */}
          <div
            style={{
              width: '94px',
              height: '94px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1.5px solid rgba(197, 155, 39, 0.45)',
              boxShadow: '0 12px 32px rgba(15, 29, 51, 0.08), 0 4px 16px rgba(197, 155, 39, 0.18), inset 0 2px 0 rgba(255, 255, 255, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              animation: 'emblemFloat 2.4s ease-in-out infinite'
            }}
          >
            {/* The Nuventraa Logo Icon Emblem */}
            <img
              src="/assets/nuventraa-emblem.png"
              alt="Nuventraa Emblem"
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'contain',
                position: 'relative',
                zIndex: 1
              }}
            />

            {/* Diagonal Luxury Light Beam Gleam */}
            <div
              style={{
                position: 'absolute',
                top: '-20%',
                left: '-20%',
                width: '35%',
                height: '140%',
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.85) 50%, transparent 100%)',
                animation: 'luxuryGleam 2.2s infinite ease-in-out',
                pointerEvents: 'none',
                zIndex: 2
              }}
            />
          </div>
        </div>

        {/* Brand Wordmark & Tagline */}
        <div style={{ textAlign: 'center', marginTop: '0.65rem' }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.25rem',
              fontWeight: 800,
              color: '#0F2744',
              letterSpacing: '0.28em',
              margin: '0 0 0.25rem 0',
              textTransform: 'uppercase'
            }}
          >
            Nuventraa
          </h1>

          <div
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              color: '#886411',
              letterSpacing: '0.22em',
              textTransform: 'uppercase'
            }}
          >
            Industrial Regulatory Advisory
          </div>
        </div>

        {/* Luxury Traversing Golden Progress Beam */}
        <div
          style={{
            width: '135px',
            height: '2px',
            borderRadius: '999px',
            background: 'rgba(197, 155, 39, 0.22)',
            position: 'relative',
            overflow: 'hidden',
            marginTop: '1.15rem'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              height: '100%',
              background: 'linear-gradient(90deg, transparent 0%, #F5D38A 30%, #C59B27 70%, transparent 100%)',
              boxShadow: '0 0 8px #DFB757',
              animation: 'luxuryProgressBeam 1.25s cubic-bezier(0.4, 0, 0.2, 1) infinite'
            }}
          />
        </div>

        {/* Sub-status Indicator */}
        <div
          style={{
            fontSize: '0.58rem',
            color: '#94A3B8',
            letterSpacing: '0.18em',
            fontWeight: 600,
            textTransform: 'uppercase',
            marginTop: '0.65rem'
          }}
        >
          Single-Window Technical & Statutory Audit
        </div>
      </div>
    </div>
  );
}
