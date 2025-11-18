"use client";

import styles from "./TestimonialsSection.module.scss";
import Heading from "@/components/UI/Heading/Heading";
import { headings } from "@/data/headings";
import TestimonialStack from "@/components/UI/TestimonialStack/TestimonialStack";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className="pageLayout">
        <div className="full-width-container" style={{ overflow: "visible" }}>
          <div className={styles.row}>
            <div className={styles.left}>
              <Heading data={headings.testimonialsSection} />
            </div>
            <div className={styles.right}>
              <TestimonialStack items={testimonials} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
