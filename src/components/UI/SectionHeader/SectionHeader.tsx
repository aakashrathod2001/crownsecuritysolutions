import React from 'react';
import styles from './SectionHeader.module.scss';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  highlightedWords?: string[];
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  highlightedWords = []
}) => {
  // Function to render title with highlighted words
  const renderHighlightedTitle = (titleText: string, highlights: string[]) => {
    if (highlights.length === 0) {
      return titleText.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < titleText.split('\n').length - 1 && <br />}
        </React.Fragment>
      ));
    }

    // Create a regex pattern for all highlighted words
    const highlightRegex = new RegExp(`(${highlights.join('|')})`, 'gi');

    return titleText.split('\n').map((line, lineIndex) => {
      const parts = line.split(highlightRegex);

      return (
        <React.Fragment key={lineIndex}>
          {parts.map((part, partIndex) => {
            const isHighlighted = highlights.some(word =>
              word.toLowerCase() === part.toLowerCase()
            );

            return isHighlighted ? (
              <span key={partIndex} className={styles.highlight}>
                {part}
              </span>
            ) : (
              part
            );
          })}
          {lineIndex < titleText.split('\n').length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <div className={styles.header}>
      <div className={styles.eyebrow}>
        {label && <span className={styles.label}>{label}</span>}
        <h2 className={styles.title}>
          {renderHighlightedTitle(title, highlightedWords)}
        </h2>
      </div>
      {subtitle && (
        <p className={styles.subtitle}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
