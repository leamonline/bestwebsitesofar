import React from 'react';
import { colors } from '../../constants/colors';
import DogSilhouette from '../DogSilhouette';

const OfferSection = () => {
    return (
        <>
            <section className="py-20 relative overflow-hidden" style={{ backgroundColor: colors.green }}>
                <div className="px-6 relative">
                    {/* Background Dog */}
                    <div className="absolute top-10 right-10 z-0 opacity-10 pointer-events-none">
                        <DogSilhouette
                            color="white"
                            className="w-80 h-auto rotate-12"
                        />
                    </div>
                    <div
                        className="max-w-6xl mx-auto rounded-3xl p-8 md:p-12 relative overflow-hidden z-10"
                        style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 text-4xl animate-bounce-slow">⭐</div>
                        <div className="absolute bottom-4 left-4 text-4xl opacity-50">🐕</div>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                            <div>
                                <span
                                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                                    style={{ backgroundColor: 'white', color: colors.green }}
                                >
                                    ✨ NEW CUSTOMER OFFER
                                </span>
                                <h4
                                    className="heading-font font-bold text-3xl md:text-4xl mb-2"
                                    style={{ color: 'white' }}
                                >
                                    First groom? Get 20% off!
                                </h4>
                                <p
                                    className="body-font"
                                    style={{ color: 'white', opacity: 0.9 }}
                                >
                                    Mention this offer when you book. Valid for new customers only.
                                </p>
                            </div>
                            <button
                                className="px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap"
                                style={{
                                    backgroundColor: 'white',
                                    color: colors.green
                                }}
                            >
                                Claim Offer →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rounded Transition: Green -> Pink */}
            <div style={{ backgroundColor: colors.green, lineHeight: 0 }}>
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '60px' }}>
                    <path d="M0 100C400 100 600 0 1440 0L1440 100H0Z" fill={colors.pink} />
                </svg>
            </div>
        </>
    );
};

export default OfferSection;
