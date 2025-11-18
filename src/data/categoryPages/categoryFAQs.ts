import type { CategorySlug } from "./categories";

export type CategoryFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const categoryFAQs: Record<CategorySlug, CategoryFaqItem[]> = {
  branding: [
    {
      id: "branding-faq-1",
      question: "What types of branding services does Wunderkint provide?",
      answer:
        "Wunderkint offers a full spectrum of branding services including identity design, digital branding, packaging, event branding, and brand strategy. Every service is designed to create recognition, build trust, and deliver impact.",
    },
    {
      id: "branding-faq-2",
      question: "How does Wunderkint approach branding differently?",
      answer:
        "Our branding process blends creativity with strategy. We focus on uncovering your brand story, designing with purpose, and ensuring consistency across every platform. This makes us one of the best branding agencies for visionary brands.",
    },
    {
      id: "branding-faq-3",
      question: "What makes Wunderkint the best branding agency?",
      answer:
        "Wunderkint is considered among the best branding agencies because we create timeless, authentic identities that go beyond visuals. Our work inspires recognition, builds trust, and positions brands for long-term growth.",
    },
    {
      id: "branding-faq-4",
      question: "How do branding services help my business grow?",
      answer:
        "Branding services shape how your business is perceived, build stronger connections, and create recognition that drives customer loyalty. Wunderkint ensures your identity supports measurable growth and market differentiation.",
    },
    {
      id: "branding-faq-5",
      question: "Does Wunderkint offer full-service branding solutions?",
      answer:
        "Yes. Wunderkint provides a complete suite of branding services, from logo design to brand guidelines, digital branding, and experiential campaigns. Each service is crafted to keep your identity powerful and consistent.",
    },
    {
      id: "branding-faq-6",
      question: "How is Wunderkint different from other branding agencies?",
      answer:
        "Unlike traditional agencies, Wunderkint unites design, strategy, and innovation. We do not just create visuals. We build brand identities that are visionary, sharp, and future-ready.",
    },
    {
      id: "branding-faq-7",
      question:
        "Can Wunderkint’s branding services work for startups and large enterprises?",
      answer:
        "Absolutely. We help startups launch bold new identities and support enterprises in refreshing and scaling their brands. Our services adapt to match ambition, scale, and growth goals.",
    },
    {
      id: "branding-faq-8",
      question: "How do I get started with Wunderkint branding services?",
      answer:
        "Getting started is simple. Choose the branding services you need and our team will guide you through a clear, strategy-first process. Together, we will craft a brand identity that inspires trust and delivers measurable impact.",
    },
  ],

  content: [
    {
      id: "content-faq-1",
      question: "What types of content services does Wunderkint provide?",
      answer:
        "Wunderkint provides a complete range of content services including writing, strategy, multimedia production, social media, podcast creation, and advanced video and animation. Each service is built to strengthen your brand voice and connect with audiences.",
    },
    {
      id: "content-faq-2",
      question: "How does Wunderkint approach content differently?",
      answer:
        "Our process blends creativity with strategy. We focus on storytelling that inspires, design that resonates, and formats that adapt to every platform. This ensures content that is consistent, compelling, and impactful.",
    },
    {
      id: "content-faq-3",
      question: "What makes Wunderkint the best content agency?",
      answer:
        "Wunderkint is considered among the best content agencies because we treat content as a transformative tool. Our solutions go beyond copy and visuals to create experiences that spark emotion and drive measurable growth.",
    },
    {
      id: "content-faq-4",
      question: "How do content services help my business grow?",
      answer:
        "Content services build visibility, attract audiences, and create loyalty. At Wunderkint, we design content that strengthens trust, drives engagement, and helps your brand achieve sustainable growth.",
    },
    {
      id: "content-faq-5",
      question: "Does Wunderkint offer full-service content solutions?",
      answer:
        "Yes. From writing and editing to video production, animation, and podcast creation, Wunderkint offers end-to-end content services. Our goal is to keep your brand voice powerful and consistent across every platform.",
    },
    {
      id: "content-faq-6",
      question: "How is Wunderkint different from other content agencies?",
      answer:
        "Traditional agencies deliver output. Wunderkint delivers transformation. We create content that is visionary, sharp, and aligned with your brand story, ensuring impact that lasts.",
    },
    {
      id: "content-faq-7",
      question:
        "Can Wunderkint’s content services support both startups and enterprises?",
      answer:
        "Yes. We help startups establish bold voices and guide enterprises in scaling large campaigns. Our content services are flexible and designed to match your ambition.",
    },
    {
      id: "content-faq-8",
      question: "How do I get started with Wunderkint content services?",
      answer:
        "It begins with clarity. Select the content services you need and our team will guide you through a clear, strategy-first process. Together, we will create content that inspires action and builds measurable impact.",
    },
  ],

  tech: [
    {
      id: "tech-faq-1",
      question: "What types of tech services does Wunderkint provide?",
      answer:
        "Wunderkint offers a wide range of tech services including website design, app development, product design, digital experience design, and custom technology solutions. Every service is built to empower brands and enhance user connection.",
    },
    {
      id: "tech-faq-2",
      question: "How does Wunderkint approach tech differently?",
      answer:
        "Our tech process blends innovation with design thinking. We focus on creating seamless experiences, adaptive systems, and future-ready solutions. This makes us a trusted partner for brands seeking creative and impactful technology.",
    },
    {
      id: "tech-faq-3",
      question:
        "What makes Wunderkint one of the best creative agencies for tech?",
      answer:
        "Wunderkint stands out because we combine creativity, precision, and innovation. We build digital solutions that not only work but also inspire, ensuring your brand remains relevant in a fast-changing world.",
    },
    {
      id: "tech-faq-4",
      question: "How do tech services help my business grow?",
      answer:
        "Tech services improve customer experience, streamline operations, and open new opportunities for growth. Wunderkint ensures every solution is designed to deliver measurable impact and long-term value.",
    },
    {
      id: "tech-faq-5",
      question: "Does Wunderkint offer full-service tech solutions?",
      answer:
        "Yes. From websites and apps to digital products and enterprise solutions, Wunderkint offers a complete suite of tech services under one roof. Each solution is crafted to align with your brand and growth goals.",
    },
    {
      id: "tech-faq-6",
      question:
        "How is Wunderkint different from other tech service providers?",
      answer:
        "Unlike traditional tech firms, Wunderkint integrates creativity with technology. We do not just deliver digital solutions. We create visionary experiences that are seamless, sharp, and innovative.",
    },
    {
      id: "tech-faq-7",
      question:
        "Can Wunderkint’s tech services support both startups and enterprises?",
      answer:
        "Absolutely. We help startups launch agile digital solutions and support enterprises in scaling advanced systems. Our services adapt to match ambition, scale, and future vision.",
    },
    {
      id: "tech-faq-8",
      question: "How do I get started with Wunderkint tech services?",
      answer:
        "Getting started is simple. Choose the tech services you need and our team will guide you through a clear, innovation-first process. Together, we will design solutions that empower your brand and transform your digital presence.",
    },
  ],

  marketing: [
    {
      id: "marketing-faq-1",
      question: "What types of marketing services does Wunderkint provide?",
      answer:
        "Wunderkint offers a complete range of marketing services including social media, influencer campaigns, search engine optimization, performance ads, PR, event marketing, and more. Every service is designed to grow visibility, drive engagement, and deliver results.",
    },
    {
      id: "marketing-faq-2",
      question: "How does Wunderkint approach marketing differently?",
      answer:
        "We combine creativity with data-driven strategy. Our campaigns are designed to inspire audiences while delivering measurable ROI, making us a trusted choice for brands seeking visionary marketing.",
    },
    {
      id: "marketing-faq-3",
      question: "What makes Wunderkint the best marketing agency?",
      answer:
        "Wunderkint is considered among the best marketing agencies because we move beyond short-term campaigns. We design strategies that build loyalty, scale reach, and create lasting brand recognition.",
    },
    {
      id: "marketing-faq-4",
      question: "How do marketing services help my business grow?",
      answer:
        "Marketing services drive awareness, attract customers, and strengthen loyalty. At Wunderkint, we craft campaigns that spark meaningful connections and measurable growth.",
    },
    {
      id: "marketing-faq-5",
      question: "Does Wunderkint offer full-service marketing solutions?",
      answer:
        "Yes. From affiliate and social media to SEO, PR, and paid advertising, Wunderkint provides a full suite of marketing services. Our end-to-end approach ensures your brand presence is powerful and consistent.",
    },
    {
      id: "marketing-faq-6",
      question: "How is Wunderkint different from other marketing agencies?",
      answer:
        "Most agencies focus on execution. Wunderkint delivers transformation. We combine creative storytelling, strategic insight, and cutting-edge tools to ensure your marketing inspires and converts.",
    },
    {
      id: "marketing-faq-7",
      question:
        "Can Wunderkint’s marketing services support both startups and enterprises?",
      answer:
        "Yes. We help startups gain visibility with bold campaigns and support enterprises in scaling global strategies. Our services are adaptable and designed to match ambition.",
    },
    {
      id: "marketing-faq-8",
      question: "How do I get started with Wunderkint marketing services?",
      answer:
        "It begins with clarity. Select the marketing services you need and our team will guide you through a clear, strategy-first process. Together, we will create campaigns that inspire, connect, and deliver measurable impact.",
    },
  ],

  ai: [
    {
      id: "ai-faq-1",
      question: "What types of AI services does Wunderkint provide?",
      answer:
        "Wunderkint provides AI services including chatbots, video and audio generation, content creation, CGI ads, and advanced AI integrations. Each solution is designed to make creativity smarter and businesses more adaptive.",
    },
    {
      id: "ai-faq-2",
      question:
        "How does Wunderkint approach Artificial Intelligence differently?",
      answer:
        "We combine intelligence with artistry. Our Artificial Intelligence services are not just about automation but about creating meaningful, innovative experiences that give brands an edge.",
    },
    {
      id: "ai-faq-3",
      question: "What makes Wunderkint the best AI agency?",
      answer:
        "Wunderkint is considered among the best AI agencies because we redefine how creativity meets intelligence. Our solutions are designed to inspire, scale, and keep brands future-ready.",
    },
    {
      id: "ai-faq-4",
      question: "How do AI services help my business grow?",
      answer:
        "AI services streamline operations, reduce costs, and unlock new creative possibilities. Wunderkint ensures AI is tailored to your brand’s vision, delivering measurable growth and innovation.",
    },
    {
      id: "ai-faq-5",
      question: "Does Wunderkint offer full-service AI solutions?",
      answer:
        "Yes. From consulting and integrations to content, video, and design, Wunderkint offers a complete suite of AI services under one roof. Our solutions keep your brand consistent, intelligent, and innovative.",
    },
    {
      id: "ai-faq-6",
      question:
        "How is Wunderkint different from other Artificial Intelligence agencies?",
      answer:
        "Most Artificial Intelligence agencies focus on technology alone. Wunderkint blends AI with creativity and strategy, producing experiences that are visionary, sharp, and impactful.",
    },
    {
      id: "ai-faq-7",
      question:
        "Can Wunderkint’s AI services support both startups and enterprises?",
      answer:
        "Yes. We help startups adopt AI tools for faster growth and support enterprises in building advanced AI ecosystems. Our services adapt to scale and ambition.",
    },
    {
      id: "ai-faq-8",
      question: "How do I get started with Wunderkint AI services?",
      answer:
        "It starts with a conversation. Select the AI services you need and our team will guide you through a clear, strategy-first process. Together, we will design AI-powered solutions that transform your brand.",
    },
  ],
};
