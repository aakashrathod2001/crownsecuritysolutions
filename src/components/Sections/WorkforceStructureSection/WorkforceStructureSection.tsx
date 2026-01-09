import React from 'react';
import styles from './WorkforceStructureSection.module.scss';
import { WorkforceStructureColumn } from '@/data/workforce';

interface WorkforceStructureSectionProps {
  columns: WorkforceStructureColumn[];
}

const WorkforceStructureSection: React.FC<WorkforceStructureSectionProps> = ({
  columns
}) => {
  return (
    <section className={styles.structureSection}>
      <div className="pageLayout">
        <div className="full-width-container">
          <hr className={styles.sectionContent}></hr>
          <div className={styles.container}>
            <div className={styles.columns}>
              {columns.map((column, index) => (
                <div key={index} className={styles.column}>
                  <h2 className={styles.title}>{column.title}</h2>
                  <p className={styles.description}>{column.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkforceStructureSection;
