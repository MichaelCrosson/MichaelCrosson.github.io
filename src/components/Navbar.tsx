import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Companies', href: '#companies' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.brand}>
          <span className="gradient-text">MC</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`${styles.navLink} ${activeSection === l.href.slice(1) ? styles.active : ''}`}
              onClick={handleLinkClick}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className={`btn btn-primary ${styles.ctaBtn}`} onClick={handleLinkClick}>
            Hire Me
          </a>
        </nav>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
