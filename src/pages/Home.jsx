import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Plus,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  Award,
  Users,
  User,
  ChevronLeft,
  ChevronRight,
  Quote,
  Calendar,
  MessageSquare,
  ExternalLink,
  ShieldCheck,
  Check,
  TrendingUp,
  Layers,
  Briefcase,
  Factory,
  Banknote,
  Workflow,
  Building2,
  FileCheck2,
  Flame,
  Zap,
  FileText,
  BarChart3,
  Settings
} from 'lucide-react';
import './NuventraaHomepage.css';
import { blogsData } from '../data/blogs';
import { leadershipData } from '../data/leadershipData';

export default function Home() {
  // =========================================================================
  // HERO SLIDER STATE (Gallery Carousel on Right Column)
  // =========================================================================
  const heroGallerySlides = [
    {
      img: '/assets/textile-plant.jpg',
      title: 'Textile & Manufacturing Ecosystems'
    },
    {
      img: '/assets/consulting-boardroom.jpg',
      title: 'Strategic Policy & Investment Advisory'
    },
    {
      img: '/assets/heavy-steel-plant.jpg',
      title: 'Industrial Infrastructure & Operational Clearances'
    }
  ];

  const [heroSlideIndex, setHeroSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % heroGallerySlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroGallerySlides.length]);


  // =========================================================================
  // CASE STUDIES FILTER STATE
  // =========================================================================
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Capital Investment Subsidy (CIS)',
      category: 'subsidies',
      categoryLabel: 'Subsidies & Claims',
      image: '/assets/textile-plant.jpg',
      desc: 'Fixed capital realization on Plant & Machinery for manufacturing units under Odisha IPR-2022 & OATTP-2022.'
    },
    {
      id: 2,
      title: 'Environmental Consents (CTE & CTO)',
      category: 'licensing',
      categoryLabel: 'Environmental',
      image: '/assets/spcb-environmental.jpg',
      desc: 'Comprehensive State Pollution Control Board (OSPCB) clearances from site vetting through stack monitoring to operational consent.'
    },
    {
      id: 3,
      title: 'Single Window Approvals (GO-SWIFT)',
      category: 'singlewindow',
      categoryLabel: 'Single Window',
      image: '/assets/consulting-boardroom.jpg',
      desc: 'Facilitation across District (DLSWCA) and State (SLSWCA/HLCA) Single Window Committees via IPICOL and IDCO.'
    },
    {
      id: 4,
      title: 'Textile Sector Infrastructure',
      category: 'sectoral',
      categoryLabel: 'Sectoral Advisory',
      image: '/assets/agro-plant.jpg',
      desc: 'OATTP-2022 policy structuring, concessional land allocation, and fiscal incentive claims for modern garment parks.'
    },
    {
      id: 5,
      title: 'Boiler & Factory Statutory Compliance',
      category: 'licensing',
      categoryLabel: 'Statutory Licensing',
      image: '/assets/boiler-plant.jpg',
      desc: 'Labour & ESI clearances, hydraulic testing coordination, and factory layout approvals under the Boilers Act.'
    },
    {
      id: 6,
      title: 'Net SGST & Power Tariff Relief',
      category: 'subsidies',
      categoryLabel: 'Subsidies & Claims',
      image: '/assets/solar-park.jpg',
      desc: 'Multi-year fiscal tax reimbursements (up to 100% Net SGST) and electrical duty waivers for active industrial plants.'
    }
  ];

  const filteredPortfolio = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  // =========================================================================
  // TESTIMONIALS DATA (Real Clients from Silvercrest Consulting)
  // =========================================================================
  const testimonials = [
    {
      name: 'Chirag Industries',
      role: 'Manufacturing & Engineering',
      quote: 'Their expertise in licensing and documentation processes streamlined our compliance efforts. We saved time and avoided costly errors across our industrial approvals.',
      avatar: '/assets/nuventraa/grid-testimonial-03-140x140.png'
    },
    {
      name: 'Highland Agro',
      role: 'Agro & Food Processing Unit',
      quote: 'Thanks to their detailed guidance, our licensing applications were approved quickly, and our statutory documentation is now thoroughly audit-ready and organized.',
      avatar: '/assets/nuventraa/grid-testimonial-04-140x140.png'
    },
    {
      name: 'Panda Infrastructures',
      role: 'Industrial Infrastructure & Utilities',
      quote: 'They provided clear, expert advice on complex licensing regulations and Single Window clearances, which made the entire process seamless for our engineering team.',
      avatar: '/assets/nuventraa/grid-testimonial-05-140x140.png'
    },
    {
      name: 'Eastern Manufacturing Hub',
      role: 'Textiles & Apparel Cluster',
      quote: 'Nuventraa helped us unlock maximum Capital Investment Subsidy and complete all single window and OSPCB clearances ahead of our plant commissioning schedule.',
      avatar: '/assets/nuventraa/grid-testimonial-06-140x140.png'
    }
  ];

  // =========================================================================
  // BLOGS STATE
  // =========================================================================
  const blogPosts = blogsData || [];
  const [blogSlideIndex, setBlogSlideIndex] = useState(0);
  const [blogSlidesToShow, setBlogSlidesToShow] = useState(3);
  const [isBlogHovered, setIsBlogHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBlogSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setBlogSlidesToShow(2);
      } else {
        setBlogSlidesToShow(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxBlogIndex = Math.max(0, blogPosts.length - blogSlidesToShow);

  const nextBlogSlide = () => {
    setBlogSlideIndex((prev) => (prev >= maxBlogIndex ? 0 : prev + 1));
  };

  const prevBlogSlide = () => {
    setBlogSlideIndex((prev) => (prev <= 0 ? maxBlogIndex : prev - 1));
  };

  useEffect(() => {
    if (isBlogHovered) return;
    const timer = setInterval(() => {
      setBlogSlideIndex((prev) => (prev >= maxBlogIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [isBlogHovered, maxBlogIndex]);

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>

      {/* =========================================================================
          SECTION 1: HERO SECTION (EXACT MOCKUP MATCH)
          ========================================================================= */}
      <section className="hero-executive-section">
        {/* Hidden SVG Definitions for Custom Organic Boardroom Image Mask */}
        <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }} aria-hidden="true">
          <defs>
            <clipPath id="heroBoardroomMask" clipPathUnits="objectBoundingBox">
              <path d="M 0.35 0.0
                       L 0.98 0.0
                       C 0.99 0.0, 1.0 0.015, 1.0 0.035
                       L 1.0 0.86
                       C 1.0 0.90, 0.98 0.93, 0.95 0.95
                       C 0.75 0.98, 0.45 0.98, 0.24 0.94
                       C 0.12 0.91, 0.04 0.86, 0.01 0.80
                       C -0.01 0.74, 0.01 0.67, 0.03 0.60
                       L 0.22 0.18
                       C 0.26 0.08, 0.30 0.02, 0.35 0.0 Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="hero-executive-layout">
          {/* Left Column: Typography & CTAs */}
          <div className="hero-left-col">
            {/* Eyebrow */}
            <div className="hero-eyebrow-wrap">
              <span className="hero-eyebrow-text">
                Industrial &amp; Policy Advisory Partner
              </span>
              <span className="hero-eyebrow-bar" />
            </div>

            {/* Main Headline (Exact 4 lines matching Mockup) */}
            <h1 className="hero-headline">
              Enabling<br />
              <span className="hero-highlight-marker">Industrial Growth</span><br />
              <span className="hero-nowrap-text">&amp; Government-Linked</span><br />
              Transformation
            </h1>

            {/* Short Gold Accent Bar */}
            <div className="hero-accent-bar" />

            {/* Action Buttons */}
            <div className="hero-cta-group">
              <Link to="/consulting" className="hero-btn-primary">
                <span>Explore Advisory</span>
                <ArrowRight size={17} />
              </Link>

              <Link to="/services" className="hero-btn-secondary">
                <span>Our Services</span>
                <ArrowRight size={17} color="#DF9E1D" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Full-Bleed Frame */}
          <div className="hero-right-col">
            <div className="hero-visual-frame">
              {/* Thin Diagonal Accent Line */}
              <div className="hero-diagonal-line" />

              {/* Cream Backing Silhouette */}
              <div className="hero-cream-backing" />

              {/* Dot Matrix Pattern */}
              <div className="hero-dot-grid">
                {Array.from({ length: 20 }).map((_, i) => (
                  <span key={i} />
                ))}
              </div>

              {/* Glowing Golden Orb */}
              <div className="hero-glowing-orb" />

              {/* The Masked Boardroom Image */}
              <div className="hero-image-masked-container">
                <img
                  src="/assets/consulting-boardroom.jpg"
                  alt="Enabling Industrial Growth &amp; Advisory"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2: CONSULTING & POLICY ADVISORY SERVICES (STRATEGIC EXECUTION)
          ========================================================================= */}
      <section className="strategic-execution-section">
        <div className="container">
          <div className="strategic-execution-grid">

            {/* Left Column: Stylized Visual Frame matching mockup */}
            <div className="strategic-visual-wrapper">
              <div className="strategic-visual-box">
                <img
                  src="/assets/strategic-execution-visual.png"
                  alt="Consulting & Policy Advisory Services - Strategic Execution"
                  className="strategic-visual-img"
                />
              </div>
            </div>

            {/* Right Column: Strategic Execution Content */}
            <div className="strategic-content-wrapper">
              {/* Eyebrow */}
              <div className="strategic-eyebrow">
                <span className="strategic-eyebrow-line"></span>
                <span className="strategic-eyebrow-text">STRATEGIC EXECUTION</span>
              </div>

              {/* Heading */}
              <h2 className="strategic-heading">
                Consulting &amp;<br />
                <span className="strategic-heading-gold">Policy Advisory</span> Services
              </h2>

              {/* Description Paragraph */}
              <p className="strategic-desc">
                Nuventraa offers consulting and policy advisory services to help industries align with regulatory frameworks and unlock government incentives.
              </p>

              {/* 2x2 Feature Cards Grid */}
              <div className="strategic-cards-grid">
                {/* Card 1: Policy & Incentive Strategy */}
                <div className="strategic-card">
                  <div className="strategic-card-icon-box icon-bg-yellow">
                    <FileText size={22} className="strategic-icon-yellow" strokeWidth={2.2} />
                  </div>
                  <div className="strategic-card-body">
                    <h4 className="strategic-card-title">Policy &amp; Incentive Strategy</h4>
                    <p className="strategic-card-desc">Identify relevant policies and maximize eligible incentives.</p>
                  </div>
                </div>

                {/* Card 2: Project Structuring */}
                <div className="strategic-card">
                  <div className="strategic-card-icon-box icon-bg-blue">
                    <BarChart3 size={22} className="strategic-icon-blue" strokeWidth={2.2} />
                  </div>
                  <div className="strategic-card-body">
                    <h4 className="strategic-card-title">Project Structuring</h4>
                    <p className="strategic-card-desc">Align investments with compliance and viability norms.</p>
                  </div>
                </div>

                {/* Card 3: Approvals & Coordination */}
                <div className="strategic-card">
                  <div className="strategic-card-icon-box icon-bg-green">
                    <Settings size={22} className="strategic-icon-green" strokeWidth={2.2} />
                  </div>
                  <div className="strategic-card-body">
                    <h4 className="strategic-card-title">Approvals &amp; Coordination</h4>
                    <p className="strategic-card-desc">Support single-window clearances and departmental coordination.</p>
                  </div>
                </div>

                {/* Card 4: Execution & Realization */}
                <div className="strategic-card">
                  <div className="strategic-card-icon-box icon-bg-purple">
                    <Users size={22} className="strategic-icon-purple" strokeWidth={2.2} />
                  </div>
                  <div className="strategic-card-body">
                    <h4 className="strategic-card-title">Execution &amp; Realization</h4>
                    <p className="strategic-card-desc">Enable smooth compliance and timely incentive claims.</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="strategic-cta-wrap">
                <Link to="/consulting" className="strategic-btn">
                  <span>Know More</span>
                  <ArrowRight size={18} className="strategic-btn-arrow" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 3: ABOUT US
          ========================================================================= */}
      <section className="nuventraa-about-section">
        <div className="container">
          <div className="nuventraa-about-grid">

            {/* Left Content */}
            <div className="nuventraa-about-left">
              <div>
                <span className="nuventraa-about-sub">About Nuventraa</span>
              </div>

              <h2 className="nuventraa-about-heading">
                Strategic Advisory Guided by <span className="highlight">Institutional Experience</span>
              </h2>

              <p className="nuventraa-about-desc">
                At <strong>Nuventraa</strong>, we support manufacturing units and commercial enterprises to establish, expand, and scale within policy-driven ecosystems with seamless government liaison and audit-ready governance.
              </p>

              <div className="nuventraa-about-cards">
                {/* Vision Card */}
                <div className="nuventraa-about-card">
                  <div className="about-icon">
                    <TrendingUp size={24} color="#2439ff" />
                  </div>
                  <div className="about-meta">
                    <h4 className="about-title">Our Vision</h4>
                    <p className="about-desc">
                      To be the trusted industrial transformation and policy advisory partner, unlocking state incentives and accelerating sustainable industrialization.
                    </p>
                  </div>
                </div>

                {/* Mission Card */}
                <div className="nuventraa-about-card">
                  <div className="about-icon">
                    <ShieldCheck size={24} color="#2439ff" />
                  </div>
                  <div className="about-meta">
                    <h4 className="about-title">Our Mission</h4>
                    <p className="about-desc">
                      To empower enterprises with structured statutory compliance, defect-free documentation, and end-to-end execution from concept to treasury disbursements.
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/about" className="nuventraa-explore-btn">
                <span>Explore More</span>
                <Plus size={16} />
              </Link>
            </div>

            {/* Right Graphic */}
            <div className="nuventraa-banner3-wrap">
              <div className="nuventraa-banner3-bg" />
              <div className="nuventraa-banner3-overlay" />

              <div className="nuventraa-banner3-counter">
                <span className="counter-title">Experience</span>
                <span className="counter-num">42+</span>
                <span style={{ fontSize: '0.65rem', color: '#64748B', display: 'block', textTransform: 'uppercase' }}>Years Advisory</span>
              </div>

              <div className="nuventraa-banner3-img-frame">
                <img
                  src="/assets/consulting-boardroom.jpg"
                  alt="Industrial Consulting Boardroom"
                />
              </div>

              <div className="nuventraa-banner3-vertical-text">
                Strategic Industrial &amp; Policy Partner.
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 4: WHAT WE DO (Core Capabilities)
          ========================================================================= */}
      <section className="nuventraa-whatwedo-section">
        <div className="container">

          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 1.5rem' }}>
            <div className="ct-sub-title style-line-leftright">
              <span>What We Do</span>
            </div>

            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: '#08203A',
                lineHeight: 1.25,
                margin: '0.65rem auto 0',
                maxWidth: '750px'
              }}
            >
              Comprehensive Solutions for <cite className="ct-text-highlight">Industrial Enterprises</cite>
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="nuventraa-whatwedo-grid">
            {[
              {
                title: 'Industrial Investment & Policy Advisory',
                desc: 'Single Window clearances via GO-SWIFT, IPICOL coordination, and policy alignment under Odisha IPR-2022 & OATTP-2022.',
                img: '/assets/consulting-boardroom.jpg',
                link: '/service/industrial-investment-policy-advisory',
                icon: <Factory size={22} strokeWidth={2.2} />
              },
              {
                title: 'Regulatory & Incentive Enablement',
                desc: 'Maximizing capital investment subsidies (CIS up to 30%), 100% Net SGST reimbursement, and power duty exemptions.',
                img: '/assets/textile-plant.jpg',
                link: '/service/regulatory-incentive-enablement',
                icon: <Banknote size={22} strokeWidth={2.2} />
              },
              {
                title: 'Project Consultancy & Planning',
                desc: 'Bankable DPR preparation, CAPEX scheduling, plant & machinery invoice scrutiny, and operational readiness.',
                img: '/assets/audit-desk.jpg',
                link: '/service/project-consultancy-planning',
                icon: <Workflow size={22} strokeWidth={2.2} />
              },
              {
                title: 'Environmental & Statutory Licensing',
                desc: 'Consent to Establish (CTE) & Consent to Operate (CTO) from OSPCB, boiler permits, and factory safety licensing.',
                img: '/assets/spcb-environmental.jpg',
                link: '/service/environmental-operational-licensing',
                icon: <ShieldCheck size={22} strokeWidth={2.2} />
              }
            ].map((srv, idx) => (
              <div key={idx} className="nuventraa-service2-card">
                <div className="nuventraa-service2-featured">
                  <img src={srv.img} alt={srv.title} />
                  <div className="nuventraa-service2-icon-badge">
                    {srv.icon}
                  </div>
                </div>

                <div className="nuventraa-service2-body">
                  <h3 className="nuventraa-service2-title">
                    {srv.title}
                  </h3>

                  <p className="nuventraa-service2-desc">
                    {srv.desc}
                  </p>

                  <Link to={srv.link} className="nuventraa-service2-btn">
                    <span>Know more</span>
                    <Plus size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/services" className="ct-btn-primary">
              <span>View All Services</span>
              <Plus size={16} />
            </Link>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 5: CTA BANNER
          ========================================================================= */}
      <section className="nuventraa-cta-banner">
        <div className="nuventraa-cta-container">
          <h2 className="nuventraa-cta-title">
            MAXIMIZE YOUR INDUSTRIAL INCENTIVES &amp; SUBSIDIES
          </h2>
          <p className="nuventraa-cta-subtitle">
            Consult our senior advisory team to structure bankable projects and secure single-window clearances
          </p>
          <Link to="/contact" className="nuventraa-cta-btn">
            Request Advisory Session
          </Link>
        </div>
      </section>


      {/* =========================================================================
          SECTION 6: STATUTORY APPROVAL & LICENSING MANDATE
          ========================================================================= */}
      <section className="section-full section-py" style={{ background: '#FFFFFF' }}>
        <div className="container">

          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.75rem' }}>
            <div className="nuventraa-products-subtitle">
              <span>Statutory Lifecycle</span>
            </div>

            <h2 className="nuventraa-section-title">
              End-to-End <cite className="ct-text-highlight">Regulatory Mandate</cite>
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.95rem', margin: '0.5rem auto 0', maxWidth: '640px' }}>
              Structured execution across each phase of industrial enterprise establishment and operations.
            </p>
          </div>

          <div className="statutory-lifecycle-grid">
            {[
              {
                phase: 'Stage 01',
                title: 'Pre-Establishment Clearances',
                desc: 'IEM Registration (DPIIT), IDCO Land Allocation, Water Drawl Recommendation, OSPCB Consent to Establish (CTE), and Building Plan Approval.',
                icon: <Building2 size={36} color="#2439ff" />
              },
              {
                phase: 'Stage 02',
                title: 'Pre-Operations Licensing',
                desc: 'OSPCB Consent to Operate (CTO), Registration of Boilers under Boilers Act, Factories License under Labour & ESI, CEI Electrical Inspection, and Fire Safety Certificate.',
                icon: <FileCheck2 size={36} color="#9000ff" />
              },
              {
                phase: 'Stage 03',
                title: 'Subsidy & Fiscal Realization',
                desc: 'Capital Investment Subsidy (CIS up to 30% on Plant & Machinery), 100% Net SGST Reimbursement, 100% EPF/ESI Support, and Treasury Bank Disbursement tracking.',
                icon: <Banknote size={36} color="#C59B27" />
              }
            ].map((mandate, idx) => (
              <div
                key={idx}
                className="nuventraa-card statutory-lifecycle-card"
              >
                <div className="statutory-lifecycle-icon-wrap">
                  {mandate.icon}
                </div>

                <div className="statutory-lifecycle-phase">
                  {mandate.phase}
                </div>

                <h3 className="statutory-lifecycle-title">
                  {mandate.title}
                </h3>

                <p className="statutory-lifecycle-desc">
                  {mandate.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 7: CASE STUDIES / PORTFOLIO
          ========================================================================= */}
      <section
        className="section-full section-py"
        style={{
          background: '#F8FAFC',
          borderTop: '1px solid #EEF2F6',
          borderBottom: '1px solid #EEF2F6'
        }}
      >
        <div className="container">

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: '1.5rem',
              alignItems: 'center',
              marginBottom: '2rem'
            }}
          >
            <div>
              <div className="ct-sub-title style-line-right">
                <span>Proven Execution</span>
              </div>
              <h2 className="nuventraa-section-title" style={{ margin: 0 }}>
                Featured Industrial <cite className="ct-text-highlight">Clearances &amp; Claims</cite>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '0.94rem', color: '#64748B', lineHeight: 1.65, margin: 0 }}>
                A track record of structured execution across manufacturing, textiles, agro-processing, and heavy engineering hubs across the region.
              </p>
            </div>
          </div>

          {/* Filter Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.65rem',
              marginBottom: '2.5rem'
            }}
          >
            {[
              { key: 'all', label: 'All Domains' },
              { key: 'subsidies', label: 'Subsidies & Claims' },
              { key: 'licensing', label: 'Statutory Licensing' },
              { key: 'singlewindow', label: 'Single Window' },
              { key: 'sectoral', label: 'Sectoral Advisory' }
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                style={{
                  background: activeFilter === f.key ? '#2439ff' : '#FFFFFF',
                  color: activeFilter === f.key ? '#FFFFFF' : '#475569',
                  border: activeFilter === f.key ? '1px solid #2439ff' : '1px solid #E2E8F0',
                  borderRadius: '999px',
                  padding: '0.45rem 1.25rem',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: activeFilter === f.key ? '0 4px 12px rgba(36, 57, 255, 0.25)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Portfolio Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {filteredPortfolio.map((item) => (
              <div key={item.id} className="nuventraa-portfolio-card">
                <div className="img-container">
                  <img src={item.image} alt={item.title} />
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.85rem',
                      left: '0.85rem',
                      background: 'rgba(15, 29, 51, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: '#FFFFFF',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {item.categoryLabel}
                  </div>
                </div>

                <div style={{ padding: '1.35rem 1.25rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F1D33', marginBottom: '0.45rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 8: SECTORAL ADVISORY & FINANCIAL GOVERNANCE LEADERSHIP
          ========================================================================= */}
      <section
        className="section-full"
        style={{
          background: '#FFFFFF url("/assets/leadership-bg.jpg") no-repeat center center',
          backgroundSize: 'cover',
          borderTop: '1px solid #EEF2F6',
          borderBottom: '1px solid #EEF2F6',
          padding: 'clamp(3.75rem, 6vw, 5.5rem) 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto clamp(2rem, 3.5vw, 3rem)' }}>
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
                marginBottom: '0.65rem',
                boxShadow: '0 2px 6px rgba(197, 155, 39, 0.08)'
              }}
            >
              <Sparkles size={12} color="#C59B27" />
              <span>Institutional Policy &amp; Financial Governance</span>
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                color: '#0F2744',
                fontWeight: 800,
                marginBottom: '0.65rem',
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

            <p style={{ fontSize: '0.94rem', color: '#64748B', lineHeight: 1.65, maxWidth: '720px', margin: '0 auto' }}>
              Guiding industrial enterprises with senior institutional wisdom, central ministry experience, and four decades of manufacturing &amp; fiscal governance across India.
            </p>
          </div>

          {/* Leaders Grid (Clean Executive Preview Cards - Minimal & Clutter-Free) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'stretch',
              flexWrap: 'wrap',
              gap: '2.5rem',
              maxWidth: '860px',
              margin: '0 auto',
              width: '100%'
            }}
          >
            {leadershipData.map((leader, idx) => (
              <div
                key={leader.id || idx}
                style={{
                  width: '100%',
                  maxWidth: '390px',
                  flex: '1 1 340px',
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 10px 30px rgba(15, 39, 68, 0.06)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
              >
                {/* Photo Frame */}
                <div
                  style={{
                    width: '100%',
                    height: '320px',
                    overflow: 'hidden',
                    background: '#F1F5F9',
                    position: 'relative'
                  }}
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(15, 39, 68, 0.88)',
                      backdropFilter: 'blur(8px)',
                      color: '#DFB757',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.65rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(223, 183, 87, 0.3)',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {leader.experienceYears || leader.stats?.[0]?.value || 'Leadership'}
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: '1.75rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    textAlign: 'center'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      color: '#C59B27',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {leader.domain}
                  </span>

                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      color: '#08203A',
                      margin: '0 0 0.4rem 0',
                      lineHeight: 1.25
                    }}
                  >
                    {leader.name}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.865rem',
                      fontWeight: 600,
                      color: '#475569',
                      lineHeight: 1.45,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {leader.designation}
                  </div>

                  <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid #F1F5F9' }}>
                    <Link
                      to={`/leadership/${leader.id}`}
                      className="ct-btn-primary"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        width: '100%',
                        padding: '0.75rem 1rem',
                        fontSize: '0.86rem',
                        borderRadius: '8px',
                        textDecoration: 'none'
                      }}
                    >
                      <span>View Full Profile</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: TESTIMONIALS (Real Client Testimonials)
          ========================================================================= */}
      <section className="section-full section-py" style={{ background: '#FFFFFF' }}>
        <div className="container">

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: '1.5rem',
              alignItems: 'center',
              marginBottom: '2.75rem'
            }}
          >
            <div>
              <div className="ct-sub-title style-line-right">
                <span>Client Feedback</span>
              </div>
              <h2 className="nuventraa-section-title" style={{ margin: 0 }}>
                What Industry Leaders Say
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '0.94rem', color: '#64748B', lineHeight: 1.65, margin: 0 }}>
                Trusted by manufacturing enterprises, agro-processing units, and industrial investors to navigate complex state regulations and deliver maximum approved claims.
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="nuventraa-card"
                style={{
                  padding: '2.25rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ marginBottom: '1.25rem' }}>
                  <Quote size={28} color="#2439ff" style={{ opacity: 0.8, marginBottom: '0.75rem' }} />
                  <p style={{ fontSize: '0.88rem', color: '#334155', fontStyle: 'italic', lineHeight: 1.6, margin: 0 }}>
                    "{t.quote}"
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', borderTop: '1px solid #E2E8F0', paddingTop: '1rem' }}>
                  <img
                    src={t.avatar}
                    alt={t.name}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #2439ff'
                    }}
                  />
                  <div>
                    <h3 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F1D33', margin: 0 }}>
                      {t.name}
                    </h3>
                    <div style={{ fontSize: '0.72rem', color: '#9000ff', fontWeight: 700 }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 9: BLOG
          ========================================================================= */}
      <section className="section-full nuventraa-blog-section">
        <div className="container">

          <div className="nuventraa-blog-header-wrap">
            <div>
              <div className="ct-sub-title style-line-right">
                <span>Insights &amp; Advisory</span>
              </div>
              <h2 className="nuventraa-section-title" style={{ margin: 0 }}>
                Industrial Policy, <cite className="ct-text-highlight">Subsidies</cite> &amp; Regulatory Updates
              </h2>
            </div>

            <div className="nuventraa-blog-nav-btns">
              <button
                onClick={prevBlogSlide}
                className="nuventraa-blog-nav-btn"
                aria-label="Previous blog posts"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextBlogSlide}
                className="nuventraa-blog-nav-btn"
                aria-label="Next blog posts"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            className="nuventraa-blog-carousel-container"
            onMouseEnter={() => setIsBlogHovered(true)}
            onMouseLeave={() => setIsBlogHovered(false)}
          >
            <div
              className="nuventraa-blog-track"
              style={{
                transform: `translateX(-${blogSlideIndex * (100 / blogSlidesToShow)}%)`
              }}
            >
              {blogPosts.map((blog) => (
                <div
                  key={blog.id}
                  className="nuventraa-blog-slide"
                  style={{
                    flex: `0 0 ${100 / blogSlidesToShow}%`,
                    maxWidth: `${100 / blogSlidesToShow}%`
                  }}
                >
                  <div className="nuventraa-blog-card">
                    <div className="nuventraa-blog-thumb">
                      <Link to={blog.link}>
                        <img
                          src={blog.img}
                          alt={blog.title}
                          loading="lazy"
                        />
                      </Link>
                      <div className="nuventraa-blog-date">
                        <span className="nuventraa-blog-date-day">{blog.day}</span>
                        <span className="nuventraa-blog-date-month">{blog.month}</span>
                      </div>
                    </div>

                    <div className="nuventraa-blog-body">
                      <div className="nuventraa-blog-meta">
                        <div className="nuventraa-blog-meta-item">
                          <span className="nuventraa-blog-meta-icon">
                            <User size={13} />
                          </span>
                          <span>{blog.author}</span>
                        </div>
                        <div className="nuventraa-blog-meta-item">
                          <span
                            className="nuventraa-blog-meta-icon"
                            style={{ background: 'rgba(144, 0, 255, 0.08)', color: '#9000ff' }}
                          >
                            <MessageSquare size={13} />
                          </span>
                          <span>{blog.comments}</span>
                        </div>
                      </div>

                      <h3 className="nuventraa-blog-title">
                        <Link to={blog.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {blog.title}
                        </Link>
                      </h3>

                      <p className="nuventraa-blog-excerpt">
                        {blog.excerpt}
                      </p>

                      <Link to={blog.link} className="nuventraa-blog-readmore">
                        <span>Read More</span>
                        <Plus size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="nuventraa-blog-dots">
            {Array.from({ length: maxBlogIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setBlogSlideIndex(idx)}
                className={`nuventraa-blog-dot ${blogSlideIndex === idx ? 'active' : 'inactive'}`}
                aria-label={`Go to slide page ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
