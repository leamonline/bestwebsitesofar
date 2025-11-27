import React from 'react';
import { colors } from '../constants/colors';

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

export default ServiceCard;
