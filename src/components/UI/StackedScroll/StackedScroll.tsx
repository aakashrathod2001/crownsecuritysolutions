"use client";

import React from "react";
import styles from "./StackedScroll.module.scss";
import classNames from "classnames";
import BlockContent from "./BlockContent";
import { stackedBlocks } from "@/data/stackedData";

type StackedBlock = {
  number?: string;
  className: string;
  heading: string;
  description: string;
};

type Props = {
  blocks?: StackedBlock[];
};

const StackedScroll: React.FC<Props> = ({
  blocks = stackedBlocks,
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
