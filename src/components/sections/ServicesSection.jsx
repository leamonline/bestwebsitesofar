import React from 'react';
import { colors } from '../../constants/colors';
import DogSilhouette from '../DogSilhouette';
import ServiceCard from '../ServiceCard';
import FadeIn from '../FadeIn';

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

                    {/* Background Icon Decorations - Monochromatic Stickers */}
                    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                        {/* Full Groom Icon */}
                        <div className="absolute top-10 right-20 w-32 h-32 opacity-10 animate-float" style={{ animationDelay: '0s' }}>
                            <img src="/assets/icons/full-groom.jpg" alt="" className="w-full h-full rounded-full object-cover" style={{ filter: 'grayscale(100%) brightness(2)' }} />
                        </div>
                        {/* Puppy Intro Icon */}
                        <div className="absolute top-60 left-10 w-24 h-24 opacity-10 animate-float" style={{ animationDelay: '1s' }}>
                            <img src="/assets/icons/puppy-intro.jpg" alt="" className="w-full h-full rounded-full object-cover" style={{ filter: 'grayscale(100%) brightness(2)' }} />
                        </div>
                        {/* De-Shedding Icon */}
                        <div className="absolute bottom-40 right-10 w-28 h-28 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
                            <img src="/assets/icons/deshedding.jpg" alt="" className="w-full h-full rounded-full object-cover" style={{ filter: 'grayscale(100%) brightness(2)' }} />
                        </div>
                        {/* Maintenance Icon */}
                        <div className="absolute top-1/3 right-1/4 w-20 h-20 opacity-10 animate-float" style={{ animationDelay: '1.5s' }}>
                            <img src="/assets/icons/maintenance-groom.jpg" alt="" className="w-full h-full rounded-full object-cover" style={{ filter: 'grayscale(100%) brightness(2)' }} />
                        </div>
                        {/* Nail Trim Icon */}
                        <div className="absolute bottom-20 left-1/4 w-16 h-16 opacity-10 animate-float" style={{ animationDelay: '0.5s' }}>
                            <img src="/assets/icons/nail-trim.jpg" alt="" className="w-full h-full rounded-full object-cover" style={{ filter: 'grayscale(100%) brightness(2)' }} />
                        </div>
                    </div>
                    <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
                        <FadeIn>
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
                        </FadeIn>
                    </div>

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        <FadeIn delay={200} className="h-full">
                            <ServiceCard
                                icon={<img src="/assets/icons/full-groom.jpg" alt="Full Groom" className="w-24 h-24 rounded-full object-cover shadow-sm" />}
                                title="Full Groom"
                                desc="The works: bath, dry, brush, trim, nail clip, and ear clean. They'll leave looking (and smelling) like a million bones."
                                bgColor={'white'}
                                accentColor={colors.pink}
                            />
                        </FadeIn>
                        <FadeIn delay={400} className="h-full">
                            <ServiceCard
                                icon={<img src="/assets/icons/maintenance-groom.jpg" alt="Maintenance Groom" className="w-24 h-24 rounded-full object-cover shadow-sm" />}
                                title="Maintenance Groom"
                                desc="A refresh between full grooms. Perfect for keeping your pup clean and comfortable without the full trim."
                                bgColor={'white'}
                                accentColor={colors.pink}
                            />
                        </FadeIn>
                        <FadeIn delay={600} className="h-full">
                            <ServiceCard
                                icon={<img src="/assets/icons/deshedding.jpg" alt="De-Shedding" className="w-24 h-24 rounded-full object-cover shadow-sm" />}
                                title="De-Shedding Package"
                                desc="Ideal for double-coated breeds. A deep clean and thorough undercoat removal to reduce shedding around your home."
                                bgColor={'white'}
                                accentColor={colors.pink}
                            />
                        </FadeIn>
                        <FadeIn delay={800} className="h-full">
                            <ServiceCard
                                icon={<img src="/assets/icons/puppy-intro.jpg" alt="Puppy Intro" className="w-24 h-24 rounded-full object-cover shadow-sm" />}
                                title="Puppy Intro"
                                desc="First time? We take it slow. Gentle introduction to grooming for pups under 6 months."
                                bgColor={'white'}
                                accentColor={colors.pink}
                            />
                        </FadeIn>
                    </div>

                    {/* Additional services row */}
                    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-16 relative z-10">
                        <FadeIn delay={1000} className="h-full">
                            <div
                                className="p-8 rounded-3xl flex items-center gap-6 transition-all duration-300 hover:shadow-lg h-full hover-lift"
                                style={{ backgroundColor: 'white' }}
                            >
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm"
                                >
                                    <img src="/assets/icons/ear-cleaning.jpg" alt="Ear Cleaning" className="w-full h-full object-cover" />
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
                        </FadeIn>

                        <FadeIn delay={1200} className="h-full">
                            <div
                                className="p-8 rounded-3xl flex items-center gap-6 transition-all duration-300 hover:shadow-lg h-full hover-lift"
                                style={{ backgroundColor: 'white' }}
                            >
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm"
                                >
                                    <img src="/assets/icons/anal-gland.jpg" alt="Anal Gland Expression" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4
                                        className="heading-font font-semibold text-xl mb-2"
                                        style={{ color: colors.pink }}
                                    >
                                        Anal Gland Expression
                                    </h4>
                                    <p
                                        className="body-font text-sm"
                                        style={{ color: colors.teal }}
                                    >
                                        Professional expression to relieve discomfort and prevent impaction.
                                    </p>
                                </div>
                                <span
                                    className="ml-auto px-3 py-1 rounded-full text-xs font-bold"
                                    style={{ backgroundColor: colors.pink, color: 'white' }}
                                >
                                    Hygiene
                                </span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={1400} className="h-full">
                            <div
                                className="p-8 rounded-3xl flex items-center gap-6 transition-all duration-300 hover:shadow-lg h-full hover-lift"
                                style={{ backgroundColor: 'white' }}
                            >
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm"
                                >
                                    <img src="/assets/icons/nail-trim.jpg" alt="Nail Trims" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4
                                        className="heading-font font-semibold text-xl mb-2"
                                        style={{ color: colors.pink }}
                                    >
                                        Nail Trims
                                    </h4>
                                    <p
                                        className="body-font text-sm"
                                        style={{ color: colors.teal }}
                                    >
                                        Quick and stress-free nail clipping to keep paws healthy and floors scratch-free.
                                    </p>
                                </div>
                                <span
                                    className="ml-auto px-3 py-1 rounded-full text-xs font-bold"
                                    style={{ backgroundColor: colors.pink, color: 'white' }}
                                >
                                    Hygiene
                                </span>
                            </div>
                        </FadeIn>
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
