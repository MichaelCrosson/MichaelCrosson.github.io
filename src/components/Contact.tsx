import { useState, useRef, type FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import styles from './Contact.module.css';

const subjects = [
  'AI Engineering / Consulting',
  'Data Science Project',
  'Automation & Tooling',
  'Cloud ML Infrastructure',
  'General Inquiry',
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', subject: subjects[0], message: '' });
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\n${form.message}`
    );
    window.open(`mailto:crosson.a.michael@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${body}`);
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className="container">
        <motion.div
          ref={ref}
          className={styles.inner}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Left info */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">
              Let's build<br />
              <span className="gradient-text">something great.</span>
            </h2>
            <p className={styles.desc}>
              Whether you need a RAG pipeline, a data science solution, or
              want to explore what AI can do for your team — I'd love to hear
              from you. I typically respond within 24 hours.
            </p>

            <div className={styles.contactLinks}>
              <a href="mailto:crosson.a.michael@gmail.com" className={styles.contactLink}>
                <FiMail size={18} />
                <span>crosson.a.michael@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/michaelacrosson"
                target="_blank"
                rel="noreferrer"
                className={styles.contactLink}
              >
                <FiLinkedin size={18} />
                <span>linkedin.com/in/michaelacrosson</span>
              </a>
              <a
                href="https://github.com/MichaelCrosson"
                target="_blank"
                rel="noreferrer"
                className={styles.contactLink}
              >
                <FiGithub size={18} />
                <span>github.com/MichaelCrosson</span>
              </a>
            </div>

            <div className={styles.availability}>
              <span className={styles.availDot} />
              <span>Open to freelance & consulting projects</span>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                {subjects.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              {status === 'sent' ? '✓ Message opened!' : <><FiSend size={16} /> Send Message</>}
            </button>
            <p className={styles.formNote}>
              This opens your email client with the message pre-filled.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
