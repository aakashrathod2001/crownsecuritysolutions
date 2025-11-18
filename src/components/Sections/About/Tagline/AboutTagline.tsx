// AboutTagline.tsx
import styles from './AboutTagline.module.scss';

interface AboutTaglineProps {
  text: string;
  className?: string;
}

export default function AboutTagline({ text, className }: AboutTaglineProps) {
  return (
    <section className={`${styles.AboutTagline} ${className || ''}`}>
      <div className={styles.container}>
        <p className={styles.taglineText}>{text}</p>
      </div>
    </section>
  );
}