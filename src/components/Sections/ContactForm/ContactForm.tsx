'use client';

import React from 'react';
import Button, { ArrowIcon } from '@/components/UI/Button/Button';
import styles from './ContactForm.module.scss';

const ContactForm: React.FC = () => {
    return (
        <>
            <div className={styles.formSection}>
                <div className={styles.formHeader}>
                    <h3 className={styles.formTitle}>Talk to an expert</h3>
                </div>
                <form className={styles.form} action="#" method="post">
                    <div className={styles.fieldsGrid}>
                        <div className={styles.field}>
                            <input
                                type="email"
                                name="businessEmail"
                                placeholder="Business Email Address*"
                                aria-label="Business Email Address"
                                required
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.field}>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone number"
                                aria-label="Phone number"
                                className={styles.input}
                            />
                        </div>
                    </div>

                    <div className={styles.fieldsGrid}>
                        <div className={styles.field}>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First name*"
                                aria-label="First name"
                                required
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.field}>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last name*"
                                aria-label="Last name"
                                required
                                className={styles.input}
                            />
                        </div>
                    </div>

                    <div className={styles.field}>
                        <input
                            type="text"
                            name="company"
                            placeholder="Company name*"
                            aria-label="Company name"
                            required
                            className={styles.input}
                        />
                    </div>

                <div className={styles.field}>
                    <div className={styles.selectWrapper}>
                        <select
                            name="country"
                            aria-label="Country"
                            className={styles.select}
                            defaultValue="us"
                            onChange={(event) => event.currentTarget.blur()}
                        >
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="mx">Mexico</option>
                            <option value="uk">United Kingdom</option>
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
                </div>

                <div className={styles.field}>
                    <div className={styles.selectWrapper}>
                        <select
                            name="state"
                            aria-label="State"
                            className={styles.select}
                            defaultValue=""
                            required
                            onChange={(event) => event.currentTarget.blur()}
                        >
                            <option value="" disabled>
                                State*
                            </option>
                            <option value="ny">New York</option>
                            <option value="ca">California</option>
                            <option value="tx">Texas</option>
                            <option value="fl">Florida</option>
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
                </div>

                    <div className={styles.field}>
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            aria-label="City"
                            className={styles.input}
                        />
                    </div>

                <div className={styles.field}>
                    <div className={styles.selectWrapper}>
                        <select
                            name="assistance"
                            aria-label="How can we assist you today"
                            className={styles.select}
                            defaultValue=""
                            required
                            onChange={(event) => event.currentTarget.blur()}
                        >
                            <option value="" disabled>
                                How can we assist you today?**
                            </option>
                            <option value="guarding">Manned guarding</option>
                            <option value="mobile">Mobile patrols</option>
                            <option value="event">Event security</option>
                            <option value="consulting">Security consulting</option>
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
                </div>

                <div className={styles.field}>
                    <div className={styles.selectWrapper}>
                        <select
                            name="duration"
                            aria-label="Duration of Services"
                            className={styles.select}
                            defaultValue=""
                            required
                            onChange={(event) => event.currentTarget.blur()}
                        >
                            <option value="" disabled>
                                Duration of Services*
                            </option>
                            <option value="short">Less than 3 months</option>
                            <option value="mid">3 - 12 months</option>
                            <option value="long">12+ months</option>
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
                </div>

                    <div className={styles.field}>
                        <textarea
                            name="details"
                            placeholder="Please provide additional information about your inquiry.*"
                            aria-label="Additional information"
                            required
                            className={styles.textarea}
                            rows={4}
                        />
                    </div>

                    <div className={styles.checkboxGroup}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                name="newsletter"
                                className={styles.checkbox}
                            />
                            <span>
                                I would like to receive updates and newsletters from GardaWorld.
                            </span>
                        </label>
                    </div>

                    <div className={styles.checkboxGroup}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                name="consent"
                                className={styles.checkbox}
                                required
                            />
                            <span>
                                I acknowledge and consent to the processing of my personal data. To view how we process and manage your personal information, please visit our{' '}
                                <a className={styles.link} href="/privacy-policy">
                                    Privacy Policy
                                </a>
                                .
                            </span>
                        </label>
                    </div>

                    <div className={styles.submitRow}>
                        <Button
                            text="Submit"
                            icon={<ArrowIcon />}
                            className={styles.submitButton}
                            textColor="#f6292f"
                            iconBgColor="#f6292f"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
