import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Vivid Mynd Technologies',
      period: 'Nov 2023 - Present',
      description: [
        'Transformed Figma designs into responsive and pixel-perfect React interfaces with 99% accuracy, ensuring seamless data and logic flow.',
        'Optimized website performance by 200% through the implementation of AWS Simple Queue Service for asynchronous request handling and Redis for caching.',
        'Integrated secure third-party payment gateways to streamline transaction processes.',
        'Developed advanced UI components, including AI-powered multi-step forms, for enhanced user interaction.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Wipro',
      period: 'Jul 2022 - Nov 2023',
      description: [
        'Contributed to UI enhancement efforts through strategic deployment of reusable components, resulting in improved performance and a 12% increase in website traffic.',
        'Developed mobile application screens with React Native and integrated third-party libraries to enhance UI functionality and user experience.',
        'Implemented secure authentication system using OAuth and JWT to enable user login and authorization.',
        'Implemented a robust database solution in the backend to efficiently manage and organize data.',
        'Utilized modularization and code refactoring strategies to improve code quality and maintainability, which led to approximately 1 month of time saved before the product release.'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      {experiences.map((exp, index) => (
        <motion.div 
          key={index} 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          viewport={{ once: true }}
          className="mb-12 flex gap-6"
        >
          <div className="flex flex-col items-center">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500 bg-white dark:bg-dark-800 shadow-md"
            >
              <Briefcase className="h-6 w-6 text-blue-500" />
            </motion.div>
            {index !== experiences.length - 1 && (
              <div className="h-full w-0.5 bg-blue-500/50"></div>
            )}
          </div>
          <div className="flex flex-col pb-8 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-50">{exp.title}</h3>
              <p className="text-sm text-gray-500 dark:text-dark-400 sm:ml-4">{exp.period}</p>
            </div>
            <p className="text-lg text-blue-600 dark:text-blue-400 mt-1 font-medium">{exp.company}</p>
            <ul className="mt-4 text-gray-600 dark:text-dark-300 list-disc list-outside ml-4 space-y-3">
              {exp.description.map((item, i) => (
                <li key={i} className="text-base leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;