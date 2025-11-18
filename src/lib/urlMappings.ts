import { Metadata } from "next";

export interface URLMapping {
  seoUrl: string;
  internalPath: string;
  type: "category" | "service";
  slug: string;
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  priority?: number;
  changefreq?: "monthly" | "weekly" | "daily";
  category?: string;
}

export const URL_MAPPINGS: URLMapping[] = [
  // ============================================
  // CATEGORY MAPPINGS
  // ============================================
  {
    seoUrl: "/best-branding-services",
    internalPath: "/category/branding",
    title: "Best Branding Services | Logo, Design & Identity by Wunderkint",
    description:
      "Explore professional branding services by Wunderkint – from logo and brochure design to brand identity and rebranding solutions.",
    keywords: ["branding services", "logo design", "brand identity"],
    type: "category",
    slug: "branding",
    category: "branding",
    changefreq: "monthly",
    priority: 0.9,
    ogImage: "/images/og/branding.jpg",
  },
  {
    seoUrl: "/creative-content-services",
    internalPath: "/category/content",
    title: "Creative Content Services | Video, Writing & Design by Wunderkint",
    description:
      "Discover Wunderkint's creative content services including video editing, copywriting, motion graphics, and storytelling for all platforms.",
    keywords: ["content services", "video editing", "creative writing"],
    type: "category",
    slug: "content",
    category: "content",
    changefreq: "monthly",
    priority: 0.9,
    ogImage: "/images/og/content.jpg",
  },
  {
    seoUrl: "/tech-development-services",
    internalPath: "/category/tech",
    title:
      "Technology Development Services | Websites, Apps & Software | Wunderkint",
    description:
      "Wunderkint builds next-generation digital products – from web and app development to software and tech consulting solutions.",
    keywords: ["web development", "app development", "software development"],
    type: "category",
    slug: "tech",
    category: "tech",
    changefreq: "monthly",
    priority: 0.9,
    ogImage: "/images/og/tech.jpg",
  },
  {
    seoUrl: "/digital-marketing-services",
    internalPath: "/category/marketing",
    title:
      "Digital Marketing Services | SEO, SMM & Lead Generation | Wunderkint",
    description:
      "Grow your business with Wunderkint's full-spectrum marketing services including SEO, social media marketing, and campaign strategy.",
    keywords: ["digital marketing", "seo", "social media marketing"],
    type: "category",
    slug: "marketing",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.9,
    ogImage: "/images/og/marketing.jpg",
  },
  {
    seoUrl: "/ai-services",
    internalPath: "/category/ai",
    title:
      "Artificial Intelligence Services | AI Automation & Content | Wunderkint",
    description:
      "Revolutionize your business with Wunderkint's AI services – from chatbots and video generation to AI art, consulting, and automation.",
    keywords: ["ai services", "ai automation", "ai content generation"],
    type: "category",
    slug: "ai",
    category: "ai",
    changefreq: "monthly",
    priority: 0.9,
    ogImage: "/images/og/ai.jpg",
  },

  // ============================================
  // BRANDING SERVICES
  // ============================================
  {
    seoUrl: "/beautiful-logo-designs",
    internalPath: "/service/logo-design",
    title: "Beautiful Logo Design Services | Professional Brand Identity",
    description:
      "Get unique, memorable logo design services that define your brand identity. Work with Wunderkint to craft a logo that stands out and inspires trust.",
    keywords: ["logo design", "brand identity", "custom logos"],
    type: "service",
    slug: "logo-design",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/logo-design.jpg",
  },
  {
    seoUrl: "/creative-graphic-design",
    internalPath: "/service/graphic-design",
    title:
      "Creative Graphic Design Services | Eye-Catching Visuals for Your Brand",
    description:
      "Elevate your brand with stunning graphic design services. From marketing materials to digital creatives, Wunderkint delivers visuals that captivate and communicate your message effectively.",
    keywords: [
      "graphic design",
      "visual design",
      "brand graphics",
      "marketing creatives",
    ],
    type: "service",
    slug: "graphic-design",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/graphic-design.jpg",
  },
  {
    seoUrl: "/custom-brochure-design",
    internalPath: "/service/brochure-design",
    title: "Custom Brochure Design Services | Professional Marketing Materials",
    description:
      "Engage audiences with stunning brochure design that communicates clearly and converts. Partner with Wunderkint for creative, print-ready brochures.",
    keywords: ["brochure design", "print marketing", "creative brochures"],
    type: "service",
    slug: "brochure-design",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/brochure-design.jpg",
  },
  {
    seoUrl: "/creative-poster-design",
    internalPath: "/service/poster-design",
    title: "Creative Poster Design Services | Eye-Catching Marketing Posters",
    description:
      "Make bold statements with eye-catching poster design that grabs attention. Wunderkint delivers impactful designs for campaigns, events, and promotions.",
    keywords: ["poster design", "creative posters", "marketing materials"],
    type: "service",
    slug: "poster-design",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/poster-design.jpg",
  },
  {
    seoUrl: "/professional-event-management",
    internalPath: "/service/event-management",
    title: "Professional Event Management Services | Complete Event Planning",
    description:
      "From planning to execution, Wunderkint delivers seamless event management solutions that turn concepts into unforgettable experiences.",
    keywords: ["event management", "corporate events", "event planning"],
    type: "service",
    slug: "event-management",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/event-management.jpg",
  },
  {
    seoUrl: "/professional-flyer-design",
    internalPath: "/service/flyer-design",
    title: "Professional Flyer Design Services | High-Impact Marketing Flyers",
    description:
      "Boost your marketing with creative, high-impact flyer designs that engage and convert. Wunderkint designs flyers that make people take action.",
    keywords: ["flyer design", "print design", "marketing flyers"],
    type: "service",
    slug: "flyer-design",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/flyer-design.jpg",
  },
  {
    seoUrl: "/custom-book-cover-design",
    internalPath: "/service/book-covers",
    title: "Custom Book Cover Design Services | Professional Publishing Design",
    description:
      "Capture readers' attention with creative, market-ready book cover designs. Wunderkint crafts covers that tell your story and boost sales.",
    keywords: ["book cover design", "publishing", "creative design"],
    type: "service",
    slug: "book-covers",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/book-covers.jpg",
  },
  {
    seoUrl: "/professional-catalog-design",
    internalPath: "/service/catalog-design",
    title: "Professional Catalog Design Services | Product Showcase Solutions",
    description:
      "Design engaging, product-focused catalogs that sell. Wunderkint combines stunning visuals with clean layouts for catalog perfection.",
    keywords: ["catalog design", "print design", "product catalog"],
    type: "service",
    slug: "catalog-design",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/catalog-design.jpg",
  },
  {
    seoUrl: "/creative-menu-design",
    internalPath: "/service/menu-design",
    title: "Creative Menu Design Services | Restaurant Branding Solutions",
    description:
      "Delight diners with beautifully designed menus that reflect your brand and enhance dining experiences. Designed by Wunderkint.",
    keywords: ["menu design", "restaurant branding", "food design"],
    type: "service",
    slug: "menu-design",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/menu-design.jpg",
  },
  {
    seoUrl: "/custom-pattern-design",
    internalPath: "/service/pattern-design",
    title: "Custom Pattern Design Services | Unique Visual Motifs",
    description:
      "Create distinctive visual identities through seamless pattern design. Wunderkint crafts timeless motifs for branding, fashion, and packaging.",
    keywords: ["pattern design", "surface design", "branding patterns"],
    type: "service",
    slug: "pattern-design",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/pattern-design.jpg",
  },
  {
    seoUrl: "/professional-book-design",
    internalPath: "/service/book-design",
    title: "Professional Book Design Services | Complete Layout Solutions",
    description:
      "From layout to typography, Wunderkint designs beautiful, reader-friendly books that combine creativity and clarity.",
    keywords: ["book design", "publishing design", "layout design"],
    type: "service",
    slug: "book-design",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/book-design.jpg",
  },
  {
    seoUrl: "/professional-3d-design",
    internalPath: "/service/3d-design",
    title: "Professional 3D Design Services | Immersive Visual Solutions",
    description:
      "Bring ideas to life with immersive 3D design services by Wunderkint – turning imagination into realistic visual experiences.",
    keywords: ["3D design", "3D modeling", "visualization"],
    type: "service",
    slug: "3d-design",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/3d-design.jpg",
  },
  {
    seoUrl: "/creative-infographic-design",
    internalPath: "/service/infographic-design",
    title: "Creative Infographic Design Services | Data Visualization",
    description:
      "Simplify complex data with clear, visually engaging infographics by Wunderkint. Perfect for marketing, reports, and presentations.",
    keywords: ["infographic design", "data visualization", "content design"],
    type: "service",
    slug: "infographic-design",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/infographic-design.jpg",
  },
  {
    seoUrl: "/professional-landscape-design",
    internalPath: "/service/landscape-design",
    title: "Professional Landscape Design Services | Outdoor Space Planning",
    description:
      "Design outdoor spaces that inspire. Wunderkint delivers landscape design that blends creativity, sustainability, and beauty.",
    keywords: ["landscape design", "outdoor design", "environment design"],
    type: "service",
    slug: "landscape-design",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/landscape-design.jpg",
  },
  {
    seoUrl: "/professional-logo-animation",
    internalPath: "/service/logo-animation",
    title: "Professional Logo Animation Services | Dynamic Brand Identity",
    description:
      "Add motion to your brand with dynamic logo animation. Wunderkint creates eye-catching animated identities for digital impact.",
    keywords: ["logo animation", "motion design", "animated logos"],
    type: "service",
    slug: "logo-animation",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/logo-animation.jpg",
  },
  {
    seoUrl: "/professional-print-design",
    internalPath: "/service/print-design",
    title: "Professional Print Design Services | Marketing Materials",
    description:
      "Create stunning print materials that make an impact. Wunderkint delivers professional print design for all your marketing needs.",
    keywords: ["print design", "marketing materials", "graphic design"],
    type: "service",
    slug: "print-design",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/print-design.jpg",
  },
  {
    seoUrl: "/professional-app-design",
    internalPath: "/service/app-design",
    title: "Professional App Design Services | Mobile UI/UX Solutions",
    description:
      "Design beautiful, intuitive mobile applications. Wunderkint creates app designs that users love and businesses need.",
    keywords: ["app design", "mobile design", "ui ux design"],
    type: "service",
    slug: "app-design",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/app-design.jpg",
  },
  {
    seoUrl: "/expert-rebranding-services",
    internalPath: "/service/rebranding",
    title: "Expert Rebranding Services | Brand Refresh & Transformation",
    description:
      "Transform your brand identity with expert rebranding services. Wunderkint helps businesses evolve while maintaining their core values.",
    keywords: ["rebranding", "brand refresh", "brand transformation"],
    type: "service",
    slug: "rebranding",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/rebranding.jpg",
  },
  {
    seoUrl: "/social-media-design-services",
    internalPath: "/service/social-media-design",
    title: "Social Media Design Services | Engaging Visual Content",
    description:
      "Create scroll-stopping social media designs. Wunderkint delivers visuals that engage audiences and drive brand awareness.",
    keywords: ["social media design", "social graphics", "content design"],
    type: "service",
    slug: "social-media-design",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/social-media-design.jpg",
  },
  {
    seoUrl: "/professional-visual-design",
    internalPath: "/service/visual-design",
    title: "Professional Visual Design Services | Complete Design Solutions",
    description:
      "Elevate your brand with professional visual design. Wunderkint creates cohesive, impactful visuals across all touchpoints.",
    keywords: ["visual design", "graphic design", "brand design"],
    type: "service",
    slug: "visual-design",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/visual-design.jpg",
  },
  {
    seoUrl: "/brand-style-guide-creation",
    internalPath: "/service/brand-style-guides",
    title: "Brand Style Guide Creation Services | Brand Standards",
    description:
      "Maintain brand consistency with comprehensive style guides. Wunderkint creates detailed brand guidelines for your team.",
    keywords: ["brand style guides", "brand guidelines", "brand standards"],
    type: "service",
    slug: "brand-style-guides",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/brand-style-guides.jpg",
  },
  {
    seoUrl: "/custom-icon-design",
    internalPath: "/service/icon-design",
    title: "Custom Icon Design Services | Professional Icon Sets",
    description:
      "Design custom icons that enhance user experience. Wunderkint creates scalable, beautiful icon sets for digital and print.",
    keywords: ["icon design", "custom icons", "icon sets"],
    type: "service",
    slug: "icon-design",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/icon-design.jpg",
  },
  {
    seoUrl: "/social-media-management-services",
    internalPath: "/service/social-media-management",
    title: "Social Media Management Services | Complete Social Solutions",
    description:
      "Grow your social presence with expert management. Wunderkint handles strategy, content, and engagement across all platforms.",
    keywords: [
      "social media management",
      "social strategy",
      "content management",
    ],
    type: "service",
    slug: "social-media-management",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/social-media-management.jpg",
  },
  {
    seoUrl: "/strategic-campaign-planning",
    internalPath: "/service/campaign-planning",
    title: "Strategic Campaign Planning Services | Marketing Strategy",
    description:
      "Plan winning marketing campaigns with Wunderkint. Data-driven strategies that deliver measurable results.",
    keywords: ["campaign planning", "marketing strategy", "campaign strategy"],
    type: "service",
    slug: "campaign-planning",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/campaign-planning.jpg",
  },
  {
    seoUrl: "/professional-brand-launch",
    internalPath: "/service/brand-launch",
    title: "Professional Brand Launch Services | Go-to-Market Strategy",
    description:
      "Launch your brand with impact. Wunderkint provides end-to-end brand launch services from strategy to execution.",
    keywords: ["brand launch", "product launch", "go to market"],
    type: "service",
    slug: "brand-launch",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/brand-launch.jpg",
  },
  {
    seoUrl: "/traditional-advertising-services",
    internalPath: "/service/traditional-advertising",
    title: "Traditional Advertising Services | Print & Broadcast Campaigns",
    description:
      "Reach audiences through traditional media. Wunderkint creates compelling print, TV, and radio advertising campaigns.",
    keywords: ["traditional advertising", "print ads", "broadcast advertising"],
    type: "service",
    slug: "traditional-advertising",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/traditional-advertising.jpg",
  },
  {
    seoUrl: "/store-launch-services",
    internalPath: "/service/store-launches",
    title: "Store Launch Services | Retail Opening Solutions",
    description:
      "Launch your retail store successfully. Wunderkint provides comprehensive store launch services from planning to grand opening.",
    keywords: ["store launch", "retail opening", "store marketing"],
    type: "service",
    slug: "store-launches",
    category: "branding",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/store-launches.jpg",
  },

  // ============================================
  // CONTENT SERVICES
  // ============================================
  {
    seoUrl: "/expert-video-editing",
    internalPath: "/service/video-editing",
    title: "Expert Video Editing Services | Professional Post-Production",
    description:
      "Transform your raw footage into captivating stories with professional video editing by Wunderkint. Perfect for marketing, social media, and storytelling.",
    keywords: ["video editing", "video production", "content creation"],
    type: "service",
    slug: "video-editing",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/video-editing.jpg",
  },
  {
    seoUrl: "/professional-content-writing",
    internalPath: "/service/content-writing",
    title: "Professional Content Writing Services | SEO-Optimized Content",
    description:
      "Boost your brand's presence with expertly written content that engages and converts. Wunderkint crafts high-quality blogs, web copy, and marketing content.",
    keywords: ["content writing", "copywriting", "seo content"],
    type: "service",
    slug: "content-writing",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/content-writing.jpg",
  },
  {
    seoUrl: "/accurate-transcription-services",
    internalPath: "/service/transcription",
    title: "Accurate Transcription Services | Audio & Video to Text",
    description:
      "Get fast and reliable transcription services for audio, video, and interviews. Wunderkint ensures precision and confidentiality in every project.",
    keywords: ["transcription", "audio to text", "transcribing services"],
    type: "service",
    slug: "transcription",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/transcription.jpg",
  },
  {
    seoUrl: "/creative-copywriting-services",
    internalPath: "/service/creative-copywriting",
    title: "Creative Copywriting Services | Compelling Brand Stories",
    description:
      "Tell your brand story with powerful words. Wunderkint's creative copywriting services deliver content that captures attention and drives results.",
    keywords: ["copywriting", "creative writing", "marketing copy"],
    type: "service",
    slug: "creative-copywriting",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/creative-copywriting.jpg",
  },
  {
    seoUrl: "/professional-storyboard-design",
    internalPath: "/service/storyboards",
    title: "Professional Storyboard Design Services | Visual Planning",
    description:
      "Visualize your story before production. Wunderkint's storyboard design helps creatives, filmmakers, and brands plan engaging visual narratives.",
    keywords: ["storyboards", "pre-production", "visual storytelling"],
    type: "service",
    slug: "storyboards",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/storyboards.jpg",
  },
  {
    seoUrl: "/motion-graphics-design",
    internalPath: "/service/motion-graphics",
    title: "Motion Graphics Design Services | Animated Visual Content",
    description:
      "Bring your visuals to life with captivating motion graphics. Wunderkint designs animations that enhance storytelling and brand appeal.",
    keywords: ["motion graphics", "animation", "video production"],
    type: "service",
    slug: "motion-graphics",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/motion-graphics.jpg",
  },
  {
    seoUrl: "/custom-art-and-illustration",
    internalPath: "/service/art-and-illustration",
    title: "Custom Art and Illustration Services | Digital Artwork",
    description:
      "Express your ideas through stunning custom illustrations and digital artwork. Wunderkint's artists create visuals that inspire emotion and engagement.",
    keywords: ["illustration", "digital art", "custom artwork"],
    type: "service",
    slug: "art-and-illustration",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/art-and-illustration.jpg",
  },
  {
    seoUrl: "/persuasive-ad-copy-writing",
    internalPath: "/service/ad-copy",
    title: "Persuasive Ad Copy Writing Services | Conversion-Focused Content",
    description:
      "Drive conversions with persuasive ad copy that sells. Wunderkint crafts short, impactful messaging for campaigns across all digital platforms.",
    keywords: ["ad copy", "marketing", "advertising copywriting"],
    type: "service",
    slug: "ad-copy",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ad-copy.jpg",
  },
  {
    seoUrl: "/strategic-content-marketing",
    internalPath: "/service/content-marketing",
    title: "Strategic Content Marketing Services | Audience Engagement",
    description:
      "Build authority and trust with strategic content marketing. Wunderkint creates campaigns that educate, entertain, and convert your audience.",
    keywords: ["content marketing", "digital marketing", "strategy"],
    type: "service",
    slug: "content-marketing",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/content-marketing.jpg",
  },
  {
    seoUrl: "/professional-video-production",
    internalPath: "/service/video-production",
    title: "Professional Video Production Services | Brand Storytelling",
    description:
      "From script to screen, Wunderkint produces professional videos that tell your brand story and engage viewers effectively.",
    keywords: ["video production", "brand videos", "commercials"],
    type: "service",
    slug: "video-production",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/video-production.jpg",
  },
  {
    seoUrl: "/cinematic-film-production",
    internalPath: "/service/film-production",
    title: "Cinematic Film Production Services | End-to-End Solutions",
    description:
      "Create cinematic experiences that resonate. Wunderkint handles end-to-end film production – from concept to final cut.",
    keywords: ["film production", "cinematography", "video production"],
    type: "service",
    slug: "film-production",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/film-production.jpg",
  },
  {
    seoUrl: "/authentic-ugc-videos",
    internalPath: "/service/ugc-videos",
    title: "Authentic UGC Video Services | User-Generated Content",
    description:
      "Leverage authentic, high-performing user-generated content videos to boost credibility and conversions. Wunderkint makes UGC creation easy.",
    keywords: ["ugc videos", "social content", "creator marketing"],
    type: "service",
    slug: "ugc-videos",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ugc-videos.jpg",
  },
  {
    seoUrl: "/professional-ux-writing",
    internalPath: "/service/ux-writing",
    title: "Professional UX Writing Services | User-Focused Content",
    description:
      "Craft seamless digital experiences through clear, user-focused UX writing. Wunderkint helps products communicate with personality and precision.",
    keywords: ["ux writing", "product copy", "microcopy"],
    type: "service",
    slug: "ux-writing",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ux-writing.jpg",
  },
  {
    seoUrl: "/engaging-product-videos",
    internalPath: "/service/product-videos",
    title: "Engaging Product Video Services | E-Commerce Solutions",
    description:
      "Showcase your product in motion with high-quality product video production. Wunderkint turns features into captivating stories.",
    keywords: ["product videos", "ecommerce", "video marketing"],
    type: "service",
    slug: "product-videos",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/product-videos.jpg",
  },
  {
    seoUrl: "/professional-scriptwriting",
    internalPath: "/service/scriptwriting",
    title: "Professional Scriptwriting Services | Video Scripts",
    description:
      "Turn ideas into compelling scripts. Wunderkint's expert writers craft scripts for ads, explainer videos, and branded content.",
    keywords: ["scriptwriting", "copywriting", "storytelling"],
    type: "service",
    slug: "scriptwriting",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/scriptwriting.jpg",
  },
  {
    seoUrl: "/cinematic-cgi-animation",
    internalPath: "/service/cgi-animation",
    title: "Cinematic CGI Animation Services | 3D Visual Effects",
    description:
      "Elevate your visuals with cinematic CGI animation. Wunderkint delivers 3D motion design and realistic effects for advertising and film.",
    keywords: ["cgi animation", "3d design", "visual effects"],
    type: "service",
    slug: "cgi-animation",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/cgi-animation.jpg",
  },
  {
    seoUrl: "/professional-product-photography",
    internalPath: "/service/product-photography",
    title: "Professional Product Photography Services | E-Commerce Photos",
    description:
      "Capture your products in their best light. Wunderkint offers professional product photography for ecommerce, catalogs, and marketing.",
    keywords: ["product photography", "ecommerce", "brand visuals"],
    type: "service",
    slug: "product-photography",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/product-photography.jpg",
  },
  {
    seoUrl: "/proofreading-and-editing-services",
    internalPath: "/service/proofreading-and-editing",
    title: "Proofreading and Editing Services | Content Refinement",
    description:
      "Polish your content to perfection. Wunderkint provides professional proofreading and editing services for all types of content.",
    keywords: ["proofreading", "editing", "content review"],
    type: "service",
    slug: "proofreading-and-editing",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/proofreading-and-editing.jpg",
  },
  {
    seoUrl: "/social-media-video-production",
    internalPath: "/service/social-media-videos",
    title: "Social Media Video Production Services | Viral Content",
    description:
      "Create scroll-stopping social media videos. Wunderkint produces engaging video content optimized for every platform.",
    keywords: ["social media videos", "viral content", "video marketing"],
    type: "service",
    slug: "social-media-videos",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/social-media-videos.jpg",
  },
  {
    seoUrl: "/podcast-writing-services",
    internalPath: "/service/podcast-writing",
    title: "Podcast Writing Services | Script & Show Notes",
    description:
      "Create engaging podcast content with professional writing services. Wunderkint crafts scripts, show notes, and episode outlines.",
    keywords: ["podcast writing", "podcast scripts", "show notes"],
    type: "service",
    slug: "podcast-writing",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/podcast-writing.jpg",
  },
  {
    seoUrl: "/3d-product-animation-services",
    internalPath: "/service/3d-product-animation",
    title: "3D Product Animation Services | Interactive Visualizations",
    description:
      "Showcase products with stunning 3D animations. Wunderkint creates photorealistic product animations for marketing and e-commerce.",
    keywords: ["3d product animation", "product visualization", "3d animation"],
    type: "service",
    slug: "3d-product-animation",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/3d-product-animation.jpg",
  },
  {
    seoUrl: "/vfx-production-services",
    internalPath: "/service/vfx-production",
    title: "VFX Production Services | Visual Effects & Compositing",
    description:
      "Create stunning visual effects for film and advertising. Wunderkint delivers professional VFX production and compositing services.",
    keywords: ["vfx production", "visual effects", "compositing"],
    type: "service",
    slug: "vfx-production",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/vfx-production.jpg",
  },
  {
    seoUrl: "/social-media-copywriting",
    internalPath: "/service/social-media-copywriting",
    title: "Social Media Copywriting Services | Engaging Captions",
    description:
      "Write captions that convert. Wunderkint provides social media copywriting services that engage audiences and drive action.",
    keywords: ["social media copywriting", "captions", "social content"],
    type: "service",
    slug: "social-media-copywriting",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/social-media-copywriting.jpg",
  },
  {
    seoUrl: "/persuasive-sales-copy",
    internalPath: "/service/sales-copy",
    title: "Persuasive Sales Copy Services | Conversion-Focused Writing",
    description:
      "Close more deals with persuasive sales copy. Wunderkint crafts compelling sales messages that drive conversions.",
    keywords: ["sales copy", "conversion copywriting", "sales writing"],
    type: "service",
    slug: "sales-copy",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/sales-copy.jpg",
  },
  {
    seoUrl: "/music-promotion-services",
    internalPath: "/service/music-promotion",
    title: "Music Promotion Services | Artist Marketing",
    description:
      "Amplify your music career with strategic promotion. Wunderkint helps artists reach wider audiences and grow their fanbase.",
    keywords: ["music promotion", "artist marketing", "music marketing"],
    type: "service",
    slug: "music-promotion",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/music-promotion.jpg",
  },
  {
    seoUrl: "/animation-production-services",
    internalPath: "/service/animation-production",
    title: "Animation Production Services | 2D & 3D Animation",
    description:
      "Bring stories to life with professional animation production. Wunderkint creates engaging 2D and 3D animations for all purposes.",
    keywords: ["animation production", "2d animation", "3d animation"],
    type: "service",
    slug: "animation-production",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/animation-production.jpg",
  },
  {
    seoUrl: "/podcast-production-services",
    internalPath: "/service/podcast-production",
    title: "Podcast Production Services | End-to-End Audio Solutions",
    description:
      "Launch your podcast with professional production services. Wunderkint handles recording, editing, and distribution.",
    keywords: ["podcast production", "audio production", "podcast editing"],
    type: "service",
    slug: "podcast-production",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/podcast-production.jpg",
  },
  {
    seoUrl: "/3d-video-production-services",
    internalPath: "/service/3d-video-production",
    title: "3D Video Production Services | Immersive Content",
    description:
      "Create immersive 3D video content. Wunderkint produces cutting-edge 3D videos for marketing, entertainment, and education.",
    keywords: ["3d video production", "immersive video", "3d content"],
    type: "service",
    slug: "3d-video-production",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/3d-video-production.jpg",
  },
  {
    seoUrl: "/4d-video-production-services",
    internalPath: "/service/4d-video-production",
    title: "4D Video Production Services | Next-Gen Experiences",
    description:
      "Push boundaries with 4D video production. Wunderkint creates multi-sensory experiences that captivate audiences.",
    keywords: [
      "4d video production",
      "experiential video",
      "immersive content",
    ],
    type: "service",
    slug: "4d-video-production",
    category: "content",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/4d-video-production.jpg",
  },

  // ============================================
  // TECH SERVICES
  // ============================================
  {
    seoUrl: "/wordpress-development-services",
    internalPath: "/service/wordpress-development",
    title: "WordPress Development Services | Custom CMS Solutions",
    description:
      "Build powerful WordPress websites with Wunderkint. Custom themes, plugins, and optimization for your business needs.",
    keywords: ["wordpress development", "cms", "website development"],
    type: "service",
    slug: "wordpress-development",
    category: "tech",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/wordpress-development.jpg",
  },
  {
    seoUrl: "/custom-website-development",
    internalPath: "/service/website-development",
    title: "Custom Website Development Services | Professional Web Solutions",
    description:
      "Get a fully customized website built from scratch. Wunderkint delivers responsive, fast, and scalable web solutions.",
    keywords: ["website development", "web design", "custom websites"],
    type: "service",
    slug: "website-development",
    category: "tech",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/website-development.jpg",
  },
  {
    seoUrl: "/professional-website-design",
    internalPath: "/service/website-design",
    title: "Professional Website Design Services | Modern Web Design",
    description:
      "Design beautiful, user-friendly websites that convert. Wunderkint creates modern web designs that engage visitors.",
    keywords: ["website design", "web design", "ui design"],
    type: "service",
    slug: "website-design",
    category: "tech",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/website-design.jpg",
  },
  {
    seoUrl: "/webflow-development-services",
    internalPath: "/service/webflow-development",
    title: "Webflow Development Services | No-Code Web Solutions",
    description:
      "Build stunning websites with Webflow. Wunderkint creates custom Webflow sites that are easy to manage and update.",
    keywords: ["webflow development", "no-code", "website builder"],
    type: "service",
    slug: "webflow-development",
    category: "tech",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/webflow-development.jpg",
  },
  {
    seoUrl: "/mobile-app-development-services",
    internalPath: "/service/mobile-app-development",
    title: "Mobile App Development Services | iOS & Android Apps",
    description:
      "Transform your idea into a mobile app. Wunderkint develops native and cross-platform apps for iOS and Android.",
    keywords: ["mobile app development", "ios", "android"],
    type: "service",
    slug: "mobile-app-development",
    category: "tech",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/mobile-app-development.jpg",
  },
  {
    seoUrl: "/web-application-development",
    internalPath: "/service/web-applications",
    title: "Web Application Development Services | Custom Web Apps",
    description:
      "Build powerful web applications that scale. Wunderkint creates custom web apps tailored to your business needs.",
    keywords: ["web applications", "web app development", "saas development"],
    type: "service",
    slug: "web-applications",
    category: "tech",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/web-applications.jpg",
  },
  {
    seoUrl: "/custom-software-development",
    internalPath: "/service/software-development",
    title: "Custom Software Development Services | Enterprise Solutions",
    description:
      "Develop custom software solutions for your business. Wunderkint builds scalable, secure enterprise applications.",
    keywords: [
      "software development",
      "custom software",
      "enterprise software",
    ],
    type: "service",
    slug: "software-development",
    category: "tech",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/software-development.jpg",
  },
  {
    seoUrl: "/ui-ux-design-services",
    internalPath: "/service/ui-ux-design",
    title: "UI/UX Design Services | User-Centered Design",
    description:
      "Design digital experiences users love. Wunderkint creates intuitive UI/UX designs that drive engagement and conversions.",
    keywords: ["ui ux design", "user experience", "interface design"],
    type: "service",
    slug: "ui-ux-design",
    category: "tech",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ui-ux-design.jpg",
  },
  {
    seoUrl: "/android-app-development-services",
    internalPath: "/service/android-app-development",
    title: "Android App Development Services | Native Android Apps",
    description:
      "Build powerful Android applications. Wunderkint develops native Android apps with modern features and performance.",
    keywords: ["android app development", "android apps", "mobile development"],
    type: "service",
    slug: "android-app-development",
    category: "tech",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/android-app-development.jpg",
  },
  {
    seoUrl: "/game-development-services",
    internalPath: "/service/game-development",
    title: "Game Development Services | Mobile & PC Games",
    description:
      "Bring your game idea to life. Wunderkint develops engaging games for mobile, PC, and console platforms.",
    keywords: ["game development", "mobile games", "game design"],
    type: "service",
    slug: "game-development",
    category: "tech",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/game-development.jpg",
  },
  {
    seoUrl: "/data-processing-services",
    internalPath: "/service/data-processing",
    title: "Data Processing Services | Big Data Solutions",
    description:
      "Process and analyze large datasets efficiently. Wunderkint provides data processing services for business intelligence.",
    keywords: ["data processing", "big data", "data analytics"],
    type: "service",
    slug: "data-processing",
    category: "tech",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/data-processing.jpg",
  },
  {
    seoUrl: "/marketing-automation-services",
    internalPath: "/service/marketing-automation",
    title: "Marketing Automation Services | Workflow Automation",
    description:
      "Automate your marketing workflows. Wunderkint implements marketing automation solutions that save time and increase ROI.",
    keywords: [
      "marketing automation",
      "workflow automation",
      "email automation",
    ],
    type: "service",
    slug: "marketing-automation",
    category: "tech",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/marketing-automation.jpg",
  },
  {
    seoUrl: "/tech-consulting-services",
    internalPath: "/service/tech-consulting",
    title: "Tech Consulting Services | Digital Transformation",
    description:
      "Get expert technology consulting. Wunderkint helps businesses navigate digital transformation and technology adoption.",
    keywords: ["tech consulting", "it consulting", "digital transformation"],
    type: "service",
    slug: "tech-consulting",
    category: "tech",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/tech-consulting.jpg",
  },
  {
    seoUrl: "/ios-app-development-services",
    internalPath: "/service/ios-app-development",
    title: "iOS App Development Services | iPhone & iPad Apps",
    description:
      "Develop beautiful iOS applications. Wunderkint creates native iPhone and iPad apps with exceptional user experiences.",
    keywords: ["ios app development", "iphone apps", "ipad apps"],
    type: "service",
    slug: "ios-app-development",
    category: "tech",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ios-app-development.jpg",
  },
  {
    seoUrl: "/email-automation-services",
    internalPath: "/service/email-automations",
    title: "Email Automation Services | Automated Email Campaigns",
    description:
      "Automate your email marketing. Wunderkint sets up email automation workflows that nurture leads and drive sales.",
    keywords: ["email automation", "email marketing", "drip campaigns"],
    type: "service",
    slug: "email-automations",
    category: "tech",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/email-automations.jpg",
  },
  {
    seoUrl: "/ecommerce-development-services",
    internalPath: "/service/e-commerce-development",
    title: "E-Commerce Development Services | Online Store Solutions",
    description:
      "Build successful online stores. Wunderkint develops custom e-commerce solutions that drive sales and growth.",
    keywords: ["ecommerce development", "online store", "shopping cart"],
    type: "service",
    slug: "e-commerce-development",
    category: "tech",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/e-commerce-development.jpg",
  },
  {
    seoUrl: "/chatbot-development-services",
    internalPath: "/service/chatbot-development",
    title: "Chatbot Development Services | Conversational AI",
    description:
      "Enhance customer service with intelligent chatbots. Wunderkint develops AI-powered chatbots for websites and apps.",
    keywords: ["chatbot development", "conversational ai", "customer service"],
    type: "service",
    slug: "chatbot-development",
    category: "tech",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/chatbot-development.jpg",
  },
  {
    seoUrl: "/cross-platform-app-development",
    internalPath: "/service/cross-platform-development",
    title: "Cross-Platform App Development Services | React Native & Flutter",
    description:
      "Build apps for iOS and Android simultaneously. Wunderkint uses React Native and Flutter for efficient cross-platform development.",
    keywords: ["cross-platform development", "react native", "flutter"],
    type: "service",
    slug: "cross-platform-development",
    category: "tech",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/cross-platform-development.jpg",
  },
  {
    seoUrl: "/shopify-website-development",
    internalPath: "/service/shopify-website",
    title: "Shopify Website Development Services | E-Commerce Stores",
    description:
      "Launch your Shopify store with expert development. Wunderkint creates custom Shopify websites that convert visitors into customers.",
    keywords: ["shopify development", "shopify store", "ecommerce"],
    type: "service",
    slug: "shopify-website",
    category: "tech",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/shopify-website.jpg",
  },

  // ============================================
  // MARKETING SERVICES
  // ============================================
  {
    seoUrl: "/affiliate-marketing-services",
    internalPath: "/service/affiliate-marketing",
    title: "Affiliate Marketing Services | Performance Marketing",
    description:
      "Boost your revenue with strategic affiliate marketing campaigns. Wunderkint connects brands with the right partners to drive scalable growth.",
    keywords: ["affiliate marketing", "partnerships", "performance marketing"],
    type: "service",
    slug: "affiliate-marketing",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/affiliate-marketing.jpg",
  },
  {
    seoUrl: "/social-media-marketing-services",
    internalPath: "/service/social-media-marketing",
    title: "Social Media Marketing Services | Organic Growth Strategies",
    description:
      "Build your brand presence across platforms with impactful social media marketing. Wunderkint helps you grow audiences and engagement organically.",
    keywords: [
      "social media marketing",
      "content marketing",
      "brand awareness",
    ],
    type: "service",
    slug: "social-media-marketing",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/social-media-marketing.jpg",
  },
  {
    seoUrl: "/search-engine-marketing-services",
    internalPath: "/service/search-engine-marketing",
    title: "Search Engine Marketing (SEM) Services | PPC Campaigns",
    description:
      "Drive qualified traffic through paid search campaigns. Wunderkint manages and optimizes SEM strategies for maximum ROI and visibility.",
    keywords: ["search engine marketing", "sem", "google ads"],
    type: "service",
    slug: "search-engine-marketing",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/search-engine-marketing.jpg",
  },
  {
    seoUrl: "/project-management-services",
    internalPath: "/service/project-management",
    title: "Project Management Services | Efficient Team Coordination",
    description:
      "Ensure your marketing projects run smoothly and efficiently. Wunderkint provides end-to-end project management with precision and transparency.",
    keywords: [
      "project management",
      "team coordination",
      "workflow optimization",
    ],
    type: "service",
    slug: "project-management",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/project-management.jpg",
  },
  {
    seoUrl: "/email-marketing-services",
    internalPath: "/service/email-marketing",
    title: "Email Marketing Services | High-ROI Campaigns",
    description:
      "Engage customers and drive conversions with personalized email campaigns. Wunderkint creates impactful email strategies for higher ROI.",
    keywords: ["email marketing", "crm", "automation"],
    type: "service",
    slug: "email-marketing",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/email-marketing.jpg",
  },
  {
    seoUrl: "/marketing-strategy-consulting",
    internalPath: "/service/marketing-strategy",
    title: "Marketing Strategy Consulting Services | Growth Marketing",
    description:
      "Build a winning marketing roadmap with Wunderkint's data-driven strategies. From brand positioning to campaigns, we help you scale smartly.",
    keywords: ["marketing strategy", "digital strategy", "growth marketing"],
    type: "service",
    slug: "marketing-strategy",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/marketing-strategy.jpg",
  },
  {
    seoUrl: "/seo-services",
    internalPath: "/service/search-engine-optimization",
    title: "SEO Services (Search Engine Optimization) | Organic Traffic Growth",
    description:
      "Improve your website visibility and rankings on Google. Wunderkint's SEO experts optimize your content, structure, and backlinks for growth.",
    keywords: ["seo services", "organic traffic", "search optimization"],
    type: "service",
    slug: "search-engine-optimization",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/search-engine-optimization.jpg",
  },
  {
    seoUrl: "/influencer-marketing-services",
    internalPath: "/service/influencer-marketing",
    title: "Influencer Marketing Services | Creator Partnerships",
    description:
      "Collaborate with top creators to promote your brand authentically. Wunderkint drives awareness through influencer partnerships that convert.",
    keywords: ["influencer marketing", "ugc", "brand campaigns"],
    type: "service",
    slug: "influencer-marketing",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/influencer-marketing.jpg",
  },
  {
    seoUrl: "/lead-generation-services",
    internalPath: "/service/lead-generation",
    title: "Lead Generation Services | B2B Lead Capture",
    description:
      "Fuel your sales funnel with qualified leads. Wunderkint designs targeted lead generation campaigns that drive consistent conversions.",
    keywords: ["lead generation", "b2b marketing", "sales funnel"],
    type: "service",
    slug: "lead-generation",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/lead-generation.jpg",
  },
  {
    seoUrl: "/product-management-services",
    internalPath: "/service/product-management",
    title: "Product Management Services | Agile Product Development",
    description:
      "Build better products with strategic management and agile execution. Wunderkint helps you bring innovative ideas to market faster.",
    keywords: ["product management", "product strategy", "go-to-market"],
    type: "service",
    slug: "product-management",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/product-management.jpg",
  },
  {
    seoUrl: "/public-relations-services",
    internalPath: "/service/public-relations",
    title: "Public Relations (PR) Services | Media & Brand Communications",
    description:
      "Shape your brand reputation with powerful PR campaigns. Wunderkint connects your message to the right audience through earned media and strategy.",
    keywords: ["public relations", "media", "brand communications"],
    type: "service",
    slug: "public-relations",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/public-relations.jpg",
  },
  {
    seoUrl: "/press-release-writing-services",
    internalPath: "/service/press-releases",
    title: "Press Release Writing & Distribution Services",
    description:
      "Announce your news with professional press releases that get picked up. Wunderkint crafts and distributes press content for visibility.",
    keywords: ["press releases", "media distribution", "content marketing"],
    type: "service",
    slug: "press-releases",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/press-releases.jpg",
  },
  {
    seoUrl: "/display-advertising-services",
    internalPath: "/service/display-advertising",
    title: "Display Advertising Services | Banner Ad Campaigns",
    description:
      "Reach your audience visually with targeted display ad campaigns. Wunderkint designs and manages creative banners that convert.",
    keywords: ["display advertising", "google ads", "digital campaigns"],
    type: "service",
    slug: "display-advertising",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/display-advertising.jpg",
  },
  {
    seoUrl: "/programmatic-advertising-services",
    internalPath: "/service/programmatic-ad",
    title: "Programmatic Advertising Services | Automated Media Buying",
    description:
      "Automate your media buying with programmatic advertising. Wunderkint ensures your ads reach the right people at the right time, efficiently.",
    keywords: ["programmatic ads", "automated media", "digital advertising"],
    type: "service",
    slug: "programmatic-ad",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/programmatic-ad.jpg",
  },
  {
    seoUrl: "/facebook-ads-campaign-management",
    internalPath: "/service/facebook-ads-campaign",
    title: "Facebook Ads Campaign Management Services | Paid Social",
    description:
      "Maximize ROI with expertly managed Facebook ad campaigns. Wunderkint optimizes targeting, creatives, and conversion performance.",
    keywords: ["facebook ads", "social advertising", "paid social"],
    type: "service",
    slug: "facebook-ads-campaign",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/facebook-ads-campaign.jpg",
  },
  {
    seoUrl: "/instagram-marketing-services",
    internalPath: "/service/instagram-marketing",
    title: "Instagram Marketing Services | Visual Brand Growth",
    description:
      "Grow your brand visually with Instagram marketing. Wunderkint designs content and strategies that drive engagement and followers organically.",
    keywords: ["instagram marketing", "social media", "branding"],
    type: "service",
    slug: "instagram-marketing",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/instagram-marketing.jpg",
  },
  {
    seoUrl: "/video-marketing-services",
    internalPath: "/service/video-marketing",
    title: "Video Marketing Services | Video Content Strategy",
    description:
      "Engage audiences with strategic video marketing. Wunderkint creates video content that tells stories and drives conversions.",
    keywords: ["video marketing", "video content", "digital marketing"],
    type: "service",
    slug: "video-marketing",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/video-marketing.jpg",
  },
  {
    seoUrl: "/ecommerce-marketing-services",
    internalPath: "/service/e-commerce-marketing",
    title: "E-Commerce Marketing Services | Online Store Growth",
    description:
      "Grow your online store with proven e-commerce marketing strategies. Wunderkint drives traffic, conversions, and customer retention.",
    keywords: [
      "ecommerce marketing",
      "online store",
      "conversion optimization",
    ],
    type: "service",
    slug: "e-commerce-marketing",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/e-commerce-marketing.jpg",
  },
  {
    seoUrl: "/event-marketing-services",
    internalPath: "/service/event-marketing",
    title: "Event Marketing Services | Event Promotion Strategies",
    description:
      "Maximize event attendance and engagement. Wunderkint provides comprehensive event marketing services from promotion to follow-up.",
    keywords: ["event marketing", "event promotion", "event strategy"],
    type: "service",
    slug: "event-marketing",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/event-marketing.jpg",
  },
  {
    seoUrl: "/paid-social-media-services",
    internalPath: "/service/paid-social-media",
    title: "Paid Social Media Services | Social Advertising Campaigns",
    description:
      "Drive results with paid social media advertising. Wunderkint manages campaigns across Facebook, Instagram, LinkedIn, and more.",
    keywords: ["paid social media", "social advertising", "paid campaigns"],
    type: "service",
    slug: "paid-social-media",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/paid-social-media.jpg",
  },
  {
    seoUrl: "/media-planning-and-buying",
    internalPath: "/service/media-planning-and-buying",
    title: "Media Planning & Buying Services | Strategic Media Solutions",
    description:
      "Optimize your media spend with strategic planning and buying. Wunderkint ensures your message reaches the right audience efficiently.",
    keywords: ["media planning", "media buying", "advertising strategy"],
    type: "service",
    slug: "media-planning-and-buying",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/media-planning-and-buying.jpg",
  },
  {
    seoUrl: "/intellectual-property-management",
    internalPath: "/service/intellectual-property-management",
    title: "Intellectual Property Management Services | IP Protection",
    description:
      "Protect your creative assets with IP management services. Wunderkint helps manage trademarks, copyrights, and brand protection.",
    keywords: ["intellectual property", "ip management", "brand protection"],
    type: "service",
    slug: "intellectual-property-management",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/intellectual-property-management.jpg",
  },
  {
    seoUrl: "/shopify-marketing-services",
    internalPath: "/service/shopify-marketing",
    title: "Shopify Marketing Services | E-Commerce Growth Strategies",
    description:
      "Scale your Shopify store with expert marketing. Wunderkint drives traffic and sales through targeted Shopify marketing strategies.",
    keywords: ["shopify marketing", "ecommerce growth", "shopify store"],
    type: "service",
    slug: "shopify-marketing",
    category: "marketing",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/shopify-marketing.jpg",
  },

  // ============================================
  // AI SERVICES
  // ============================================
  {
    seoUrl: "/ai-chatbot-development",
    internalPath: "/service/ai-chatbot",
    title: "AI Chatbot Development Services | Intelligent Conversational AI",
    description:
      "Automate customer interactions with smart AI chatbots. Wunderkint builds conversational AI that engages users and enhances support efficiency.",
    keywords: ["ai chatbot", "chatbot development", "automation"],
    type: "service",
    slug: "ai-chatbot",
    category: "ai",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ai-chatbot.jpg",
  },
  {
    seoUrl: "/ai-video-generation-services",
    internalPath: "/service/ai-video-generation",
    title: "AI Video Generation Services | Automated Video Creation",
    description:
      "Create stunning videos instantly using AI. Wunderkint's AI video generation transforms ideas into visuals with incredible speed and creativity.",
    keywords: ["ai video generation", "video automation", "ai content"],
    type: "service",
    slug: "ai-video-generation",
    category: "ai",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ai-video-generation.jpg",
  },
  {
    seoUrl: "/ai-movie-production",
    internalPath: "/service/ai-movies",
    title: "AI Movie Production Services | AI-Generated Films",
    description:
      "Reimagine storytelling with AI movie production. Wunderkint combines technology and creativity to produce visually stunning AI-generated films.",
    keywords: ["ai movies", "film production", "ai video creation"],
    type: "service",
    slug: "ai-movies",
    category: "ai",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ai-movies.jpg",
  },
  {
    seoUrl: "/ai-for-business-solutions",
    internalPath: "/service/ai-for-businesses",
    title: "AI for Business Solutions | Enterprise AI Implementation",
    description:
      "Empower your business with custom AI solutions. Wunderkint implements automation, analytics, and optimization tools to accelerate growth.",
    keywords: ["ai for business", "automation", "enterprise ai"],
    type: "service",
    slug: "ai-for-businesses",
    category: "ai",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ai-for-businesses.jpg",
  },
  {
    seoUrl: "/ai-gif-creation",
    internalPath: "/service/ai-gifs",
    title: "AI GIF Creation Services | Animated Content Generation",
    description:
      "Generate engaging GIFs with AI for social media, ads, and entertainment. Wunderkint automates creative expression with intelligent design tools.",
    keywords: ["ai gifs", "animated content", "social media marketing"],
    type: "service",
    slug: "ai-gifs",
    category: "ai",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ai-gifs.jpg",
  },
  {
    seoUrl: "/ai-audio-generation-services",
    internalPath: "/service/ai-audio-generation",
    title: "AI Audio Generation Services | Voice Synthesis & Music",
    description:
      "Create lifelike voiceovers, soundtracks, and audio content with AI. Wunderkint delivers realistic audio generation for media and marketing.",
    keywords: ["ai audio generation", "voiceover ai", "audio automation"],
    type: "service",
    slug: "ai-audio-generation",
    category: "ai",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ai-audio-generation.jpg",
  },
  {
    seoUrl: "/ai-content-creation",
    internalPath: "/service/ai-content",
    title: "AI Content Creation Services | Automated Writing & Design",
    description:
      "Scale your content production with AI. Wunderkint generates articles, captions, scripts, and ad copy with accuracy and creativity.",
    keywords: ["ai content", "ai writing", "content automation"],
    type: "service",
    slug: "ai-content",
    category: "ai",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ai-content.jpg",
  },
  {
    seoUrl: "/ai-podcast-production",
    internalPath: "/service/ai-podcasts",
    title: "AI Podcast Production Services | Automated Audio Shows",
    description:
      "Produce professional-quality podcasts with AI voice and editing automation. Wunderkint streamlines podcast creation for creators and brands.",
    keywords: ["ai podcasts", "audio production", "automated podcasts"],
    type: "service",
    slug: "ai-podcasts",
    category: "ai",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ai-podcasts.jpg",
  },
  {
    seoUrl: "/ai-consulting-services",
    internalPath: "/service/ai-consulting",
    title: "AI Consulting Services | Digital Transformation Strategy",
    description:
      "Adopt AI the right way with expert consulting from Wunderkint. We help businesses identify opportunities, integrate tools, and scale intelligently.",
    keywords: ["ai consulting", "digital transformation", "machine learning"],
    type: "service",
    slug: "ai-consulting",
    category: "ai",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ai-consulting.jpg",
  },
  {
    seoUrl: "/ai-product-photography",
    internalPath: "/service/ai-product-photography",
    title: "AI Product Photography Services | Virtual Photo Studio",
    description:
      "Create product visuals without a studio. Wunderkint's AI product photography generates high-quality, realistic images instantly.",
    keywords: ["ai product photography", "visual content", "ai imagery"],
    type: "service",
    slug: "ai-product-photography",
    category: "ai",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ai-product-photography.jpg",
  },
  {
    seoUrl: "/ai-integration-services",
    internalPath: "/service/ai-integrations",
    title: "AI Integration Services | ML Model Implementation",
    description:
      "Integrate AI into your workflows effortlessly. Wunderkint connects machine learning tools and APIs to make your business smarter and faster.",
    keywords: ["ai integrations", "automation", "ml models"],
    type: "service",
    slug: "ai-integrations",
    category: "ai",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ai-integrations.jpg",
  },
  {
    seoUrl: "/ai-art-creation",
    internalPath: "/service/ai-artists",
    title: "AI Art Creation Services | Generative Digital Art",
    description:
      "Generate breathtaking digital art with AI. Wunderkint's AI artists blend creativity and algorithms to craft unique, expressive visuals.",
    keywords: ["ai art", "generative art", "digital artwork"],
    type: "service",
    slug: "ai-artists",
    category: "ai",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ai-artists.jpg",
  },
  {
    seoUrl: "/ai-video-avatars",
    internalPath: "/service/ai-video-avatars",
    title: "AI Video Avatar Services | Virtual Presenters",
    description:
      "Bring lifelike AI avatars to your content. Wunderkint creates digital presenters and video avatars for marketing, learning, and entertainment.",
    keywords: ["ai avatars", "virtual presenters", "video automation"],
    type: "service",
    slug: "ai-video-avatars",
    category: "ai",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ai-video-avatars.jpg",
  },
  {
    seoUrl: "/ai-music-video-creation",
    internalPath: "/service/ai-music-videos",
    title: "AI Music Video Creation Services | Audio-Visual Synthesis",
    description:
      "Turn sound into stunning visuals. Wunderkint creates AI-generated music videos that sync rhythm, motion, and emotion beautifully.",
    keywords: ["ai music videos", "generative video", "creative ai"],
    type: "service",
    slug: "ai-music-videos",
    category: "ai",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ai-music-videos.jpg",
  },
  {
    seoUrl: "/ai-video-art",
    internalPath: "/service/ai-video-art",
    title: "AI Video Art Creation Services | Experimental Visuals",
    description:
      "Explore creativity through AI-generated video art. Wunderkint crafts experimental visuals that merge design, tech, and imagination.",
    keywords: ["ai video art", "creative ai", "digital visuals"],
    type: "service",
    slug: "ai-video-art",
    category: "ai",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ai-video-art.jpg",
  },
  {
    seoUrl: "/ai-cgi-advertising",
    internalPath: "/service/ai-based-cgi-ads",
    title: "AI-Based CGI Advertising Services | Virtual Production",
    description:
      "Produce cinematic CGI ads powered by AI. Wunderkint delivers visually stunning campaigns at scale, reducing production costs and timelines.",
    keywords: ["ai cgi ads", "ai advertising", "visual effects"],
    type: "service",
    slug: "ai-based-cgi-ads",
    category: "ai",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ai-based-cgi-ads.jpg",
  },
  // {
  //   seoUrl: "/ai-product-lookbooks",
  //   internalPath: "/service/ai-product-lookbooks",
  //   title: "AI Product Lookbook Services | Virtual Fashion Shoots",
  //   description:
  //     "Showcase your brand's collection with AI-generated lookbooks. Wunderkint automates photoshoots and styling through intelligent design.",
  //   keywords: ["ai lookbooks", "fashion ai", "product showcase"],
  //   type: "service",
  //   slug: "ai-product-lookbooks",
  //   category: "ai",
  //   changefreq: "monthly",
  //   priority: 0.8,
  //   ogImage: "/images/og/ai-product-lookbooks.jpg",
  // },
  // {
  //   seoUrl: "/ai-key-visual-creation",
  //   internalPath: "/service/ai-based-key-visuals",
  //   title: "AI-Based Key Visual Creation Services | Brand Hero Images",
  //   description:
  //     "Design high-impact key visuals using AI. Wunderkint produces creative concepts that elevate brand storytelling and visual identity.",
  //   keywords: ["ai key visuals", "creative design", "brand art"],
  //   type: "service",
  //   slug: "ai-based-key-visuals",
  //   category: "ai",
  //   changefreq: "monthly",
  //   priority: 0.8,
  //   ogImage: "/images/og/ai-based-key-visuals.jpg",
  // },
  // {
  //   seoUrl: "/ai-clone-videos",
  //   internalPath: "/service/ai-clone-videos",
  //   title: "AI Clone Video Production Services | Digital Humans",
  //   description:
  //     "Recreate lifelike human performances using AI clone videos. Wunderkint enables scalable, realistic, and ethical digital duplication for content.",
  //   keywords: ["ai clone videos", "digital humans", "video ai"],
  //   type: "service",
  //   slug: "ai-clone-videos",
  //   category: "ai",
  //   changefreq: "monthly",
  //   priority: 0.8,
  //   ogImage: "/images/og/ai-clone-videos.jpg",
  // },
  {
    seoUrl: "/ai-marketing",
    internalPath: "/service/ai-marketing",
    title: "AI for Marketing Services | Intelligent Campaign Optimization",
    description:
      "Enhance your marketing campaigns with cutting-edge AI solutions. Wunderkint delivers smart targeting, creative automation, and data-driven optimization.",
    keywords: ["ai marketing", "ai ads", "campaign automation"],
    type: "service",
    slug: "ai-marketing",
    category: "ai",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ai-marketing.jpg",
  },
  {
    seoUrl: "/ai-ads",
    internalPath: "/service/ai-ads",
    title: "AI Based Ads Services | High-Performance Creative Automation",
    description:
      "Create high-performing ad creatives using AI. Wunderkint generates tailored visuals, messaging, and variations for better conversions and engagement.",
    keywords: ["ai ads", "ad automation", "creative ai"],
    type: "service",
    slug: "ai-ads",
    category: "ai",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ai-ads.jpg",
  },
  {
    seoUrl: "/ai-character-development",
    internalPath: "/service/ai-character-development",
    title: "AI Character Development Services | Digital Personas & Avatars",
    description:
      "Develop lifelike AI characters for advertising, storytelling, and branded content. Wunderkint creates expressive digital personas powered by AI.",
    keywords: ["ai characters", "digital avatars", "ai persona design"],
    type: "service",
    slug: "ai-character-development",
    category: "ai",
    changefreq: "monthly",
    priority: 0.8,
    ogImage: "/images/og/ai-character-development.jpg",
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getMappingBySlug(
  slug: string,
  type: "category" | "service"
): URLMapping | null {
  return URL_MAPPINGS.find((m) => m.slug === slug && m.type === type) || null;
}

export function getAllCategoryMappings(): URLMapping[] {
  return URL_MAPPINGS.filter((m) => m.type === "category");
}

export function getAllServiceMappings(): URLMapping[] {
  return URL_MAPPINGS.filter((m) => m.type === "service");
}

// export function getSEOUrlBySlug(
//   slug: string,
//   type: "category" | "service"
// ): string | null {
//   const mapping = URL_MAPPINGS.find((m) => m.slug === slug && m.type === type);
//   return mapping?.seoUrl || null;
// }

// export function getMappingByPath(path: string): URLMapping | null {
//   return (
//     URL_MAPPINGS.find((m) => m.seoUrl === path || m.internalPath === path) ||
//     null
//   );
// }

// export function getInternalPath(seoUrl: string): string | null {
//   const mapping = URL_MAPPINGS.find((m) => m.seoUrl === seoUrl);
//   return mapping?.internalPath || null;
// }

// 1. Replace the getSEOUrlBySlug function (around line 2130):
export function getSEOUrlBySlug(
  slug: string,
  type: "category" | "service"
): string | null {
  const mapping = URL_MAPPINGS.find((m) => m.slug === slug && m.type === type);

  if (!mapping) return null;

  // For services, prepend the category to the SEO URL
  if (type === "service" && mapping.category) {
    // Remove the leading slash from seoUrl and prepend category
    const urlWithoutSlash = mapping.seoUrl.startsWith("/")
      ? mapping.seoUrl.slice(1)
      : mapping.seoUrl;
    return `/${mapping.category}/${urlWithoutSlash}`;
  }

  return mapping.seoUrl;
}

// 2. Replace the getMappingByPath function (around line 2140):
export function getMappingByPath(path: string): URLMapping | null {
  // First try direct match
  const mapping = URL_MAPPINGS.find(
    (m) => m.seoUrl === path || m.internalPath === path
  );

  if (mapping) return mapping;

  // Try to match with category prefix for services
  for (const m of URL_MAPPINGS) {
    if (m.type === "service" && m.category) {
      const urlWithoutSlash = m.seoUrl.startsWith("/")
        ? m.seoUrl.slice(1)
        : m.seoUrl;
      const categoryPrefixedUrl = `/${m.category}/${urlWithoutSlash}`;

      if (categoryPrefixedUrl === path) {
        return m;
      }
    }
  }

  return null;
}

// 3. Replace the getInternalPath function (around line 2150):
export function getInternalPath(seoUrl: string): string | null {
  // First try direct match
  const mapping = URL_MAPPINGS.find((m) => m.seoUrl === seoUrl);

  if (mapping) return mapping.internalPath;

  // Try to match with category prefix for services
  for (const m of URL_MAPPINGS) {
    if (m.type === "service" && m.category) {
      const urlWithoutSlash = m.seoUrl.startsWith("/")
        ? m.seoUrl.slice(1)
        : m.seoUrl;
      const categoryPrefixedUrl = `/${m.category}/${urlWithoutSlash}`;

      if (categoryPrefixedUrl === seoUrl) {
        return m.internalPath;
      }
    }
  }

  return null;
}

// ============================================
// NEXT.JS REWRITES GENERATION
// ============================================

// export function generateRewrites() {
//   return URL_MAPPINGS.map((mapping) => ({
//     source: mapping.seoUrl,
//     destination: mapping.internalPath,
//   }));
// }

// 4. Replace the generateRewrites function (around line 2160):
export function generateRewrites() {
  return URL_MAPPINGS.map((mapping) => {
    // For services, create rewrite with category prefix
    if (mapping.type === "service" && mapping.category) {
      const urlWithoutSlash = mapping.seoUrl.startsWith("/")
        ? mapping.seoUrl.slice(1)
        : mapping.seoUrl;
      return {
        source: `/${mapping.category}/${urlWithoutSlash}`,
        destination: mapping.internalPath,
      };
    }

    // For categories, use the original mapping
    return {
      source: mapping.seoUrl,
      destination: mapping.internalPath,
    };
  });
}

// ============================================
// METADATA GENERATION
// ============================================

// export function generateMetadata(mapping: URLMapping): Metadata {
//   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wunderkint.com";
//   const fullUrl = `${baseUrl}${mapping.seoUrl}`;

//   const metadata: Metadata = {
//     title: mapping.title,
//     description: mapping.description,
//   };

//   if (mapping.keywords && mapping.keywords.length > 0) {
//     metadata.keywords = mapping.keywords.join(", ");
//   }

//   if (mapping.ogImage) {
//     metadata.openGraph = {
//       title: mapping.title,
//       description: mapping.description,
//       url: fullUrl,
//       siteName: "Wunderkint",
//       images: [
//         {
//           url: mapping.ogImage,
//           width: 1200,
//           height: 630,
//           alt: mapping.title,
//         },
//       ],
//       locale: "en_US",
//       type: "website",
//     };

//     metadata.twitter = {
//       card: "summary_large_image",
//       title: mapping.title,
//       description: mapping.description,
//       images: [mapping.ogImage],
//     };
//   }

//   metadata.robots = {
//     index: true,
//     follow: true,
//   };

//   metadata.alternates = {
//     canonical: fullUrl,
//   };

//   return metadata;
// }

// export function generateMetadata(mapping: URLMapping): Metadata {
//   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wunderkint.com";

//   // ✅ Prevent double category in canonical
//   const hasCategoryInSeoUrl =
//     mapping.category && mapping.seoUrl.startsWith(`/${mapping.category}/`);

//   // ✅ Dynamically build the correct full URL
//   const fullUrl = hasCategoryInSeoUrl
//     ? `${baseUrl}${mapping.seoUrl}`
//     : mapping.category
//       ? `${baseUrl}/${mapping.category}${mapping.seoUrl}`
//       : `${baseUrl}${mapping.seoUrl}`;

//   const metadata: Metadata = {
//     title: mapping.title,
//     description: mapping.description,
//     robots: { index: true, follow: true },
//     alternates: { canonical: fullUrl },
//   };

//   if (mapping.keywords?.length) {
//     metadata.keywords = mapping.keywords.join(", ");
//   }

//   if (mapping.ogImage) {
//     metadata.openGraph = {
//       title: mapping.title,
//       description: mapping.description,
//       url: fullUrl,
//       siteName: "Wunderkint",
//       images: [
//         {
//           url: mapping.ogImage,
//           width: 1200,
//           height: 630,
//           alt: mapping.title,
//         },
//       ],
//       locale: "en_US",
//       type: "website",
//     };

//     metadata.twitter = {
//       card: "summary_large_image",
//       title: mapping.title,
//       description: mapping.description,
//       images: [mapping.ogImage],
//     };
//   }

//   return metadata;
// }

export function generateMetadata(mapping: URLMapping): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wunderkint.com";

  // ✅ Detect whether this mapping is for a category or a service page
  const isCategoryPage = mapping.type === "category";

  // ✅ Prevent double or unnecessary category prefix
  const hasCategoryInSeoUrl =
    mapping.category && mapping.seoUrl.startsWith(`/${mapping.category}/`);

  // ✅ Build canonical URL correctly for both cases
  const fullUrl = isCategoryPage
    ? `${baseUrl}${mapping.seoUrl}` // for category pages — no prefix
    : hasCategoryInSeoUrl
    ? `${baseUrl}${mapping.seoUrl}` // for service pages that already include category
    : mapping.category
    ? `${baseUrl}/${mapping.category}${mapping.seoUrl}` // for service pages without category
    : `${baseUrl}${mapping.seoUrl}`; // fallback

  const metadata: Metadata = {
    title: mapping.title,
    description: mapping.description,
    robots: { index: true, follow: true },
    alternates: { canonical: fullUrl },
  };

  if (mapping.keywords?.length) {
    metadata.keywords = mapping.keywords.join(", ");
  }

  if (mapping.ogImage) {
    metadata.openGraph = {
      title: mapping.title,
      description: mapping.description,
      url: fullUrl,
      siteName: "Wunderkint",
      images: [
        { url: mapping.ogImage, width: 1200, height: 630, alt: mapping.title },
      ],
      locale: "en_US",
      type: "website",
    };

    metadata.twitter = {
      card: "summary_large_image",
      title: mapping.title,
      description: mapping.description,
      images: [mapping.ogImage],
    };
  }

  return metadata;
}

// ============================================
// STRUCTURED DATA GENERATION
// ============================================

export function generateStructuredData(mapping: URLMapping) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: mapping.title,
    description: mapping.description,
    provider: {
      "@type": "Organization",
      name: "Wunderkint",
    },
  };

  return {
    __html: JSON.stringify(schema, null, 0),
  };
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
