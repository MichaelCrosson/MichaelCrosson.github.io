import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <a href="#" className="gradient-text" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.3rem' }}>
            Michael Crosson
          </a>
          <p className={styles.tagline}>AI Engineer · Data Scientist · Builder</p>
        </div>

        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#companies">Companies</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.socials}>
          <a href="mailto:crosson.a.michael@gmail.com" aria-label="Email" className={styles.icon}>
            <FiMail size={18} />
          </a>
          <a href="https://linkedin.com/in/michaelacrosson" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={styles.icon}>
            <FiLinkedin size={18} />
          </a>
          <a href="https://github.com/MichaelCrosson" target="_blank" rel="noreferrer" aria-label="GitHub" className={styles.icon}>
            <FiGithub size={18} />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {year} Michael Crosson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
