import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Flame, 
  FileCheck2, 
  RefreshCw, 
  ArrowRight, 
  CheckCircle2, 
  Building2,
  Workflow,
  Sparkles,
  Layers,
  Award,
  CheckCircle
} from 'lucide-react';

import PageBanner from '../components/PageBanner';

export default function Services() {
  const [activeTab, setActiveTab] = useState('licensing');

  const servicesList = [
    {
      id: 'licensing',
      title: 'Licensing & Statutory Clearances',
      icon: ShieldCheck,
      image: '/assets/boiler-plant.jpg',
      badge: 'State SPCB & Boilers Directorate',
      desc: 'Securing mandatory industrial operating approvals from state and central statutory authorities with zero red-tape delays.',
      items: [
        {
          name: 'State Pollution Control Board (SPCB) CTE & CTO',
          details: 'End-to-end documentation, emission/effluent discharge management reports, and online filing for Consent to Establish (CTE) and Consent to Operate (CTO) across Red, Orange, Green, and White industrial categories.'
        },
        {
          name: 'Indian Boilers Regulation & Permits',
          details: 'Boiler registration, steam pipeline inspection clearance, structural safety certifications, and periodic boiler operation renewals under the Directorate of Factories & Boilers.'
        },
        {
          name: 'Environmental Permissions & Clearances',
          details: 'Preparation of Environmental Management Plans (EMP), compliance monitoring for MoEF&CC / SEIAA guidelines, and statutory environmental statement audits.'
        },
        {
          name: 'Factories Act License & Building Stability',
          details: 'Factory plan approvals, machinery layout scrutiny, worker safety protocol compliance, and Chief Inspector of Factories licensing.'
        }
      ]
    },
    {
      id: 'documentation',
      title: 'Documentation Assistance',
      icon: FileCheck2,
      image: '/assets/audit-desk.jpg',
      badge: 'Zero-Defect Dossiers',
      desc: 'Meticulous preparation and verification of technical applications, statutory registers, and compliance dossiers.',
      items: [
        {
          name: 'Statutory Application Dossier Compilation',
          details: 'Eliminating discrepancies between architectural layouts, machine specifications, and statutory forms to avoid administrative rejection.'
        },
        {
          name: 'Environmental & Hazardous Waste Reports',
          details: 'Detailed Form 1, Form 4 submissions for hazardous waste handling, bio-medical waste compliance, and plastic/e-waste authorization.'
        },
        {
          name: 'Statutory Compliance Registers & Logs',
          details: 'Setup and maintenance of legally mandatory statutory registers under Labour, Factories, and Environmental enactments.'
        },
        {
          name: 'Technical Certifications & NOC Processing',
          details: 'Fire safety NOCs, Ground Water Authority (CGWA) NOCs, and Municipal Town Planning site clearances.'
        }
      ]
    },
    {
      id: 'process',
      title: 'Process Consultancy & Optimization',
      icon: Workflow,
      image: '/assets/cnc-precision.jpg',
      badge: 'Workflow Engineering',
      desc: 'Streamlining your enterprise’s internal approval workflows and institutional compliance management.',
      items: [
        {
          name: 'Approval Workflow Streamlining',
          details: 'Mapping statutory milestones against construction and commissioning timelines to ensure no plant downtime due to pending licenses.'
        },
        {
          name: 'Single Window Portal (GO-SWIFT) Navigation',
          details: 'Mastering the nuances of Odisha’s single-window clearance portal for coordinated inter-departmental clearances without departmental friction.'
        },
        {
          name: 'Internal Compliance Gap Audits',
          details: 'Independent audits of factory operations to identify latent compliance defects before statutory inspectorates perform physical visits.'
        },
        {
          name: 'SOP Standardization for Plant Safety',
          details: 'Developing standardized operating procedures (SOPs) for environmental emission controls, hazardous chemical storage, and boiler safety.'
        }
      ]
    },
    {
      id: 'monitoring',
      title: 'Ongoing Monitoring & Renewal Support',
      icon: RefreshCw,
      image: '/assets/spcb-environmental.jpg',
      badge: 'Continuous Protection',
      desc: 'Guaranteed operational continuity through proactive renewal management and continuous statutory reporting.',
      items: [
        {
          name: 'License Renewal Management Calendar',
          details: 'Automated 90-day, 60-day, and 30-day tracking triggers for CTO, Boiler, Fire, and Factory licenses to prevent lapses and punitive fines.'
        },
        {
          name: 'Statutory Periodic Environmental Returns',
          details: 'Timely filing of Annual Environmental Statements (Form V), half-yearly compliance reports, and ambient air/water monitoring submissions.'
        },
        {
          name: 'Inspection Readiness & Handholding',
          details: 'On-site technical support during official government audits and inspections to address queries raised by inspecting officers.'
        },
        {
          name: 'Regulatory Change Tracking',
          details: 'Real-time advisories on amendments in central/state industrial policies, pollution norms, and safety statutes impacting your unit.'
        }
      ]
    }
  ];

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', width: '100%' }}>
      {/* =========================================================================
          PAGE BANNER (Clean Minimalist Architectural Backdrop)
          ========================================================================= */}
      <PageBanner 
        breadcrumbCurrent="Licensing & Clearances"
        badge="Statutory Clearances"
        title="Industrial Licensing &"
        titleHighlight="Regulatory Clearances"
        description="Eliminating procedural hurdles and securing bulletproof statutory approvals (SPCB CTE/CTO, Boilers, Factories Act) across Odisha."
      />

      {/* =========================================================================
          INTERACTIVE SERVICE TAB SWITCHER (Compact & Refined)
          ========================================================================= */}
      <section className="section-full" style={{ padding: 'clamp(2rem, 3.5vw, 2.75rem) 0', background: '#FFFFFF' }}>
        <div className="container">
          {/* Tabs */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '2rem'
            }}
          >
            {servicesList.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.55rem 1rem',
                    borderRadius: '0.55rem',
                    fontSize: '0.825rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: isActive ? '1.5px solid #C59B27' : '1px solid #E2E8F0',
                    background: isActive ? '#FAF6EE' : '#FFFFFF',
                    color: isActive ? '#0F2744' : '#64748B',
                    boxShadow: isActive ? '0 4px 12px rgba(197, 155, 39, 0.15)' : '0 1px 3px rgba(15, 29, 51, 0.03)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <TabIcon size={15} color={isActive ? '#C59B27' : '#94A3B8'} />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          {servicesList
            .filter((s) => s.id === activeTab)
            .map((active) => (
              <div key={active.id}>
                {/* Visual Banner (Compact 200px height) */}
                <div 
                  className="card-3d"
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid rgba(197, 155, 39, 0.35)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                    gap: '1.25rem',
                    alignItems: 'center',
                    marginBottom: '1.75rem',
                    borderRadius: '1.25rem',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ padding: 'clamp(1.25rem, 2.5vw, 1.85rem)' }}>
                    <span className="badge badge-gold" style={{ marginBottom: '0.45rem', fontSize: '0.7rem' }}>
                      {active.badge}
                    </span>
                    <h2 
                      style={{ 
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)', 
                        color: '#0F2744', 
                        fontWeight: 800, 
                        marginBottom: '0.5rem' 
                      }}
                    >
                      {active.title}
                    </h2>
                    <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {active.desc}
                    </p>
                    <Link to="/contact" className="btn btn-gold" style={{ padding: '0.6rem 1.25rem', fontSize: '0.825rem' }}>
                      <span>Inquire for Your Plant</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                    <img 
                      src={active.image} 
                      alt={active.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: '0.75rem',
                        left: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.94)',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '0.4rem',
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        color: '#0F2744',
                        border: '1px solid rgba(197, 155, 39, 0.35)',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                      }}
                    >
                      Audit-Ready Verified Practice Area
                    </div>
                  </div>
                </div>

                {/* Grid of sub-items (Compact 3D) */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.25rem' }}>
                  {active.items.map((item, idx) => (
                    <div 
                      key={idx}
                      className="card-3d"
                      style={{
                        padding: '1.35rem 1.25rem',
                        background: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        borderRadius: '0.85rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#C59B27', marginBottom: '0.45rem' }}>
                          <CheckCircle2 size={15} />
                          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                            Statutory Scope
                          </span>
                        </div>

                        <h3 style={{ fontSize: '1.05rem', color: '#0F2744', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.35 }}>
                          {item.name}
                        </h3>

                        <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.55 }}>
                          {item.details}
                        </p>
                      </div>

                      <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '0.65rem', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748B' }}>
                        <span>Audit Preparation</span>
                        <span style={{ fontWeight: 700, color: '#059669' }}>Zero Defect Filing</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* =========================================================================
          CROSS-LINK COMPACT BANNER (Subsidy Interface)
          ========================================================================= */}
      <section className="section-full" style={{ background: '#F8FAFC', padding: '2.5rem 0', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div 
            style={{
              background: '#FFFFFF',
              border: '1.5px solid rgba(197, 155, 39, 0.35)',
              borderRadius: '1.15rem',
              padding: 'clamp(1.5rem, 2.5vw, 2.25rem)',
              boxShadow: '0 8px 24px -8px rgba(15, 39, 68, 0.06)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
              gap: '1.75rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="badge badge-gold" style={{ marginBottom: '0.45rem', fontSize: '0.7rem' }}>
                Key Complementary Role
              </span>
              <h3 
                style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.5rem, 2.4vw, 1.85rem)', 
                  color: '#0F2744', 
                  fontWeight: 800, 
                  marginBottom: '0.65rem' 
                }}
              >
                Setting Up in Odisha? Realize Millions in IPR-2022 Subsidies
              </h3>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Statutory licenses (CTE/CTO) are the legal prerequisite to unlocking Capital Investment Subsidies (CIS), SGST reimbursements, and EPF subsidies under Odisha IPR-2022 & OATTP-2022. Nuventraa synchronizes both so you never lose eligibility deadlines.
              </p>
              <Link to="/incentives" className="btn btn-gold" style={{ padding: '0.65rem 1.35rem', fontSize: '0.825rem' }}>
                <span>View Government Incentive Schemes</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="photo-frame" style={{ height: '190px', width: '100%' }}>
              <img src="/assets/odisha-corridor.jpg" alt="Odisha Industrial Manufacturing Corridor" />
              <div 
                style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  left: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '0.4rem',
                  fontSize: '0.725rem',
                  fontWeight: 700,
                  color: '#0F2744',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                }}
              >
                Odisha Industrial Policy Resolution (IPR-2022)
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
