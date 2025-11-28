import React from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../../constants/colors';

const Navigation = ({ isLoaded, onBookClick }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav
            className={`px-6 py-5 max-w-6xl mx-auto relative z-40 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link to="/">
                        <img src="/assets/logo-text.png" alt="Smarter Dog Grooming Salon" className="h-16 w-auto object-contain" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        to="/services"
                        className="body-font text-sm font-medium transition-colors duration-200"
                        style={{ color: colors.teal }}
                    >
                        Services
                    </Link>
                    <Link
                        to="/gallery"
                        className="body-font text-sm font-medium transition-colors duration-200"
                        style={{ color: colors.teal }}
                    >
                        Gallery
                    </Link>
                    <Link
                        to="/houndsly"
                        className="body-font text-sm font-medium transition-colors duration-200"
                        style={{ color: colors.teal }}
                    >
                        Houndsly
                    </Link>
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

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={toggleMenu}
                    style={{ color: colors.teal }}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl p-6 rounded-b-3xl flex flex-col gap-4 animate-fade-in-up border-t border-gray-100">
                    <Link
                        to="/services"
                        className="text-lg font-medium py-2 border-b border-gray-50"
                        style={{ color: colors.teal }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Services
                    </Link>
                    <Link
                        to="/gallery"
                        className="text-lg font-medium py-2 border-b border-gray-50"
                        style={{ color: colors.teal }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Gallery
                    </Link>
                    <Link
                        to="/houndsly"
                        className="text-lg font-medium py-2 border-b border-gray-50"
                        style={{ color: colors.teal }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Houndsly
                    </Link>
                    <button
                        onClick={() => {
                            setIsMenuOpen(false);
                            onBookClick();
                        }}
                        className="w-full py-3 rounded-full font-bold text-white mt-2"
                        style={{ backgroundColor: colors.green }}
                    >
                        Request Appointment
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
