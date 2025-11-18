"use client";

import React from "react";
import Image from "next/image";
import styles from "./TableViewSection.module.scss";
import Button from "@/components/UI/Button/Button";
import Heading from "@/components/UI/Heading/Heading";
import type { HeadingData } from "@/components/UI/Heading/Heading";

type TableRow = {
    left: string;
    right: string;
};

type Props = {
    heading: HeadingData;
    ctaText: string;
    ctaHref: string;
    items: TableRow[];
    variant?: "default" | "compact";
    leftHeader?: string;
    rightHeader?: string;
    leftIcon?: string;      // Can be text emoji or image path
    rightIcon?: string;     // Can be text emoji or image path
    useImageIcons?: boolean; // New prop to determine if icons are images
};

const TableViewSection: React.FC<Props> = ({
    heading,
    ctaText,
    ctaHref,
    items,
    variant = "default",
    leftHeader = "Problem",
    rightHeader = "Wunderkint Solution",
    leftIcon = "⚠",
    rightIcon = "✓",
    useImageIcons = false
}) => {
    const sectionClassName = variant === "compact"
        ? `${styles.section} ${styles.compact}`
        : styles.section;

    const renderIcon = (icon: string, isLeft: boolean) => {
        if (useImageIcons) {
            return (
                <div className={`${styles.iconContainer} ${isLeft ? styles.leftIconContainer : styles.rightIconContainer}`}>
                    <Image
                        src={icon}
                        alt={isLeft ? leftHeader : rightHeader}
                        width={24}
                        height={24}
                        className={styles.iconImage}
                        unoptimized
                    />
                </div>
            );
        } else {
            return (
                <span className={isLeft ? styles.leftIcon : styles.rightIcon}>
                    {icon}
                </span>
            );
        }
    };

    return (
        <section className={sectionClassName}>
            <div className="pageLayout">
                <div className="full-width-container">
                    <div className={styles.headerRow}>
                        <Heading data={heading} className={styles.tableViewHeadingRow} />
                        <div className={styles.ctaWrapper}>
                            <Button
                                text={ctaText}
                                href={ctaHref}
                                className={styles.tableViewButton}
                            />
                        </div>
                    </div>

                    <div className={styles.tableContainer}>
                        <div className={styles.table}>
                            {/* Table Header */}
                            <div className={styles.tableHeader}>
                                <div className={`${styles.headerCell} ${styles.leftHeader}`}>
                                    {renderIcon(leftIcon, true)}
                                    <span className={styles.headerText}>{leftHeader}</span>
                                </div>
                                <div className={`${styles.headerCell} ${styles.rightHeader}`}>
                                    {renderIcon(rightIcon, true)}
                                    <span className={styles.headerText}>{rightHeader}</span>
                                </div>
                            </div>

                            {/* Table Rows */}
                            <div className={styles.tableBody}>
                                {items.map((item, index) => (
                                    <div key={index} className={styles.tableRow}>
                                        <div className={`${styles.tableCell} ${styles.leftCell}`}>
                                            {item.left}
                                        </div>
                                        <div className={`${styles.tableCell} ${styles.rightCell}`}>
                                            {item.right}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TableViewSection;