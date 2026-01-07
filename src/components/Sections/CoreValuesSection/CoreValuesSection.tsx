'use client';

import React from 'react';
import { ValueCardProps, coreValuesData, companyInfo } from '@/data/coreValues';
import styles from './CoreValuesSection.module.scss';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';

// CoreValues.tsx
const CoreValues: React.FC = () => {
    return (
        <section className={styles.coreValuesSection}>
            <div className="pageLayout">
                <div className="full-width-container">
                    <div className={styles.SectionHeader}>
                        {/* Header */}
                        <SectionHeader
                            label=""
                            title="Core Values of Crown Securities"
                            highlightedWords={["Core Values"]}
                        />
                    </div>

                    <div className={styles.coreValuesGrid}>
                        {coreValuesData.map((value) => (
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

export default CoreValues;