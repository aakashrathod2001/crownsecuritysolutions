import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button, { ArrowIcon } from '../../UI/Button/Button';
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
                                    src="/images/qualification-standards.png"
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

                                <Link href="/careers" passHref>
                                    <Button
                                        text={buttonText}
                                        onClick={onButtonClick}
                                        variant="primary"
                                        iconBgColor="#F6292F"
                                        textColor="#F6292F"
                                        icon={<ArrowIcon color="#FFFFFF" />}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualificationStandardsSection;
