// src/components/ContactForm/ContactForm.jsx
// Connects to Formspree for form submission. No backend required.

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import './ContactForm.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqpkjnqq';

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
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(form);
    const hasErrors = Object.values(validationErrors).some(Boolean);
    if (hasErrors) {
      setErrors(validationErrors);
      return;
    }

    setStatus('sending');
    setServerError('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setForm(INITIAL_FORM);
        setErrors(INITIAL_ERRORS);
      } else {
        const data = await response.json().catch(() => ({}));
        const msg = data?.errors?.[0]?.message || 'Submission failed. Please try again.';
        setServerError(msg);
        setStatus('error');
      }
    } catch {
      setServerError('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        className="contact-form__success-state"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="contact-form__success-icon-wrap">
          <CheckCircle2 size={32} className="contact-form__success-icon" />
        </div>
        <h3 className="contact-form__success-title">Message Sent!</h3>
        <p className="contact-form__success-text">
          Thanks for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
        <button
          type="button"
          className="btn btn--ghost contact-form__reset-btn"
          onClick={() => setStatus('idle')}
        >
          Send Another Message
        </button>
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
          placeholder="What is this about?"
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
          placeholder="Write your message here..."
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

      <AnimatePresence>
        {status === 'error' && serverError && (
          <motion.div
            className="contact-form__server-error"
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
          >
            <XCircle size={14} />
            <span>{serverError}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        className="btn btn--primary contact-form__submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? (
          <>
            <span className="contact-form__spinner" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <Send size={15} /> Send Message
          </>
        )}
      </button>
    </form>
  );
}