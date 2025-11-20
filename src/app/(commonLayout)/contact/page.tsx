import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, HeartHandshake } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Get in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Touch</span>
              <br />with Our Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We're here to help you with all your healthcare needs. Reach out to us anytime 
              for appointments, inquiries, or emergency assistance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-2">+1 (555) 123-4567</p>
              <p className="text-gray-500 text-xs">24/7 Emergency Line</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-2">info@healthcare.com</p>
              <p className="text-gray-500 text-xs">Response within 2 hours</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm mb-2">123 Health St, Medical City</p>
              <p className="text-gray-500 text-xs">Multiple locations</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600 text-sm mb-2">Mon-Fri: 8AM-8PM</p>
              <p className="text-gray-500 text-xs">Weekend: 9AM-5PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-xl text-gray-600">
                  Have questions about our services? Need to schedule an appointment? 
                  We're here to help you every step of the way.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quick Response</h3>
                    <p className="text-gray-600 text-sm">We typically respond to all inquiries within 2 hours during business hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <HeartHandshake className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Personal Care</h3>
                    <p className="text-gray-600 text-sm">Every message receives personal attention from our healthcare team.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 shadow-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                    <option>General Inquiry</option>
                    <option>Appointment Request</option>
                    <option>Medical Question</option>
                    <option>Insurance Question</option>
                    <option>Feedback</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to connect with our healthcare team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phone Support</h3>
              <div className="space-y-2 mb-6">
                <p className="text-gray-600"><span className="font-medium">Main Line:</span> +1 (555) 123-4567</p>
                <p className="text-gray-600"><span className="font-medium">Emergency:</span> +1 (555) 911-0000</p>
                <p className="text-gray-600"><span className="font-medium">Appointments:</span> +1 (555) 123-4568</p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Call Now
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Support</h3>
              <div className="space-y-2 mb-6">
                <p className="text-gray-600"><span className="font-medium">General:</span> info@healthcare.com</p>
                <p className="text-gray-600"><span className="font-medium">Appointments:</span> appointments@healthcare.com</p>
                <p className="text-gray-600"><span className="font-medium">Billing:</span> billing@healthcare.com</p>
              </div>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                Send Email
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Live Chat</h3>
              <div className="space-y-2 mb-6">
                <p className="text-gray-600"><span className="font-medium">Available:</span> Mon-Fri 8AM-8PM</p>
                <p className="text-gray-600"><span className="font-medium">Response:</span> Within 2 minutes</p>
                <p className="text-gray-600"><span className="font-medium">Support:</span> Real-time assistance</p>
              </div>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the healthcare facility nearest to you with convenient access and ample parking.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900">Main Campus</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <p>123 Health Street</p>
                <p>Medical City, MC 12345</p>
                <p className="font-medium text-blue-600">24/7 Emergency Services</p>
              </div>
              <div className="mt-4 pt-4 border-t border-blue-200">
                <p className="text-sm text-gray-600 mb-2">Services Available:</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded">Emergency</span>
                  <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded">Surgery</span>
                  <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded">ICU</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-bold text-gray-900">North Branch</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <p>456 Wellness Ave</p>
                <p>North District, ND 12346</p>
                <p className="font-medium text-green-600">Outpatient Services</p>
              </div>
              <div className="mt-4 pt-4 border-t border-green-200">
                <p className="text-sm text-gray-600 mb-2">Services Available:</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">Consultation</span>
                  <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">Lab</span>
                  <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">Imaging</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-900">South Clinic</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <p>789 Care Boulevard</p>
                <p>South Town, ST 12347</p>
                <p className="font-medium text-purple-600">Specialized Care</p>
              </div>
              <div className="mt-4 pt-4 border-t border-purple-200">
                <p className="text-sm text-gray-600 mb-2">Services Available:</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded">Cardiology</span>
                  <span className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded">Neurology</span>
                  <span className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded">Oncology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Emergency? We're Here 24/7
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              For life-threatening emergencies, don't hesitate to contact us immediately. 
              Our emergency team is always ready to provide immediate medical assistance.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <Phone className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Emergency Hotline</h3>
                <p className="text-red-100 text-2xl font-bold mb-2">911</p>
                <p className="text-red-100 text-sm">Life-threatening emergencies</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <Phone className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Hospital Direct</h3>
                <p className="text-red-100 text-xl font-bold mb-2">+1 (555) 911-0000</p>
                <p className="text-red-100 text-sm">Direct to emergency room</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center md:col-span-2 lg:col-span-1">
                <MessageCircle className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Urgent Care Chat</h3>
                <p className="text-red-100 text-lg font-bold mb-2">Available Now</p>
                <p className="text-red-100 text-sm">Non-emergency urgent care</p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-xl hover:bg-red-50 transition-all duration-200 shadow-lg">
                Call Emergency Line
              </button>
              <button className="bg-red-700 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-800 transition-all duration-200 shadow-lg">
                Find Nearest Location
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
