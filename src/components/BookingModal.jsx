import React, { useState } from 'react';
import { colors } from '../constants/colors';

const BookingModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState('form'); // 'form' or 'success'
    const [formData, setFormData] = useState({
        ownerName: '',
        phone: '',
        email: '',
        dogName: '',
        breed: '',
        service: 'Full Groom',
        preferredTime: '',
        notes: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data to a backend
        console.log('Booking requested:', formData);
        setStep('success');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className="relative bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-fade-in-up"
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

                {step === 'form' ? (
                    <div className="p-8">
                        <div className="text-center mb-8">
                            <span
                                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                                style={{ backgroundColor: colors.cyan + '20', color: colors.teal }}
                            >
                                📅 Request Appointment
                            </span>
                            <h2
                                id="modal-title"
                                className="heading-font font-bold text-3xl mb-2"
                                style={{ color: colors.teal }}
                            >
                                Let's get you booked in!
                            </h2>
                            <p className="body-font text-sm text-gray-600">
                                We'll check our diary and get back to you ASAP.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold mb-1" style={{ color: colors.teal }}>Your Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="ownerName"
                                        value={formData.ownerName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-xl border-2 border-gray-100 focus:border-cyan-400 focus:outline-none transition-colors"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-1" style={{ color: colors.teal }}>Phone</label>
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-xl border-2 border-gray-100 focus:border-cyan-400 focus:outline-none transition-colors"
                                        placeholder="07123..."
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold mb-1" style={{ color: colors.teal }}>Dog's Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="dogName"
                                        value={formData.dogName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-xl border-2 border-gray-100 focus:border-cyan-400 focus:outline-none transition-colors"
                                        placeholder="Barnaby"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-1" style={{ color: colors.teal }}>Breed</label>
                                    <input
                                        type="text"
                                        name="breed"
                                        value={formData.breed}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-xl border-2 border-gray-100 focus:border-cyan-400 focus:outline-none transition-colors"
                                        placeholder="Cockapoo"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-1" style={{ color: colors.teal }}>Service Required</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-xl border-2 border-gray-100 focus:border-cyan-400 focus:outline-none transition-colors bg-white"
                                >
                                    <option value="Full Groom">Full Groom (Bath, Cut, Nails, Ears)</option>
                                    <option value="Maintenance Groom">Maintenance Groom (Bath & Tidy)</option>
                                    <option value="De-Shedding Package">De-Shedding Package</option>
                                    <option value="Puppy Intro">Puppy Intro (Under 6 months)</option>
                                    <option value="Nail Clip">Nail Clip Only</option>
                                    <option value="Anal Glands">Anal Gland Expression</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-1" style={{ color: colors.teal }}>Preferred Days/Times</label>
                                <input
                                    type="text"
                                    name="preferredTime"
                                    value={formData.preferredTime}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-xl border-2 border-gray-100 focus:border-cyan-400 focus:outline-none transition-colors"
                                    placeholder="e.g. Monday mornings, or any Friday"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-1" style={{ color: colors.teal }}>Any Notes?</label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    rows="2"
                                    className="w-full px-4 py-2 rounded-xl border-2 border-gray-100 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                                    placeholder="Nervous dog? Medical issues? Let us know."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl font-bold text-lg text-white transition-all hover:scale-[1.02] hover:shadow-lg mt-4"
                                style={{ backgroundColor: colors.green }}
                            >
                                Send Request
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="p-12 text-center">
                        <div className="text-6xl mb-6 animate-bounce-slow">🎉</div>
                        <h2
                            className="heading-font font-bold text-3xl mb-4"
                            style={{ color: colors.teal }}
                        >
                            Request Received!
                        </h2>
                        <p className="body-font text-lg text-gray-600 mb-8">
                            Thanks {formData.ownerName}! We'll check the diary for {formData.dogName} and text you shortly to confirm a slot.
                        </p>
                        <button
                            onClick={onClose}
                            className="px-8 py-3 rounded-full font-bold text-white transition-all hover:scale-105"
                            style={{ backgroundColor: colors.teal }}
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingModal;
