import React, { useState, useEffect } from 'react';
import { colors } from '../constants/colors';

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
import SectionDivider from './SectionDivider';

import BookingModal from './BookingModal';
import ScrollToTop from './ScrollToTop';

// Smarter Dog Grooming Salon - Homepage Mockup V2
// Design Concept: Bold, playful, neighbourhood favourite
// Actual Brand Palette: Plum, Teal, Cyan, Green, Pink, Yellow, Orange

import { trackEvent } from '../utils/analytics';

const SmarterDogHomepage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleBookClick = (source = 'General') => {
    trackEvent('Engagement', 'Click Request Appointment', source);
    setIsBookingModalOpen(true);
  };
  const handleCloseModal = () => setIsBookingModalOpen(false);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: colors.offWhite,
        fontFamily: "'Montserrat', sans-serif"
      }}
    >
      {/* Styles moved to index.css */}


      <Navigation isLoaded={isLoaded} onBookClick={handleBookClick} />
      <HeroSection isLoaded={isLoaded} onBookClick={handleBookClick} />
      <TrustSection />
      <ServicesSection />
      <GallerySection />
      <SectionDivider type="grass" color={colors.mutedGreen} backgroundColor={colors.yellow} height="100px" />
      <HoundslySection />
      <TestimonialsSection />
      {/* OfferSection removed - breaks calm→joy→calm rhythm */}
      <CTASection onBookClick={handleBookClick} />
      <FooterSection />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseModal}
      />
      <ScrollToTop />
    </div>
  );
};

export default SmarterDogHomepage;
