import type { HeadingData } from "@/components/UI/Heading/Heading";

// ============================================================================
// TYPE DEFINITIONS FOR ABOUT PAGE
// ============================================================================

type HeroSection = {
  title: string;
  highlight?: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundColor?: string;
  backgroundImage?: string;
  problemHeading?: HeadingData;
  problemCards?: {
    title: string;
    description: string;
  }[];
  problemCardColor?: string;
  problemFooter?: string;
};

type InfoSplitSection = {
  title: string;
  body: string;
  cta: {
    text: string;
    href: string;
  };
};

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  image?: string;
};

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
};

type ValueCard = {
  id: string;
  title: string;
  description: string;
  icon?: string;
};

type AchievementStat = {
  value: string;
  label: string;
  description?: string;
};

type StackedBlock = {
  title: string;
  className: string;
  heading: string;
  description: string;
  buttonText: string;
  image: string;
};

type TableRow = {
  left: string;
  right: string;
};

type TableViewSection = {
  heading?: HeadingData;
  ctaText: string;
  ctaHref: string;
  leftHeader?: string;
  rightHeader?: string;
  leftIcon?: string;
  rightIcon?: string;
  useImageIcons?: boolean;
  items: TableRow[];
};

type Benefit = {
  title: string;
  description: string;
};

type BenefitsSection = {
  heading: HeadingData;
  ctaText: string;
  ctaHref: string;
  items: Benefit[];
};

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type WhyUsCard = {
  id: string;
  title: string;
  stripColor?: string;
};

// ============================================================================
// COMPLETE ABOUT PAGE DATA STRUCTURE
// ============================================================================

export type CompleteAboutData = {
  // Hero Section
  hero: {
    title: string;
    subtitle?: string;
    showSearch?: boolean;
    showBrandSlider?: boolean;
    videoSrc?: string;
    poster?: string;
  };
  heroSection?: HeroSection;

  // Info Split Sections
  infoSplit?: InfoSplitSection[];

  // Definition Card Section
  wunderkintDefinition?: {
    image: string;
    imageAlt?: string;
    backgroundColor?: string;
    definition: {
      term: string;
      pronunciation?: string;
      definitions: string[];
    };
  };

  // Stacked Blocks / Process
  process?: {
    heading?: HeadingData;
    blocks: StackedBlock[];
  };

  //About Tagline
  aboutTagline?: {
    text: string;
  };

  // Benefits Section
  benefits?: BenefitsSection;

  // Why Choose Us
  whyUs?: {
    heading?: HeadingData;
    image: string;
    cards: WhyUsCard[];
  };

  // Founders Card Section
  founders: {
    name: string;
    title: string;
    description: string;
    image: string;
    backgroundColor?: string;
    imagePosition?: "left" | "right";
  }[];
};

// ============================================================================
// ABOUT PAGE DATA
// ============================================================================

