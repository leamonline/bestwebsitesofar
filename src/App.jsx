import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmarterDogHomepage from './components/SmarterDogHomepage';
import ServicesPage from './components/pages/ServicesPage'
import HoundslyPage from './components/pages/HoundslyPage'
import GalleryPage from './components/pages/GalleryPage'
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage'
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SmarterDogHomepage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/houndsly" element={<HoundslyPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
      </Routes>
      <CookieConsent />
      <div className="noise-overlay" />
    </Router>
  )
}

export default App
