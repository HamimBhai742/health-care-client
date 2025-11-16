'use client';

import { useState } from 'react';
import { Bot, Brain, Stethoscope, MessageCircle, Zap, Sparkles, ChevronRight } from 'lucide-react';

const AIFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const aiFeatures = [
    {
      icon: Bot,
      title: "AI Health Assistant",
      description: "24/7 intelligent health support",
      status: "Active",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Smart Diagnosis",
      description: "AI-powered symptom analysis",
      status: "Processing",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Stethoscope,
      title: "Predictive Care",
      description: "Early health risk detection",
      status: "Monitoring",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-500 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-500 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-blue-600 mr-2 animate-pulse" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">AI-Powered Healthcare</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Intelligent Health
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"> Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of healthcare with our AI-driven platform that provides personalized care and intelligent insights.
          </p>
        </div>

        {/* AI Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {aiFeatures.map((feature, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group ${
                activeFeature === index ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
              onClick={() => setActiveFeature(index)}
            >
              {/* Status Indicator */}
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500">{feature.status}</span>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div 
                  className={`bg-gradient-to-r ${feature.color} h-2 rounded-full transition-all duration-1000`}
                  style={{ width: `${70 + index * 10}%` }}
                ></div>
              </div>

              <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          ))}
        </div>

        {/* AI Chat Interface Mockup */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center mr-4">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">AI Health Assistant</h3>
              <p className="text-gray-500">Online • Ready to help</p>
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-500 animate-pulse" />
              <span className="text-sm text-gray-500">AI Powered</span>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-4 max-w-md">
                <p className="text-gray-800">Hello! I'm your AI health assistant. How can I help you today?</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 justify-end">
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl rounded-tr-sm p-4 max-w-md">
                <p className="text-white">I've been having headaches lately. Should I be concerned?</p>
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-4 max-w-md">
                <p className="text-gray-800">I understand your concern. Let me ask a few questions to better assess your situation...</p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">Analyzing symptoms...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
            <MessageCircle className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Type your health question..."
              className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
            />
            <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-2 rounded-xl hover:shadow-lg transition-all duration-300">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* AI Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "AI Consultations", value: "10K+", icon: Bot },
            { label: "Accuracy Rate", value: "98.5%", icon: Brain },
            { label: "Response Time", value: "<2s", icon: Zap },
            { label: "Languages", value: "25+", icon: MessageCircle }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
