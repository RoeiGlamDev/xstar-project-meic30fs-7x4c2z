import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
    title?: string;
    subtitle?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ title = "Join the GlamCS Family", subtitle = "Stay updated with our latest luxury cosmetics and exclusive offers!" }) => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle email submission logic here
        setIsSubmitted(true);
        // Optionally, reset the email input after submission
        setEmail('');
    };

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto text-center">
                <motion.h2 
                    className="text-4xl font-bold text-orange-600 mb-4"
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }}
                >
                    {title}
                </motion.h2>
                <motion.p 
                    className="text-lg text-gray-700 mb-8"
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.7 }}
                >
                    {subtitle}
                </motion.p>
                <form onSubmit={handleSubmit} className="flex justify-center items-center">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-orange-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    />
                    <motion.button 
                        type="submit" 
                        className="bg-orange-600 text-white rounded-r-md py-2 px-6 transition-transform transform hover:scale-105 focus:outline-none"
                        whileHover={{ scale: 1.05 }}
                    >
                        Subscribe
                    </motion.button>
                </form>
                {isSubmitted && (
                    <motion.p 
                        className="mt-4 text-green-600"
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.5 }}
                    >
                        Thank you for subscribing to GlamCS! Check your inbox for the latest updates.
                    </motion.p>
                )}
            </div>
        </section>
    );
};

export default NewsletterSection;