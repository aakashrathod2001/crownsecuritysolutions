import ContactUs from '@/components/Sections/ContactUs/ContactUs';

// Enable SSG with ISR (revalidate every 1 hour)
export const revalidate = 3600;

export default function ContactUsPage() {
  return (
    <>
      <div className="bodySectionLayout">
        <ContactUs />;
      </div>
    </>
  );
}
