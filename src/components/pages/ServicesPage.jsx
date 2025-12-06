import React, { useState, useEffect } from 'react';
import Navigation from '../sections/Navigation';
import CTASection from '../sections/CTASection';
import FooterSection from '../sections/FooterSection';
import BookingModal from '../BookingModal';
import DogSilhouette from '../DogSilhouette';
import SectionDivider from '../SectionDivider';
import ProcessTimeline from '../ProcessTimeline';
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
            title: "Full Groom",
            price: "From £42",
            description: "The complete makeover. Includes a double bath and blow dry, full body styling to your preference, hygiene clip, paw pad trim, nail trim, and ear cleaning.",
            bestFor: "First visits or dogs needing a full reset",
            color: colors.teal,
            bgColor: 'white'
        },
        {
            title: "Maintenance Groom",
            price: "From £32",
            description: "Perfect between full grooms to keep your dog tidy. Includes bath, dry, and trimming of face, feet, and hygiene areas, plus nail trim.",
            bestFor: "Regulars between full grooms",
            color: colors.orange,
            bgColor: 'white'
        },
        {
            title: "De-shedding Groom",
            price: "From £35",
            description: "Ideal for double-coated breeds. A deep cleaning bath, thorough undercoat removal with high-velocity drying, full brush out, and nail trim.",
            bestFor: "Double coats and heavy shedders",
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

            {/* Hero - now care-focused */}
            <div className="pt-32 pb-16 px-6 text-center relative overflow-hidden" style={{ backgroundColor: colors.offWhite }}>
                {/* Background Dog */}
                <div className="absolute top-10 left-0 md:left-20 z-0 opacity-10 pointer-events-none">
                    <DogSilhouette
                        color={colors.teal}
                        className="w-64 h-auto -rotate-12"
                    />
                </div>

                <div className="relative z-10">
                    <h1 className="heading-font text-5xl md:text-6xl font-bold mb-6" style={{ color: colors.teal }}>
                        How we look after your dog
                    </h1>
                    <p className="body-font text-xl max-w-2xl mx-auto" style={{ color: colors.teal, opacity: 0.8 }}>
                        Calm, careful grooming shaped around your dog's coat, temperament, and comfort.
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
                                <p className="text-2xl font-bold mb-4" style={{ color: colors.darkGray }}>{service.price}</p>
                                <p className="body-font text-lg mb-6 text-gray-600 flex-grow leading-relaxed">{service.description}</p>
                                <p className="body-font text-base italic mb-8 pt-4 border-t border-gray-100" style={{ color: colors.teal }}>
                                    Best for: {service.bestFor}
                                </p>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full py-4 rounded-full font-bold text-lg text-white transition-opacity hover:opacity-90"
                                    style={{ backgroundColor: service.color }}
                                >
                                    Book your visit
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Additional Services Info */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <h3 className="heading-font text-2xl font-bold mb-4" style={{ color: colors.teal }}>
                                Puppy Intro
                            </h3>
                            <p className="body-font text-lg text-gray-600 mb-4 leading-relaxed">
                                A gentle first experience for puppies under 6 months. We focus on positive association with grooming sounds and sensations. Includes a gentle bath, slow dry, and lots of reassurance.
                            </p>
                            <p className="body-font text-base italic mb-4" style={{ color: colors.teal }}>
                                No rushing. Plenty of cuddles.
                            </p>
                            <p className="font-bold text-lg" style={{ color: colors.orange }}>£35</p>
                        </div>
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <h3 className="heading-font text-2xl font-bold mb-4" style={{ color: colors.teal }}>
                                Walk-in Services
                            </h3>
                            <p className="body-font text-lg text-gray-600 mb-4 leading-relaxed">
                                Quick, calm services — no full appointment needed.
                                <br />
                                <strong>Available:</strong> Mon, Tue, Wed before 1pm.
                            </p>
                            <ul className="space-y-2 text-lg text-gray-700">
                                <li>Nail Clipping — £10</li>
                                <li>Ear Cleaning — £10</li>
                                <li>Anal Gland Expression — £10</li>
                            </ul>
                            <p className="body-font text-base italic mt-4" style={{ color: colors.teal }}>
                                Quick, calm, and over before they realise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <SectionDivider type="curve" color={colors.blueSlate} backgroundColor={colors.teal} />

            {/* What to Expect Timeline */}
            <section className="py-20 px-6" style={{ backgroundColor: colors.blueSlate }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="heading-font text-4xl font-bold text-center mb-4 text-white">
                        What to expect on the day
                    </h2>
                    <p className="body-font text-lg text-center text-white/80 mb-16">
                        We take things at your dog's pace. Here's how a typical visit flows.
                    </p>
                    <div className="mt-8">
                        <ProcessTimeline steps={timeline} />
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
