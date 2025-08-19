import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  links: { name: string; url: string }[];
  socialMedia: { platform: string; url: string; icon: JSX.Element }[];
}

const Footer: React.FC<FooterProps> = () => {
  const companyName = "GlamCS";
  const links = [
    { name: 'Home', url: '#' },
    { name: 'About Us', url: '#' },
    { name: 'Products', url: '#' },
    { name: 'Contact', url: '#' },
    { name: 'Privacy Policy', url: '#' },
  ];
  
  const socialMedia = [
    { platform: 'Facebook', url: '#', icon: <i className="fab fa-facebook-f"></i> },
    { platform: 'Instagram', url: '#', icon: <i className="fab fa-instagram"></i> },
    { platform: 'Twitter', url: '#', icon: <i className="fab fa-twitter"></i> },
  ];

  return (
    <footer className="bg-white text-orange-600 py-8">
      <div className="container mx-auto flex flex-col items-center">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {companyName} - Elevate Your Beauty
        </motion.h2>
        <nav className="mb-4">
          <ul className="flex space-x-6">
            {links.map(link => (
              <li key={link.name}>
                <motion.a 
                  href={link.url} 
                  className="hover:text-orange-500 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mb-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          {socialMedia.map(media => (
            <motion.a 
              key={media.platform} 
              href={media.url} 
              className="text-orange-600 hover:text-orange-500 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              {media.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;