import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ShieldCheck,
  ArrowRight,
  ArrowRightCircle,
  Factory,
  Banknote,
  Workflow,
  Users,
  TrendingUp,
  Cog,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import PageBanner from '../components/PageBanner';

export default function Consulting() {
  const [hoveredAdvantage, setHoveredAdvantage] = useState(null);
  const [hoveredLeader, setHoveredLeader] = useState(null);
  const [hoveredEngagement, setHoveredEngagement] = useState(null);

  const engagementModels = [
    {
      title: 'Advisory & Consulting',
      desc: 'Strategic guidance and expert insights'
    },
    {
      title: 'Program Management Support',
      desc: 'End-to-end project'
    },
    {
      title: 'Technology Implementation',
      desc: 'Deployment of digital platforms'
    },
    {
      title: 'Managed Services',
      desc: 'Ongoing system operations and support'
    },
    {
      title: 'Build-Operate-Transfer (BOT)',
      desc: 'Development, operation, and capability transfer'
    }
  ];

  const leadershipTeam = [
    {
      name: 'K. K. Hota',
      role: 'Project Consultant and Industry Advisor',
      img: '/assets/nuventraa/kk-hota.jpg'
    }
  ];

  const NuventraaAdvantage = [
    {
      id: 'policy-tech',
      title: 'Policy + Technology Expertise',
      descStart: 'Operating at the intersection of ',
      descHighlight: 'digital platforms and institutional frameworks.',
      renderIcon: (isHovered) => (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          stroke={isHovered ? '#2439ff' : '#111827'}
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: 'stroke 0.3s ease' }}
        >
          {/* Top Gear */}
          <circle cx="24" cy="14" r="4.5" />
          <path d="M24 6v3M24 19v3M16 14h3M29 14h3M18.3 8.3l2.2 2.2M27.5 17.5l2.2 2.2M18.3 19.7l2.2-2.2M27.5 10.5l2.2-2.2" />
          {/* Supporting Hand */}
          <path d="M10 33c3-3 7-4.5 14-4.5 5 0 9 1.5 14 4.5" />
          <path d="M13 28c1.5-2.5 4.5-4 11-4s9.5 1.5 11 4" />
          <path d="M15 37h18" />
        </svg>
      )
    },
    {
      id: 'structured-execution',
      title: 'Structured Execution',
      descStart: 'Milestone-driven delivery with strong ',
      descHighlight: 'documentation and governance.',
      renderIcon: (isHovered) => (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          stroke={isHovered ? '#2439ff' : '#111827'}
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: 'stroke 0.3s ease' }}
        >
          {/* Document Sheet */}
          <path d="M13 7a3 3 0 0 1 3-3h13l10 10v23a3 3 0 0 1-3 3H16a3 3 0 0 1-3-3V7z" />
          <path d="M29 4v10h10" />
          <path d="M19 20h8M19 26h11M19 32h5" />
          {/* Magnifying Glass */}
          <circle cx="33" cy="33" r="5.5" fill={isHovered ? 'rgba(36,57,255,0.06)' : 'transparent'} />
          <circle cx="33" cy="33" r="5.5" />
          <path d="M37 37l6 6" strokeWidth="2.4" />
        </svg>
      )
    },
    {
      id: 'domain-advisory',
      title: 'Domain-Led Advisory',
      descStart: 'Strategic insights driven by ',
      descHighlight: 'experienced industry experts.',
      renderIcon: (isHovered) => (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          stroke={isHovered ? '#2439ff' : '#111827'}
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: 'stroke 0.3s ease' }}
        >
          {/* Head Avatar */}
          <circle cx="24" cy="15" r="7" />
          {/* Torso & Shoulders */}
          <path d="M10 39c0-6.5 6-11 14-11s14 4.5 14 11" />
        </svg>
      )
    },
    {
      id: 'tech-visibility',
      title: 'Technology-Enabled Visibility',
      descStart: 'Digital monitoring and reporting for ',
      descHighlight: 'complex programs.',
      renderIcon: (isHovered) => (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          stroke={isHovered ? '#2439ff' : '#111827'}
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: 'stroke 0.3s ease' }}
        >
          {/* Monitor Frame */}
          <rect x="7" y="8" width="34" height="24" rx="3.5" />
          {/* Monitor Stand */}
          <path d="M24 32v6M17 38h14" />
          {/* Bar Chart Bars */}
          <path d="M13 25v-4M19 25v-9M25 25v-5M31 25v-12" />
          {/* Trend Curve & Indicator Dot */}
          <path d="M13 18l6-4 6 5 6-7" />
          <circle cx="31" cy="12" r="2" fill={isHovered ? '#2439ff' : '#111827'} />
        </svg>
      )
    }
  ];

  const coreCapabilities = [
    {
      icon: Factory,
      title: 'Industrial Investment & Policy Advisory',
      descHighlight: 'We support enterprises to establish and scale within policy-driven ecosystems.',
      services: [
        'Policy and incentive framework alignment',
        'Industrial project structuring',
        'Government coordination and approvals',
        'Regulatory and compliance advisory',
        'Program monitoring and documentation'
      ]
    },
    {
      icon: Banknote,
      title: 'Regulatory & Incentive Enablement',
      descHighlight: 'We help enterprises navigate regulations and maximize incentives under state and sectoral policies.',
      services: [
        'Incentive identification & project structuring',
        'DPR / TEV support for approvals',
        'Application management via Single Window',
        'Compliance, documentation, & coordination',
        'Incentive claims & realization support'
      ]
    },
    {
      icon: Workflow,
      title: 'Project Consultancy & Planning',
      descHighlight: 'We ensure structured execution from planning to commissioning.',
      services: [
        'Project planning & feasibility assessment',
        'CAPEX & infrastructure coordination',
        'Stakeholder & vendor management',
        'Implementation monitoring & risk control',
        'Commissioning & operational readiness'
      ]
    }
  ];

  const endToEndServices = [
    {
      title: 'Holistic Support',
      desc: 'Covering technical, financial, regulatory, and execution advisory.',
      icon: Users,
      bg: '#FCE7F3',
      color: '#A855F7'
    },
    {
      title: 'Strategic Outcome',
      desc: 'Designed to create bankable enterprises ready for funding.',
      icon: TrendingUp,
      bg: '#FEF3C7',
      color: '#D97706'
    },
    {
      title: 'Future-Ready',
      desc: 'Built for scalability, sustainability, and alignment with state policy.',
      icon: Cog,
      bg: '#DBEAFE',
      color: '#2563EB'
    }
  ];

  const incentiveItems = [
    {
      num: '01',
      title: 'Capital Investment Subsidy on plant and machinery'
    },
    {
      num: '02',
      title: 'SGST reimbursement for eligible industrial units'
    },
    {
      num: '03',
      title: 'Electricity duty exemptions and power cost incentives'
    },
    {
      num: '04',
      title: 'Employment cost subsidies (EPF/ESI support)'
    },
    {
      num: '05',
      title: 'Interest subsidies and MSME financial support'
    },
    {
      num: '06',
      title: 'Concessional land allotment in industrial parks'
    }
  ];

  return (
    <div className="nuventraa-page-wrapper">
      {/* Page Banner */}
      <PageBanner
        title="Industry"
        titleHighlight="Consulting"
        description="Technology, Policy & Investment Advisory for forward-thinking enterprises and manufacturing hubs."
        breadcrumbCurrent="Industry Consulting"
      />

      {/* =========================================================================
          SECTION 1: TECHNOLOGY, POLICY & INVESTMENT ADVISORY (EXACT MOCKUP MATCH)
          ========================================================================= */}
      <section
        style={{
          padding: 'clamp(3.5rem, 6vw, 5.5rem) 0',
          backgroundColor: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left Content Column */}
            <div>
              {/* Subtitle with exact wave flourish SVG */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '1rem'
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 'clamp(0.85rem, 1.1vw, 0.98rem)',
                    fontWeight: 600,
                    color: '#475569',
                    letterSpacing: '-0.01em'
                  }}
                >
                  Enabling Industrial Growth &amp; Government-Linked Transformation
                </span>

                {/* Nuventraa wave flourish SVG */}
                <svg
                  width="33"
                  height="21"
                  viewBox="0 0 33 21"
                  fill="none"
                  style={{ display: 'inline-block', flexShrink: 0 }}
                >
                  <path
                    d="M-0.117,8.9 H27.036 s5.078-3.073, 0-6.517"
                    stroke="url(#nuventraa-consult-grad)"
                    strokeWidth="2.75"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M-9.991,14.594 H17.352 s5.114,3.027, 0,6.422"
                    stroke="url(#nuventraa-consult-grad)"
                    strokeWidth="2.75"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="nuventraa-consult-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2439ff" />
                      <stop offset="100%" stopColor="#9000ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Main Heading */}
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
                  fontWeight: 800,
                  color: '#08203A',
                  lineHeight: 1.18,
                  margin: '0 0 1.5rem 0',
                  letterSpacing: '-0.02em'
                }}
              >
                Technology, Policy &amp; Investment<br />
                <span
                  style={{
                    color: '#6e5355',
                    display: 'inline-block',
                    position: 'relative'
                  }}
                >
                  Advisory
                </span>
              </h2>

              {/* Paragraph 1 */}
              <p
                style={{
                  fontSize: '1.025rem',
                  color: '#4B5563',
                  lineHeight: 1.75,
                  marginBottom: '1.25rem'
                }}
              >
                Nuventraa operates at the intersection of technology, policy, and execution, helping governments, enterprises, and emerging industries build scalable digital platforms and policy-aligned industrial initiatives.
              </p>

              {/* Paragraph 2 */}
              <p
                style={{
                  fontSize: '1.025rem',
                  color: '#4B5563',
                  lineHeight: 1.75,
                  margin: 0
                }}
              >
                Combining technology implementation, strategic advisory, and structured program execution, we enable organizations to navigate regulatory environments and develop future-ready digital ecosystems, evolving from a technology solutions provider into a strategic transformation partner for digital innovation and industrial growth.
              </p>
            </div>

            {/* Right Column: Illustration Graphic from Screenshot */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <img
                src="/assets/nuventraa/industry-consulting-illustration.png"
                alt="Technology, Policy & Investment Advisory Illustration"
                style={{
                  width: '100%',
                  maxWidth: '580px',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 15px 35px rgba(8, 32, 58, 0.08))',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OUR CORE CAPABILITIES (EXACT SCREENSHOT 1 MATCH)
          ========================================================================= */}
      <section
        style={{
          padding: 'clamp(3.5rem, 6vw, 5.5rem) 0',
          backgroundColor: '#F8FAFC',
          borderTop: '1px solid #EEF2F6',
          borderBottom: '1px solid #EEF2F6'
        }}
      >
        <div className="container">
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: '#08203A',
                marginBottom: '0.5rem'
              }}
            >
              Our Core Capabilities
            </h2>
            {/* Dashed underline */}
            <div
              style={{
                width: '160px',
                height: '0',
                borderBottom: '2px dashed #94A3B8',
                margin: '0.85rem auto 0 auto'
              }}
            />
          </div>

          {/* 3 Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '2rem'
            }}
          >
            {coreCapabilities.map((cap, i) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '14px',
                    padding: '2.5rem 2rem',
                    boxShadow: '0 8px 30px rgba(8, 32, 58, 0.05)',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 16px 35px rgba(36, 57, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(8, 32, 58, 0.05)';
                  }}
                >
                  {/* Square pill icon badge */}
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '12px',
                      backgroundColor: '#F1F5F9',
                      color: '#475569',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <IconComp size={26} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: '#08203A',
                      lineHeight: 1.3,
                      marginBottom: '1rem'
                    }}
                  >
                    {cap.title}
                  </h3>

                  {/* Highlight sentence */}
                  <p
                    style={{
                      fontSize: '0.925rem',
                      color: '#334155',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {cap.descHighlight}
                  </p>

                  {/* Key Services Title */}
                  <div
                    style={{
                      fontWeight: 700,
                      color: '#08203A',
                      fontSize: '0.925rem',
                      marginBottom: '0.85rem'
                    }}
                  >
                    Key Services
                  </div>

                  {/* Bullet list with arrow */}
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.55rem',
                      fontSize: '0.875rem',
                      color: '#475569',
                      lineHeight: 1.55
                    }}
                  >
                    {cap.services.map((srv, sIdx) => (
                      <li key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                        <span style={{ color: '#08203A', fontWeight: 700, flexShrink: 0 }}>➤</span>
                        <span>{srv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OUR INDUSTRIAL ADVISORY FRAMEWORK (EXACT SCREENSHOT 2 & 5)
          ========================================================================= */}
      <section
        style={{
          padding: 'clamp(3.5rem, 6vw, 5.5rem) 0',
          backgroundColor: '#FFFFFF'
        }}
      >
        <div className="container">
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 2.5rem auto' }}>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: '#08203A',
                marginBottom: '0.5rem'
              }}
            >
              Our Industrial Advisory Framework
            </h2>
            {/* Dashed underline */}
            <div
              style={{
                width: '180px',
                height: '0',
                borderBottom: '2px dashed #94A3B8',
                margin: '0.85rem auto 1.25rem auto'
              }}
            />
            <p style={{ fontSize: '1.05rem', color: '#475569', margin: 0 }}>
              Nuventraa follows a <strong>structured 5-step advisory methodology</strong> for industrial and investment initiatives.
            </p>
          </div>

          {/* Centered Roadmap Graphic matching Image 5 */}
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              boxShadow: '0 12px 35px rgba(8, 32, 58, 0.06)',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#FFFFFF',
              border: '1px solid #EEF2F6',
              padding: 'clamp(1rem, 2.5vw, 2rem)'
            }}
          >
            <img
              src="/assets/nuventraa/industrial-advisory-framework.png"
              alt="Our Industrial Advisory Framework 5-Step Methodology"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: END-TO-END CONSULTING SERVICES (EXACT SCREENSHOT 3 MATCH)
          ========================================================================= */}
      <section
        style={{
          padding: 'clamp(3.5rem, 6vw, 5.5rem) 0',
          backgroundColor: '#F8FAFC',
          borderTop: '1px solid #EEF2F6',
          borderBottom: '1px solid #EEF2F6'
        }}
      >
        <div className="container">
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem auto' }}>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: '#08203A',
                marginBottom: '0.5rem'
              }}
            >
              End-to-End Consulting Services
            </h2>
            {/* Dashed underline */}
            <div
              style={{
                width: '160px',
                height: '0',
                borderBottom: '2px dashed #94A3B8',
                margin: '0.85rem auto 1.25rem auto'
              }}
            />
            <p style={{ fontSize: '1.025rem', color: '#64748B', lineHeight: 1.65, maxWidth: '750px', margin: '0 auto' }}>
              We provide complete project support from initial concept to stable production, ensuring your venture is technically sound, financially viable, and regulatory compliant.
            </p>
          </div>

          {/* 3 Feature Boxes */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '2rem'
            }}
          >
            {endToEndServices.map((card, i) => {
              const IconComp = card.icon;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '14px',
                    padding: '3rem 2rem',
                    textAlign: 'center',
                    boxShadow: '0 8px 30px rgba(8, 32, 58, 0.04)',
                    border: '1px solid #EEF2F6',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 16px 35px rgba(36, 57, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(8, 32, 58, 0.04)';
                  }}
                >
                  {/* Circular pastel icon badge */}
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: card.bg,
                      color: card.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)'
                    }}
                  >
                    <IconComp size={28} />
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: '#08203A',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.925rem',
                      color: '#64748B',
                      lineHeight: 1.6,
                      margin: 0
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: GOVERNMENT INCENTIVE & POLICY ALIGNMENT (EXACT SCREENSHOT 4)
          ========================================================================= */}
      <section
        style={{
          padding: 'clamp(3.5rem, 6vw, 5.5rem) 0',
          backgroundColor: '#FFFFFF'
        }}
      >
        <div className="container">
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 2.5rem auto' }}>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: '#08203A',
                marginBottom: '1rem'
              }}
            >
              Government Incentive &amp; Policy Alignment
            </h2>

            <p style={{ fontSize: '1.025rem', color: '#4B5563', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Nuventraa supports enterprises in <strong>identifying and leveraging incentives offered by the Government of Odisha</strong> for setting up or expanding industrial operations. Through structured advisory and coordination, we help businesses align their investments with state policies such as <strong>IPR-2022</strong> and other sector-specific industrial policies.
            </p>

            <h4
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#08203A',
                margin: 0
              }}
            >
              Industries in Odisha can benefit from incentives including:
            </h4>
          </div>

          {/* 6 Grid Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '1.75rem',
              marginBottom: '3rem'
            }}
          >
            {incentiveItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '1.75rem 1.5rem',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 18px rgba(8, 32, 58, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 25px rgba(36, 57, 255, 0.08)';
                  e.currentTarget.style.borderColor = '#2439ff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(8, 32, 58, 0.04)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                {/* Arrow in circle with number */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#6e5355',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    fontFamily: "'Poppins', sans-serif",
                    flexShrink: 0
                  }}
                >
                  <ArrowRightCircle size={22} color="#6e5355" />
                  <span>{item.num}</span>
                </div>

                {/* Title */}
                <h4
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#1E293B',
                    lineHeight: 1.45,
                    margin: 0
                  }}
                >
                  {item.title}
                </h4>
              </div>
            ))}
          </div>

          {/* Footer paragraph under grid */}
          <div
            style={{
              maxWidth: '850px',
              margin: '0 auto',
              textAlign: 'center',
              padding: '1.75rem 2rem',
              backgroundColor: '#F8FAFC',
              borderRadius: '12px',
              border: '1px solid #E2E8F0'
            }}
          >
            <p style={{ fontSize: '0.975rem', color: '#4B5563', lineHeight: 1.7, margin: 0 }}>
              Nuventraa assists organizations in <strong>assessing eligibility, structuring projects, preparing documentation, and coordinating with government departments</strong>, enabling businesses to maximize available incentives and streamline the approval process.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: THE NUVENTRAA ADVANTAGE (EXACT SCREENSHOT MATCH - MINIMAL HEIGHT)
          ========================================================================= */}
      <section
        style={{
          padding: 'clamp(3rem, 4.5vw, 4.5rem) 0',
          backgroundColor: '#FFFFFF',
          position: 'relative'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto clamp(2rem, 3.2vw, 2.75rem) auto' }}>

            {/* Main Title matching screenshot */}
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(2.1rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                color: '#111827',
                lineHeight: 1.2,
                margin: '0 0 0.85rem 0',
                letterSpacing: '-0.02em'
              }}
            >
              The Nuventraa Advantage
            </h2>

            {/* Subtitle with exact wording and strong emphasis from screenshot */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                color: '#4B5563',
                lineHeight: 1.6,
                margin: 0
              }}
            >
              Organizations choose Nuventraa for our{' '}
              <strong style={{ color: '#111827', fontWeight: 700 }}>
                unique combination of policy understanding and technology expertise
              </strong>.
            </p>
          </div>

          {/* 2x2 Grid of 4 Minimal Height Advantage Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
              gap: 'clamp(1.5rem, 2vw, 2rem)'
            }}
          >
            {NuventraaAdvantage.map((item, index) => {
              const isHovered = hoveredAdvantage === index;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredAdvantage(index)}
                  onMouseLeave={() => setHoveredAdvantage(null)}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    padding: 'clamp(1.75rem, 2.6vw, 2.25rem) clamp(1.5rem, 2.8vw, 2.25rem)',
                    border: '1px solid rgba(226, 232, 240, 0.7)',
                    boxShadow: isHovered
                      ? '0 16px 36px rgba(0, 0, 0, 0.08)'
                      : '0 8px 24px rgba(0, 0, 0, 0.04)',
                    transform: isHovered ? 'translateY(-4px)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    cursor: 'default'
                  }}
                >
                  {/* Clean line icon sitting directly on the card */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                      transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    {item.renderIcon(isHovered)}
                  </div>

                  {/* Card Title */}
                  <h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 'clamp(1.15rem, 1.4vw, 1.25rem)',
                      fontWeight: 700,
                      color: isHovered ? '#2439ff' : '#111827',
                      lineHeight: 1.3,
                      margin: '0 0 0.5rem 0',
                      transition: 'color 0.25s ease'
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Card Description with bold keywords matching screenshot */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'clamp(0.875rem, 1.05vw, 0.95rem)',
                      color: '#6B7280',
                      lineHeight: 1.55,
                      margin: 0,
                      maxWidth: '420px'
                    }}
                  >
                    {item.descStart}
                    <strong style={{ color: '#1F2937', fontWeight: 600 }}>
                      {item.descHighlight}
                    </strong>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: ENGAGEMENT MODELS (EXACT SCREENSHOT MATCH)
          ========================================================================= */}
      <section
        style={{
          padding: 'clamp(4.5rem, 6.5vw, 6.5rem) 0',
          backgroundColor: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Engagement Models Graphic */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <img
                src="/assets/nuventraa/engagement-models-illustration.png"
                alt="Engagement Models Illustration"
                style={{
                  width: '100%',
                  maxWidth: '560px',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 15px 35px rgba(8, 32, 58, 0.08))',
                  display: 'block'
                }}
              />
            </div>

            {/* Right Column: Heading, Subtitle & 5 Models List */}
            <div>
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 'clamp(2.2rem, 3.8vw, 2.9rem)',
                  fontWeight: 800,
                  color: '#08203A',
                  lineHeight: 1.2,
                  margin: '0 0 1rem 0',
                  letterSpacing: '-0.02em'
                }}
              >
                Engagement Models
              </h2>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(1rem, 1.2vw, 1.075rem)',
                  color: '#475569',
                  lineHeight: 1.7,
                  margin: '0 0 2rem 0'
                }}
              >
                Nuventraa offers <strong style={{ color: '#08203A', fontWeight: 700 }}>flexible engagement models</strong> for both digital transformation and industrial initiatives.
              </p>

              {/* List of 5 items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                {engagementModels.map((item, idx) => {
                  const isHovered = hoveredEngagement === idx;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredEngagement(idx)}
                      onMouseLeave={() => setHoveredEngagement(null)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '14px',
                        padding: '8px 12px',
                        borderRadius: '10px',
                        backgroundColor: isHovered ? 'rgba(36, 57, 255, 0.04)' : 'transparent',
                        transform: isHovered ? 'translateX(6px)' : 'none',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      {/* Circular arrow icon matching far fa-arrow-alt-circle-right */}
                      <div
                        style={{
                          flexShrink: 0,
                          width: '24px',
                          height: '24px',
                          marginTop: '2px',
                          color: isHovered ? '#2439ff' : '#475569',
                          transition: 'color 0.25s ease'
                        }}
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 16 16 12 12 8" />
                          <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                      </div>

                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 'clamp(0.95rem, 1.15vw, 1.025rem)',
                          lineHeight: 1.6,
                          color: '#475569'
                        }}
                      >
                        <strong style={{ color: isHovered ? '#2439ff' : '#08203A', fontWeight: 700, transition: 'color 0.25s ease' }}>
                          {item.title}
                        </strong>
                        {' – '}
                        <span>{item.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: LEADERSHIP GUIDED BY DOMAIN & TECHNICAL EXPERTISE (EXACT SCREENSHOT MATCH)
          ========================================================================= */}
      <section
        style={{
          padding: 'clamp(4.5rem, 6.5vw, 6.5rem) 0',
          backgroundColor: '#F8FAFC',
          borderTop: '1px solid #EEF2F6',
          borderBottom: '1px solid #EEF2F6',
          position: 'relative'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto clamp(2.5rem, 4.5vw, 3.75rem) auto' }}>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(2.2rem, 3.8vw, 2.9rem)',
                fontWeight: 800,
                color: '#08203A',
                lineHeight: 1.25,
                margin: 0,
                letterSpacing: '-0.02em'
              }}
            >
              Leadership Guided By Domain &amp; Technical Expertise
            </h2>
          </div>

          {/* Team Cards Grid / Centered Single Leader Card */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              maxWidth: '380px',
              margin: '0 auto',
              width: '100%'
            }}
          >
            {leadershipTeam.map((leader, idx) => {
              const isHovered = hoveredLeader === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredLeader(idx)}
                  onMouseLeave={() => setHoveredLeader(null)}
                  style={{
                    width: '100%',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: `1px solid ${isHovered ? 'rgba(36, 57, 255, 0.35)' : '#E2E8F0'}`,
                    boxShadow: isHovered
                      ? '0 20px 45px -10px rgba(36, 57, 255, 0.16), 0 4px 16px rgba(8, 32, 58, 0.04)'
                      : '0 8px 24px rgba(8, 32, 58, 0.04)',
                    transform: isHovered ? 'translateY(-8px)' : 'none',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                  }}
                >
                  {/* Top glowing accent border on hover */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3.5px',
                      background: 'linear-gradient(90deg, #2439ff 0%, #9000ff 100%)',
                      opacity: isHovered ? 1 : 0,
                      zIndex: 3,
                      transition: 'opacity 0.35s ease'
                    }}
                  />

                  {/* Image Container */}
                  <div
                    style={{
                      width: '100%',
                      height: '310px',
                      overflow: 'hidden',
                      backgroundColor: '#F1F5F9',
                      position: 'relative'
                    }}
                  >
                    <img
                      src={leader.img}
                      alt={leader.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.4s ease'
                      }}
                    />
                  </div>

                  {/* Meta details */}
                  <div
                    style={{
                      padding: '1.75rem 1.5rem',
                      textAlign: 'center',
                      position: 'relative',
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      backgroundColor: '#FFFFFF'
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: isHovered ? '#2439ff' : '#08203A',
                        lineHeight: 1.3,
                        margin: '0 0 0.5rem 0',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {leader.name}
                    </h4>

                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.925rem',
                        color: '#64748B',
                        lineHeight: 1.5,
                        maxWidth: '260px',
                        margin: '0 auto'
                      }}
                    >
                      {leader.role}
                    </div>

                    {/* Exact folded corner / beveled shape from screenshot (item--shape) */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '50px',
                        height: '50px',
                        backgroundColor: isHovered ? 'rgba(36, 57, 255, 0.08)' : '#F1F5F9',
                        clipPath: 'polygon(0 0, 0 100%, 100% 100%)',
                        transition: 'background-color 0.3s ease',
                        pointerEvents: 'none'
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
