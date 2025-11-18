"use client";

import Image from "next/image";
import clsx from "clsx";
import type { CSSProperties } from "react";
import styles from "./TestimonialStack.module.scss";

export type TestimonialItem = {
  quote: string;
  name: string; // e.g. "Head of Marketing"
  role: string; // e.g. "Hiranandani Asters"
  company: string; // used for key/alt
  logo: string; // public path or remote URL
  accent?: "red" | "peach" | "mint" | "blue";
  tilt?: "left" | "right" | "none";
  id?: string | number; // optional stable key
};

type CSSVars = CSSProperties & {
  "--i": number;
  "--stack-top"?: string;
};

export type TestimonialStackProps = {
  items: TestimonialItem[];
  /** sticky top offset (CSS length). default: "10rem" */
  top?: string;
  /** per-card vertical offset added by index. default: 16px */
  step?: number;
  /** width constraint, useful when used in narrow columns. default: undefined */
  maxWidth?: string;
  className?: string;
  /** show subtle hover un-tilt effect (default true) */
  hoverFlatten?: boolean;
};

export default function TestimonialStack({
  items,
  top = "10rem",
  step = 16,
  maxWidth,
  className,
  hoverFlatten = true,
}: TestimonialStackProps) {
  return (
    <div
      className={clsx(
        styles.stack,
        className,
        hoverFlatten && styles.hoverFlatten
      )}
      style={maxWidth ? { maxWidth } : undefined}
    >
      {items.map((t, i) => {
        const styleVars: CSSVars = { "--i": i, "--stack-top": top };
        return (
          <article
            key={t.id ?? `${t.company}-${i}`}
            className={clsx(
              styles.card,
              t.tilt === "right" && styles.tiltRight,
              t.tilt === "left" && styles.tiltLeft
            )}
            style={styleVars}
          >
            <div className={styles.cardInner}>
              <div className={styles.textCol}>
                <span
                  className={clsx(
                    styles.accent,
                    t.accent === "red" && styles.accentRed,
                    t.accent === "peach" && styles.accentPeach,
                    t.accent === "mint" && styles.accentMint,
                    t.accent === "blue" && styles.accentBlue
                  )}
                  aria-hidden
                />
                <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              </div>

              <div className={styles.bottomRow}>
                <div className={styles.logoWrap}>
                  <Image
                    src={t.logo}
                    alt={`${t.company} logo`}
                    fill
                    className={styles.logoImg}
                    unoptimized
                  />
                </div>
                <div className={styles.vDivider} />
                <div className={styles.meta}>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          </article>
        );
      })}

      {/* spacer so the last sticky card scrolls out nicely */}
      <div className={styles.scrollSpacer} />
    </div>
  );
}
