import { FaUserCheck, FaClock, FaMoneyCheckAlt, FaClipboardList } from 'react-icons/fa';
import employeeTrackingImg from '../assets/employee-tracking.jpg';
import attendanceManagementImg from '../assets/attendance-management.jpg';
import payrollInsightsImg from '../assets/payroll-insights.jpg';
import leaveApprovalImg from '../assets/leave-approval.png';

export default function Services() {
  const services = [
    {
      icon: <FaUserCheck className="text-4xl text-blue-600 mb-4" />,
      title: 'Employee Tracking',
      description: 'Track and manage employee performance and daily activities in real-time.',
      image: employeeTrackingImg,
    },
    {
      icon: <FaClock className="text-4xl text-blue-600 mb-4" />,
      title: 'Attendance Management',
      description: 'Automate attendance logging, reduce errors, and integrate with payroll.',
      image: attendanceManagementImg,
    },
    {
      icon: <FaMoneyCheckAlt className="text-4xl text-blue-600 mb-4" />,
      title: 'Payroll Insights',
      description: 'Analyze payroll trends and ensure compliance with detailed insights.',
      image: payrollInsightsImg,
    },
    {
      icon: <FaClipboardList className="text-4xl text-blue-600 mb-4" />,
      title: 'Leave Approvals',
      description: 'Handle leave requests efficiently with full visibility and control.',
      image: leaveApprovalImg,
    },
  ];

  return (
    <div className="bg-gray-300 py-16 px-6 mt-5">
      <div className="text-center mb-12 mt-8">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Our Services</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          HR Cloud offers a comprehensive suite of services to help you manage your HR operations more effectively and efficiently.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-gray-900 text-gray-100 rounded-2xl shadow-lg p-6 text-center transform transition duration-500 hover:scale-105 hover:shadow-blue-500/40 hover:bg-gray-800"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-blue-400 mb-2">{service.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>




      <div className="space-y-20 max-w-6xl mx-auto bg-gray-500 py-20 px-6 rounded-3xl shadow-inner">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-10 transition-all duration-500 ease-in-out hover:scale-[1.02] ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="rounded-2xl shadow-2xl w-full md:w-1/2 transform hover:scale-105 transition duration-500"
            />
            <div className="md:w-1/2 bg-gray-950 border-b-amber-50 border-8 bg-opacity-80 rounded-2xl p-6 shadow-lg">
              <h3 className="text-3xl font-extrabold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{service.description}</p>
              <p className="text-gray-400 text-sm mt-3 italic">
                Discover how our <span className="text-white font-medium">{service.title.toLowerCase()}</span> solution can optimize your HR workflows and increase team productivity.
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
