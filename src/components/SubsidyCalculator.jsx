import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, HelpCircle, ArrowRight, CheckCircle2, ShieldCheck, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SubsidyCalculator() {
  const [capex, setCapex] = useState(500); // In Lakhs (5 Crore default)
  const [employees, setEmployees] = useState(60);
  const [sector, setSector] = useState('textile'); // 'textile' or 'manufacturing'

  // Calculations based on Odisha IPR-2022 & OATTP-2022 norms
  const cisPercentage = sector === 'textile' ? 0.30 : 0.20; // 30% under OATTP-2022, 20% general
  const maxCis = sector === 'textile' ? 1000 : 500; // Cap in Lakhs
  const estimatedCis = Math.min(capex * cisPercentage, maxCis);

  // EPF / ESI reimbursement ~ ₹24,000/employee/year for 5 years
  const annualEpf = (employees * 24000) / 100000; // In Lakhs per year
  const fiveYearEpf = annualEpf * 5;

  // Estimated Power & SGST reimbursement benefits
  const estimatedPower = (capex * 0.05);
  const totalEstimatedBenefits = estimatedCis + fiveYearEpf + estimatedPower;

  return (
    <div 
      className="card-3d-gold"
      style={{
        padding: 'clamp(1.5rem, 3vw, 2.25rem)',
        background: '#FFFFFF',
        borderRadius: '1.25rem',
        border: '1.5px solid rgba(197, 155, 39, 0.35)',
        boxShadow: '0 16px 40px -10px rgba(197, 155, 39, 0.14), 0 0 0 1px rgba(197, 155, 39, 0.15)',
      }}
    >
      {/* Header bar with badges */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <span className="badge badge-gold" style={{ padding: '0.25rem 0.65rem', fontSize: '0.725rem' }}>
              <Calculator size={13} /> Interactive Estimator
            </span>
            <span style={{ fontSize: '0.725rem', color: '#059669', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              <ShieldCheck size={13} /> Odisha IPR-2022 Validated
            </span>
          </div>
          <h3 style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.65rem)', color: '#0F2744', fontWeight: 800 }}>
            Odisha IPR-2022 & OATTP Incentive Estimator
          </h3>
          <p style={{ fontSize: '0.875rem', color: '#64748B' }}>
            Simulate eligible Capital Investment Subsidy (CIS) and Employment reimbursements for your proposed unit.
          </p>
        </div>

        <div style={{ background: '#FAF6EE', border: '1px solid rgba(197,155,39,0.3)', padding: '0.4rem 0.85rem', borderRadius: '0.5rem', fontSize: '0.775rem', color: '#886411', fontWeight: 700 }}>
          Phase 1 & 2 Audit Support
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem', alignItems: 'center' }}>
        {/* Controls Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Sector Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#0F2744', marginBottom: '0.4rem' }}>
              Select Industry Sector
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.65rem' }}>
              <button
                type="button"
                onClick={() => setSector('textile')}
                style={{
                  padding: '0.65rem 0.85rem',
                  borderRadius: '0.65rem',
                  fontSize: '0.825rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: sector === 'textile' ? '2px solid #C59B27' : '1px solid #E2E8F0',
                  background: sector === 'textile' ? '#FCF9EE' : '#FFFFFF',
                  color: sector === 'textile' ? '#886411' : '#475569',
                  transition: 'all 0.2s ease',
                  textAlign: 'center'
                }}
              >
                Textile & Apparel (OATTP)
              </button>
              <button
                type="button"
                onClick={() => setSector('manufacturing')}
                style={{
                  padding: '0.65rem 0.85rem',
                  borderRadius: '0.65rem',
                  fontSize: '0.825rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: sector === 'manufacturing' ? '2px solid #C59B27' : '1px solid #E2E8F0',
                  background: sector === 'manufacturing' ? '#FCF9EE' : '#FFFFFF',
                  color: sector === 'manufacturing' ? '#886411' : '#475569',
                  transition: 'all 0.2s ease',
                  textAlign: 'center'
                }}
              >
                General Manufacturing (IPR)
              </button>
            </div>
          </div>

          {/* Capex Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <label style={{ fontSize: '0.825rem', fontWeight: 700, color: '#0F2744' }}>
                Plant & Machinery Investment (Capex)
              </label>
              <span style={{ fontSize: '1rem', fontWeight: 800, color: '#0F2744' }}>
                ₹ {(capex / 100).toFixed(2)} Cr <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 500 }}>({capex} L)</span>
              </span>
            </div>
            <input 
              type="range"
              min="50"
              max="2500"
              step="25"
              value={capex}
              onChange={(e) => setCapex(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: '#C59B27',
                cursor: 'pointer',
                height: '6px',
                borderRadius: '3px'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#94A3B8', marginTop: '0.25rem' }}>
              <span>₹ 50 Lakhs</span>
              <span>₹ 10 Crores</span>
              <span>₹ 25 Crores</span>
            </div>
          </div>

          {/* Employment Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <label style={{ fontSize: '0.825rem', fontWeight: 700, color: '#0F2744' }}>
                Estimated Direct Employment (Workers)
              </label>
              <span style={{ fontSize: '1rem', fontWeight: 800, color: '#0F2744' }}>
                {employees} Personnel
              </span>
            </div>
            <input 
              type="range"
              min="10"
              max="500"
              step="5"
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: '#0F2744',
                cursor: 'pointer',
                height: '6px',
                borderRadius: '3px'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#94A3B8', marginTop: '0.25rem' }}>
              <span>10 Workers</span>
              <span>250 Workers</span>
              <span>500+ Workers</span>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #FCF9EE 0%, #FFFFFF 100%)',
            border: '1.5px solid rgba(197, 155, 39, 0.4)',
            borderRadius: '1rem',
            padding: '1.5rem',
            boxShadow: '0 12px 28px -5px rgba(197, 155, 39, 0.16)',
          }}
        >
          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: '#886411', letterSpacing: '0.04em' }}>
            Estimated Admissible Realization
          </span>
          <div style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0F2744', margin: '0.2rem 0 1rem', lineHeight: 1.15 }}>
            ₹ {(totalEstimatedBenefits / 100).toFixed(2)} Cr
            <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 500, marginLeft: '0.4rem' }}>
              (~ ₹ {totalEstimatedBenefits.toFixed(1)} Lakhs)
            </span>
          </div>

          {/* Breakdown items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', borderBottom: '1px dashed #E2E8F0', paddingBottom: '0.35rem' }}>
              <span style={{ color: '#475569', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={14} color="#C59B27" /> Capital Investment Subsidy (CIS):
              </span>
              <strong style={{ color: '#0F2744' }}>₹ {estimatedCis.toFixed(1)} L</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', borderBottom: '1px dashed #E2E8F0', paddingBottom: '0.35rem' }}>
              <span style={{ color: '#475569', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={14} color="#C59B27" /> EPF / ESI Support (5 Years):
              </span>
              <strong style={{ color: '#0F2744' }}>₹ {fiveYearEpf.toFixed(1)} L</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', paddingBottom: '0.15rem' }}>
              <span style={{ color: '#475569', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={14} color="#C59B27" /> Power Tariff & Duty Relief:
              </span>
              <strong style={{ color: '#0F2744' }}>₹ {estimatedPower.toFixed(1)} L</strong>
            </div>
          </div>

          <Link 
            to="/contact" 
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '0.7rem 1.25rem', fontSize: '0.85rem' }}
          >
            <span>Book Audit & Claim Verification</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
