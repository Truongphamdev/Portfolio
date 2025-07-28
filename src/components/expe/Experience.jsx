import React from 'react';
import { useDarkMode } from "../darkmode/useDarkMode";
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

export const Experience = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <>
      <motion.div
        initial={{ y: 5 }}
        animate={{ y: 0 }}
        exit={{ y: -10 }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.7, 0.25, 1],
        }}
        className="min-h-screen flex items-center justify-center dark:bg-black bg-white text-black dark:text-white px-4 py-10"
      >
        {/* Toggle button */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:scale-105 transition"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>

        {/* Main container */}
        <div className="w-full max-w-4xl md:px-10 px-5 py-8 rounded-2xl shadow-2xl border border-yellow-300 dark:border-yellow-600 bg-white dark:bg-[#1a1a1a] space-y-10">
          
          {/* EDUCATION */}
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="w-6 h-6 mr-2 text-yellow-500" />
              <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
            </div>
            <div className="rounded-xl shadow-md border border-yellow-200 dark:border-yellow-700 bg-yellow-50 dark:bg-[#2a2a2a] p-5">
              <h3 className="text-lg md:text-xl font-semibold">DANA College</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">2023 - Now</p>
              <div className="mt-2 text-sm space-y-1">
                <p><strong>Major:</strong> Information Technology (5th semester)</p>
                <p><strong>Level:</strong> Good</p>
                <p><strong>Achievement:</strong> Excellent Scholarship for 4 consecutive semesters.</p>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div>
            <div className="flex items-center mb-4">
              <Briefcase className="w-6 h-6 mr-2 text-yellow-500" />
              <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
            </div>
            <div className="rounded-xl shadow-md border border-yellow-200 dark:border-yellow-700 bg-yellow-50 dark:bg-[#2a2a2a] p-5">
              <div className="text-sm space-y-2">
                <p><strong>Company:</strong> Sbay Viet Nam</p>
                <p><strong>Role:</strong> Intern PHP</p>
                <p><strong>Duration:</strong> 3 months</p>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </>
  );
};
