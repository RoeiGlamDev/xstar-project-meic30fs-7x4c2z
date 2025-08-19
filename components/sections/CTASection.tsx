import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title = "Elevate Your Beauty with GlamCS", 
  subtitle = "Discover the luxurious range of cosmetics that enhances your natural beauty.", 
  buttonText = "Shop Now", 
  buttonLink = "/shop" 
}) => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold text-orange-500 mb-4"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        <motion.a 
          href={buttonLink} 
          className="inline-block bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-orange-600 hover:scale-105"
          initial={{ scale: 1 }} 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;