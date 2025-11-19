'use client';

import { Star, MapPin, Calendar, Award, Clock } from 'lucide-react';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  rating: number;
  reviews: number;
  experience: string;
  location: string;
  image: string;
  availability: string;
  consultationFee: string;
  verified: boolean;
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-blue-200 hover:-translate-y-2">
      {/* Doctor Image */}
      <div className="relative overflow-hidden">
        <div className="aspect-4/3 bg-linear-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
          <div className="w-24 h-24 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {doctor.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>

        {/* Verified Badge */}
        {doctor.verified && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Award className="h-3 w-3" />
            <span>Verified</span>
          </div>
        )}

        {/* Rating Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm font-semibold text-slate-700">{doctor.rating}</span>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="p-6">
        {/* Name & Specialization */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
            Dr. {doctor.name}
          </h3>
          <p className="text-blue-600 font-medium text-sm">{doctor.specialization}</p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4 text-sm text-slate-600">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{doctor.experience}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>{doctor.reviews} reviews</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-2 mb-4 text-sm text-slate-600">
          <MapPin className="h-4 w-4 text-slate-400" />
          <span>{doctor.location}</span>
        </div>

        {/* Availability & Fee */}
        <div className="flex items-center justify-between mb-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-green-600 font-medium">{doctor.availability}</span>
          </div>
          <span className="text-slate-800 font-semibold">{doctor.consultationFee}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="flex-1 bg-linear-to-r from-blue-500 to-cyan-500 text-white py-2.5 px-4 rounded-xl font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>Book Now</span>
          </button>
          <button className="px-4 py-2.5 border-2 border-slate-200 text-slate-600 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all duration-200 font-medium">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
