"use client";

import React from "react";
import styles from "./BlockContent.module.scss";

type BlockContentProps = {
  number?: string;
  title: string;
  heading: string;
  description: string;
  variant?: string;
  index?: number;
};

const BlockContent: React.FC<BlockContentProps> = ({
  number,
  title,
  heading,
  description,
  variant,
  index,
}) => {
  const numberPositionClass = index !== undefined && index % 2 === 1 ? styles.numberLeft : styles.numberRight;
  return (
    <div
      className={`${styles.mainContainer} ${variant ? styles[variant] : ""}`}
    >
      <div className="pageLayout">
        <div className="full-width-container">
          <div className={styles.container}>
            {number && <div className={`${styles.stepNumber} ${numberPositionClass}`}>{number}</div>}
            <div className={styles.left}>
              <h3 className={styles.heading}>{heading}</h3>
              <p className={styles.description}>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockContent;
