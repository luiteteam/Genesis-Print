import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About';
import ServicesPage from './components/ServicesPage';
import Gallery from './components/Gallery';
import PrePress from './components/PrePress';
import Press from './components/Press';
import PostPress from './components/PostPress';
import { HelmetProvider } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BrandLoader from './components/BrandLoader';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <LoaderWrapper />
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/prepress" element={<PrePress />} />
            <Route path="/press" element={<Press />} />
            <Route path="/postpress" element={<PostPress />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

function LoaderWrapper() {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(location.pathname === '/');

  useEffect(() => {
    setShowLoader(location.pathname === '/');
  }, [location.pathname]);

  if (!showLoader) return null;
  return <BrandLoader onFinish={() => setShowLoader(false)} />;
}

export default App;
