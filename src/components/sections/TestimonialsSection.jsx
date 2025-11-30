import React from 'react';
import { colors } from '../../constants/colors';
import FadeIn from '../FadeIn';

const TestimonialsSection = () => {
    return (
        <>
            <section className="py-20" style={{ backgroundColor: colors.cyan }}>
                <div className="px-6">
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <FadeIn>
                            <span
                                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                                style={{ backgroundColor: 'white', color: colors.cyan }}
                            >
                                Testimonials
                            </span>
                            <h3
                                className="heading-font font-bold text-4xl md:text-5xl"
                                style={{ color: 'white' }}
                            >
                                What Our Pack Says
                            </h3>
                        </FadeIn>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                        {[
                            {
                                quote: "Been bringing my dogs here for 15 years. They treat every pup like royalty. Wouldn't go anywhere else!",
                                name: "Sarah M.",
                                pet: "Mum to Biscuit & Crumble",
                                accent: colors.pink
                            },
                            {
                                quote: "My nervous rescue was terrified of groomers. The team here were so patient—now he actually gets excited for his appointments!",
                                name: "James T.",
                                pet: "Dad to Ronnie",
                                accent: colors.green
                            }
                        ].map((testimonial, i) => (
                            <FadeIn key={i} delay={i * 200} className="h-full">
                                <div
                                    className="p-8 rounded-3xl transition-all duration-300 hover:shadow-xl relative overflow-hidden h-full hover-lift"
                                    style={{ backgroundColor: 'white' }}
                                >
                                    {/* Accent corner */}
                                    <div
                                        className="absolute top-0 right-0 w-24 h-24"
                                        style={{
                                            background: `linear-gradient(135deg, transparent 50%, ${testimonial.accent}20 50%)`,
                                        }}
                                    />

                                    <div
                                        className="text-5xl mb-4"
                                        style={{ color: testimonial.accent }}
                                    >
                                        "
                                    </div>
                                    <p
                                        className="body-font text-lg leading-relaxed mb-6"
                                        style={{ color: colors.teal }}
                                    >
                                        {testimonial.quote}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                                            style={{ backgroundColor: testimonial.accent + '20' }}
                                        >
                                            💕
                                        </div>
                                        <div>
                                            <div
                                                className="heading-font font-semibold"
                                                style={{ color: testimonial.accent }}
                                            >
                                                {testimonial.name}
                                            </div>
                                            <div
                                                className="body-font text-sm"
                                                style={{ color: colors.teal }}
                                            >
                                                {testimonial.pet}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tilt Transition: Cyan -> Green */}
            <div style={{ backgroundColor: colors.cyan, lineHeight: 0, position: 'relative' }}>
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '60px' }}>
                    <path d="M0 0L1440 100L1440 100L0 100Z" fill={colors.green} />
                </svg>
            </div>
        </>
    );
};

export default TestimonialsSection;
