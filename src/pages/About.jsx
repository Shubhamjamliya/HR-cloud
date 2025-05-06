import people1 from "../assets/people-1.jpg"
import people2 from "../assets/people-2.jpg"
import people3 from "../assets/people-3.jpg"
import mission from "../assets/mission.jpg"
import vision from "../assets/vision.jpg"
import { FaLightbulb, FaHandshake, FaThumbsUp } from 'react-icons/fa';
import { FaBullseye, FaRocket } from 'react-icons/fa';
import { FaLaptop, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';


export default function About() {
  return (
    <motion.div
      className="bg-gray-50 py-5 px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-gray-100 py-20 px-6 mt-16">
        {/* Header */}
        <div className="bg-gray-900 p-12 rounded-3xl shadow-xl text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            About HR Cloud
          </h1>
          <p className="text-gray-100 text-lg max-w-3xl mx-auto">
            Learn more about our mission, vision, and the talented individuals behind HR Cloud, the next-generation HR management solution.
          </p>
        </div>



        {/* Mission & Vision */}
        <div className="bg-gray-900 py-16 px-6 mb-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-center">

            {/* Mission Section */}
            <div className="border-amber-50 border-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="bg-gray-700 p-8 ">
                <div className="text-white mb-4">
                  <FaBullseye className="text-5xl mx-auto mb-4" />
                </div>
                <h2 className="text-white text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-200 leading-relaxed text-lg">
                  To empower HR professionals and organizations with intuitive tools that simplify HR processes, enhance efficiency, and improve employee satisfaction.
                </p>
              </div>
              <img
                src={mission}
                alt="Mission Image"
                className="w-full mt-6 rounded-xl shadow-md"
              />
            </div>


            {/* Vision Section */}
            <div className="border-amber-50 border-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="bg-gray-700 p-8 ">
                <div className="text-white mb-4">
                  <FaRocket className="text-5xl mx-auto mb-4" />
                </div>
                <h2 className="text-white text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-200 leading-relaxed text-lg">
                  To be the leading HR management platform trusted by companies around the world for modern workforce management.
                </p>
              </div>
              <img
                src={vision}
                alt="Vision Image"
                className="w-full mt-6 rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>


        {/* Why HR Cloud */}
        <div className="bg-gray-800 py-16 px-6 mb-16 rounded-xl">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-14">Why HR Cloud?</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-12">
              HR Cloud was born out of a need for simpler, smarter HR management solutions. With firsthand experience of HR challenges, our team built a platform that addresses the real-world pain points of human resource teams, making their workflow smoother and more transparent.
            </p>

            {/* Value Propositions */}
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12">

              {/* Icon 1: Streamlined Operations */}
              <div className="bg-blue-700 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="text-white mb-4">
                  <FaHandshake className="text-5xl mx-auto mb-4" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Streamlined Operations</h3>
                <p className="text-gray-200 text-base">
                  Our platform integrates HR processes into one seamless workflow, enhancing operational efficiency.
                </p>
                <img
                  src="https://via.placeholder.com/200"
                  alt="Streamlined Operations"
                  className="w-full mt-4 rounded-xl shadow-md"
                />
              </div>

              {/* Icon 2: User-Friendly Platform */}
              <div className="bg-blue-700 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="text-white mb-4">
                  <FaLaptop className="text-5xl mx-auto mb-4" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">User-Friendly Platform</h3>
                <p className="text-gray-200 text-base">
                  Our intuitive interface ensures HR professionals can easily navigate and manage tasks without technical knowledge.
                </p>
                <img
                  src="https://via.placeholder.com/200"
                  alt="User-Friendly Platform"
                  className="w-full mt-4 rounded-xl shadow-md"
                />
              </div>

              {/* Icon 3: Employee Engagement */}
              <div className="bg-blue-700 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="text-white mb-4">
                  <FaUsers className="text-5xl mx-auto mb-4" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Employee Engagement</h3>
                <p className="text-gray-200 text-base">
                  We prioritize employee satisfaction with features designed to boost engagement and streamline communication.
                </p>
                <img
                  src="https://via.placeholder.com/200"
                  alt="Employee Engagement"
                  className="w-full mt-4 rounded-xl shadow-md"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Brand Values */}
        <div className="bg-gray-800 py-16 px-6 mb-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-white mb-8">Our Core Values</h2>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
              {/* Innovation */}
              <li className="bg-blue-600 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-white mb-4">
                  <FaLightbulb className="text-4xl mx-auto mb-4" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Innovation</h3>
                <p className="text-gray-200 text-base">Constantly evolving to meet the modern HR needs with technology and creative solutions.</p>
              </li>
              {/* Integrity */}
              <li className="bg-blue-600 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-white mb-4">
                  <FaHandshake className="text-4xl mx-auto mb-4" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Integrity</h3>
                <p className="text-gray-200 text-base">We value transparency, ethics, and trust in all our dealings with clients and partners.</p>
              </li>
              {/* Customer Success */}
              <li className="bg-blue-600 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-white mb-4">
                  <FaThumbsUp className="text-4xl mx-auto mb-4" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Customer Success</h3>
                <p className="text-gray-200 text-base">Your success is our priority—always putting our users first and helping them thrive.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Team Introduction */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-8">Meet Our Team</h2>
          <p className="text-gray-600 mb-8 text-lg">
            We are a passionate group of technologists, HR experts, and designers dedicated to transforming the way HR works and helping organizations scale effectively.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="h-32 w-32 rounded-full mx-auto mb-4">
                <img
                  src={people1}
                  alt="Ayesha Khan"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h4 className="text-lg font-semibold text-blue-700">Ayesha Khan</h4>
              <p className="text-gray-600 text-sm">CEO & Co-founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="h-32 w-32 rounded-full mx-auto mb-4">
                <img
                  src={people2}
                  alt="Rahul Mehta"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h4 className="text-lg font-semibold text-blue-700">Rahul Mehta</h4>
              <p className="text-gray-600 text-sm">CTO & Co-founder</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="h-32 w-32 rounded-full mx-auto mb-4">
                <img
                  src={people3}
                  alt="Sara D’Souza"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h4 className="text-lg font-semibold text-blue-700">Sara D’Souza</h4>
              <p className="text-gray-600 text-sm">Head of Product</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
