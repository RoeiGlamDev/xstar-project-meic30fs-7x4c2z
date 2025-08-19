import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  contactReason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    contactReason: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.contactReason) newErrors.contactReason = 'Please select a reason';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', contactReason: '' });
      setErrors({});
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-orange-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact GlamCS
      </motion.h2>
      <p className="text-gray-600 mb-4">
        For inquiries about our luxurious cosmetics or to provide feedback, please fill out the form below.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={mt-1 p-2 border rounded w-full ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }}
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={mt-1 p-2 border rounded w-full ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }}
            placeholder="Your Email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-gray-700">Contact Reason</label>
          <select
            name="contactReason"
            value={formData.contactReason}
            onChange={handleChange}
            className={mt-1 p-2 border rounded w-full ${
              errors.contactReason ? 'border-red-500' : 'border-gray-300'
            }}
          >
            <option value="">Select a reason</option>
            <option value="Product Inquiry">Product Inquiry</option>
            <option value="Partnerships">Partnerships</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
          {errors.contactReason && <p className="text-red-500 text-sm">{errors.contactReason}</p>}
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={mt-1 p-2 border rounded w-full ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }}
            rows={4}
            placeholder="Your Message"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <motion.button
          type="submit"
          className="w-full bg-orange-500 text-white font-bold py-2 rounded hover:bg-orange-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
      {submitted && <p className="text-green-500 mt-4">Thank you for contacting GlamCS! We will get back to you soon.</p>}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-orange-600">GlamCS Business Information</h3>
        <p className="text-gray-600">Location: 123 Beauty Ave, Glam City, GL 45678</p>
        <p className="text-gray-600">Business Hours: Mon-Fri 9:00 AM - 5:00 PM</p>
      </div>
    </div>
  );
};

export default ContactSection;