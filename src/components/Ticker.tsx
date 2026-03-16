import { companies } from '../data';
import styles from './Ticker.module.css';

const all = [...companies, ...companies, ...companies];

export default function Ticker() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Companies I've contributed to</p>
      <div className={styles.track} aria-hidden="true">
        <ul className={styles.list}>
          {all.map((c, i) => (
            <li key={i} className={styles.item}>
              <img src={c.logo} alt={c.name} className={styles.logo} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
