import React from 'react';
import DoctorCard from '../ui/DoctorCard';
import { mockDoctors } from '@/json/topRatedDoctor';
import { Award } from 'lucide-react';

const TopRatedDoctor = () => {
  return (
    <section className='py-20 bg-linear-to-br from-slate-50 via-blue-50/30 to-cyan-50/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4'>
            <Award className='h-4 w-4' />
            <span>Top Rated Professionals</span>
          </div>

          <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-6'>
            Meet Our
            <span className='bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
              {' '}
              Top Rated{' '}
            </span>
            Doctors
          </h2>

          <p className='text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed'>
            Connect with our highly-rated medical professionals who provide
            exceptional care and have earned the trust of thousands of patients
            worldwide.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {mockDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
        <div className='flex justify-center'>
          <button className='bg-blue-600  hover:bg-blue-700 text-white px-4 py-3 rounded-lg mt-8 hover:cursor-pointer'>
            View All Doctors
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopRatedDoctor;
