import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-gray-300 py-16 px-6 mt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We'd love to hear from you! Reach out with any questions or feedback.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="bg-white p-6 rounded-2xl shadow-md space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded-md" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 p-2 rounded-md" placeholder="Your Email" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea className="w-full border border-gray-300 p-2 rounded-md" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>

        {/* Contact Info + Map */}
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

          {/* Embedded Map */}
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
  );
}
