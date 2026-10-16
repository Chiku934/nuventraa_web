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
  Briefcase
} from 'lucide-react';
import './NuventraaHomepage.css';
import { blogsData } from '../data/blogs';

export default function Home() {
  // =========================================================================
  // HERO SLIDER STATE (Gallery Carousel on Right Column)
  // =========================================================================
  const heroGallerySlides = [
    {
      img: '/assets/nuventraa/modern-equipped-computer-lab-scaled-840x630.jpg',
      title: 'Modern Equipped Technology Lab'
    },
    {
      img: '/assets/nuventraa/portrait-happy-young-colleagues-using-digital-tablet-scaled-840x630.jpg',
      title: 'Young Tech Specialists & Engineers'
    },
    {
      img: '/assets/nuventraa/pexels-rdne-7580710-scaled-840x630.jpg',
      title: 'Digital Enterprise Development'
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
  // SECTION 2: CONSULTING SERVICES GALLERY STATE
  // =========================================================================
  const serviceThumbs = [
    {
      id: 1,
      img: '/assets/nuventraa/smiling-business-lady-working-with-colleagues-scaled-840x630.jpg',
      alt: 'Smiling Business Lady Working with Colleagues'
    },
    {
      id: 2,
      img: '/assets/nuventraa/executives-preparing-meeting-scaled-840x630.jpg',
      alt: 'Networking together'
    },
    {
      id: 3,
      img: '/assets/nuventraa/corporate-businessmen-working-tablet-office-scaled-840x630.jpg',
      alt: 'Corporate businessmen working on tablet at office'
    }
  ];

  const [activeServiceImg, setActiveServiceImg] = useState('/assets/nuventraa/modern-equipped-computer-lab-scaled-600x473.jpg');

  // =========================================================================
  // CASE STUDIES FILTER STATE
  // =========================================================================
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Product Engineering',
      category: 'engineering',
      categoryLabel: 'Product Engineering',
      image: '/assets/nuventraa/image-1-600x568.jpg',
      desc: 'Scalable software architecture, modern microservices, and end-to-end digital platform development.'
    },
    {
      id: 2,
      title: 'Firewall Advance',
      category: 'cyber',
      categoryLabel: 'Cyber Security',
      image: '/assets/nuventraa/image-600x373.jpg',
      desc: 'Robust threat detection, perimeter firewall protection, and enterprise compliance monitoring.'
    },
    {
      id: 3,
      title: 'Data Management',
      category: 'cloud',
      categoryLabel: 'Cloud Services',
      image: '/assets/nuventraa/image-2-600x568.jpg',
      desc: 'Structured database management, continuous cloud synchronization, and enterprise governance.'
    },
    {
      id: 4,
      title: 'Big Data & Analytics',
      category: 'cloud',
      categoryLabel: 'Cloud Services',
      image: '/assets/nuventraa/image-3-600x504.jpg',
      desc: 'Real-time telemetry, predictive reporting dashboards, and large-scale analytical processing.'
    },
    {
      id: 5,
      title: 'Research & Energy',
      category: 'networking',
      categoryLabel: 'Networking',
      image: '/assets/nuventraa/image-4-600x373.jpg',
      desc: 'Connected IoT sensor frameworks, industrial energy monitoring, and telemetry network topology.'
    },
    {
      id: 6,
      title: 'Warranty Management',
      category: 'security',
      categoryLabel: 'IT Security',
      image: '/assets/nuventraa/theme4-600x373.jpg',
      desc: 'Automated service lifecycle management, digital claim verification, and lifecycle auditing.'
    }
  ];

  const filteredPortfolio = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  // =========================================================================
  // TESTIMONIALS DATA
  // =========================================================================
  const testimonials = [
    {
      name: 'WALE OWESINI',
      role: 'LEGAL SOFTNG',
      quote: 'With frequent follow-ups and timely intervention, the final product was satisfying. I appreciate the tech team for incorporating everything in the right frame & place.',
      avatar: '/assets/nuventraa/grid-testimonial-03-140x140.png'
    },
    {
      name: 'SACHETAK',
      role: 'BMC Office (Bhubaneswar Municipal Corporation)',
      quote: 'Sachetak App is truly a friend for the elderly and people with comorbid conditions. A glance at its features tells how easy-to-use it has been made for everyone.',
      avatar: '/assets/nuventraa/grid-testimonial-04-140x140.png'
    },
    {
      name: 'SESHADEVA PANDA',
      role: 'PROPERTYCUBES',
      quote: "Nuventraa' team has done a phenomenal job in creating an apt website for our real estate business. They provide constant marketing support as well.",
      avatar: '/assets/nuventraa/grid-testimonial-05-140x140.png'
    },
    {
      name: 'MUNYANGANE OSCAR',
      role: 'TIPTAP DELIVERY',
      quote: 'For a smart business solution, this easy-to-use and robust app designed by Nuventraa is a pitch-perfect product. A quick turnaround has benefited our business during this Covid time.',
      avatar: '/assets/nuventraa/grid-testimonial-06-140x140.png'
    }
  ];

  // =========================================================================
  // SECTION 9: 9 BLOG POSTS DATA & CAROUSEL SLIDER STATE
  // =========================================================================
  const blogPosts = blogsData;

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

  // Autoplay with pause on hover
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
          SECTION 1: HERO SECTION (Exact 2-Column Layout with High-Tech Circuit BG)
          ========================================================================= */}
      <section
        className="section-full nuventraa-hero-section"
        style={{
          backgroundColor: '#FFFFFF',
          paddingTop: 'clamp(3rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(3.5rem, 7vw, 6rem)',
          borderBottom: '1px solid #EEF2F6',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle Opacity Circuit Background Layer */}
        <div
          className="nuventraa-hero-bg-layer"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('/assets/hero-tech-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            opacity: 0.72,
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4rem)',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Heading, Subtitle, and Buttons */}
            <div>
              <div className="ct-sub-title style-line-right">
                <span>Welcome to Nuventraa Softtech</span>
              </div>

              <h1
                className="nuventraa-section-title"
                style={{
                  fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
                  lineHeight: 1.18,
                  marginBottom: '1.25rem'
                }}
              >
                Building <cite className="ct-text-highlight">Reliable Solutions</cite><br />
                for Real Business Needs
              </h1>

              <p
                style={{
                  fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
                  color: '#475569',
                  lineHeight: 1.65,
                  maxWidth: '560px',
                  marginBottom: '2.25rem'
                }}
              >
                Customized &amp; Scalable Solutions that simplify operations, improve efficiency, and grow with your business.
              </p>

              {/* Action Buttons (side by side with plus icons) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.15rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="ct-btn-secondary">
                  <span>About Us</span>
                  <Plus size={16} />
                </Link>

                <Link to="/services" className="ct-btn-primary">
                  <span>Our Services</span>
                  <Plus size={16} />
                </Link>
              </div>
            </div>

            {/* Right Column: Carousel with Floating Particle Shape */}
            <div style={{ position: 'relative' }}>
              {/* Floating Shape from nuventraa.com (h3-shape1.png) */}
              <div
                className="shape-animate5"
                style={{
                  position: 'absolute',
                  top: '-32px',
                  left: '-28px',
                  zIndex: 2,
                  pointerEvents: 'none'
                }}
              >
                <img
                  src="/assets/nuventraa/h3-shape1.png"
                  alt=""
                  style={{ width: '48px', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Gallery Image Slider Frame */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px rgba(15, 29, 51, 0.12)',
                  aspectRatio: '840 / 630',
                  background: '#F1F5F9'
                }}
              >
                {heroGallerySlides.map((slide, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: heroSlideIndex === idx ? 1 : 0,
                      transform: heroSlideIndex === idx ? 'scale(1)' : 'scale(1.05)',
                      transition: 'opacity 0.8s ease-in-out, transform 4s cubic-bezier(0.16, 1, 0.3, 1)',
                      zIndex: heroSlideIndex === idx ? 1 : 0
                    }}
                  >
                    <img
                      src={slide.img}
                      alt={slide.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Slider Dots */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0.45rem',
                  marginTop: '1.25rem'
                }}
              >
                {heroGallerySlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setHeroSlideIndex(idx)}
                    className={`nuventraa-dot ${heroSlideIndex === idx ? 'active' : ''}`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2: CONSULTING & POLICY ADVISORY SERVICES (Exact Nuventraa Style)
          ========================================================================= */}
      <section className="nuventraa-services-section">
        <div className="container">
          <div className="nuventraa-services-grid">

            {/* Left Column: Image Collage & Interactive Gallery */}
            <div className="nuventraa-services-collage">
              <div className="nuventraa-services-banner-wrap">
                {/* Main Top Banner Image Frame */}
                <div className="nuventraa-services-main-frame">
                  <img
                    src={activeServiceImg}
                    alt="Consulting and Policy Advisory Services"
                  />
                </div>

                {/* 3 Interactive Bottom Thumbnails */}
                <div className="nuventraa-services-thumbs">
                  {serviceThumbs.map((thumb) => (
                    <button
                      key={thumb.id}
                      type="button"
                      onClick={() => setActiveServiceImg(thumb.img)}
                      className={`nuventraa-services-thumb-btn ${activeServiceImg === thumb.img ? 'active' : ''}`}
                      aria-label={thumb.alt}
                      title={thumb.alt}
                    >
                      <img src={thumb.img} alt={thumb.alt} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Title + Paragraph + 4 Stacked Horizontal Fancy Cards */}
            <div className="nuventraa-services-right">

              {/* Subtitle with lines */}
              <div>
                <span className="nuventraa-services-sub">Services</span>
              </div>

              {/* Main Heading */}
              <h2 className="nuventraa-services-heading">
                <span className="highlight">Consulting</span> &amp; Policy<br />
                Advisory Services
              </h2>

              {/* Description */}
              <p className="nuventraa-services-desc">
                Nuventraa Softtech offers <strong>consulting and policy advisory services</strong> to help industries align with regulatory frameworks &amp; unlock government incentives.
              </p>

              {/* 4 Vertical Stacked Service Cards (ct-fancy-box.style2) */}
              <div className="nuventraa-services-list">
                {[
                  {
                    title: 'Policy & Incentive Strategy',
                    desc: 'Identify relevant policies and maximize eligible benefits',
                    img: '/assets/nuventraa/Policy-Incentive-Strategy-1.png'
                  },
                  {
                    title: 'Project Structuring',
                    desc: 'Align investments with compliance and financial viability',
                    img: '/assets/nuventraa/Project-Structuring.png'
                  },
                  {
                    title: 'Approvals & Coordination',
                    desc: 'Support documentation and government clearances',
                    img: '/assets/nuventraa/Approvals-Coordination.png'
                  },
                  {
                    title: 'Execution & Realization',
                    desc: 'Enable smooth compliance and timely incentive claims',
                    img: '/assets/nuventraa/Execution-Realization.png'
                  }
                ].map((card, i) => (
                  <div key={i} className="nuventraa-services-card">
                    <div className="card-icon">
                      <img src={card.img} alt={card.title} />
                    </div>
                    <div className="card-meta">
                      <h4 className="card-title">{card.title}</h4>
                      <p className="card-desc">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 3: ABOUT US ("We Team of Experience It Specialities")
          ========================================================================= */}
      <section className="nuventraa-about-section">
        <div className="container">
          <div className="nuventraa-about-grid">

            {/* Left Content */}
            <div className="nuventraa-about-left">
              <div>
                <span className="nuventraa-about-sub">About Us</span>
              </div>

              <h2 className="nuventraa-about-heading">
                We Team of <span className="highlight">Experience</span> It<br />
                Specialities
              </h2>

              <p className="nuventraa-about-desc">
                At <strong>Nuventraa</strong>, we deliver robust software products and solutions by combining cutting-edge technology with a passion for innovation to guide businesses toward brighter horizons.
              </p>

              {/* 2 Feature Cards: Our Vision & Our Mission (ct-fancy-box.style2) */}
              <div className="nuventraa-about-cards">
                {/* Vision Card */}
                <div className="nuventraa-about-card">
                  <div className="about-icon">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2439ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                      <path d="M9 19v3" />
                      <path d="M15 19v3" />
                      <path d="M7 22h10" />
                    </svg>
                  </div>
                  <div className="about-meta">
                    <h4 className="about-title">Our Vision</h4>
                    <p className="about-desc">
                      To be a global leader in delivering transformative software solutions that revolutionize industries and drive sustainable growth.
                    </p>
                  </div>
                </div>

                {/* Mission Card */}
                <div className="nuventraa-about-card">
                  <div className="about-icon">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2439ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="about-meta">
                    <h4 className="about-title">Our Mission</h4>
                    <p className="about-desc">
                      To empower businesses by providing innovative, reliable, and scalable software solutions, driven by customer-centric values and a focus on excellence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Explore More Button */}
              <Link to="/about" className="nuventraa-explore-btn">
                <span>Explore More</span>
                <Plus size={16} />
              </Link>
            </div>

            {/* Right Graphic: Exact ct-banner3 Composition */}
            <div className="nuventraa-banner3-wrap">
              {/* Background Geometric Arc Shape */}
              <div className="nuventraa-banner3-bg" />

              {/* Overlay Wave Pattern */}
              <div className="nuventraa-banner3-overlay" />

              {/* Since 2019 Circular Badge */}
              <div className="nuventraa-banner3-counter">
                <span className="counter-title">Since</span>
                <span className="counter-num">2019</span>
              </div>

              {/* Circular Center Image Frame */}
              <div className="nuventraa-banner3-img-frame">
                <img
                  src="/assets/nuventraa/portrait-happy-young-colleagues-using-digital-tablet-scaled-650x650.jpg"
                  alt="Portrait of happy young colleagues using digital tablet"
                />
              </div>

              {/* Rotated Vertical Title */}
              <div className="nuventraa-banner3-vertical-text">
                We are a certified IT Service company.
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 4: WHAT WE DO (Exact ct-service-grid2 Circular Pop-Out Style)
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
                fontSize: 'clamp(2rem, 1.4vw, 1.75rem)',
                fontWeight: 800,
                color: '#08203A',
                lineHeight: 1.25,
                margin: '0.65rem auto 0',
                maxWidth: '700px'
              }}
            >
              We are the one stop solution for<br />
              everything related to<br />
              <cite className="ct-text-highlight">Technology</cite>
            </h2>
          </div>

          {/* 4 Cards Grid (ct-service-grid2) */}
          <div className="nuventraa-whatwedo-grid">
            {[
              {
                title: 'Custom Software Development',
                desc: 'At Nuventraa Softtech, we design and develop customized software...',
                img: '/assets/nuventraa/person-front-computer-working-html-1-scaled-220x220.jpg',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                )
              },
              {
                title: 'Industry-Specific Solutions',
                desc: 'Specializing in diverse domains such as Education, Healthcare, Government,...',
                img: '/assets/nuventraa/standard-quality-control-concept-m-scaled-220x220.jpg',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                )
              },
              {
                title: 'Co-operative Society Software',
                desc: 'Simplify and enhance the management of your cooperative society...',
                img: '/assets/nuventraa/5f8b7e99-45f7-488b-ad14-d2b8ef42ce7f-220x220.jpg',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  </svg>
                )
              },
              {
                title: 'ERP Development',
                desc: 'Transform the way your organization operates with our robust...',
                img: '/assets/nuventraa/enterprise-resource-planning-holographic-interface-220x220.jpg',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    <circle cx="12" cy="13" r="2" />
                  </svg>
                )
              }
            ].map((srv, idx) => (
              <div key={idx} className="nuventraa-service2-card">
                {/* Featured Circular Image popping out of card top */}
                <div className="nuventraa-service2-featured">
                  <img src={srv.img} alt={srv.title} />
                  {/* Floating Circular Badge on the image */}
                  <div className="nuventraa-service2-icon-badge">
                    {srv.icon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="nuventraa-service2-body">
                  <h3 className="nuventraa-service2-title">
                    {srv.title}
                  </h3>

                  <p className="nuventraa-service2-desc">
                    {srv.desc}
                  </p>

                  <Link to="/services" className="nuventraa-service2-btn">
                    <span>Know more</span>
                    <Plus size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* More Service Button */}
          <div style={{ textAlign: 'center' }}>
            <Link to="/services" className="ct-btn-primary">
              <span>More Service</span>
              <Plus size={16} />
            </Link>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 5: CTA BANNER ("BEST IT SOLUTIONS FOR YOUR BUSINESS")
          ========================================================================= */}
      <section className="nuventraa-cta-banner">
        <div className="nuventraa-cta-container">
          <h2 className="nuventraa-cta-title">
            BEST IT SOLUTIONS FOR YOUR BUSINESS
          </h2>
          <p className="nuventraa-cta-subtitle">
            Consult us to Automate your business Process
          </p>
          <Link to="/contact" className="nuventraa-cta-btn">
            Request a Quote
          </Link>
        </div>
      </section>


      {/* =========================================================================
          SECTION 6: OUR PRODUCTS (Chambre, Co-optive, Cruzo)
          ========================================================================= */}
      <section className="section-full section-py" style={{ background: '#FFFFFF' }}>
        <div className="container">

          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.75rem' }}>
            <div className="nuventraa-products-subtitle">
              <span>Our Products</span>
            </div>

            <h2 className="nuventraa-section-title">
              Our Innovative Products for your <cite className="ct-text-highlight">Business</cite>
            </h2>
          </div>

          {/* 3 Product Logo Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}
          >
            {[
              {
                name: 'Chambré',
                category: 'Hospitality Management',
                desc: 'Introduced Chambré, a hotel task management system to streamline hospitality operations and service workflows.',
                logo: '/assets/nuventraa/Chambre.png'
              },
              {
                name: 'Co-optive',
                category: 'Fintech & Credit Society',
                desc: 'Rolled out Co-optive, an advanced fintech solution designed for financial operations, deposits, and loan ledgers.',
                logo: '/assets/nuventraa/Co-optive-Logo.png'
              },
              {
                name: 'Cruzo',
                category: 'Ordering & Delivery Platform',
                desc: 'Launched Cruzo, a white-labeled ordering and delivery management platform for retail and multi-branch food businesses.',
                logo: '/assets/nuventraa/Cruzo-Logo_transparent-scaled.png'
              }
            ].map((prod, idx) => (
              <div
                key={idx}
                className="nuventraa-card"
                style={{
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <div
                  style={{
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  <img
                    src={prod.logo}
                    alt={prod.name}
                    style={{ maxHeight: '100%', maxWidth: '200px', objectFit: 'contain' }}
                  />
                </div>

                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#9000ff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.45rem' }}>
                  {prod.category}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F1D33', marginBottom: '0.75rem' }}>
                  {prod.name}
                </h3>

                <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  {prod.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 7: CASE STUDIES ("Few of Our Apps Adored by millions of users!")
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

          {/* 2-Column Header */}
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
                <span>Case Studies</span>
              </div>
              <h2 className="nuventraa-section-title" style={{ margin: 0 }}>
                Few of Our Apps Adored by <cite className="ct-text-highlight">millions of users!</cite>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '0.94rem', color: '#64748B', lineHeight: 1.65, margin: 0 }}>
                We show only the best websites and portfolios built completely with passion, simplicity &amp; creativity. Our team have designed game changing products, consulted for companies as well.
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
              { key: 'all', label: 'All' },
              { key: 'cloud', label: 'Cloud Services' },
              { key: 'cyber', label: 'Cyber Security' },
              { key: 'security', label: 'IT Security' },
              { key: 'networking', label: 'Networking' },
              { key: 'engineering', label: 'Product Engineering' }
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

          {/* 6 Portfolio Cards */}
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
          SECTION 8: TESTIMONIALS ("What Our Happy Clients Say")
          ========================================================================= */}
      <section className="section-full section-py" style={{ background: '#FFFFFF' }}>
        <div className="container">

          {/* 2-Column Header */}
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
                <span>Testimonials</span>
              </div>
              <h2 className="nuventraa-section-title" style={{ margin: 0 }}>
                What Our Happy Clients Say
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '0.94rem', color: '#64748B', lineHeight: 1.65, margin: 0 }}>
                We value the experimentation, the reformation of the message, and the smart incentives. We offer a variety of services and solutions Worldwide and this is at the heart of how we approach our.
              </p>
            </div>
          </div>

          {/* 4 Testimonial Cards */}
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
          SECTION 9: BLOG ("Trending IT Solution Article & Tips" - 9 SLIDING BLOGS)
          ========================================================================= */}
      <section className="section-full nuventraa-blog-section">
        <div className="container">

          {/* Section Header with Navigation Controls */}
          <div className="nuventraa-blog-header-wrap">
            <div>
              <div className="ct-sub-title style-line-right">
                <span>Blog</span>
              </div>
              <h2 className="nuventraa-section-title" style={{ margin: 0 }}>
                Trending IT <cite className="ct-text-highlight">Solution</cite> Article &amp; Tips
              </h2>
            </div>

            {/* Left / Right Slider Arrows */}
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

          {/* Carousel Viewport */}
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
                    {/* Featured Image with Zoom & Date Badge */}
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

                    {/* Card Body */}
                    <div className="nuventraa-blog-body">
                      {/* Meta Information */}
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

                      {/* Title */}
                      <h3 className="nuventraa-blog-title">
                        <Link to={blog.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {blog.title}
                        </Link>
                      </h3>

                      {/* Excerpt */}
                      <p className="nuventraa-blog-excerpt">
                        {blog.excerpt}
                      </p>

                      {/* Read More Button */}
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

          {/* Slick Navigation Dots */}
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
