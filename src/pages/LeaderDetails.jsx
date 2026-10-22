import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Users,
  Factory,
  Building2,
  Building,
  Landmark,
  FileText,
  TrendingUp,
  Compass,
  Award,
  ShieldCheck,
  Settings,
  Leaf,
  ClipboardList,
  User,
  MapPin
} from 'lucide-react';
import { leadershipData } from '../data/leadershipData';
import './LeaderDetails.css';

export default function LeaderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find leader by id or slug, fallback to first leader
  const initialLeader = leadershipData.find((l) => l.id === id || l.slug === id) || leadershipData[0];
  const [activeLeaderId, setActiveLeaderId] = useState(initialLeader.id);

  useEffect(() => {
    if (id) {
      const match = leadershipData.find((l) => l.id === id || l.slug === id);
      if (match) {
        setActiveLeaderId(match.id);
      }
    }
  }, [id]);

  const leader = leadershipData.find((l) => l.id === activeLeaderId) || leadershipData[0];
  const activeIndex = leadershipData.findIndex((l) => l.id === leader.id);

  const handleTabChange = (leaderId) => {
    setActiveLeaderId(leaderId);
    navigate(`/leadership/${leaderId}`, { replace: true });
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + leadershipData.length) % leadershipData.length;
    handleTabChange(leadershipData[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % leadershipData.length;
    handleTabChange(leadershipData[nextIndex].id);
  };

  // Helper for rendering icons in expertise pills
  const renderPillIcon = (iconName) => {
    switch (iconName) {
      case 'factory':
        return <Factory size={14} color="#2439ff" />;
      case 'building':
        return <Building size={14} color="#2439ff" />;
      case 'file-text':
        return <FileText size={14} color="#2439ff" />;
      case 'users':
        return <Users size={14} color="#2439ff" />;
      case 'clipboard':
        return <ClipboardList size={14} color="#2439ff" />;
      case 'trending-up':
        return <TrendingUp size={14} color="#2439ff" />;
      case 'shield-check':
        return <ShieldCheck size={14} color="#2439ff" />;
      case 'leaf':
        return <Leaf size={14} color="#2439ff" />;
      case 'briefcase':
        return <Briefcase size={14} color="#2439ff" />;
      default:
        return <CheckCircle2 size={14} color="#2439ff" />;
    }
  };

  // Helper for rendering association icons
  const renderAssocIcon = (iconName) => {
    switch (iconName) {
      case 'landmark':
        return <Landmark size={24} color="#DFB757" />;
      case 'building-2':
        return <Building2 size={24} color="#DFB757" />;
      default:
        return <Briefcase size={24} color="#DFB757" />;
    }
  };

  return (
    <div className="leader-details-page">
      {/* Main Section */}
      <div style={{ padding: 'clamp(2rem, 3.5vw, 3.5rem) 0 4rem 0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.25rem' }}>

          {/* =========================================================================
              TOP SELECTOR BAR (EXACT MOCKUP MATCH)
              ========================================================================= */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.65rem',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}
          >
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#64748B',
                marginRight: '0.25rem'
              }}
            >
              Select Advisor:
            </span>

            {/* Left Chevron */}
            <button
              onClick={handlePrev}
              className="leader-tab-nav-btn"
              aria-label="Previous Advisor"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Selector Pills Container */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '999px',
                padding: '0.35rem 0.45rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(15, 39, 68, 0.04)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}
            >
              {leadershipData.map((l) => {
                const isActive = l.id === leader.id;
                return (
                  <button
                    key={l.id}
                    onClick={() => handleTabChange(l.id)}
                    className={`leader-tab-item ${isActive ? 'active' : 'inactive'}`}
                  >
                    <img
                      src={l.image}
                      alt={l.name}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: isActive ? '1.5px solid #DFB757' : '1.5px solid #CBD5E1'
                      }}
                    />
                    <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
                      <div
                        style={{
                          fontWeight: 800,
                          fontSize: '0.865rem',
                          color: isActive ? '#FFFFFF' : '#0F2744'
                        }}
                      >
                        {l.name}
                      </div>
                      <div
                        style={{
                          fontSize: '0.72rem',
                          color: isActive ? '#94A3B8' : '#64748B',
                          fontWeight: 500
                        }}
                      >
                        {l.domain}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Chevron */}
            <button
              onClick={handleNext}
              className="leader-tab-nav-btn"
              aria-label="Next Advisor"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* =========================================================================
              MAIN HERO CARD (EXACT MOCKUP MATCH)
              ========================================================================= */}
          <div
            key={leader.id}
            className="leader-pane-fade"
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 12px 35px -8px rgba(15, 39, 68, 0.06)',
              padding: 'clamp(1.5rem, 2.5vw, 2.25rem)',
              marginBottom: '2rem',
              backgroundImage: 'radial-gradient(circle at 90% 10%, rgba(223, 183, 87, 0.04) 0%, transparent 60%)',
              position: 'relative'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'clamp(2rem, 3.5vw, 3rem)',
                alignItems: 'center'
              }}
            >
              {/* Column 1: Portrait with Angled Gold Crest (Left) */}
              <div
                style={{
                  flex: '0 0 310px',
                  maxWidth: '320px',
                  width: '100%',
                  margin: '0 auto'
                }}
              >
                <div
                  className="leader-hero-portrait-card"
                  style={{
                    height: '400px',
                    width: '100%'
                  }}
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="leader-hero-portrait-img"
                  />
                </div>
              </div>

              {/* Column 2: Header, Title, Quote & Stats (Right / Main) */}
              <div style={{ flex: '1 1 480px', minWidth: 'min(100%, 320px)' }}>
                {/* Eyebrow Pill */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    background: 'rgba(223, 183, 87, 0.12)',
                    border: '1px solid rgba(197, 155, 39, 0.35)',
                    padding: '0.3rem 0.85rem',
                    borderRadius: '999px',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: '#886411',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '0.75rem'
                  }}
                >
                  <Sparkles size={12} color="#C59B27" />
                  <span>{leader.domain}</span>
                </div>

                {/* Leader Name */}
                <h1
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 'clamp(2.1rem, 3.2vw, 3rem)',
                    color: '#0F2744',
                    fontWeight: 800,
                    lineHeight: 1.15,
                    margin: '0 0 0.35rem 0'
                  }}
                >
                  {leader.name}
                </h1>

                {/* Designation */}
                <div
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#C59B27',
                    marginBottom: '1rem',
                    lineHeight: 1.35
                  }}
                >
                  {leader.designation}
                </div>

                {/* Quote Block with Big Gold Quotes */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    marginBottom: '1.5rem',
                    background: '#FAFBFD',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid #EEF2F6'
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '2.5rem',
                      lineHeight: '1.8rem',
                      color: '#DFB757',
                      fontWeight: 800,
                      userSelect: 'none'
                    }}
                  >
                    “
                  </span>
                  <p
                    style={{
                      fontStyle: 'italic',
                      fontSize: '0.92rem',
                      lineHeight: 1.6,
                      color: '#475569',
                      margin: 0
                    }}
                  >
                    {leader.tagline}
                  </p>
                </div>

                {/* 4 Stat Boxes Horizontal Row (Exact Mockup Match) */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '0.65rem'
                  }}
                >
                  {leader.stats.map((stat, idx) => (
                    <div key={idx} className="leader-hero-stat-card">
                      <div style={{ marginBottom: '0.35rem', color: '#DFB757' }}>
                        {idx === 0 && <Briefcase size={20} color="#C59B27" />}
                        {idx === 1 && <Users size={20} color="#C59B27" />}
                        {idx === 2 && <Factory size={20} color="#C59B27" />}
                        {idx === 3 && <MapPin size={20} color="#C59B27" />}
                      </div>
                      <div
                        style={{
                          fontSize: '0.95rem',
                          fontWeight: 800,
                          color: '#0F2744',
                          lineHeight: 1.2,
                          marginBottom: '0.15rem'
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontSize: '0.68rem',
                          color: '#64748B',
                          lineHeight: 1.25,
                          fontWeight: 500
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          </div>

          {/* =========================================================================
              ROW 1: PROFILE & BACKGROUND + VISION & APPROACH (EXACT MOCKUP MATCH)
              ========================================================================= */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))',
              gap: '1.5rem',
              marginBottom: '1.5rem'
            }}
          >
            {/* Card 1: Professional Profile & Background */}
            <div
              className="leader-white-card"
              style={{
                borderLeft: '4.5px solid #DFB757'
              }}
            >
              <div className="leader-card-header">
                <div className="leader-card-icon-circle gold">
                  <User size={18} />
                </div>
                <h3 className="leader-card-title">Professional Profile &amp; Background</h3>
              </div>

              <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
                {leader.profileBackground}
              </p>
            </div>

            {/* Card 2: Vision & Approach */}
            <div
              className="leader-white-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                <div className="leader-card-header">
                  <div className="leader-card-icon-circle blue">
                    <Compass size={18} />
                  </div>
                  <h3 className="leader-card-title">Vision &amp; Approach</h3>
                </div>

                <p
                  style={{
                    fontSize: '0.925rem',
                    color: '#475569',
                    lineHeight: 1.7,
                    margin: 0,
                    maxWidth: '82%'
                  }}
                >
                  {leader.visionApproach}
                </p>
              </div>

              {/* Decorative Subtle Growth Graphic */}
              <div
                style={{
                  position: 'absolute',
                  right: '1.25rem',
                  bottom: '1rem',
                  opacity: 0.18,
                  pointerEvents: 'none'
                }}
              >
                <TrendingUp size={64} color="#2439ff" />
              </div>
            </div>
          </div>

          {/* =========================================================================
              ROW 2: KEY PILLARS (LEFT) + EXPERTISE & ASSOCIATIONS (RIGHT)
              ========================================================================= */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))',
              gap: '1.5rem',
              alignItems: 'start'
            }}
          >
            {/* Left Column: Key Leadership Pillars (Timeline with Numbered Badges) */}
            <div className="leader-white-card">
              <div className="leader-card-header">
                <div className="leader-card-icon-circle gold">
                  <Landmark size={18} />
                </div>
                <h3 className="leader-card-title">Key Leadership Pillars</h3>
              </div>

              <div style={{ marginTop: '1.25rem' }}>
                {leader.pillars.map((pillar, pIdx) => {
                  const isLast = pIdx === leader.pillars.length - 1;
                  return (
                    <div key={pIdx} className="leader-pillar-row">
                      {/* Number Circle Badge */}
                      <div className="leader-pillar-num-circle">{pillar.num}</div>
                      {!isLast && <div className="leader-pillar-connecting-line" />}

                      {/* Content */}
                      <div style={{ flex: 1, paddingTop: '0.15rem' }}>
                        <h4
                          style={{
                            fontSize: '0.98rem',
                            fontWeight: 700,
                            color: '#0F2744',
                            margin: '0 0 0.3rem 0',
                            lineHeight: 1.3
                          }}
                        >
                          {pillar.title}
                        </h4>
                        <p style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: 1.55, margin: 0 }}>
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Areas of Expertise & Notable Associations (Stacked) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              {/* Card 1: Areas of Expertise */}
              <div className="leader-white-card">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.15rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div className="leader-card-icon-circle gold">
                      <Settings size={18} />
                    </div>
                    <h3 className="leader-card-title">Areas of Expertise</h3>
                  </div>

                  <Link
                    to="/contact"
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#2439ff',
                      textDecoration: 'none'
                    }}
                  >
                    View All
                  </Link>
                </div>

                {/* Pill Badges Grid (Exact Mockup Match) */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                    gap: '0.65rem'
                  }}
                >
                  {leader.expertisePills.map((pill, expIdx) => (
                    <div key={expIdx} className="leader-exp-pill-item">
                      {renderPillIcon(pill.icon)}
                      <span>{pill.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Notable Associations */}
              <div className="leader-white-card">
                <div className="leader-card-header">
                  <div className="leader-card-icon-circle gold">
                    <Award size={18} />
                  </div>
                  <h3 className="leader-card-title">Notable Associations</h3>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '0.85rem'
                  }}
                >
                  {leader.associations.map((assoc, aIdx) => (
                    <div key={aIdx} className="leader-assoc-col">
                      <div style={{ flexShrink: 0, marginTop: '0.2rem' }}>
                        {renderAssocIcon(assoc.icon)}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: '0.825rem',
                            fontWeight: 700,
                            color: '#0F2744',
                            lineHeight: 1.3,
                            marginBottom: '0.2rem'
                          }}
                        >
                          {assoc.title}
                        </div>
                        <div
                          style={{
                            fontSize: '0.72rem',
                            color: '#64748B',
                            lineHeight: 1.35
                          }}
                        >
                          {assoc.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
