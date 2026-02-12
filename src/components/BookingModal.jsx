import React from 'react';
import BookingForm from './BookingForm';
import { useFocusTrap } from '../hooks/useFocusTrap';

const BookingModal = ({ isOpen, onClose, initialFormData, prefillSummary }) => {
    const modalRef = useFocusTrap(isOpen, onClose);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                ref={modalRef}
                className="relative bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-fade-in-up max-h-[90vh] overflow-y-auto"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                    aria-label="Close modal"
                >
                    ✕
                </button>

                <BookingForm
                    headingTag="h2"
                    headingId="modal-title"
                    onClose={onClose}
                    variant="modal"
                    initialFormData={initialFormData}
                    prefillSummary={prefillSummary}
                />
            </div>
        </div>
    );
};

export default BookingModal;
