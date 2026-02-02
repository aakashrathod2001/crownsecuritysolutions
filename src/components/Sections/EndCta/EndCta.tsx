import React from 'react';
import Link from 'next/link';
import styles from './EndCta.module.scss';
import Button, { ArrowIcon } from '@/components/UI/Button/Button';

const EndCta: React.FC = () => {

  return (
    <>
      <section className={styles.ctaSection}>
        <div className="pageLayout">
          <div className="full-width-container">
            <div className={styles.ctaContainer}>
              <div className={styles.ctaTitle}>
                <h2>Get in Touch</h2>
                <p>Contact us for a consultation and customized proposal.</p>
              </div>

              <Link href="/contact-us" passHref>
                <Button
                  text='Contact Us'
                  variant="primary"
                  icon={<ArrowIcon color="#F6292F" />}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EndCta;
