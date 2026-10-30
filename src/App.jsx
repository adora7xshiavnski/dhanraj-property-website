import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import ScrollManager from './components/ScrollManager.jsx';
import BackToTop from './components/BackToTop.jsx';
import MetaPixelTracker from './components/MetaPixelTracker.jsx';
import Home from './pages/Home.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      <ScrollManager />
      <MetaPixelTracker />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
