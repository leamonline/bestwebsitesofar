import React from 'react';
import { colors } from '../constants/colors';

const PolaroidImage = ({ src, caption, rotation = 0, tapeColor = colors.cyan, className = "" }) => {
    // Randomize tape rotation slightly for realism
    const [tapeRotation] = React.useState(() => Math.random() * 10 - 5);

    return (
        <div
            className={`relative bg-white p-4 pb-12 shadow-layered transform transition-all duration-500 hover:z-50 hover-lift hover-tilt texture-grain ${className}`}
            style={{
                transform: `rotate(${rotation}deg)`,
                width: '280px',
            }}
        >
            {/* Tape */}
            <div
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 opacity-80 z-20"
                style={{
                    backgroundColor: tapeColor + '90', // Transparent version
                    transform: `translateX(-50%) rotate(${tapeRotation}deg)`,
                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                    clipPath: 'polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)' // Rough edges
                }}
            />

            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden mb-4 bg-gray-100 filter sepia-[0.1] contrast-[1.05]">
                {src ? (
                    <img
                        src={src}
                        alt={caption}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-50">
                        <span className="text-4xl opacity-20">🐾</span>
                    </div>
                )}

                {/* Inner Shadow / Vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none" />

                {/* Lens Flare / Light Leak */}
                <div
                    className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none"
                    style={{
                        background: 'linear-gradient(45deg, rgba(255,255,255,0) 40%, rgba(255,200,150,0.3) 100%)'
                    }}
                />
            </div>

            {/* Caption */}
            {caption && (
                <div className="text-center relative">
                    <p
                        className="handwriting text-2xl text-gray-800 transform -rotate-1"
                        style={{ color: colors.plum }}
                    >
                        {caption}
                    </p>
                    {/* Hand-drawn underline */}
                    <svg className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-2 opacity-60" viewBox="0 0 100 5">
                        <path d="M0 2 Q 50 5, 100 2" stroke={tapeColor} strokeWidth="2" fill="none" strokeLinecap="round" />
                    </svg>
                </div>
            )}

            {/* Thumb Smudge (Subtle Imperfection) */}
            <div
                className="absolute bottom-4 right-4 w-12 h-12 bg-black opacity-[0.03] rounded-full blur-md pointer-events-none"
            />
        </div>
    );
};

export default PolaroidImage;
