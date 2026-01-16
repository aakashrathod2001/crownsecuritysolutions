// app/services/page.tsx
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import ServiceSection from '@/components/Sections/ServiceSection/ServiceSection';
import { servicespageHero } from '@/data/heroSections';
import { serviceData } from '@/data/serviceSectionData';
import styles from './page.module.scss';


export default function ServicesPage() {
    return (
        <>
            <HeroSection {...servicespageHero} />
            <div className={styles.pageLayout}>
                <ServiceSection service={serviceData[0]} />
                <ServiceSection variant='right' service={serviceData[1]} />
                <ServiceSection service={serviceData[0]} />
                <ServiceSection variant='right' service={serviceData[1]} />
                <ServiceSection service={serviceData[0]} />
                <ServiceSection variant='right' service={serviceData[1]} />
            </div>

        </>
    );
}
