"use client";

import React from "react";
import styles from "./BlockContent.module.scss";

type BlockContentProps = {
  title: string;
  heading: string;
  description: string;
  variant?: string;
};

const BlockContent: React.FC<BlockContentProps> = ({
  title,
  heading,
  description,
  variant,
}) => {
  return (
    <div
      className={`${styles.mainContainer} ${variant ? styles[variant] : ""}`}
    >
      <div className="pageLayout">
        <div className="full-width-container">
          <div className={styles.container}>
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
