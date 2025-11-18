"use client";

import React from "react";
import styles from "./BenefitsSection.module.scss";
import Heading, { HeadingData } from "@/components/UI/Heading/Heading";
import Button from "@/components/UI/Button/Button";

export type Benefit = {
    title: string;
    description: string;
};

type Props = {
    heading: HeadingData; // 👈 Heading component expects HeadingData
    ctaText: string;
    ctaHref: string;
    benefits: Benefit[];
};

const BenefitsSection: React.FC<Props> = ({ heading, ctaText, ctaHref, benefits }) => {
    return (
        <section className={styles.section}>
            <div className="pageLayout">
                <div className="full-width-container">
                    <div className={styles.headerRow}>
                        <Heading data={heading} className={styles.benefitsHeadingRow} />
                        <div className={styles.ctaWrapper}>
                            <Button
                                text={ctaText}
                                href={ctaHref}
                                className={styles.benefitsButton}
                            />
                        </div>
                    </div>

                    <div className={styles.grid}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className={styles.card}>
                                <h3 className={styles.cardTitle}>{benefit.title}</h3>
                                <p className={styles.cardDescription}>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
