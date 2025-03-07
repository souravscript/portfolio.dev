'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { Mail, Download, Code, ExternalLink, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Timeline from '@/app/components/Timeline';
import Education from '@/app/components/Education';
import profilePic from '@/public/profile__pic.png';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const file_id = "1QyRkSfdzQTlplkek22o85sVHoe1lMX5x";
  const skills = {
    'Programming Languages': ['JavaScript', 'C++', 'TypeScript', 'Java', 'C'],
    'Framework/Libraries': ['ReactJs', 'React Native', 'NodeJs', 'NextJS', 'ExpressJs', 'Redux', 'TailwindCSS'],
    'Tools': ['Docker', 'REST API', 'Jest', 'SQL', 'HTTP', 'Github', 'VS Code', 'Postman', 'Vercel', 'Firebase'],
  };

  const projects = [
    {
      title: 'VoiceGPT',
      description: 'A cross-platform voice chat app built with React Native using OpenAI API for text generation and real-time voice response.',
      points: [
        'Implemented speech-to-text and text-to-speech features for seamless voice interaction',
        'Added a voice assistant for users to speak prompts and receive AI-generated responses'
      ],
      skills: ['React Native', 'React Native Voice', 'React Native TTS', 'OpenAI'],
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Express.it',
      description: 'A platform for users to express opinions and views effectively.',
      points: [
        'Implemented a multi-level nested comment section to facilitate engaging discussions',
        'Leveraged Firestore as authentication database solution to store user data'
      ],
      skills: ['ReactJs', 'Docker', 'Redux', 'Firebase', 'CSS'],
      image: 'https://images.unsplash.com/photo-1552751753-0fc84ae5b6c8?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 dark:text-dark-50 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      {/* Hero Section */}
      <section id="home" className="pt-20 md:pt-32 px-4 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-dark-50">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Shivam Sourav</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-dark-300">
              Full Stack Developer specializing in building exceptional digital experiences
            </p>
            <div className="flex space-x-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition"
              >
                <Download size={20} />
                <a
                  href={`https://drive.google.com/uc?export=download&id=${file_id}`} // Replace [File ID] with your actual Google Drive file ID
                  download
                  className="text-white transition"
                >
                  <span>Download CV</span>
                </a>

              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-50 dark:hover:bg-dark-800 transition"
              >
                <Mail size={20} />
                <a href="#contact" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"><span>Contact Me</span></a>
              </motion.button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mt-8 md:mt-0"
          >
            <Image
              src={profilePic}
              alt="Shivam Sourav - Professional Portrait"
              className="w-64 h-64 profilePic rounded-full shadow-xl"
            />

          </motion.div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100 dark:bg-dark-800 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-dark-50 mb-12 text-center"
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-700 rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-dark-50 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <Timeline />

      {/* Education Section */}
      <Education />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-dark-50 mb-12 text-center"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-700 rounded-lg shadow-lg overflow-hidden"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-dark-50 mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-dark-300 mb-4">{project.description}</p>
                  <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-dark-300">
                    {project.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 dark:bg-dark-800 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-dark-50 mb-12 text-center"
          >
            Contact Me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-50">Get in Touch</h3>
              <p className="text-gray-600 dark:text-dark-300">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-dark-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-dark-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-dark-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-dark-50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-dark-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-dark-50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-dark-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-dark-50"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </motion.button>
                {status && (
                  <p className="text-center text-gray-600 dark:text-dark-300">{status}</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
