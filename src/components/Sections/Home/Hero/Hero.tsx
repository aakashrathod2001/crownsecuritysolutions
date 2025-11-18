// // // // Hero.tsx
// // // "use client";

// // // import React, { useRef, useEffect } from "react";
// // // import styles from "./Hero.module.scss";
// // // import HeroSearch from "@/components/UI/HeroSearch/HeroSearch";
// // // import BrandSlider from "@/components/UI/BrandSlider/BrandSlider";

// // // const Hero: React.FC = () => {
// // //   const videoRef = useRef<HTMLVideoElement>(null);

// // //   useEffect(() => {
// // //     const v = videoRef.current;
// // //     if (!v) return;

// // //     // iOS quirks: ensure these are set BEFORE play()
// // //     v.muted = true;
// // //     v.playsInline = true; // TS property
// // //     // {@ts-expect-error legacy iOS attribute}
// // //     v.setAttribute("webkit-playsinline", "true");

// // //     const tryPlay = () => v.play().catch(() => {/* ignore; iOS may still block in Low Power Mode */});

// // //     // First attempt
// // //     tryPlay();

// // //     // Fallback: start on first user interaction (covers Low Power Mode)
// // //     const onFirstTouch = () => {
// // //       tryPlay();
// // //       window.removeEventListener("touchstart", onFirstTouch);
// // //     };
// // //     window.addEventListener("touchstart", onFirstTouch, { once: true });

// // //     return () => window.removeEventListener("touchstart", onFirstTouch);
// // //   }, []);

// // //   return (
// // //     <div className={styles.heroContainer}>
// // //       <div className={styles.videoBackground}>
// // //         <video
// // //           ref={videoRef}
// // //           className={styles.backgroundVideo}
// // //           autoPlay
// // //           loop
// // //           playsInline
// // //           preload="auto"
// // //           poster="/assets/hero-poster.jpg"
// // //           // Hard-disable UI
// // //           controls={false}
// // //           disablePictureInPicture
// // //           controlsList="nodownload nofullscreen noplaybackrate noremoteplayback"
// // //           // {@ts-expect-error legacy iOS attribute}
// // //           webkit-playsinline="true"
// // //         >
// // //           <source
// // //             src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
// // //             type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
// // //           />
// // //           Your browser does not support the video tag.
// // //         </video>
// // //         <div className={styles.videoOverlay} />
// // //       </div>

// // //       {/* …rest of your content unchanged… */}
// // //       <div className="pageLayout">
// // //         <div className="full-width-container">
// // //           <div className={styles.content}>
// // //             <div className={styles.innerContent}>
// // //               <h1 className={styles.heading}>
// // //                 Elevate With the <br />
// // //                 Best Creative Agency for Visionary Brands.
// // //               </h1>
// // //               <HeroSearch />
// // //             </div>

// // //             <div className={styles.logosContainer}>
// // //               <h2 className={styles.logosTitle}>Trusted by 500+ global companies</h2>
// // //               <BrandSlider className={styles.homeBrandSlider} speed={1.4} />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Hero;

// // // components/Sections/Home/Hero/Hero.tsx
// // "use client";

// // import React, { useRef, useEffect } from "react";
// // import styles from "./Hero.module.scss";
// // import HeroSearch from "@/components/UI/HeroSearch/HeroSearch";
// // import BrandSlider from "@/components/UI/BrandSlider/BrandSlider";

// // type Pill = { label: string; href?: string };

// // export type HeroProps = {
// //   /** Title can be a string (supports \n) or JSX */
// //   title?: string | React.ReactNode;
// //   subtitle?: React.ReactNode;

// //   /** Feature flags */
// //   showSearch?: boolean;        // default: true
// //   showBrandSlider?: boolean;   // default: true
// //   showPills?: boolean;         // default: false

// //   /** Search config */
// //   search?: {
// //     placeholder?: string;
// //     suggestions?: Pill[];
// //   };

// //   /** Media */
// //   videoSrc?: string;
// //   poster?: string;

// //   className?: string;
// // };

// // const Hero: React.FC<HeroProps> = ({
// //   title = (
// //     <>
// //       Elevate With the <br />
// //       Best Creative Agency for Visionary Brands.
// //     </>
// //   ),
// //   subtitle,
// //   showSearch = true,
// //   showBrandSlider = true,
// //   showPills = false,
// //   search,
// //   videoSrc = "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
// //   poster = "/assets/hero-poster.jpg",
// //   className,
// // }) => {
// //   const videoRef = useRef<HTMLVideoElement>(null);

// //   useEffect(() => {
// //     const v = videoRef.current;
// //     if (!v) return;
// //     v.muted = true;
// //     v.playsInline = true;
// //     // {@ts-expect-error legacy iOS attribute}
// //     v.setAttribute("webkit-playsinline", "true");
// //     v.play().catch(() => {});
// //     const onFirstTouch = () => {
// //       v.play().catch(() => {});
// //       window.removeEventListener("touchstart", onFirstTouch);
// //     };
// //     window.addEventListener("touchstart", onFirstTouch, { once: true });
// //     return () => window.removeEventListener("touchstart", onFirstTouch);
// //   }, []);

