interface FormField {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  pattern?: string;
  required: boolean;
  title?: string;
}

interface ContactFormData {
  heading: string;
  subtext: string;
  formAction: string;
  recaptchaKey: string;
  formFields: FormField[];
}

export const contactFormData: ContactFormData = {
  heading: "We build brands that people remember. If you want something that's unforgettable, we're the ones to call. Period.",
  subtext: "Reach out if you're tired of playing it safe and want to make something that stands out in a crowded world. We don't settle. Neither should you.",
  formAction: "https://wk-form-handler.robin-ransom.workers.dev/",
  recaptchaKey: "6LfOPjkrAAAAAGtBHjZQBs1DfN-8QGTuwRUjZbn2",
  formFields: [
    {
      id: "fullName",
      name: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Please enter your full name",
      pattern: "^[A-Za-z\\s]{2,50}$",
      required: true,
      title: "Please enter a valid name (2-50 characters, letters only)"
    },
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Please enter your email address",
      required: true
    },
    {
      id: "mobile",
      name: "mobile",
      label: "Mobile No.",
      type: "tel",
      placeholder: "Please enter your contact number",
      pattern: "^[0-9]{10,15}$",
      required: true,
      title: "Please enter a valid mobile number (10-15 digits)"
    },
    {
      id: "company",
      name: "company",
      label: "Company Name",
      type: "text",
      placeholder: "Please enter your company name",
      pattern: "^[A-Za-z0-9\\s\\-\\.]{2,100}$",
      required: true,
      title: "Please enter a valid company name"
    },
    {
      id: "jobTitle",
      name: "jobTitle",
      label: "Job Title",
      type: "text",
      placeholder: "Please enter your job title",
      pattern: "^[A-Za-z\\s\\-]{2,100}$",
      required: true,
      title: "Please enter a valid job title"
    },
    {
      id: "website",
      name: "website",
      label: "Website",
      type: "url",
      placeholder: "Please enter your website url",
      pattern: "^https?://.*",
      required: true,
      title: "Please enter a valid URL starting with http:// or https://"
    },
    {
      id: "message",
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Please enter your message",
      required: false
    }
  ]
};