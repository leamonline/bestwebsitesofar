import React, { useState } from 'react';
import { colors } from '../constants/colors';

import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import TrustSection from './sections/TrustSection';
import ServicesSection from './sections/ServicesSection';
import AftercareGuidesSection from './sections/AftercareGuidesSection';
import GallerySection from './sections/GallerySection';
import TestimonialsSection from './sections/TestimonialsSection';
import CTASection from './sections/CTASection';
import LocationCredibilitySection from './sections/LocationCredibilitySection';
import FooterSection from './sections/FooterSection';
import HoundslySection from './sections/HoundslySection';
import SectionDivider from './SectionDivider';

import BookingModal from './BookingModal';
import ScrollToTop from './ScrollToTop';

import { trackEvent } from '../utils/analytics';

const SmarterDogHomepage = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

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
      <Navigation isLoaded onBookClick={handleBookClick} />
      <main id="main-content">
        <HeroSection isLoaded onBookClick={handleBookClick} />
        <TrustSection />
        <ServicesSection />
        <AftercareGuidesSection onBookClick={handleBookClick} />
        <GallerySection />
        <SectionDivider type="grass" color={colors.mutedGreen} backgroundColor={colors.yellow} height="100px" />
        <HoundslySection />
        <TestimonialsSection />
        <LocationCredibilitySection />
        <CTASection onBookClick={handleBookClick} />
      </main>
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
