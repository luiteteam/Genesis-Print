import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FileText, 
  Package, 
  Calendar,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
            Complete printing solutions from pre-press to post-press. We handle every stage 
            of the printing process with professional expertise and cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="heading-md mb-4">
              Download Our Brochure
            </h3>
            <p className="body-lg mb-6 opacity-90">
              Get detailed information about our services, capabilities, and portfolio in our comprehensive brochure.
            </p>
            <motion.a
              href="/Brochure.pdf"
              download="Genesis_Print_Brochure.pdf"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-neutral-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
