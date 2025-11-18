"use client";

import styles from "./ServiceGrid.module.scss";
import Heading from "@/components/UI/Heading/Heading";
import Button from "@/components/UI/Button/Button";
import Link from "next/link";
import Image from "next/image";
import type { HeadingData } from "@/components/UI/Heading/Heading";

type Card = {
  title: string;
  image: string;
  href?: string;
  bgColor?: string; // Only for otherServices
  textColor?: string; // Add text color support for individual cards
};

type Props = {
  heading: HeadingData;
  ctaText: string;
  ctaHref: string;
  cardBg?: string; // Uniform background color (e.g., for branding cards)
  textColor?: string; // Uniform text color for all cards
  cards: Card[];
  variant?: "default" | "otherServices"; // to support layout differences
};

export default function ServiceGrid({
  heading,
  ctaText,
  ctaHref,
  cardBg,
  textColor,
  cards,
  variant = "default",
}: Props) {
  // Construct className safely
  const gridClassName = variant === "otherServices" 
    ? `${styles.grid} ${styles.fourCol || ''}` 
    : styles.grid;

  return (
    <section className={styles.wrap}>
      <div className="pageLayout">
        <div className="full-width-container">
          <div className={styles.headerRow}>
            <Heading data={heading} className={styles.Heading} />
            <div className={styles.ctaWrapper}>
              <Button
                text={ctaText}
                href={ctaHref}
                className={styles.ctaButton}
              />
            </div>
          </div>

          <div className={gridClassName}>
            {cards.map((card, index) => (
              <Link
                key={index}
                href={card.href || "#"}
                className={styles.card}
                style={{
                  backgroundColor: card.bgColor || cardBg || "#F15151",
                  color: card.textColor || textColor || "#1B1B1B", // Add text color with fallback
                }}
                target={card.href?.startsWith("http") ? "_blank" : undefined}
                rel={
                  card.href?.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <div className={styles.cardInner}>
                  <div 
                    className={styles.cardTitle}
                    style={{
                      color: card.textColor || textColor || "inherit", // Ensure title uses the same color
                    }}
                  >
                    {card.title}
                  </div>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={
                        card.image || "https://placehold.co/300x200?text=No+Image"
                      }
                      alt={card.title}
                      fill
                      className={styles.cardImage}
                      unoptimized
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}