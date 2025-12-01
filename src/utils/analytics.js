import ReactGA from 'react-ga4';

// Initialize GA4 - Replace with your Measurement ID
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initializeAnalytics = () => {
    if (GA_MEASUREMENT_ID) {
        ReactGA.initialize(GA_MEASUREMENT_ID);
        console.log('Analytics Initialized');
    }
};

export const trackEvent = (category, action, label) => {
    if (localStorage.getItem('cookieConsent') === 'true' && GA_MEASUREMENT_ID) {
        ReactGA.event({
            category,
            action,
            label
        });
    }
};

export const trackPageView = (path) => {
    if (localStorage.getItem('cookieConsent') === 'true' && GA_MEASUREMENT_ID) {
        ReactGA.send({ hitType: "pageview", page: path });
    }
};
