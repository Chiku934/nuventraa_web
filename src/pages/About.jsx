import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  Play,
  ChevronLeft,
  ChevronRight,
  Globe,
  Sparkles,
  Trophy,
  Star,
  ShieldCheck,
  BarChart3,
  Users,
  Settings,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Factory,
  Banknote,
  Workflow
} from 'lucide-react';

import PageBanner from '../components/PageBanner';
import './NuventraaHomepage.css';

export default function About() {
  const [aboutTab, setAboutTab] = useState('mission');

  // =========================================================================
  // SECTION 2: 5 MILESTONES DATA & RESPONSIVE SLIDER STATE
  // =========================================================================
  const milestones = [
    {
      year: '2019',
      title: 'Advisory Practice Founded',
      desc: 'Established with a focus on institutional governance, project planning, and industrial development advisory.',
      img: '/assets/consulting-boardroom.jpg'
    },
    {
      year: '2021',
      title: 'Single Window Liaison Network',
      desc: 'Expanded single-window processing networks across IPICOL, IDCO, and state industrial facilitation committees.',
      img: '/assets/audit-desk.jpg'
    },
    {
      year: '2022',
      title: 'Policy Structuring & IPR-2022',
      desc: 'Engineered specialized audit frameworks for Capital Investment Subsidy (CIS) and Net SGST under Odisha IPR-2022 & OATTP-2022.',
      img: '/assets/textile-plant.jpg'
    },
    {
      year: '2023',
      title: '100+ Industrial Approvals',
      desc: 'Surpassed 100 successful statutory clearances, OSPCB CTE/CTO consents, and incentive sanctions across manufacturing units.',
      img: '/assets/spcb-environmental.jpg'
    },
    {
      year: '2025',
      title: 'Turnkey Treasury Realization',
      desc: 'Instituted full lifecycle tracking ensuring client subsidies convert seamlessly from sanction letters to direct bank credits.',
      img: '/assets/heavy-steel-plant.jpg'
    }
  ];

  const [historyIndex, setHistoryIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1200) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxHistoryIndex = Math.max(0, milestones.length - slidesToShow);

  const prevHistorySlide = () => {
    setHistoryIndex((prev) => (prev <= 0 ? maxHistoryIndex : prev - 1));
  };

  const nextHistorySlide = () => {
    setHistoryIndex((prev) => (prev >= maxHistoryIndex ? 0 : prev + 1));
  };

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', width: '100%' }}>
      {/* =========================================================================
          PAGE BANNER
          ========================================================================= */}
      <PageBanner
        breadcrumbCurrent="About Us"
        badge="Company Overview"
        title="About"
        titleHighlight="Nuventraa Industrial Advisory"
        description="Empowering modern industrial enterprises through strategic policy advisory, single-window clearances, and institutional governance."
      />

      {/* =========================================================================
          SECTION 1: ABOUT US
          ========================================================================= */}
      <section className="nuventraa-about-v1-section">
        <div className="container">
          <div className="nuventraa-about-v1-grid">

            {/* Left Column */}
            <div>
              <div className="nuventraa-about-v1-subtitle">
                <span>About Nuventraa</span>
                <svg
                  className="svg-right"
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="21"
                  viewBox="0 0 33 21"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="nuventraa-about-svg-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2439ff" />
                      <stop offset="100%" stopColor="#9000ff" />
                    </linearGradient>
                  </defs>
                  <g>
                    <path
                      d="M-0.117,8.9H27.036s5.078-3.073,0-6.517"
                      stroke="url(#nuventraa-about-svg-grad)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M-9.991,14.594H17.352s5.114,3.027,0,6.422"
                      stroke="url(#nuventraa-about-svg-grad)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </div>

              <h2 className="nuventraa-about-v1-title">
                Your Strategic Partner for{' '}
                <cite className="ct-text-highlight">Industrial Growth &amp; Policy Alignment</cite>
              </h2>

              <div className="nuventraa-about-v1-lead-wrap">
                <span className="nuventraa-about-v1-lead-dot" aria-hidden="true" />
                <p className="nuventraa-about-v1-lead-text">
                  At <strong>Nuventraa</strong>, we operate at the intersection of technology, industrial policy, and execution to help enterprises navigate regulatory environments and unlock government incentives.
                </p>
              </div>

              {/* Interactive Tabs: Our Mission & Our Vision */}
              <div className="nuventraa-about-v1-tabs">
                <div className="nuventraa-about-v1-tab-nav" role="tablist">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={aboutTab === 'mission'}
                    className={`nuventraa-about-v1-tab-btn ${aboutTab === 'mission' ? 'active' : ''}`}
                    onClick={() => setAboutTab('mission')}
                  >
                    Our Mission
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={aboutTab === 'vision'}
                    className={`nuventraa-about-v1-tab-btn ${aboutTab === 'vision' ? 'active' : ''}`}
                    onClick={() => setAboutTab('vision')}
                  >
                    Our Vision
                  </button>
                </div>

                <div className="nuventraa-about-v1-tab-body">
                  {aboutTab === 'mission' ? (
                    <p style={{ margin: 0 }}>
                      To empower enterprises by delivering structured statutory compliance, defect-free single-window documentation, and end-to-end execution from project feasibility to treasury disbursements.
                    </p>
                  ) : (
                    <p style={{ margin: 0 }}>
                      To be the premier industrial transformation and policy advisory partner, fostering sustainable manufacturing, clean regulatory governance, and high-impact sectoral growth.
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Link to="/contact" className="nuventraa-about-v1-btn">
                  <span>Consult our team</span>
                  <span className="nuventraa-about-v1-btn-badge" aria-hidden="true">
                    <Play size={14} fill="#08203A" color="#08203A" style={{ marginLeft: '2px' }} />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="nuventraa-about-v1-banner">
              <div className="nuventraa-about-v1-ring" aria-hidden="true" />

              <div className="nuventraa-about-v1-img-wrap">
                {/* Floating Experience Counter */}
                <div className="nuventraa-about-v1-counter">
                  <div className="nuventraa-about-v1-counter-num">42+</div>
                  <div className="nuventraa-about-v1-counter-label">
                    years of<br />advisory wisdom
                  </div>
                </div>

                {/* Center Photo */}
                <img
                  src="/assets/consulting-boardroom.jpg"
                  alt="Nuventraa Industrial Consulting advisory boardroom session"
                  className="nuventraa-about-v1-img"
                />

                {/* Floating Bottom Solution Card */}
                <div className="nuventraa-about-v1-solution-card">
                  <div className="nuventraa-about-v1-solution-icon">
                    <Award size={30} strokeWidth={2.2} />
                  </div>
                  <h3 className="nuventraa-about-v1-solution-title">
                    End-to-End Industrial Regulatory Advisory
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: TIMELINE / MILESTONES
          ========================================================================= */}
      <section className="nuventraa-history-section">
        <div className="container" style={{ position: 'relative' }}>

          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            <div className="ct-sub-title style-line-leftright">
              <span>Our Evolution</span>
            </div>
            <h2 className="nuventraa-section-title" style={{ margin: 0 }}>
              Milestones in <cite className="ct-text-highlight">Industrial Advisory</cite>
            </h2>
          </div>

          <div className="nuventraa-history-slider-wrap">
            <div className="nuventraa-history-dotted-line" aria-hidden="true" />

            <button
              type="button"
              className="nuventraa-history-nav-btn nuventraa-history-nav-prev"
              onClick={prevHistorySlide}
              aria-label="Previous Milestones"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="nuventraa-history-nav-btn nuventraa-history-nav-next"
              onClick={nextHistorySlide}
              aria-label="Next Milestones"
            >
              <ChevronRight size={18} />
            </button>

            <div className="nuventraa-history-viewport">
              <div
                className="nuventraa-history-track"
                style={{
                  transform: `translateX(-${historyIndex * (100 / slidesToShow)}%)`
                }}
              >
                {milestones.map((item, idx) => (
                  <div key={idx} className="nuventraa-history-slide">
                    <div className="nuventraa-history-item">
                      <div className="nuventraa-history-image-wrap">
                        <div
                          className="nuventraa-history-image-mask"
                          style={{ backgroundImage: `url(${item.img})` }}
                          title={item.title}
                        />
                      </div>

                      <div className="nuventraa-history-arrow">
                        <span>{item.year}</span>
                      </div>

                      <h3 className="nuventraa-history-title">{item.title}</h3>
                      <p className="nuventraa-history-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CORE EXECUTION PILLARS
          ========================================================================= */}
      <section className="section-full section-py" style={{ background: '#F8FAFC', borderTop: '1px solid #EEF2F6', borderBottom: '1px solid #EEF2F6' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 2.75rem' }}>
            <div className="ct-sub-title style-line-leftright">
              <span>Why Choose Us</span>
            </div>
            <h2 className="nuventraa-section-title" style={{ margin: 0 }}>
              The Nuventraa <cite className="ct-text-highlight">Advantage</cite>
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.95rem', margin: '0.5rem auto 0' }}>
              Delivering predictable outcomes through institutional expertise, defect-free documentation, and transparent governance.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {[
              {
                icon: <Factory size={28} color="#2439ff" />,
                title: 'Policy + Technology Expertise',
                desc: 'Operating at the intersection of digital monitoring platforms and state institutional frameworks to ensure flawless alignment.'
              },
              {
                icon: <Workflow size={28} color="#9000ff" />,
                title: 'Structured Execution',
                desc: 'Milestone-driven delivery with rigorous audit scrutiny, eliminating departmental queries and procedural rejections.'
              },
              {
                icon: <Banknote size={28} color="#C59B27" />,
                title: 'Maximized Claim Quantum',
                desc: 'Deep knowledge of gazetted incentives ensuring client enterprises realize 100% of their legal statutory entitlements.'
              }
            ].map((adv, idx) => (
              <div
                key={idx}
                className="nuventraa-card"
                style={{
                  padding: '2.25rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  background: '#FFFFFF'
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '12px',
                    background: 'rgba(36, 57, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {adv.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F1D33', margin: 0 }}>
                  {adv.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* =========================================================================
          SECTION 5: CLIENT RECOGNITION
          ========================================================================= */}
      <section className="nuventraa-clients-section" style={{ background: '#F8FAFC', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '0.8rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Trusted by Forward-Thinking Manufacturing Enterprises
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(2rem, 5vw, 4rem)', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 800, color: '#475569', fontSize: '1.1rem', letterSpacing: '-0.01em' }}>Chirag Industries</span>
            <span style={{ color: '#CBD5E1' }}>•</span>
            <span style={{ fontWeight: 800, color: '#475569', fontSize: '1.1rem', letterSpacing: '-0.01em' }}>Highland Agro</span>
            <span style={{ color: '#CBD5E1' }}>•</span>
            <span style={{ fontWeight: 800, color: '#475569', fontSize: '1.1rem', letterSpacing: '-0.01em' }}>Panda Infrastructures</span>
            <span style={{ color: '#CBD5E1' }}>•</span>
            <span style={{ fontWeight: 800, color: '#475569', fontSize: '1.1rem', letterSpacing: '-0.01em' }}>Kalinga Textile Hub</span>
          </div>
        </div>
      </section>

    </div>
  );
}
