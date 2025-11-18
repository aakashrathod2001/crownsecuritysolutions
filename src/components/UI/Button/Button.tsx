// import React, { ReactNode } from "react";
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";
// import styles from "./Button.module.scss";

// type ButtonProps = {
//   text?: string;
//   className?: string;
//   children?: ReactNode;
//   href?: string;                          // 👈 NEW: render as <Link> when provided
//   target?: "_self" | "_blank";
//   rel?: string;
//   type?: "button" | "submit" | "reset";
//   onClick?: () => void;
//   disabled?: boolean;
//   ariaLabel?: string;
//   showIcon?: boolean;                     // 👈 NEW: toggle arrow icon
// };

// const Button: React.FC<ButtonProps> = ({
//   text,
//   className = "",
//   children,
//   href,
//   target = "_self",
//   rel,
//   type = "button",
//   onClick,
//   disabled = false,
//   ariaLabel,
//   showIcon = true,
// }) => {
//   const content = (
//     <>
//       {children ? (
//         children
//       ) : (
//         <>
//           {text || "Contact us"}
//           {showIcon && <ArrowUpRight className={styles.icon} />}
//         </>
//       )}
//     </>
//   );

//   if (href) {
//     return (
//       <Link
//         href={href}
//         target={target}
//         rel={rel}
//         aria-label={ariaLabel ?? text}
//         className={`${styles.button} ${className}`}
//       >
//         {content}
//       </Link>
//     );
//   }

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//       aria-label={ariaLabel ?? text}
//       className={`${styles.button} ${className}`}
//     >
//       {content}
//     </button>
//   );
// };

// export default Button;

import React, { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./Button.module.scss";

type ButtonProps = {
  text?: string;
  className?: string;
  children?: ReactNode;
  href?: string; // if provided → renders as <Link>
  target?: "_self" | "_blank";
  rel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  showIcon?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  className = "",
  children,
  href,
  target = "_self",
  rel,
  type = "button",
  onClick,
  disabled = false,
  ariaLabel,
  showIcon = true,
}) => {
  const content = (
    <>
      {children ? (
        children
      ) : (
        <>
          {text || "Contact us"}
          {showIcon && <ArrowUpRight className={styles.icon} />}
        </>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel ?? text}
        className={`${styles.button} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel ?? text}
      className={`${styles.button} ${className}`}
    >
      {content}
    </button>
  );
};

export default Button;
