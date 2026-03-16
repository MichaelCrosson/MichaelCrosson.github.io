import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi';
import headshotImg from '../assets/headshot.png';
import styles from './Hero.module.css';

const titles = ['AI Engineer', 'Data Scientist', 'ML Architect', 'RAG Specialist'];

export default function Hero() {
  const titleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let idx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = titles[idx];
      if (!titleRef.current) return;

      if (!deleting) {
        titleRef.current.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        titleRef.current.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          idx = (idx + 1) % titles.length;
        }
      }
      timeout = setTimeout(type, deleting ? 55 : 90);
    };

    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.grid} />
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Left content */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className={styles.greeting}>
            <span className={styles.wave}>👋</span> Hi, I'm
          </p>

          <h1 className={styles.name}>
            Michael<br />
            <span className="gradient-text">Crosson</span>
          </h1>

          <h2 className={styles.titleLine}>
            <span ref={titleRef} className={styles.typedText} />
            <span className={styles.cursor} aria-hidden="true" />
          </h2>

          <p className={styles.tagline}>
            I build intelligent systems — LLM pipelines, agentic workflows, and
            data-driven automation — for teams that want to move faster with AI.
          </p>

          <div className={styles.ctas}>
            <a href="#projects" className="btn btn-primary">
              View My Work <FiArrowDown size={15} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Talk
            </a>
          </div>

          <div className={styles.socials}>
            <a
              href="https://github.com/MichaelCrosson"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/michaelacrosson"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right — headshot */}
        <motion.div
          className={styles.photoWrap}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className={styles.photoRing}>
            <img
              src={headshotImg}
              alt="Michael Crosson"
              className={styles.headshotImg}
            />
          </div>
          <div className={styles.badge1}>
            <span>🎓</span> UT Austin MSBA
          </div>
          <div className={styles.badge2}>
            <span>📍</span> Austin, TX
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className={styles.scrollIndicator}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  );
}
