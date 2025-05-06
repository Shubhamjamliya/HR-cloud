import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: '', error: '' });

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        break;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Invalid email address';
        break;
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required';
        break;
      default:
        return '';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: false, success: '', error: '' });

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus({ loading: true, success: '', error: '' });

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ loading: false, success: 'Message sent successfully!', error: '' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        throw new Error();
      }
    } catch {
      setStatus({ loading: false, success: '', error: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <motion.div
      className="bg-gray-50 py-20 px-6 mt-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-gray-900 py-5 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-gray-100 text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Reach out with any questions or feedback.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white p-6 rounded-2xl shadow-md space-y-4"
          >
            {status.success && <p className="text-green-600 text-sm">{status.success}</p>}
            {status.error && <p className="text-red-600 text-sm">{status.error}</p>}

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
                className={`w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400
 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Your Name"
              />
              {errors.name && (
                <p id="name-error" className="text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
                className={`w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400
 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Your Email"
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.subject}
                aria-describedby="subject-error"
                className={`w-full border p-2 rounded-md + focus:outline-none focus:ring-2 focus:ring-blue-400
 ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Subject"
              />
              {errors.subject && (
                <p id="subject-error" className="text-red-500 text-sm mt-1">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.message}
                aria-describedby="message-error"
                className={`w-full border p-2 rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                rows="4"
                placeholder="Your Message"
              />
              {errors.message && (
                <p id="message-error" className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status.loading}
              className={`px-6 py-2 rounded-full flex items-center justify-center gap-2 text-white transition-all duration-200 ${status.loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
            >
              {status.loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>

          {/* Contact Info and Map */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Company Info</h2>
              <p className="flex items-center gap-3 text-gray-700 mb-2">
                <FaMapMarkerAlt /> 123 HR Cloud Ave, Workcity, WC 45678
              </p>
              <p className="flex items-center gap-3 text-gray-700 mb-2">
                <FaPhoneAlt /> +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-3 text-gray-700 mb-4">
                <FaEnvelope /> contact@hrcloud.com
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebookF /></a>
                <a href="#" className="text-blue-600 hover:text-blue-800"><FaTwitter /></a>
                <a href="#" className="text-blue-600 hover:text-blue-800"><FaLinkedinIn /></a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019930556019!2d-122.41941518468162!3d37.77492977975843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f7b2db15%3A0xe2a313d8f68e65b4!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1615325235837!5m2!1sen!2sus"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                title="Company Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