export const ABOUT_DATA: CompleteAboutData = {
  // Hero & Page Content
  hero: {
    title: "",
    showSearch: false,
    showBrandSlider: false,
  },

  // Info Split Sections
  infoSplit: [
    {
      title: "About Us",
      body: `As the name “Wunderkint” suggests, a term that means prodigy, we are a collective of creative minds driven by innovation, imagination, and purpose.\n\n\nOur team is composed of thinkers, designers, storytellers, and strategists who live to redefine how brands express themselves. At Wunderkint, we believe creativity isn’t just a skill; it’s our DNA. We don’t follow trends; we set them. We transform abstract ideas into immersive experiences that make your brand not just visible but unforgettable.\n\n\nEvery brand has a story, and we bring it to life with a touch of magic and a splash of brilliance. We merge strategy with soul, design with data, and creativity with clarity to build narratives that resonate and inspire. With us, your brand doesn’t just grow; it evolves into an icon.`,
      cta: {
        text: "Connect with us",
        href: "#",
      },
    },
    {
      title: "The Wunderkint Way",
      body: `Though Wunderkint Creative may be a new name in the creative universe, our collective expertise spans across decades of branding, digital marketing, design, and storytelling. We are not just a creative agency; we are a force of innovation. We thrive at the crossroads of artistry and analytics, crafting meaningful experiences that spark emotional connections and measurable impact.\n\n\nOur philosophy is simple: to create wonder in everything we do. From bold brand identities and digital ecosystems to unforgettable campaigns, we turn the ordinary into extraordinary through vision, precision, and passion.`,
      cta: {
        text: "Connect with us",
        href: "#",
      },
    },

    {
      title: "Our Philosophy",
      body: `We see creativity as a form of evolution. Every idea we bring to life is a step toward progress for our clients, our craft, and the culture around us. We don’t just deliver campaigns; we create experiences that ignite curiosity and provoke change.\n\n\nAt Wunderkint, collaboration is at our core. Every project is an orchestration of talent: strategists, designers, writers, and developers working in harmony toward one purpose—to make your brand unforgettable.\n\n\nWe push boundaries not for the sake of rebellion but to create meaning, to innovate with intention, and to empower brands to tell their story with confidence and creativity.`,
      cta: {
        text: "Connect with us",
        href: "#",
      },
    },

    {
      title: "Our Vision",
      body: `We envision a world where creativity fuels progress, where brands become experiences, and where imagination builds bridges between people and purpose. Wunderkint exists to ignite wonder, empower creativity, and redefine what’s possible in the world of design and digital storytelling.\n\n\nEvery project we undertake is more than a brief; it is an opportunity to leave an enduring mark on the creative landscape. We don’t just build brands; we build legacies that inspire, transform, and transcend.`,
      cta: {
        text: "Connect with us",
        href: "#",
      },
    },
  ],

  wunderkintDefinition: {
    image: "https://cdn.wunderkint.com/images/about/about.webp",
    imageAlt: "Creative professional with sunglasses",
    backgroundColor: "#F15151",
    definition: {
      term: "Wunderkint",
      pronunciation: "/’A creative agency/",
      definitions: [
        "(noun): The avant-garde of digital marketing, shaping brands into legends with a touch of magic and a splash of brilliance.",
        '(proverb): "To go the Wunderkint way" means to take the road less travelled where creativity defies convention and originality reigns supreme.',
        "(verb): To transform the ordinary into the extraordinary and make brands shine brighter in the digital cosmos.",
        "(adjective): Embodying pop-art charisma, bold imagination, and an unyielding drive for innovation.",
        '(idiom): "As Wunderkint as it gets" represents the ultimate benchmark of creative excellence, vision, and execution.',
      ],
    },
  },

  // Process/Methodology
  process: {
    heading: { first: "The ABCs of Wunderkindom" },
    blocks: [
      {
        title: "Discover",
        className: "redBlock",
        heading: "Deep Discovery",
        description:
          "We immerse ourselves in your brand, market, and audience to uncover unique opportunities.",
        buttonText: "Learn More",
        image: "https://placehold.co/600x400?text=Discover",
      },
      {
        title: "Strategy",
        className: "yellowBlock",
        heading: "Strategic Planning",
        description:
          "Data-driven insights shape creative strategies that align with your business goals.",
        buttonText: "Our Approach",
        image: "https://placehold.co/600x400?text=Strategy",
      },
      {
        title: "Create",
        className: "tealBlock",
        heading: "Creative Excellence",
        description:
          "Our team brings strategies to life with compelling designs and engaging content.",
        buttonText: "See Our Work",
        image: "https://placehold.co/600x400?text=Create",
      },
    ],
  },

  aboutTagline: {
    text: "Together, we Aspire, Build, and Create. This is the essence of Wunderkindom.",
  },

  // Founders Card Section
  founders: [
    {
      name: "Krisneil Peres",
      title: "Our Abbot",
      description:
        "Krisneil leads Wunderkint with foresight, innovation, and an unwavering commitment to creative excellence. A visionary strategist, he merges artistry with business leadership—bold, thoughtful, and relentlessly forward-thinking.",
      image: "https://cdn.wunderkint.com/images/about/krisneil_peres.webp",
      backgroundColor: "#F15151",
      imagePosition: "left",
    },
    {
      name: "Reena Rose",
      title: "Director",
      description:
        "Reena is the heart of Wunderkint’s creative galaxy. With passion, precision, and a flair for the extraordinary, she transforms visions into reality—ensuring every project reflects authenticity and excellence.",
      image: "https://cdn.wunderkint.com/images/about/reena_rose.webp",
      backgroundColor: "#F15151",
      imagePosition: "right",
    },
  ],
};
