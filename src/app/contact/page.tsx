// 'use client';

// import { useState, useEffect, FormEvent, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import styles from './contact.module.scss';
// import { contactFormData } from '@/data/contactData';
// import { Metadata } from "next";
// // import Script from "next/script";
// import SEOStructuredData from "@/components/SEO/SEOStructuredData";


// declare global {
//     interface Window {
//         grecaptcha: {
//             execute: (siteKey: string, options: { action: string }) => Promise<string>;
//             ready: (callback: () => void) => void;
//         };
//     }
// }


// export const metadata: Metadata = {
//     title: "Contact Wunderkint | Let's Build Something Great Together",
//     description:
//         "Reach out to Wunderkint for collaborations, business inquiries, or creative projects. We're here to transform your brand with intelligence and design.",
//     keywords: ["contact wunderkint", "branding agency contact", "hire creative agency"],
//     openGraph: {
//         title: "Contact Wunderkint | Creative Agency for Brands & Businesses",
//         description:
//             "Get in touch with Wunderkint to collaborate on branding, design, or marketing projects. Let's create something unforgettable.",
//         url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://wunderkint.com"}/contact`,
//         siteName: "Wunderkint",
//         images: [
//             {
//                 url: "/images/og/contact.jpg",
//                 width: 1200,
//                 height: 630,
//                 alt: "Contact Wunderkint",
//             },
//         ],
//         locale: "en_US",
//         type: "website",
//     },
//     twitter: {
//         card: "summary_large_image",
//         title: "Contact Wunderkint | Creative Agency for Brands & Businesses",
//         description:
//             "Partner with Wunderkint for branding, design, AI, and marketing excellence. Let's build your next big idea.",
//         images: ["/images/og/contact.jpg"],
//     },
//     robots: { index: true, follow: true },
//     alternates: {
//         canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://wunderkint.com"}/contact`,
//     },
// };


// export default function ContactPage() {
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [activeInput, setActiveInput] = useState<string | null>(null);
//     const formRef = useRef<HTMLFormElement>(null);

//     useEffect(() => {
//         // Load reCAPTCHA script
//         const script = document.createElement('script');
//         script.src = `https://www.google.com/recaptcha/api.js?render=${contactFormData.recaptchaKey}`;
//         script.async = true;
//         document.head.appendChild(script);

//         return () => {
//             // Cleanup script on unmount
//             const scripts = document.querySelectorAll(`script[src*="recaptcha"]`);
//             scripts.forEach(s => s.remove());
//         };
//     }, []);

//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         const form = e.currentTarget;

//         // Manual validation check
//         const formData = new FormData(form);
//         let isValid = true;
//         const invalidFields: string[] = [];

//         // Check required fields
//         contactFormData.formFields.forEach(field => {
//             if (field.required) {
//                 const value = formData.get(field.name) as string;
//                 if (!value || value.trim() === '') {
//                     isValid = false;
//                     invalidFields.push(field.label);
//                 } else if (field.pattern) {
//                     const pattern = new RegExp(field.pattern);
//                     if (!pattern.test(value)) {
//                         isValid = false;
//                         invalidFields.push(`${field.label} (invalid format)`);
//                     }
//                 }
//             }
//         });

//         if (!isValid) {
//             alert(`Please fill the following fields correctly:\n${invalidFields.join('\n')}`);
//             return;
//         }

//         // Honeypot check
//         const honeypot = form.querySelector<HTMLInputElement>('#honeypot');
//         if (honeypot?.value) {
//             alert('Bot detected. Submission blocked.');
//             return;
//         }

//         setIsSubmitting(true);

//         try {
//             // Get reCAPTCHA token
//             await new Promise<void>((resolve) => {
//                 if (window.grecaptcha) {
//                     window.grecaptcha.ready(() => resolve());
//                 } else {
//                     setTimeout(() => resolve(), 1000);
//                 }
//             });

//             const token = await window.grecaptcha.execute(contactFormData.recaptchaKey, {
//                 action: 'submit'
//             });

//             // Set reCAPTCHA token
//             const recaptchaInput = form.querySelector<HTMLInputElement>('#g-recaptcha-response');
//             if (recaptchaInput) {
//                 recaptchaInput.value = token;
//             }

//             // Prepare form data
//             const formData = new FormData(form);

