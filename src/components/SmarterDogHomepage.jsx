import React, { useState, useEffect } from 'react';
import DogSilhouette from './DogSilhouette';

// Smarter Dog Grooming Salon - Homepage Mockup V2
// Design Concept: Bold, playful, neighbourhood favourite
// Actual Brand Palette: Plum, Teal, Cyan, Green, Pink, Yellow, Orange

// Brand Colors
const colors = {
    // Anchors
    teal: '#2A6F6B', // Darker teal for better contrast on yellow
    offWhite: '#FAF9F6',
    // Brights - More Vibrant/Saturated
    cyan: '#00C2FF',
    green: '#00D94A',
    pink: '#FF2E63',
    yellow: '#FFCC00',
    orange: '#FF6B00',
    // Tints (kept for cards/elements, but not section backgrounds)
    cyanLight: '#E0F7FF',
    greenLight: '#E3FCE8',
    tealLight: '#E8F5F5',
    pinkLight: '#FFE3EB',
    yellowLight: '#FFF9DB',
};

// Polaroid-style image component with optional washi tape
const PolaroidImage = ({ caption, rotation = 0, tapeColor = null }) => (
    <div
        className="group cursor-pointer relative"
        style={{
            transform: `rotate(${rotation}deg)`,
            transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
    >
        {/* Washi tape decoration */}
        {tapeColor && (
            <div
                className="absolute -top-2 left-1/4 w-16 h-5 z-10"
                style={{
                    backgroundColor: tapeColor,
                    transform: 'rotate(-5deg)',
                    opacity: 0.85,
                    borderRadius: '2px',
                }}
            />
        )}
        <div
            className="bg-white p-3 pb-14 rounded shadow-lg hover:shadow-xl transition-all duration-300 group-hover:rotate-0 group-hover:scale-105"
            style={{
                boxShadow: `0 4px 20px rgba(106, 54, 88, 0.12), 0 2px 8px rgba(106, 54, 88, 0.08)`
            }}
        >
            <div
                className="w-48 h-48 rounded-sm overflow-hidden flex items-center justify-center"
                style={{
                    background: `linear-gradient(135deg, ${colors.cyanLight} 0%, ${colors.greenLight} 100%)`,
                }}
            >
                {/* Placeholder paw icon */}
                <svg className="w-16 h-16 opacity-30" style={{ color: colors.teal }} fill="currentColor" viewBox="0 0 512 512">
                    <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
                </svg>
            </div>
            <p
                className="mt-4 text-center"
                style={{
                    fontFamily: "'Caveat', cursive",
                    color: colors.teal,
                    fontSize: '20px',
                    fontWeight: 500,
                }}
            >
                {caption}
            </p>
        </div>
    </div>
);

// Service card component with color coding
const ServiceCard = ({ icon, title, desc, bgColor, accentColor }) => (
    <div
        className="p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden"
        style={{ backgroundColor: bgColor }}
    >
        {/* Decorative circle */}
        <div
            className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20"
            style={{ backgroundColor: accentColor }}
        />
        <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 relative z-10"
            style={{ backgroundColor: 'white' }}
        >
            {icon}
        </div>
        <h4
            className="heading-font font-semibold text-xl mb-3 relative z-10"
            style={{ color: colors.teal }}
        >
            {title}
        </h4>
        <p
            className="body-font leading-relaxed relative z-10"
            style={{ color: colors.teal }}
        >
            {desc}
        </p>
    </div>
);

const SmarterDogHomepage = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="min-h-screen"
            style={{
                backgroundColor: colors.offWhite,
                fontFamily: "'Montserrat', sans-serif"
            }}
        >
            {/* Google Fonts */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Montserrat:wght@400;500;600&family=Caveat:wght@400;500;600&display=swap');
        
        .heading-font {
          font-family: 'Quicksand', sans-serif;
        }
        
        .body-font {
          font-family: 'Montserrat', sans-serif;
        }
        
        .handwriting {
          font-family: 'Caveat', cursive;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce 3s ease-in-out infinite;
        }
      `}</style>

            {/* Announcement Bar */}
            <div
                className="py-2 px-4 text-center"
                style={{ backgroundColor: colors.cyan }}
            >
                <p
                    className="body-font text-sm font-semibold"
                    style={{ color: 'white' }}
                >
                    🐕 Last-minute slots available this week! <a href="#" className="underline">Book now →</a>
                </p>
            </div>

            {/* Navigation */}
            <nav
                className={`px-6 py-5 flex items-center justify-between max-w-6xl mx-auto ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
            >
                <div className="flex items-center gap-3">
                    <img src="/assets/logo-text.png" alt="Smarter Dog Grooming Salon" className="h-16 w-auto object-contain" />
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {['Services', 'About', 'Gallery', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="body-font text-sm font-medium transition-colors duration-200"
                            style={{ color: colors.teal }}
                            onMouseEnter={(e) => e.target.style.color = colors.teal}
                            onMouseLeave={(e) => e.target.style.color = colors.teal}
                        >
                            {item}
                        </a>
                    ))}
                    <button
                        className="px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        style={{
                            backgroundColor: colors.green,
                            color: 'white'
                        }}
                    >
                        Book Now
                    </button>
                </div>
            </nav>

            {/* Hero Section - Cyan Theme */}
            <section className="pt-8 pb-20 relative overflow-hidden" style={{ backgroundColor: colors.cyan }}>
                <div className="px-6 relative">
                    {/* Background Dog */}
                    <div className="absolute top-20 right-0 md:right-20 z-0 opacity-20 pointer-events-none">
                        <DogSilhouette
                            color={colors.yellow}
                            className="w-96 h-auto rotate-12"
                        />
                    </div>
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div className={`${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            {/* Logo */}
                            <div className="flex items-center gap-2">
                                <img src="/assets/logo-text.png" alt="Smarter Dog Grooming Salon" className="h-12 w-auto object-contain" />
                            </div>
                            {/* Badge */}
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                                style={{ backgroundColor: 'white' }}
                            >
                                <span
                                    className="handwriting text-xl"
                                    style={{ color: colors.cyan }}
                                >
                                    Est. 1982 in Ashton-under-Lyne
                                </span>
                                <span className="animate-bounce-slow">🎉</span>
                            </div>

                            <h2
                                className="heading-font font-bold text-5xl md:text-6xl leading-tight mb-6"
                                style={{ color: 'white' }}
                            >
                                Where every dog gets the{' '}
                                <span
                                    className="relative inline-block"
                                    style={{ color: 'white' }}
                                >
                                    VIP treatment
                                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                        <path d="M2 8 Q 50 2, 100 8 T 198 8" stroke={colors.yellow} strokeWidth="4" strokeLinecap="round" fill="none" />
                                    </svg>
                                </span>
                            </h2>
                            <p
                                className="body-font text-lg leading-relaxed mb-8"
                                style={{ color: 'white', opacity: 0.9 }}
                            >
                                Four decades of wagging tails, happy owners, and the kind of care
                                that only comes from a family who genuinely loves what they do.
                                Your dog isn't just another appointment—they're part of our pack.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    className="px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2"
                                    style={{
                                        backgroundColor: colors.yellow,
                                        color: colors.teal
                                    }}
                                >
                                    <span>Book Your Visit</span>
                                    <span>→</span>
                                </button>
                                <button
                                    className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 border-2"
                                    style={{
                                        borderColor: 'white',
                                        color: 'white',
                                        backgroundColor: 'transparent'
                                    }}
                                >
                                    Meet the Team
                                </button>
                            </div>

                            {/* Trust indicators */}
                            <div className="flex items-center gap-6 mt-10">
                                <div className="flex -space-x-3">
                                    {[colors.cyan, colors.green, colors.pink, colors.yellow].map((color, i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-sm"
                                            style={{ backgroundColor: color }}
                                        >
                                            🐕
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} style={{ color: colors.yellow }}>★</span>
                                        ))}
                                    </div>
                                    <p
                                        className="body-font text-sm"
                                        style={{ color: 'white' }}
                                    >
                                        <strong>4.9</strong> from 500+ happy pups
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Polaroid Cluster */}
                        <div className={`relative h-[500px] ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                            <div className="absolute top-0 left-4 z-10">
                                <PolaroidImage
                                    caption="Bella's spa day ✨"
                                    rotation={-5}
                                    tapeColor={colors.cyan}
                                />
                            </div>
                            <div className="absolute top-24 right-0 z-20">
                                <PolaroidImage
                                    caption="Looking dapper!"
                                    rotation={4}
                                    tapeColor={colors.cyan}
                                />
                            </div>
                            <div className="absolute bottom-0 left-1/4 z-30">
                                <PolaroidImage
                                    caption="Fresh & fluffy 🛁"
                                    rotation={-2}
                                    tapeColor={colors.cyan}
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* Wave Transition: Cyan -> Green */}
            {/* Wave Transition: Cyan -> Green */}
            <div style={{ backgroundColor: colors.cyan, lineHeight: 0 }}>
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '60px' }}>
                    <path d="M0 120L1440 120L1440 0C1440 0 1082.5 99.5 720 99.5C357.5 99.5 0 0 0 0L0 120Z" fill={colors.green} />
                </svg>
            </div>

            {/* Trust Banner - Green Theme */}
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
            {/* Slant Transition: Green -> Pink */}
            <div style={{ backgroundColor: colors.green, lineHeight: 0, position: 'relative' }}>
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '60px' }}>
                    <path d="M0 100L1440 100L1440 0L0 100Z" fill={colors.pink} />
                </svg>
            </div>

            {/* Services Section - Pink Theme */}
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
            </section >

            {/* Curve Transition: Pink -> Yellow */}
            <div style={{ backgroundColor: colors.pink, lineHeight: 0 }}>
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '80px' }}>
                    <path d="M0 0L1440 0L1440 80C1440 80 1100 120 720 120C340 120 0 80 0 80L0 0Z" fill={colors.pink} />
                    <path d="M0 120L1440 120L1440 80C1440 80 1100 120 720 120C340 120 0 80 0 80L0 120Z" fill={colors.yellow} />
                </svg>
            </div>

            {/* Gallery Section - Yellow Theme */}
            <section
                className="py-20 relative overflow-hidden"
                style={{ backgroundColor: colors.yellow }}
            >
                {/* Decorative elements */}
                <div
                    className="absolute top-10 left-10 text-6xl opacity-20"
                >
                    🐾
                </div>
                <div
                    className="absolute bottom-10 right-10 text-6xl opacity-20"
                >
                    🐾
                </div>

                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span
                            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                            style={{ backgroundColor: 'white', color: colors.teal }}
                        >
                            Gallery
                        </span>
                        <h3
                            className="heading-font font-bold text-4xl md:text-5xl"
                            style={{ color: colors.teal }}
                        >
                            Fresh from the Salon
                        </h3>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        <PolaroidImage caption="Max after his trim 🐕" rotation={-4} tapeColor={colors.pink} />
                        <PolaroidImage caption="Daisy loves bath time" rotation={3} tapeColor={colors.cyan} />
                        <PolaroidImage caption="Sir Woofs-a-lot 👑" rotation={-2} tapeColor={colors.green} />
                        <PolaroidImage caption="Fluffy & fabulous" rotation={5} tapeColor={colors.orange} />
                    </div>
                </div>
            </section>

            {/* ZigZag Transition: Yellow -> Cyan */}
            <div style={{ backgroundColor: colors.yellow, lineHeight: 0 }}>
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '40px' }}>
                    <path d="M0 60L1440 60L1440 0L1380 40L1320 0L1260 40L1200 0L1140 40L1080 0L1020 40L960 0L900 40L840 0L780 40L720 0L660 40L600 0L540 40L480 0L420 40L360 0L300 40L240 0L180 40L120 0L60 40L0 0L0 60Z" fill={colors.cyan} />
                </svg>
            </div>

            {/* Testimonial Section - Cyan Theme */}
            <section className="py-20" style={{ backgroundColor: colors.cyan }}>
                <div className="px-6">
                    <div className="max-w-6xl mx-auto text-center mb-16">
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
                            <div
                                key={i}
                                className="p-8 rounded-3xl transition-all duration-300 hover:shadow-xl relative overflow-hidden"
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

            {/* Special Offer Banner - Green Theme */}
            <section className="py-20 relative overflow-hidden" style={{ backgroundColor: colors.green }}>
                <div className="px-6 relative">
                    {/* Background Dog */}
                    <div className="absolute top-10 right-10 z-0 opacity-10 pointer-events-none">
                        <DogSilhouette
                            color="white"
                            className="w-80 h-auto rotate-12"
                        />
                    </div>
                    <div
                        className="max-w-6xl mx-auto rounded-3xl p-8 md:p-12 relative overflow-hidden z-10"
                        style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 text-4xl animate-bounce-slow">⭐</div>
                        <div className="absolute bottom-4 left-4 text-4xl opacity-50">🐕</div>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                            <div>
                                <span
                                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                                    style={{ backgroundColor: 'white', color: colors.green }}
                                >
                                    ✨ NEW CUSTOMER OFFER
                                </span>
                                <h4
                                    className="heading-font font-bold text-3xl md:text-4xl mb-2"
                                    style={{ color: 'white' }}
                                >
                                    First groom? Get 20% off!
                                </h4>
                                <p
                                    className="body-font"
                                    style={{ color: 'white', opacity: 0.9 }}
                                >
                                    Mention this offer when you book. Valid for new customers only.
                                </p>
                            </div>
                            <button
                                className="px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap"
                                style={{
                                    backgroundColor: 'white',
                                    color: colors.green
                                }}
                            >
                                Claim Offer →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rounded Transition: Green -> Pink */}
            <div style={{ backgroundColor: colors.green, lineHeight: 0 }}>
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '60px' }}>
                    <path d="M0 100C400 100 600 0 1440 0L1440 100H0Z" fill={colors.pink} />
                </svg>
            </div>

            {/* CTA Section - Pink Theme */}
            <section
                className="py-20 relative overflow-hidden"
                style={{ backgroundColor: colors.pink }}
            >
                {/* Decorative circles */}
                <div
                    className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-10"
                    style={{ backgroundColor: 'white' }}
                />
                <div
                    className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-10"
                    style={{ backgroundColor: 'white' }}
                />

                <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                    <span
                        className="handwriting text-3xl"
                        style={{ color: 'white' }}
                    >
                        Ready for their pamper?
                    </span>
                    <h3
                        className="heading-font font-bold text-4xl md:text-5xl mt-4 mb-6"
                        style={{ color: 'white' }}
                    >
                        Book your dog's VIP experience today
                    </h3>
                    <p
                        className="body-font text-lg mb-8"
                        style={{ color: 'rgba(255,255,255,0.9)' }}
                    >
                        Open Monday–Wednesday, 8:30am–3:00pm.
                        Limited slots available—your pup deserves the best!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            className="px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            style={{
                                backgroundColor: 'white',
                                color: colors.pink
                            }}
                        >
                            Book Now
                        </button>
                        <button
                            className="px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 border-2 flex items-center gap-2"
                            style={{
                                borderColor: 'white',
                                color: 'white',
                                backgroundColor: 'transparent'
                            }}
                        >
                            <span>📞</span>
                            <span>0161 XXX XXXX</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Triangle Transition: Pink -> Yellow */}
            <div style={{ backgroundColor: colors.pink, lineHeight: 0 }}>
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '60px' }}>
                    <path d="M720 80L1440 0H0L720 80Z" fill={colors.yellow} />
                </svg>
            </div>

            {/* Footer - Yellow Theme */}
            <footer
                className="px-6 py-16 relative overflow-hidden"
                style={{ backgroundColor: colors.yellow }}
            >
                {/* Background Dog */}
                <div className="absolute bottom-0 left-10 z-0 opacity-10 pointer-events-none">
                    <DogSilhouette
                        color={colors.teal}
                        className="w-[25rem] h-auto"
                    />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <div className="mb-6">
                                <img src="/assets/logo-text.png" alt="Smarter Dog Grooming Salon" className="h-16 w-auto object-contain mb-4" />
                            </div>
                            <p
                                className="body-font text-sm leading-relaxed"
                                style={{ color: colors.teal }}
                            >
                                Family-run since 1982. Where every dog gets treated like the VIP they truly are.
                            </p>
                            {/* Social icons */}
                            <div className="flex gap-3 mt-4">
                                {['📘', '📸', '📱'].map((icon, i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
                                        style={{ backgroundColor: 'white' }}
                                    >
                                        {icon}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h5
                                className="heading-font font-semibold mb-4"
                                style={{ color: colors.teal }}
                            >
                                Opening Hours
                            </h5>
                            <div
                                className="body-font text-sm space-y-2"
                                style={{ color: colors.teal }}
                            >
                                <p className="flex justify-between">
                                    <span>Monday</span>
                                    <span style={{ color: colors.teal }}>8:30am – 3:00pm</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Tuesday</span>
                                    <span style={{ color: colors.teal }}>8:30am – 3:00pm</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Wednesday</span>
                                    <span style={{ color: colors.green }}>8:30am – 3:00pm</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Thu–Sun</span>
                                    <span style={{ color: colors.pink }}>Closed</span>
                                </p>
                            </div>
                        </div>

                        <div>
                            <h5
                                className="heading-font font-semibold mb-4"
                                style={{ color: colors.teal }}
                            >
                                Find Us
                            </h5>
                            <div
                                className="body-font text-sm space-y-2"
                                style={{ color: colors.teal }}
                            >
                                <p>Ashton-under-Lyne</p>
                                <p>Greater Manchester</p>
                                <p>United Kingdom</p>
                            </div>
                        </div>

                        <div>
                            <h5
                                className="heading-font font-semibold mb-4"
                                style={{ color: colors.teal }}
                            >
                                Get in Touch
                            </h5>
                            <div
                                className="body-font text-sm space-y-2"
                                style={{ color: colors.teal }}
                            >
                                <p>hello@smarterdog.co.uk</p>
                                <p>0161 XXX XXXX</p>
                                <p
                                    className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full text-xs"
                                    style={{ backgroundColor: colors.green, color: 'white' }}
                                >
                                    💬 WhatsApp Available
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 body-font text-sm"
                        style={{ borderColor: colors.tealLight, color: colors.teal }}
                    >
                        <p>© 2025 Smarter Dog Grooming Salon. All rights reserved.</p>
                        <p
                            className="handwriting text-lg"
                            style={{ color: colors.teal }}
                        >
                            Made with 🐾 in Ashton-under-Lyne
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SmarterDogHomepage;
