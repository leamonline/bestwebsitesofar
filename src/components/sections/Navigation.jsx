import React from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../../constants/colors';



const Navigation = ({ isLoaded, onBookClick }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
                : 'bg-transparent py-6'
                } ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link to="/" className="block relative group">
                        <img
                            src="/assets/logo-text.png"
                            alt="Smarter Dog Grooming Salon"
                            className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'
                                }`}
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-2">
                    <Link
                        to="/services"
                        className="font-medium text-sm transition-colors relative group px-3 py-1 hover-wiggle"
                        style={{ color: colors.teal }}
                    >
                        Services
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
                    </Link>

                    <Link
                        to="/houndsly"
                        className="font-medium text-sm transition-colors relative group px-3 py-1 hover-wiggle"
                        style={{ color: colors.teal }}
                    >
                        Houndsly
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
                    </Link>

                    <Link
                        to="/approach"
                        className="font-medium text-sm transition-colors relative group px-3 py-1 hover-wiggle"
                        style={{ color: colors.teal }}
                    >
                        Our Approach
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
                    </Link>

                    <Link
                        to="/faq"
                        className="font-medium text-sm transition-colors relative group px-3 py-1 hover-wiggle"
                        style={{ color: colors.teal }}
                    >
                        FAQ
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
                    </Link>

                    <div className="ml-6">
                        <button
                            onClick={() => onBookClick('Navigation')}
                            className="px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg active-squish"
                            style={{
                                backgroundColor: colors.green,
                                color: 'white'
                            }}
                        >
                            Book your visit
                        </button>
                    </div>
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
                <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl p-6 rounded-b-3xl flex flex-col gap-4 animate-fade-in-up border-t border-gray-100">
                    <Link
                        to="/services"
                        className="text-lg font-medium py-2 border-b border-gray-50"
                        style={{ color: colors.teal }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Services
                    </Link>
                    <Link
                        to="/houndsly"
                        className="text-lg font-medium py-2 border-b border-gray-50"
                        style={{ color: colors.teal }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Houndsly
                    </Link>
                    <Link
                        to="/approach"
                        className="text-lg font-medium py-2 border-b border-gray-50"
                        style={{ color: colors.teal }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Our Approach
                    </Link>
                    <Link
                        to="/faq"
                        className="text-lg font-medium py-2 border-b border-gray-50"
                        style={{ color: colors.teal }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        FAQ
                    </Link>
                    <button
                        onClick={() => {
                            setIsMenuOpen(false);
                            onBookClick('Mobile Menu');
                        }}
                        className="w-full py-3 rounded-full font-bold text-white mt-2 active-squish"
                        style={{ backgroundColor: colors.green }}
                    >
                        Book your visit
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
