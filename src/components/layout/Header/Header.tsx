// components/Header/Header.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navigationItems } from '@/data/navigation';
import Button, { ArrowIcon } from '@/components/UI/Button/Button';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Crown Security Managers"
            width={171}
            height={40}
            priority
          />
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navigationItems.map((item) => (
              <li key={item.label} className={styles.navItem}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.ctaWrapper}>
            <Button
              text="Contact us"
              variant="primary"
              icon={<ArrowIcon color="#F6292F" />}
              onClick={() => console.log('Contact us clicked')}
            />
          </div>
        </nav>



        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
