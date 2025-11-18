"use client";

import styles from "./FAQSection.module.scss";
import Heading from "@/components/UI/Heading/Heading";
import Accordion from "@/components/UI/Accordion/Accordion";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

type Props = {
  heading: {
    first?: string;
    second?: string;
    support?: string;
  };
  items: FAQItem[];
};

export default function FAQSection({ heading, items }: Props) {
  return (
    <section className={styles.section}>
      <div className="pageLayout">
        <div className="full-width-container">
          <Heading data={heading} />
          <div className={styles.wrap}>
            <Accordion
              items={items.map((item) => ({
                id: item.id,
                title: item.question,
                content: item.answer,
              }))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
