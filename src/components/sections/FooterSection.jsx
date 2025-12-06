import React from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../../constants/colors';
import DogSilhouette from '../DogSilhouette';
import BackgroundSticker from '../BackgroundSticker';

// Accessible SVG Social Icons
const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

const TikTokIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
);

const FooterSection = () => {
    const socialLinks = [
        { icon: <FacebookIcon />, label: 'Visit our Facebook page', href: 'https://facebook.com/smarterdog' },
        { icon: <InstagramIcon />, label: 'Follow us on Instagram', href: 'https://instagram.com/smarterdog' },
        { icon: <TikTokIcon />, label: 'Watch us on TikTok', href: 'https://tiktok.com/@smarterdog' }
    ];

    return (
        <footer
            className="px-6 py-16 relative overflow-hidden"
            style={{ backgroundColor: colors.yellow }}
        >
            {/* Background Dog */}
            <div className="absolute bottom-0 left-10 z-0 opacity-10 pointer-events-none">
                <DogSilhouette
                    color={colors.teal}
                    className="w-[25rem] h-auto"
                />
            </div>
            {/* Background Sticker */}
            <BackgroundSticker
                className="w-48 h-48 top-10 right-10 opacity-5 -rotate-6"
            />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="mb-6">
                            <img src="/assets/logo-text.png" alt="Smarter Dog Grooming Salon" className="h-16 w-auto object-contain mb-4" />
                        </div>
                        <p
                            className="body-font text-sm leading-relaxed"
                            style={{ color: colors.teal }}
                        >
                            Family-run since 1983. Where every dog gets treated like the VIP they truly are.
                        </p>
                        {/* Social icons */}
                        <div className="flex gap-3 mt-4">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                                    style={{ backgroundColor: 'white', color: colors.teal }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4
                            className="heading-font font-semibold mb-4"
                            style={{ color: colors.teal }}
                        >
                            Opening Hours
                        </h4>
                        <div
                            className="body-font text-sm space-y-2"
                            style={{ color: colors.teal }}
                        >
                            <p className="flex justify-between">
                                <span>Mon & Tue</span>
                                <span style={{ color: colors.teal }}>8:30am – 3:30pm</span>
                            </p>
                            <p className="flex justify-between">
                                <span>Wednesday</span>
                                <span style={{ color: colors.pink }}>Closed</span>
                            </p>
                            <p className="flex justify-between">
                                <span>Thursday</span>
                                <span style={{ color: colors.teal }}>8:30am – 3:30pm</span>
                            </p>
                            <p className="flex justify-between">
                                <span>Fri–Sun</span>
                                <span style={{ color: colors.pink }}>Closed</span>
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4
                            className="heading-font font-semibold mb-4"
                            style={{ color: colors.teal }}
                        >
                            Find Us
                        </h4>
                        <div
                            className="body-font text-sm space-y-2"
                            style={{ color: colors.teal }}
                        >
                            <p>183 Kings Road</p>
                            <p>Ashton-under-Lyne</p>
                            <p>OL6 8HD</p>
                        </div>
                    </div>

                    <div>
                        <h4
                            className="heading-font font-semibold mb-4"
                            style={{ color: colors.teal }}
                        >
                            Get in Touch
                        </h4>
                        <div
                            className="body-font text-sm space-y-2"
                            style={{ color: colors.teal }}
                        >
                            <p>leam@smarterdog.co.uk</p>
                            <p>07507 731487</p>
                            <p
                                className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full text-xs"
                                style={{ backgroundColor: colors.green, color: 'white' }}
                            >
                                💬 WhatsApp Available
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 body-font text-sm"
                    style={{ borderColor: colors.tealLight, color: colors.teal }}
                >
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        <p>© 2025 Smarter Dog Grooming Salon. All rights reserved.</p>
                        <Link
                            to="/privacy"
                            className="underline hover:opacity-70 transition-opacity"
                            style={{ color: colors.teal }}
                        >
                            Privacy Policy
                        </Link>
                    </div>
                    <p
                        className="handwriting text-lg"
                        style={{ color: colors.teal }}
                    >
                        Made with 🐾 in Ashton-under-Lyne
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
