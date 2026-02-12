import React from 'react';

export const BrushIcon = ({ className = 'w-6 h-6' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 7h9a3 3 0 0 1 0 6H8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 10h5M4 7.5v5M20 16l-4-3M18 19l-2-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 13.5c-.8 1.4-1.2 2.4-1.2 3 0 1.7 1.5 3 3.2 3h3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);

export const CalendarCycleIcon = ({ className = 'w-6 h-6' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 3.5v4M16 3.5v4M3.5 10h17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 14.5a3 3 0 1 0 2.5 4.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12.3 17.7l-.7 1.8-1.8-.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const MapPinTrailIcon = ({ className = 'w-6 h-6' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21s6-5.5 6-10a6 6 0 1 0-12 0c0 4.5 6 10 6 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="11" r="2.3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3.5 18.5c1.5-1 3.2-1.5 5.1-1.5M20.5 18.5c-1.5-1-3.2-1.5-5.1-1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);

export const ParkingIcon = ({ className = 'w-6 h-6' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 16V8h3.2a2.4 2.4 0 1 1 0 4.8H9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const RouteClockIcon = ({ className = 'w-6 h-6' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7.5v4.7l3 1.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12H2.5M21.5 12H20M12 4V2.5M12 21.5V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);

export const ChecklistIcon = ({ className = 'w-6 h-6' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="3.5" width="16" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 8.5h8M8 12h8M8 15.5h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 8.5l.9.9 1.4-1.4M6 12l.9.9 1.4-1.4M6 15.5l.9.9 1.4-1.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
