"use client";

import { useRef, useState, useLayoutEffect } from "react";
import clsx from "clsx";
import styles from "./Accordion.module.scss";

export type AccordionItem = { id: string; title: string; content: string };
type Props = {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
};

export default function Accordion({ items, defaultOpenId, className }: Props) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  // recalc height when content or openId changes
  useLayoutEffect(() => {
    Object.entries(refs.current).forEach(([id, el]) => {
      if (!el) return;
      if (openId === id) {
        const inner = el.firstElementChild as HTMLElement | null;
        const h = inner ? inner.offsetHeight : 0;
        el.style.height = `${h}px`;
      } else {
        el.style.height = "0px";
      }
    });
  }, [openId, items]);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className={clsx(styles.accordion, className)}>
      {items.map(({ id, title, content }) => {
        const open = openId === id;
        return (
          <div key={id} className={clsx(styles.item, open && styles.open)}>
            <p className={styles.heading}>
              <button
                id={`${id}-button`}
                type="button"
                className={styles.trigger}
                aria-expanded={open}
                aria-controls={`${id}-panel`}
                onClick={() => toggle(id)}
              >
                <span className={styles.title}>{title}</span>
                <span className={styles.icon} aria-hidden>
                  <span className={styles.icon} aria-hidden>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      className={styles.iconSvg}
                    >
                      <path
                        d="M11.6973 13.0528C12.2493 13.0528 12.6973 12.6048 12.6973 12.0528V3.0498C12.6973 2.4978 12.2493 2.0498 11.6973 2.0498C11.1453 2.0498 10.6973 2.4978 10.6973 3.0498V11.0518H2.70027C2.14827 11.0518 1.70027 11.4998 1.70027 12.0518C1.70027 12.6038 2.14827 13.0518 2.70027 13.0518L11.6973 13.0528ZM2.99026 4.7558L10.9903 12.7598L12.4043 11.3448L4.40427 3.3408L2.99026 4.7558Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </p>

            {/* animated wrapper: we control height via JS for smooth expand */}
            <div
              id={`${id}-panel`}
              role="region"
              aria-labelledby={`${id}-button`}
              className={styles.panelWrap}
              ref={(el) => {
                refs.current[id] = el;
              }}
            >
              <div className={styles.panel}>
                <p className={styles.content}>{content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
