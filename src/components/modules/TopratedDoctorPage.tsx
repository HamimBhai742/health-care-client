'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Filter, Search, Users, Award, Star } from 'lucide-react';
import DoctorCard from '@/components/ui/DoctorCard';
import { mockDoctors } from '@/json/topRatedDoctor';



const specializations = ["All", "Cardiologist", "Neurologist", "Pediatrician", "Orthopedic", "Dermatologist", "Gastroenterologist"];

const TopRatedDoctorPage = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  const doctorsPerPage = 3;

  const filteredDoctors = selectedSpecialization === "All"
    ? mockDoctors
    : mockDoctors.filter(doctor => doctor.specialization.includes(selectedSpecialization));

  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);
  const currentDoctors = filteredDoctors.slice(
    currentPage * doctorsPerPage,
    (currentPage + 1) * doctorsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-20 bg-linear-to-br from-slate-50 via-blue-50/30 to-cyan-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="h-4 w-4" />
            <span>Top Rated Professionals</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Meet Our
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Top Rated </span>
            Doctors
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Connect with our highly-rated medical professionals who provide exceptional care
            and have earned the trust of thousands of patients worldwide.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Users className="h-6 w-6 text-blue-500" />
              <span className="text-3xl font-bold text-slate-800">500+</span>
            </div>
            <p className="text-slate-600">Expert Doctors</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Star className="h-6 w-6 text-yellow-500" />
              <span className="text-3xl font-bold text-slate-800">4.8</span>
            </div>
            <p className="text-slate-600">Average Rating</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Award className="h-6 w-6 text-green-500" />
              <span className="text-3xl font-bold text-slate-800">50K+</span>
            </div>
            <p className="text-slate-600">Happy Patients</p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-slate-500" />
            <span className="text-slate-700 font-medium">Filter by Specialization:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {specializations.map((spec) => (
              <button
                key={spec}
                onClick={() => {
                  setSelectedSpecialization(spec);
                  setCurrentPage(0);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedSpecialization === spec
                    ? 'bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevPage}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all duration-200"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-10 h-10 rounded-xl font-medium transition-all duration-200 ${
                    currentPage === i
                      ? 'bg-linear-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={nextPage}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all duration-200"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-linear-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Can&apos;t Find the Right Doctor?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our medical coordinators are here to help you find the perfect specialist
              for your specific needs and preferences.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200">
              Get Personalized Recommendations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRatedDoctorPage;