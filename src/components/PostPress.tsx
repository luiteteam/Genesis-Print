import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Scissors, 
  BookOpen, 
  Package, 
  Layers,
  CheckCircle,
  Clock,
  Users,
  Award,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const PostPress = () => {
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
      icon: Layers,
      title: 'Lamination',
      description: 'Professional lamination services to protect and enhance your printed materials.',
      features: [
        'Glossy lamination',
        'Matte lamination',
        'Soft touch lamination',
        'UV lamination',
        'Heat seal lamination'
      ]
    },
    {
      icon: Scissors,
      title: 'Folding & Creasing',
      description: 'Precise folding and creasing services for brochures, flyers, and complex printed materials.',
      features: [
        'Accordion folding',
        'Gate folding',
        'Z-fold brochures',
        'Pre-creasing',
        'Scoring services'
      ]
    },
    {
      icon: BookOpen,
      title: 'Stitching',
      description: 'Professional binding and stitching services for booklets, catalogs, and multi-page documents.',
      features: [
        'Saddle stitching',
        'Side stitching',
        'Wire binding',
        'Spiral binding',
        'Perfect binding'
      ]
    },
    {
      icon: Package,
      title: 'Perfect Binding',
      description: 'High-quality perfect binding for books, catalogs, and thick publications.',
      features: [
        'Glue binding',
        'Hardcover binding',
        'Softcover binding',
        'Custom spine width',
        'Professional finish'
      ]
    },
    {
      icon: BookOpen,
      title: 'Hard Binding',
      description: 'Premium hard binding services for books, manuals, and special publications.',
      features: [
        'Hardcover books',
        'Case binding',
        'Custom covers',
        'Dust jackets',
        'Library binding'
      ]
    },
    {
      icon: Scissors,
      title: 'Cutting',
      description: 'Precise cutting and trimming services for all types of printed materials.',
      features: [
        'Guillotine cutting',
        'Die cutting',
        'Kiss cutting',
        'Custom shapes',
        'Bulk cutting'
      ]
    },
    {
      icon: Package,
      title: 'Packing',
      description: 'Professional packing and packaging services to protect your finished products.',
      features: [
        'Bubble wrap packing',
        'Cardboard boxes',
        'Custom packaging',
        'Bulk packing',
        'Shipping preparation'
      ]
    },
    {
      icon: Package,
      title: 'Stacking & Forwarding',
      description: 'Organized stacking and forwarding services for efficient delivery and distribution.',
      features: [
        'Organized stacking',
        'Quality inspection',
        'Delivery preparation',
        'Bulk handling',
        'Logistics support'
      ]
    }
  ];

  const benefits = [
    'Professional finishing quality',
    'Fast turnaround times',
    'Experienced finishing team',
    'Quality assurance at every step',
    'Competitive pricing',
    'Wide range of finishing options'
  ];

  const capabilities = [
    'Various paper weights',
    'Custom finishing options',
    'Bulk finishing services',
    'Quality control checks',
    'Fast turnaround times',
    'Professional packaging'
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
            <span className="text-gradient">POST PRESS</span> Services
          </h1>
          <p className="body-lg text-neutral-600 max-w-3xl mx-auto">
            Professional finishing services that transform your printed materials into 
            polished, professional products. From lamination to binding, we handle it all.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-detail bg-white border-2 border-purple-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mr-3">
                  <service.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="heading-sm text-neutral-900">{service.title}</h3>
              </div>
              
              <p className="body-md text-neutral-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                    <CheckCircle className="w-3 h-3 text-purple-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-md mb-6 text-center">Why Choose Our Post-Press Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <Award className="w-5 h-5 mr-3 text-purple-200" />
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
          <h3 className="heading-lg text-neutral-900 mb-8 text-center">Our Finishing Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-neutral-50 rounded-lg p-6 text-center">
                <Zap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
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
          <h3 className="heading-lg text-neutral-900 mb-8 text-center">Our Finishing Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Inspection</h4>
              <p className="text-sm text-neutral-600">Quality check of printed materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Finishing</h4>
              <p className="text-sm text-neutral-600">Apply finishing treatments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Assembly</h4>
              <p className="text-sm text-neutral-600">Bind and assemble final product</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Packaging</h4>
              <p className="text-sm text-neutral-600">Pack and prepare for delivery</p>
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
            <h3 className="heading-md mb-4">Ready to Finish Your Project?</h3>
            <p className="body-lg text-neutral-600 mb-6">
              Get a custom quote for your finishing requirements and give your printed materials the professional touch they deserve.
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

export default PostPress; 