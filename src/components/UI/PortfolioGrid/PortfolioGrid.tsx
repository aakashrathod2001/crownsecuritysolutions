"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import styles from "./PortfolioGrid.module.scss";
import { portfolioItems as defaultPortfolioItems } from "@/data/portfolio";

type PortfolioItem = {
  title: string;
  description?: string; // New field for supporting text
  image: string;
  href?: string;
};

type Props = {
  items?: PortfolioItem[];
};

export default function PortfolioGrid({ items = defaultPortfolioItems }: Props) {
  return (
    <div className={styles.cards}>
      {items.map((item, i) => {
        const cardContent = (
          <div className={styles.media}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              style={{ objectFit: "cover" }}
              unoptimized
            />
            <div className={styles.fade} />
            <div className={styles.caption}>
              <div className={styles.captionTitle}>{item.title}</div>
              {item.description && (
                <div className={styles.captionText}>{item.description}</div>
              )}
            </div>
          </div>
        );

        // If href exists and is not "#", render as Link
        if (item.href && item.href !== "#") {
          return (
            <Link
              href={item.href}
              key={item.title}
              className={clsx(styles.card, styles[`card${i + 1}`])}
            >
              {cardContent}
            </Link>
          );
        }

        // Otherwise render as div (non-clickable)
        return (
          <div
            key={item.title}
            className={clsx(styles.card, styles[`card${i + 1}`])}
          >
            {cardContent}
          </div>
        );
      })}
    </div>
  );
}