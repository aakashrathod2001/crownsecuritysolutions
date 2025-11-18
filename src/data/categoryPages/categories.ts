// export type CategorySlug = "branding" | "content" | "tech" | "marketing" | "ai";

// export const CATEGORY_SLUGS: CategorySlug[] = [
//   "branding",
//   "content",
//   "tech",
//   "marketing",
//   "ai",
// ];

import { CATEGORY_SLUGS, type CategorySlug } from "./categorySlugs";

// Re-export for convenience (optional)
export { CATEGORY_SLUGS, type CategorySlug };

type SearchConfig = {
  placeholder?: string;
  suggestions?: { label: string; href?: string }[];
};

type InfoSplitSection = {
  title: string;
  body: string;
  cta: {
    text: string;
    href: string;
  };
};

type ServiceCard = {
  title: string;
  image: string;
  href?: string;
};

type OtherServiceCard = {
  title: string;
  image: string;
  href?: string;
  bgColor?: string;
  textColor?: string;
};

type CategoryPageContent = {
  hero: {
    title: string;
    subtitle?: string;
    showSearch?: boolean;
    showBrandSlider?: boolean;
    videoSrc?: string;
    poster?: string;
    search?: SearchConfig;
  };
  infoSplit?: InfoSplitSection[];
  serviceGrid?: {
    textColor: string | undefined;
    ctaText: string;
    ctaHref: string;
    cardBg?: string;
    cards: ServiceCard[];
  };
  otherServicesGrid?: {
    ctaText: string;
    ctaHref: string;
    cards: OtherServiceCard[];
  };
};