//             // Submit to Cloudflare Worker
//             const response = await fetch(contactFormData.formAction, {
//                 method: 'POST',
//                 body: formData,
//             });

//             const result = await response.json();

//             if (response.ok) {
//                 alert('Thank you for your submission!');
//                 form.reset();
//                 setActiveInput(null);
//             } else {
//                 alert(`Error: ${result.error || 'Submission failed'}`);
//                 console.error('Submission error:', result);
//             }
//         } catch (error) {
//             console.error('Submission failed:', error);
//             alert('Network error. Please try again.');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const handleInputFocus = (inputName: string) => {
//         setActiveInput(inputName);
//     };

//     const handleInputBlur = () => {
//         // Optional: Keep the active state or remove it on blur
//         // setActiveInput(null);
//     };

//     return (
//         <div className={styles.cfBody}>
            
//             <SEOStructuredData page="contact" />

//             <div className="pageLayout">
//                 <div className="full-width-container">
//                     <div className={styles.cfSection}>
//                         <div className={styles.cfMainContainer}>
//                             <div className={`${styles.cfInnerContainer} ${styles.leftPanel}`}>
//                                 <h1>{contactFormData.heading}</h1>
//                                 <p className={styles.cfSubtext}>
//                                     {contactFormData.subtext}
//                                 </p>
//                             </div>

//                             <div className={`${styles.cfInnerContainer} ${styles.rightPanel}`}>
//                                 <form
//                                     ref={formRef}
//                                     className={styles.cfContactForm}
//                                     onSubmit={handleSubmit}
//                                     id="contact-form"
//                                     method="POST"
//                                     noValidate
//                                 >
//                                     <div className={styles.cfFormContainer}>
//                                         {contactFormData.formFields.map((field) => (
//                                             <div key={field.id} className={styles.cfInputGroup}>
//                                                 <span
//                                                     className={`${styles.cfDot} ${activeInput === field.id ? styles.activeDot : ''
//                                                         }`}
//                                                 />
//                                                 <label htmlFor={field.id}>{field.label}</label>
//                                                 {field.type === 'textarea' ? (
//                                                     <textarea
//                                                         id={field.id}
//                                                         name={field.name}
//                                                         placeholder={field.placeholder}
//                                                         rows={3}
//                                                         required={field.required}
//                                                         onFocus={() => handleInputFocus(field.id)}
//                                                         onBlur={handleInputBlur}
//                                                     />
//                                                 ) : (
//                                                     <input
//                                                         id={field.id}
//                                                         name={field.name}
//                                                         type={field.type}
//                                                         placeholder={field.placeholder}
//                                                         pattern={field.pattern}
//                                                         required={field.required}
//                                                         title={field.title}
//                                                         onFocus={() => handleInputFocus(field.id)}
//                                                         onBlur={handleInputBlur}
//                                                     />
//                                                 )}
//                                             </div>
//                                         ))}

//                                         {/* Hidden fields */}
//                                         <input
//                                             type="hidden"
//                                             id="g-recaptcha-response"
//                                             name="g-recaptcha-response"
//                                         />
//                                         <div style={{ display: 'none' }}>
//                                             <label htmlFor="honeypot">Leave this field empty</label>
//                                             <input id="honeypot" name="honeypot" type="text" />
//                                         </div>

//                                         <button
//                                             className={styles.submitBtn}
//                                             type="submit"
//                                             disabled={isSubmitting}
//                                         >
//                                             {isSubmitting ? 'Submitting...' : 'Submit'}
//                                         </button>
//                                     </div>

//                                     <div className={styles.cfDisclaimer}>
//                                         <p>
//                                             Protected by reCAPTCHA –{' '}
//                                             <Link
//                                                 href="https://policies.google.com/privacy"
//                                                 rel="noopener noreferrer"
//                                                 target="_blank"
//                                             >
//                                                 Privacy
//                                             </Link>
//                                             {' & '}
//                                             <Link
//                                                 href="https://policies.google.com/terms"
//                                                 rel="noopener noreferrer"
//                                                 target="_blank"
//                                             >
//                                                 Terms
//                                             </Link>
//                                             .
//                                         </p>
//                                     </div>
//                                 </form>
//                             </div>

//                             <Image
//                                 src="https://cdn.wunderkint.com/contact-hero.webp"
//                                 alt="Statue with camera"
//                                 className={styles.cfStatueImg}
//                                 width={800}
//                                 height={800}
//                                 priority
//                                 unoptimized
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";

