// import React from "react";
// import styles from "./HomeTagline.module.scss";
// import Heading from "@/components/UI/Heading/Heading";
// import { headings } from "@/data/headings";

// const HomeTagline = () => {
//   return (
//     <div className={styles.HomeTagline}>
//       <div className="pageLayout">
//         <div className="full-width-container">
//           <Heading data={headings.heroTagline} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeTagline;

import React from "react";
import styles from "./HomeTagline.module.scss";
import Heading from "@/components/UI/Heading/Heading";
import type { HeadingData } from "@/components/UI/Heading/Heading";

type Props = {
  heading: HeadingData;
  variant?: "home" | "service";
  textAlign?: "left" | "center" | "right";
};

const HomeTagline: React.FC<Props> = ({ 
  heading,
  variant = "home",
  textAlign = "left"
}) => {
  const componentClassName = [
    styles.HomeTagline,
    variant === "service" ? styles.serviceVariant : "",
    styles[`textAlign${textAlign.charAt(0).toUpperCase() + textAlign.slice(1)}`]
  ].filter(Boolean).join(" ");

  return (
    <div className={componentClassName}>
      <div className="pageLayout">
        <div className="full-width-container">
          <Heading data={heading} />
        </div>
      </div>
    </div>
  );
};

export default HomeTagline;