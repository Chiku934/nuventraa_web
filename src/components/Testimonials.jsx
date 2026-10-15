import React from 'react';
import { Quote, Star, Building2, CheckCircle, MapPin } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      company: 'Chirag Industries',
      sector: 'Industrial Manufacturing & Engineering',
      location: 'Bhubaneswar, Odisha',
      image: '/assets/heavy-steel-plant.jpg',
      quote:
        'Their expertise in licensing and documentation processes streamlined our compliance efforts. We saved substantial time and avoided costly regulatory errors during our plant expansion.',
      person: 'Executive Director',
      badge: 'Boiler & SPCB Clearances'
    },
    {
      company: 'Highland Agro',
      sector: 'Agro & Food Processing Processing Units',
      location: 'Bhubaneswar Industrial Zone',
      image: '/assets/agro-plant.jpg',
      quote:
        'Thanks to their detailed guidance, our licensing applications were approved quickly, and our statutory documentation is now thoroughly organized, compliant, and completely audit-ready.',
      person: 'Managing Partner',
      badge: 'Consent to Operate (CTO)'
    },
    {
      company: 'Panda Infrastructures',
      sector: 'Infrastructure & Civil Fabrication',
      location: 'Odisha Industrial Corridor',
      image: '/assets/odisha-corridor.jpg',
      quote:
        'They provided clear, expert advice on complex licensing regulations and subsidy structuring under IPR-2022, which made the entire government interface process seamless for our engineering team.',
      person: 'Head of Operations',
      badge: 'IPR-2022 Incentive Filing'
    },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '2rem' }}>
      {testimonials.map((item, idx) => (
        <div 
          key={idx}
          className="card-3d"
          style={{
            background: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {/* Client Facility Photo */}
          <div style={{ height: '180px', width: '100%', position: 'relative', overflow: 'hidden' }}>
            <img 
              src={item.image} 
              alt={item.company}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.95)'
              }}
            />
            <div 
              style={{
                position: 'absolute',
                top: '0.75rem',
                left: '0.75rem',
                background: 'rgba(255, 255, 255, 0.95)',
                padding: '0.3rem 0.65rem',
                borderRadius: '0.5rem',
                fontSize: '0.725rem',
                fontWeight: 700,
                color: '#0F2744',
                border: '1px solid rgba(197, 155, 39, 0.35)',
                boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
              }}
            >
              {item.badge}
            </div>
          </div>

          {/* Testimonial Content */}
          <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
            <div>
              {/* Stars & Quote */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.2rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#C59B27" color="#C59B27" />
                  ))}
                </div>
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#FAF6EE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Quote size={16} color="#C59B27" />
                </div>
              </div>

              <p style={{ fontSize: '0.925rem', color: '#334155', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                "{item.quote}"
              </p>
            </div>

            <div 
              style={{
                borderTop: '1px solid #F1F5F9',
                paddingTop: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <div 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '0.625rem',
                  background: '#F1F5F9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0F2744',
                  fontWeight: 700,
                  border: '1px solid #E2E8F0'
                }}
              >
                <Building2 size={20} color="#0F2744" />
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#0F2744', fontSize: '0.975rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  {item.company}
                  <CheckCircle size={14} color="#059669" />
                </div>
                <div style={{ fontSize: '0.775rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <MapPin size={12} color="#C59B27" /> {item.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
