import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import PageBanner from '../components/PageBanner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'India',
    message: ''
  });

  const [phoneError, setPhoneError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const countries = [
    'India', 'United States', 'United Kingdom', 'Australia', 'Canada',
    'Singapore', 'United Arab Emirates', 'Germany', 'Japan', 'Other'
  ];

  const handlePhoneChange = (e) => {
    // Only accept numeric digits and strictly limit to 10 digits
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: digitsOnly }));

    if (digitsOnly.length === 0) {
      setPhoneError('Mobile number is required.');
    } else if (digitsOnly.length < 10) {
      setPhoneError(`Please enter a complete 10-digit mobile number (${digitsOnly.length}/10 entered).`);
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all required fields (Name, Email, Message)');
      return;
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!phoneDigits || phoneDigits.length !== 10) {
      setPhoneError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setPhoneError('');
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="nuventraa-page-wrapper">
      {/* Page Banner */}
      <PageBanner
        title="Contact"
        titleHighlight="Us"
        description="Get in touch with our expert team to accelerate your industrial clearances, statutory licensing, and government subsidy claims."
        breadcrumbCurrent="Contact us"
      />

      {/* Main Section: Accelerate Your Industrial Approvals */}
      <section className="nuventraa-contact-section">
        <div className="container">
          {/* Section Header */}
          <div style={{ maxWidth: '850px', marginBottom: '2.5rem' }}>
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
              <span>Industrial Advisory Consultation</span>
              <span>═</span>
            </div>

            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
                fontWeight: 800,
                color: '#08203A',
                lineHeight: 1.25,
                margin: '0.35rem 0 0.85rem 0'
              }}
            >
              Accelerate Your{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #2439ff 0%, #9000ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                Industrial Clearances
              </span>
            </h2>

            <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.6, margin: 0, maxWidth: '680px' }}>
              Speak directly with our senior industrial consultants regarding Single Window clearances (GO-SWIFT/IPICOL), OSPCB environmental licensing, DPR preparation, and state subsidy realization.
            </p>
          </div>

          {/* 2-Column Layout: Left Info Cards, Right Contact Form */}
          <div className="nuventraa-contact-layout">
            {/* Left Column: Contact Information Cards */}
            <div className="nuventraa-contact-cards-col">
              {/* Card 1: Corporate Office */}
              <div className="nuventraa-contact-info-card">
                <div className="nuventraa-contact-info-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="nuventraa-contact-info-title">Corporate Office</h4>
                  <p className="nuventraa-contact-info-desc">
                    Plot No 462, Saheed Nagar, Bhubaneswar, Odisha
                  </p>
                </div>
              </div>

              {/* Card 2: Call us */}
              <div className="nuventraa-contact-info-card">
                <div className="nuventraa-contact-info-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="nuventraa-contact-info-title">Call us</h4>
                  <p className="nuventraa-contact-info-desc">
                    <a href="tel:+919090123562" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>
                      +91 90901 23562
                    </a>
                    {' / '}
                    <a href="tel:+919437041019" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>
                      +91 94370 41019
                    </a>
                  </p>
                </div>
              </div>

              {/* Card 3: Mail address */}
              <div className="nuventraa-contact-info-card">
                <div className="nuventraa-contact-info-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="nuventraa-contact-info-title">Mail address</h4>
                  <p className="nuventraa-contact-info-desc">
                    <a href="mailto:info@nuventraa.com" style={{ color: '#2439ff', textDecoration: 'none', fontWeight: 600 }}>
                      info@nuventraa.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="nuventraa-contact-form-wrap">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.1)',
                      color: '#10B981',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem'
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#08203A', marginBottom: '0.5rem' }}>
                    Thank you for reaching out!
                  </h3>
                  <p style={{ color: '#64748B', fontSize: '0.925rem', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
                    We have received your message and our technical advisory team will contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', country: 'India', message: '' });
                      setPhoneError('');
                    }}
                    className="nuventraa-submit-btn"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="nuventraa-form-row">
                    <div className="nuventraa-form-group">
                      <label htmlFor="contact-name">Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Your name*"
                        className="nuventraa-form-control"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="nuventraa-form-group">
                      <label htmlFor="contact-email">Email address *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="Mail*"
                        className="nuventraa-form-control"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="nuventraa-form-row">
                    <div className="nuventraa-form-group">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                        <label htmlFor="contact-phone" style={{ margin: 0 }}>Mobile Number *</label>
                        {formData.phone && (
                          <span
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              color: formData.phone.length === 10 ? '#10B981' : '#F59E0B'
                            }}
                          >
                            {formData.phone.length}/10 digits
                          </span>
                        )}
                      </div>
                      <input
                        id="contact-phone"
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        required
                        placeholder="Enter 10-digit mobile number*"
                        className="nuventraa-form-control"
                        style={{
                          borderColor: phoneError ? '#EF4444' : formData.phone.length === 10 ? '#10B981' : undefined
                        }}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                      />
                      {phoneError && (
                        <span
                          style={{
                            display: 'block',
                            color: '#EF4444',
                            fontSize: '0.8rem',
                            marginTop: '0.35rem',
                            fontWeight: 600
                          }}
                        >
                          {phoneError}
                        </span>
                      )}
                    </div>

                    <div className="nuventraa-form-group">
                      <label htmlFor="contact-country">Country</label>
                      <select
                        id="contact-country"
                        className="nuventraa-form-control"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      >
                        {countries.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="nuventraa-form-group">
                    <label htmlFor="contact-message">Your message *</label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      placeholder="Type message*"
                      className="nuventraa-form-control"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="nuventraa-submit-btn"
                  >
                    <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section - Exact Section from nuventraa.com/contact/ */}
      <section className="nuventraa-map-section">
        <iframe
          title="Nuventraa Location"
          className="nuventraa-map-iframe"
          loading="lazy"
          src="https://maps.google.com/maps?q=Plot%20No%20462%2C%20Saheed%20Nagar%2C%20Bhubaneswar&t=m&z=15&output=embed&iwloc=near"
        />
      </section>
    </div>
  );
}
