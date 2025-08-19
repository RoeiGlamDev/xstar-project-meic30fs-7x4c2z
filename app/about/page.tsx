import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    role: 'Founder & CEO',
    image: '/images/team/sophia.jpg',
  },
  {
    name: 'James Wilson',
    role: 'Creative Director',
    image: '/images/team/james.jpg',
  },
  {
    name: 'Emily Chen',
    role: 'Head of Marketing',
    image: '/images/team/emily.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-orange-600">
      <motion.section
        className="max-w-6xl mx-auto px-4 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-10">
          About GlamCS
        </h1>
        <p className="text-lg text-center mb-8">
          At GlamCS, we believe in the transformative power of cosmetics. Since our inception, we have dedicated ourselves to crafting luxurious beauty products that empower individuals to express their unique personalities.
        </p>
        <h2 className="text-2xl font-semibold text-center mb-6">
          Our History
        </h2>
        <p className="text-base text-center mb-10">
          Founded in 2020, GlamCS emerged from a passion for beauty and a desire to provide high-quality cosmetics that cater to diverse skin tones and types. Our commitment to sustainability and cruelty-free practices sets us apart in the industry, ensuring that our products are not only effective but also ethical.
        </p>
        
        <h2 className="text-2xl font-semibold text-center mb-6">
          Our Values
        </h2>
        <ul className="list-disc list-inside mb-10 text-center">
          <li>Quality: We prioritize premium ingredients for unparalleled results.</li>
          <li>Diversity: Our products celebrate beauty in all its forms.</li>
          <li>Innovation: We continuously evolve to meet the needs of our customers.</li>
          <li>Sustainability: We are committed to eco-friendly practices in every step.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-center mb-6">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="max-w-xs mx-4 mb-10 transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{member.name}</h3>
              <p className="text-center text-sm text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;