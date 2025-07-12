import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowRight, Star, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Set initial states
      gsap.set('.hero-title', { y: 60, opacity: 0 });
      gsap.set('.hero-subtitle', { y: 40, opacity: 0 });
      gsap.set('.hero-cta', { y: 30, opacity: 0 });
      gsap.set('.hero-stats', { y: 40, opacity: 0 });

      tl.to('.hero-title', {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'power3.out',
      })
        .to('.hero-subtitle', {
          duration: 0.8,
          y: 0,
          opacity: 1,
          ease: 'power3.out',
        }, '-=0.5')
        .to('.hero-cta', {
          duration: 0.6,
          y: 0,
          opacity: 1,
          ease: 'power3.out',
        }, '-=0.3')
        .to('.hero-stats', {
          duration: 0.8,
          y: 0,
          opacity: 1,
          stagger: 0.2,
          ease: 'power3.out',
        }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Star, value: '5.0', label: 'Rating' },
    { icon: Users, value: '1L+', label: 'Happy Clients' },
    { icon: Award, value: '27+', label: 'Years Experience' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container relative z-10 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="hero-title heading-xl text-white mb-6">
            Where Creativity Meets{' '}
           Printing Excellence
          </h1>

          <p className="hero-subtitle body-lg text-white mb-8 max-w-2xl mx-auto">
            Experience the future of printing with cutting-edge technology and unmatched quality. 
            From concept to creation, we bring your vision to life with precision and style.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {/* Button 1 - Navigates to /contact page */}
            <Link to="/contact">
              <motion.button
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            {/* Button 2 - Scrolls to #services on the same page */}
            <motion.a
              href="#services"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Services
            </motion.a>
          </div>



          <div className="flex flex-row flex-wrap justify-center gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="hero-stats text-center min-w-[120px]"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-teal-600" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-16 h-16 bg-purple-200 rounded-full opacity-20"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-12 h-12 bg-primary-200 rounded-full opacity-20"
        animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>

  );
};

export default Hero;
