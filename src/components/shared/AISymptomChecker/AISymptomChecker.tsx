'use client';

import { useState } from 'react';
import { Search, Brain, AlertCircle, CheckCircle, Clock, Zap } from 'lucide-react';

const AISymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-8 h-8 text-purple-600 mr-2 animate-pulse" />
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">AI Diagnosis</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Symptom Checker
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Describe your symptoms and get AI-powered preliminary analysis in seconds
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 shadow-xl">
          {/* Input Section */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Describe your symptoms
            </label>
            <div className="relative">
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="e.g., I have a headache, fever, and feel tired..."
                className="w-full h-32 p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
              <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                <Zap className="w-4 h-4 text-purple-500" />
                <span className="text-xs text-gray-500">AI Powered</span>
              </div>
            </div>
          </div>

          {/* Analyze Button */}
          <div className="text-center mb-8">
            <button
              onClick={handleAnalyze}
              disabled={!symptoms.trim() || isAnalyzing}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  <span>Analyze Symptoms</span>
                </>
              )}
            </button>
          </div>

          {/* Results Section */}
          {(isAnalyzing || symptoms) && (
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Brain className="w-6 h-6 text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">AI Analysis Results</h3>
                {isAnalyzing && (
                  <div className="ml-auto flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-500">Processing</span>
                  </div>
                )}
              </div>

              {isAnalyzing ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-gray-600">Analyzing symptom patterns...</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-gray-600">Cross-referencing medical database...</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-gray-600">Generating recommendations...</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Possible Conditions */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Possible Conditions</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-xl border border-yellow-200">
                        <div className="flex items-center space-x-3">
                          <AlertCircle className="w-5 h-5 text-yellow-600" />
                          <span className="font-medium text-gray-900">Common Cold</span>
                        </div>
                        <span className="text-sm font-semibold text-yellow-600">85% Match</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl border border-blue-200">
                        <div className="flex items-center space-x-3">
                          <AlertCircle className="w-5 h-5 text-blue-600" />
                          <span className="font-medium text-gray-900">Viral Infection</span>
                        </div>
                        <span className="text-sm font-semibold text-blue-600">72% Match</span>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">AI Recommendations</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">Get plenty of rest and stay hydrated</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">Monitor temperature regularly</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-xl">
                        <Clock className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700">Consult a doctor if symptoms persist for more than 3 days</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              <strong>Disclaimer:</strong> This AI analysis is for informational purposes only and should not replace professional medical advice. 
              Always consult with a healthcare provider for proper diagnosis and treatment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISymptomChecker;
