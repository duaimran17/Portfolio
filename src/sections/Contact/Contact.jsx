// src/sections/Contact/Contact.jsx
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Github, Linkedin, Discord } from '../../components/Icons';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

const CONTACT_ITEMS = [
  {
    id: 'email',
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'duaimrann17@gmail.com',
    href: 'mailto:duaimrann17@gmail.com',
  },
  {
    id: 'linkedin',
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/duaimran17',
    href: 'https://www.linkedin.com/in/duaimran17',
  },
  {
    id: 'github',
    icon: <Github size={18} />,
    label: 'GitHub',
    value: 'github.com/duaimran17',
    href: 'https://github.com/duaimran17',
  },
  {
    id: 'discord',
    icon: <Discord size={18} />,
    label: 'Discord',
    value: 'https://discord.com/users/duaimran17',
    href: 'https://discord.com/users/duaimran17',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact section section--alt" aria-label="Contact">
      <div className="container">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Contact Me"
          subtitle="Have a project in mind, want to collaborate, or just want to say hi? I’d love to hear from you."
        />

        <div className="contact__layout">
          {/* Info column */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <p className="contact__intro">
              Good ideas usually start with a conversation.
            </p>

            <div className="contact__links">
              {CONTACT_ITEMS.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  target={item.id !== 'email' ? '_blank' : undefined}
                  rel={item.id !== 'email' ? 'noopener noreferrer' : undefined}
                  className="contact__link-card"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: i * 0.06 }}
                  aria-label={`${item.label}: ${item.value}`}
                >
                  <span className="contact__link-icon" aria-hidden="true">{item.icon}</span>
                  <div>
                    <p className="contact__link-label">{item.label}</p>
                    <p className="contact__link-value">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            className="contact__form-wrap"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
