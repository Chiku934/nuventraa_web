import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  TrendingUp, 
  FileCheck2, 
  ArrowRight, 
  CheckCircle, 
  Award, 
  Clock, 
  Flame, 
  Factory, 
  Layers, 
  Coins,
  ChevronRight,
  ExternalLink,
  Sparkles,
  MapPin,
  Phone,
  Building2,
  CheckCircle2,
  Feather
} from 'lucide-react';
import Card3D from '../components/Card3D';
import SubsidyCalculator from '../components/SubsidyCalculator';
import Testimonials from '../components/Testimonials';

export default function Home() {
  const coreMetrics = [
    { value: '100%', label: 'Audit Preparedness', desc: 'Pre-submission invoice & DPR scrutiny' },
    { value: 'Up to 30%', label: 'Capital Subsidy (CIS)', desc: 'Admissible under Odisha IPR & OATTP' },
    { value: '5-Stage', label: 'Consulting Roadmap', desc: 'From filing to final bank disbursement' },
    { value: 'Zero', label: 'Tolerance for Rejection', desc: 'Proactive early red-flag identification' },
  ];

  const featuredSectors = [
    {
      title: 'Textile & Apparel Sector',
      policy: 'OATTP-2022 Priority',
      badge: 'Up to 30% Subsidy',
      image: '/assets/textile-plant.jpg',
      desc: 'Specialized incentives under Odisha Apparel & Technical Textiles Policy including Capital Investment Subsidy (CIS) and 100% EPF/ESI support for domicile workers.',
      link: '/incentives'
    },
    {
      title: 'Boilers & Steam Installations',
      policy: 'Indian Boilers Act',
      badge: 'Mandatory Safety',
      image: '/assets/boiler-plant.jpg',
      desc: 'Complete engineering scrutiny for boiler registrations, steam piping approvals, safety valves, and annual operational license renewals.',
      link: '/services'
    },
    {
      title: 'Pollution Control & Effluent Labs',
      policy: 'OSPCB Clearances',
      badge: 'CTE & CTO Certified',
      image: '/assets/spcb-environmental.jpg',
      desc: 'End-to-end liaison with State Pollution Control Board for Consent to Establish & Operate, hazardous waste authorization, and emission compliance.',
      link: '/services'
    },
    {
      title: 'Precision CNC & Heavy Engineering',
      policy: 'Odisha IPR-2022',
      badge: 'Capex Realization',
      image: '/assets/cnc-precision.jpg',
      desc: 'Full assistance for high-value plant & machinery investments, power tariff reimbursements, and state GST tax refund structures.',
      link: '/incentives'
    }
  ];

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', width: '100%' }}>
      {/* =========================================================================
          HERO SECTION (Compact, Balanced Small Height with Image 2 Background)
          ========================================================================= */}
      <section 
        className="section-full"
        style={{
          backgroundImage: "url('/assets/hero-bg-factory.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          paddingTop: 'clamp(1.5rem, 2.5vw, 2.25rem)',
          paddingBottom: 'clamp(2rem, 3.5vw, 3rem)',
          position: 'relative',
          minHeight: 'auto',
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #EEF2F6',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Compact Typography & Proportions */}
            <div>
              {/* Compact Pill Badge */}
              <div style={{ marginBottom: '0.75rem' }}>
                <span 
                  style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: '#FAF6EE',
                    border: '1px solid rgba(197, 155, 39, 0.45)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: '#886411',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 4px rgba(197, 155, 39, 0.08)'
                  }}
                >
                  <Feather size={12} color="#C59B27" />
                  <span>INDUSTRIAL REGULATORY & POLICY ADVISORY</span>
                </span>
              </div>

              {/* Compact Multi-line Heading */}
              <h1 
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.85rem, 2.8vw, 2.65rem)',
                  color: '#0F2744',
                  fontWeight: 800,
                  lineHeight: 1.16,
                  marginBottom: '0.85rem',
                  letterSpacing: '-0.015em'
                }}
              >
                Seamless Regulatory<br />
                Compliance &<br />
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
                  Maximum Subsidy
                </span><br />
                Realization
              </h1>

              {/* Compact Description Paragraph */}
              <p 
                style={{
                  fontSize: 'clamp(0.875rem, 1.2vw, 0.95rem)',
                  color: '#334155',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem',
                  maxWidth: '500px'
                }}
              >
                <strong>Nuventraa</strong> guides industrial enterprises across Odisha and India from policy eligibility to approved sanction letters and actual bank disbursements. From <strong>State Pollution Control Board (CTE/CTO)</strong> & <strong>Boiler permits</strong> to <strong>Odisha IPR-2022 & OATTP-2022 incentives</strong>, we provide a 100% audit-ready, zero-rejection framework.
              </p>

              {/* Compact Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                <Link 
                  to="/incentives" 
                  className="btn btn-gold" 
                  style={{ 
                    padding: '0.65rem 1.25rem',
                    fontSize: '0.85rem',
                    borderRadius: '0.65rem',
                    gap: '0.45rem'
                  }}
                >
                  <ExternalLink size={14} />
                  <span>Check Odisha Subsidies</span>
                  <ArrowRight size={14} />
                </Link>

                <Link 
                  to="/services" 
                  className="btn btn-outline" 
                  style={{ 
                    padding: '0.65rem 1.25rem',
                    fontSize: '0.85rem',
                    borderRadius: '0.65rem',
                    gap: '0.45rem'
                  }}
                >
                  <span>Licensing Services</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Column: Compact 3D Card */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Card3D />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY STATS STRIP (Compact & Balanced Height)
          ========================================================================= */}
      <section className="section-full" style={{ transform: 'translateY(-1.25rem)', zIndex: 10, position: 'relative' }}>
        <div className="container">
          <div 
            style={{
              background: '#FFFFFF',
              borderRadius: '1rem',
              border: '1px solid #E2E8F0',
              padding: '1.25rem clamp(1rem, 2.5vw, 2rem)',
              boxShadow: '0 10px 25px -5px rgba(15, 29, 51, 0.06)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {coreMetrics.map((m, i) => (
              <div 
                key={i} 
                style={{
                  borderRight: i < coreMetrics.length - 1 ? '1px solid #F1F5F9' : 'none',
                  paddingRight: '0.75rem'
                }}
              >
                <div style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.85rem)', fontWeight: 800, color: '#0F2744', fontFamily: 'var(--font-heading)' }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#C59B27', marginBottom: '0.15rem' }}>
                  {m.label}
                </div>
                <div style={{ fontSize: '0.775rem', color: '#64748B' }}>
                  {m.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRIORITY INDUSTRIAL SECTOR SHOWCASE (With Real Photography)
          ========================================================================= */}
      <section className="section-full section-py" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
            <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>
              Strategic Industrial Focus
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.75rem, 2.8vw, 2.2rem)', color: '#0F2744', fontWeight: 800, marginBottom: '0.65rem' }}>
              Specialized Industry Coverage Across Odisha
            </h2>
            <p style={{ fontSize: '0.975rem', color: '#64748B' }}>
              We tailor policy interpretation and statutory licensing to the exact technical requirements of priority manufacturing sectors.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.75rem'
            }}
          >
            {featuredSectors.map((sector, idx) => (
              <div 
                key={idx}
                className="card-3d"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden'
                }}
              >
                {/* Image Frame */}
                <div style={{ height: '190px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={sector.image} 
                    alt={sector.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.95)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '999px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#0F2744',
                      border: '1px solid rgba(197, 155, 39, 0.4)',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                    }}
                  >
                    {sector.badge}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <span style={{ fontSize: '0.725rem', fontWeight: 700, color: '#C59B27', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {sector.policy}
                    </span>
                    <h3 style={{ fontSize: '1.15rem', color: '#0F2744', fontWeight: 800, margin: '0.25rem 0 0.65rem' }}>
                      {sector.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {sector.desc}
                    </p>
                  </div>

                  <Link 
                    to={sector.link} 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#0F2744',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#C59B27'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#0F2744'}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE DUAL PILLARS WITH BESPOKE PHOTOGRAPHY
          ========================================================================= */}
      <section className="section-full section-py bg-3d-grid" style={{ background: '#F8FAFC', borderTop: '1px solid #EEF2F6', borderBottom: '1px solid #EEF2F6' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem' }}>
            <span className="badge badge-navy" style={{ marginBottom: '0.5rem' }}>
              Dual Pillars of Excellence
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.75rem, 2.8vw, 2.2rem)', color: '#0F2744', fontWeight: 800, marginBottom: '0.65rem' }}>
              How Nuventraa Drives Operational & Financial Success
            </h2>
            <p style={{ fontSize: '0.975rem', color: '#64748B' }}>
              Combining hands-on regulatory liaison on the ground with deep financial scrutiny of project reports and machinery invoices.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '2.5rem' }}>
            {/* Pillar 1: Licensing */}
            <div 
              className="card-3d"
              style={{
                padding: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                background: '#FFFFFF',
                border: '1.5px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div className="photo-frame" style={{ height: '220px', marginBottom: '1.5rem' }}>
                  <img src="/assets/engineer-inspection.jpg" alt="On-Site Licensing Engineer" />
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '0.85rem',
                      left: '0.85rem',
                      background: 'rgba(255, 255, 255, 0.95)',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '0.4rem',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#0F2744',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}
                  >
                    OSPCB & Boiler Inspectorate Interface
                  </div>
                </div>

                <span className="badge badge-navy" style={{ marginBottom: '0.5rem' }}>
                  Pillar 01
                </span>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.35rem', color: '#0F2744', fontWeight: 800, marginBottom: '0.65rem' }}>
                  Industrial Licensing & Regulatory Compliance
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  We eliminate bureaucratic friction and protect your factory against punitive stoppages, securing mandatory permits across environmental, boiler, and factory bodies.
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#334155' }}>
                    <CheckCircle2 size={16} color="#059669" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                    <span><strong>Pollution Clearances:</strong> SPCB Consent to Establish (CTE) & Consent to Operate (CTO).</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#334155' }}>
                    <CheckCircle2 size={16} color="#059669" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                    <span><strong>Boilers & Safety Permits:</strong> Factory registrations, steam piping, and annual renewals.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#334155' }}>
                    <CheckCircle2 size={16} color="#059669" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                    <span><strong>Workflow Optimization:</strong> Streamlining internal compliance and single-window filings.</span>
                  </li>
                </ul>
              </div>

              <Link to="/services" className="btn btn-outline" style={{ width: '100%', justifyContent: 'space-between', padding: '0.75rem 1.25rem' }}>
                <span>Explore Full Licensing Scope</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Pillar 2: Subsidies */}
            <div 
              className="card-3d-gold"
              style={{
                padding: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #FDFBF7 100%)',
                border: '1.5px solid rgba(197, 155, 39, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div className="photo-frame" style={{ height: '220px', marginBottom: '1.5rem' }}>
                  <img src="/assets/audit-desk.jpg" alt="Audit Ready Document Scrutiny" />
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '0.85rem',
                      left: '0.85rem',
                      background: 'rgba(255, 255, 255, 0.95)',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '0.4rem',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#886411',
                      border: '1px solid rgba(197, 155, 39, 0.4)',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}
                  >
                    Phase 1 & Phase 2 Audit Preparedness
                  </div>
                </div>

                <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>
                  Pillar 02 (Key Nuventraa Role)
                </span>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.35rem', color: '#0F2744', fontWeight: 800, marginBottom: '0.65rem' }}>
                  Govt. Incentives & Subsidies Realization
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  Structured advisory to realize millions under <strong>Odisha IPR-2022 & OATTP-2022</strong>. We bridge the gap from policy eligibility to sanction letters and actual bank disbursements.
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#334155' }}>
                    <CheckCircle2 size={16} color="#C59B27" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                    <span><strong>Phase 1: Structuring Strategy:</strong> Eligibility validation, timeline audits, and red-flag identification.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#C59B27' }}>
                    <CheckCircle2 size={16} color="#C59B27" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                    <span><strong>Phase 2: Due Diligence:</strong> Invoice-level scrutiny of Plant & Machinery matching policy definitions.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#C59B27' }}>
                    <CheckCircle2 size={16} color="#C59B27" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                    <span><strong>Multi-Stream Benefits:</strong> Capital Subsidies, EPF/ESI support, SGST refunds, & Power Duty exemptions.</span>
                  </li>
                </ul>
              </div>

              <Link to="/incentives" className="btn btn-gold" style={{ width: '100%', justifyContent: 'space-between', padding: '0.75rem 1.25rem' }}>
                <span>Explore IPR-2022 Framework</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE SUBSIDY ESTIMATOR
          ========================================================================= */}
      <section className="section-full section-py" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <SubsidyCalculator />
        </div>
      </section>

      {/* =========================================================================
          VERIFIED CLIENT TESTIMONIALS
          ========================================================================= */}
      <section className="section-full section-py" style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
            <span className="badge badge-navy" style={{ marginBottom: '0.5rem' }}>
              Proven Track Record
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.75rem, 2.8vw, 2.2rem)', color: '#0F2744', fontWeight: 800, marginBottom: '0.65rem' }}>
              Trusted by Odisha’s Industrial Leaders
            </h2>
            <p style={{ fontSize: '0.975rem', color: '#64748B' }}>
              Genuine testimonials from industrial manufacturers who unlocked regulatory approvals and verified subsidies with Nuventraa.
            </p>
          </div>

          <Testimonials />
        </div>
      </section>

      {/* =========================================================================
          BHUBANESWAR HEADQUARTERS & CALL TO ACTION
          ========================================================================= */}
      <section 
        className="section-full"
        style={{
          background: 'linear-gradient(135deg, #FCF9EE 0%, #FFFFFF 50%, #FAF6EE 100%)',
          padding: 'clamp(2.5rem, 4vw, 3.25rem) 0',
          borderTop: '1px solid rgba(197, 155, 39, 0.25)',
          position: 'relative'
        }}
      >
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
                Corporate Advisory Office
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.75rem, 2.8vw, 2.2rem)', color: '#0F2744', fontWeight: 800, marginBottom: '0.85rem' }}>
                Visit Us at Saheed Nagar, Bhubaneswar
              </h2>
              <p style={{ fontSize: '0.975rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Our corporate headquarters is strategically situated in Bhubaneswar to interface directly with the Directorate of Industries, IPICOL, and the State Pollution Control Board on behalf of our client units.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155' }}>
                  <MapPin size={16} color="#C59B27" />
                  <span>Plot No 462, Saheed Nagar, Bhubaneswar – 751007</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155' }}>
                  <Award size={16} color="#C59B27" />
                  <span>GSTIN: <strong>21AFPFS3041D1ZC</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155' }}>
                  <Phone size={16} color="#C59B27" />
                  <span>Helplines: +91 90901 23562 / +91 94370 41019</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <Link to="/contact" className="btn btn-gold" style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}>
                  <span>Book In-Person Consultation</span>
                  <ArrowRight size={15} />
                </Link>
                <a href="tel:+919090123562" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}>
                  <span>Call Headquarters</span>
                </a>
              </div>
            </div>

            {/* Headquarters Photo Frame */}
            <div className="photo-frame" style={{ height: '320px', width: '100%' }}>
              <img src="/assets/rasulgarh-tower.jpg" alt="Saheed Nagar Corporate Office, Bhubaneswar" />
              <div 
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '0.5rem 0.85rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(197, 155, 39, 0.35)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{ fontSize: '0.825rem', fontWeight: 800, color: '#0F2744' }}>
                  Saheed Nagar Corporate Office
                </div>
                <div style={{ fontSize: '0.725rem', color: '#64748B' }}>
                  Bhubaneswar Central Corporate Office
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
