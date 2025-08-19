import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Basic Glam Package',
    price: '$29.99',
    features: [
      '1 Makeup Consultation',
      'Basic Product Recommendations',
      'GlamCS Sample Kit',
    ],
  },
  {
    title: 'Premium Glam Package',
    price: '$49.99',
    features: [
      '2 Makeup Consultations',
      'Personalized Product Recommendations',
      'GlamCS Luxury Sample Kit',
      'Exclusive Access to GlamCS Events',
    ],
  },
  {
    title: 'Ultimate Glam Experience',
    price: '$99.99',
    features: [
      'Unlimited Makeup Consultations',
      'Customized Product Recommendations',
      'GlamCS Signature Sample Kit',
      'Personalized GlamCS Swag',
      'VIP Access to GlamCS Masterclasses',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-orange-500 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          GlamCS Pricing Plans
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Choose the perfect package to elevate your beauty experience with GlamCS.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 border border-orange-300 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-orange-500 mb-4">
                {tier.title}
              </h3>
              <p className="text-xl font-bold text-gray-800 mb-4">
                {tier.price}
              </p>
              <ul className="list-disc list-inside mb-4">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 ease-in-out">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;