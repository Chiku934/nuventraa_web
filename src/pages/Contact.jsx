import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  Award, 
  ShieldCheck,
  ChevronDown,
  Sparkles,
  Building2,
  FileCheck,
  CheckCircle,
  MessageCircle
} from 'lucide-react';

import PageBanner from '../components/PageBanner';

export default function Contact() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    sector: 'Textiles & Garments',
    estimatedCapex: '₹5 - 25 Cr',
    serviceInterest: 'subsidies',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.phone) return;
    setSubmitted(true);
  };

  const sectors = [
    'Textiles & Garments',
    'Steel & Fabrication',
    'Agro & Food Processing',
    'Chemicals & Plastics',
    'Renewable Energy',
    'Other Manufacturing'
  ];

  const capexRanges = [
    '₹1 - 5 Cr',
    '₹5 - 25 Cr',
    '₹25 - 100 Cr',
    '₹100+ Cr'
  ];

  const faqs = [
    {
      q: 'When should an industrial unit initiate IPR-2022 subsidy planning?',
      a: 'Ideally before civil construction begins or prior to placing purchase orders for Plant & Machinery. Nuventraa’s Phase 1 ensures that machine specifications, vendor contracts, and bank loan sanctions are structured in strict compliance with statutory policy definitions to avoid line-item disqualification during government audit.'
    },
    {
      q: 'How long does it take to secure Pollution Control Board (CTO) clearances?',
      a: 'With audit-ready documentation and proper effluent/emission management drawings, SPCB approvals are typically processed within 30 to 45 working days through GO-SWIFT single-window routing.'
    },
    {
      q: 'Are textile and apparel units entitled to higher subsidies in Odisha?',
      a: 'Yes. Under the Odisha Apparel and Technical Textiles Policy (OATTP-2022), textile, apparel, and technical textile units are designated as priority sectors eligible for up to 30% Capital Investment Subsidy (CIS), 100% EPF/ESI employer contribution reimbursement, and concessional power tariffs.'
    },
    {
      q: 'What is Nuventraa’s zero-rejection policy for documentation?',
      a: 'We conduct rigorous pre-audits of machinery invoices, supplier GST compliance, bank payment proofs, and statutory registrations before file submission, proactively resolving red flags before departmental submission.'
    }
  ];

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', width: '100%' }}>
      {/* =========================================================================
          PAGE BANNER (Clean Minimalist Architectural Backdrop)
          ========================================================================= */}
      <PageBanner 
        breadcrumbCurrent="Contact & Consultation"
        badge="Bhubaneswar Headquarters"
        title="Connect with Our"
        titleHighlight="Advisory Team"
        description="Direct executive access to our regulatory specialists and statutory consultants at Saheed Nagar, Bhubaneswar."
      />

      {/* =========================================================================
          MAIN CONTACT & INTAKE GRID (Compact & Balanced Proportions)
          ========================================================================= */}
      <section className="section-full" style={{ padding: 'clamp(2.25rem, 3.5vw, 3rem) 0', background: '#FFFFFF' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
              gap: 'clamp(2rem, 3.5vw, 3rem)',
              alignItems: 'flex-start'
            }}
          >
            {/* Left Column: Saheed Nagar Office Details & Photography */}
            <div>
              <span className="badge badge-navy" style={{ marginBottom: '0.5rem', fontSize: '0.725rem' }}>
                Corporate Headquarters
              </span>
              <h2 
                style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', 
                  color: '#0F2744', 
                  fontWeight: 800, 
                  marginBottom: '0.65rem' 
                }}
              >
                Nuventraa Consulting
              </h2>
              <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Headquartered in Saheed Nagar, Bhubaneswar, our regulatory specialists interface daily with key government directorates, District Industries Centres (DIC), IPICOL, and statutory inspectorates across Odisha.
              </p>

              {/* Compact Photo Frame with Official Address Plaque */}
              <div className="photo-frame" style={{ height: '210px', width: '100%', marginBottom: '1.5rem' }}>
                <img src="/assets/rasulgarh-tower.jpg" alt="Saheed Nagar Corporate Office, Bhubaneswar" />
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    left: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.95)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '0.4rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#0F2744',
                    border: '1px solid rgba(197, 155, 39, 0.4)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  Saheed Nagar Corporate Office, Bhubaneswar
                </div>
              </div>

              {/* Direct Info Cards (Compact 3D) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div 
                  className="card-3d"
                  style={{
                    padding: '1.15rem 1.25rem',
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    borderRadius: '0.85rem'
                  }}
                >
                  <MapPin size={20} color="#C59B27" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: '#0F2744', fontWeight: 700, marginBottom: '0.2rem' }}>
                      Registered Office
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                      Plot No 462, Saheed Nagar, Bhubaneswar, Odisha – 751007
                    </p>
                  </div>
                </div>

                <div 
                  className="card-3d"
                  style={{
                    padding: '1.15rem 1.25rem',
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    borderRadius: '0.85rem'
                  }}
                >
                  <Phone size={20} color="#C59B27" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                      <h4 style={{ fontSize: '0.95rem', color: '#0F2744', fontWeight: 700 }}>
                        Direct Executive Helplines
                      </h4>
                      <span style={{ fontSize: '0.7rem', color: '#059669', fontWeight: 700, background: '#ECFDF5', padding: '0.15rem 0.5rem', borderRadius: '0.3rem' }}>
                        Active 9:30 AM - 7:30 PM
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.9rem' }}>
                      <a href="tel:+919090123562" style={{ color: '#0F2744', fontWeight: 700, textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C59B27'} onMouseLeave={(e) => e.currentTarget.style.color = '#0F2744'}>
                        +91 90901 23562
                      </a>
                      <a href="tel:+919437041019" style={{ color: '#0F2744', fontWeight: 700, textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C59B27'} onMouseLeave={(e) => e.currentTarget.style.color = '#0F2744'}>
                        +91 94370 41019
                      </a>
                    </div>
                  </div>
                </div>

                <div 
                  className="card-3d"
                  style={{
                    padding: '1.15rem 1.25rem',
                    background: '#FAF6EE',
                    border: '1px solid rgba(197, 155, 39, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRadius: '0.85rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Award size={20} color="#C59B27" />
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#886411', textTransform: 'uppercase' }}>
                        Statutory Accreditation
                      </div>
                      <div style={{ fontSize: '0.9rem', color: '#0F2744', fontWeight: 800 }}>
                        GSTIN: 21AFPFS3041D1ZC
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', background: '#FFFFFF', padding: '0.2rem 0.6rem', borderRadius: '0.4rem', border: '1px solid rgba(197, 155, 39, 0.3)', color: '#886411', fontWeight: 700 }}>
                    Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hand-Crafted Pre-Consultation Intake Form */}
            <div 
              className="card-3d-gold"
              style={{
                padding: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                background: '#FFFFFF',
                borderRadius: '1.25rem',
                border: '1.5px solid rgba(197, 155, 39, 0.4)',
                boxShadow: '0 10px 30px -10px rgba(197, 155, 39, 0.12)'
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div 
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: '#ECFDF5',
                      border: '2px solid #059669',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem',
                      color: '#059669'
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.45rem', color: '#0F2744', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Consultation Request Registered
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Thank you, <strong>{formData.contactPerson || 'Sir/Madam'}</strong>. Your inquiry for <strong>{formData.companyName}</strong> has been logged with our regulatory desk. A senior consultant will contact you within 4 business hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline"
                    style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <span className="badge badge-gold" style={{ marginBottom: '0.35rem', fontSize: '0.7rem' }}>
                      Intake Dossier
                    </span>
                    <h3 style={{ fontSize: '1.35rem', color: '#0F2744', fontWeight: 800, marginBottom: '0.25rem' }}>
                      Request Project Consultation
                    </h3>
                    <p style={{ fontSize: '0.825rem', color: '#64748B' }}>
                      Provide brief details for a tailored regulatory & subsidy roadmap.
                    </p>
                  </div>

                  {/* Company & Person */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0F2744', marginBottom: '0.25rem' }}>
                        Enterprise / Company Name *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Utkal Industries Ltd"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: '0.5rem',
                          border: '1px solid #CBD5E1',
                          fontSize: '0.85rem',
                          fontFamily: 'inherit',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0F2744', marginBottom: '0.25rem' }}>
                        Contact Person & Role *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Managing Director"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: '0.5rem',
                          border: '1px solid #CBD5E1',
                          fontSize: '0.85rem',
                          fontFamily: 'inherit',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0F2744', marginBottom: '0.25rem' }}>
                        Mobile Phone Number *
                      </label>
                      <input 
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: '0.5rem',
                          border: '1px solid #CBD5E1',
                          fontSize: '0.85rem',
                          fontFamily: 'inherit',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0F2744', marginBottom: '0.25rem' }}>
                        Corporate Email
                      </label>
                      <input 
                        type="email"
                        placeholder="promoter@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: '0.5rem',
                          border: '1px solid #CBD5E1',
                          fontSize: '0.85rem',
                          fontFamily: 'inherit',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Sector Quick Pills */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0F2744', marginBottom: '0.35rem' }}>
                      Industrial Sector
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {sectors.map((sec) => (
                        <button
                          key={sec}
                          type="button"
                          onClick={() => setFormData({ ...formData, sector: sec })}
                          style={{
                            padding: '0.3rem 0.65rem',
                            borderRadius: '0.4rem',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            border: formData.sector === sec ? '1px solid #C59B27' : '1px solid #E2E8F0',
                            background: formData.sector === sec ? '#FAF6EE' : '#FFFFFF',
                            color: formData.sector === sec ? '#886411' : '#475569',
                          }}
                        >
                          {sec}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Capex Range Quick Pills */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0F2744', marginBottom: '0.35rem' }}>
                      Estimated Capex / Plant & Machinery Investment
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {capexRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormData({ ...formData, estimatedCapex: range })}
                          style={{
                            padding: '0.3rem 0.65rem',
                            borderRadius: '0.4rem',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            border: formData.estimatedCapex === range ? '1px solid #C59B27' : '1px solid #E2E8F0',
                            background: formData.estimatedCapex === range ? '#FAF6EE' : '#FFFFFF',
                            color: formData.estimatedCapex === range ? '#886411' : '#475569',
                          }}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Scope of Interest Dropdown */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0F2744', marginBottom: '0.25rem' }}>
                      Primary Scope of Interest
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.85rem',
                        fontFamily: 'inherit',
                        background: '#FFFFFF',
                        outline: 'none',
                      }}
                    >
                      <option value="subsidies">Odisha IPR-2022 & OATTP Subsidy Realization (Phase 1 & 2)</option>
                      <option value="pollution">Pollution Control Board Clearance (CTE / CTO)</option>
                      <option value="boilers">Indian Boilers Permit & Steam Piping Registration</option>
                      <option value="full">End-to-End Compliance Retainership & Licensing</option>
                    </select>
                  </div>

                  {/* Brief Message */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0F2744', marginBottom: '0.25rem' }}>
                      Plant Location or Specific Requirement
                    </label>
                    <textarea 
                      rows={2}
                      placeholder="e.g. 50-loom weaving unit in Khordha; seeking Phase 1 IPR-2022 pre-audit..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.85rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        resize: 'none'
                      }}
                    />
                  </div>

                  {/* Confidentiality Guarantee */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.725rem', color: '#64748B' }}>
                    <ShieldCheck size={14} color="#059669" />
                    <span>Non-Disclosure & Client Confidentiality Protocol Assured.</span>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-gold"
                    style={{ width: '100%', padding: '0.8rem', fontSize: '0.925rem', fontWeight: 700 }}
                  >
                    <Send size={16} />
                    <span>Submit Consultation Dossier</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPACT FREQUENTLY ASKED QUESTIONS ACCORDION
          ========================================================================= */}
      <section className="section-full bg-3d-grid" style={{ padding: 'clamp(2.25rem, 3.5vw, 3rem) 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="badge badge-navy" style={{ marginBottom: '0.45rem', fontSize: '0.725rem' }}>
              Common Inquiries
            </span>
            <h2 
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.65rem, 2.6vw, 2.15rem)', 
                color: '#0F2744', 
                fontWeight: 800 
              }}
            >
              Industrial Compliance & Subsidies FAQ
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div 
                  key={i}
                  className="card-3d"
                  style={{
                    background: '#FFFFFF',
                    border: isOpen ? '1.5px solid #C59B27' : '1px solid #E2E8F0',
                    borderRadius: '0.75rem',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: '100%',
                      padding: '1.1rem 1.35rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: '#0F2744'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown 
                      size={18} 
                      color="#C59B27" 
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        flexShrink: 0,
                        marginLeft: '0.75rem'
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 1.35rem 1.15rem', color: '#475569', fontSize: '0.875rem', lineHeight: 1.6, borderTop: '1px solid #F1F5F9', paddingTop: '0.85rem' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
