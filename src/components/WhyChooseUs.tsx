import  { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Award, Headphones, Truck, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.why-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const reasons = [
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Quick delivery without compromising on quality.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'State-of-the-art printing technology ensures crisp, vibrant results every time.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Headphones,
      title: 'Eco-Friendly Options',
      description: 'Sustainable materials, Responsible practices. We care for the environment.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Truck,
      title: 'Quick Turnaround',
      description: 'Timely delivery, on time, every time. We understand the importance of deadlines.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'Not satisfied with your order? We offer a 100% satisfaction guarantee.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Zap,
      title: 'Competitive Pricing',
      description: 'Best prices in the market without hidden fees. Get more value for your money.',
      color: 'bg-yellow-100 text-yellow-600'
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-neutral-900 mb-4">
            Why Choose <span className="text-gradient">Genesis</span>?
          </h2>
          <p className="body-lg text-neutral-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional printing services that exceed your expectations. 
            Here's what sets us apart from the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="why-card card p-8 text-center group hover:scale-105 transition-transform duration-300"
              whileHover={{ y: -5 }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${reason.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="heading-sm text-neutral-900 mb-4">{reason.title}</h3>
              <p className="body-md text-neutral-600">{reason.description}</p>
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
          <Link to="/contact">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project Today
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;