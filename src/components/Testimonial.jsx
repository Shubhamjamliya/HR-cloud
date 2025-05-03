import React from 'react';

const testimonials = [
  {
    name: 'Leslie Alexander',
    title: 'HR Manager @TechCorp',
    image: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png',
    text: '“HR Cloud transformed the way we manage employee performance and attendance. The platform is incredibly intuitive, and our team has never been more efficient.”',
  },
  {
    name: 'Jacob Jones',
    title: 'Payroll Specialist',
    image: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png',
    text: '“The payroll insights feature has been a game-changer for us. It helped us track trends and improve compliance, saving us so much time and effort.”',
  },
  {
    name: 'Eleanor Pena',
    title: 'Co-founder @GrowthStart',
    image: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female-1.png',
    text: '“We’ve significantly reduced the hassle of managing leave approvals. HR Cloud’s leave management system is seamless, easy to use, and has streamlined our HR operations.”',
  },
];


const StarRating = () => (
  <div aria-label="5 star rating" role="img" className="flex">
    {Array(5).fill(0).map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 text-[#FDB241]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-lg font-medium text-gray-600 font-pj">
            2,157 people have said how good HR cloud
          </p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Our happy clients say about us
          </h2>

          <div className="mt-8 md:mt-16 order-3">
            <a
              href="#"
              title="Check all reviews"
              className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:text-gray-600"
            >
              Check all 2,157 reviews
            </a>
          </div>
        </div>

        {/* Background gradient blur */}
        <div className="relative mt-10 md:mt-24 order-2">
          <div
            className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6"
            aria-hidden="true"
          >
            <div
              className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg"
              style={{
                background:
                  'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
              }}
            />
          </div>

          {/* Testimonials Grid */}
          <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3 z-10">
            {testimonials.map(({ name, title, image, text }, idx) => (
              <div key={idx} className="flex flex-col overflow-hidden shadow-xl bg-white rounded-lg">
                <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
                  <div>
                    <StarRating />
                    <blockquote className="mt-8">
                      <p className="text-lg leading-relaxed text-gray-900 font-pj">{text}</p>
                    </blockquote>
                  </div>
                  <div className="flex items-center mt-8">
                    <img
                      src={image}
                      alt={`${name}'s profile`}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div className="ml-4 text-left">
                      <p className="text-base font-bold text-gray-900 font-pj">{name}</p>
                      <p className="mt-0.5 text-sm text-gray-600 font-pj">{title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
