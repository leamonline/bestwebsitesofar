import React, { useState, useEffect } from 'react';
import Navigation from '../sections/Navigation';
import CTASection from '../sections/CTASection';
import FooterSection from '../sections/FooterSection';
import BookingModal from '../BookingModal';
import DogSilhouette from '../DogSilhouette';
import SectionDivider from '../SectionDivider';
import { colors } from '../../constants/colors';

const ServicesPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const services = [
        {
            title: "The Full Groom",
            price: "From £45",
            description: "The complete makeover. Includes a double bath, blow dry, full body styling to your specification, nail trim, and ear cleaning.",
            features: ["Double Bath & Blow Dry", "Full Body Styling", "Hygiene Clip", "Paw Pad Trim", "Nail Trim & Ear Clean"],
            color: colors.teal,
            bgColor: 'white'
        },
        {
            title: "Maintenance Groom",
            price: "From £30",
            description: "Perfect for in-between full grooms to keep your dog tidy. Includes bath, dry, and trimming of face, feet, and hygiene areas.",
            features: ["Bath & Blow Dry", "Face Trim", "Feet & Pads Trim", "Hygiene Clip", "Nail Trim"],
            color: colors.orange,
            bgColor: 'white'
        },
        {
            title: "De-Shedding Package",
            price: "From £35",
            description: "Ideal for double-coated breeds. A deep clean and thorough undercoat removal to reduce shedding around your home.",
            features: ["Deep Cleaning Bath", "Undercoat Removal", "High-Velocity Dry", "Brush Out", "Nail Trim"],
            color: colors.yellow,
            bgColor: 'white'
        }
    ];

    const timeline = [
        { step: 1, title: "Arrival", desc: "We welcome you and your dog, discussing their needs and your styling preferences." },
        { step: 2, title: "The Prep", desc: "A thorough brush out to remove tangles and prepare the coat for bathing." },
        { step: 3, title: "The Bath", desc: "Using our Houndsly natural shampoos, we double wash to ensure a deep clean." },
        { step: 4, title: "The Dry", desc: "Gentle drying with high-velocity dryers to remove dead hair and fluff the coat." },
        { step: 5, title: "The Style", desc: "Clipping and scissoring to create the perfect look for your dog." },
        { step: 6, title: "The Finish", desc: "Nail trimming, ear cleaning, and a final spritz of cologne before the reunion!" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navigation isLoaded={isLoaded} onBookClick={() => setIsModalOpen(true)} />

            {/* Hero */}
            <div className="pt-32 pb-16 px-6 text-center relative overflow-hidden" style={{ backgroundColor: colors.offWhite }}>
                {/* Background Dog */}
                <div className="absolute top-10 left-0 md:left-20 z-0 opacity-10 pointer-events-none">
                    <DogSilhouette
                        color={colors.teal}
                        className="w-64 h-auto -rotate-12"
                    />
                </div>

                <div className="relative z-10">
                    <span className="handwriting text-3xl block mb-4" style={{ color: colors.orange }}>
                        Pamper your pooch
                    </span>
                    <h1 className="heading-font text-5xl md:text-6xl font-bold mb-6" style={{ color: colors.teal }}>
                        Our Services
                    </h1>
                    <p className="body-font text-xl max-w-2xl mx-auto" style={{ color: colors.teal, opacity: 0.8 }}>
                        Professional grooming tailored to your dog's breed, coat, and personality.
                    </p>
                </div>
            </div>

            <SectionDivider type="wave" color={colors.teal} backgroundColor={colors.offWhite} />

            {/* Pricing Tiers */}
            <section className="py-20 px-6" style={{ backgroundColor: colors.teal }}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="rounded-3xl p-8 border-4 transition-transform hover:-translate-y-2 duration-300 flex flex-col shadow-lg"
                                style={{ borderColor: 'white', backgroundColor: service.bgColor }}
                            >
                                <h3 className="heading-font text-3xl font-bold mb-2" style={{ color: service.color }}>
                                    {service.title}
                                </h3>
                                <p className="text-2xl font-bold mb-6" style={{ color: colors.darkGray }}>{service.price}</p>
                                <p className="body-font mb-8 text-gray-600 flex-grow">{service.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                            <span className="text-lg">🐾</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90"
                                    style={{ backgroundColor: service.color }}
                                >
                                    Book Now
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Additional Services Info */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <h3 className="heading-font text-2xl font-bold mb-4" style={{ color: colors.teal }}>
                                🐶 Puppy Introduction
                            </h3>
                            <p className="body-font text-gray-600 mb-4">
                                A gentle first experience for puppies under 6 months. We focus on positive association with grooming sounds and sensations. Includes a gentle bath, slow dry, and lots of cuddles.
                            </p>
                            <p className="font-bold" style={{ color: colors.orange }}>£30</p>
                        </div>
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <h3 className="heading-font text-2xl font-bold mb-4" style={{ color: colors.teal }}>
                                ✂️ Walk-in Services
                            </h3>
                            <p className="body-font text-gray-600 mb-4">
                                Quick services available without a full appointment.
                                <br />
                                <strong>Available:</strong> Mon, Tue, Wed before 1pm.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• Nail Clipping - £10</li>
                                <li>• Ear Cleaning - £8</li>
                                <li>• Anal Gland Expression - £10</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <SectionDivider type="curve" color={colors.blueSlate} backgroundColor={colors.teal} />

            {/* What to Expect Timeline */}
            <section className="py-20 px-6" style={{ backgroundColor: colors.blueSlate }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="heading-font text-4xl font-bold text-center mb-16 text-white">
                        What to Expect
                    </h2>
                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <div key={index} className="flex gap-6 md:gap-10 items-start">
                                <div
                                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl bg-white shadow-lg"
                                    style={{ color: colors.teal }}
                                >
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="heading-font text-2xl font-bold mb-2 text-white">
                                        {item.title}
                                    </h3>
                                    <p className="body-font text-lg text-white opacity-90">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SectionDivider type="slant" color="white" backgroundColor={colors.blueSlate} />

            <CTASection onBookClick={() => setIsModalOpen(true)} />
            <FooterSection />
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default ServicesPage;
