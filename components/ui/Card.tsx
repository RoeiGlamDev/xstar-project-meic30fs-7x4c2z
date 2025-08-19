import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price }) => {
  return (
    <motion.div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg">
        <img className="w-full h-48 object-cover rounded-lg" src={imageUrl} alt={title} />
        <h2 className="text-2xl font-bold text-orange-500 mt-4">{title}</h2>
        <p className="text-white mt-2">{description}</p>
        <span className="text-orange-500 font-semibold text-lg mt-4 block">{price}</span>
      </div>
      <div className="p-4">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </motion.div>
  );
};

export default Card;