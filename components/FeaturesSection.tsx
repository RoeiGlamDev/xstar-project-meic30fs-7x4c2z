import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Premium Quality Products',
    description: 'Discover our luxurious range of cosmetics crafted with the finest ingredients for a flawless finish.',
    icon: <i className="fas fa-star text-orange-500"></i>,
  },
  {
    title: 'Eco-Friendly Packaging',
    description: 'We care for the planet. Our products come in sustainable packaging that looks as good as it is for the environment.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
  {
    title: 'Expert Consultation',
    description: 'Get personalized beauty advice from our experts to find the perfect products tailored to your needs.',
    icon: <i className="fas fa-user-tie text-orange-500"></i>,
  },
  {
    title: 'Exclusive Collections',
    description: 'Shop limited edition releases and exclusive collections that embody the essence of modern beauty.',
    icon: <i className="fas fa-gem text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10 text-orange-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose GlamCS?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-orange-500">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;