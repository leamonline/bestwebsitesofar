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


        </>
    );
};

export default GallerySection;
