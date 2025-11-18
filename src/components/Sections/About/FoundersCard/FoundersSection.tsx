// import Image from "next/image";
import styles from "./FoundersSection.module.scss";
import Heading from "@/components/UI/Heading/Heading";
import Button from "@/components/UI/Button/Button";
import FounderCard from "@/components/UI/FoundersCard/FoundersCard";

interface Founder {
  name: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  backgroundColor?: string;
  imagePosition?: "left" | "right";
}

interface FoundersSectionProps {
  founders: Founder[];
}

export default function FoundersSection({ founders }: FoundersSectionProps) {
  return (
    <section className={styles.section}>
      <div className="pageLayout">
        <div className="full-width-container">
          {/* Section Heading */}
          <div className={styles.headerRow}>
            <Heading
              data={{ second: "Founders & Directors" }}
              className={styles.portfolioHeadingRow}
            />
            <div className={styles.ctaWrapper}>
              <Button
                text="Contact Us"
                href="/contact"
                className={styles.portfolioButton}
              />
            </div>
          </div>

          {/* Founders List */}
          {founders.map((founder, idx) => (
            <FounderCard
              key={idx}
              {...founder}
              imagePosition={idx % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
