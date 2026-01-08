import React from "react";
import styles from "./ProcessSection.module.scss";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";
import StackedScroll from "@/components/UI/StackedScroll/StackedScroll";

const ProcessSection = () => {
    return (
        <div className={styles.ProcessSection}>
            <div className={styles.SectionHeader}>
                {/* Header */}
                <SectionHeader
                    label=""
                    title="The Process of Crown Securities"
                    subtitle="At Crown Security Agency, we follow a transparent, step-by-step system to ensure every deployment is planned, compliant, and performance-driven, supported by digital tools, expert supervision, and real-time reporting."
                    highlightedWords={["The Process"]}
                />
            </div>
            <StackedScroll />
        </div>
    );
};

export default ProcessSection;
