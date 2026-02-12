import React, { useState, useEffect } from 'react';
import { colors } from '../../constants/colors';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Navigation from '../sections/Navigation';
import FooterSection from '../sections/FooterSection';
import BookingForm from '../BookingForm';

const BookingPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useDocumentTitle('Book Your Visit');

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.offWhite }}>
            <Navigation isLoaded={isLoaded} />

            <main id="main-content" className="pt-24 pb-16 px-6">
                <div className="max-w-lg mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl">
                        <BookingForm
                            headingTag="h1"
                            showAlternativeContact
                            variant="page"
                        />
                    </div>
                </div>
            </main>

            <FooterSection />
        </div>
    );
};

export default BookingPage;
