// DefinitionCard.tsx
import Image from "next/image";
import styles from "./DefinitionCard.module.scss";

interface DefinitionProps {
    term: string;
    pronunciation?: string;
    definitions: string[];
}

interface DefinitionCardProps {
    image: string;
    imageAlt?: string;
    imagePosition?: "left" | "right";
    definition: DefinitionProps;
    backgroundColor?: string;
    className?: string;
}

export default function DefinitionCard({
    image,
    imageAlt = "Definition image",
    imagePosition = "left",
    definition,
    backgroundColor = "#F15151",
    className,
}: DefinitionCardProps) {
    return (
        <section className={`${styles.section} ${className || ""}`}>
            <div className="pageLayout">
                <div className="full-width-container">
                    <div
                        className={`${styles.content} ${imagePosition === "right" ? styles.imageRight : ""
                            }`}
                    >
                        <div
                            className={styles.imageWrapper}
                            style={{ backgroundColor }}
                        >
                            <Image
                                src={image}
                                alt={imageAlt}
                                fill
                                className={styles.Image}
                                sizes="(max-width: 768px) 300px, 800px"
                                priority
                                unoptimized
                            />
                        </div>

                        <div className={styles.definitionWrapper}>
                            <div className={styles.definitionBox}>
                                <h2 className={styles.term}>{definition.term}</h2>
                                {definition.pronunciation && (
                                    <p className={styles.pronunciation}>
                                        {definition.pronunciation}
                                    </p>
                                )}
                                <div className={styles.definitions}>
                                    {definition.definitions.map((def, index) => {
                                        // Split the first label (e.g. "(noun):") from the rest of the text
                                        const match = def.match(/^\(([^)]+)\):\s*(.*)$/);
                                        const label = match ? `(${match[1]}):` : "";
                                        const text = match ? match[2] : def;

                                        return (
                                            <p key={index} className={styles.definitionItem}>
                                                {label && (
                                                    <span className={styles.definitionNumber}>
                                                        {label}{" "}
                                                    </span>
                                                )}
                                                {text}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
