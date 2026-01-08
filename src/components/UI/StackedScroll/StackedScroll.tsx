// 'use client';

// import React from 'react';
// import styles from './StackedScroll.module.scss';
// import classNames from 'classnames';
// import BlockContent from './BlockContent';
// import { stackedBlocks } from '@/data/stackedData';

// type StackedBlock = {
//   title: string;
//   className: string;
//   heading: string;
//   description: string;
//   buttonText: string;
//   image: string;
//   bulletPoints?: string[]; // Optional for service pages
// };

// type Props = {
//   blocks?: StackedBlock[];
//   layout?: "3-column" | "2-column";
// };

// const StackedScroll: React.FC<Props> = ({ 
//   blocks = stackedBlocks, 
//   layout = "3-column" 
// }) => {
//   return (
//     <div className={styles.container}>
//       {blocks.map((block, index) => (
//         <div
//           key={index}
//           className={classNames(styles.block, styles[block.className])}
//           style={{ zIndex: index + 1 }}
//         >
//           <BlockContent 
//             {...block} 
//             variant={block.className}
//             layout={layout}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StackedScroll;
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
            title={block.title}
            heading={block.heading}
            description={block.description}
            variant={block.className}
          />
        </div>
      ))}
    </div>
  );
};

export default StackedScroll;
