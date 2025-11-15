import { Heart } from 'lucide-react';
import React from 'react';

const Services = () => {
  return (
    <section className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Our Medical Services
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Comprehensive healthcare services delivered by experienced
            professionals
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[
            {
              title: 'Cardiology',
              desc: 'Heart care specialists',
              color: 'from-red-500 to-pink-500',
            },
            {
              title: 'Neurology',
              desc: 'Brain and nervous system',
              color: 'from-purple-500 to-indigo-500',
            },
            {
              title: 'Pediatrics',
              desc: 'Child healthcare',
              color: 'from-green-500 to-teal-500',
            },
            {
              title: 'Orthopedics',
              desc: 'Bone and joint care',
              color: 'from-blue-500 to-cyan-500',
            },
            {
              title: 'Dermatology',
              desc: 'Skin care specialists',
              color: 'from-yellow-500 to-orange-500',
            },
            {
              title: 'Emergency Care',
              desc: '24/7 emergency services',
              color: 'from-red-600 to-red-500',
            },
          ].map((service, index) => (
            <div
              key={index}
              className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
            >
              <div
                className={`w-16 h-16 bg-linear-to-r ${service.color} rounded-2xl mb-6 flex items-center justify-center`}
              >
                <Heart className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                {service.title}
              </h3>
              <p className='text-gray-600 mb-4'>{service.desc}</p>
              <button className='text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200'>
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
