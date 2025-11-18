"use client";

import React from "react";
import styles from "./ServiceHero.module.scss";
import Button from "@/components/UI/Button/Button";
import Heading, { HeadingData } from "@/components/UI/Heading/Heading";

type HeroProblemCard = {
    title: string;
    description: string;
};

type Props = {
    title: string;
    highlight?: string;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
    backgroundColor?: string;
    backgroundImage?: string;

    problemHeading?: HeadingData;   // 👈
    problemCards?: HeroProblemCard[];
    problemCardColor?: string;
    problemFooter?: string;
};

const ServiceHero: React.FC<Props> = ({
    title,
    highlight,
    subtitle,
    ctaText,
    ctaHref,
    backgroundColor,
    backgroundImage,
    problemHeading,
    problemCards,
    problemCardColor,
    problemFooter,
}) => {
    return (
        <>
            {/* Top Hero */}
            <section
                className={styles.hero}
                style={{
                    background: backgroundColor || undefined,
                    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className={styles.content}>
                    <div className={styles.titleCol}>
                        <h1 className={styles.title}>
                            {title}{" "} <br />
                            {highlight && <span className={styles.highlight}>{highlight}</span>}
                        </h1>
                        <p className={styles.subtitle}>{subtitle}</p>
                    </div>
                    <Button text={ctaText} href={ctaHref} className={styles.ctaButton} />
                </div>
            </section>

            {/* Problem Section */}
            {problemCards && (
                <section className={styles.problemSection}>
                    <div className={styles.problemInnerSection}>
                        <div className="pageLayout">
                            <div className="full-width-container">
                                {problemHeading && (
                                    <Heading data={problemHeading} className={styles.problemHeading} />
                                )}

                                <div className={styles.problemGrid}>
                                    {problemCards.map((card, index) => (
                                        <div
                                            key={index}
                                            className={styles.problemCard}
                                            style={{ backgroundColor: problemCardColor || "#F15151" }}
                                        >
                                            <p className={styles.cardTitle}>{card.title}</p>
                                            <p className={styles.cardDescription}>{card.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.problemFooter}>
                        {problemFooter && <p className={styles.problemFooterText}>{problemFooter}</p>}
                    </div>
                </section >
            )}
        </>
    );
};

export default ServiceHero;
