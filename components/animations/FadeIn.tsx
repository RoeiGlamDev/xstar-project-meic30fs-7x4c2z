import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const animationVariants = {
    hidden: { opacity: 0, translateY: 20 },
    visible: { opacity: 1, translateY: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animationVariants}
      transition={{ duration: 0.5 }}
      className={${className} transition-transform duration-300 ease-in-out}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

// Usage Example
// <FadeIn className="text-orange-500 bg-white p-5 rounded-lg shadow-lg hover:shadow-xl">
//   <h2 className="text-3xl font-bold">Welcome to GlamCS</h2>
//   <p className="mt-2 text-lg">Discover luxury cosmetics designed to enhance your natural beauty.</p>
// </FadeIn>