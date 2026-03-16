import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { companies } from '../data';
import styles from './Companies.module.css';

const weights = [
  { size: 'xl' },
  { size: 'xl' },
  { size: 'lg' },
  { size: 'lg' },
  { size: 'md' },
  { size: 'md' },
  { size: 'sm' },
] as const;

export default function Companies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="companies" className={`${styles.section} section-alt`}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <p className="section-label">Where I've Worked</p>
          <h2 className="section-title">
            Organizations I've<br />
            <span className="gradient-text">built things for.</span>
          </h2>
          <p className="section-subtitle">
            From Fortune 500 enterprises to early-stage startups — here's who
            I've had the privilege of contributing to.
          </p>
        </motion.div>

        <div className={styles.cloud}>
          {companies.map((c, i) => (
            <motion.div
              key={c.name}
              className={`${styles.item} ${styles[weights[i].size]}`}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.45,
                delay: 0.1 + i * 0.08,
                type: 'spring',
                stiffness: 130,
              }}
            >
              <div className={styles.logoWrap}>
                <img src={c.logo} alt={c.name} className={styles.logo} />
              </div>
              <span className={styles.name}>{c.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
