import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import CookieConsent from './components/CookieConsent';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollRestoration from './components/ScrollRestoration';
import { usePageTracking } from './hooks/usePageTracking';

// Lazy-loaded page components for code splitting
const SmarterDogHomepage = lazy(() => import('./components/SmarterDogHomepage'));
const ServicesPage = lazy(() => import('./components/pages/ServicesPage'));
const HoundslyPage = lazy(() => import('./components/pages/HoundslyPage'));
const PrivacyPolicyPage = lazy(() => import('./components/pages/PrivacyPolicyPage'));
const OurApproachPage = lazy(() => import('./components/pages/OurApproachPage'));
const FAQPage = lazy(() => import('./components/pages/FAQPage'));
const TermsPage = lazy(() => import('./components/pages/TermsPage'));
const MattedCoatPolicyPage = lazy(() => import('./components/pages/MattedCoatPolicyPage'));
const BookingPage = lazy(() => import('./components/pages/BookingPage'));
const NotFoundPage = lazy(() => import('./components/pages/NotFoundPage'));

// Loading fallback for lazy-loaded routes
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Loading...</div>
    </div>
  );
}

// Layout component that handles page tracking and common elements
function AppLayout() {
  usePageTracking();

  return (
    <>
      <ScrollRestoration />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
      <CookieConsent />
      <div className="noise-overlay" />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
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
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  )
}

export default App
