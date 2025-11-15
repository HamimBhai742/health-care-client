const Hero = () => {
  return (
    <section className='bg-linear-to-br from-blue-50 via-white to-teal-50 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
            Your Health is Our{' '}
            <span className='bg-linear-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent'>
              Priority
            </span>
          </h1>
          <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
            Experience world-class healthcare with our team of expert doctors
            and modern facilities. We provide comprehensive medical services
            with compassionate care.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-linear-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105'>
              Book Appointment
            </button>
            <button className='border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
