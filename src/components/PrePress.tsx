import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FileText, 
  Palette, 
  Printer, 
  Settings,
  CheckCircle,
  Clock,
  Users,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const PrePress = () => {
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
      icon: FileText,
      title: 'DTP (Desktop Publishing)',
      description: 'Professional desktop publishing services using industry-standard software like Adobe Creative Suite.',
      features: [
        'Adobe InDesign layouts',
        'Typography and formatting',
        'Page layout design',
        'Multi-page document creation',
        'Cross-platform compatibility'
      ]
    },
    {
      icon: Palette,
      title: 'Graphic Designing',
      description: 'Creative graphic design services for logos, branding, and visual communication materials.',
      features: [
        'Logo design and branding',
        'Marketing collateral design',
        'Digital artwork creation',
        'Color management',
        'Vector and raster graphics'
      ]
    },
    {
      icon: Printer,
      title: 'Plate Making',
      description: 'Professional plate making for offset printing with precision and quality assurance.',
      features: [
        'CTP (Computer-to-Plate) technology',
        'High-resolution plate output',
        'Multiple plate sizes',
        'Quality control checks',
        'Fast turnaround times'
      ]
    },
    {
      icon: Settings,
      title: 'File Preparation',
      description: 'Comprehensive file preparation and optimization for various printing processes.',
      features: [
        'File format conversion',
        'Color separation',
        'Resolution optimization',
        'Print-ready file creation',
        'Quality assurance checks'
      ]
    }
  ];

  const benefits = [
    'Professional quality output',
    'Fast turnaround times',
    'Experienced design team',
    'Industry-standard software',
    'Quality assurance at every step',
    'Competitive pricing'
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
            <span className="text-gradient">PRE PRESS</span> Services
          </h1>
          <p className="body-lg text-blue-700 max-w-3xl mx-auto">
            Professional pre-press services that ensure your designs are print-ready and optimized 
            for the highest quality output. From concept to plate, we handle every detail.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-detail bg-white border-2 border-blue-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mr-4">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="heading-md text-blue-900">{service.title}</h3>
              </div>
              
              <p className="body-md text-blue-700 mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-blue-700">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-md mb-6 text-center">Why Choose Our Pre-Press Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <Award className="w-5 h-5 mr-3 text-blue-200" />
                <span className="text-white/90">{benefit}</span>
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
          <h3 className="heading-lg text-blue-900 mb-8 text-center">Our Pre-Press Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">File Review</h4>
              <p className="text-sm text-blue-700">We review your files for print readiness</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Optimization</h4>
              <p className="text-sm text-blue-700">Optimize files for best print quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Plate Making</h4>
              <p className="text-sm text-blue-700">Create high-quality printing plates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Quality Check</h4>
              <p className="text-sm text-blue-700">Final quality assurance before printing</p>
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
            <h3 className="heading-md mb-4">Ready to Start Your Project?</h3>
            <p className="body-lg text-neutral-600 mb-6">
              Get a custom quote for your pre-press requirements and let our experts handle the rest.
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

export default PrePress; 