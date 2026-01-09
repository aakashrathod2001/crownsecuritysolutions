import React from 'react';
import Image from 'next/image';
import styles from './QualificationStandardsSection.module.scss';

interface QualificationStandardsSectionProps {
    title: string;
    qualifications: string[];
    description: string;
    buttonText: string;
    imageSrc: string;
    imageAlt: string;
    onButtonClick?: () => void;
}

const QualificationStandardsSection: React.FC<QualificationStandardsSectionProps> = ({
    title,
    qualifications,
    description,
    buttonText,
    imageSrc,
    imageAlt,
    onButtonClick
}) => {
    return (
        <section className={styles.qualificationSection}>
            <div className="pageLayout">
                <div className="full-width-container">
                    <hr className={styles.sectionContent}></hr>
                    <div className={styles.container}>
                        <div className={styles.split}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    width={560}
                                    height={560}
                                    className={styles.image}
                                />
                            </div>

                            <div className={styles.content}>
                                <h2 className={styles.title}>{title}</h2>

                                <ul className={styles.qualifications}>
                                    {qualifications.map((qualification, index) => (
                                        <li key={index} className={styles.qualification}>
                                            {qualification}
                                        </li>
                                    ))}
                                </ul>

                                <p className={styles.description}>{description}</p>

                                <button
                                    className={styles.applyButton}
                                    onClick={onButtonClick}
                                    type="button"
                                >
                                    <span className={styles.buttonIcon} aria-hidden="true">
                                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                                            <path d="M1 6H11M6 1L11 6L6 11" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    </span>
                                    <span className={styles.buttonText}>{buttonText}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualificationStandardsSection;
