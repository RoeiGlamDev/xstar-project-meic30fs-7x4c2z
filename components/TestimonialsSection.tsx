import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  photo: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia L.',
    photo: '/images/testimonials/sophia.jpg',
    review: 'GlamCS has completely transformed my makeup routine! The products are luxurious, and the quality is unbeatable.',
    rating: 5,
  },
  {
    name: 'Isabella M.',
    photo: '/images/testimonials/isabella.jpg',
    review: 'I love the vibrant colors and the long-lasting formulas. GlamCS truly delivers on its promises!',
    rating: 4,
  },
  {
    name: 'Olivia K.',
    photo: '/images/testimonials/olivia.jpg',
    review: 'The customer service is exceptional, and the products are divine! I feel glamorous every time I use GlamCS cosmetics.',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold text-orange-500 mb-6" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              initial={{ scale: 0.95 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.3 }}
            >
              <img 
                src={testimonial.photo} 
                alt={${testimonial.name}'s testimonial} 
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-600 mb-4">{testimonial.review}</p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={h-5 w-5 ${i < testimonial.rating ? 'text-orange-500' : 'text-gray-300'}} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M10 15l-5.878 3.09 1.126-6.568L0 6.91l6.236-.911L10 0l3.764 5.999L20 6.91l-5.248 4.612 1.126 6.568z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;