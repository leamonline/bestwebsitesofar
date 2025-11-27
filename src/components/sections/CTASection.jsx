import React from 'react';
import { colors } from '../../constants/colors';

const CTASection = () => {
    return (
        <>
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
        </>
    );
};

export default CTASection;
