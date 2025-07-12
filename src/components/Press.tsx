import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Printer, 
  Palette, 
  Monitor, 
  Settings,
  CheckCircle,
  Clock,
  Users,
  Award,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Press = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set('.service-detail', { y: 60, opacity: 0 });
      
      gsap.to('.service-detail', {
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
      icon: Printer,
      title: 'Single Colour Printing',
      description: 'High-quality single color printing for cost-effective solutions and professional results.',
      features: [
        'Black and white printing',
        'Spot color printing',
        'High-speed production',
        'Cost-effective solutions',
        'Perfect for text-heavy documents'
      ]
    },
    {
      icon: Palette,
      title: 'Multi Colour Printing',
      description: 'Full-color printing with vibrant colors and precise color matching for stunning results.',
      features: [
        'CMYK color process',
        'Pantone color matching',
        'High-resolution output',
        'Color consistency',
        'Professional quality finish'
      ]
    },
    {
      icon: Monitor,
      title: 'Digital Printing',
      description: 'Fast, flexible digital printing for short runs and variable data printing needs.',
      features: [
        'Short run printing',
        'Variable data printing',
        'Quick turnaround',
        'No setup costs',
        'Personalized printing'
      ]
    },
    {
      icon: Settings,
      title: 'Offset Printing',
      description: 'Traditional offset printing for large quantities with superior quality and cost efficiency.',
      features: [
        'Large quantity printing',
        'Superior print quality',
        'Cost-effective for bulk',
        'Wide range of paper stocks',
        'Specialty inks and finishes'
      ]
    }
  ];

  const benefits = [
    'State-of-the-art printing technology',
    'Fast turnaround times',
    'Quality assurance at every step',
    'Competitive pricing',
    'Experienced printing team',
    'Wide range of paper options'
  ];

  const capabilities = [
    'Paper sizes up to A0',
    'Various paper weights and finishes',
    'Specialty inks and coatings',
    'Variable data printing',
    'Bleed and crop marks',
    'Quality control checks'
  ];

  return (
    <section ref={sectionRef} className="pt-24 pb-16 bg-white">
      <div className="container">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-xl text-neutral-900 mb-6">
            <span className="text-gradient">PRESS</span> Services
          </h1>
          <p className="body-lg text-neutral-600 max-w-3xl mx-auto">
            Professional printing services using cutting-edge technology to deliver 
            high-quality results for all your printing needs. From single color to full-color printing.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-detail bg-white border-2 border-green-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl mr-4">
                  <service.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="heading-md text-neutral-900">{service.title}</h3>
              </div>
              
              <p className="body-md text-neutral-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-md mb-6 text-center">Why Choose Our Press Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <Award className="w-5 h-5 mr-3 text-green-200" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Capabilities Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-lg text-neutral-900 mb-8 text-center">Our Printing Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-neutral-50 rounded-lg p-6 text-center">
                <Zap className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <p className="text-neutral-700 font-medium">{capability}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-lg text-neutral-900 mb-8 text-center">Our Printing Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">File Preparation</h4>
              <p className="text-sm text-neutral-600">Prepare files for optimal printing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Color Setup</h4>
              <p className="text-sm text-neutral-600">Configure colors and settings</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Printing</h4>
              <p className="text-sm text-neutral-600">High-quality printing process</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Quality Check</h4>
              <p className="text-sm text-neutral-600">Final inspection and approval</p>
            </div>
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
            <h3 className="heading-md mb-4">Ready to Print Your Project?</h3>
            <p className="body-lg text-neutral-600 mb-6">
              Get a custom quote for your printing requirements and experience our quality firsthand.
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
              <Link to="/services">
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Services
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Press; 