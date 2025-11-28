import React, { useState, useEffect } from 'react';
import { colors } from '../constants/colors';
import AnnouncementBar from './sections/AnnouncementBar';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import TrustSection from './sections/TrustSection';
import ServicesSection from './sections/ServicesSection';
import GallerySection from './sections/GallerySection';
import TestimonialsSection from './sections/TestimonialsSection';
import OfferSection from './sections/OfferSection';
import CTASection from './sections/CTASection';
import FooterSection from './sections/FooterSection';
import HoundslySection from './sections/HoundslySection';

import BookingModal from './BookingModal';

// Smarter Dog Grooming Salon - Homepage Mockup V2
// Design Concept: Bold, playful, neighbourhood favourite
// Actual Brand Palette: Plum, Teal, Cyan, Green, Pink, Yellow, Orange

const SmarterDogHomepage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleBookClick = () => setIsBookingModalOpen(true);
  const handleCloseModal = () => setIsBookingModalOpen(false);

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

      <AnnouncementBar />
      <Navigation isLoaded={isLoaded} onBookClick={handleBookClick} />
      <HeroSection isLoaded={isLoaded} onBookClick={handleBookClick} />
      <TrustSection />
      <ServicesSection />
      <GallerySection />
      <HoundslySection />
      <TestimonialsSection />
      <OfferSection onBookClick={handleBookClick} />
      <CTASection onBookClick={handleBookClick} />
      <FooterSection />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default SmarterDogHomepage;
