import { Metadata } from 'next';
// import Script from 'next/script';
import Hero from "@/components/Sections/Home/Hero/Hero";
import BrandsSlider from "@/components/Sections/Home/BrandsSlider/BrandsSlider";
import TestimonialsSection from "@/components/Sections/Home/TestimonialsSection/TestimonialsSection";
import InfoSplit from "@/components/Sections/InfoSplit/InfoSplit";
import HomeTagline from "@/components/Sections/Home/HomeTagline/HomeTagline";
import StackedScroll from "@/components/UI/StackedScroll/StackedScroll";
import AboutTagline from "@/components/Sections/About/Tagline/AboutTagline";
import DefinitionCard from '@/components/Sections/About/DefinitionCard/DefinitionCard';
import FoundersSection from '@/components/Sections/About/FoundersCard/FoundersSection';
import SEOStructuredData from "@/components/SEO/SEOStructuredData";


// Import the about data
import { ABOUT_DATA } from "@/data/about";

// Generate metadata for SEO
export const metadata: Metadata = {
    title: "About Us | Wunderkint - Creative Agency Transforming Brands",
    description:
        "Learn about Wunderkint - a global creative agency with 150+ experts delivering innovative branding, design, tech, and marketing solutions. Our story, team, and values.",
    keywords: [
        "about wunderkint",
        "creative agency",
        "design agency",
        "digital agency",
        "our story",
        "our team",
        "company values",
        "mission vision"
    ],
    openGraph: {
        title: "About Wunderkint | Your Creative Partners in Growth",
        description:
            "Discover Wunderkint's journey from a small Mumbai studio to a global creative powerhouse. Meet our team, learn our values, and see why 500+ brands trust us.",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://wunderkint.com"}/about`,
        siteName: "Wunderkint",
        images: [
            {
                url: "/images/og/about.jpg",
                width: 1200,
                height: 630,
                alt: "Wunderkint - Creative Agency",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Wunderkint | Creative Agency Transforming Brands",
        description:
            "From Mumbai to the world - discover how Wunderkint became a leading creative agency with 150+ experts across 3 continents.",
        images: ["/images/og/about.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://wunderkint.com"}/about`,
    },
};

export default function AboutPage() {
    const data = ABOUT_DATA;

    return (
        <>
            <SEOStructuredData page="about" />

            {/* Hero Section */}

            <Hero
                title={false}
                subtitle={false}
                showSearch={false}
                showBrandSlider={true}
                videoSrc={data.hero.videoSrc}
                poster={data.hero.poster}
                search={undefined}
            />


            <div className="bodySectionLayout">

                {/* Info Split Sections */}
                {data.infoSplit?.[0] && (
                    <InfoSplit
                        title={data.infoSplit[0].title}
                        body={data.infoSplit[0].body}
                        cta={data.infoSplit[0].cta}
                    />
                )}

                {data.wunderkintDefinition && (
                    <DefinitionCard
                        image={data.wunderkintDefinition.image}
                        imageAlt={data.wunderkintDefinition.imageAlt}
                        definition={data.wunderkintDefinition.definition}
                        backgroundColor={data.wunderkintDefinition.backgroundColor}
                        imagePosition="left"
                    />
                )}

                {data.infoSplit?.[1] && (
                    <InfoSplit
                        title={data.infoSplit[1].title}
                        body={data.infoSplit[1].body}
                        cta={data.infoSplit[1].cta}
                    />
                )};

            </div>

            {/* Stacked Blocks */}
            {data.process && (
                <>
                    {data.process?.heading && (
                        <HomeTagline
                            heading={data.process.heading}
                            variant="service"
                            textAlign="center"
                        />
                    )}
                    <StackedScroll
                        blocks={data.process.blocks}
                        layout="2-column"
                    />
                </>
            )}

            {data.aboutTagline && (
                <AboutTagline text={data.aboutTagline.text} />
            )}

            <div className="bodySectionLayout">

                {/* Info Split Sections */}
                {data.infoSplit?.[2] && (
                    <InfoSplit
                        title={data.infoSplit[2].title}
                        body={data.infoSplit[2].body}
                        cta={data.infoSplit[2].cta}
                    />
                )}

                {/* Founders Card */}
                {data.founders && <FoundersSection founders={data.founders} />}


                {/* Info Split Sections */}
                {data.infoSplit?.[3] && (
                    <InfoSplit
                        title={data.infoSplit[3].title}
                        body={data.infoSplit[3].body}
                        cta={data.infoSplit[3].cta}
                    />
                )}

                {/* Brands Slider */}
                <BrandsSlider />

                <TestimonialsSection />;

            </div>
        </>
    );
}