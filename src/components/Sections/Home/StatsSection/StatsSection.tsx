"use client";

import React from "react";
import styles from "./StatsSection.module.scss";
import Heading from "@/components/UI/Heading/Heading";
import StatCard from "@/components/UI/StatCard/StatCard";
import { headings } from "@/data/headings";

const stats = [
  { label: "Brands Brought to Life", value: 42 },
  { label: "Clients We’ve Partnered With", value: 42 },
  { label: "Recognitions Earned", value: 42 },
  { label: "Creative Minds on Our Team", value: 42 },
];

const StatsSection = () => {
  return (
    <section className={styles.section}>
      <div className="pageLayout">
        <div className="full-width-container">
          <Heading data={headings.statsSection} />

          <div className={styles.grid}>
            {stats.map((stat, i) => (
              <StatCard key={i} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
