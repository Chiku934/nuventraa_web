import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Smartphone,
  TrendingUp,
  Network,
  Cloud,
  Bot,
  Plus
} from 'lucide-react';
import PageBanner from '../components/PageBanner';

export default function SoftwareConsulting() {
  const [hoveredOffer, setHoveredOffer] = useState(null);

  const whatWeOffer = [
    {
      icon: Compass,
      title: 'Technology Strategy & Architecture',
      descPre: 'Define the right technology stack and system architecture to ensure your systems are ',
      descHighlight: 'future-ready, scalable.',
      descPost: ''
    },
    {
      icon: Smartphone,
      title: 'Custom Software & Platform Design',
      descPre: 'Design & develop tailored applications, platforms, & enterprise systems built for ',
      descHighlight: 'performance and usability.',
      descPost: ''
    },
    {
      icon: TrendingUp,
      title: 'Digital Transformation Consulting',
      descPre: 'Modernize legacy systems and workflows through ',
      descHighlight: 'automation, cloud adoption, and process digitization.',
      descPost: ''
    },
    {
      icon: Network,
      title: 'System Integration & Interoperability',
      descPre: 'Enable seamless integration across platforms, departments, and third-party systems for ',
      descHighlight: 'unified operations.',
      descPost: ''
    },
    {
      icon: Cloud,
      title: 'Custom Software & Platform Design',
      descPre: 'Plan and implement ',
      descHighlight: 'secure, scalable cloud environments',
      descPost: ' with optimized performance and cost control.'
    },
    {
      icon: Bot,
      title: 'AI & Data-Driven Solutions',
      descPre: 'Leverage ',
      descHighlight: 'data analytics, AI, & intelligent automation',
      descPost: ' to drive better decision-making & operational efficiency.'
    }
  ];

  return (
    <div className="nuventraa-page-wrapper" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      {/* Page Banner */}
      <PageBanner
        title="Software Consulting"
        titleHighlight="Software Consulting"
        description="Scalable Technology, Structured Execution, and High-Performance Digital Solutions."
        breadcrumbCurrent="Software Consulting"
      />

      {/* =========================================================================
          SECTION 1: HERO / SCALABLE TECHNOLOGY. STRUCTURED EXECUTION. REAL OUTCOMES.
          ========================================================================= */}
      <section
        style={{
          padding: 'clamp(4.5rem, 6.5vw, 6.5rem) 0',
          backgroundColor: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
              gap: 'clamp(3rem, 6vw, 5.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left Content Column */}
            <div>
              {/* Main Headline matching screenshot */}
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 'clamp(2.4rem, 4.2vw, 3.4rem)',
                  fontWeight: 600,
                  color: '#08203A',
                  lineHeight: 1.15,
                  margin: '0 0 1.75rem 0',
                  letterSpacing: '-0.025em'
                }}
              >
                Scalable{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #2439ff 0%, #9000ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                  }}
                >
                  Technology.
                </span>
                <br />
                Structured{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #2439ff 0%, #9000ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                  }}
                >
                  Execution.
                </span>
                <br />
                Real{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #2439ff 0%, #9000ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                  }}
                >
                  Outcomes.
                </span>
              </h2>

              {/* Exact Paragraph copy with bold highlights */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(1rem, 1.25vw, 1.1rem)',
                  color: '#4B5563',
                  lineHeight: 1.8,
                  margin: 0,
                  maxWidth: '560px'
                }}
              >
                Nuventraa provides{' '}
                <strong style={{ color: '#08203A', fontWeight: 700 }}>
                  software consulting services
                </strong>{' '}
                to help organizations design, build, and scale robust digital systems. We work with enterprises and government institutions to translate business needs into{' '}
                <strong style={{ color: '#08203A', fontWeight: 700 }}>
                  secure, scalable, and high-performance technology solutions
                </strong>.
              </p>
            </div>

            {/* Right Column: Exact 2-Image Overlapping Composition */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 'clamp(2rem, 4vw, 3.5rem)',
                paddingRight: 'clamp(1.5rem, 3vw, 2.5rem)'
              }}
            >
              {/* Main Top Image: Meeting / Handshake */}
              <div
                style={{
                  width: '100%',
                  maxWidth: '490px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 16px 40px rgba(8, 32, 58, 0.1)',
                  border: '1px solid #EEF2F6',
                  position: 'relative'
                }}
              >
                <img
                  src="/assets/nuventraa/software-consulting-meeting.jpg"
                  alt="Software Consulting Meeting"
                  style={{
                    width: '100%',
                    height: '380px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>

              {/* Overlapping Bottom Image: Team desk working with tablet & notes */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  width: '64%',
                  maxWidth: '330px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '10px',
                  boxShadow: '0 20px 48px -10px rgba(8, 32, 58, 0.18)',
                  border: '1px solid #E2E8F0',
                  zIndex: 2
                }}
              >
                <img
                  src="/assets/nuventraa/software-consulting-desk.png"
                  alt="Software Architecture & Planning"
                  style={{
                    width: '100%',
                    height: '210px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    display: 'block'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHAT WE OFFER (EXACT SCREENSHOT MATCH - 3x2 GRID)
          ========================================================================= */}
      <section
        style={{
          padding: 'clamp(4.5rem, 6.5vw, 6.5rem) 0',
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid #F1F5F9',
          position: 'relative'
        }}
      >
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
          {/* Section Header with Dashed Underline */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(2.5rem, 4vw, 3.5rem) auto' }}>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(2.1rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                color: '#08203A',
                lineHeight: 1.25,
                margin: 0,
                letterSpacing: '-0.02em'
              }}
            >
              What We Offer
            </h2>

            {/* Dashed underline matching screenshot */}
            <div
              style={{
                width: '160px',
                height: '0',
                borderBottom: '2px dashed #94A3B8',
                margin: '0.75rem auto 0 auto'
              }}
            />
          </div>

          {/* 3x2 Grid of Offerings */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
              gap: 'clamp(1.5rem, 2.2vw, 2rem)'
            }}
          >
            {whatWeOffer.map((item, idx) => {
              const isHovered = hoveredOffer === idx;
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredOffer(idx)}
                  onMouseLeave={() => setHoveredOffer(null)}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    padding: '2.25rem 2rem',
                    border: `1px solid ${isHovered ? 'rgba(36, 57, 255, 0.35)' : '#E2E8F0'}`,
                    boxShadow: isHovered
                      ? '0 16px 38px rgba(36, 57, 255, 0.12)'
                      : '0 8px 24px rgba(8, 32, 58, 0.04)',
                    transform: isHovered ? 'translateY(-5px)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Header Row: Icon on Left, Title on Right */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '10px',
                        backgroundColor: '#F1F5F9',
                        color: isHovered ? '#2439ff' : '#0090A9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <IconComp size={24} strokeWidth={1.8} />
                    </div>

                    <h4
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '1.18rem',
                        fontWeight: 700,
                        color: isHovered ? '#2439ff' : '#08203A',
                        lineHeight: 1.3,
                        margin: 0,
                        transition: 'color 0.25s ease'
                      }}
                    >
                      {item.title}
                    </h4>
                  </div>

                  {/* Description underneath */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.94rem',
                      color: '#4B5563',
                      lineHeight: 1.65,
                      margin: 0
                    }}
                  >
                    {item.descPre}
                    <strong style={{ color: '#08203A', fontWeight: 600 }}>
                      {item.descHighlight}
                    </strong>
                    {item.descPost}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OUR APPROACH (EXACT SCREENSHOT MATCH)
          ========================================================================= */}
      <section
        style={{
          padding: 'clamp(4.5rem, 6.5vw, 6.5rem) 0',
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid #F1F5F9',
          position: 'relative'
        }}
      >
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto clamp(2rem, 3.5vw, 3rem) auto' }}>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(2.1rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                color: '#08203A',
                lineHeight: 1.25,
                margin: 0,
                letterSpacing: '-0.02em'
              }}
            >
              Our Approach
            </h2>

            {/* Dashed line matching screenshot */}
            <div
              style={{
                width: '160px',
                height: '0',
                borderBottom: '2px dashed #94A3B8',
                margin: '0.75rem auto 1.5rem auto'
              }}
            />

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                color: '#4B5563',
                lineHeight: 1.7,
                margin: 0
              }}
            >
              We follow a structured consulting methodology to ensure predictable outcomes:
            </p>
          </div>

          {/* Infographic Graphic with Image 1 (Our-Approach-2.png) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              src="/assets/nuventraa/Our-Approach-2.png"
              alt="Our Approach: Assess, Design, Build & Integrate, Deploy & Scale, Support & Optimize"
              style={{
                width: '100%',
                maxWidth: '1100px',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 15px 35px rgba(8, 32, 58, 0.06))',
                display: 'block'
              }}
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHY NUVENTRAA (EXACT SCREENSHOT MATCH)
          ========================================================================= */}
      <section
        style={{
          padding: 'clamp(3rem, 6vw, 5.5rem) 1.5rem clamp(4rem, 7vw, 6.5rem) 1.5rem',
          backgroundColor: '#FFFFFF',
          position: 'relative'
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Image with soft rounded background container */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* Background shape */}
            <div
              style={{
                position: 'absolute',
                top: '-16px',
                left: '-16px',
                width: '85%',
                height: '85%',
                backgroundColor: '#EEF2F6',
                borderRadius: '28px',
                zIndex: 0
              }}
            />

            {/* Foreground Team Image */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '22px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(8, 32, 58, 0.16)',
                border: '1px solid #E2E8F0',
                backgroundColor: '#FFFFFF',
                width: '100%',
                maxWidth: '520px'
              }}
            >
              <img
                src="/assets/nuventraa/why-us.png"
                alt="Why Nuventraa - Enterprise Software Consulting"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                fontWeight: 800,
                color: '#08203A',
                lineHeight: 1.2,
                margin: '0 0 2rem 0',
                letterSpacing: '-0.02em'
              }}
            >
              Why{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2439ff 0%, #9000ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Nuventraa
              </span>
            </h2>

            {/* 4 Numbered Points */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                marginBottom: '2.25rem'
              }}
            >
              {[
                'Enterprise-Grade Engineering Expertise',
                'Experience in Government & Complex Ecosystems',
                'Scalable, Secure, and Modular Solutions',
                'End-to-End Consulting to Implementation Support'
              ].map((point, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#5B2C3B',
                      color: '#FFFFFF',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {index + 1}
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                      fontWeight: 600,
                      color: '#222B38',
                      lineHeight: 1.4
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact Us + Button */}
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                backgroundColor: '#5B2C3B',
                color: '#FFFFFF',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 600,
                padding: '0.85rem 1.85rem',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(91, 44, 59, 0.25)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2439ff';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(36, 57, 255, 0.35)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#5B2C3B';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(91, 44, 59, 0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Contact Us</span>
              <Plus size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
