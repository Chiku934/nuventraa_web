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
  Users
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
