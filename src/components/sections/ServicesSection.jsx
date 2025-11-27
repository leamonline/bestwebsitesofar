import React from 'react';
import { colors } from '../../constants/colors';
import DogSilhouette from '../DogSilhouette';
import ServiceCard from '../ServiceCard';

const ServicesSection = () => {
    return (
        <>
            <section className="py-20 relative overflow-hidden" style={{ backgroundColor: colors.pink }}>
                <div className="px-6 relative">
                    {/* Background Dog */}
                    <div className="absolute bottom-0 left-0 md:left-20 z-0 opacity-10 pointer-events-none">
                        <DogSilhouette
                            color="white"
                            className="w-[30rem] h-auto -scale-x-100 rotate-[-10deg]"
                        />
                    </div>
                    <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
                        <span
                            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                            style={{ backgroundColor: 'white', color: colors.pink }}
                        >
                            Our Services
                        </span>
                        <h3
                            className="heading-font font-bold text-4xl md:text-5xl"
                            style={{ color: 'white' }}
                        >
                            What we do best
                        </h3>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
                        <ServiceCard
                            icon="✂️"
                            title="Full Groom"
                            desc="The works: bath, dry, brush, trim, nail clip, and ear clean. They'll leave looking (and smelling) like a million bones."
                            bgColor={'white'}
                            accentColor={colors.pink}
                        />
                        <ServiceCard
                            icon="🛁"
                            title="Bath & Tidy"
                            desc="A refresh between full grooms. Perfect for keeping your pup clean and comfortable without the full trim."
                            bgColor={'white'}
                            accentColor={colors.pink}
                        />
                        <ServiceCard
                            icon="🐾"
                            title="Puppy Intro"
                            desc="First time? We take it slow. Gentle introduction to grooming for pups under 6 months. Building trust, one treat at a time."
                            bgColor={'white'}
                            accentColor={colors.pink}
                        />
                    </div>

                    {/* Additional services row */}
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mt-8 relative z-10">
                        <div
                            className="p-8 rounded-3xl flex items-center gap-6 transition-all duration-300 hover:shadow-lg"
                            style={{ backgroundColor: 'white' }}
                        >
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                                style={{ backgroundColor: colors.pinkLight }}
                            >
                                👂
                            </div>
                            <div>
                                <h4
                                    className="heading-font font-semibold text-xl mb-2"
                                    style={{ color: colors.pink }}
                                >
                                    Ear Cleaning
                                </h4>
                                <p
                                    className="body-font text-sm"
                                    style={{ color: colors.teal }}
                                >
                                    Gentle, thorough ear care to keep your pup comfortable and infection-free.
                                </p>
                            </div>
                            <span
                                className="ml-auto px-3 py-1 rounded-full text-xs font-bold"
                                style={{ backgroundColor: colors.pink, color: 'white' }}
                            >
                                Hygiene
                            </span>
                        </div>

                        <div
                            className="p-8 rounded-3xl flex items-center gap-6 transition-all duration-300 hover:shadow-lg"
                            style={{ backgroundColor: 'white' }}
                        >
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                                style={{ backgroundColor: colors.pinkLight }}
                            >
                                🦷
                            </div>
                            <div>
                                <h4
                                    className="heading-font font-semibold text-xl mb-2"
                                    style={{ color: colors.pink }}
                                >
                                    Teeth Cleaning
                                </h4>
                                <p
                                    className="body-font text-sm"
                                    style={{ color: colors.teal }}
                                >
                                    Fresh breath and healthy gums. Your dog will thank you (with kisses).
                                </p>
                            </div>
                            <span
                                className="ml-auto px-3 py-1 rounded-full text-xs font-bold"
                                style={{ backgroundColor: colors.pink, color: 'white' }}
                            >
                                Hygiene
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curve Transition: Pink -> Yellow */}
            <div style={{ backgroundColor: colors.pink, lineHeight: 0 }}>
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '80px' }}>
                    <path d="M0 0L1440 0L1440 80C1440 80 1100 120 720 120C340 120 0 80 0 80L0 0Z" fill={colors.pink} />
                    <path d="M0 120L1440 120L1440 80C1440 80 1100 120 720 120C340 120 0 80 0 80L0 120Z" fill={colors.yellow} />
                </svg>
            </div>
        </>
    );
};

export default ServicesSection;
