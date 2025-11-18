// "use client";

// import React from "react";
// import styles from "./BlockContent.module.scss";
// import Button from "@/components/UI/Button/Button";
// import Image from "next/image";
// import Link from "next/link";

// type BlockContentProps = {
//   title: string;
//   heading: string;
//   description: string;
//   bulletPoints?: string[]; // Made optional for service pages
//   buttonText: string;
//   image: string;
//   variant?: string;
//   layout?: "3-column" | "2-column"; // New prop for layout control

//   /** Optional overrides for the 11th "Know More Services" link */
//   moreHref?: string; // default: "/services"
//   moreText?: string; // default: "Know More Services"
// };

// const BlockContent: React.FC<BlockContentProps> = ({
//   title,
//   heading,
//   description,
//   bulletPoints = [],
//   buttonText,
//   image,
//   variant,
//   layout = "3-column", // Default to homepage layout
//   moreHref = "/category",
//   moreText = "Click here to see more...",
// }) => {
//   const hasOverflow = bulletPoints.length > 10;
//   const visible = hasOverflow ? bulletPoints.slice(0, 10) : bulletPoints;

//   return (
//     <div
//       className={`${styles.mainContainer} ${variant ? styles[variant] : ""} ${
//         layout === "2-column" ? styles.twoColumn : ""
//       }`}
//     >
//       <div className="pageLayout">
//         <div className="full-width-container">
//           <div className={styles.container}>
//             <div className={styles.left}>
//               <h2 className={styles.heading}>{heading}</h2>
//               <p className={styles.description}>{description}</p>
//               <Button
//                 text={buttonText}
//                 className={`${styles.servicesBlockButton} ${
//                   variant === "redBlock" ? styles.whiteOnRed : ""
//                 }`}
//               />
//             </div>

//             {/* Only render middle column for 3-column layout */}
//             {layout === "3-column" && bulletPoints.length > 0 && (
//               <div className={styles.endContainer}>
//                 <div className={styles.middle}>
//                   <ul className={styles.bulletList}>
//                     {visible.map((point, index) => (
//                       <li key={index}>
//                         <span className={styles.text}>{point}</span>
//                       </li>
//                     ))}

//                     {/* 11th item only if there are more than 10 */}
//                     {hasOverflow && (
//                       <li className={styles.moreItem}>
//                         <Link href={moreHref} className={styles.moreLink}>
//                           {moreText}
//                         </Link>
//                       </li>
//                     )}
//                   </ul>
//                 </div>

//                 <div className={styles.right}>
//                   <Image
//                     src={image}
//                     alt={title}
//                     height={100}
//                     width={100}
//                     style={{ objectFit: "cover" }}
//                     className={styles.rightImage}
//                     unoptimized
//                   />
//                 </div>
//               </div>
//             )}

//             {/* For 2-column layout, right content goes directly here */}
//             {layout === "2-column" && (
//               <div className={styles.right}>
//                 <Image
//                   src={image}
//                   alt={title}
//                   height={100}
//                   width={100}
//                   style={{ objectFit: "cover" }}
//                   className={styles.rightImage}
//                   unoptimized
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlockContent;
"use client";

import React from "react";
import styles from "./BlockContent.module.scss";
import Button from "@/components/UI/Button/Button";
import Image from "next/image";
import Link from "next/link";

type BulletPoint =
  | string
  | {
      label: string;
      href?: string;
    };

type BlockContentProps = {
  title: string;
  heading: string;
  description: string;
  bulletPoints?: BulletPoint[]; // now supports label + href
  buttonText: string;
  image: string;
  variant?: string;
  layout?: "3-column" | "2-column";

  /** Optional overrides for the 11th "Know More Services" link */
  moreHref?: string; // default: "/category"
  moreText?: string; // default: "Click here to see more..."

  /** Optional href for the main button (category page link) */
  buttonHref?: string;
};

const BlockContent: React.FC<BlockContentProps> = ({
  title,
  heading,
  description,
  bulletPoints = [],
  buttonText,
  image,
  variant,
  layout = "3-column", // Default to homepage layout
  moreHref = "/category",
  moreText = "Click here to see more...",
  buttonHref,
}) => {
  const hasOverflow = bulletPoints.length > 10;
  const visible = hasOverflow ? bulletPoints.slice(0, 10) : bulletPoints;

  const getBulletLabel = (point: BulletPoint) =>
    typeof point === "string" ? point : point.label;

  const getBulletHref = (point: BulletPoint) =>
    typeof point === "string" ? undefined : point.href;

  return (
    <div
      className={`${styles.mainContainer} ${variant ? styles[variant] : ""} ${
        layout === "2-column" ? styles.twoColumn : ""
      }`}
    >
      <div className="pageLayout">
        <div className="full-width-container">
          <div className={styles.container}>
            <div className={styles.left}>
              <h2 className={styles.heading}>{heading}</h2>
              <p className={styles.description}>{description}</p>

              {buttonHref ? (
                <Link href={buttonHref}>
                  <Button
                    text={buttonText}
                    className={`${styles.servicesBlockButton} ${
                      variant === "redBlock" ? styles.whiteOnRed : ""
                    }`}
                  />
                </Link>
              ) : (
                <Button
                  text={buttonText}
                  className={`${styles.servicesBlockButton} ${
                    variant === "redBlock" ? styles.whiteOnRed : ""
                  }`}
                />
              )}
            </div>

            {/* Only render middle column for 3-column layout */}
            {layout === "3-column" && bulletPoints.length > 0 && (
              <div className={styles.endContainer}>
                <div className={styles.middle}>
                  <ul className={styles.bulletList}>
                    {visible.map((point, index) => {
                      const label = getBulletLabel(point);
                      const href = getBulletHref(point);

                      return (
                        <li key={index}>
                          {href ? (
                            <Link href={href} className={styles.text}>
                              {label}
                            </Link>
                          ) : (
                            <span className={styles.text}>{label}</span>
                          )}
                        </li>
                      );
                    })}

                    {/* 11th item only if there are more than 10 */}
                    {hasOverflow && (
                      <li className={styles.moreItem}>
                        <Link href={moreHref} className={styles.moreLink}>
                          {moreText}
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>

                <div className={styles.right}>
                  <Image
                    src={image}
                    alt={title}
                    height={100}
                    width={100}
                    style={{ objectFit: "cover" }}
                    className={styles.rightImage}
                    unoptimized
                  />
                </div>
              </div>
            )}

            {/* For 2-column layout, right content goes directly here */}
            {layout === "2-column" && (
              <div className={styles.right}>
                <Image
                  src={image}
                  alt={title}
                  height={100}
                  width={100}
                  style={{ objectFit: "cover" }}
                  className={styles.rightImage}
                  unoptimized
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockContent;
