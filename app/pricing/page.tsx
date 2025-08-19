import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  description: string;
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Luxury Makeup Package',
    price: '$150',
    description: 'Experience the ultimate in glam with our luxury makeup package, including a full face application and premium products.'
  },
  {
    title: 'Bridal Glam Experience',
    price: '$300',
    description: 'Look radiant on your big day with our bridal package, featuring a trial session and on-site touch-ups.'
  },
  {
    title: 'Skincare Consultation',
    price: '$75',
    description: 'Get personalized recommendations for your skincare routine with our expert consultants.'
  }
];

const FAQ = [
  {
    question: 'What products do you use?',
    answer: 'We use high-end, cruelty-free cosmetics from renowned brands to ensure the best results for our clients.'
  },
  {
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment directly through our website or by contacting our customer service.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We require a 24-hour notice for cancellations. Please refer to our policy on the website for more details.'
  }
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        GlamCS Pricing
      </motion.h1>
      <motion.p
        className="text-center text-xl mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Discover our exclusive pricing for high-end cosmetics services at GlamCS.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingOptions.map((option, index) => (
          <motion.div
            key={index}
            className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{option.title}</h2>
            <p className="text-xl font-bold mb-4">{option.price}</p>
            <p>{option.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.h2
        className="text-3xl font-bold text-center my-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>
      
      <div className="space-y-4">
        {FAQ.map((item, index) => (
          <motion.div
            key={index}
            className="bg-orange-50 p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="font-semibold text-lg">{item.question}</h3>
            <p>{item.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;