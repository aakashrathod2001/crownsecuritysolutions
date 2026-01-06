export interface CTAContent {
  label: string;
  title: string;
  textColor?: string;
  showStripes?: boolean;
  overlayOpacity?: number;
}

// Mission CTA - Used on About page
export const missionCTA: CTAContent = {
  label: "Our Mission",
  title: "To serve you with ease and convenience by providing protection and security through elite, trained guards, at any hour of the day or night.",
  textColor: "#ffffff",
  showStripes: true,
  overlayOpacity: 0.7
};

// Example: Vision CTA - Can be used on other pages
export const visionCTA: CTAContent = {
  label: "Our Vision",
  title: "To be India's most trusted security partner, setting industry standards through innovation and excellence.",
  textColor: "#ffffff",
  showStripes: true,
  overlayOpacity: 0.75
};

// Example: Values CTA - Can be used on other pages
export const valuesCTA: CTAContent = {
  label: "Our Values",
  title: "Integrity, dedication, and professionalism guide every action we take to protect what matters most to you.",
  textColor: "#ffffff",
  showStripes: false,
  overlayOpacity: 0.65
};

// Example: Light theme CTA with image
export const lightCTA: CTAContent = {
  label: "Get Started",
  title: "Experience world-class security solutions tailored to your needs.",
  textColor: "#ffffff",
  showStripes: false,
  overlayOpacity: 0.5
};

// Example: Simple CTA without image (solid background)
export const simpleCTA: CTAContent = {
  label: "Contact Us",
  title: "Ready to secure your business? Let's talk about your security needs.",
  textColor: "#ffffff",
  showStripes: true,
  overlayOpacity: 0
};
