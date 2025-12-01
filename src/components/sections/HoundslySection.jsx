import React from 'react';
import { colors } from '../../constants/colors';
import PolaroidImage from '../PolaroidImage';

const HoundslySection = () => {
    const products = [
        {
            name: 'Houndsly Shampoo',
            description: 'Our signature range of natural, vegan shampoos designed to gently cleanse and soothe. Perfect for sensitive skin.',
            image: '/assets/houndsly-shampoo.jpg',
            link: 'https://houndsly.co.uk/collections/shampoo'
        },
        {
            name: 'Drynamite Speed Dry',
            description: 'Cut drying time in half! This blast of conditioning spray repels water from the coat for a lightning-fast dry.',
            image: '/assets/drynamite.jpg',
            link: 'https://houndsly.co.uk/products/drynamite-speed-dry-spray'
        }
    ];

    return (
        <section className="py-20 relative pt-32" style={{ backgroundColor: colors.teal }}>
            {/* Asymmetrical Wave Transition */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform -translate-y-full">
                <svg
                    position="relative"
                    display="block"
                    width="calc(138% + 1.3px)"
                    height="126px"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    style={{ transform: 'rotate(180deg)' }}
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        fill={colors.teal}
                    ></path>
                </svg>
            </div>
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <img
                        src="/assets/houndsly-logo.png"
                        alt="Houndsly"
                        className="h-24 mx-auto mb-6"
                        style={{ filter: 'brightness(0) invert(1) opacity(0.9)' }}
                    />
                    <span className="handwriting text-3xl block mb-4" style={{ color: colors.yellow }}>
                        Handmade with love
                    </span>
                    <h2 className="heading-font font-bold text-4xl md:text-5xl mb-6 text-white">
                        Houndsly by Smarter Dog
                    </h2>
                    <p className="body-font text-lg max-w-2xl mx-auto text-white opacity-90">
                        We couldn't find products good enough for our pack, so we made our own.
                        100% natural, vegan, and designed to be gentle on sensitive skin.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
                        >
                            <div className="aspect-square bg-gray-100 rounded-xl mb-6 overflow-hidden relative">
                                {product.image && !product.image.includes('placeholder') ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">
                                        🛁
                                    </div>
                                )}
                            </div>
                            <h3 className="heading-font font-bold text-xl mb-2" style={{ color: colors.teal }}>
                                {product.name}
                            </h3>
                            <p className="body-font text-sm mb-4" style={{ color: colors.teal, opacity: 0.7 }}>
                                {product.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-lg" style={{ color: colors.orange }}>
                                    {product.price}
                                </span>
                                <a
                                    href={product.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-full text-sm font-bold transition-colors inline-block"
                                    style={{
                                        backgroundColor: colors.tealLight,
                                        color: colors.teal
                                    }}
                                >
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://houndsly.co.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 inline-block"
                        style={{
                            borderColor: 'white',
                            color: 'white'
                        }}
                    >
                        HOUNDSLY.CO.UK
                    </a>
                </div>
            </div>

            {/* Asymmetrical Wave Transition (Bottom) */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform translate-y-px">
                <svg
                    position="relative"
                    display="block"
                    width="calc(100% + 1.3px)"
                    height="120px"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V75.85C1132.19,98.94,1055.71,91.33,985.66,92.83Z"
                        fill={colors.cyan}
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default HoundslySection;
