import React, { useState, useEffect } from 'react';
import Navigation from '../sections/Navigation';
import FooterSection from '../sections/FooterSection';
import BookingModal from '../BookingModal';
import PolaroidImage from '../PolaroidImage';
import { colors } from '../../constants/colors';
import CTASection from '../sections/CTASection';
import DogSilhouette from '../DogSilhouette';
import SectionDivider from '../SectionDivider';

const GalleryPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const photos = [
        { src: '/assets/client-dog-1.png', caption: "Bella's spa day ✨", rotation: -2 },
        { src: '/assets/client-dog-2.png', caption: "Looking dapper!", rotation: 3 },
        { src: '/assets/client-dog-3.png', caption: "Fresh & fluffy 🛁", rotation: -4 },
        { src: '/assets/client-dog-4.png', caption: "Golden smiles", rotation: 2 },
        { src: '/assets/client-dog-5.png', caption: "Double trouble!", rotation: -3 },
        { src: '/assets/client-dog-6.png', caption: "So majestic", rotation: 4 },
        { src: '/assets/client-dog-7.png', caption: "Puppy love", rotation: -2 },
        { src: '/assets/client-dog-8.png', caption: "Ready for the weekend", rotation: 3 },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navigation isLoaded={isLoaded} onBookClick={() => setIsModalOpen(true)} />

            {/* Hero */}
            <div className="pt-32 pb-16 px-6 text-center relative overflow-hidden" style={{ backgroundColor: colors.offWhite }}>
                {/* Background Dog */}
                <div className="absolute top-10 left-0 md:left-20 z-0 opacity-10 pointer-events-none">
                    <DogSilhouette
                        color={colors.pink}
                        className="w-64 h-auto -rotate-12"
                    />
                </div>

                <div className="relative z-10">
                    <span className="handwriting text-3xl block mb-4" style={{ color: colors.orange }}>
                        Look at those smiles!
                    </span>
                    <h1 className="heading-font text-5xl md:text-6xl font-bold mb-6" style={{ color: colors.teal }}>
                        Our Happy Clients
                    </h1>
                    <p className="body-font text-xl max-w-2xl mx-auto" style={{ color: colors.teal, opacity: 0.8 }}>
                        A collection of our favorite transformations and wagging tails.
                    </p>
                </div>
            </div>

            <SectionDivider type="zigzag" color={colors.pink} backgroundColor={colors.offWhite} />

            {/* Gallery Grid */}
            <section className="py-20 px-6" style={{ backgroundColor: colors.pink }}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
                        {photos.map((photo, index) => (
                            <div
                                key={index}
                                className={`flex justify-center ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <PolaroidImage
                                    src={photo.src}
                                    caption={photo.caption}
                                    rotation={photo.rotation}
                                    tapeColor={index % 2 === 0 ? colors.cyan : colors.yellow}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SectionDivider type="wave" color="white" backgroundColor={colors.pink} />

            <CTASection onBookClick={() => setIsModalOpen(true)} />
            <FooterSection />
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default GalleryPage;
