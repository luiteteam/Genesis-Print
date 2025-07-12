import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '/about', isHash: false },
    { name: 'Services', href: '/services', isHash: false },
    { name: 'Gallery', href: '/gallery', isHash: false },
    { name: 'Products', href: '/products', isHash: false },
    // { name: 'Contact', href: '/contact', isHash: false },
  ];

  const handleNavClick = (href: string, isHash: boolean) => {
    setIsOpen(false);

    if (isHash && location.pathname !== '/') {
      // If we're not on home page and clicking a hash link, navigate to home first
      window.location.href = href;
    } else if (isHash) {
      // If we're on home page, smooth scroll to section
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-blue-200 backdrop-blur-md shadow-lg' : 'bg-blue-900/20 backdrop-blur-sm'}`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <img src="/logo.png" alt="Genesis Logo" className="h-[60px] w-auto object-contain" />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.isHash ? (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.isHash);
                    }}
                    className={`font-medium transition-colors duration-200 ${scrolled ? 'text-blue-900 hover:text-primary-600' : 'text-white hover:text-blue-200'}`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-medium transition-colors duration-200 ${scrolled ? 'text-blue-900 hover:text-primary-600' : 'text-white hover:text-blue-200'} ${location.pathname === item.href ? (scrolled ? 'text-primary-600' : 'text-blue-200') : ''}`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname === '/contact') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  window.location.href = '/contact';
                }
              }}
              className={`${scrolled ? 'btn-primary' : 'bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:border-white/50'} inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             Contact
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'hover:bg-blue-100' : 'hover:bg-white/20'}`}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className={`w-6 h-6 ${scrolled ? 'text-blue-900' : 'text-white'}`} /> : <Menu className={`w-6 h-6 ${scrolled ? 'text-blue-900' : 'text-white'}`} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-blue-200"
          >
            <div className="container py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 4 }}
                  >
                    {item.isHash ? (
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href, item.isHash);
                        }}
                        className="text-blue-700 hover:text-primary-600 font-medium py-2 transition-colors block"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-blue-700 hover:text-primary-600 font-medium py-2 transition-colors block ${location.pathname === item.href ? 'text-primary-600' : ''
                          }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    if (location.pathname === '/contact') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      window.location.href = '/contact';
                    }
                  }}
                  className="btn-primary mt-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Quote
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;