import type { HeadingData } from "@/components/UI/Heading/Heading";
import type { CategorySlug } from "./categories"; // assuming you already have this
// import { color } from "framer-motion";

// Same structure as `headings.ts` for home
export const categoryHeadings: Record<
  CategorySlug,
  {
    heroSection?: HeadingData;
    statsSection?: HeadingData;
    brandsSliderSection?: HeadingData;
    serviceGrid?: HeadingData;
    otherserviceGrid?: HeadingData;
    testimonialSection?: HeadingData;
    pricingSection?: HeadingData;
    faqSection?: HeadingData;
    whyUsSection?: HeadingData;
  }
> = {
  branding: {
    serviceGrid: {
      first: "Our Branding Services",
      support:
        "From identity design to experiential branding, Wunderkint offers a complete suite of branding services under one roof. Each service is designed to elevate your brand, inspire recognition, and create measurable impact. Explore our capabilities below and discover how we bring brands to life.",
      colorClassFirst: "black",
    },
    otherserviceGrid: {
      first: "Our Other Services",
      colorClassFirst: "black",
    },
    faqSection: {
      second: "All About Branding With Wunderkint, In Simple Answers",
    },
    whyUsSection: {
      second: "Benefits of Choosing Wunderkint",
    },
  },

  content: {
    serviceGrid: {
      first: "Our Content Services",
      support:
        "From strategy and storytelling to multimedia production, Wunderkint offers a complete suite of content services under one roof. Each service is designed to amplify your brand voice, engage your audience, and deliver results that matter. Explore our capabilities and see how we transform ideas into stories that resonate.",
      colorClassFirst: "black",
    },
    otherserviceGrid: {
      first: "Our Other Services",
      colorClassFirst: "black",
    },
    faqSection: {
      second: "All About Content With Wunderkint, In Simple Answers",
    },
    whyUsSection: {
      second: "Benefits of Choosing Wunderkint",
    },
  },

  tech: {
    serviceGrid: {
      first: "Our Tech Services",
      support:
        "From web design to product development, Wunderkint offers a complete suite of tech services under one roof. Each service is designed to empower your brand, enhance user experiences, and unlock new possibilities. Explore our capabilities below and see how we transform ideas into digital realities.",
      colorClassFirst: "black",
    },
    otherserviceGrid: {
      first: "Our Other Services",
      colorClassFirst: "black",
    },
    faqSection: {
      second: "All About Tech With Wunderkint, In Simple Answers",
    },
    whyUsSection: {
      second: "Benefits of Choosing Wunderkint",
    },
  },

  marketing: {
    serviceGrid: {
      first: "Our Marketing Services",
      support:
        "From performance-driven campaigns to visionary strategies, Wunderkint offers a complete suite of marketing services under one roof. Each service is crafted to elevate your brand presence, engage the right audience, and deliver measurable impact. Explore our capabilities below and discover how we make marketing a force for growth.",
      colorClassFirst: "black",
    },
    otherserviceGrid: {
      first: "Our Other Services",
      colorClassFirst: "black",
    },
    faqSection: {
      second: "All About Marketing With Wunderkint, In Simple Answers",
    },
    whyUsSection: {
      second: "Benefits of Choosing Wunderkint",
    },
  },

  ai: {
    serviceGrid: {
      first: "Our AI Services",
      support:
        "From automation to artistic creation, Wunderkint offers a complete suite of AI services under one roof. Each service is designed to empower your brand, accelerate growth, and explore creative boundaries. Explore our capabilities below and see how AI becomes your brand’s competitive edge.",
      colorClassFirst: "black",
    },
    otherserviceGrid: {
      first: "Our Other Services",
      colorClassFirst: "black",
    },
    faqSection: {
      second: "All About AI With Wunderkint, In Simple Answers",
    },
    whyUsSection: {
      second: "Benefits of Choosing Wunderkint",
    },
  },
};
