import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-orange-300 to-white text-white">
      <div className="text-center">
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to GlamCS
        </motion.h1>
        <motion.p 
          className="text-xl mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Where luxury meets beauty. Discover our exquisite range of cosmetics designed to elevate your beauty routine.
        </motion.p>
        <motion.div 
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a 
            href="#products" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300"
          >
            Shop Now
          </a>
          <a 
            href="#about" 
            className="bg-white hover:bg-gray-200 text-orange-500 font-semibold py-2 px-4 rounded shadow-lg transition duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-10 text-center">
        <motion.p 
          className="text-sm text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Trusted by beauty enthusiasts and professionals alike.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;