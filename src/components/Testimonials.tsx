import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Amit Sharma',
      position: 'Marketing Head',
      company: 'Himalaya Naturals',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: "Genesis Printers delivered exceptional quality in our product catalog printing. The paper, colors, and binding were all premium."
    },
    {
      name: 'Priya Iyer',
      position: 'Founder',
      company: 'Craft Nest',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: "Their packaging design and prints added a touch of elegance to our handcrafted products. Professional service throughout."
    },
    {
      name: 'Rajeev Menon',
      position: 'Operations Manager',
      company: 'SpiceTrail Restaurants',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: "Genesis handled our menu redesign and printing flawlessly. The finishes were top-notch and matched our brand perfectly."
    },
    {
      name: 'Nikita Desai',
      position: 'Event Planner',
      company: 'ShaadiSaga Events',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: "From wedding cards to custom signage, everything was stunning. Guests couldn't stop talking about the invite quality!"
    },
    {
      name: 'Ankur Joshi',
      position: 'Director',
      company: 'EduMentor Academy',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: "Their educational material prints were sharp, readable, and beautifully bound. Great partner for institutions."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-header', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    if (window.innerWidth < 768) {
      // Show only 1 testimonial on mobile
      return [testimonials[currentIndex]];
    } else if (window.innerWidth < 1024) {
      // Show 2 testimonials on tablet
      return [
        testimonials[currentIndex % testimonials.length],
        testimonials[(currentIndex + 1) % testimonials.length]
      ];
    }
    // Show 3 testimonials on desktop
    return [
      testimonials[currentIndex % testimonials.length],
      testimonials[(currentIndex + 1) % testimonials.length],
      testimonials[(currentIndex + 2) % testimonials.length]
    ];
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container px-4 sm:px-6">
        <motion.div
          className="testimonial-header text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-3">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto">
            Trusted by businesses and creatives who value quality printing
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons - Desktop */}
          <div className="hidden md:flex justify-between items-center mb-8 px-4">
            <motion.button
              onClick={prevTestimonial}
              className="flex items-center justify-center w-12 h-12 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-neutral-600" />
            </motion.button>
            
            <motion.button
              onClick={nextTestimonial}
              className="flex items-center justify-center w-12 h-12 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-neutral-600" />
            </motion.button>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-neutral-50 rounded-xl p-6 border border-neutral-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-lg text-neutral-900">{testimonial.name}</h4>
                      <p className="text-sm text-neutral-500">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-neutral-600 text-base leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons - Mobile */}
          <div className="md:hidden flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="flex items-center justify-center w-10 h-10 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 text-neutral-600" />
            </motion.button>
            
            <motion.button
              onClick={nextTestimonial}
              className="flex items-center justify-center w-10 h-10 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5 text-neutral-600" />
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary-600 w-4' : 'bg-neutral-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;