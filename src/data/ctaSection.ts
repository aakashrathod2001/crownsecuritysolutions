export interface CTAContent {
  label: string;
  title: string;
  textColor?: string;
  showStripes?: boolean;
  overlayOpacity?: number;
}

// Mission CTA - Used on About page
export const homemissionCTA: CTAContent = {
  label: "Our Mission",
  title: "To serve you with ease and convenience by providing protection and security through elite, trained guards, at any hour of the day or night.",
  textColor: "#ffffff",
  showStripes: true,

};

export const aboutmissionCTA: CTAContent = {
  label: "Our Mission",
  title: "To serve you with ease and convenience by providing protection and security through elite, trained guards, at any hour of the day or night.",
  textColor: "#ffffff",
  showStripes: false,

};

// Example: Vision CTA - Can be used on other pages
export const homevisionCTA: CTAContent = {
  label: "Our Vision",
  title: "To become India’s most trusted and technology-driven security agency, known for reliability, compliance, and excellence in manpower management.\nOur goal is to establish a strong operational presence in every major metro and Tier-2 city while redefining service quality through innovation and ethical leadership.",
  textColor: "#ffffff",
  showStripes: true,
};

// // Example: Values CTA - Can be used on other pages
// export const valuesCTA: CTAContent = {
//   label: "Our Values",
//   title: "Integrity, dedication, and professionalism guide every action we take to protect what matters most to you.",
//   textColor: "#ffffff",
//   showStripes: false,
//   overlayOpacity: 0.65
// };

// // Example: Light theme CTA with image
// export const lightCTA: CTAContent = {
//   label: "Get Started",
//   title: "Experience world-class security solutions tailored to your needs.",
//   textColor: "#ffffff",
//   showStripes: false,
//   overlayOpacity: 0.5
// };

// // Example: Simple CTA without image (solid background)
// export const simpleCTA: CTAContent = {
//   label: "Contact Us",
//   title: "Ready to secure your business? Let's talk about your security needs.",
//   textColor: "#ffffff",
//   showStripes: true,
//   overlayOpacity: 0
// };
