import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, isValid }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col mb-6">
      <label className={text-lg font-bold ${isValid ? 'text-orange-500' : 'text-red-500'}}>{label}</label>
      <motion.input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={border-2 ${isValid ? 'border-orange-500' : 'border-red-500'} rounded-lg p-3 transition duration-300 focus:ring-2 focus:ring-orange-500 focus:outline-none ${isFocused ? 'shadow-lg' : 'shadow'}}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      />
      {!isValid && (
        <motion.span className="text-red-500 text-sm mt-1">
          Please enter a valid {label.toLowerCase()}.
        </motion.span>
      )}
    </div>
  );
};

export default Input;