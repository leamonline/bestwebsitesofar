import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmarterDogHomepage from './components/SmarterDogHomepage';
import ServicesPage from './components/pages/ServicesPage'
import HoundslyPage from './components/pages/HoundslyPage'
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage'
import OurApproachPage from './components/pages/OurApproachPage'
import FAQPage from './components/pages/FAQPage'
import TermsPage from './components/pages/TermsPage'
import MattedCoatPolicyPage from './components/pages/MattedCoatPolicyPage'
import BookingPage from './components/pages/BookingPage'
import NotFoundPage from './components/pages/NotFoundPage'
import CookieConsent from './components/CookieConsent';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollRestoration from './components/ScrollRestoration';
import { usePageTracking } from './hooks/usePageTracking';

// Component that uses the page tracking hook
function PageTracker() {
  usePageTracking();
  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <PageTracker />
        <ScrollRestoration />
        <Routes>
          <Route path="/" element={<SmarterDogHomepage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/houndsly" element={<HoundslyPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/approach" element={<OurApproachPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/matted-coat-policy" element={<MattedCoatPolicyPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <CookieConsent />
        <div className="noise-overlay" />
      </Router>
    </ErrorBoundary>
  )
}

export default App

