'use client';

import React, { useState } from 'react';
import Button, { ArrowIcon } from '@/components/UI/Button/Button';
import { services } from '@/data/services';
import styles from './ContactForm.module.scss';

interface FormData {
  name: string;
  email: string;
  contactNumber: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  contactNumber?: string;
  service?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    contactNumber: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateContactNumber = (number: string): boolean => {
    const numberRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
    return numberRegex.test(number);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email ID is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
    } else if (!validateContactNumber(formData.contactNumber)) {
      newErrors.contactNumber = 'Please enter a valid contact number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        contactNumber: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonSubmit = () => {
    // Create a synthetic form event
    const formEvent = {
      preventDefault: () => {},
      target: document.createElement('form')
    } as unknown as React.FormEvent;
    
    handleSubmit(formEvent);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      service: value
    }));
    
    // Clear error when user selects a service
    if (errors.service) {
      setErrors(prev => ({
        ...prev,
        service: undefined
      }));
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.formSection}>
        <div className={styles.formHeader}>
          <h3 className={styles.formTitle}>Thank You!</h3>
        </div>
        <div className={styles.successMessage}>
          <p>Your message has been successfully submitted. We will get back to you soon!</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formSection}>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>Talk to an expert</h3>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            aria-label="Name"
            value={formData.name}
            onChange={handleInputChange}
            className={`${styles.input} ${errors.name ? styles.error : ''}`}
            required
          />
          {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
        </div>

        <div className={styles.field}>
          <input
            type="email"
            name="email"
            placeholder="Email ID*"
            aria-label="Email ID"
            value={formData.email}
            onChange={handleInputChange}
            className={`${styles.input} ${errors.email ? styles.error : ''}`}
            required
          />
          {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
        </div>

        <div className={styles.field}>
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number*"
            aria-label="Contact Number"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className={`${styles.input} ${errors.contactNumber ? styles.error : ''}`}
            required
          />
          {errors.contactNumber && <span className={styles.errorMessage}>{errors.contactNumber}</span>}
        </div>

        <div className={styles.field}>
          <div className={styles.selectWrapper}>
            <select
              name="service"
              aria-label="Services Interested In"
              value={formData.service}
              onChange={handleServiceChange}
              className={`${styles.select} ${errors.service ? styles.error : ''}`}
              required
            >
              <option value="" disabled>
                Services Interested In*
              </option>
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.title}
                </option>
              ))}
            </select>
            <span className={styles.selectIcon} aria-hidden="true">
              <svg viewBox="0 0 16 10" focusable="false" aria-hidden="true">
                <path
                  d="M1 1l7 7 7-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          {errors.service && <span className={styles.errorMessage}>{errors.service}</span>}
        </div>

        <div className={styles.field}>
          <textarea
            name="message"
            placeholder="Message*"
            aria-label="Message"
            value={formData.message}
            onChange={handleInputChange}
            className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
            rows={4}
            required
          />
          {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
        </div>

        <div className={styles.submitRow}>
          <Button
            text={isSubmitting ? "Submitting..." : "Submit"}
            icon={<ArrowIcon />}
            className={styles.submitButton}
            textColor="#f6292f"
            iconBgColor="#f6292f"
            onClick={handleButtonSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
