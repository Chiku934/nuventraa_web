import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  FileText, 
  ArrowRight,
  Building,
  Scale,
  Sparkles,
  MapPin,
  Phone,
  Users,
  Trophy,
  Landmark,
  BarChart3,
  Star,
  Settings,
  Calendar
} from 'lucide-react';

import PageBanner from '../components/PageBanner';

export default function About() {
  const challenges = [
    {
      title: 'Complex Departmental Procedures',
      desc: 'Multiple ministries, technical inspections, and shifting policy provisions make autonomous filing prone to severe processing holds.',
      icon: Scale,
    },
    {
      title: 'Lengthy Approval Timelines',
      desc: 'Unorganized dossiers cause queries that delay commercial production schedules, incurring heavy holding and loan interest costs.',
      icon: Clock,
    },
    {
      title: 'High Risk of Non-Compliance',
      desc: 'Overlooked renewal deadlines or statutory deviations risk punitive stop-work notices or disconnection of industrial power and utilities.',
      icon: AlertTriangle,
    },
    {
      title: 'Unrealized Financial Subsidies',
      desc: 'Significant Capital Investment and EPF subsidies under Odisha IPR-2022 are forfeited simply due to defective DPR categorization or missed filing deadlines.',
      icon: FileText,
    },
  ];

  const corePillars = [
    {
      num: '01',
      title: 'Decades of Institutional Knowledge',
      desc: 'Our team possesses deep understanding of State Pollution Control Board, Directorate of Factories & Boilers, and DIC/IPICOL protocols.',
    },
    {
      num: '02',
      title: 'Audit-Ready Guarantee',
      desc: 'We perform line-item scrutiny of Plant & Machinery invoices and cross-verify with DPRs before filing to eliminate rejection objections.',
    },
    {
      num: '03',
      title: 'End-to-End Handholding',
      desc: 'From initial gap audits through document submission, departmental liaison, physical inspections, and final treasury subsidy disbursement.',
    },
    {
      num: '04',
      title: 'Dedicated Client Support',
      desc: 'Single-point executive accountability with regular milestone reporting and total transparency throughout the compliance lifecycle.',
    },
  ];

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', width: '100%' }}>
      {/* =========================================================================
          PAGE BANNER (Clean Minimalist Architectural Backdrop)
          ========================================================================= */}
      <PageBanner 
        breadcrumbCurrent="About Nuventraa"
        badge="Corporate Advisory"
        title="Bridging Industrial Enterprise &"
        titleHighlight="Statutory Excellence"
        description="Specialized end-to-end consulting for industrial licensing, process optimization, and strategic realization of government subsidies across Odisha."
      />

      {/* =========================================================================
          MISSION & EDITORIAL PHOTO SECTION (Compact & Balanced)
          ========================================================================= */}
      <section className="section-full section-py" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Mission Narrative */}
            <div>
              <span className="badge badge-navy" style={{ marginBottom: '0.65rem', fontSize: '0.725rem' }}>
                Corporate Mission
              </span>
              <h2 
                style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.65rem, 2.6vw, 2.2rem)', 
                  color: '#0F2744', 
                  fontWeight: 800, 
                  lineHeight: 1.25,
                  marginBottom: '1rem' 
                }}
              >
                "Helping Industries Navigate Regulatory Compliance Smoothly"
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                At Nuventraa, our core mission is to remove regulatory friction from industrial manufacturing. In an era of stringent environmental benchmarks and expanding government incentive schemes, we act as the strategic interface that ensures complete operational continuity and maximum capital subsidy realization.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Whether securing critical Pollution Control Board approvals (CTE & CTO), factory boiler permits, or executing claims under the <strong>Odisha Industrial Policy Resolution (IPR-2022)</strong> and <strong>OATTP-2022</strong>, we ensure your enterprise remains 100% compliant, protected, and financially optimized.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem' }}>
                <div style={{ background: '#FAF6EE', border: '1px solid rgba(197, 155, 39, 0.3)', padding: '1rem 1.15rem', borderRadius: '0.75rem' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F2744' }}>Odisha Based</div>
                  <div style={{ fontSize: '0.8rem', color: '#886411', fontWeight: 600 }}>Headquartered in Bhubaneswar</div>
                </div>
                <div style={{ background: '#F1F5F9', border: '1px solid #E2E8F0', padding: '1rem 1.15rem', borderRadius: '0.75rem' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F2744' }}>Full Lifecycle</div>
                  <div style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 600 }}>Eligibility to Bank Credit</div>
                </div>
              </div>
            </div>

            {/* Right Column: Boardroom Photo Frame */}
            <div className="photo-frame" style={{ height: '360px', width: '100%' }}>
              <img src="/assets/consulting-boardroom.jpg" alt="Nuventraa Executive Advisory Meeting in Bhubaneswar" />
              <div 
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  right: '1.25rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '0.85rem 1.15rem',
                  borderRadius: '0.65rem',
                  border: '1px solid rgba(197, 155, 39, 0.35)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.08)'
                }}
              >
                <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#0F2744' }}>
                  Strategic Regulatory Consultation
                </div>
                <div style={{ fontSize: '0.775rem', color: '#64748B' }}>
                  Our senior advisory panel reviewing project blueprints and DPR documentation for client industrial units.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE NEED FOR REGULATORY COMPLIANCE
          ========================================================================= */}
      <section className="section-full section-py bg-3d-grid" style={{ background: '#F8FAFC', borderTop: '1px solid #EEF2F6', borderBottom: '1px solid #EEF2F6' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.75rem' }}>
            <span className="badge badge-navy" style={{ marginBottom: '0.5rem', fontSize: '0.725rem' }}>
              The Industrial Landscape
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.3rem)', color: '#0F2744', fontWeight: 800, marginBottom: '0.65rem' }}>
              Why Regulatory Compliance Demands Expert Navigation
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#64748B' }}>
              Industrial regulations and environmental benchmarks in India are continuously tightening. Without proactive management, manufacturing units face serious headwinds.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.5rem' }}>
            {challenges.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="card-3d"
                  style={{
                    padding: '1.75rem 1.5rem',
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                  }}
                >
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '0.75rem',
                      background: '#FAF6EE',
                      border: '1px solid rgba(197, 155, 39, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <IconComp size={22} color="#C59B27" />
                  </div>

                  <h3 style={{ fontSize: '1.1rem', color: '#0F2744', fontWeight: 700, marginBottom: '0.65rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE NUVENTRAA: OUR CORE PILLARS
          ========================================================================= */}
      <section className="section-full section-py" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.75rem' }}>
            <span className="badge badge-gold" style={{ marginBottom: '0.5rem', fontSize: '0.725rem' }}>
              Our Competitive Edge
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.3rem)', color: '#0F2744', fontWeight: 800, marginBottom: '0.65rem' }}>
              Why Industrial Leaders Trust Nuventraa
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#64748B' }}>
              We don't merely fill out forms — we take complete ownership of government liaison, statutory inspections, and financial realization.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.5rem' }}>
            {corePillars.map((w, i) => (
              <div 
                key={i}
                className="card-3d"
                style={{
                  padding: '1.75rem 1.5rem',
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
                  <div 
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'rgba(15, 39, 68, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0F2744',
                      fontWeight: 800,
                      fontSize: '0.85rem'
                    }}
                  >
                    {w.num}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', color: '#0F2744', fontWeight: 700 }}>
                    {w.title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTORAL ADVISORY LEADERSHIP (MR. K. K. HOTA SHOWCASE - COMPACT HEIGHT)
          ========================================================================= */}
      <section 
        className="section-full" 
        style={{ 
          background: '#FFFFFF url("/assets/leadership-bg.jpg") no-repeat center center',
          backgroundSize: 'cover',
          borderTop: '1px solid rgba(226, 232, 240, 0.8)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
          padding: 'clamp(1.5rem, 2.5vw, 2.25rem) 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Section Header (Centered Outside Floating Card - Compact) */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(0.85rem, 1.8vw, 1.25rem)' }}>
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.35rem', 
                background: 'rgba(255, 255, 255, 0.95)', 
                border: '1px solid rgba(197, 155, 39, 0.45)', 
                padding: '0.2rem 0.75rem', 
                borderRadius: '999px', 
                fontSize: '0.67rem', 
                fontWeight: 800, 
                color: '#886411', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em', 
                marginBottom: '0.35rem', 
                boxShadow: '0 2px 6px rgba(197, 155, 39, 0.08)' 
              }}
            >
              <Sparkles size={11} color="#C59B27" />
              <span>Institutional Policy & Governance</span>
            </div>
            
            <h2 
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.65rem, 2.4vw, 2.15rem)', 
                color: '#0F2744', 
                fontWeight: 800, 
                marginBottom: '0.3rem',
                lineHeight: 1.15
              }}
            >
              Sectoral Advisory{' '}
              <span 
                style={{ 
                  fontStyle: 'italic', 
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #C59B27 0%, #DFB757 50%, #9A7B1C 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                Leadership
              </span>
            </h2>

            <p style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: 1.45, maxWidth: '680px', margin: '0 auto' }}>
              Guiding industrial enterprises with senior institutional wisdom, central ministry experience, and four decades of manufacturing governance across India.
            </p>
          </div>

          {/* Master Floating White Card (Compact Height) */}
          <div 
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              border: '1.5px solid rgba(226, 232, 240, 0.95)',
              boxShadow: '0 20px 45px -12px rgba(15, 39, 68, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.8)',
              padding: 'clamp(1.15rem, 2vw, 1.65rem) clamp(1.25rem, 2.5vw, 2rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(1.25rem, 2.5vw, 2.25rem)',
              alignItems: 'center',
              maxWidth: '1040px',
              margin: '0 auto'
            }}
          >
            {/* Left Column: Portrait Card with Designer Golden Backing */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '280px', margin: '0 auto' }}>
              {/* Golden Tab Top-Right Accent */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '24px',
                  width: '65px',
                  height: '15px',
                  background: 'linear-gradient(135deg, #DFB757 0%, #C59B27 100%)',
                  borderRadius: '6px 6px 0 0',
                  zIndex: 0
                }} 
              />

              {/* Golden Bottom-Right Flap Accent */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  right: '-6px',
                  width: '65px',
                  height: '65px',
                  background: 'linear-gradient(135deg, #E5C368 0%, #B8860B 100%)',
                  borderRadius: '0 0 20px 0',
                  zIndex: 0
                }} 
              />

              {/* Main Portrait Card */}
              <div 
                style={{
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 12px 28px rgba(15, 39, 68, 0.14)',
                  background: '#07152B',
                  aspectRatio: '0.84'
                }}
              >
                <img 
                  src="/assets/mr-kk-hota-portrait.jpg" 
                  alt="Mr. K. K. Hota - Senior Industry Advisor" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 12%',
                    display: 'block'
                  }}
                />

                {/* Top-Right Experience Badge */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '0.65rem',
                    right: '0.65rem',
                    background: '#07152B',
                    color: '#FFFFFF',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '6px',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    border: '1px solid rgba(212, 175, 55, 0.55)',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
                    zIndex: 2
                  }}
                >
                  <Trophy size={12} color="#DFB757" fill="#DFB757" />
                  <div style={{ lineHeight: 1.1, textAlign: 'left' }}>
                    <span style={{ display: 'block', fontSize: '0.68rem', fontWeight: 800 }}>42+ Years</span>
                    <span style={{ display: 'block', fontSize: '0.58rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>Experience</span>
                  </div>
                </div>

                {/* Bottom Dark Navy Plaque Overlay */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(180deg, rgba(7, 21, 43, 0) 0%, rgba(7, 21, 43, 0.88) 32%, #07152B 100%)',
                    padding: '1.75rem 0.85rem 0.85rem 0.85rem',
                    textAlign: 'center',
                    zIndex: 2
                  }}
                >
                  <div 
                    style={{ 
                      fontSize: '0.62rem', 
                      fontWeight: 800, 
                      letterSpacing: '0.08em', 
                      textTransform: 'uppercase', 
                      color: '#DFB757',
                      marginBottom: '0.12rem'
                    }}
                  >
                    Senior Industry Advisor
                  </div>
                  <div 
                    style={{ 
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.25rem', 
                      fontWeight: 700, 
                      color: '#FFFFFF',
                      marginBottom: '0.1rem'
                    }}
                  >
                    Mr. K. K. Hota
                  </div>
                  <div 
                    style={{ 
                      fontSize: '0.7rem', 
                      color: 'rgba(226, 232, 240, 0.85)',
                      marginBottom: '0.55rem'
                    }}
                  >
                    Sectoral Policy & Development
                  </div>

                  {/* Inside Plaque Badge */}
                  <div 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: '#FFFFFF',
                      border: '1px solid rgba(226, 232, 240, 0.95)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px',
                      fontSize: '0.67rem',
                      fontWeight: 700,
                      color: '#0F2744',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
                    }}
                  >
                    <Landmark size={11} color="#0F2744" />
                    <span>Statutory & Ministry Veteran</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Bio, Roles, and Value Proposition */}
            <div>
              {/* Category Label with Gold Bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                <span style={{ width: '22px', height: '2.5px', background: '#C59B27', borderRadius: '2px', display: 'inline-block' }} />
                <span style={{ fontSize: '0.68rem', color: '#886411', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Distinguished Leadership
                </span>
              </div>

              {/* Main Name */}
              <h3 
                style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.65rem, 2.3vw, 2.1rem)', 
                  color: '#0F2744', 
                  fontWeight: 800, 
                  margin: '0 0 0.1rem 0',
                  lineHeight: 1.15
                }}
              >
                Mr. K. K. Hota
              </h3>

              {/* Subtitle */}
              <div style={{ fontSize: '0.88rem', color: '#C59B27', fontWeight: 700, marginBottom: '0.75rem' }}>
                Senior Industry Advisor
              </div>

              {/* Two Metric Summary Cards */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
                  gap: '0.65rem', 
                  marginBottom: '0.75rem' 
                }}
              >
                {/* Card 1: Govt Association */}
                <div 
                  style={{ 
                    background: '#F8FAFC', 
                    border: '1px solid #E2E8F0', 
                    padding: '0.6rem 0.85rem', 
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem'
                  }}
                >
                  <div 
                    style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '7px', 
                      background: 'rgba(37, 99, 235, 0.08)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Landmark size={15} color="#2563EB" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.62rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                      Government Association
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#0F2744', fontWeight: 700, margin: '0.05rem 0' }}>
                      Ministry of Textiles
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#64748B' }}>
                      Former Senior Institutional Official
                    </div>
                  </div>
                </div>

                {/* Card 2: Industry Track Record */}
                <div 
                  style={{ 
                    background: '#F8FAFC', 
                    border: '1px solid #E2E8F0', 
                    padding: '0.6rem 0.85rem', 
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem'
                  }}
                >
                  <div 
                    style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '7px', 
                      background: 'rgba(37, 99, 235, 0.08)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <BarChart3 size={15} color="#2563EB" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.62rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                      Industry Track Record
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#0F2744', fontWeight: 700, margin: '0.05rem 0' }}>
                      Over 42 Years
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#64748B' }}>
                      Textile & Manufacturing Ecosystem
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio Narrative */}
              <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                A distinguished former senior official associated with premier institutions under the <strong style={{ color: '#0F2744' }}>Ministry of Textiles, Government of India</strong>, Mr. K. K. Hota brings over <strong style={{ color: '#0F2744' }}>42 years of unparalleled hands-on experience</strong> in advancing India's textile, manufacturing, and industrial development landscape.
              </p>

              {/* Role & Strategic Value Box */}
              <div 
                style={{ 
                  background: '#FAF7F0', 
                  borderRadius: '11px', 
                  padding: '0.75rem 0.95rem', 
                  border: '1px solid rgba(197, 155, 39, 0.28)', 
                  marginBottom: '0.75rem' 
                }}
              >
                <div 
                  style={{ 
                    fontSize: '0.7rem', 
                    fontWeight: 800, 
                    color: '#886411', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.05em', 
                    marginBottom: '0.45rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.4rem' 
                  }}
                >
                  <div 
                    style={{ 
                      width: '17px', 
                      height: '17px', 
                      borderRadius: '50%', 
                      background: '#D4AF37', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Star size={10} color="#FFFFFF" fill="#FFFFFF" />
                  </div>
                  <span>Role & Strategic Value</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Users size={14} color="#886411" style={{ marginTop: '0.12rem', flexShrink: 0 }} />
                    <p style={{ fontSize: '0.78rem', color: '#334155', lineHeight: 1.45, margin: 0 }}>
                      <strong style={{ color: '#0F2744' }}>Expertise in sectoral policy and development initiatives:</strong> Deep command over national and state-level manufacturing initiatives, industrial incentive frameworks, and policy roadmaps.
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Settings size={14} color="#886411" style={{ marginTop: '0.12rem', flexShrink: 0 }} />
                    <p style={{ fontSize: '0.78rem', color: '#334155', lineHeight: 1.45, margin: 0 }}>
                      <strong style={{ color: '#0F2744' }}>Strategic project alignment:</strong> Provides strategic guidance in aligning industrial projects with sector policies and institutional frameworks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions & Tagline */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
                  <Link 
                    to="/contact" 
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.45rem', 
                      background: 'linear-gradient(135deg, #DFB757 0%, #C59B27 50%, #9A7B1C 100%)', 
                      color: '#FFFFFF', 
                      padding: '0.52rem 1.15rem', 
                      borderRadius: '9px', 
                      fontSize: '0.8rem', 
                      fontWeight: 700, 
                      textDecoration: 'none', 
                      boxShadow: '0 3px 10px rgba(197, 155, 39, 0.3)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 5px 14px rgba(197, 155, 39, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 3px 10px rgba(197, 155, 39, 0.3)';
                    }}
                  >
                    <Calendar size={13} />
                    <span>Consult with Senior Advisory</span>
                    <ArrowRight size={13} />
                  </Link>

                  <Link 
                    to="/contact" 
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.4rem', 
                      background: '#FFFFFF', 
                      border: '1px solid #CBD5E1', 
                      color: '#0F2744', 
                      padding: '0.52rem 1.05rem', 
                      borderRadius: '999px', 
                      fontSize: '0.8rem', 
                      fontWeight: 700, 
                      textDecoration: 'none', 
                      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                      transition: 'background 0.2s ease, border-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#F8FAFC';
                      e.currentTarget.style.borderColor = '#94A3B8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#FFFFFF';
                      e.currentTarget.style.borderColor = '#CBD5E1';
                    }}
                  >
                    <span>View Profile</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

                <div style={{ fontSize: '0.7rem', color: '#64748B' }}>
                  Direct strategic advisory on complex industrial filings & policy alignment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CTA
          ========================================================================= */}
      <section style={{ background: '#FAF6EE', padding: '3.5rem 0', borderTop: '1px solid rgba(197, 155, 39, 0.25)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.95rem)', color: '#0F2744', fontWeight: 800, marginBottom: '0.35rem' }}>
              Have questions regarding your industrial compliance?
            </h3>
            <p style={{ color: '#64748B', fontSize: '0.95rem' }}>
              Speak directly with our senior licensing consultants at our Bhubaneswar headquarters.
            </p>
          </div>
          <Link to="/contact" className="btn btn-gold" style={{ padding: '0.75rem 1.65rem', fontSize: '0.875rem' }}>
            <span>Connect with an Expert</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
