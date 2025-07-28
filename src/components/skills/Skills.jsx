// src/components/SkillsTools.jsx
import React from 'react';
import { useDarkMode } from "../darkmode/useDarkMode";
import { motion } from 'framer-motion';

const skills = [
  { name: 'Django', icon: "../skills/django.png" },
  { name: 'DRF', icon: "../skills/drf.png" },
  { name: 'Laravel', icon: "../skills/laravel.png" },
  { name: 'Spring Boot', icon: "../skills/springboot.png" },
  { name: 'Android', icon: "../skills/image.svg" },
  { name: 'React Native', icon: "../skills/reactnative.png" },
  { name: 'React Js', icon: "../skills/image.png" },
  { name: 'TypeScript', icon: "../skills/typescript.png" },
  { name: 'PostgreSQL', icon: "../skills/postgresql.png" },
  { name: 'MySQL', icon: "../skills/sql.png" },
  { name: 'Tailwind CSS', icon: "../skills/tailwind.png" },
  { name: 'Bootstrap', icon: "../skills/bootstrap.png" },
  { name: 'HTML', icon: "../skills/html.png" },
  { name: 'Css', icon: "../skills/css.png" },
  { name: 'JavaScript', icon: "../skills/javascript.png" },
  { name: 'Java', icon: "../skills/java.png" },
  { name: 'Python', icon: "../skills/python.png" },
  { name: 'Php', icon: "../skills/php.png" },
];

const tools = [
  { name: 'Figma', icon: "../skills/figma.png" },
  { name: 'WordPress', icon: "../skills/wordpress.png" },
  { name: 'GitHub', icon: "../skills/git.png" },
  { name: 'Docker', icon: "../skills/docker.png" },
  { name: 'Postman', icon: "../skills/postman.png" },
  { name: 'Clarifai', icon: "../skills/clarifai.png" },
  { name: 'Visual Studio Code', icon: "../skills/visual.png" },
  { name: 'Android Studio', icon: "../skills/androistudio.png" },
  { name: 'Eclipse', icon: "../skills/eclip.png" },

];

const SkillBox = ({ icon, name }) => (
  <div className="flex flex-col items-center justify-center gap-1">
    <div className="w-20 h-20 flex items-center justify-center border-2 border-yellow-300 hover:border-yellow-400 hover:shadow-[0_0_12px_#facc15] rounded-lg transition duration-300 hover:scale-105 bg-white dark:bg-gray-900">
      <img src={icon} alt={name} className="w-12 h-12 object-contain" />
    </div>
    <p className="text-md font-medium text-gray-700 dark:text-gray-200 text-center">{name}</p>
  </div>
);


export default function SkillsTools() {
    const [darkMode, toggleDarkMode] = useDarkMode();
  return (
    <motion.div 
    initial={{ y: 5 }}
        animate={{ y: 0 }}
        exit={{ y: -10 }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.7, 0.25, 1],
        }} className="bg-white dark:bg-black text-black dark:text-white md:pt-0 pt-6">
                    {/* Toggle button */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:scale-105 transition"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
        <div className='max-w-5xl mx-auto py-10 px-4 rounded-2xl shadow-2xl border border-yellow-200 dark:border-[#4B3D10]'>
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 mb-10">
        {skills.map((skill, i) => (
          <SkillBox key={i} icon={skill.icon} name={skill.name} />
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">Tools & Software</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
        {tools.map((tool, i) => (
          <SkillBox key={i} icon={tool.icon} name={tool.name} />
        ))}
      </div>
                  
        </div>
    </motion.div >
  );
}
