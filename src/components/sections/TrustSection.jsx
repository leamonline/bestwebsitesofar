import React from 'react';
import { colors } from '../../constants/colors';

const TrustSection = () => {
    return (
        <>
            <section
                className="py-10 relative overflow-hidden"
                style={{ backgroundColor: colors.green }}
            >
                {/* Decorative shapes */}
                <div
                    className="absolute top-0 left-10 w-20 h-20 rounded-full opacity-10"
                    style={{ backgroundColor: 'white' }}
                />
                <div
                    className="absolute bottom-0 right-20 w-32 h-32 rounded-full opacity-10"
                    style={{ backgroundColor: 'white' }}
                />

                <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 relative z-10">
                    {
                        [
                            { number: '40+', label: 'Years Experience', icon: '🏆' },
                            { number: '10,000+', label: 'Happy Pups', icon: '🐕' },
                            { number: '4.9★', label: 'Google Rating', icon: '⭐' },
                            { number: '100%', label: 'Tail Wags', icon: '💕' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div
                                    className="heading-font font-bold text-4xl mb-1"
                                    style={{ color: 'white' }}
                                >
                                    {stat.number}
                                </div>
                                <div
                                    className="body-font text-sm"
                                    style={{ color: 'rgba(255,255,255,0.8)' }}
                                >
                                    {stat.icon} {stat.label}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            {/* Slant Transition: Green -> Pink */}
            <div style={{ backgroundColor: colors.green, lineHeight: 0, position: 'relative' }}>
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '60px' }}>
                    <path d="M0 100L1440 100L1440 0L0 100Z" fill={colors.pink} />
                </svg>
            </div>
        </>
    );
};

export default TrustSection;