import { useState, useEffect, FormEvent, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./contact.module.scss";
import { contactFormData } from "@/data/contactData";
import SEOStructuredData from "@/components/SEO/SEOStructuredData";

declare global {
  interface Window {
    grecaptcha: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      ready: (callback: () => void) => void;
    };
  }
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${contactFormData.recaptchaKey}`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll(`script[src*="recaptcha"]`);
      scripts.forEach((s) => s.remove());
    };
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const invalidFields: string[] = [];

    contactFormData.formFields.forEach((field) => {
      const value = formData.get(field.name) as string;
      if (field.required && (!value || value.trim() === "")) {
        invalidFields.push(field.label);
      } else if (field.pattern && !new RegExp(field.pattern).test(value)) {
        invalidFields.push(`${field.label} (invalid format)`);
      }
    });

    if (invalidFields.length > 0) {
      alert(`Please fill these fields correctly:\n${invalidFields.join("\n")}`);
      return;
    }

    const honeypot = form.querySelector<HTMLInputElement>("#honeypot");
    if (honeypot?.value) {
      alert("Bot detected. Submission blocked.");
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise<void>((resolve) => {
        if (window.grecaptcha) {
          window.grecaptcha.ready(() => resolve());
        } else {
          setTimeout(() => resolve(), 1000);
        }
      });

      const token = await window.grecaptcha.execute(contactFormData.recaptchaKey, {
        action: "submit",
      });

      const recaptchaInput = form.querySelector<HTMLInputElement>(
        "#g-recaptcha-response"
      );
      if (recaptchaInput) recaptchaInput.value = token;

      const response = await fetch(contactFormData.formAction, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert("Thank you for your submission!");
        form.reset();
        setActiveInput(null);
      } else {
        alert(`Error: ${result.error || "Submission failed"}`);
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.cfBody}>
      {/* ✅ Structured Data */}
      <SEOStructuredData page="contact" />

      <div className="pageLayout">
        <div className="full-width-container">
          <div className={styles.cfSection}>
            <div className={styles.cfMainContainer}>
              {/* Left Panel */}
              <div className={`${styles.cfInnerContainer} ${styles.leftPanel}`}>
                <h1>{contactFormData.heading}</h1>
                <p className={styles.cfSubtext}>{contactFormData.subtext}</p>
              </div>

              {/* Right Panel (Form) */}
              <div className={`${styles.cfInnerContainer} ${styles.rightPanel}`}>
                <form
                  ref={formRef}
                  className={styles.cfContactForm}
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className={styles.cfFormContainer}>
                    {contactFormData.formFields.map((field) => (
                      <div key={field.id} className={styles.cfInputGroup}>
                        <span
                          className={`${styles.cfDot} ${
                            activeInput === field.id ? styles.activeDot : ""
                          }`}
                        />
                        <label htmlFor={field.id}>{field.label}</label>
                        {field.type === "textarea" ? (
                          <textarea
                            id={field.id}
                            name={field.name}
                            placeholder={field.placeholder}
                            rows={3}
                            required={field.required}
                            onFocus={() => setActiveInput(field.id)}
                            onBlur={() => setActiveInput(null)}
                          />
                        ) : (
                          <input
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            pattern={field.pattern}
                            required={field.required}
                            title={field.title}
                            onFocus={() => setActiveInput(field.id)}
                            onBlur={() => setActiveInput(null)}
                          />
                        )}
                      </div>
                    ))}

                    <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" />
                    <div style={{ display: "none" }}>
                      <label htmlFor="honeypot">Leave this field empty</label>
                      <input id="honeypot" name="honeypot" type="text" />
                    </div>

                    <button className={styles.submitBtn} type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>

                  <div className={styles.cfDisclaimer}>
                    <p>
                      Protected by reCAPTCHA –{" "}
                      <Link
                        href="https://policies.google.com/privacy"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Privacy
                      </Link>{" "}
                      &{" "}
                      <Link
                        href="https://policies.google.com/terms"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Terms
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              </div>

              {/* Background Image */}
              <Image
                src="https://cdn.wunderkint.com/contact-hero.webp"
                alt="Statue with camera"
                className={styles.cfStatueImg}
                width={800}
                height={800}
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
