import HeroSection from "@/components/Sections/HeroSection/HeroSection";
import { certificationHero } from "@/data/heroSections";
import "./page.module.scss";

export default function Certification() {
  return (
    <>
      <HeroSection {...certificationHero} />
    </>
  );
}
