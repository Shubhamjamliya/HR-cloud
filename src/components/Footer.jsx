import { FaGoogle, FaYelp, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <img
            src={logo}
            alt="HR Cloud Logo"
            className="mb-4 w-40"
          />
          <p className="text-sm text-gray-300">
            Simplify employee management, payroll, and attendance — all in one powerful platform.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" aria-label="Google Reviews" className="text-red-500 hover:text-white">
              <FaGoogle size={20} />
            </a>
            <a href="#" aria-label="Yelp" className="text-red-700 hover:text-white">
              <FaYelp size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-blue-500 hover:text-white">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Employee Tracking</a></li>
            <li><a href="#" className="hover:text-white">Attendance Management</a></li>
            <li><a href="#" className="hover:text-white">Payroll Insights</a></li>
            <li><a href="#" className="hover:text-white">Leave Approvals</a></li>
          </ul>

        </div>

        {/* Company */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Training</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Address</h2>
          <p className="text-sm text-gray-300">
            1234 5th Ave S,<br />
            Seattle, WA 5678,<br />
            United States.<br />
            mail@example.com<br />
            +01-123 456 7890
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-4 flex flex-col md:flex-row justify-between items-center px-6 text-sm text-gray-400">
        <p>© 2025 HR Cloud</p>
        <p>Powered by HR Cloud</p>
      </div>
    </footer>
  );
}
