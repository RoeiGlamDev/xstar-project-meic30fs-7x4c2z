import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
      <motion.div
        className="modal-container w-full max-w-lg p-6 bg-white rounded-lg shadow-lg transform transition-all"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <div className="modal-header mb-4">
          <h2 className="text-2xl font-bold text-orange-500">{title}</h2>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-orange-500 hover:text-orange-700 focus:outline-none"
          >
            &times;
          </button>
        </div>
        <div className="modal-content">
          <p className="text-gray-700">{content}</p>
        </div>
        <div className="modal-footer mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;