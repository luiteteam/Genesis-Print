import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Printer, Zap, Layers, Maximize } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const OurMachines = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.machine-card', {
        y: 80,
        opacity: 0,
        duration: 1,
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

  const machines = [
    {
      name: 'Multi Color Offset Machine',
      image: '/machine1.png',
      description: 'High-precision color printing for vibrant results',
      icon: Layers
    },
    {
      name: 'Paper Folding Machine',
      image: '/machine2.png',
      description: 'Automated folding for efficient post-press processing',
      icon: Maximize
    },
    {
      name: 'CTP Machine',
      image: '/machine3.png',
      description: 'Computer-to-plate technology for superior print quality',
      icon: Printer
    },
    {
      name: 'Perfect Binding Machine',
      image: '/machine4.png',
      description: 'Professional book binding with clean finishes',
      icon: Layers
    },
    {
      name: 'Lamination Machine',
      image: '/machine5.png',
      description: 'Protective coating for durable printed materials',
      icon: Maximize
    },
    {
      name: 'Stitching Machine',
      image: '/machine6.png',
      description: 'Secure binding for booklets and magazines',
      icon: Zap
    }
  ];

  return (
    <section ref={sectionRef} id="machines" className="section-padding bg-neutral-50">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-neutral-900 mb-4">
            Our <span className="text-gradient">Printing Machinery</span>
          </h2>
          <p className="body-lg text-neutral-600 max-w-2xl mx-auto">
            State-of-the-art equipment ensuring precision and efficiency in every print job
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {machines.map((machine, index) => (
            <motion.div
              key={index}
              className="machine-card group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-52 bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="max-h-full max-w-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                />
              </div>


              <hr className="border-t border-neutral-200 mx-6" />
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center bg-primary-100 rounded-lg p-3">
                    <machine.icon className="w-6 h-6 text-primary-600" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">{machine.name}</h3>
                    <p className="text-sm text-neutral-600">{machine.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default OurMachines;