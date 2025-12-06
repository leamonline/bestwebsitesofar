import React from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../../constants/colors';
import Navigation from '../sections/Navigation';
import FooterSection from '../sections/FooterSection';

const PrivacyPolicyPage = () => {
    return (
        <div
            className="min-h-screen"
            style={{
                backgroundColor: colors.offWhite,
                fontFamily: "'Montserrat', sans-serif"
            }}
        >
            <Navigation isLoaded={true} onBookClick={() => { }} />

            <main className="pt-32 pb-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1
                        className="heading-font font-bold text-4xl md:text-5xl mb-8"
                        style={{ color: colors.plum }}
                    >
                        Privacy Policy
                    </h1>

                    <div
                        className="body-font prose prose-lg"
                        style={{ color: colors.teal }}
                    >
                        <p className="text-sm mb-6" style={{ color: colors.teal }}>
                            <strong>Last updated:</strong> December 2024
                        </p>

                        <section className="mb-8">
                            <h2
                                className="heading-font font-bold text-2xl mb-4"
                                style={{ color: colors.plum }}
                            >
                                Who We Are
                            </h2>
                            <p className="mb-4 leading-relaxed">
                                Smarter Dog Grooming Salon ("we", "us", or "our") operates at
                                183 Kings Road, Ashton-under-Lyne, OL6 8HD. We are committed to
                                protecting your personal information and your right to privacy.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2
                                className="heading-font font-bold text-2xl mb-4"
                                style={{ color: colors.plum }}
                            >
                                Information We Collect
                            </h2>
                            <p className="mb-4 leading-relaxed">
                                When you request an appointment through our website, we collect:
                            </p>
                            <ul className="list-disc list-inside mb-4 space-y-2">
                                <li>Your name and contact details (phone number, email)</li>
                                <li>Your dog's name and breed</li>
                                <li>Preferred appointment times</li>
                                <li>Any notes about your dog's needs or health conditions</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2
                                className="heading-font font-bold text-2xl mb-4"
                                style={{ color: colors.plum }}
                            >
                                How We Use Your Information
                            </h2>
                            <p className="mb-4 leading-relaxed">We use your information to:</p>
                            <ul className="list-disc list-inside mb-4 space-y-2">
                                <li>Process and confirm your appointment requests</li>
                                <li>Contact you regarding your bookings</li>
                                <li>Provide the best possible grooming service for your dog</li>
                                <li>Send appointment reminders (with your consent)</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2
                                className="heading-font font-bold text-2xl mb-4"
                                style={{ color: colors.plum }}
                            >
                                Data Security
                            </h2>
                            <p className="mb-4 leading-relaxed">
                                We implement appropriate security measures to protect your personal
                                information. Your data is stored securely and only accessed by
                                authorised personnel.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2
                                className="heading-font font-bold text-2xl mb-4"
                                style={{ color: colors.plum }}
                            >
                                Your Rights
                            </h2>
                            <p className="mb-4 leading-relaxed">
                                Under UK data protection law (UK GDPR), you have the right to:
                            </p>
                            <ul className="list-disc list-inside mb-4 space-y-2">
                                <li>Access the personal data we hold about you</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Object to or restrict processing of your data</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2
                                className="heading-font font-bold text-2xl mb-4"
                                style={{ color: colors.plum }}
                            >
                                Cookies
                            </h2>
                            <p className="mb-4 leading-relaxed">
                                Our website uses essential cookies to function properly. We also use
                                analytics cookies (with your consent) to understand how visitors use
                                our site. You can manage your cookie preferences at any time.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2
                                className="heading-font font-bold text-2xl mb-4"
                                style={{ color: colors.plum }}
                            >
                                Contact Us
                            </h2>
                            <p className="mb-4 leading-relaxed">
                                If you have any questions about this Privacy Policy or our data
                                practices, please contact us:
                            </p>
                            <ul className="list-none space-y-2">
                                <li>📧 Email: leam@smarterdog.co.uk</li>
                                <li>📞 Phone: 07507 731487</li>
                                <li>📍 Address: 183 Kings Road, Ashton-under-Lyne, OL6 8HD</li>
                            </ul>
                        </section>

                        <div className="mt-12 pt-8 border-t" style={{ borderColor: colors.tealLight }}>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 font-bold transition-all hover:opacity-70"
                                style={{ color: colors.teal }}
                            >
                                ← Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <FooterSection />
        </div>
    );
};

export default PrivacyPolicyPage;
