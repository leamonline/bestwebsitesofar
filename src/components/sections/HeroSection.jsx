import React from 'react';
import { colors } from '../../constants/colors';
import DogSilhouette from '../DogSilhouette';
import PolaroidImage from '../PolaroidImage';
import BackgroundSticker from '../BackgroundSticker';
import MagneticButton from '../MagneticButton';

import ParallaxSection from '../ParallaxSection';

const HeroSection = ({ isLoaded, onBookClick }) => {
    return (
        <>
            <section className="pt-32 pb-24 relative overflow-hidden" style={{ backgroundColor: colors.cyan }}>
                {/* Vignette Overlay */}
                <div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.15) 100%)'
                    }}
                />

                {/* Floating Paw Prints */}
                <div className="absolute top-20 left-10 opacity-10 animate-bounce-slow" style={{ animationDuration: '4s' }}>
                    <span className="text-6xl">🐾</span>
                </div>
                <div className="absolute bottom-40 right-10 opacity-10 animate-bounce-slow" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                    <span className="text-5xl rotate-12">🐾</span>
                </div>

                <div className="px-6 relative z-10">
                    {/* ... */}
                    {/* Background Dog */}
                    <ParallaxSection speed={0.2} className="absolute top-20 right-0 md:right-20 z-0 opacity-20 pointer-events-none">
                        <DogSilhouette
                            color={colors.yellow}
                            className="w-96 h-auto rotate-12"
                        />
                    </ParallaxSection>
                    {/* Background Sticker */}
                    <BackgroundSticker
                        className="w-64 h-64 -bottom-12 -left-12 opacity-10 rotate-12"
                    />
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div className={`${isLoaded ? 'animate-fade-in-up' : 'opacity-0'} `}>

                            {/* Badge */}


                            <h2
                                className="heading-font font-bold text-5xl md:text-6xl leading-tight mb-6 drop-shadow-sm"
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
                                className="body-font text-lg leading-relaxed mb-8 font-medium"
                                style={{ color: 'white', opacity: 0.95, textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
                            >
                                Four decades of wagging tails, happy owners, and the kind of care
                                that only comes from a family who genuinely loves what they do.
                                Your dog isn't just another appointment—they're part of our pack.
                            </p>
                            {/* ... inside HeroSection ... */}

                            <div className="flex flex-wrap gap-4">
                                <MagneticButton
                                    onClick={() => onBookClick('Hero Section')}
                                    className="px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:shadow-xl flex items-center gap-2 hover-lift active-squish"
                                    style={{
                                        backgroundColor: colors.yellow,
                                        color: colors.teal
                                    }}
                                >
                                    <span>Book Your Visit</span>
                                    <span>→</span>
                                </MagneticButton>
                            </div>

                            {/* Trust indicators */}
                            <div className="flex items-center gap-6 mt-10">
                                <div className="flex -space-x-3">
                                    {[colors.cyan, colors.green, colors.pink, colors.yellow].map((color, i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-sm shadow-sm"
                                            style={{ backgroundColor: color }}
                                        >
                                            🐕
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1 animate-pulse" style={{ animationDuration: '3s' }}>
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} style={{ color: colors.yellow }} className="drop-shadow-sm">★</span>
                                        ))}
                                    </div>
                                    <p
                                        className="body-font text-sm font-medium"
                                        style={{ color: 'white' }}
                                    >
                                        <strong>4.9</strong> from 500+ happy pups
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Polaroid Cluster */}
                        <div className={`relative h-[500px] ${isLoaded ? 'animate-fade-in' : 'opacity-0'} `} style={{ animationDelay: '0.3s' }}>
                            <div className="absolute top-0 left-4 z-10 hover:z-40 transition-all duration-300">
                                <PolaroidImage
                                    caption="Bella's spa day ✨"
                                    rotation={-5}
                                    tapeColor={colors.cyan}
                                    src="/assets/client-dog-1.png"
                                />
                            </div>
                            <div className="absolute top-24 right-0 z-20 hover:z-40 transition-all duration-300">
                                <PolaroidImage
                                    caption="Looking dapper!"
                                    rotation={4}
                                    tapeColor={colors.cyan}
                                    src="/assets/client-dog-2.png"
                                />
                            </div>
                            <div className="absolute bottom-0 left-1/4 z-30 hover:z-40 transition-all duration-300">
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

            {/* Organic Wave Transition: Cyan -> Green */}
            <div style={{ backgroundColor: colors.cyan, lineHeight: 0, position: 'relative', zIndex: 1 }}>
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '80px' }}>
                    <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill={colors.green} />
                </svg>
            </div>
        </>
    );
};

export default HeroSection;
