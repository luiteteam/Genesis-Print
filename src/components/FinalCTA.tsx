import { motion } from 'framer-motion';
import { ArrowRight, Phone,} from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-8 lg:py-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div className="container">
        <div className="text-center">
          <motion.h2
            className="heading-lg mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Bring Your Vision to Life?
          </motion.h2>
          
          <motion.p
            className="body-lg mb-6 max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get started with your printing project today. Our team is ready to help you create 
            something amazing that will make your business stand out.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-neutral-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
            
            <motion.a
              href="tel:+1234567890"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
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