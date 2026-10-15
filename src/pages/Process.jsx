import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  FileCheck2, 
  MessageSquare, 
  CheckCircle, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  ClipboardCheck,
  FileSpreadsheet,
  Building,
  CheckCircle2,
  FileSignature
} from 'lucide-react';

import PageBanner from '../components/PageBanner';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Diagnostic Audit & Needs Assessment',
      icon: Search,
      image: '/assets/consulting-boardroom.jpg',
      phase: 'Stage 01 • Discovery & Feasibility',
      desc: 'We conduct a comprehensive initial discovery of your industrial project, plant machinery specifications, proposed capital expenditure, and operational timelines. We evaluate your current licensing status and benchmark your project against applicable state policies (Odisha IPR-2022 & OATTP-2022).',
      fieldNote: 'Machine serial numbers and project timelines are cross-checked against single-window prerequisites to prevent initial filing disqualification.',
      outputs: ['Compliance Gap Analysis Report', 'Eligible Subsidy Quantum Roadmap', 'Statutory Document Checklist']
    },
    {
      num: '02',
      title: 'Dossier Preparation & Invoice Scrutiny',
      icon: FileCheck2,
      image: '/assets/audit-desk.jpg',
      phase: 'Stage 02 • Audit-Ready Compilation',
      desc: 'Our specialized technical team prepares all statutory application dossiers. For subsidy claims, we conduct invoice-level scrutiny of Plant & Machinery, verify bank loan sanction terms, cross-reference audited financials with the Detailed Project Report (DPR), and purge ineligible items before submission.',
      fieldNote: 'Segregating civil works and auxiliary costs from core Plant & Machinery eliminates departmental audit queries before they can arise.',
      outputs: ['Defect-Free Statutory Dossier', 'Categorized Asset Register', 'Pre-Audited DPR Alignment Matrix']
    },
    {
      num: '03',
      title: 'Departmental Liaison & Inspection Management',
      icon: MessageSquare,
      image: '/assets/engineer-inspection.jpg',
      phase: 'Stage 03 • Government Interface',
      desc: 'We submit your applications via single-window portals (GO-SWIFT) and interface directly with statutory bodies (State Pollution Control Board, Directorate of Boilers, DIC, IPICOL). We proactively manage communications, coordinate physical plant inspections, and promptly resolve departmental queries.',
      fieldNote: 'On-site technical coordination during joint departmental inspections ensures plant machinery ratings match submitted schematic drawings.',
      outputs: ['Inspection Protocols Coordination', 'Real-time Query Resolution Logs', 'Official Status Tracking Reports']
    },
    {
      num: '04',
      title: 'Sanctions, Licensing & Clearance Issuance',
      icon: CheckCircle,
      image: '/assets/cnc-precision.jpg',
      phase: 'Stage 04 • Statutory Issuance',
      desc: 'We secure your formal Consent to Operate (CTO), Boiler clearances, Factory licenses, and formal Subsidy Sanction Letters. We review every issued document to verify that all operating conditions, production capacities, and sanctioned subsidy quantum accurately reflect your full legal entitlements.',
      fieldNote: 'Every issued sanction letter is verified against gazetted policy formulas to ensure zero under-calculation of approved subsidy amounts.',
      outputs: ['Official Government Licenses (CTE/CTO)', 'Formal Subsidy Sanction Letters', 'Compliance Milestone Certificates']
    },
    {
      num: '05',
      title: 'Treasury Disbursements & Ongoing Shield',
      icon: ShieldCheck,
      image: '/assets/odisha-corridor.jpg',
      phase: 'Stage 05 • Continuity & Realization',
      desc: 'Our engagement continues through to final treasury bank credit disbursement. For ongoing industrial compliance, we provide automated renewal alerts, periodic return filing (Form V Environmental Statements), and continuous statutory monitoring to safeguard uninterrupted factory operations.',
      fieldNote: 'Direct treasury credit advice is monitored until actual funds hit the client enterprise’s verified commercial bank account.',
      outputs: ['Treasury Credit Advice Tracking', 'Statutory Renewal Calendar (90/60/30 Day)', 'Annual Environmental Statement (Form V)']
    }
  ];

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', width: '100%' }}>
      {/* =========================================================================
          PAGE BANNER (Clean Minimalist Architectural Backdrop)
          ========================================================================= */}
      <PageBanner 
        breadcrumbCurrent="5-Stage Process"
        badge="Consulting Methodology"
        title="Our 5-Stage Consulting"
        titleHighlight="Process Roadmap"
        description="A disciplined, audit-ready framework from diagnostic gap analysis to final government treasury bank disbursements."
      />



      {/* =========================================================================
          5-STAGE COMPACT PROCESS CARDS
          ========================================================================= */}
      <section className="section-full" style={{ padding: 'clamp(2.25rem, 3.5vw, 3rem) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1020px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div 
                  key={idx}
                  id={`step-card-${idx}`}
                  className="card-3d"
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid #E2E8F0',
                    borderRadius: '1.25rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                    overflow: 'hidden',
                    boxShadow: '0 6px 20px rgba(15, 29, 51, 0.05)'
                  }}
                >
                  {/* Left Column: Stage Photo with Brass Seal Number */}
                  <div style={{ height: '100%', minHeight: '210px', position: 'relative' }}>
                    <img 
                      src={step.image} 
                      alt={step.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    {/* Stage Brass Seal Badge */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: '0.85rem',
                        left: '0.85rem',
                        background: 'linear-gradient(135deg, #DFB757, #C59B27)',
                        color: '#0A192F',
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        fontFamily: "'Playfair Display', Georgia, serif",
                        width: '42px',
                        height: '42px',
                        borderRadius: '0.65rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                        border: '1px solid rgba(255, 255, 255, 0.4)'
                      }}
                    >
                      {step.num}
                    </div>

                    <div 
                      style={{
                        position: 'absolute',
                        bottom: '0.85rem',
                        left: '0.85rem',
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
                      {step.phase}
                    </div>
                  </div>

                  {/* Right Column: Narrative, Consultant Field Note & Deliverables */}
                  <div style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', color: '#0F2744', fontWeight: 800, marginBottom: '0.5rem' }}>
                        {step.title}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>
                        {step.desc}
                      </p>

                      {/* Human Touch: Consultant Advisory Field Note */}
                      <div 
                        style={{
                          background: '#FAF6EE',
                          borderLeft: '3px solid #C59B27',
                          padding: '0.65rem 0.85rem',
                          borderRadius: '0 0.4rem 0.4rem 0',
                          fontSize: '0.8rem',
                          color: '#886411',
                          lineHeight: 1.5,
                          marginBottom: '1rem'
                        }}
                      >
                        <strong>Consultant Field Advisory:</strong> {step.fieldNote}
                      </div>
                    </div>

                    {/* Verified Deliverables Output Box */}
                    <div 
                      style={{
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '0.65rem',
                        padding: '0.75rem 1rem',
                      }}
                    >
                      <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0F2744', textTransform: 'uppercase', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>
                        Verified Outputs & Documentation:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {step.outputs.map((out, i) => (
                          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.775rem', fontWeight: 600, color: '#334155' }}>
                            <CheckCircle2 size={13} color="#059669" />
                            {out}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPACT BOTTOM INITIATION CTA
          ========================================================================= */}
      <section style={{ background: '#FAF6EE', padding: '3rem 0', borderTop: '1px solid rgba(197, 155, 39, 0.25)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '760px' }}>
          <h3 
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)', 
              color: '#0F2744', 
              fontWeight: 800, 
              marginBottom: '0.65rem' 
            }}
          >
            Ready to Begin Stage 01 for Your Industrial Project?
          </h3>
          <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Book a complimentary 30-minute diagnostic session with our Bhubaneswar senior consultants to map your licensing requirements and eligible subsidies under Odisha IPR-2022.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold" style={{ padding: '0.75rem 1.75rem', fontSize: '0.875rem' }}>
              <span>Initiate Stage 01 Diagnostic</span>
              <ArrowRight size={15} />
            </Link>
            <a href="tel:+919437041019" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}>
              <span>Call Helpline: +91 94370 41019</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
