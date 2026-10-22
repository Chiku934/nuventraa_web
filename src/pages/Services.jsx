import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Factory,
  Banknote,
  Workflow,
  ShieldCheck,
  Flame,
  Building2
} from 'lucide-react';
import PageBanner from '../components/PageBanner';

export default function Services() {
  const servicesList = [
    {
      id: 1,
      title: 'Industrial Investment & Policy Advisory',
      image: '/assets/consulting-boardroom.jpg',
      icon: Factory,
      description: 'End-to-end facilitation across single-window committees (DLSWCA/SLSWCA/IPICOL), DPIIT IEM registration, and policy framework alignment under Odisha IPR-2022 & OATTP-2022.',
      link: '/service/industrial-investment-policy-advisory'
    },
    {
      id: 2,
      title: 'Regulatory & Incentive Enablement',
      image: '/assets/textile-plant.jpg',
      icon: Banknote,
      description: 'Convert policy eligibility into sanctioned claims: Capital Investment Subsidy (CIS up to 30%), 100% Net SGST Reimbursement, 100% EPF/ESI support, and power tariff duty waivers.',
      link: '/service/regulatory-incentive-enablement'
    },
    {
      id: 3,
      title: 'Project Consultancy & Planning',
      image: '/assets/audit-desk.jpg',
      icon: Workflow,
      description: 'Bankable Detailed Project Reports (DPR / TEV), CAPEX coordination, machinery invoice scrutiny, implementation monitoring, and turnkey commissioning readiness.',
      link: '/service/project-consultancy-planning'
    },
    {
      id: 4,
      title: 'Environmental & Operational Licensing',
      image: '/assets/spcb-environmental.jpg',
      icon: ShieldCheck,
      description: 'Complete lifecycle environmental approvals: Consent to Establish (CTE) & Consent to Operate (CTO) from OSPCB, Environmental Clearances (MoEF&CC), and hazardous waste authorizations.',
      link: '/service/environmental-operational-licensing'
    },
    {
      id: 5,
      title: 'Factory & Statutory Compliance',
      image: '/assets/boiler-plant.jpg',
      icon: Flame,
      description: 'Pre-operations statutory licenses: Boiler registration & permits under Boilers Act (Labour & ESI), Factories License, Fire Safety Certificates, and Building Occupancy approvals.',
      link: '/service/factory-statutory-compliance'
    },
    {
      id: 6,
      title: 'Infrastructure & Utility Clearances',
      image: '/assets/heavy-steel-plant.jpg',
      icon: Building2,
      description: 'Land allocation and possession in IDCO industrial estates, industrial water connection via DoWR, Discom operational power sanctions, and Chief Electrical Inspector (CEI) NOCs.',
      link: '/service/infrastructure-utility-clearances'
    }
  ];

  return (
    <div className="nuventraa-page-wrapper">
      {/* Page Banner */}
      <PageBanner
        title="Industrial Services"
        titleHighlight="Services"
        description="Comprehensive industrial investment advisory, regulatory licensing, government subsidies, and project execution support."
        breadcrumbCurrent="Services"
      />

      {/* Main Services Grid Section */}
      <section className="nuventraa-services-page-section">
        <div className="container">
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#2439ff',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '0.5rem'
              }}
            >
              <span>═</span>
              <span>Our Core Capabilities</span>
              <span>═</span>
            </div>

            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)',
                fontWeight: 800,
                color: '#08203A',
                lineHeight: 1.25,
                margin: '0.5rem 0 1rem 0'
              }}
            >
              Comprehensive Industrial &amp; Policy Solutions
            </h2>
            <p style={{ color: '#64748B', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
              Guiding enterprises from initial single-window application and statutory licensing to commercial production and government treasury subsidy realization.
            </p>
          </div>

          {/* 6 Grid Cards */}
          <div className="nuventraa-services-page-grid">
            {servicesList.map((service) => {
              const IconComp = service.icon;
              return (
                <div key={service.id} className="nuventraa-service-card">
                  {/* Featured Image with Icon Badge */}
                  <Link to={service.link} className="nuventraa-service-featured" style={{ display: 'block', textDecoration: 'none' }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                    />
                    <div className="nuventraa-service-icon-badge">
                      <IconComp size={24} />
                    </div>
                  </Link>

                  {/* Title */}
                  <h3 className="nuventraa-service-title">
                    <Link to={service.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {service.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="nuventraa-service-desc">
                    {service.description}
                  </p>

                  {/* Read More Link */}
                  <Link
                    to={service.link}
                    className="nuventraa-service-btn"
                  >
                    <span>Read details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
