import React from 'react';
import { colors } from '../../constants/colors';

const Navigation = ({ isLoaded, onBookClick }) => {
    return (
        <nav
            className={`px-6 py-5 flex items-center justify-between max-w-6xl mx-auto ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
        >
            <div className="flex items-center gap-3">
                <img src="/assets/logo-text.png" alt="Smarter Dog Grooming Salon" className="h-16 w-auto object-contain" />
            </div>

            <div className="hidden md:flex items-center gap-8">
                {['Services', 'About', 'Gallery', 'Houndsly', 'Contact'].map((item) => (
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
                    onClick={onBookClick}
                    className="px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                        backgroundColor: colors.green,
                        color: 'white'
                    }}
                >
                    Request Appointment
                </button>
            </div>
        </nav>
    );
};

export default Navigation;