// //   const renderTitle =
// //     typeof title === "string"
// //       ? title.split("\n").map((line, i) => (
// //           <span key={i}>
// //             {i > 0 && <br />}
// //             {line}
// //           </span>
// //         ))
// //       : title;

// //   // If your HeroSearch doesn't accept `placeholder`, we spread nothing.
// //   const HeroSearchAny = HeroSearch as unknown as React.ComponentType<Record<string, unknown>>;
// //   const heroSearchProps = search?.placeholder ? { placeholder: search.placeholder } : {};

// //   return (
// //     <div className={`${styles.heroContainer} ${className ?? ""}`}>
// //       <div className={styles.videoBackground}>
// //         <video
// //           ref={videoRef}
// //           className={styles.backgroundVideo}
// //           autoPlay
// //           loop
// //           playsInline
// //           preload="auto"
// //           poster={poster}
// //           controls={false}
// //           disablePictureInPicture
// //           controlsList="nodownload nofullscreen noplaybackrate noremoteplayback"
// //           // {@ts-expect-error legacy iOS attribute}
// //           webkit-playsinline="true"
// //         >
// //           <source src={videoSrc} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
// //         </video>
// //         <div className={styles.videoOverlay} />
// //       </div>

// //       <div className="pageLayout">
// //         <div className="full-width-container">
// //           <div className={styles.content}>
// //             <div className={styles.innerContent}>
// //               <h1 className={styles.heading}>{renderTitle}</h1>
// //               {subtitle && <p className={styles.subheading}>{subtitle}</p>}

// //               {showSearch && (
// //                 <>
// //                   <HeroSearchAny {...heroSearchProps} />
// //                   {showPills && !!search?.suggestions?.length && (
// //                     <div className={styles.searchPills}>
// //                       {search.suggestions.map((p, i) => (
// //                         <a key={i} href={p.href ?? "#"} className={styles.pill}>
// //                           {p.label} <span className={styles.pillArrow}>→</span>
// //                         </a>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </>
// //               )}
// //             </div>

// //             {showBrandSlider && (
// //               <div className={styles.logosContainer}>
// //                 <h2 className={styles.logosTitle}>Trusted by 500+ global companies</h2>
// //                 <BrandSlider className={styles.homeBrandSlider} speed={1.4} />
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;

// // components/Sections/Home/Hero/Hero.tsx
// "use client";

// import React, { useRef, useEffect } from "react";
// import styles from "./Hero.module.scss";
// import HeroSearch from "@/components/UI/HeroSearch/HeroSearch";
// import BrandSlider from "@/components/UI/BrandSlider/BrandSlider";

// type Pill = { label: string; href?: string };

// export type HeroProps = {
//   /** Title can be a string (supports \n) or JSX */
//   title?: string | React.ReactNode;
//   subtitle?: React.ReactNode;
//   subtitleMaxWidth?: string; // ✅ Add this line

//   /** Feature flags */
//   showSearch?: boolean;        // default: true
//   showBrandSlider?: boolean;   // default: true
//   showPills?: boolean;         // default: false

//   /** Search config */
//   search?: {
//     placeholder?: string;
//     suggestions?: Pill[];
//   };

//   /** Media */
//   videoSrc?: string;
//   poster?: string;

//   className?: string;
// };

// const Hero: React.FC<HeroProps> = ({
//   title = (
//     <>
//       Elevate With the <br />
//       Best Creative Agency for Visionary Brands.
//     </>
//   ),
//   subtitle,
//   subtitleMaxWidth, // ✅ Add this line
//   showSearch = true,
//   showBrandSlider = true,
//   showPills = false,
//   search,
//   videoSrc = "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//   poster = "/assets/hero-poster.jpg",
//   className,
// }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     v.muted = true;
//     v.playsInline = true;
//     // {@ts-expect-error legacy iOS attribute}
//     v.setAttribute("webkit-playsinline", "true");
//     v.play().catch(() => {});
//     const onFirstTouch = () => {
//       v.play().catch(() => {});
//       window.removeEventListener("touchstart", onFirstTouch);
//     };
//     window.addEventListener("touchstart", onFirstTouch, { once: true });
//     return () => window.removeEventListener("touchstart", onFirstTouch);
//   }, []);

//   const renderTitle =
//     typeof title === "string"
//       ? title.split("\n").map((line, i) => (
//           <span key={i}>
//             {i > 0 && <br />}
//             {line}
//           </span>
//         ))
//       : title;

//   const HeroSearchAny = HeroSearch as unknown as React.ComponentType<Record<string, unknown>>;
//   const heroSearchProps = search?.placeholder ? { placeholder: search.placeholder } : {};

