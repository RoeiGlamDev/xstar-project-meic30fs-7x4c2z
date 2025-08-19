import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Johnson',
    role: 'Founder & CEO',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Smith',
    role: 'Lead Makeup Artist',
    image: '/images/liam.jpg',
  },
  {
    name: 'Olivia Brown',
    role: 'Product Developer',
    image: '/images/olivia.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-orange-600 py-10 px-4">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-6">About GlamCS</h2>
        <p className="text-lg text-center mb-8">
          At GlamCS, we believe that beauty is an experience that goes beyond the surface. Founded by a passionate team of cosmetics enthusiasts, GlamCS was born out of a desire to create luxurious and innovative makeup products that empower individuals to express their unique beauty.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p className="text-lg mb-8">
          Our mission at GlamCS is to revolutionize the cosmetics industry by providing high-quality, cruelty-free products that enhance natural beauty and inspire confidence. We are committed to using sustainable practices and ethically sourced ingredients, ensuring that our products not only look good but feel good to use.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-orange-100 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img src={member.image} alt={member.name} className="rounded-full mb-4 w-24 h-24 mx-auto" />
              <h4 className="text-xl font-semibold text-center">{member.name}</h4>
              <p className="text-center text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Our Values</h3>
        <p className="text-lg mb-4">
          At GlamCS, we value integrity, innovation, and inclusivity. We strive to create a welcoming environment where everyone feels valued and celebrated. Our commitment to excellence drives us to continuously improve our products and services, ensuring that we meet the evolving needs of our customers.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
        <p className="text-lg mb-8">
          GlamCS has been recognized with several awards in the cosmetics industry, including "Best New Brand" and "Innovative Product of the Year." We are proud to be a part of a community that values creativity and diversity in beauty.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;