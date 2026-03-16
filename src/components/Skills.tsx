import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data';
import styles from './Skills.module.css';

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title">
            Skills &<br />
            <span className="gradient-text">tools I use.</span>
          </h2>
        </motion.div>

        <div className={styles.groups}>
          {Object.entries(skills).map(([group, items], gi) => (
            <motion.div
              key={group}
              className={styles.group}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + gi * 0.1 }}
            >
              <h3 className={styles.groupLabel}>{group}</h3>
              <div className={styles.tags}>
                {items.map(item => (
                  <span
                    key={item}
                    className={`tag ${styles.skillTag} ${item === 'and more...' ? styles.andMore : ''}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
