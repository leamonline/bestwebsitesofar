import React from 'react';
import { colors } from '../../constants/colors';
import FadeIn from '../FadeIn';

import GoogleReviews from '../GoogleReviews';

const TestimonialsSection = () => {
    return (
        <>
            <section className="py-24 relative overflow-hidden" id="reviews">
                {/* Dynamic Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: `linear-gradient(135deg, ${colors.cyan} 0%, ${colors.teal} 100%)`,
                    }}
                >
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl animate-pulse" />
                        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>
                    {/* Section specific noise for texture depth */}
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
                    />
                </div>

                <div className="relative z-10 px-6">
                    <div className="max-w-6xl mx-auto text-center mb-20">
                        <FadeIn>
                            <span
                                className="inline-block px-6 py-2 rounded-full text-sm font-bold tracking-wide uppercase mb-6 shadow-soft transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                                style={{ backgroundColor: 'white', color: colors.plum }}
                            >
                                Client Reviews
                            </span>
                            <h3
                                className="heading-font font-black text-5xl md:text-6xl mb-6 drop-shadow-md"
                                style={{ color: 'white' }}
                            >
                                The Word on the Street
                            </h3>
                            <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
                                Don't just take our word for it. Here's what the local pack has to say about their spa days.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                                quote: "Been bringing my dogs here for 15 years. They treat every pup like royalty. Wouldn't go anywhere else!",
                                name: "Sarah M.",
                                pet: "Biscuit & Crumble",
                                accent: colors.pink,
                                rotation: '-2deg'
                            },
                            {
                                quote: "My nervous rescue was terrified of groomers. The team here were so patient—now he actually gets excited for his appointments!",
                                name: "James T.",
                                pet: "Ronnie",
                                accent: colors.green,
                                rotation: '2deg'
                            },
                            {
                                quote: "The best cut my doodle has ever had. They really understand the breed and he smells amazing for weeks!",
                                name: "Emily R.",
                                pet: "Barnaby",
                                accent: colors.orange,
                                rotation: '-1deg'
                            }
                        ].map((testimonial, i) => (
                            <FadeIn key={i} delay={i * 150} className="h-full">
                                <div
                                    className="group relative p-8 h-full transition-all duration-500 hover:z-20 hover-lift"
                                    style={{
                                        transform: `rotate(${testimonial.rotation})`,
                                    }}
                                >
                                    {/* Polaroid/Card Background */}
                                    <div
                                        className="absolute inset-0 bg-white shadow-layered rounded-2xl transform transition-transform duration-500 group-hover:rotate-0 texture-grain"
                                    />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="mb-6">
                                            <div className="flex gap-1 mb-4">
                                                {[...Array(5)].map((_, starIndex) => (
                                                    <span key={starIndex} className="text-xl animate-pulse" style={{ color: colors.yellow, animationDelay: `${starIndex * 0.1}s` }}>★</span>
                                                ))}
                                            </div>
                                            <div
                                                className="text-4xl absolute top-4 right-4 opacity-20 font-serif"
                                                style={{ color: testimonial.accent }}
                                            >
                                                "
                                            </div>
                                        </div>

                                        <p
                                            className="body-font text-lg leading-relaxed mb-8 flex-grow font-medium"
                                            style={{ color: colors.plum }}
                                        >
                                            {testimonial.quote}
                                        </p>

                                        <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-inner bg-gray-50"
                                                style={{ color: testimonial.accent }}
                                            >
                                                🐾
                                            </div>
                                            <div>
                                                <div
                                                    className="heading-font font-bold text-lg"
                                                    style={{ color: testimonial.accent }}
                                                >
                                                    {testimonial.name}
                                                </div>
                                                <div
                                                    className="body-font text-sm font-semibold opacity-70"
                                                    style={{ color: colors.teal }}
                                                >
                                                    Parent of {testimonial.pet}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Live Google Reviews Integration */}
                    <FadeIn delay={400}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl transform rotate-1" />
                            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-layered border border-white/50">
                                <GoogleReviews />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Tilt Transition: Cyan/Teal -> Green (Next Section) */}
            <div style={{ backgroundColor: colors.teal, lineHeight: 0, position: 'relative', marginTop: '-1px' }}>
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '80px' }}>
                    <path d="M0 0L1440 100L1440 100L0 100Z" fill={colors.green} />
                </svg>
            </div>
        </>
    );
};

export default TestimonialsSection;
