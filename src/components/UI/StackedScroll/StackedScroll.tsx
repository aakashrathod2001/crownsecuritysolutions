"use client";

import React from "react";
import styles from "./StackedScroll.module.scss";
import classNames from "classnames";
import BlockContent from "./BlockContent";
import { stackedBlocks } from "@/data/stackedData";

type BulletPoint = {
  label: string;
  href?: string;
};

type StackedBlock = {
  number?: string;
  title: string;
  className: string;
  heading: string;
  description: string;
  buttonText: string;
  image: string;
  bulletPoints?: (string | BulletPoint)[];
  buttonHref?: string;
  moreHref?: string;
  moreText?: string;
};

type Props = {
  blocks?: StackedBlock[];
  layout?: "3-column" | "2-column";
  buttonHref?: string;
};

const StackedScroll: React.FC<Props> = ({
  blocks = stackedBlocks,
  layout = "3-column",
  buttonHref,
}) => {
  return (
    <div className={styles.container}>
      {blocks.map((block, index) => (
        <div
          key={index}
          className={classNames(styles.block, styles[block.className])}
          style={{ zIndex: index + 1 }}
        >
          <BlockContent
            number={block.number}
            title={block.title}
            heading={block.heading}
            description={block.description}
            variant={block.className}
            index={index}
          />
        </div>
      ))}
    </div>
  );
};

export default StackedScroll;
