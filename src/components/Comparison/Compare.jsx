import React from 'react';
import { Check, X } from 'lucide-react';

export default function CourseComparison() {
  const comparisons = [
    {
      feature: "Daily Live Interactive Classes",
      kumarK: true,
      others: false
    },
    {
      feature: "One-on-One Mentorship with Kumar K Sir",
      kumarK: true,
      others: false
    },
     {
      feature: "Direct Job Referrals(FAANGM + top PBC)",
      kumarK: true,
      others: false
    },
    {
      feature: "Personalized Doubt Clearing(24*7 Doubt Support)",
      kumarK: true,
      others: false
    },
    {
      feature: "851 Hr updated DSA Course Content(DSA + OA + Interview + CP prep)",
      kumarK: true,
      others: false
    },
    
   
   
    
  
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r to-red-50 from-yellow-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Speical Course Feature
          </h1>
          <p className="text-gray-600 text-lg">
            See what makes Kumar K Sir's cohort stand out
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                  <th className="py-6 px-6 text-left text-lg font-semibold">
                    Features
                  </th>
                  <th className="py-6 px-6 text-center text-lg font-semibold">
                    Kumar K Sir's Cohort
                  </th>
                  <th className="py-6 px-6 text-center text-lg font-semibold">
                    Other Courses
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="py-5 px-6 text-gray-800 font-medium">
                      {item.feature}
                    </td>
                    <td className="py-5 px-6 text-center">
                      {item.kumarK ? (
                        <div className="flex justify-center">
                          <div className="bg-green-100 rounded-full p-2">
                            <Check className="text-green-600 w-6 h-6" />
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <div className="bg-red-100 rounded-full p-2">
                            <X className="text-red-600 w-6 h-6" />
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="py-5 px-6 text-center">
                      {item.others ? (
                        <div className="flex justify-center">
                          <div className="bg-green-100 rounded-full p-2">
                            <Check className="text-green-600 w-6 h-6" />
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <div className="bg-red-100 rounded-full p-2">
                            <X className="text-red-600 w-6 h-6" />
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Enroll in Kumar K Sir's Course
          </button>
        </div>
      </div>
    </div>
  );
}