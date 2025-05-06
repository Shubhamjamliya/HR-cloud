import { FaUserTie, FaCalendarCheck, FaMoneyBillWave } from 'react-icons/fa';
import yourLightBgImage from '../assets/hero-bg1.jpg';
import Testimonial from '../components/Testimonial';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className="bg-gray-100 py-20 px-6 mt-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-gray-50 pt-2 px-6 pb-16">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center text-white py-20 px-6 rounded-3xl shadow-lg text-center mb-32"
          style={{ backgroundImage: `url(${yourLightBgImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-30 rounded-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Empower Your HR Team with HR Cloud
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Simplify employee management, payroll, and attendance — all in one powerful platform.
            </p>
            <a
              href="/services"
              className="inline-block bg-white text-gray-900 font-semibold text-lg px-8 py-3 rounded-full shadow hover:bg-gray-100 transition duration-300"
            >
              Explore Services
            </a>
          </div>
        </section>

        {/* Brief Intro Box */}
        <section className="max-w-4xl mx-auto -mt-20 bg-white p-8 rounded-2xl shadow-xl z-20 relative">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What is HR Cloud?</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            HR Cloud is your all-in-one platform to manage employee records, track attendance,
            streamline payroll, and handle leave approvals effortlessly. Empower your HR team and
            employees with tools that simplify workflows and improve productivity.
          </p>
        </section>

        {/* Features Section - Dark Theme */}
        <section className="mt-32 bg-gray-900 py-20 px-6 rounded-3xl shadow-inner">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-500 text-center border-t-4 border-blue-500">
              <FaUserTie className="text-blue-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Employee Tracking</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Monitor and manage employee activity and performance in real-time.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-500 text-center border-t-4 border-blue-500">
              <FaCalendarCheck className="text-blue-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Leave Management</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Approve or reject leave requests with visibility into team availability.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-500 text-center border-t-4 border-blue-500">
              <FaMoneyBillWave className="text-blue-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Payroll Insights</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Get powerful insights into payroll trends and financial efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Styled */}
        <section className="bg-gray-900 py-24 px-6 mt-32 rounded-3xl shadow-inner">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">What Our Clients Say</h2>
            <p className="text-gray-400 text-lg">
              Hear directly from the teams who have transformed their HR with us.
            </p>
          </div>
          <Testimonial />
        </section>
      </div>
    </motion.div>
  );
}
