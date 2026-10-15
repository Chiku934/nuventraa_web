import React, { useState, useRef } from 'react';
import { FileText, CheckCircle2, TrendingUp, Building, ArrowRight } from 'lucide-react';

export default function Card3D() {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize to -1 to +1
    const xPct = (x / rect.width) * 2 - 1;
    const yPct = (y / rect.height) * 2 - 1;

    setRotateX(-yPct * 6);
    setRotateY(xPct * 8);

    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.2
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div 
      className="perspective-container" 
      style={{ perspective: '1000px', display: 'flex', justifyContent: 'center', width: '100%' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="perspective-element"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out',
          transformStyle: 'preserve-3d',
          width: '100%',
          maxWidth: '370px',
          background: '#FFFFFF',
          borderRadius: '1.25rem',
          padding: '1.35rem 1.4rem',
          border: '1.5px solid rgba(197, 155, 39, 0.4)',
          boxShadow: '0 20px 45px -12px rgba(15, 39, 68, 0.12), 0 8px 20px -4px rgba(197, 155, 39, 0.14), inset 0 1px 0 rgba(255, 255, 255, 1)',
          position: 'relative',
        }}
      >
        {/* Dynamic 3D Glare Light */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '1.25rem',
            pointerEvents: 'none',
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.8) 0%, rgba(223, 183, 87, 0.15) 40%, transparent 70%)`,
            opacity: glarePosition.opacity,
            transition: 'opacity 0.3s ease',
            mixBlendMode: 'overlay',
          }}
        />

        {/* Top Row (Compact) */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '1rem',
            transform: 'translateZ(15px)'
          }}
        >
          <div 
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: '#FAF6EE',
              border: '1px solid rgba(197, 155, 39, 0.3)',
              padding: '0.25rem 0.6rem',
              borderRadius: '0.4rem',
              fontSize: '0.675rem',
              fontWeight: 700,
              color: '#886411',
              letterSpacing: '0.03em',
              textTransform: 'uppercase'
            }}
          >
            <FileText size={12} color="#C59B27" />
            <span>STATUTORY ADVISORY</span>
          </div>

          <div 
            style={{ 
              fontSize: '0.7rem', 
              fontWeight: 700, 
              color: '#0F2744', 
              background: '#F1F5F9', 
              padding: '0.25rem 0.6rem', 
              borderRadius: '999px',
              border: '1px solid #E2E8F0',
              lineHeight: 1.2
            }}
          >
            Odisha IPR-2022
          </div>
        </div>

        {/* Center: Monogram & Brand (Compact Size) */}
        <div 
          style={{ 
            transform: 'translateZ(25px)', 
            textAlign: 'center',
            marginBottom: '1.15rem'
          }}
        >
          <div 
            style={{
              width: '74px',
              height: '74px',
              margin: '0 auto 0.75rem',
              borderRadius: '50%',
              background: '#FFFFFF',
              padding: '0.45rem',
              border: '2px solid rgba(197, 155, 39, 0.4)',
              boxShadow: '0 8px 18px -4px rgba(197, 155, 39, 0.22)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img 
              src="/assets/nuventraa-emblem.png" 
              alt="Nuventraa Emblem" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </div>

          <h3 
            className="font-serif-brand"
            style={{ 
              fontSize: '1.25rem', 
              color: '#0F2744', 
              marginBottom: '0.15rem',
              letterSpacing: '0.08em',
              fontWeight: 800
            }}
          >
            NUVENTRAA
          </h3>
          <p style={{ fontSize: '0.675rem', color: '#9A761C', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            AUDIT-READY INDUSTRIAL CONSULTING
          </p>
        </div>

        {/* Stats Grid: 2 Columns (Compact) */}
        <div 
          style={{ 
            transform: 'translateZ(18px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.65rem',
            marginBottom: '1rem'
          }}
        >
          {/* Zero Risk Box */}
          <div 
            style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '0.65rem',
              padding: '0.6rem 0.75rem',
              boxShadow: '0 2px 6px rgba(15, 29, 51, 0.03)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#059669', marginBottom: '0.15rem' }}>
              <CheckCircle2 size={12} />
              <span style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase' }}>ZERO RISK</span>
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F2744', lineHeight: 1.15 }}>100%</div>
            <div style={{ fontSize: '0.675rem', color: '#64748B' }}>Audit Preparedness</div>
          </div>

          {/* Maximum Subsidy CIS Box */}
          <div 
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(197, 155, 39, 0.3)',
              borderRadius: '0.65rem',
              padding: '0.6rem 0.75rem',
              boxShadow: '0 2px 6px rgba(197, 155, 39, 0.06)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#C59B27', marginBottom: '0.15rem' }}>
              <TrendingUp size={12} />
              <span style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase' }}>MAXIMUM</span>
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F2744', lineHeight: 1.2 }}>Subsidy CIS</div>
            <div style={{ fontSize: '0.675rem', color: '#64748B' }}>Admissible Quantum</div>
          </div>
        </div>

        {/* Bottom Strip (Compact) */}
        <div 
          style={{ 
            transform: 'translateZ(15px)',
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '0.6rem',
            padding: '0.55rem 0.85rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Building size={14} color="#0F2744" />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#0F2744' }}>
              Govt. Interface & Liaison
            </span>
          </div>
          <span style={{ fontSize: '0.725rem', fontWeight: 700, color: '#C59B27', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
            Phase 1 & 2 <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </div>
  );
}
