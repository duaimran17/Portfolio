// src/components/ContactForm/ContactForm.jsx
// Form structure with client-side validation and honest state reporting.
// Ready to connect to Formspree, EmailJS, or custom backend when configured.

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, AlertCircle, Mail, Info, ArrowLeft } from 'lucide-react';
import './ContactForm.css';

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };
const INITIAL_ERRORS = { name: '', email: '', subject: '', message: '' };

function validate(fields) {
  const errors = { ...INITIAL_ERRORS };
  if (!fields.name.trim()) errors.name = 'Please enter your name.';
  if (!fields.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!fields.subject.trim()) errors.subject = 'Please enter a subject.';
  if (!fields.message.trim()) errors.message = 'Please enter your message.';
  else if (fields.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [status, setStatus] = useState('idle'); // 'idle' | 'validated'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(form);
    const hasErrors = Object.values(validationErrors).some(Boolean);
    if (hasErrors) {
      setErrors(validationErrors);
      return;
    }

    // ─────────────────────────────────────────────────────────────
    // TO CONNECT AN EMAIL SERVICE LATER (e.g. Formspree / EmailJS):
    // Example:
    // await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form)
    // });
    // ─────────────────────────────────────────────────────────────

    // Honest handling: Form is validated, inform user that service is not configured yet.
    setStatus('validated');
  };

  if (status === 'validated') {
    const mailtoUrl = `mailto:duaimrann17@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Hi Dua,\n\n${form.message}\n\nFrom: ${form.name} (${form.email})`)}`;

    return (
      <motion.div
        className="contact-form__validated-state"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="contact-form__info-badge">
          <Info size={28} className="contact-form__info-icon" />
        </div>
        <h3 className="contact-form__validated-title">Form Validated</h3>
        <p className="contact-form__validated-text">
          Automated email dispatch is not connected to a backend service yet.
          Your message is ready — send it directly to my inbox with one click:
        </p>

        <div className="contact-form__validated-actions">
          <a
            href={mailtoUrl}
            className="btn btn--primary contact-form__mailto-btn"
          >
            <Mail size={16} /> Open in Email App
          </a>

          <button
            type="button"
            className="btn btn--ghost contact-form__edit-btn"
            onClick={() => setStatus('idle')}
          >
            <ArrowLeft size={15} /> Edit Details
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="contact-name">Full Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''}`}
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            aria-describedby={errors.name ? 'error-name' : undefined}
            aria-invalid={!!errors.name}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.span
                id="error-name"
                className="contact-form__error"
                role="alert"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
              >
                <AlertCircle size={12} /> {errors.name}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            className={`contact-form__input ${errors.email ? 'contact-form__input--error' : ''}`}
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            aria-describedby={errors.email ? 'error-email' : undefined}
            aria-invalid={!!errors.email}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.span
                id="error-email"
                className="contact-form__error"
                role="alert"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
              >
                <AlertCircle size={12} /> {errors.email}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-subject">Subject</label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          className={`contact-form__input ${errors.subject ? 'contact-form__input--error' : ''}`}
          placeholder="What's this about?"
          value={form.subject}
          onChange={handleChange}
          aria-describedby={errors.subject ? 'error-subject' : undefined}
          aria-invalid={!!errors.subject}
        />
        <AnimatePresence>
          {errors.subject && (
            <motion.span
              id="error-subject"
              className="contact-form__error"
              role="alert"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
            >
              <AlertCircle size={12} /> {errors.subject}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className={`contact-form__input contact-form__textarea ${errors.message ? 'contact-form__input--error' : ''}`}
          placeholder="Write your message here…"
          value={form.message}
          onChange={handleChange}
          aria-describedby={errors.message ? 'error-message' : undefined}
          aria-invalid={!!errors.message}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.span
              id="error-message"
              className="contact-form__error"
              role="alert"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
            >
              <AlertCircle size={12} /> {errors.message}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <button
        type="submit"
        className="btn btn--primary contact-form__submit"
      >
        <Send size={15} /> Send Message
      </button>
    </form>
  );
}
