'use client';

import React from 'react';
import { ValueCardProps, CoreValue, coreValuesData } from '@/data/coreValues';
import styles from './CoreValuesSection.module.scss';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';

// CoreValues.tsx
interface CoreValuesSectionProps {
    values?: CoreValue[];
    title?: string;
    subtitle?: string;
}

const CoreValuesSection: React.FC<CoreValuesSectionProps> = ({
    values,
    title = "Core Values",
    subtitle
}) => {
    // Use provided values or fallback to default core values data
    const displayValues = values || coreValuesData;

    return (
        <section className={styles.coreValuesSection}>
            <div className="pageLayout">
                <div className="full-width-container">
                    <div className={styles.SectionHeader}>
                        {/* Header */}
                        <SectionHeader
                            label=""
                            title={title}
                            subtitle={subtitle}
                            highlightedWords={["Core Values"]}
                        />
                    </div>

                    <div className={styles.coreValuesGrid}>
                        {displayValues.map((value) => (
                            <ValueCard key={value.id} value={value} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// ValueCard component
const ValueCard: React.FC<ValueCardProps> = ({ value }) => {
    return (
        <article className={styles.valueCard}>
            <div
                className={styles.valueCardIcon}
                style={{ backgroundColor: value.iconColor }}
                aria-hidden="true"
            />
            <h2 className={styles.valueCardTitle}>{value.title}</h2>
            <p className={styles.valueCardDescription}>{value.description}</p>
        </article>
    );
};

export default CoreValuesSection;
