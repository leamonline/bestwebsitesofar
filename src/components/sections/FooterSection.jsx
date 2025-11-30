import React from 'react';
import { colors } from '../../constants/colors';
import DogSilhouette from '../DogSilhouette';
import BackgroundSticker from '../BackgroundSticker';

const FooterSection = () => {
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
                            {['📘', '📸', '📱'].map((icon, i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
                                    style={{ backgroundColor: 'white' }}
                                >
                                    {icon}
                                </div>
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
                    <p>© 2025 Smarter Dog Grooming Salon. All rights reserved.</p>
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
