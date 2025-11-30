import React from 'react';
import { colors } from '../../constants/colors';
import DogSilhouette from '../DogSilhouette';
import PolaroidImage from '../PolaroidImage';
import BackgroundSticker from '../BackgroundSticker';

const HeroSection = ({ isLoaded, onBookClick }) => {
    return (
        <>
            <section className="pt-8 pb-20 relative overflow-hidden" style={{ backgroundColor: colors.cyan }}>
                <div className="px-6 relative">
                    {/* Background Dog */}
                    <div className="absolute top-20 right-0 md:right-20 z-0 opacity-20 pointer-events-none">
                        <DogSilhouette
                            color={colors.yellow}
                            className="w-96 h-auto rotate-12"
                        />
                    </div>
                    {/* Background Sticker */}
                    <BackgroundSticker
                        className="w-64 h-64 -bottom-12 -left-12 opacity-10 rotate-12"
                    />
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div className={`${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            {/* Logo */}
                            <div className="flex items-center gap-2">
                                <img src="/assets/logo-text.png" alt="Smarter Dog Grooming Salon" className="h-12 w-auto object-contain" />
                            </div>
                            {/* Badge */}


                            <h2
                                className="heading-font font-bold text-5xl md:text-6xl leading-tight mb-6"
                                style={{ color: 'white' }}
                            >
                                Where every dog gets the{' '}
                                <span
                                    className="relative inline-block"
                                    style={{ color: 'white' }}
                                >
                                    VIP treatment
                                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                        <path d="M2 8 Q 50 2, 100 8 T 198 8" stroke={colors.yellow} strokeWidth="4" strokeLinecap="round" fill="none" />
                                    </svg>
                                </span>
                            </h2>
                            <p
                                className="body-font text-lg leading-relaxed mb-8"
                                style={{ color: 'white', opacity: 0.9 }}
                            >
                                Four decades of wagging tails, happy owners, and the kind of care
                                that only comes from a family who genuinely loves what they do.
                                Your dog isn't just another appointment—they're part of our pack.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={onBookClick}
                                    className="px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2"
                                    style={{
                                        backgroundColor: colors.yellow,
                                        color: colors.teal
                                    }}
                                >
                                    <span>Book Your Visit</span>
                                    <span>→</span>
                                </button>

                            </div>

                            {/* Trust indicators */}
                            <div className="flex items-center gap-6 mt-10">
                                <div className="flex -space-x-3">
                                    {[colors.cyan, colors.green, colors.pink, colors.yellow].map((color, i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-sm"
                                            style={{ backgroundColor: color }}
                                        >
                                            🐕
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} style={{ color: colors.yellow }}>★</span>
                                        ))}
                                    </div>
                                    <p
                                        className="body-font text-sm"
                                        style={{ color: 'white' }}
                                    >
                                        <strong>4.9</strong> from 500+ happy pups
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Polaroid Cluster */}
                        <div className={`relative h-[500px] ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                            <div className="absolute top-0 left-4 z-10">
                                <PolaroidImage
                                    caption="Bella's spa day ✨"
                                    rotation={-5}
                                    tapeColor={colors.cyan}
                                    src="/assets/client-dog-1.png"
                                />
                            </div>
                            <div className="absolute top-24 right-0 z-20">
                                <PolaroidImage
                                    caption="Looking dapper!"
                                    rotation={4}
                                    tapeColor={colors.cyan}
                                    src="/assets/client-dog-2.png"
                                />
                            </div>
                            <div className="absolute bottom-0 left-1/4 z-30">
                                <PolaroidImage
                                    caption="Fresh & fluffy 🛁"
                                    rotation={-2}
                                    tapeColor={colors.cyan}
                                    src="/assets/client-dog-3.png"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* Wave Transition: Cyan -> Green */}
            <div style={{ backgroundColor: colors.cyan, lineHeight: 0 }}>
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '60px' }}>
                    <path d="M0 120L1440 120L1440 0C1440 0 1082.5 99.5 720 99.5C357.5 99.5 0 0 0 0L0 120Z" fill={colors.green} />
                </svg>
            </div>
        </>
    );
};

export default HeroSection;
