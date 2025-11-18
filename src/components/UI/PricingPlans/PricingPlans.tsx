"use client";

import { useState, useMemo, KeyboardEvent } from "react";
import clsx from "clsx";
import styles from "./PricingPlans.module.scss";

import Button from "@/components/UI/Button/Button";
import {
  plans as defaultPlans,
  type Plan,
  type BillingInterval,
} from "@/data/pricing";

type Props = {
  plans?: Plan[]; // pass custom plans or use default
  defaultBilling?: BillingInterval; // 'monthly' | 'annual' (default: 'monthly')
  className?: string;
};

function formatPrice(v: number | "contact") {
  if (v === "contact") return "Contact";
  return `$${v.toLocaleString()}`;
}

export default function PricingPlans({
  plans = defaultPlans,
  defaultBilling = "monthly",
  className,
}: Props) {
  const [billing, setBilling] = useState<BillingInterval>(defaultBilling);
  const visiblePlans = useMemo(() => plans, [plans]);

  const toggleBilling = () =>
    setBilling(billing === "monthly" ? "annual" : "monthly");
  const onSwitchKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleBilling();
    }
  };

  return (
    <div className={clsx(styles.wrapper, className)}>
      {/* Toggle */}
      <div className={styles.header}>
        <div className={styles.toggle}>
          <span
            className={clsx(
              styles.label,
              billing === "monthly" && styles.active
            )}
          >
            Monthly
          </span>

          <button
            className={styles.switch}
            role="switch"
            aria-label="Toggle billing interval"
            aria-checked={billing === "annual"}
            onClick={toggleBilling}
            onKeyDown={onSwitchKey}
          >
            <span className={styles.knob} />
          </button>

          <span
            className={clsx(
              styles.label,
              billing === "annual" && styles.active
            )}
          >
            Annually
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className={styles.grid}>
        {visiblePlans.map((p) => {
          const price = p.prices[billing];
          const isContact = price === "contact";
          return (
            <article
              key={p.id}
              className={clsx(
                styles.card,
                p.highlight && styles.cardHighlight,
                p.id === "enterprise" && styles.cardLight
              )}
            >
              <header className={styles.cardHead}>
                <div className={styles.innerCols}>
                <p className={styles.planName}>{p.name}</p>
                <p className={styles.planBlurb}>{p.blurb}</p>
                </div>

                {p.id !== "enterprise" && (
                  <div className={styles.innerCols}>
                    <div className={styles.save}>
                      <span>Save up to 20%</span>
                    </div>
                    <div className={styles.priceRow}>
                      <div className={styles.price}>
                        <span className={styles.value}>
                          {formatPrice(price)}
                        </span>
                        {!isContact && (
                          <span className={styles.suffix}>
                            / {billing === "monthly" ? "month" : "yr"}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  text={p.ctaText}
                  href={p.ctaHref}
                  className={clsx(styles.ctaBtn, p.highlight && styles.ctaDark)}
                />
              </header>

              <hr className={styles.horizontalLine} />

              {(p.featuresIntro || p.features.length > 0) && (
                <div className={styles.features}>
                  {p.featuresIntro && (
                    <p className={styles.featuresIntro}>{p.featuresIntro}</p>
                  )}
                  {p.features.length > 0 && (
                    <ul className={styles.list}>
                      {p.features.map((f, i) => (
                        <li key={i} className={styles.item}>
                          <span className={styles.bullet} aria-hidden>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 22 23"
                              fill="none"
                              
                            >
                              <path
                                d="M10.9318 0.911133C8.80062 0.911133 6.71727 1.54311 4.94524 2.72714C3.17321 3.91118 1.79207 5.59409 0.976497 7.56307C0.160919 9.53205 -0.0524734 11.6987 0.363304 13.7889C0.779082 15.8792 1.80536 17.7992 3.31235 19.3062C4.81934 20.8132 6.73936 21.8395 8.82962 22.2552C10.9199 22.671 13.0865 22.4576 15.0555 21.642C17.0244 20.8265 18.7074 19.4453 19.8914 17.6733C21.0754 15.9013 21.7074 13.8179 21.7074 11.6867C21.7074 8.82885 20.5721 6.08804 18.5513 4.06723C16.5305 2.04641 13.7897 0.911133 10.9318 0.911133ZM15.9963 8.6456L10.6804 16.0209C10.5221 16.2347 10.291 16.3831 10.0307 16.4382C9.77046 16.4934 9.49903 16.4514 9.2676 16.3202L6.21452 14.5362C5.96684 14.387 5.78859 14.1455 5.71898 13.8648C5.64938 13.5841 5.69412 13.2873 5.84336 13.0396C5.99261 12.792 6.23413 12.6137 6.5148 12.5441C6.79546 12.4745 7.09229 12.5192 7.33997 12.6685L9.50706 13.9615L14.2962 7.38845C14.4739 7.21038 14.7084 7.10013 14.9589 7.07679C15.2094 7.05346 15.4602 7.11851 15.6678 7.26069C15.8753 7.40286 16.0266 7.61318 16.0954 7.8552C16.1641 8.09721 16.146 8.35566 16.0442 8.58574L15.9963 8.6456Z"
                                fill="#191919"
                              />
                            </svg>
                          </span>

                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {p.id !== "enterprise" && (
                <hr className={styles.horizontalLine} />
              )}

              {p.footnote && <p className={styles.footnote}>{p.footnote}</p>}
            </article>
          );
        })}
      </div>
    </div>
  );
}
