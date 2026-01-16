import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceSection.module.scss';
import Button, { ArrowIcon } from '../../UI/Button/Button';
import { ServiceData } from '@/data/serviceSectionData';

interface ServiceSectionProps {
  variant?: 'left' | 'right';
  service?: ServiceData;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ variant = 'left', service }) => {
  const isLeft = variant === 'left';

  // Fallback to first service if no service prop provided
  const currentService = service || {
    label: "SERVICE 01",
    title: "Corporate Park Security",
    description: "Crown's Corporate Park Security solutions are designed to protect large office complexes while maintaining a professional and welcoming environment.",
    targetSegment: "MNCs, IT Parks, Business Parks, and Corporate Offices.",
    scopeOfWork: ["Visitor verification and employee ID checks."],
    image: "https://placehold.co/600x600.png",
    buttons: []
  };

  return (
    <section className={`${styles.serviceSection} ${isLeft ? styles.leftLayout : styles.rightLayout}`}>
      <div className="pageLayout">
        <div className="full-width-container">
          <div className={styles.container}>
            <div className={styles.imageWrapper}>
              <Image
                src={currentService.image}
                alt={currentService.title}
                fill
                className={styles.image}
                priority
              />
            </div>

            <div className={styles.content}>
              <div className={styles.titleSection}>
                <span className={styles.label}>{currentService.label}</span>
                <h2 className={styles.title}>{currentService.title}</h2>
              </div>
              <div className={styles.descContainer}>
                <p className={styles.description}>{currentService.description}</p>

                <div className={styles.targetSegment}>
                  <strong>Target Segment:</strong> {currentService.targetSegment}
                </div>

                <div className={styles.scopeOfWork}>
                  <p className={styles.scopeTitle}>Scope of Work:</p>
                  <ul className={styles.scopeList}>
                    {currentService.scopeOfWork.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

              </div>

              {currentService.buttons && currentService.buttons.length > 0 && (
                <div className={styles.buttonGroup}>
                  {currentService.buttons.map((button: any, index: number) => {
                    const ButtonContent = (
                      <Button
                        key={index}
                        text={button.text}
                        variant={button.variant || 'primary'}
                        iconBgColor={button.iconBgColor}
                        textColor={button.textColor}
                        onClick={button.onClick}
                        icon={<ArrowIcon color="#FFFFFF" />}
                      />
                    );

                    return button.href ? (
                      <Link key={index} href={button.href}>
                        {ButtonContent}
                      </Link>
                    ) : (
                      ButtonContent
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
