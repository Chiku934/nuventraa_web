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
  ArrowRight
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
      title: 'Company Founded',
      desc: 'Nuventraa was established with a vision to offer reliable, scalable and specialized software services.',
      img: '/assets/nuventraa/image-4.jpg'
    },
    {
      year: '2019',
      title: 'Chambre Launched',
      desc: 'Introduced Chambré, a hotel task management system to streamline hospitality operations.',
      img: '/assets/nuventraa/image-8.jpg'
    },
    {
      year: '2021',
      title: 'Cruzo Launched',
      desc: 'Launched Cruzo, a white-labeled ordering and delivery management platform for retail and food businesses.',
      img: '/assets/nuventraa/image-7.jpg'
    },
    {
      year: '2022',
      title: '100+ Clients Milestone',
      desc: 'Crossed 100 active clients across India and abroad — a hallmark of trust and product maturity.',
      img: '/assets/nuventraa/image-6.jpg'
    },
    {
      year: '2025',
      title: 'Co-optive Launched',
      desc: 'Rolled out Co-optive, an advanced fintech solution designed for financial operations.',
      img: '/assets/nuventraa/image-5.jpg'
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

  // =========================================================================
  // SECTION 3: 4 TEAM MEMBERS DATA (Exact Nuventraa Leadership)
  // =========================================================================
  const teamMembers = [
    {
      name: 'Gaurav Dash',
      role: 'Founder & CEO',
      desc: 'Drives the company’s vision and growth with a passion for building impactful digital products.',
      img: '/assets/nuventraa/gaurav-dash.jpg'
    },
    {
      name: 'Rahul Panda',
      role: 'Co-founder & CTO',
      desc: 'Spearheads technology architecture, cloud scalability, and next-generation engineering strategies.',
      img: '/assets/nuventraa/rahul-panda.jpg'
    },
    {
      name: 'Sunita Rath',
      role: 'Business Head',
      desc: 'Manages client relationships and operations, aligning business strategy with customer success.',
      img: '/assets/nuventraa/sunita-rath.jpg'
    },
    {
      name: 'Rakesh Acharya',
      role: 'Development Head',
      desc: 'Oversees engineering teams and ensures quality delivery across all software projects.',
      img: '/assets/nuventraa/rakesh-acharya.jpg'
    }
  ];

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', width: '100%' }}>
      {/* =========================================================================
          PAGE BANNER (Clean Minimalist Architectural Backdrop)
          ========================================================================= */}
      <PageBanner
        breadcrumbCurrent="About Us"
        badge="Company Overview"
        title="About"
        titleHighlight="Nuventraa Softtech"
        description="Empowering modern enterprises through innovative software products, agile digital engineering, and scalable cloud solutions."
      />

      {/* =========================================================================
          SECTION 1: ABOUT US (Exact Nuventraa Style, Tabs, Badge & Animations)
          ========================================================================= */}
      <section className="nuventraa-about-v1-section">
        <div className="container">
          <div className="nuventraa-about-v1-grid">

            {/* Left Column: Subtitle, Heading, Lead Bullet, Tabs, More About Us Button */}
            <div>
              {/* Subtitle with curved dual wave line */}
              <div className="nuventraa-about-v1-subtitle">
                <span>About us</span>
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

              {/* Main Heading with Gradient Highlight */}
              <h2 className="nuventraa-about-v1-title">
                Your Technology Partner for{' '}
                <cite className="ct-text-highlight">Transformation &amp; Scalability</cite>
              </h2>

              {/* Lead Paragraph with Left Bullet Dot */}
              <div className="nuventraa-about-v1-lead-wrap">
                <span className="nuventraa-about-v1-lead-dot" aria-hidden="true" />
                <p className="nuventraa-about-v1-lead-text">
                  At <strong>Nuventraa</strong>, we deliver robust software products and solutions by combining cutting-edge technology with a passion for innovation to guide businesses toward brighter horizons.
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
                      To empower businesses by providing innovative, reliable, and scalable software solutions, driven by customer-centric values and a focus on excellence.
                    </p>
                  ) : (
                    <p style={{ margin: 0 }}>
                      To be a global leader in delivering transformative software solutions that revolutionize industries and drive sustainable growth.
                    </p>
                  )}
                </div>
              </div>

              {/* Pill Button with Circular Play Arrow Badge */}
              <div>
                <Link to="/contact" className="nuventraa-about-v1-btn">
                  <span>More about us</span>
                  <span className="nuventraa-about-v1-btn-badge" aria-hidden="true">
                    <Play size={14} fill="#08203A" color="#08203A" style={{ marginLeft: '2px' }} />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Composition with Bouncing Ring, 6 Years Badge & Solution Card */}
            <div className="nuventraa-about-v1-banner">
              {/* Bouncing Background Ring */}
              <div className="nuventraa-about-v1-ring" aria-hidden="true" />

              <div className="nuventraa-about-v1-img-wrap">
                {/* Floating Experience Counter (Top-Left) */}
                <div className="nuventraa-about-v1-counter">
                  {/* 3x3 Dot Grid Pattern */}
                  <svg
                    className="nuventraa-about-v1-counter-dots"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="4" cy="4" r="2" fill="white" />
                    <circle cx="13" cy="4" r="2" fill="white" />
                    <circle cx="22" cy="4" r="2" fill="white" />
                    <circle cx="4" cy="13" r="2" fill="white" />
                    <circle cx="13" cy="13" r="2" fill="white" />
                    <circle cx="22" cy="13" r="2" fill="white" />
                    <circle cx="4" cy="22" r="2" fill="white" />
                    <circle cx="13" cy="22" r="2" fill="white" />
                    <circle cx="22" cy="22" r="2" fill="white" />
                  </svg>

                  <div className="nuventraa-about-v1-counter-num">6</div>
                  <div className="nuventraa-about-v1-counter-label">
                    years of<br />experience
                  </div>
                </div>

                {/* Center Photo */}
                <img
                  src="/assets/nuventraa/modern-equipped-computer-lab-scaled-840x630.jpg"
                  alt="Nuventraa Softtech software development engineers in computer lab"
                  className="nuventraa-about-v1-img"
                />

                {/* Floating Bottom Solution Card */}
                <div className="nuventraa-about-v1-solution-card">
                  <div className="nuventraa-about-v1-solution-icon">
                    <Award size={30} strokeWidth={2.2} />
                  </div>
                  <h3 className="nuventraa-about-v1-solution-title">
                    Robust Software Development Solutions
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: TIMELINE / MILESTONES (Exact Nuventraa Carousel)
          ========================================================================= */}
      <section className="nuventraa-history-section">
        <div className="container" style={{ position: 'relative' }}>

          <div className="nuventraa-history-slider-wrap">
            {/* Horizontal Connecting Dotted Line */}
            <div className="nuventraa-history-dotted-line" aria-hidden="true" />

            {/* Navigation Arrows */}
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

            {/* Carousel Viewport & Sliding Track */}
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
                      {/* Pin Masked Image */}
                      <div className="nuventraa-history-image-wrap">
                        <div
                          className="nuventraa-history-image-mask"
                          style={{ backgroundImage: `url(${item.img})` }}
                          title={item.title}
                        />
                      </div>

                      {/* Arrow Ribbon Badge with Year */}
                      <div className="nuventraa-history-arrow">
                        <span>{item.year}</span>
                      </div>

                      {/* Title & Description */}
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
          SECTION 3: TEAM MEMBERS (Passionate Personalities, Versatile Brains)
          ========================================================================= */}
      <section className="nuventraa-team-section">
        <div className="container">

          {/* Section Header */}
          <div className="nuventraa-team-header">
            {/* Subtitle with curved dual wave line on left and right */}
            <div className="nuventraa-team-subtitle">
              <svg
                className="svg-left"
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="21"
                viewBox="0 0 33 21"
                aria-hidden="true"
              >
                <g transform="scale(-1, 1) translate(-33, 0)">
                  <path
                    d="M-0.117,8.9H27.036s5.078-3.073,0-6.517"
                    stroke="url(#nuventraa-team-svg-grad)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M-9.991,14.594H17.352s5.114,3.027,0,6.422"
                    stroke="url(#nuventraa-team-svg-grad)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </g>
              </svg>

              <span>Team Member</span>

              <svg
                className="svg-right"
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="21"
                viewBox="0 0 33 21"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="nuventraa-team-svg-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2439ff" />
                    <stop offset="100%" stopColor="#9000ff" />
                  </linearGradient>
                </defs>
                <path
                  d="M-0.117,8.9H27.036s5.078-3.073,0-6.517"
                  stroke="url(#nuventraa-team-svg-grad)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M-9.991,14.594H17.352s5.114,3.027,0,6.422"
                  stroke="url(#nuventraa-team-svg-grad)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Main Section Title */}
            <h2 className="nuventraa-team-title">
              Passionate Personalities,<br />
              <cite className="ct-text-highlight">Versatile</cite> Brains
            </h2>
          </div>

          {/* 4 Team Member Cards */}
          <div className="nuventraa-team-grid">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="nuventraa-team-card">
                <div className="nuventraa-team-card-inner">
                  {/* Photo */}
                  <img
                    src={member.img}
                    alt={`${member.name} - ${member.role}`}
                    className="nuventraa-team-img"
                  />

                  {/* Hover Overlay with Description */}
                  <div className="nuventraa-team-overlay">
                    <p className="nuventraa-team-desc">{member.desc}</p>
                  </div>

                  {/* Diagonal Cut Meta Plaque */}
                  <div className="nuventraa-team-meta">
                    <h3 className="nuventraa-team-name">{member.name}</h3>
                    <p className="nuventraa-team-role">{member.role}</p>
                  </div>
                </div>

                {/* Floating Social Icons Bar */}
                <div className="nuventraa-team-social" aria-label={`Social links for ${member.name}`}>
                  <a href="#facebook" aria-label="Facebook">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#twitter" aria-label="Twitter">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a href="#web" aria-label="Website">
                    <Globe size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: SECTORAL ADVISORY LEADERSHIP (MR. K. K. HOTA SHOWCASE)
          ========================================================================= */}
      <section
        className="section-full"
        style={{
          background: '#F8FAFC url("/assets/leadership-bg.jpg") no-repeat center center',
          backgroundSize: 'cover',
          borderTop: '1px solid rgba(226, 232, 240, 0.8)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
          padding: 'clamp(3rem, 5vw, 4.5rem) 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(1.5rem, 3vw, 2.25rem)' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(197, 155, 39, 0.45)',
                padding: '0.25rem 0.85rem',
                borderRadius: '999px',
                fontSize: '0.725rem',
                fontWeight: 800,
                color: '#886411',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.5rem',
                boxShadow: '0 2px 6px rgba(197, 155, 39, 0.08)'
              }}
            >
              <Sparkles size={12} color="#C59B27" />
              <span>Institutional Policy &amp; Governance</span>
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.75rem, 2.6vw, 2.3rem)',
                color: '#0F2744',
                fontWeight: 800,
                marginBottom: '0.45rem',
                lineHeight: 1.2
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

            <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: 1.55, maxWidth: '680px', margin: '0 auto' }}>
              Guiding industrial enterprises with senior institutional wisdom, central ministry experience, and four decades of manufacturing governance across India.
            </p>
          </div>

          {/* Master Floating White Card */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              border: '1.5px solid rgba(226, 232, 240, 0.95)',
              boxShadow: '0 20px 45px -12px rgba(15, 39, 68, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.8)',
              padding: 'clamp(1.25rem, 2.5vw, 2rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              alignItems: 'center',
              maxWidth: '1060px',
              margin: '0 auto'
            }}
          >
            {/* Left Column: Portrait Card with Designer Golden Backing */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '290px', margin: '0 auto' }}>
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
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.02em', marginBottom: '0.15rem' }}>
                    Mr. K. K. Hota
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#DFB757', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Senior Industry Advisor &amp; Policy Strategist
                  </div>
                  <div style={{ fontSize: '0.64rem', color: '#CBD5E1', marginTop: '0.2rem' }}>
                    Former Senior Official, Ministry of Textiles, Govt. of India
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative, Dual Metric Badges, Strategic Box & Actions */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Leader Header */}
              <div style={{ marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.2rem' }}>
                  <span style={{ width: '18px', height: '2px', background: '#D4AF37', borderRadius: '2px' }} />
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#886411', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Sectoral Advisory Panel
                  </span>
                </div>
                <h3 style={{ fontSize: 'clamp(1.25rem, 1.8vw, 1.55rem)', color: '#0F2744', fontWeight: 800, margin: '0 0 0.15rem 0', lineHeight: 1.25 }}>
                  Mr. K. K. Hota
                </h3>
                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>
                  Strategic Guidance on Central Incentives &amp; Large-Scale Textile Filings
                </div>
              </div>

              {/* Dual Stat/Credibility Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '0.65rem', marginBottom: '0.75rem' }}>
                {/* Card 1: Regulatory Approvals */}
                <div
                  style={{
                    background: '#FAF7F0',
                    border: '1px solid rgba(197, 155, 39, 0.35)',
                    padding: '0.65rem 0.85rem',
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
                      background: 'rgba(212, 175, 55, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <ShieldCheck size={16} color="#886411" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.62rem', color: '#886411', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                      Regulatory Approvals
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#0F2744', fontWeight: 700, margin: '0.05rem 0' }}>
                      100% Dossier Compliance
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#64748B' }}>
                      Govt. Industrial Clearances
                    </div>
                  </div>
                </div>

                {/* Card 2: Industry Track Record */}
                <div
                  style={{
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    padding: '0.65rem 0.85rem',
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
                      Textile &amp; Manufacturing Ecosystem
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio Narrative */}
              <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.55, marginBottom: '0.75rem' }}>
                A distinguished former senior official associated with premier institutions under the <strong style={{ color: '#0F2744' }}>Ministry of Textiles, Government of India</strong>, Mr. K. K. Hota brings over <strong style={{ color: '#0F2744' }}>42 years of unparalleled hands-on experience</strong> in advancing India's textile, manufacturing, and industrial development landscape.
              </p>

              {/* Role & Strategic Value Box */}
              <div
                style={{
                  background: '#FAF7F0',
                  borderRadius: '11px',
                  padding: '0.75rem 0.95rem',
                  border: '1px solid rgba(197, 155, 39, 0.28)',
                  marginBottom: '0.85rem'
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
                  <span>Role &amp; Strategic Value</span>
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
                      boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                    }}
                  >
                    <span>View Profile</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

                <div style={{ fontSize: '0.7rem', color: '#64748B' }}>
                  Direct strategic advisory on complex industrial filings &amp; policy alignment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CLIENT / PARTNER LOGOS (Exact Nuventraa Showcase)
          ========================================================================= */}
      <section className="nuventraa-clients-section">
        <div className="container">
          <div className="nuventraa-clients-wrap">
            <a href="#cruzo" className="nuventraa-client-logo-item" title="Cruzo Platform">
              <img
                src="/assets/nuventraa/Cruzo-Logo_transparent-scaled.png"
                alt="Cruzo - Enterprise Delivery & Ordering Platform"
                className="nuventraa-client-logo-img"
              />
            </a>
            <a href="#co-optive" className="nuventraa-client-logo-item" title="Co-optive Fintech">
              <img
                src="/assets/nuventraa/Co-optive-Logo.png"
                alt="Co-optive - Advanced Financial Operations System"
                className="nuventraa-client-logo-img"
              />
            </a>
            <a href="#chambre" className="nuventraa-client-logo-item" title="Chambré Hospitality">
              <img
                src="/assets/nuventraa/Chambre.png"
                alt="Chambré - Hotel Task Management & Operations System"
                className="nuventraa-client-logo-img"
              />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