//   return (
//     <div className={`${styles.heroContainer} ${className ?? ""}`}>
//       <div className={styles.videoBackground}>
//         <video
//           ref={videoRef}
//           className={styles.backgroundVideo}
//           autoPlay
//           loop
//           playsInline
//           preload="auto"
//           poster={poster}
//           controls={false}
//           disablePictureInPicture
//           controlsList="nodownload nofullscreen noplaybackrate noremoteplayback"
//           // {@ts-expect-error legacy iOS attribute}
//           webkit-playsinline="true"
//         >
//           <source src={videoSrc} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
//         </video>
//         <div className={styles.videoOverlay} />
//       </div>

//       <div className="pageLayout">
//         <div className="full-width-container">
//           <div className={styles.content}>
//             <div className={styles.innerContent}>
//               <h1 className={styles.heading}>{renderTitle}</h1>
//               {/* ✅ Add inline style with maxWidth */}
//               {subtitle && (
//                 <p 
//                   className={styles.subheading}
//                   style={subtitleMaxWidth ? { maxWidth: subtitleMaxWidth } : undefined}
//                 >
//                   {subtitle}
//                 </p>
//               )}

//               {showSearch && (
//                 <>
//                   <HeroSearchAny {...heroSearchProps} />
//                   {showPills && !!search?.suggestions?.length && (
//                     <div className={styles.searchPills}>
//                       {search.suggestions.map((p, i) => (
//                         <a key={i} href={p.href ?? "#"} className={styles.pill}>
//                           {p.label} <span className={styles.pillArrow}>→</span>
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>

//             {showBrandSlider && (
//               <div className={styles.logosContainer}>
//                 <h2 className={styles.logosTitle}>Trusted by 500+ global companies</h2>
//                 <BrandSlider className={styles.homeBrandSlider} speed={1.4} />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "./Hero.module.scss";
import HeroSearch from "@/components/UI/HeroSearch/HeroSearch";
import BrandSlider from "@/components/UI/BrandSlider/BrandSlider";

type Pill = { label: string; href?: string };

export type HeroProps = {
  /** Title can be a string (supports \n) or JSX */
  title?: string | React.ReactNode;
  subtitle?: React.ReactNode;
  subtitleMaxWidth?: string;

  /** Feature flags */
  showSearch?: boolean;        // default: true
  showBrandSlider?: boolean;   // default: true
  showPills?: boolean;         // default: false

  /** Search config */
  search?: {
    placeholder?: string;
    suggestions?: Pill[];
  };

  /** Media */
  videoSrc?: string;
  poster?: string;

  className?: string;
};

// Custom hook for media query
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

const Hero: React.FC<HeroProps> = ({
  title = (
    <>
      Elevate With the <br />
      Best Creative Agency for Visionary Brands.
    </>
  ),
  subtitle,
  subtitleMaxWidth,
  showSearch = true,
  showBrandSlider = true,
  showPills = false,
  search,
  videoSrc = "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  poster = "/assets/hero-poster.jpg",
  className,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useMediaQuery('(max-width: 599px)');

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    // {@ts-expect-error legacy iOS attribute}
    v.setAttribute("webkit-playsinline", "true");
    v.play().catch(() => {});
    const onFirstTouch = () => {
      v.play().catch(() => {});
      window.removeEventListener("touchstart", onFirstTouch);
    };
    window.addEventListener("touchstart", onFirstTouch, { once: true });
    return () => window.removeEventListener("touchstart", onFirstTouch);
  }, []);

  const renderTitle =
    typeof title === "string"
      ? title.split("\n").map((line, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {line}
          </span>
        ))
      : title;

  const HeroSearchAny = HeroSearch as unknown as React.ComponentType<Record<string, unknown>>;
  const heroSearchProps = search?.placeholder ? { placeholder: search.placeholder } : {};

  return (
    <div className={`${styles.heroContainer} ${className ?? ""}`}>
      <div className={styles.videoBackground}>
        <video
          ref={videoRef}
          className={styles.backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={poster}
          controls={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noplaybackrate noremoteplayback"
          // {@ts-expect-error legacy iOS attribute}
          webkit-playsinline="true"
        >
          <source src={videoSrc} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
        </video>
        <div className={styles.videoOverlay} />
      </div>

      <div 
        className="pageLayout"
        style={{
          alignSelf: isMobile ? 'flex-start' : undefined
        }}
      >
        <div className="full-width-container">
          <div className={styles.content}>
            <div className={styles.innerContent}>
              <h1 className={styles.heading}>{renderTitle}</h1>
              {subtitle && (
                <p 
                  className={styles.subheading}
                  style={subtitleMaxWidth ? { maxWidth: subtitleMaxWidth } : undefined}
                >
                  {subtitle}
                </p>
              )}

              {showSearch && (
                <>
                  <HeroSearchAny {...heroSearchProps} />
                  {showPills && !!search?.suggestions?.length && (
                    <div className={styles.searchPills}>
                      {search.suggestions.map((p, i) => (
                        <a key={i} href={p.href ?? "#"} className={styles.pill}>
                          {p.label} <span className={styles.pillArrow}>→</span>
                        </a>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

            {showBrandSlider && (
              <div className={styles.logosContainer}>
                <h2 className={styles.logosTitle}>Trusted by 500+ global companies</h2>
                <BrandSlider className={styles.homeBrandSlider} speed={1.4} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;