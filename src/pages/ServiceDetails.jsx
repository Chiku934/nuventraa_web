import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Headphones,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Zap,
  Cpu,
  Layers,
  Code2,
  Database,
  GraduationCap
} from 'lucide-react';

import PageBanner from '../components/PageBanner';
import { servicesData, getServiceBySlug } from '../data/servicesData';
import './ServiceDetails.css';

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug || 'erp-solutions');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const featureIcons = [Zap, Cpu, ShieldCheck, Layers, Code2];
  const whyIcons = [ShieldCheck, CheckCircle2, Sparkles];

  return (
    <div className="nuventraa-page-wrapper">
      {/* Page Banner with Dynamic Service Title */}
      <PageBanner
        title={service.title}
        titleHighlight={service.title}
        description={service.intro}
        breadcrumbCurrent={service.title}
      />

      <section className="nuventraa-service-detail-section">
        <div className="container">
          <div className="nuventraa-service-detail-layout">

            {/* ---------------- SIDEBAR ---------------- */}
            <aside className="nuventraa-service-sidebar">
              {/* All Services Navigation Widget */}
              <div className="nuventraa-sidebar-widget">
                <h3 className="nuventraa-sidebar-title">
                  <span>Our Services</span>
                  <Layers size={18} color="#2439ff" />
                </h3>
                <ul className="nuventraa-sidebar-menu">
                  {servicesData.map((item) => {
                    const isActive = item.slug === service.slug;
                    return (
                      <li key={item.id}>
                        <Link
                          to={`/service/${item.slug}`}
                          className={`nuventraa-sidebar-link ${isActive ? 'active' : ''}`}
                        >
                          <span>{item.title}</span>
                          <ChevronRight size={16} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Need Help Widget */}
              <div className="nuventraa-sidebar-help-widget">
                <div className="nuventraa-sidebar-help-icon">
                  <Headphones size={26} />
                </div>
                <h4 className="nuventraa-sidebar-help-title">Need Any Help?</h4>
                <p className="nuventraa-sidebar-help-desc">
                  Speak directly with our enterprise consultants and technical architects.
                </p>
                <div style={{ marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
                  <a href="tel:+919090123562" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 700 }}>
                    <Phone size={14} style={{ display: 'inline', marginRight: '6px' }} />
                    +91 90901 23562
                  </a>
                  <a href="tel:+919437041019" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 700 }}>
                    <Phone size={14} style={{ display: 'inline', marginRight: '6px' }} />
                    +91 94370 41019
                  </a>
                  <a href="mailto:info@nuventraa.com" style={{ color: '#93C5FD', textDecoration: 'none' }}>
                    <Mail size={14} style={{ display: 'inline', marginRight: '6px' }} />
                    info@nuventraa.com
                  </a>
                </div>
                <Link to="/contact" className="nuventraa-sidebar-help-btn">
                  <span>Contact Us</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </aside>

            {/* ---------------- MAIN CONTENT ---------------- */}
            <main className="nuventraa-service-main-content">
              {/* Hero Featured Image */}
              <div className="nuventraa-service-hero-img-wrap">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="nuventraa-service-hero-img"
                />
              </div>

              {/* Subtitle & Title */}
              <div className="nuventraa-service-subtitle-badge">
                <span>═</span>
                <span>{service.title}</span>
                <span>═</span>
              </div>

              <h1 className="nuventraa-service-heading">
                {service.title}
              </h1>

              {/* Highlight Intro Blockquote */}
              <div className="nuventraa-service-intro-quote">
                {service.intro}
              </div>

              {/* Detailed Description Paragraphs */}
              {service.descriptionParagraphs?.map((para, i) => (
                <p key={i} className="nuventraa-service-body-p">
                  {para}
                </p>
              ))}

              {/* What We Offer / Key Features */}
              <div className="nuventraa-features-section">
                <h3 className="nuventraa-features-heading">
                  {service.featuresTitle || 'What We Offer'}
                </h3>
                <div className="nuventraa-features-grid">
                  {service.features?.map((feat, i) => {
                    const Icon = featureIcons[i % featureIcons.length];
                    return (
                      <div key={i} className="nuventraa-feature-box">
                        <div className="nuventraa-feature-box-icon">
                          <Icon size={22} />
                        </div>
                        <div>
                          <h4 className="nuventraa-feature-box-title">{feat.title}</h4>
                          <p className="nuventraa-feature-box-desc">{feat.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Why Choose Us */}
              {service.whyChooseUs?.length > 0 && (
                <div className="nuventraa-why-section">
                  <h3 className="nuventraa-features-heading">
                    {service.whyChooseTitle || 'Why Choose Us'}
                  </h3>
                  <div className="nuventraa-why-grid">
                    {service.whyChooseUs.map((why, i) => {
                      const Icon = whyIcons[i % whyIcons.length];
                      return (
                        <div key={i} className="nuventraa-why-card">
                          <div className="nuventraa-why-icon">
                            <Icon size={24} />
                          </div>
                          <h4 className="nuventraa-why-title">{why.title}</h4>
                          <p className="nuventraa-why-desc">{why.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Bottom CTA Banner (xs_cta_style_15) */}
              <div className="nuventraa-service-bottom-cta">
                <h4 className="nuventraa-service-bottom-cta-title">
                  {service.ctaTitle || "Let’s transform your business with our expertise"}
                </h4>
                <Link to="/contact" className="nuventraa-service-bottom-cta-btn">
                  <span>Contact Us</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
