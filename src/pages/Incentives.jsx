import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Coins,
  Users,
  Receipt,
  Zap,
  FileCheck,
  ShieldAlert,
  CheckCircle,
  ArrowRight,
  Sparkles,
  FileSpreadsheet,
  Award,
  Building2,
  Scale,
  ChevronRight,
  Clock,
  Briefcase
} from 'lucide-react';
import SubsidyCalculator from '../components/SubsidyCalculator';
import PageBanner from '../components/PageBanner';

export default function Incentives() {
  const [activeCategory, setActiveCategory] = useState('all');

  const eligibleIncentives = [
    {
      id: 'cis',
      category: 'capex',
      title: 'Capital Investment Subsidy (CIS)',
      code: 'Fixed Capital Realization',
      badge: '30% (No Cap) / 40% up to ₹50 Cr',
      image: '/assets/textile-plant.jpg',
      statutoryRef: 'Odisha IPR-2022 § Clause 12.1 & OATTP-2022 § Clause 3',
      rate: '30% - 40%',
      desc: '30% Capital Investment Subsidy on actual investment in Plant & Machinery (excluding land & building) with no upper cap under IPR-2022; 40% CIS up to INR 50 Crore under Sectoral Policy OATTP-2022, disbursed in a phased manner over 5 years from commercial production.',
      deliverable: 'Rigorous invoice scrutiny, plant inspection coordination, and eligible component isolation to maximize approved claim quantum.',
      eligibility: ['Manufacturing Units', 'Textiles & Garments', 'Food Processing', 'Engineering Units']
    },
    {
      id: 'epf',
      category: 'payroll',
      title: 'Employment Cost Subsidy (EPF/ESI & Wage)',
      code: 'Statutory Payroll Reimbursement',
      badge: '100% EPF/ESI (7 Yrs) | ₹7,000/mo Wage (5 Yrs)',
      image: '/assets/agro-plant.jpg',
      statutoryRef: 'Odisha IPR-2022 § Clause 14.3 & OATTP-2022 § Clause 4',
      rate: '100% EPF/ESI + ECS',
      desc: '100% exemption / reimbursement of employer contribution towards EPF and ESI for 7 years for skilled/semi-skilled domicile workers (IPR-2022); Employment Cost Subsidy (ECS) @ INR 7,000/female & INR 6,000/male worker per month for 5 years (OATTP-2022).',
      deliverable: 'Monthly muster roll alignment, domicile verification, ESI/EPF challan reconciliation, and statutory ledger compilation.',
      eligibility: ['Domicile Employees', 'Min. 50% Local Workforce', 'PF/ESI Compliant Units']
    },
    {
      id: 'sgst',
      category: 'tax',
      title: 'SGST Net Tax Reimbursement',
      code: 'Fiscal Offset Mechanism',
      badge: '100% Net SGST (Up to 200% P&M)',
      image: '/assets/cnc-precision.jpg',
      statutoryRef: 'Odisha IPR-2022 § Clause 13.2 (Net SGST Refund)',
      rate: '100% Net SGST',
      desc: 'Policy provision for 100% reimbursement of net SGST paid on sale of finished goods manufactured within Odisha, with an overall ceiling of 200% of Plant & Machinery cost (and up to 300% on special priority sectors).',
      deliverable: 'GST return reconciliation (GSTR-1, GSTR-3B) with production records, treasury challan audit, and departmental filing.',
      eligibility: ['Active Production Units', 'Intra-state Sales', 'Clean GSTR Ledger']
    },
    {
      id: 'power',
      category: 'utility',
      title: 'Power Tariff Relief & Duty Exemption',
      code: 'Operational Energy Subsidies',
      badge: '₹2.00 / Unit + 100% Duty Waiver (10 Yrs)',
      image: '/assets/solar-park.jpg',
      statutoryRef: 'Odisha IPR-2022 § Clauses 15.1 & 15.2',
      rate: '₹2.00/unit + 100% Duty',
      desc: '100% exemption from payment of electricity duty for 10 years, plus power tariff reimbursement of Rs 2.00 per unit consumed and purchased from local DISCOMs for a period of 10 years from commercial production.',
      deliverable: 'Energy consumption audit, sub-meter logbook verification, DISCOM billing reconciliation, and electricity duty waiver certification.',
      eligibility: ['HT / LT Connections', 'Captive / Grid Supply', 'Industrial Tariffs']
    },
    {
      id: 'renewable',
      category: 'utility',
      title: 'Renewable Energy Surcharge Benefits',
      code: 'Green Power Transmission Relief',
      badge: '100% Surcharge & Transmission Waiver',
      image: '/assets/solar-park.jpg',
      statutoryRef: 'State Renewable Energy Policy & IPR-2022 § Clause 15.3',
      rate: '100% Waiver (10 Yrs)',
      desc: '100% exemption / reimbursement of Cross Subsidy Surcharge, Additional Surcharge & State Transmission Charges on Renewable Energy procured from State-based energy plants / GRIDCO for a period of 10 years.',
      deliverable: 'Green energy open access certification, wheeling charge audit, and GRIDCO surcharge reimbursement documentation.',
      eligibility: ['Captive Solar / Wind', 'GRIDCO Power Procurement', 'Open Access Industrial Consumers']
    }
  ];

  const filteredIncentives = activeCategory === 'all'
    ? eligibleIncentives
    : eligibleIncentives.filter(item => item.category === activeCategory);

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', width: '100%' }}>
      {/* =========================================================================
          PAGE BANNER (Clean Minimalist Architectural Backdrop)
          ========================================================================= */}
      <PageBanner
        breadcrumbCurrent="Government Subsidies"
        badge="Odisha IPR-2022 & OATTP-2022"
        title="Industrial Incentives &"
        titleHighlight="Subsidy Realization"
        description="End-to-end consulting support to convert policy eligibility into sanctioned claims (CIS, EPF/ESI, SGST) and direct bank disbursements."
      />

      {/* =========================================================================
          THE MANDATE: SCOPE OF WORK FROM WHATSAPP ABSTRACT (Compact Two-Phase Card)
          ========================================================================= */}
      <section className="section-full" style={{ padding: 'clamp(2.25rem, 3.5vw, 3rem) 0', background: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, #FAF6EE 0%, #FFFFFF 100%)',
              border: '1.5px solid rgba(197, 155, 39, 0.4)',
              borderRadius: '1.25rem',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              marginBottom: '2.5rem',
              boxShadow: '0 12px 30px -10px rgba(197, 155, 39, 0.12)'
            }}
          >
            {/* Top Row: Executive Scope Narrative + Compact Photo Frame */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
                gap: '2rem',
                alignItems: 'center',
                marginBottom: '1.75rem'
              }}
            >
              <div>
                <span className="badge badge-gold" style={{ marginBottom: '0.5rem', fontSize: '0.725rem' }}>
                  Statutory Consulting Protocol
                </span>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 'clamp(1.5rem, 2.4vw, 1.95rem)',
                    color: '#0F2744',
                    fontWeight: 800,
                    marginBottom: '0.65rem'
                  }}
                >
                  Strategic Incentive Realization Framework
                </h2>
                <p style={{ fontSize: '0.925rem', color: '#334155', lineHeight: 1.65 }}>
                  The engagement covers end-to-end documentation, filing support, and government-interface assistance to move from policy eligibility to approvals, sanction letters, and actual bank disbursements. Structured in two clear phases to guarantee <strong>audit-ready documentation and prompt realization</strong>.
                </p>
              </div>

              {/* Compact Photo Frame with Official Audit Badge */}
              <div className="photo-frame" style={{ height: '200px' }}>
                <img src="/assets/audit-desk.jpg" alt="Invoice-Level Due Diligence Desk" />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    left: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.95)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '0.4rem',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: '#886411',
                    border: '1px solid rgba(197, 155, 39, 0.4)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
                  }}
                >
                  Phase 2: Invoice-Level Scrutiny Desk
                </div>
              </div>
            </div>

            {/* Two Compact Phase Dossier Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.25rem' }}>
              {/* Phase 1 Box */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '1rem',
                  padding: '1.4rem 1.5rem',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 12px rgba(15, 29, 51, 0.04)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                  <span className="badge badge-navy" style={{ fontSize: '0.7rem', padding: '0.2rem 0.55rem' }}>Phase 01</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#C59B27' }}>Policy Interpretation → Strategy</span>
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#0F2744', fontWeight: 800, marginBottom: '0.65rem' }}>
                  Strategic Incentive Structuring
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.85rem', color: '#475569' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                    <CheckCircle size={15} color="#059669" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                    <span><strong>Policy Interpretation:</strong> Rigorous analysis under IPR-2022 & OATTP-2022 clauses.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                    <CheckCircle size={15} color="#059669" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                    <span><strong>Eligibility Scrutiny:</strong> Unit status, commercial production dates, domicile quotas.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                    <CheckCircle size={15} color="#059669" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                    <span><strong>Multi-Stream Mapping:</strong> Structuring CIS, EPF-ESI, SGST, & Power Tariff claims.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                    <CheckCircle size={15} color="#059669" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                    <span><strong>Red-Flag Elimination:</strong> Pre-submission audit to prevent queries or holds.</span>
                  </li>
                </ul>
              </div>

              {/* Phase 2 Box */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '1rem',
                  padding: '1.4rem 1.5rem',
                  border: '1.5px solid rgba(197, 155, 39, 0.4)',
                  boxShadow: '0 4px 12px rgba(197, 155, 39, 0.08)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                  <span className="badge badge-gold" style={{ fontSize: '0.7rem', padding: '0.2rem 0.55rem' }}>Phase 02</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669' }}>Audit-Ready Preparation</span>
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#0F2744', fontWeight: 800, marginBottom: '0.65rem' }}>
                  Due Diligence & Documentation Control
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.85rem', color: '#475569' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                    <CheckCircle size={15} color="#C59B27" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                    <span><strong>Invoice-Level Scrutiny:</strong> Categorizing Plant & Machinery line items to statutory definitions.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                    <CheckCircle size={15} color="#C59B27" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                    <span><strong>Financial Reconciliation:</strong> Verifying term loans, CA audited balance sheets, DPR alignment.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                    <CheckCircle size={15} color="#C59B27" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                    <span><strong>Statutory Dossier Setup:</strong> Compilation of GST, PF/ESI challans, and single-window filings.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                    <CheckCircle size={15} color="#C59B27" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                    <span><strong>Treasury Disbursement:</strong> Tracking sanction orders through to direct bank credit.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* =========================================================================
              ELIGIBLE INCENTIVE STREAMS (With Category Filter Pills)
              ========================================================================= */}
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 1.75rem' }}>
            <span className="badge badge-navy" style={{ marginBottom: '0.45rem', fontSize: '0.725rem' }}>
              Statutory Incentive Streams
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.75rem, 2.8vw, 2.25rem)',
                color: '#0F2744',
                fontWeight: 800,
                marginBottom: '0.5rem'
              }}
            >
              Eligible Incentive Streams Under IPR-2022
            </h2>
            <p style={{ fontSize: '0.925rem', color: '#64748B' }}>
              Substantial fiscal reimbursements available to industrial units across Odisha. Filter by subsidy category below:
            </p>

            {/* Filter Pills */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
              {[
                { id: 'all', label: 'All Subsidies' },
                { id: 'capex', label: 'Capital & Machinery (CIS)' },
                { id: 'payroll', label: 'Employment (EPF/ESI)' },
                { id: 'tax', label: 'SGST Tax Offset' },
                { id: 'utility', label: 'Power & Duty Relief' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  style={{
                    padding: '0.4rem 0.95rem',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: activeCategory === tab.id
                      ? '1.5px solid #C59B27'
                      : '1px solid #E2E8F0',
                    background: activeCategory === tab.id
                      ? 'linear-gradient(135deg, #FAF6EE, #FFFFFF)'
                      : '#FFFFFF',
                    color: activeCategory === tab.id ? '#886411' : '#475569',
                    boxShadow: activeCategory === tab.id ? '0 2px 8px rgba(197, 155, 39, 0.15)' : 'none'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Incentive Grid with Compact Human Hand-Crafted Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {filteredIncentives.map((inc) => (
              <div
                key={inc.id}
                className="card-3d"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden'
                }}
              >
                {/* Photo Header with Badge */}
                <div style={{ height: '160px', width: '100%', position: 'relative' }}>
                  <img src={inc.image} alt={inc.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.65rem',
                      right: '0.65rem',
                      background: 'rgba(255, 255, 255, 0.96)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '999px',
                      fontSize: '0.725rem',
                      fontWeight: 800,
                      color: '#0F2744',
                      border: '1px solid rgba(197, 155, 39, 0.4)',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                    }}
                  >
                    {inc.badge}
                  </div>
                </div>

                {/* Content Area */}
                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#C59B27', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {inc.code}
                    </span>
                    <h3 style={{ fontSize: '1.1rem', color: '#0F2744', fontWeight: 800, margin: '0.25rem 0 0.5rem' }}>
                      {inc.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.55, marginBottom: '0.85rem' }}>
                      {inc.desc}
                    </p>

                    {/* Eligibility Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                      {inc.eligibility.map((el, i) => (
                        <span key={i} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '0.15rem 0.45rem', borderRadius: '0.3rem', fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Nuventraa Action Bottom Strip */}
                  <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '0.75rem', fontSize: '0.775rem', color: '#886411', background: '#FCF9EE', padding: '0.55rem 0.75rem', borderRadius: '0.45rem' }}>
                    <strong>Nuventraa Protocol:</strong> {inc.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* =========================================================================
              STATUTORY ELIGIBILITY & DISBURSEMENT MATRIX (Human Hand-Crafted Table)
              ========================================================================= */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '1rem',
              padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              marginBottom: '3rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <span className="badge badge-gold" style={{ fontSize: '0.7rem', padding: '0.2rem 0.55rem', marginBottom: '0.35rem' }}>
                  Statutory Reference Matrix
                </span>
                <h3 style={{ fontSize: '1.25rem', color: '#0F2744', fontWeight: 800 }}>
                  Odisha IPR-2022 Policy Entitlement Summary
                </h3>
              </div>
              <span style={{ fontSize: '0.775rem', color: '#64748B', fontWeight: 600 }}>
                Department of Industries, Govt. of Odisha Verified
              </span>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: '#F8FAFC', borderBottom: '2px solid #E2E8F0' }}>
                    <th style={{ padding: '0.75rem 1rem', color: '#0F2744', fontWeight: 700 }}>Incentive Head</th>
                    <th style={{ padding: '0.75rem 1rem', color: '#0F2744', fontWeight: 700 }}>Quantum / Rate</th>
                    <th style={{ padding: '0.75rem 1rem', color: '#0F2744', fontWeight: 700 }}>Key Statutory Condition</th>
                    <th style={{ padding: '0.75rem 1rem', color: '#0F2744', fontWeight: 700 }}>Nuventraa Turnaround</th>
                  </tr>
                </thead>
                <tbody style={{ color: '#475569' }}>
                  <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#0F2744' }}>Capital Investment Subsidy (CIS)</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#C59B27', fontWeight: 800 }}>Up to 30% on Plant & Machinery</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Commercial production commenced within policy timeline; term loan active.</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#059669', fontWeight: 700 }}>Dossier audit & submission within 21 days</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#0F2744' }}>Employment Cost (EPF/ESI)</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#C59B27', fontWeight: 800 }}>100% Employer Contribution</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Domicile workforce compliance; continuous monthly ECR filing.</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#059669', fontWeight: 700 }}>Quarterly roll compilation & claim filing</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#0F2744' }}>SGST Net Tax Reimbursement</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#C59B27', fontWeight: 800 }}>100% Net SGST (5-7 Years)</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Zero tax arrears; clean GSTR-3B reconciliation with e-way bills.</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#059669', fontWeight: 700 }}>Bi-annual ledger reconciliation</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#0F2744' }}>Electricity Tariff & Duty Relief</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#C59B27', fontWeight: 800 }}>₹1-2/unit + 100% Duty Waiver</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Direct industrial connection through TPCODL/TPNODL/TPWODL/TPSODL.</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#059669', fontWeight: 700 }}>Discom billing adjustment assistance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Interactive Calculator Component */}
          <SubsidyCalculator />
        </div>
      </section>

      {/* =========================================================================
          COMPACT BOTTOM CTA
          ========================================================================= */}
      <section style={{ background: '#FAF6EE', padding: '3rem 0', borderTop: '1px solid rgba(197, 155, 39, 0.25)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '740px' }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)',
              color: '#0F2744',
              fontWeight: 800,
              marginBottom: '0.65rem'
            }}
          >
            Don't Leave Millions in Government Subsidies on the Table
          </h3>
          <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Statutory filing windows are time-sensitive. Minor classification mistakes or delayed submissions can permanently forfeit your entitlement. Let our Bhubaneswar team review your DPR and machinery invoices today.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold" style={{ padding: '0.75rem 1.75rem', fontSize: '0.875rem' }}>
              <span>Request Pre-Submission Subsidy Audit</span>
              <ArrowRight size={15} />
            </Link>
            <a href="tel:+919090123562" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}>
              <span>Speak to Subsidy Lead: +91 90901 23562</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
