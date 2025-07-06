import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  CreditCard, 
  FileText, 
  Newspaper, 
  ImageIcon, 
  Bookmark, 
  Calendar,
  MapPin,
  Package,
  Shirt
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set('.service-card', { y: 60, opacity: 0 });
      
      gsap.to('.service-card', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
  {
    icon: CreditCard,
    title: 'Business Cards',
    description: 'Professional business cards that make a lasting impression with premium materials and finishes.',
    features: ['Premium cardstock', 'UV coating', 'Foil stamping', 'Custom die-cutting'],
    price: 'Starting at ₹199',
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
  },
  {
    icon: FileText,
    title: 'Brochures & Flyers',
    description: 'Eye-catching marketing materials designed to showcase your products and services effectively.',
    features: ['Full-color printing', 'Various sizes', 'Folding options', 'Glossy or matte finish'],
    price: 'Starting at ₹299',
    color: 'bg-green-50 border-green-200 hover:bg-green-100'
  },
  {
    icon: Newspaper,
    title: 'Catalogs & Magazines',
    description: 'Professional publications with perfect binding and high-quality paper for lasting impact.',
    features: ['Perfect binding', 'Full-color pages', 'Custom covers', 'Various page counts'],
    price: 'Starting at ₹1200',
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
  },
  {
    icon: ImageIcon,
    title: 'Posters & Banners',
    description: 'Large format printing for events, promotions, and advertising with vibrant colors.',
    features: ['Up to 64" wide', 'Weather resistant', 'Grommets included', 'Indoor/outdoor options'],
    price: 'Starting at ₹399',
    color: 'bg-orange-50 border-orange-200 hover:bg-orange-100'
  },
  {
    icon: Bookmark,
    title: 'Stickers & Labels',
    description: 'Custom stickers and labels for branding, packaging, and promotional purposes.',
    features: ['Waterproof options', 'Custom shapes', 'Vinyl material', 'Permanent adhesive'],
    price: 'Starting at ₹149',
    color: 'bg-pink-50 border-pink-200 hover:bg-pink-100'
  },
  {
    icon: Calendar,
    title: 'Calendars',
    description: 'Custom calendars for promotional gifts or personal use with your photos and branding.',
    features: ['Wall calendars', 'Desk calendars', 'Custom photos', 'Spiral or saddle binding'],
    price: 'Starting at ₹599',
    color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100'
  },
  {
    icon: MapPin,
    title: 'Signs & Graphics',
    description: 'Indoor and outdoor signage solutions for businesses, events, and wayfinding.',
    features: ['Corrugated plastic', 'Metal signs', 'Yard signs', 'Window decals'],
    price: 'Starting at ₹499',
    color: 'bg-teal-50 border-teal-200 hover:bg-teal-100'
  },
  {
    icon: Package,
    title: 'Packaging',
    description: 'Custom packaging solutions including boxes, bags, and promotional materials.',
    features: ['Custom boxes', 'Shopping bags', 'Tissue paper', 'Branded packaging'],
    price: 'Starting at ₹799',
    color: 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100'
  },
  {
    icon: Shirt,
    title: 'Apparel Printing',
    description: 'Custom t-shirts, hoodies, and promotional apparel with screen printing and embroidery.',
    features: ['Screen printing', 'Embroidery', 'Heat transfer', 'Bulk discounts'],
    price: 'Starting at ₹249',
    color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100'
  }
];


  return (
    <section ref={sectionRef} id="services" className="section-padding bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-neutral-900 mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="body-lg text-neutral-600 max-w-2xl mx-auto">
            From business essentials to promotional materials, we offer comprehensive 
            printing solutions for all your professional and personal needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`service-card border-2 rounded-xl p-6 transition-all duration-300 ${service.color}`}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm">
                  <service.icon className="w-6 h-6 text-primary-600" />
                </div>
                <span className="text-sm font-semibold text-primary-600 bg-white px-3 py-1 rounded-full">
                  {service.price}
                </span>
              </div>
              
              <h3 className="heading-sm text-neutral-900 mb-3">{service.title}</h3>
              <p className="body-md text-neutral-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button
                className="w-full py-3 px-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Quote
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="heading-md mb-4">
              Need Something Custom?
            </h3>
            <p className="body-lg mb-6 opacity-90">
              We specialize in unique printing solutions. Let's discuss your specific requirements 
              and create something amazing together.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-neutral-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Custom Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
