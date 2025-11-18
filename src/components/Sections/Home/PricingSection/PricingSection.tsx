"use client";

import styles from "./PricingSection.module.scss";
import Heading from "@/components/UI/Heading/Heading";
import { headings } from "@/data/headings";
import PricingPlans from "@/components/UI/PricingPlans/PricingPlans";

export default function PricingSection() {
  return (
    <section className={styles.section}>
      <div className="pageLayout">
        <div className="full-width-container">
          <Heading data={headings.pricingSection} />
          <PricingPlans className={styles.plans} />
        </div>
      </div>
    </section>
  );
}
