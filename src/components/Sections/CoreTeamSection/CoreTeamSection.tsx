'use client';

import React from 'react';
import { TeamMember, coreTeamData, teamSectionInfo } from '@/data/coreTeam';
import styles from './CoreTeamSection.module.scss';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';

// CoreTeamSection.tsx
const CoreTeamSection: React.FC = () => {
    const coreTeam = coreTeamData.filter(member => member.isCore);
    const otherTeam = coreTeamData.filter(member => !member.isCore);

    return (
        <section className={styles.coreTeamSection}>
            <div className="pageLayout">
                <div className="full-width-container">
                    <div className={styles.sectionHeader}>
                        <SectionHeader
                            label=""
                            title={teamSectionInfo.title}
                            highlightedWords={teamSectionInfo.highlightedWords}
                        />
                    </div>

                    <div className={styles.teamContent}>
                        {/* Core Team */}
                        <div className={styles.teamSection}>
                            {coreTeam.map((member) => (
                                <TeamCard key={member.id} member={member} isCore={true} />
                            ))}
                        </div>

                        {/* Other Team Members */}
                        <div className={styles.teamSection}>
                            {otherTeam.map((member) => (
                                <TeamCard key={member.id} member={member} isCore={false} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// TeamCard component
interface TeamCardProps {
    member: TeamMember;
    isCore: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, isCore }) => {
    return (
        <article className={`${styles.teamCard} ${isCore ? styles.coreCard : styles.otherCard}`}>
            <div className={styles.cardImage}>
                <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                />
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardName}>{member.name}</h3>
                <p className={styles.cardPosition}>{member.position}</p>
            </div>
        </article>
    );
};

export default CoreTeamSection;