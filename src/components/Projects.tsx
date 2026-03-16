import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data';
import styles from './Projects.module.css';

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className={`${styles.section} section-alt`}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Featured Work</p>
          <h2 className="section-title">
            Projects I've<br />
            <span className="gradient-text">shipped & proud of.</span>
          </h2>
          <p className="section-subtitle">
            A selection of AI/ML systems, data pipelines, and tools I've built
            — from research prototypes to production systems.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              {/* Image placeholder with project accent */}
              <div className={styles.cardImg} style={{ background: p.accent }}>
                <span className={styles.cardImgLabel}>{p.title}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.description}</p>

                <div className={styles.tags}>
                  {p.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  {p.links.github && (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.link}
                      aria-label="GitHub repository"
                    >
                      <FiGithub size={16} /> Code
                    </a>
                  )}
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.link} ${styles.linkLive}`}
                      aria-label="Live demo"
                    >
                      <FiExternalLink size={16} /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
