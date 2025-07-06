'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section-padding bg-neutral-50 text-neutral-800">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-lg text-center mb-4 text-gradient">
            Genesis Printers & Publishers Private Limited
          </h1>
          <p className="text-center text-xl font-medium mb-12">
            Pioneering Excellence in Color Printing Since 1998
          </p>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              Genesis Printers & Publishers Pvt. Ltd. was born out of a visionary initiative to bridge a critical gap in the printing landscape of Northeast India. Recognizing the absence of advanced color printing facilities in the region, visionary entrepreneur <span className="font-semibold text-neutral-900">Rita Saikia</span> laid the foundation for what would become a transformational enterprise in 1998. With a strong commitment to transforming this scenario, she established a dedicated pre-press unit under the North East Graphics.
            </p>

            <p>
              The installation of this facility marked a turning point. It not only drastically reduced the outflow of color printing jobs to other parts of the country but also created a thriving ecosystem for local color printing services. As a direct result, there was a substantial surge in regional publishing activities. For instance, prior to the establishment of this unit, the North East had only seven magazines in circulation. That number has since grown manifold.
            </p>

            <p>
              Building upon this success, Genesis Printers & Publishers Pvt. Ltd. was formally incorporated in 2001. Later that year, the company commissioned the region's first four-color printing press—ushering in a new era of high quality, full-color print production in Northeast India.
            </p>

            <p>
              Before Genesis began operations, a considerable volume of color printing jobs had to be outsourced from other parts of the country, resulting in delays, higher costs, and limited creative flexibility for local clients. The inception of Genesis changed this dynamic entirely. The company not only retained local business that was previously going out of the region but also catalysed the creation of a robust, homegrown color printing industry.
            </p>

            <p>
              Today, Genesis stands as a symbol of innovation and quality in the printing industry. With state-of-the-art infrastructure, an experienced team and a deep understanding of regional and national market needs, Genesis continues to lead the evolution of the media in Northeast India and beyond. The company remains committed to delivering cutting-edge printing solutions with an emphasis on precision, sustainability, and client satisfaction.
            </p>

            <p className="font-semibold text-primary-700 text-xl mt-8">
              COME, BE A PART OF OUR JOURNEY — AND LET'S BRING YOUR DREAMS TO LIFE
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
