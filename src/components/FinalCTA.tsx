import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div className="container px-4 sm:px-6">
        <div className="text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Ready to Bring Your Vision to Life?
          </motion.h2>
          
          <motion.p
            className="text-lg sm:text-xl md:text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Get started with your printing project today. Our team is ready to help you create 
            something amazing that will make your business stand out.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 bg-white text-primary-600 rounded-lg font-semibold hover:bg-neutral-100 transition-all shadow-lg hover:shadow-xl text-base sm:text-lg w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
            
            <motion.a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all text-base sm:text-lg w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;