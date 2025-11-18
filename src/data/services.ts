import { getSEOUrlBySlug } from "@/lib/urlMappings";

// Slugify helper to normalize service names
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\//g, "-")            // UI/UX → ui-ux
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Helper to create service links based on category
const s = (name: string, category: string) => ({
  name,
  slug:
    getSEOUrlBySlug(slugify(name), "service") ||
    `/${category}/${slugify(name)}`,
});

export const services = [
  // ---------------------------------------------------------
  // BRANDING
  // ---------------------------------------------------------
  s("Logo Design", "branding"),
  s("Brochure Design", "branding"),
  s("Poster Design", "branding"),
  s("Event Management", "branding"),
  s("Flyer Design", "branding"),
  s("Book Covers", "branding"),
  s("Catalog Design", "branding"),
  s("Menu Design", "branding"),
  s("Pattern Design", "branding"),
  s("Book Design", "branding"),
  s("3D Design", "branding"),
  s("Infographic Design", "branding"),
  s("Landscape Design", "branding"),
  s("Logo Animation", "branding"),
  s("Print Design", "branding"),
  s("App Design", "branding"),
  s("Rebranding", "branding"),
  s("Social Media Design", "branding"),
  s("Visual Design", "branding"),
  s("Brand Style Guides", "branding"),
  s("Icon Design", "branding"),
  s("Social Media Management", "branding"),
  s("Campaign Planning", "branding"),
  s("Brand Launch", "branding"),
  s("Traditional Advertising", "branding"),
  s("Store Launches", "branding"),

  // ---------------------------------------------------------
  // CONTENT
  // ---------------------------------------------------------
  s("Video Editing", "content"),
  s("Content Writing", "content"),
  s("Transcription", "content"),
  s("Creative Copywriting", "content"),
  s("Storyboards", "content"),
  s("Motion Graphics", "content"),
  s("Art & Illustration", "content"),
  s("Ad Copy", "content"),
  s("Content Marketing", "content"),
  s("Video Production", "content"),
  s("Film Production", "content"),
  s("UGC Videos", "content"),
  s("UX Writing", "content"),
  s("Product Videos", "content"),
  s("Scriptwriting", "content"),
  s("CGI Animation", "content"),
  s("Product Photographers", "content"),
  s("Proofreading & Editing", "content"),
  s("Social Media Videos", "content"),
  s("Podcast Writing", "content"),
  s("3D Product Animation", "content"),
  s("VFX Production", "content"),
  s("Social Media Copywriting", "content"),
  s("Sales Copy", "content"),
  s("Music Promotion", "content"),
  s("Animation Production", "content"),
  s("Podcast Production", "content"),
  s("3D Video Production", "content"),
  s("4D Video Production", "content"),

  // ---------------------------------------------------------
  // TECH
  // ---------------------------------------------------------
  s("WordPress Development", "tech"),
  s("Website Development", "tech"),
  s("Website Design", "tech"),
  s("Webflow Development", "tech"),
  s("Mobile App Development", "tech"),
  s("Web Applications", "tech"),
  s("Software Development", "tech"),
  s("UI/UX Design", "tech"),
  s("Android App Development", "tech"),
  s("Game Development", "tech"),
  s("Data Processing", "tech"),
  s("Marketing Automation", "tech"),
  s("Tech Consulting", "tech"),
  s("iOS App Development", "tech"),
  s("Email Automations", "tech"),
  s("E-Commerce Development", "tech"),
  s("Chatbot Development", "tech"),
  s("Cross-platform Development", "tech"),
  s("Shopify Website", "tech"),

  // ---------------------------------------------------------
  // MARKETING
  // ---------------------------------------------------------
  s("Affiliate Marketing", "marketing"),
  s("Social Media Marketing", "marketing"),
  s("Search Engine Marketing", "marketing"),
  s("Project Management", "marketing"),
  s("Email Marketing", "marketing"),
  s("Marketing Strategy", "marketing"),
  s("Search Engine Optimization", "marketing"),
  s("Influencer Marketing", "marketing"),
  s("Lead Generation", "marketing"),
  s("Product Management", "marketing"),
  s("Public Relations", "marketing"),
  s("Press Releases", "marketing"),
  s("Display Advertising", "marketing"),
  s("Programmatic Ad", "marketing"),
  s("Facebook Ads Campaign", "marketing"),
  s("Instagram Marketing", "marketing"),
  s("Video Marketing", "marketing"),
  s("E-Commerce Marketing", "marketing"),
  s("Event Marketing", "marketing"),
  s("Paid Social Media", "marketing"),
  s("Media Planning & Buying", "marketing"),
  s("Intellectual Property Management", "marketing"),
  s("Shopify Marketing", "marketing"),

  // ---------------------------------------------------------
  // AI
  // ---------------------------------------------------------
  s("AI Chatbot", "ai"),
  s("AI Video Generation", "ai"),
  s("AI Movies", "ai"),
  s("AI for Businesses", "ai"),
  s("AI Gifs", "ai"),
  s("AI Audio Generation", "ai"),
  s("AI Content", "ai"),
  s("AI Podcasts", "ai"),
  s("AI Consulting", "ai"),
  s("AI Product Photography", "ai"),
  s("AI Integrations", "ai"),
  s("AI Artists", "ai"),
  s("AI Video Avatars", "ai"),
  s("AI Music Videos", "ai"),
  s("AI Video Art", "ai"),
  s("AI based CGI Ads", "ai"),
  s("AI Product Lookbooks", "ai"),
  s("AI based Key Visuals", "ai"),
  s("AI Clone Videos", "ai"),
];
