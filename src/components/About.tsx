import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import styles from './About.module.css';

import img1 from '../assets/about-1.jpg';
import img2 from '../assets/about-2.jpg';
import img3 from '../assets/about-3.jpg';
import img4 from '../assets/about-4.jpg';
import img5 from '../assets/about-5.jpg';
import img6 from '../assets/about-6.jpg';

const photos = [
  { src: img1, caption: 'BAXA @ Whole Foods' },
  { src: img2, caption: 'Inari Shrine, Japan' },
  { src: img3, caption: 'Dumpling night' },
  { src: img4, caption: '3D printed dice' },
  { src: img5, caption: 'Wing eating challenge 🏆' },
  { src: img6, caption: 'Graduation 🎓' },
];

const stats = [
  { value: '3+', label: 'Years in AI/ML' },
  { value: '10+', label: 'Fortune 500 companies worked with' },
  { value: '9K+', label: 'Engineers trained' },
  { value: '20B+', label: 'Rows of data processed' },
];

const languages = ['English (Fluent)', 'Japanese (Conv.)', 'Mandarin (Conv.)'];
const interests = ['Board Games', 'Bouldering', 'Cars', 'Applied Engineering'];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [photoIdx, setPhotoIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPhotoIdx(i => (i + 1) % photos.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about" className={`${styles.section} section-alt`}>
      <div className="container">
        <motion.div
          ref={ref}
          className={styles.grid}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Cycling photo */}
          <motion.div
            className={styles.photoCol}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className={styles.photoWrap}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={photoIdx}
                  src={photos[photoIdx].src}
                  alt={photos[photoIdx].caption}
                  className={styles.photo}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
              </AnimatePresence>
              <div className={styles.caption}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={photoIdx}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {photos[photoIdx].caption}
                  </motion.span>
                </AnimatePresence>
              </div>
              {/* Dot indicators */}
              <div className={styles.dots}>
                {photos.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === photoIdx ? styles.dotActive : ''}`}
                    onClick={() => setPhotoIdx(i)}
                    aria-label={`Photo ${i + 1}`}
                  />
                ))}
              </div>
              <div className={styles.photoBg} aria-hidden="true" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className={styles.textCol}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Hey, I'm Michael —<br />
              <span className="gradient-text">let me tell you a bit.</span>
            </h2>

            <div className={styles.bio}>
              <p>
                I grew up fascinated by how things work — which eventually led me to AI,
                data science, and building systems that actually do something useful. I'm
                an MSBA grad from <strong>UT Austin</strong> (CS Certificate too), and
                right now I'm splitting my time between being a{' '}
                <strong>Founding AI Engineer at FillGenie</strong> and an{' '}
                <strong>AI Business Analyst at CourtAvenue</strong>.
              </p>
              <p>
                My sweet spot is the gap between "cool AI demo" and "thing that works
                in production." I like building RAG pipelines, agentic workflows, and
                data systems that Fortune 500 teams actually rely on — not just
                impressive slides.
              </p>
              <p>
                Outside of work? I boulder, deep-dive into board games, and
                occasionally 3D print things I probably don't need. I speak
                English fluently, and I'm conversational in Japanese and Mandarin — which
                has made for some fun travel moments.
              </p>
            </div>

            <div className={styles.badgeRow}>
              <div>
                <p className={styles.badgeGroupLabel}>Languages</p>
                <div className={styles.badges}>
                  {languages.map(l => (
                    <span key={l} className={`tag ${styles.langTag}`}>{l}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className={styles.badgeGroupLabel}>Outside the terminal</p>
                <div className={styles.badges}>
                  {interests.map(i => (
                    <span key={i} className="tag">{i}</span>
                  ))}
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary" style={{ marginTop: '8px' }}>
              Let's Chat
            </a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
