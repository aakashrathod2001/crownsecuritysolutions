"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import styles from "./Footer.module.scss";

import Button from "@/components/UI/Button/Button";
import {
  brand,
  quickLinksCol2,
  quickLinksCol3,
  socials,
  rightCta,
  legal,
  watermark,
} from "@/data/footer";
import type { Watermark } from "@/data/footer";

export default function Footer() {
  // type-safe: no `any`
  const hasWatermarkImage = "image" in (watermark as Watermark);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerMainRows}>
        <div className="pageLayout">
          <div className="full-width-container">
            {/* ========== ROW 1: three columns (brand | services | services) ========== */}
            <div className={clsx(styles.container, styles.row1)}>
              {/* Col 1: Brand block (3 internal rows) */}
              <div className={styles.brandCol}>
                <div className={styles.logoWrap}>
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    sizes="300px"
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <p className={styles.blurb}>{brand.blurb}</p>

                <Button
                  text={brand.ctaText}
                  href={brand.ctaHref}
                  className={styles.ctaGradient}
                />
              </div>

              {/* Col 2: Services quick links (flex column wrap) */}
              <div className={styles.linksCol}>
                <p className={styles.colTitle}>{quickLinksCol2.title}</p>
                {/* let SCSS control --list-height */}
                <ul className={styles.quickList}>
                  {quickLinksCol2.links.map((l, i) => (
                    <li key={i} className={styles.quickItem}>
                      {l.external ? (
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.link}
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link href={l.href} className={styles.link}>
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3: Services quick links (flex column wrap) */}
              <div className={styles.linksCol}>
                <p className={styles.colTitle}>{quickLinksCol3.title}</p>
                {/* let SCSS control --list-height */}
                <ul className={styles.quickList}>
                  {quickLinksCol3.links.map((l, i) => (
                    <li key={i} className={styles.quickItem}>
                      {l.external ? (
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.link}
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link href={l.href} className={styles.link}>
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ========== ROW 2: two columns (socials | CTA text+arrow) ========== */}
            <div className={clsx(styles.container, styles.row2)}>
              <ul className={styles.socials}>
                {socials.map((s, i) => (
                  <li key={i}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.socialLink}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className={styles.rightCta}>
                <div className={styles.rightCtaContainer}>
                  <p className={styles.eyebrow}>{rightCta.eyebrow}</p>
                  <Link
                    href={rightCta.href}
                    className={clsx(styles.callLink, styles.gradientText)}
                  >
                    {rightCta.text}
                  </Link>
                </div>

                <span className={styles.circleArrow} aria-hidden>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6 4h6v6M12 4L4 12"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* ========== ROW 3: two columns (copyright | legal) ========== */}
            <div className={clsx(styles.container, styles.row3)}>
              <p className={styles.copy}>{legal.copyright}</p>

              <ul className={styles.legalInline}>
                {legal.links.map((l, i) => (
                  <li key={i}>
                    <Link href={l.href} className={styles.legalLink}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ========== ROW 4: big watermark / logo image ========== */}
      <div className={styles.row4}>
        {hasWatermarkImage ? (
          <div className={styles.watermarkImgWrap} aria-hidden>
            <Image
              src={(watermark as Extract<Watermark, { image: string }>).image}
              alt=""
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
              className={styles.watermarkImage}
            />
          </div>
        ) : (
          <div className={styles.watermarkText} aria-hidden>
            {(watermark as Extract<Watermark, { text: string }>).text}
          </div>
        )}
      </div>
    </footer>
  );
}
