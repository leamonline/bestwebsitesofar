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
            name: 'Paw Balm',
            description: 'Soothing protection for cracked paws.',
            price: '£8.50',
            image: '/assets/balm.jpg', // Placeholder
            link: 'https://houndsly.co.uk/collections/shampoo' // Defaulting to same link for now as requested context implies general shop link, or I can leave it empty/hash
        },
        {
            name: 'Detangling Spray',
            description: 'For a silky, knot-free coat.',
            price: '£10.00',
            image: '/assets/spray.jpg', // Placeholder
            link: 'https://houndsly.co.uk/collections/shampoo'
        }
    ];

    return (
        <section className="py-20 relative" style={{ backgroundColor: colors.offWhite }}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="handwriting text-3xl block mb-4" style={{ color: colors.orange }}>
                        Handmade with love
                    </span>
                    <h2 className="heading-font font-bold text-4xl md:text-5xl mb-6" style={{ color: colors.teal }}>
                        Houndsly by Smarter Dog
                    </h2>
                    <p className="body-font text-lg max-w-2xl mx-auto" style={{ color: colors.teal, opacity: 0.8 }}>
                        We couldn't find products good enough for our pack, so we made our own.
                        100% natural, vegan, and designed to be gentle on sensitive skin.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
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
                    <button
                        className="px-8 py-3 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg border-2"
                        style={{
                            borderColor: colors.teal,
                            color: colors.teal
                        }}
                    >
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HoundslySection;
