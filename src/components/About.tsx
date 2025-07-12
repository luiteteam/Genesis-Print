'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="pt-24 pb-16 bg-blue-50">
      <div className="container">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-xl text-blue-900 mb-6">
            About <span className="text-gradient">Genesis Print</span>
          </h1>
          <p className="body-lg text-blue-700 max-w-3xl mx-auto">
            Pioneering Excellence in Color Printing Since 1998
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="heading-lg text-blue-900">
              Genesis Printers & Publishers Private Limited
            </h2>
            
            <div className="space-y-4 text-lg leading-relaxed text-blue-700">
              <p>
                Genesis Printers & Publishers Pvt. Ltd. was born out of a visionary initiative to bridge a critical gap in the printing landscape of Northeast India. Recognizing the absence of advanced color printing facilities in the region, visionary entrepreneur <span className="font-semibold text-blue-900">Rita Saikia</span> laid the foundation for what would become a transformational enterprise in 1998.
              </p>

              <p>
                The installation of this facility marked a turning point. It not only drastically reduced the outflow of color printing jobs to other parts of the country but also created a thriving ecosystem for local color printing services.
              </p>

              <p>
                Building upon this success, Genesis Printers & Publishers Pvt. Ltd. was formally incorporated in 2001. Later that year, the company commissioned the region's first four-color printing press—ushering in a new era of high quality, full-color print production in Northeast India.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/machine1.png" 
                alt="Printing Machine 1" 
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="/machine2.png" 
                alt="Printing Machine 2" 
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mt-8"
              />
              <img 
                src="/machine3.png" 
                alt="Printing Machine 3" 
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="/machine4.png" 
                alt="Printing Machine 4" 
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mt-8"
              />
            </div>
          </motion.div>
        </div>

        {/* Additional Content */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-200">
            <div className="space-y-6 text-lg leading-relaxed text-blue-700">
              <p>
                Before Genesis began operations, a considerable volume of color printing jobs had to be outsourced from other parts of the country, resulting in delays, higher costs, and limited creative flexibility for local clients. The inception of Genesis changed this dynamic entirely. The company not only retained local business that was previously going out of the region but also catalysed the creation of a robust, homegrown color printing industry.
              </p>

              <p>
                Today, Genesis stands as a symbol of innovation and quality in the printing industry. With state-of-the-art infrastructure, an experienced team and a deep understanding of regional and national market needs, Genesis continues to lead the evolution of the media in Northeast India and beyond. The company remains committed to delivering cutting-edge printing solutions with an emphasis on precision, sustainability, and client satisfaction.
              </p>

              <p className="font-semibold text-primary-700 text-xl mt-8 text-center">
                COME, BE A PART OF OUR JOURNEY — AND LET'S BRING YOUR DREAMS TO LIFE
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-teal-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="heading-md mb-4">Ready to Work With Us?</h3>
            <p className="body-lg mb-6 opacity-90">
              Explore our portfolio and see the quality of our work firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/gallery">
                <motion.button
                  className="bg-white text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-neutral-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Portfolio
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-teal-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
