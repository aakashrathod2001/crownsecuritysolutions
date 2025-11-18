// 'use client';

// import React from 'react';
// import styles from './Heading.module.scss';
// import clsx from 'clsx';

// export type ColorClass = 'gradientRed' | 'gray' | 'white' | 'black';

// export type HeadingData = {
//   first?: string;                 // optional
//   second?: string;                // optional
//   colorClassFirst?: ColorClass;   // optional override
//   colorClassSecond?: ColorClass;  // optional override
//   withLineBreak?: boolean;        // default: true
// };

// type HeadingProps = { data: HeadingData };

// /** whitelist helper (avoids undefined css-module classes) */
// const getColorClass = (token: ColorClass | undefined, fallback: ColorClass) => {
//   const allowed: Record<ColorClass, string> = {
//     gradientRed: styles.gradientRed,
//     gray: styles.gray,
//     white: styles.white,
//     black: styles.black,
//   };
//   return allowed[token ?? fallback] || allowed[fallback];
// };

// const Heading: React.FC<HeadingProps> = ({ data }) => {
//   const {
//     first,
//     second,
//     colorClassFirst,
//     colorClassSecond,
//     withLineBreak = true, // ✅ default: keep <br />
//   } = data;

//   // defaults: first = gradientRed, second = black
//   const firstClass = getColorClass(colorClassFirst, 'gradientRed');
//   const secondClass = getColorClass(colorClassSecond, 'black');

//   return (
//     <h2 className={styles.heading}>
//       {first && <span className={clsx(styles.line, firstClass)}>{first}</span>}
//       {first && second && withLineBreak && <br />}
//       {second && <span className={clsx(styles.line, secondClass)}>{second}</span>}
//     </h2>
//   );
// };

// export default Heading;

'use client';

import React from 'react';
import styles from './Heading.module.scss';
import clsx from 'clsx';

export type ColorClass = 'gradientRed' | 'gray' | 'white' | 'black';

export type HeadingData = {
  first?: string;
  second?: string;
  support?: string;               // single paragraph
  colorClassFirst?: ColorClass;
  colorClassSecond?: ColorClass;
  supportColorClass?: ColorClass; // default: black
  withLineBreak?: boolean;        // default: true
};

type HeadingProps = { data: HeadingData; className?: string };

const getColorClass = (token: ColorClass | undefined, fallback: ColorClass) => {
  const allowed: Record<ColorClass, string> = {
    gradientRed: styles.gradientRed,
    gray: styles.gray,
    white: styles.white,
    black: styles.black,
  };
  return allowed[token ?? fallback] || allowed[fallback];
};

const renderWithBreaks = (text: string) => {
  // normalize "\\n" -> "\n" so JSON/CMS content works
  const normalized = text.replace(/\\n/g, '\n');
  const parts = normalized.split('\n');
  return parts.map((chunk, i) => (
    <React.Fragment key={i}>
      {chunk}
      {i < parts.length - 1 && <br />}
    </React.Fragment>
  ));
};

const Heading: React.FC<HeadingProps> = ({ data, className }) => {
  const {
    first,
    second,
    support,
    colorClassFirst,
    colorClassSecond,
    supportColorClass,
    withLineBreak = true,
  } = data;

  // defaults: first = gradientRed, second = black, support = black
  const firstClass = getColorClass(colorClassFirst, 'gradientRed');
  const secondClass = getColorClass(colorClassSecond, 'black');
  const supportClass = getColorClass(supportColorClass, 'black');

  return (
    <div className={clsx(styles.headingWrap, className)}>
      <h2 className={styles.heading}>
        {first && <span className={clsx(styles.line, firstClass)}>{renderWithBreaks(first)}</span>}
        {first && second && withLineBreak && <br />}
        {second && <span className={clsx(styles.line, secondClass)}>{renderWithBreaks(second)}</span>}
      </h2>

      {support && (
        <p className={clsx(styles.support, supportClass)}>
          {renderWithBreaks(support)}
        </p>
      )}
    </div>
  );
};

export default Heading;



