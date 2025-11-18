"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/navLinks";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "@/components/UI/Button/Button";
import styles from "./Header.module.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [menuPosition, setMenuPosition] = useState<{ left: number } | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<number | null>(null);
  const navRefs = useRef<(HTMLDivElement | null)[]>([]);
  const megaMenuRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  // === Desktop Hover Logic ===
  const openMenu = (index: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);

    const el = navRefs.current[index];
    if (el) {
      const rect = el.getBoundingClientRect();
      
      // Initial position aligned to nav item
      setMenuPosition({ left: rect.left });
    }
    setActiveMenu(index);
  };

  // Recalculate position when mega menu renders or changes
  useEffect(() => {
    if (activeMenu !== null && megaMenuRef.current && menuPosition) {
      const el = navRefs.current[activeMenu];
      if (el) {
        const rect = el.getBoundingClientRect();
        const menuWidth = megaMenuRef.current.offsetWidth;
        const viewportWidth = window.innerWidth;
        const rightEdge = rect.left + menuWidth;
        
        let leftPosition = rect.left;
        
        // If menu would overflow right side, shift it left
        if (rightEdge > viewportWidth - 20) { // 20px padding from edge
          leftPosition = viewportWidth - menuWidth - 20;
          // Make sure it doesn't go off the left side either
          leftPosition = Math.max(20, leftPosition);
        }
        
        // Update position only if it needs adjustment
        if (leftPosition !== menuPosition.left) {
          setMenuPosition({ left: leftPosition });
        }
      }
    }
  }, [activeMenu, menuPosition]);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
      setMenuPosition(null);
    }, 150);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  // === Mobile Accordion Logic ===
  const toggleMobileDropdown = (index: number) => {
    setOpenMobileMenu(openMobileMenu === index ? null : index);
  };

  return (
    <header className={styles.navbar}>
      <div className="pageLayout">
        <div className="full-width-container">
          <div className={styles.container}>
            {/* Left */}
            <div className={styles.left}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={styles.hamburger}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu strokeWidth={2.2} color="#222" size={24} />}
              </button>

              <Link href="/" className={styles.brand}>
                <Image
                  src="/wunderkint_logo.webp"
                  alt="Wunderkint Logo"
                  width={180}
                  height={45}
                  quality={100}
                  priority
                  className={styles.brandLogo}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className={styles.links}>
              {navLinks.map((link, i) => (
                <div
                  key={link.href}
                  className={styles.navItem}
                  ref={(el) => {
                    navRefs.current[i] = el;
                  }}
                  onMouseEnter={() => openMenu(i)}
                  onMouseLeave={scheduleClose}
                >
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                    {link.megaMenu && (
                      <ChevronDown
                        size={16}
                        strokeWidth={2}
                        className={`${styles.dropdownIcon} ${
                          activeMenu === i ? styles.iconActive : ""
                        }`}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Right */}
            <div className={styles.right}>
              <Button text="Contact us" href="/contact" className={styles.ctaPrimary} />
            </div>
          </div>
        </div>
      </div>

      {/* === Desktop Mega Menu === */}
      {activeMenu !== null && navLinks[activeMenu].megaMenu && menuPosition && (
        <div
          ref={megaMenuRef}
          className={styles.megaMenuContainer}
          style={{
            left: `${menuPosition.left}px`,
          }}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className={styles.megaMenu}>
            {navLinks[activeMenu].megaMenu!.map((subLink) => (
              <Link key={subLink.href} href={subLink.href} className={styles.megaLink}>
                {subLink.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* === Mobile Menu === */}
      {isOpen && (
        <div className={styles.mobile}>
          <nav>
            {navLinks.map((link, i) => (
              <div key={link.href} className={styles.mobileItem}>
                <div className={styles.mobileMainRow}>
                  <Link href={link.href} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                  {link.megaMenu && (
                    <button
                      className={styles.mobileToggle}
                      onClick={() => toggleMobileDropdown(i)}
                      aria-label="Toggle Dropdown"
                    >
                      <ChevronDown
                        size={18}
                        className={`${styles.mobileChevron} ${
                          openMobileMenu === i ? styles.rotate : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {link.megaMenu && (
                  <div
                    className={`${styles.mobileDropdown} ${
                      openMobileMenu === i ? styles.open : ""
                    }`}
                  >
                    {link.megaMenu.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        onClick={() => setIsOpen(false)}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}