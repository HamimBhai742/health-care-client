import { Award, Clock, Heart, Users } from 'lucide-react';
import React from 'react';

const Stats = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='text-center'>
            <div className='flex justify-center mb-4'>
              <Heart className='w-12 h-12 text-blue-600' />
            </div>
            <h3 className='text-3xl font-bold text-gray-900 mb-2'>500+</h3>
            <p className='text-gray-600'>Happy Patients</p>
          </div>
          <div className='text-center'>
            <div className='flex justify-center mb-4'>
              <Users className='w-12 h-12 text-teal-500' />
            </div>
            <h3 className='text-3xl font-bold text-gray-900 mb-2'>50+</h3>
            <p className='text-gray-600'>Expert Doctors</p>
          </div>
          <div className='text-center'>
            <div className='flex justify-center mb-4'>
              <Award className='w-12 h-12 text-blue-600' />
            </div>
            <h3 className='text-3xl font-bold text-gray-900 mb-2'>15+</h3>
            <p className='text-gray-600'>Years Experience</p>
          </div>
          <div className='text-center'>
            <div className='flex justify-center mb-4'>
              <Clock className='w-12 h-12 text-teal-500' />
            </div>
            <h3 className='text-3xl font-bold text-gray-900 mb-2'>24/7</h3>
            <p className='text-gray-600'>Emergency Care</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
