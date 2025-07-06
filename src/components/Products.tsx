import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, BookOpen, Star, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set('.product-card', { y: 80, opacity: 0, scale: 0.95 });

      gsap.to('.product-card', {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.products-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="products" className="section-padding pt-12 pb-6 bg-neutral-50">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-full mr-3">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <h1 className="heading-lg text-neutral-900">
              Our <span className="text-gradient">Hard Bound Books</span>
            </h1>
          </div>
          <p className="body-lg text-neutral-600 max-w-2xl mx-auto">
            Explore some of the premium hard bound books crafted at Genesis Press. Each book showcases
            our dedication to quality and printing excellence.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mx-auto mb-2">
              <BookOpen className="w-6 h-6 text-primary-600" />
            </div>
            <div className="text-2xl font-bold text-neutral-900">500+</div>
            <div className="text-sm text-neutral-600">Books Printed</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mx-auto mb-2">
              <Star className="w-6 h-6 text-primary-600" />
            </div>
            <div className="text-2xl font-bold text-neutral-900">Premium</div>
            <div className="text-sm text-neutral-600">Quality Materials</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mx-auto mb-2">
              <Award className="w-6 h-6 text-primary-600" />
            </div>
            <div className="text-2xl font-bold text-neutral-900">Custom</div>
            <div className="text-sm text-neutral-600">Design Options</div>
          </div>
        </motion.div>

        {/* Bento Grid with all 16 images */}
        <div className="products-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {/* Row 1 */}
          <motion.div
            className="product-card relative group rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow col-span-2 row-span-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full">
              <img
                src="/books/1.jpg"
                alt="Book 1"
                className="w-full h-full object-contain bg-neutral-100 p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            className="product-card relative group rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full aspect-square">
              <img
                src="/books/2.jpg"
                alt="Book 2"
                className="w-full h-full object-contain bg-neutral-100 p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            className="product-card relative group rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full aspect-square">
              <img
                src="/books/3.jpg"
                alt="Book 3"
                className="w-full h-full object-contain bg-neutral-100 p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="product-card relative group rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full aspect-square">
              <img
                src="/books/4.jpg"
                alt="Book 4"
                className="w-full h-full object-contain bg-neutral-100 p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            className="product-card relative group rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow col-span-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full aspect-[2/1]">
              <img
                src="/books/5.jpg"
                alt="Book 5"
                className="w-full h-full object-contain bg-neutral-100 p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Row 3 */}
          <motion.div
            className="product-card relative group rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full aspect-square">
              <img
                src="/books/6.jpg"
                alt="Book 6"
                className="w-full h-full object-contain bg-neutral-100 p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            className="product-card relative group rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full aspect-square">
              <img
                src="/books/7.jpg"
                alt="Book 7"
                className="w-full h-full object-contain bg-neutral-100 p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            className="product-card relative group rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full aspect-square">
              <img
                src="/books/8.jpg"
                alt="Book 8"
                className="w-full h-full object-contain bg-neutral-100 p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Row 4 */}
          <motion.div
            className="product-card relative group rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow col-span-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full aspect-[2/1]">
              <img
                src="/books/9.jpg"
                alt="Book 9"
                className="w-full h-full object-contain bg-neutral-100 p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            className="product-card relative group rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full aspect-square">
              <img
                src="/books/10.jpg"
                alt="Book 10"
                className="w-full h-full object-contain bg-neutral-100 p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Row 5 */}
          <motion.div
            className="product-card relative group rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full aspect-square">
              <img
                src="/books/11.jpg"
                alt="Book 11"
                className="w-full h-full object-contain bg-neutral-100 p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            className="product-card relative group rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full aspect-square">
              <img
                src="/books/12.jpg"
                alt="Book 12"
                className="w-full h-full object-contain bg-neutral-100 p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            className="product-card relative group rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full aspect-square">
              <img
                src="/books/13.jpg"
                alt="Book 13"
                className="w-full h-full object-contain bg-neutral-100 p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Row 6 */}
          <motion.div
            className="product-card relative group rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full aspect-square">
              <img
                src="/books/14.jpg"
                alt="Book 14"
                className="w-full h-full object-contain bg-neutral-100 p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            className="product-card relative group rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow col-span-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full aspect-[2/1]">
              <img
                src="/books/15.jpg"
                alt="Book 15"
                className="w-full h-full object-contain bg-neutral-100 p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            className="product-card relative group rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full aspect-square">
              <img
                src="/books/16.jpg"
                alt="Book 16"
                className="w-full h-full object-contain bg-neutral-100 p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-10 text-white max-w-4xl mx-auto">
            <h2 className="heading-md mb-5">
              Want to Create Your Own Hard Bound Book?
            </h2>
            <p className="body-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Whether it's a business report, a personal collection, or something unique, we'll bring it to life with care and precision.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-neutral-100 transition-colors shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us to Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;