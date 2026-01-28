// app/services/page.tsx
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import ServiceSection from '@/components/Sections/ServiceSection/ServiceSection';
import { servicespageHero } from '@/data/heroSections';
import { serviceData } from '@/data/serviceSectionData';
import styles from './page.module.scss';
import InfiniteCarousel from '@/components/Sections/InfiniteCarousel/InfiniteCarousel';

export default function ServicesPage() {
    return (
        <>
            <HeroSection {...servicespageHero} />
            <div className={styles.pageLayout}>
                {serviceData.map((service, index) => (
                    <ServiceSection 
                        key={index}
                        variant={index % 2 === 1 ? 'right' : undefined} 
                        service={service} 
                    />
                ))}
                <InfiniteCarousel
                    speed={35}
                    direction="left"
                    gap={32}
                />;
            </div>
        </>
    );
}
