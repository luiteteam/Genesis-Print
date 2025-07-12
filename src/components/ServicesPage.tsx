import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FileText, 
  Package, 
  Calendar,
  CheckCircle,
  Award,
  Users,
  Clock,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
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
      icon: FileText,
      title: 'PRE PRESS',
      description: 'Complete pre-press services including desktop publishing, design, and plate making for professional printing.',
      features: ['DTP (Desktop Publishing)', 'Graphic Designing', 'Plate Making', 'File Preparation'],
      price: 'Custom Quote',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      link: '/prepress'
    },
    {
      icon: Package,
      title: 'PRESS',
      description: 'High-quality printing services with both single color and multi-color printing capabilities.',
      features: ['Single Colour Printing', 'Multi Colour Printing', 'Digital Printing', 'Offset Printing'],
      price: 'Custom Quote',
      color: 'bg-green-50 border-green-200 hover:bg-green-100',
      link: '/press'
    },
    {
      icon: Calendar,
      title: 'POST PRESS',
      description: 'Comprehensive finishing services to complete your printing projects with professional quality.',
      features: ['Lamination', 'Folding & Creasing', 'Stitching', 'Perfect Binding', 'Hard Binding', 'Cutting', 'Packing', 'Stacking & Forwarding'],
      price: 'Custom Quote',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
      link: '/postpress'
    }
  ];

  const benefits = [
    'Complete printing solutions',
    'Professional quality output',
    'Fast turnaround times',
    'Experienced team',
    'Competitive pricing',
    'Quality assurance'
  ];

  return (
    <section ref={sectionRef} className="pt-24 pb-16 bg-blue-50">
      <div className="container">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-xl text-blue-900 mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="body-lg text-blue-700 max-w-3xl mx-auto">
            Complete printing solutions from pre-press to post-press. We handle every stage 
            of the printing process with professional expertise and cutting-edge technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <motion.div
                className={`service-card border-2 rounded-xl p-6 transition-all duration-300 ${service.color} cursor-pointer`}
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
                
                <h3 className="heading-sm text-blue-900 mb-3">{service.title}</h3>
                <p className="body-md text-blue-700 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-blue-700">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.div
                  className="w-full py-3 px-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          className="bg-gradient-to-r from-teal-600 to-purple-600 rounded-2xl p-8 text-white mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-md mb-6 text-center">Why Choose Genesis Print?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <Award className="w-5 h-5 mr-3 text-teal-200" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-lg text-blue-900 mb-8 text-center">Our Numbers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.75c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z"></path><path d="M12 2v2m6.364 1.636l-1.414 1.414M22 12h-2M19.364 19.364l-1.414-1.414M12 22v-2m-6.364-1.636l1.414-1.414M2 12h2m2.636-6.364l1.414 1.414" /></svg>
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">5.0</div>
              <p className="text-blue-700">Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">1L+</div>
              <p className="text-blue-700">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">27+</div>
              <p className="text-blue-700">Years Experience</p>
            </div>
          </div>
        </motion.div>

        {/* Brochure Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-teal-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="heading-md mb-4">Download Our Brochure</h3>
            <p className="body-lg mb-6 opacity-90">
              Get detailed information about our services, capabilities, and portfolio in our comprehensive brochure.
            </p>
            <motion.a
              href="/Brochure.pdf"
              download="Genesis_Print_Brochure.pdf"
              className="inline-flex items-center px-6 py-3 bg-white text-teal-600 rounded-lg font-medium hover:bg-neutral-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </motion.a>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-neutral-100 rounded-2xl p-8">
            <h3 className="heading-md mb-4">Ready to Start Your Project?</h3>
            <p className="body-lg text-neutral-600 mb-6">
              Get a custom quote for your printing requirements and let our experts handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Quote
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn About Us
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage; 