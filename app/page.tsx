import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-orange-500 text-white h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to GlamCS
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl mb-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Luxurious Cosmetics for Every Glamorous You
      </motion.p>
      <motion.button
        className="bg-white text-orange-500 font-semibold py-2 px-4 rounded shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Shop Now
      </motion.button>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-white text-orange-500 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose GlamCS?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            className="bg-orange-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-2">Premium Quality</h3>
            <p>
              Our cosmetics are crafted with the finest ingredients, ensuring luxurious application and lasting wear.
            </p>
          </motion.div>
          <motion.div
            className="bg-orange-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-2">Eco-Friendly</h3>
            <p>
              GlamCS is committed to sustainability, using eco-friendly materials and packaging for a better planet.
            </p>
          </motion.div>
          <motion.div
            className="bg-orange-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-2">Trendy Shades</h3>
            <p>
              Stay ahead of the trend with our curated selection of colors that complement every skin tone.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const GlamCSHomepage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default GlamCSHomepage;