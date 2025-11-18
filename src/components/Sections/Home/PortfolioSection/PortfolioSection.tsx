"use client";

import styles from "./PortfolioSection.module.scss";
import Heading from "@/components/UI/Heading/Heading";
import Button from "@/components/UI/Button/Button";
import { headings } from "@/data/headings";
import PortfolioGrid from '@/components/UI/PortfolioGrid/PortfolioGrid';
import type { HeadingData } from "@/components/UI/Heading/Heading";

type PortfolioItem = {
  title: string;
  image: string;
  href?: string;
};

type Props = {
  heading?: HeadingData;
  ctaText?: string;
  ctaHref?: string;
  portfolioItems?: PortfolioItem[];
  variant?: "home" | "service";
  portfolioFooterText?: string;
};

export default function PortfolioSection({
  heading = headings.portfolioSection,
  ctaText = "View Portfolio",
  ctaHref = "/portfolio",
  portfolioItems,
  variant = "home",
  portfolioFooterText,
}: Props) {
  const sectionClassName = variant === "service"
    ? `${styles.section} ${styles.serviceVariant}`
    : styles.section;

  return (
    <section className={sectionClassName}>
      <div className="pageLayout">
        <div className="full-width-container">
          <div className={styles.headerRow}>
            <Heading data={heading} className={styles.portfolioHeadingRow} />
            <div className={styles.ctaWrapper}>
              <Button
                text={ctaText}
                href={ctaHref}
                className={styles.portfolioButton}
              />
            </div>
          </div>
          <PortfolioGrid items={portfolioItems} />

          {/* ADD THIS FOOTER TEXT */}
          {portfolioFooterText && (
            <div className={styles.portfolioFooter}>
              {portfolioFooterText}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}