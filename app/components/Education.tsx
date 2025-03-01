import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 md:px-0 bg-gray-100 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-dark-50 mb-12 text-center"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-dark-700 rounded-lg shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-dark-50">
            Integrated MSc in Mathematics and Computing
          </h3>
          <p className="text-gray-600 dark:text-dark-300">
            Birla Institute of Technology, Mesra
          </p>
          <p className="text-gray-600 dark:text-dark-300">Completed 2022 with 7.5 CGPA</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
