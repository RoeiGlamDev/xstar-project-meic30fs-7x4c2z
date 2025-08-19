import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    onClick: () => void;
}

const buttonVariants = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2,
        },
    },
    tap: {
        scale: 0.95,
    },
};

const GlamCSButton: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
    const baseStyles = 'font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-opacity-50';
    const primaryStyles = 'bg-orange-500 text-white hover:bg-orange-600';
    const secondaryStyles = 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-100';

    const classNames = ${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles};

    return (
        <motion.button
            className={classNames}
            onClick={onClick}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
        >
            {children}
        </motion.button>
    );
};

export default GlamCSButton;