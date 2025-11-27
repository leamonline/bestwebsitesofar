import React from 'react';
import { colors } from '../../constants/colors';
import PolaroidImage from '../PolaroidImage';

const GallerySection = () => {
    return (
        <>
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
        </>
    );
};

export default GallerySection;
