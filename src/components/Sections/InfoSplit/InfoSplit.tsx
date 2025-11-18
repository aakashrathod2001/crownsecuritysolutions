"use client";

import styles from "./InfoSplit.module.scss";
import Button from "@/components/UI/Button/Button";

type Props = {
  title: string;
  body: string;
  cta: { text: string; href: string };
  reverse?: boolean;
};

export default function InfoSplit({
  title,
  body,
  cta,
  reverse = false,
}: Props) {
  const paragraphs = body.split("\n\n").map((p, i) => <p key={i}>{p}</p>);

  return (
    <div className="pageLayout">
      <div className="full-width-container">
        <div className={`${styles.wrap} ${reverse ? styles.reverse : ""}`}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              {title.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
            <div className={styles.ctaWrapper}>
              <Button
                text={cta.text}
                href={cta.href}
                className={styles.ctaButton}
              />
            </div>
          </div>
          <div className={styles.right}>{paragraphs}</div>
        </div>
      </div>
    </div>
  );
}
