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
      description: 'Expert pre-press services: DTP, designing, page layout, and CTP plate making for flawless print preparation.',
      features: ['DTP', 'Designing', 'Page layout', 'Plate making (CTP)'],
      price: 'Custom Quote',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      link: '/prepress'
    },
    {
      icon: Package,
      title: 'PRESS',
      description: 'Professional printing: Offset (single/multi colour), digital (single/multi colour), and screen printing.',
      features: ['Offset printing: Single Colour, Multi colour', 'Digital printing: Single colour and multi colour', 'Screen printing'],
      price: 'Custom Quote',
      color: 'bg-green-50 border-green-200 hover:bg-green-100',
      link: '/press'
    },
    {
      icon: Calendar,
      title: 'POST PRESS',
      description: 'Comprehensive post-press: lamination, folding, binding, die cutting, packing, and delivery.',
      features: [
        'Thermal lamination', 'Folding', 'Creasing', 'Die cutting', 'Pasting', 'Hard binding', 'Perfect Binding', 'Stacking', 'Thread binding', 'Gumming', 'Mounting', 'Wiro binding', 'Spiral binding', 'Packing', 'Forwarding', 'Delivery up to transportation'
      ],
      price: 'Custom Quote',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
      link: '/postpress'
    }
  ];


  return (
    <section ref={sectionRef} id="services" className="section-padding bg-blue-200">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-blue-900 mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="body-lg text-blue-700 max-w-2xl mx-auto">
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

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl p-8"
            style={{ background: 'linear-gradient(90deg, #b3e0f7 0%, #e6faff 60%, #ffffff 100%)' }}>
            <h3 className="heading-md mb-4 text-blue-900">
              Download Our Brochure
            </h3>
            <p className="body-lg mb-6 opacity-90 text-blue-800">
              Get detailed information about our services, capabilities, and portfolio in our comprehensive brochure.
            </p>
            <motion.a
              href="/Brochure.pdf"
              download="Genesis_Print_Brochure.pdf"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-neutral-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 mr-2 text-blue-600" />
              Download Brochure
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