export const CATEGORY_CONTENT: Record<CategorySlug, CategoryPageContent> = {
  branding: {
    hero: {
      title: "Branding That Builds Legacies",
      subtitle: `Wunderkint is recognized as one of the best branding agencies, delivering branding services that go beyond visuals to create lasting impact. We craft brand identities that inspire recognition, build trust, and leave an impression that endures. From strategy to design, our approach blends creativity and precision, ensuring your brand feels timeless, authentic, and future-ready.`,
      showSearch: true,
      showBrandSlider: true,
    },

    infoSplit: [
      {
        title: "Why Does Branding Matter?",
        body: `A strong brand is not just how you look, but how you are remembered. It defines your voice, shapes customer perception, and sets the stage for growth.\n\n\nEffective branding services are the difference between being seen and being unforgettable. Partnering with the best branding agency means your identity will be powerful, consistent, and built for long-term success.`,
        cta: {
          text: "Contact Us",
          href: "/contact",
        },
      },
      {
        title: "The Wunderkint Edge in Branding",
        body: `As a top creative agency and trusted partner for branding services, Wunderkint pushes branding beyond aesthetics. Our work is built to inspire trust, spark recognition, and deliver measurable results.\n\n\nWhether you are a startup shaping your first identity or an enterprise refreshing your image, Wunderkint ensures your brand stands apart. This is why clients consider us among the best branding agencies for visionary brands.`,
        cta: {
          text: "Contact Us",
          href: "/contact",
        },
      },
    ],

    serviceGrid: {
      textColor: "#fff",
      ctaText: "Contact Us",
      ctaHref: "/contact",
      cardBg: "#F15151",
      cards: [
        {
          title: "Logo Design",
          image: "https://cdn.wunderkint.com/images/category/branding/logo_design.webp",
          href: "/professional-logo-design-services",
        },
        {
          title: "Cover Letters",
          image: "https://cdn.wunderkint.com/images/category/branding/cover_letters.webp",
          href: "/professional-cover-letter-writing-services",
        },
        {
          title: "Brochure Design",
          image: "https://cdn.wunderkint.com/images/category/branding/brochure_design.webp",
          href: "/professional-brochure-design-services",
        },
        {
          title: "Poster Design",
          image: "https://cdn.wunderkint.com/images/category/branding/poster_design.webp",
          href: "/professional-poster-design-services",
        },
        {
          title: "Event Management",
          image: "https://cdn.wunderkint.com/images/category/branding/event_management.webp",
          href: "/professional-event-management-services",
        },
        {
          title: "Flyer Design",
          image: "https://cdn.wunderkint.com/images/category/branding/flyer_design.webp",
          href: "/professional-flyer-design-services",
        },
        {
          title: "Book Covers",
          image: "https://cdn.wunderkint.com/images/category/branding/book_covers.webp",
          href: "/professional-book-cover-design-services",
        },
        {
          title: "Catalog Design",
          image: "https://cdn.wunderkint.com/images/category/branding/catalog_design.webp",
          href: "/professional-catalog-design-services",
        },
        {
          title: "Menu Design",
          image: "https://cdn.wunderkint.com/images/category/branding/menu_design.webp",
          href: "/professional-menu-design-services",
        },
        {
          title: "Pattern Design",
          image: "https://cdn.wunderkint.com/images/category/branding/pattern_design.webp",
          href: "/professional-pattern-design-services",
        },
        {
          title: "Book Design",
          image: "https://cdn.wunderkint.com/images/category/branding/book_design.webp",
          href: "/professional-book-design-services",
        },
        {
          title: "3D Design",
          image: "https://cdn.wunderkint.com/images/category/branding/3d_design.webp",
          href: "/professional-3d-design-services",
        },
        {
          title: "Infographic Design",
          image: "https://cdn.wunderkint.com/images/category/branding/infographic_design.webp",
          href: "/professional-infographic-design-services",
        },
        {
          title: "Landscape Design",
          image: "https://cdn.wunderkint.com/images/category/branding/landscape_design.webp",
          href: "/professional-landscape-design-services",
        },
        {
          title: "Logo Animation",
          image: "https://cdn.wunderkint.com/images/category/branding/logo_animation.webp",
          href: "/professional-logo-animation-services",
        },
        {
          title: "Print Design",
          image: "https://cdn.wunderkint.com/images/category/branding/print_design.webp",
          href: "/professional-print-design-services",
        },
        {
          title: "App Design",
          image: "https://cdn.wunderkint.com/images/category/branding/app_design.webp",
          href: "/professional-app-design-services",
        },
        {
          title: "Rebranding",
          image: "https://cdn.wunderkint.com/images/category/branding/rebranding.webp",
          href: "/professional-rebranding-services",
        },
        {
          title: "Social Media Design",
          image: "https://cdn.wunderkint.com/images/category/branding/social_media_design.webp",
          href: "/professional-social-media-design-services",
        },
        {
          title: "Visual Design",
          image: "https://cdn.wunderkint.com/images/category/branding/visual_design.webp",
          href: "/professional-visual-design-services",
        },
        {
          title: "Brand Style Guides",
          image: "https://cdn.wunderkint.com/images/category/branding/brand_style_guides.webp",
          href: "/professional-brand-style-guide-services",
        },
        {
          title: "Icon Design",
          image: "https://cdn.wunderkint.com/images/category/branding/icon_design.webp",
          href: "/professional-icon-design-services",
        },
        {
          title: "Social Media Management",
          image: "https://cdn.wunderkint.com/images/category/branding/social_media_management.webp",
          href: "/professional-social-media-management-services",
        },
        {
          title: "Campaign Planning",
          image: "https://cdn.wunderkint.com/images/category/branding/campaign_planning.webp",
          href: "/professional-campaign-planning-services",
        },
        {
          title: "Brand Launch",
          image: "https://cdn.wunderkint.com/images/category/branding/brand_launch.webp",
          href: "/professional-brand-launch-services",
        },
        {
          title: "Traditional Advertising",
          image: "https://cdn.wunderkint.com/images/category/branding/traditional_advertising.webp",
          href: "/professional-traditional-advertising-services",
        },
        {
          title: "Store Launches",
          image: "https://cdn.wunderkint.com/images/category/branding/store_launches.webp",
          href: "/professional-store-launch-services",
        },
        {
          title: "Out of Home Advertising (OOH)",
          image: "https://cdn.wunderkint.com/images/category/branding/out_of_home_advertising.webp",
          href: "/professional-ooh-advertising-services",
        },
        {
          title: "Offline Activations",
          image: "https://cdn.wunderkint.com/images/category/branding/offline_activations.webp",
          href: "/professional-offline-activation-services",
        },
        {
          title: "Online Amplifications",
          image: "https://cdn.wunderkint.com/images/category/branding/online_amplifications.webp",
          href: "/professional-online-amplification-services",
        },
      ],
    },

    otherServicesGrid: {
      ctaText: "Explore All Services",
      ctaHref: "/services",
      cards: [
        {
          title: "Tech Solutions",
          image: "https://cdn.wunderkint.com/images/category/Tech.webp",
          bgColor: "#95D8C3",
          href: "/best-tech-services",
        },
        {
          title: "Marketing",
          image: "https://cdn.wunderkint.com/images/category/Marketing.webp",
          bgColor: "#C3DFF4",
          href: "/best-marketing-services",
        },
        {
          title: "Content",
          image: "https://cdn.wunderkint.com/images/category/Content.webp",
          bgColor: "#FCBDA3",
          href: "/best-content-services",
        },
        {
          title: "AI",
          image: "https://cdn.wunderkint.com/images/category/AI.webp",
          bgColor: "#BAB9DC",
          href: "/best-ai-services",
        },
      ],
    },
  },

  content: {
    hero: {
      title: "Content That Inspires Action",
      subtitle:
        "Wunderkint is recognized as one of the best content agencies, delivering content services that do more than fill space. We craft narratives that move people, spark imagination, and build trust. From compelling writing to immersive video production, our approach blends creativity with precision to ensure your content is authentic, powerful, and future-ready.",
      showSearch: true,
      showBrandSlider: true,
    },

    infoSplit: [
      {
        title: "Why Content Matter?",
        body: `Content is not just communication. It is the voice of your brand, the story your audience remembers, and the spark that drives loyalty. Strong content services transform ideas into meaningful experiences. Choosing the best content agency ensures your message is consistent, inspiring, and designed for measurable impact.`,
        cta: {
          text: "Contact Us",
          href: "/contact",
        },
      },
      {
        title: "The Wunderkint Edge in Content",
        body: `As a top creative agency trusted for content services, Wunderkint transforms communication into inspiration. We do not just produce content. We craft stories that elevate brands, spark recognition, and move audiences. Whether you are a startup finding your voice or an enterprise scaling globally, Wunderkint ensures your content leaves a mark. That is why clients consider us among the best content agencies for visionary storytelling.`,
        cta: {
          text: "Contact Us",
          href: "/contact",
        },
      },
    ],

    serviceGrid: {
      ctaText: "Contact Us",
      textColor: "#282828",
      ctaHref: "/contact",
      cardBg: "#FCBDA3",
      cards: [
        {
          title: "Content Writing",
          image: "https://cdn.wunderkint.com/images/category/content/Content_Writing.webp",
          href: "/professional-content-writing-services",
        },
        {
          title: "Transcription",
          image: "https://cdn.wunderkint.com/images/category/content/Transcription.webp",
          href: "/professional-transcription-services",
        },
        {
          title: "Creative Writing",
          image: "https://cdn.wunderkint.com/images/category/content/Creative_Writing.webp",
          href: "/professional-creative-writing-services",
        },
        {
          title: "Storyboards",
          image: "https://cdn.wunderkint.com/images/category/content/Storyboards.webp",
          href: "/professional-storyboard-services",
        },
        {
          title: "Ad Copy",
          image: "https://cdn.wunderkint.com/images/category/content/Ad_Copy.webp",
          href: "/professional-ad-copywriting-services",
        },
        {
          title: "Content Strategy",
          image: "https://cdn.wunderkint.com/images/category/content/Content_Strategy.webp",
          href: "/professional-content-strategy-services",
        },
        {
          title: "UX Writing",
          image: "https://cdn.wunderkint.com/images/category/content/UX_Writing.webp",
          href: "/professional-ux-writing-services",
        },
        {
          title: "Scriptwriting",
          image: "https://cdn.wunderkint.com/images/category/content/Scriptwriting.webp",
          href: "/professional-scriptwriting-services",
        },
        {
          title: "Podcast Writing",
          image: "https://cdn.wunderkint.com/images/category/content/Podcast_Writing.webp",
          href: "/professional-podcast-writing-services",
        },
        {
          title: "Social Media Copywriting",
          image: "https://cdn.wunderkint.com/images/category/content/Social_Media_Copywriting.webp",
          href: "/professional-social-media-copywriting-services",
        },
        {
          title: "Sales Copy",
          image: "https://cdn.wunderkint.com/images/category/content/Sales_Copy.webp",
          href: "/professional-sales-copywriting-services",
        },
        {
          title: "Podcast Production",
          image: "https://cdn.wunderkint.com/images/category/content/Podcast_Production.webp",
          href: "/professional-podcast-production-services",
        },
        {
          title: "Product Photography",
          image: "https://cdn.wunderkint.com/images/category/content/Product_Photography.webp",
          href: "/professional-product-photography-services",
        },
        {
          title: "Proofreading & Editing",
          image: "https://cdn.wunderkint.com/images/category/content/Proofreading_and_Editing.webp",
          href: "/professional-proofreading-editing-services",
        },
        {
          title: "Product Videos",
          image: "https://cdn.wunderkint.com/images/category/content/Product_Videos.webp",
          href: "/professional-product-video-services",
        },
        {
          title: "UGC Ads",
          image: "https://cdn.wunderkint.com/images/category/content/UGC_Ads.webp",
          href: "/professional-ugc-ad-services",
        },
        {
          title: "Social Media Videos",
          image: "https://cdn.wunderkint.com/images/category/content/Social_Media_Videos.webp",
          href: "/professional-social-media-video-services",
        },
        {
          title: "3D Product Animation",
          image: "https://cdn.wunderkint.com/images/category/content/3D_Product_Animation.webp",
          href: "/professional-3d-product-animation-services",
        },
        {
          title: "Music Promotion",
          image: "https://cdn.wunderkint.com/images/category/content/Music_Promotion.webp",
          href: "/professional-music-promotion-services",
        },
        {
          title: "Motion Graphics",
          image: "https://cdn.wunderkint.com/images/category/content/Motion_Graphics.webp",
          href: "/professional-motion-graphics-services",
        },
        {
          title: "Art & Illustration",
          image: "https://cdn.wunderkint.com/images/category/content/Art_and_Illustration.webp",
          href: "/professional-art-illustration-services",
        },
        {
          title: "UGC Videos",
          image: "https://cdn.wunderkint.com/images/category/content/UGC_Videos.webp",
          href: "/professional-ugc-video-services",
        },
        {
          title: "Video Editing",
          image: "https://cdn.wunderkint.com/images/category/content/Video_Editing.webp",
          href: "/professional-video-editing-services",
        },
        {
          title: "Video Production",
          image: "https://cdn.wunderkint.com/images/category/content/Video_Production.webp",
          href: "/professional-video-production-services",
        },
        {
          title: "Film Production",
          image: "https://cdn.wunderkint.com/images/category/content/Film_Production.webp",
          href: "/professional-film-production-services",
        },
        {
          title: "Animation Production",
          image: "https://cdn.wunderkint.com/images/category/content/Animation_Production.webp",
          href: "/professional-animation-production-services",
        },
        {
          title: "CGI Animation",
          image: "https://cdn.wunderkint.com/images/category/content/CGI_Animation.webp",
          href: "/professional-cgi-animation-services",
        },
        {
          title: "VFX Production",
          image: "https://cdn.wunderkint.com/images/category/content/VFX_Production.webp",
          href: "/professional-vfx-production-services",
        },
        {
          title: "3D Video Production",
          image: "https://cdn.wunderkint.com/images/category/content/3D_Video_Production.webp",
          href: "/professional-3d-video-production-services",
        },
        {
          title: "4D Video Production",
          image: "https://cdn.wunderkint.com/images/category/content/4D_Video_Production.webp",
          href: "/professional-4d-video-production-services",
        },
      ],
    },

    otherServicesGrid: {
      ctaText: "Explore All Services",
      ctaHref: "/services",
      cards: [
        {
          title: "Branding",
          image: "https://cdn.wunderkint.com/images/category/Branding.webp",
          bgColor: "#F15151",
          href: "/best-branding-services",
          textColor: "#fff",
        },
        {
          title: "Tech Solutions",
          image: "https://cdn.wunderkint.com/images/category/Tech.webp",
          bgColor: "#95D8C3",
          href: "/best-tech-services",
        },
        {
          title: "Marketing",
          image: "https://cdn.wunderkint.com/images/category/Marketing.webp",
          bgColor: "#C3DFF4",
          href: "/best-marketing-services",
        },
        {
          title: "AI",
          image: "https://cdn.wunderkint.com/images/category/AI.webp",
          bgColor: "#BAB9DC",
          href: "/best-ai-services",
        },
      ],
    },
  },

  tech: {
    hero: {
      title: "Technology That Transforms Brands",
      subtitle: `Wunderkint is recognized as one of the best creative agencies delivering tech services that go beyond tools to build future-ready brands. We design seamless, adaptive, and innovative digital solutions that empower businesses to grow. From websites to product experiences, our approach blends creativity with precision, ensuring your brand stays sharp, relevant, and visionary.`,
      showSearch: true,
      showBrandSlider: true,
    },

    infoSplit: [
      {
        title: "Why Tech Matter?",
        body: `Technology is not just about functionality, it is the engine that powers transformation. It defines how your customers experience your brand, shapes engagement, and sets the stage for scalable growth. Effective tech services are the difference between being present and being impactful. Partnering with a top creative agency ensures your digital solutions are built to last.`,
        cta: {
          text: "Contact Us",
          href: "/contact",
        },
      },
      {
        title: "The Wunderkint Edge in Tech",
        body: `As a top creative agency and trusted partner for tech solutions, Wunderkint pushes technology beyond simple execution. Our work is built to be seamless, adaptive, and transformative. Whether you are a startup building your first digital presence or an enterprise scaling for global audiences, Wunderkint ensures your brand thrives in the digital era. This is why clients consider us among the best creative agencies for visionary tech innovation.`,
        cta: {
          text: "Contact Us",
          href: "/contact",
        },
      },
    ],

    serviceGrid: {
      textColor: "#282828",
      ctaText: "Contact Us",
      ctaHref: "/contact",
      cardBg: "#95D8C3",
      cards: [
        {
          title: "WordPress Development",
          image: "https://cdn.wunderkint.com/images/category/tech/WordPress_Development.webp",
          href: "/professional-wordpress-development-services",
        },
        {
          title: "Website Design",
          image: "https://cdn.wunderkint.com/images/category/tech/Website_Design.webp",
          href: "/professional-website-design-services",
        },
        {
          title: "Website Development",
          image: "https://cdn.wunderkint.com/images/category/tech/Website_Development.webp",
          href: "/professional-website-development-services",
        },
        {
          title: "Webflow Development",
          image: "https://cdn.wunderkint.com/images/category/tech/Webflow_Development.webp",
          href: "/professional-webflow-development-services",
        },
        {
          title: "Mobile App Development",
          image: "https://cdn.wunderkint.com/images/category/tech/Mobile_App_Development.webp",
          href: "/professional-mobile-app-development-services",
        },
        {
          title: "Web Applications",
          image: "https://cdn.wunderkint.com/images/category/tech/Web_Applications.webp",
          href: "/professional-web-application-development-services",
        },
        {
          title: "Software Development",
          image: "https://cdn.wunderkint.com/images/category/tech/Software_Development.webp",
          href: "/professional-software-development-services",
        },
        {
          title: "UI/UX Design",
          image: "https://cdn.wunderkint.com/images/category/tech/UI_UX_Design.webp",
          href: "/professional-ui-ux-design-services",
        },
        {
          title: "Android App Development",
          image: "https://cdn.wunderkint.com/images/category/tech/Android_App_Development.webp",
          href: "/professional-android-app-development-services",
        },
        {
          title: "Game Development",
          image: "https://cdn.wunderkint.com/images/category/tech/Game_Development.webp",
          href: "/professional-game-development-services",
        },
        {
          title: "Data Processing",
          image: "https://cdn.wunderkint.com/images/category/tech/Data_Processing.webp",
          href: "/professional-data-processing-services",
        },
        {
          title: "Dropshipping Websites",
          image: "https://cdn.wunderkint.com/images/category/tech/Dropshipping_Websites.webp",
          href: "/professional-dropshipping-website-development-services",
        },
        {
          title: "Landing Page Design",
          image: "https://cdn.wunderkint.com/images/category/tech/Landing_Page_Design.webp",
          href: "/professional-landing-page-design-services",
        },
        {
          title: "Marketing Automation",
          image: "https://cdn.wunderkint.com/images/category/tech/Marketing_Automation.webp",
          href: "/professional-marketing-automation-services",
        },
        {
          title: "Business Websites",
          image: "https://cdn.wunderkint.com/images/category/tech/Business_Websites.webp",
          href: "/professional-business-website-development-services",
        },
        {
          title: "Tech Consulting",
          image: "https://cdn.wunderkint.com/images/category/tech/Tech_Consulting.webp",
          href: "/professional-tech-consulting-services",
        },
        {
          title: "iOS App Development",
          image: "https://cdn.wunderkint.com/images/category/tech/iOS_App_Development.webp",
          href: "/professional-ios-app-development-services",
        },
        {
          title: "Custom Websites",
          image: "https://cdn.wunderkint.com/images/category/tech/Custom_Websites.webp",
          href: "/professional-custom-website-development-services",
        },
        {
          title: "Email Automations",
          image: "https://cdn.wunderkint.com/images/category/tech/Email_Automations.webp",
          href: "/professional-email-automation-services",
        },
        {
          title: "E-Commerce Development",
          image: "https://cdn.wunderkint.com/images/category/tech/E-Commerce_Development.webp",
          href: "/professional-ecommerce-development-services",
        },
        {
          title: "Chatbot Development",
          image: "https://cdn.wunderkint.com/images/category/tech/Chatbot_Development.webp",
          href: "/professional-chatbot-development-services",
        },
        {
          title: "Cross-platform Development",
          image: "https://cdn.wunderkint.com/images/category/tech/Cross-platform_Development.webp",
          href: "/professional-cross-platform-development-services",
        },
      ],
    },

    otherServicesGrid: {
      ctaText: "Explore All Services",
      ctaHref: "/services",
      cards: [
        {
          title: "Branding",
          image: "https://cdn.wunderkint.com/images/category/Branding.webp",
          bgColor: "#F15151",
          href: "/best-branding-services",
          textColor: "#fff",
        },
        {
          title: "Marketing",
          image: "https://cdn.wunderkint.com/images/category/Marketing.webp",
          bgColor: "#C3DFF4",
          href: "/best-marketing-services",
        },
        {
          title: "Content",
          image: "https://cdn.wunderkint.com/images/category/Content.webp",
          bgColor: "#FCBDA3",
          href: "/best-content-services",
        },
        {
          title: "AI",
          image: "https://cdn.wunderkint.com/images/category/AI.webp",
          bgColor: "#BAB9DC",
          href: "/best-ai-services",
        },
      ],
    },
  },

  marketing: {
    hero: {
      title: "Marketing That Moves Audiences",
      subtitle:
        "Wunderkint is recognized as one of the best marketing agencies, delivering marketing services that do more than sell. We design campaigns that inspire action, create conversations, and position your brand as unforgettable. From strategy to execution, our approach blends creativity and precision, ensuring your marketing is bold, measurable, and future-ready.",
      showSearch: true,
      showBrandSlider: true,
    },

    infoSplit: [
      {
        title: "Why Marketing Matters?",
        body: `Marketing is not just promotion. It is the voice of your brand, the spark that drives demand, and the engine that fuels growth. Effective marketing services build trust, expand reach, and inspire loyalty. Partnering with a top marketing agency ensures your message stands out in a competitive world and reaches audiences with purpose.`,
        cta: {
          text: "Contact Us",
          href: "/contact",
        },
      },
      {
        title: "The Wunderkint Edge in Marketing",
        body: `As a top marketing agency trusted for delivering results, Wunderkint pushes marketing beyond standard campaigns. We do not just promote. We create movements that spark recognition, drive growth, and transform brands into leaders. Whether you are a startup seeking visibility or an enterprise scaling globally, Wunderkint ensures your marketing delivers measurable impact. That is why clients consider us among the best marketing agencies for ambitious and visionary brands.`,
        cta: {
          text: "Contact Us",
          href: "/contact",
        },
      },
    ],

    serviceGrid: {
      textColor: "#282828",
      ctaText: "Contact Us",
      ctaHref: "/contact",
      cardBg: "#C3DFF4",
      cards: [
        {
          title: "Affiliate Marketing",
          image: "https://cdn.wunderkint.com/images/category/marketing/Affiliate_Marketing.webp",
          href: "/professional-affiliate-marketing-services",
        },
        {
          title: "Social Media Marketing",
          image: "https://cdn.wunderkint.com/images/category/marketing/Social_Media_Marketing.webp",
          href: "/professional-social-media-marketing-services",
        },
        {
          title: "Project Management",
          image: "https://cdn.wunderkint.com/images/category/marketing/Project_Management.webp",
          href: "/professional-project-management-services",
        },
        {
          title: "Email Marketing",
          image: "https://cdn.wunderkint.com/images/category/marketing/Email_Marketing.webp",
          href: "/professional-email-marketing-services",
        },
        {
          title: "Marketing Strategy",
          image: "https://cdn.wunderkint.com/images/category/marketing/Marketing_Strategy.webp",
          href: "/professional-marketing-strategy-services",
        },
        {
          title: "Influencer Marketing",
          image: "https://cdn.wunderkint.com/images/category/marketing/Influencer_Marketing.webp",
          href: "/professional-influencer-marketing-services",
        },
        {
          title: "Lead Generation",
          image: "https://cdn.wunderkint.com/images/category/marketing/Lead_Generation.webp",
          href: "/professional-lead-generation-services",
        },
        {
          title: "Product Management",
          image: "https://cdn.wunderkint.com/images/category/marketing/Product_Management.webp",
          href: "/professional-product-management-services",
        },
        {
          title: "Press Releases",
          image: "https://cdn.wunderkint.com/images/category/marketing/Press_Releases.webp",
          href: "/professional-press-release-services",
        },
        {
          title: "Display Advertising",
          image: "https://cdn.wunderkint.com/images/category/marketing/Display_Advertising.webp",
          href: "/professional-display-advertising-services",
        },
        {
          title: "Facebook Ads Campaigns",
          image: "https://cdn.wunderkint.com/images/category/marketing/Facebook_Ads_Campaigns.webp",
          href: "/professional-facebook-ads-campaign-services",
        },
        {
          title: "Instagram Marketing",
          image: "https://cdn.wunderkint.com/images/category/marketing/Instagram_Marketing.webp",
          href: "/professional-instagram-marketing-services",
        },
        {
          title: "Video Marketing",
          image: "https://cdn.wunderkint.com/images/category/marketing/Video_Marketing.webp",
          href: "/professional-video-marketing-services",
        },
        {
          title: "Paid Social Media",
          image: "https://cdn.wunderkint.com/images/category/marketing/Paid_Social_Media.webp",
          href: "/professional-paid-social-media-services",
        },
        {
          title: "Public Relations",
          image: "https://cdn.wunderkint.com/images/category/marketing/Public_Relations.webp",
          href: "/professional-public-relations-services",
        },
        {
          title: "Intellectual Property Management",
          image:
            "https://cdn.wunderkint.com/images/category/marketing/Intellectual_Property_Management.webp",
          href: "/professional-intellectual-property-management-services",
        },
        {
          title: "Shopify Marketing",
          image: "https://cdn.wunderkint.com/images/category/marketing/Shopify_Marketing.webp",
          href: "/professional-shopify-marketing-services",
        },
        {
          title: "Search Engine Marketing",
          image: "https://cdn.wunderkint.com/images/category/marketing/Search_Engine_Marketing.webp",
          href: "/professional-search-engine-marketing-services",
        },
        {
          title: "Search Engine Optimization",
          image: "https://cdn.wunderkint.com/images/category/marketing/Search_Engine_Optimization.webp",
          href: "/professional-search-engine-optimization-services",
        },
        {
          title: "Event Marketing",
          image: "https://cdn.wunderkint.com/images/category/marketing/Event_Marketing.webp",
          href: "/professional-event-marketing-services",
        },
        {
          title: "E-Commerce Marketing",
          image: "https://cdn.wunderkint.com/images/category/marketing/E-Commerce_Marketing.webp",
          href: "/professional-ecommerce-marketing-services",
        },
        {
          title: "Media Planning & Buying",
          image: "https://cdn.wunderkint.com/images/category/marketing/Media_Planning_and_Buying.webp",
          href: "/professional-media-planning-buying-services",
        },
        {
          title: "Programmatic Advertising",
          image: "https://cdn.wunderkint.com/images/category/marketing/Programmatic_Advertising.webp",
          href: "/professional-programmatic-advertising-services",
        },
      ],
    },

    otherServicesGrid: {
      ctaText: "Explore All Services",
      ctaHref: "/services",
      cards: [
        {
          title: "Branding",
          image: "https://cdn.wunderkint.com/images/category/Branding.webp",
          bgColor: "#F15151",
          href: "/best-branding-services",
          textColor: "#fff",
        },
        {
          title: "Tech Solutions",
          image: "https://cdn.wunderkint.com/images/category/Tech.webp",
          bgColor: "#95D8C3",
          href: "/best-tech-services",
        },
        {
          title: "Content",
          image: "https://cdn.wunderkint.com/images/category/Content.webp",
          bgColor: "#FCBDA3",
          href: "/best-content-services",
        },
        {
          title: "AI",
          image: "https://cdn.wunderkint.com/images/category/AI.webp",
          bgColor: "#BAB9DC",
          href: "/best-ai-services",
        },
      ],
    },
  },

  ai: {
    hero: {
      title: "AI That Redefines Creativity",
      subtitle:
        "Wunderkint is recognized as one of the best AI agencies, delivering AI services that unlock new dimensions of imagination and growth. From AI-generated content to immersive experiences, we combine creativity with intelligence to build future-ready solutions. Every project is designed with innovation and precision to help your brand inspire, connect, and evolve.",
      showSearch: true,
      showBrandSlider: true,
    },

    infoSplit: [
      {
        title: "Why Artificial Intelligence Matters?",
        body: `Artificial Intelligence is not just technology. It is the force that transforms how brands create, communicate, and grow. Effective AI services give businesses smarter insights, faster production, and limitless creative possibilities. Partnering with a top Artificial Intelligence agency ensures your brand stays ahead in a world shaped by intelligence and imagination.`,
        cta: {
          text: "Contact Us",
          href: "/contact",
        },
      },
      {
        title: "The Wunderkint Edge in AI",
        body: `As a top AI agency, Wunderkint transforms intelligence into imagination. We do not just apply AI tools. We craft AI-driven experiences that inspire trust, spark recognition, and expand creative horizons. Whether you are a startup exploring automation or an enterprise pioneering Artificial Intelligence innovation, Wunderkint ensures your brand leads with intelligence and creativity. That is why clients consider us among the best AI agencies for visionary brands.`,
        cta: {
          text: "Contact Us",
          href: "/contact",
        },
      },
    ],

    serviceGrid: {
      textColor: "#282828",
      ctaText: "Contact Us",
      ctaHref: "/contact",
      cardBg: "#BAB9DC",
      cards: [
        {
          title: "AI Chatbot",
          image: "https://cdn.wunderkint.com/images/category/ai/AI_Chatbot.webp",
          href: "/professional-ai-chatbot-services",
        },
        {
          title: "AI Video Generation",
          image: "https://cdn.wunderkint.com/images/category/ai/AI_Video_Generation.webp",
          href: "/professional-ai-video-generation-services",
        },
        {
          title: "AI Movies",
          image: "https://cdn.wunderkint.com/images/category/ai/AI_Movies.webp",
          href: "/professional-ai-movie-services",
        },
        {
          title: "AI for Businesses",
          image: "https://cdn.wunderkint.com/images/category/ai/AI_for_Businesses.webp",
          href: "/professional-ai-for-business-services",
        },
        {
          title: "AI GIFs",
          image: "https://cdn.wunderkint.com/images/category/ai/AI_GIFs.webp",
          href: "/professional-ai-gif-services",
        },
        {
          title: "AI Audio Generation",
          image: "https://cdn.wunderkint.com/images/category/ai/AI_Audio_Generation.webp",
          href: "/professional-ai-audio-generation-services",
        },
        {
          title: "AI Content",
          image: "https://cdn.wunderkint.com/images/category/ai/AI_Content.webp",
          href: "/professional-ai-content-services",
        },
        {
          title: "AI Podcasts",
          image: "https://cdn.wunderkint.com/images/category/ai/AI_Podcasts.webp",
          href: "/professional-ai-podcast-services",
        },
        {
          title: "AI Consulting",
          image: "https://cdn.wunderkint.com/images/category/ai/AI_Consulting.webp",
          href: "/professional-ai-consulting-services",
        },
        {
          title: "AI Integrations",
          image: "https://cdn.wunderkint.com/images/category/ai/AI_Integrations.webp",
          href: "/professional-ai-integration-services",
        },
        {
          title: "AI Artists",
          image: "https://cdn.wunderkint.com/images/category/ai/AI_Artists.webp",
          href: "/professional-ai-artist-services",
        },
        {
          title: "AI Video Avatars",
          image: "https://cdn.wunderkint.com/images/category/ai/AI_Video_Avatars.webp",
          href: "/professional-ai-video-avatar-services",
        },
        {
          title: "AI Music Videos",
          image: "https://cdn.wunderkint.com/images/category/ai/AI_Music_Videos.webp",
          href: "/professional-ai-music-video-services",
        },
        {
          title: "AI Video Art",
          image: "https://cdn.wunderkint.com/images/category/ai/AI_Video_Art.webp",
          href: "/professional-ai-video-art-services",
        },
        {
          title: "AI Product Photography",
          image: "https://cdn.wunderkint.com/images/category/ai/AI_Product_Photography.webp",
          href: "/professional-ai-product-photography-services",
        },
        {
          title: "AI-based CGI Ads",
          image: "https://cdn.wunderkint.com/images/category/ai/AI-based_CGI_Ads.webp",
          href: "/professional-ai-cgi-ad-services",
        },
        {
          title: "AI Product Lookbooks",
          image: "https://cdn.wunderkint.com/images/category/ai/AI_Product_Lookbooks.webp",
          href: "/professional-ai-product-lookbook-services",
        },
        {
          title: "AI-based Key Visuals",
          image: "https://cdn.wunderkint.com/images/category/ai/AI-based_Key_Visuals.webp",
          href: "/professional-ai-key-visual-services",
        },
        {
          title: "AI Clone Videos",
          image: "https://cdn.wunderkint.com/images/category/ai/AI_Clone_Videos.webp",
          href: "/professional-ai-clone-video-services",
        },
      ],
    },

    otherServicesGrid: {
      ctaText: "Explore All Services",
      ctaHref: "/services",
      cards: [
        {
          title: "Branding",
          image: "https://cdn.wunderkint.com/images/category/Branding.webp",
          bgColor: "#F15151",
          href: "/best-branding-services",
          textColor: "#fff",
        },
        {
          title: "Tech Solutions",
          image: "https://cdn.wunderkint.com/images/category/Tech.webp",
          bgColor: "#95D8C3",
          href: "/best-tech-services",
        },
        {
          title: "Marketing",
          image: "https://cdn.wunderkint.com/images/category/Marketing.webp",
          bgColor: "#C3DFF4",
          href: "/best-marketing-services",
        },
        {
          title: "Content",
          image: "https://cdn.wunderkint.com/images/category/Content.webp",
          bgColor: "#FCBDA3",
          href: "/best-content-services",
        },
      ],
    },
  },
};
