import Image from "next/image";
import styles from "./FoundersCard.module.scss";
import Heading from "@/components/UI/Heading/Heading";
import Button from "@/components/UI/Button/Button";

interface Founder {
    name: string;
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
    backgroundColor?: string;
    imagePosition?: "left" | "right";
}

export default function FoundersCard({
    name,
    title,
    description,
    image,
    imageAlt = "Founder image",
    backgroundColor = "#F15151",
    imagePosition = "left",
}: Founder) {
    return (
        <section className={styles.section}>

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
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={styles.Image}
                        priority
                        unoptimized
                    />
                </div>

                <div className={styles.textWrapper}>
                    <div className={styles.textBox}>
                        <div className={styles.titleCol}>
                            <h3 className={styles.name}>{name}</h3>
                            <p className={styles.title}>{title}</p>
                        </div>

                        <p className={styles.description}>{description}</p>
                    </div>
                </div>
            </div>

        </section>
    );
}
