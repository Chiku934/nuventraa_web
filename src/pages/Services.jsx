import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Code2,
  Layers,
  Database,
  Cpu,
  GraduationCap,
  Headphones
} from 'lucide-react';
import PageBanner from '../components/PageBanner';

export default function Services() {
  const servicesList = [
    {
      id: 1,
      title: 'Custom Software Development',
      image: '/assets/nuventraa/person-front-computer-working-html-1-scaled-220x220.jpg',
      icon: Code2,
      description: 'At Nuventraa, we design and develop customized software solutions that meet the unique requirements of your business. From concept to deployment, our expert developers deliver robust, scalable, and secure applications.',
      link: '/service/custom-software-development'
    },
    {
      id: 2,
      title: 'Industry-Specific Solutions',
      image: '/assets/nuventraa/standard-quality-control-concept-m-scaled-220x220.jpg',
      icon: Layers,
      description: 'Specializing in diverse domains such as Education, Healthcare, Government, and more, we create software designed to fit your industry’s unique needs. Our expertise helps organizations streamline workflows and scale efficiently.',
      link: '/service/industry-specific-solutions'
    },
    {
      id: 3,
      title: 'Co-operative Society Software',
      image: '/assets/nuventraa/5f8b7e99-45f7-488b-ad14-d2b8ef42ce7f-220x220.jpg',
      icon: Database,
      description: 'Simplify and enhance the management of your cooperative society with our comprehensive software solution - Co-Optive. Designed to support credit operations, deposits, fixed deposits, thrift schemes, and financial accounting.',
      link: '/service/co-operative-society-software'
    },
    {
      id: 4,
      title: 'ERP Development',
      image: '/assets/nuventraa/enterprise-resource-planning-holographic-interface-220x220.jpg',
      icon: Cpu,
      description: 'Transform the way your organization operates with our robust ERP solutions. From resource planning to process automation, we create integrated systems that boost efficiency, minimize redundant costs, and unify data.',
      link: '/service/erp-solutions'
    },
    {
      id: 5,
      title: 'Learning Management Systems (LMS)',
      image: '/assets/nuventraa/service-lms.jpg',
      icon: GraduationCap,
      description: 'Redefine education and corporate training with our feature-rich Learning Management Systems. From content delivery and online assessments to performance tracking, our LMS solutions are designed for seamless engagement.',
      link: '/service/learning-management-systems'
    },
    {
      id: 6,
      title: 'Consulting & Maintenance',
      image: '/assets/nuventraa/service-consulting.jpg',
      icon: Headphones,
      description: 'Your journey with Nuventraa doesn’t end at implementation since our consulting and maintenance services ensure your systems are optimized, up-to-date, and running smoothly with 24/7 technical advisory.',
      link: '/service/consulting-and-maintenance'
    }
  ];

  return (
    <div className="nuventraa-page-wrapper">
      {/* Page Banner matching Nuventraa */}
      <PageBanner
        title="Services"
        titleHighlight="Services"
        description="We provide the necessary technology & software services tailored for your enterprise."
        breadcrumbCurrent="Services"
      />

      {/* Main Services Grid Section - Exact Section from nuventraa.com/services/ */}
      <section className="nuventraa-services-section">
        <div className="container">
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
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
              <span>Services</span>
              <span>═</span>
            </div>

            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
                fontWeight: 800,
                color: '#08203A',
                lineHeight: 1.25,
                margin: '0.5rem 0 1rem 0'
              }}
            >
              We provide the necessary services to you
            </h2>
          </div>

          {/* 6 Grid Cards */}
          <div className="nuventraa-services-grid">
            {servicesList.map((service) => {
              const IconComp = service.icon;
              return (
                <div key={service.id} className="nuventraa-service-card">
                  {/* Featured Pill Image with Icon Badge */}
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
                    <span>Read more</span>
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
