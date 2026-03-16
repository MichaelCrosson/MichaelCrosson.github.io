import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { services } from '../data';
import styles from './Services.module.css';

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">What I Build</p>
          <h2 className="section-title">
            AI engineering services<br />
            <span className="gradient-text">tailored to your goals.</span>
          </h2>
          <p className="section-subtitle">
            From LLM prototypes to production-ready pipelines — I help companies
            move from "AI idea" to working system.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className={styles.cardInner}>
                <div className={styles.iconWrap}>{s.icon}</div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.description}</p>
                <div className={styles.tags}>
                  {s.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className={styles.cardGlow} aria-hidden="true" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>Have a project in mind?</p>
          <a href="#contact" className="btn btn-primary">Start a Conversation</a>
        </motion.div>
      </div>
    </section>
  );
}
