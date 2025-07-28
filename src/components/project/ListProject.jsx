import React from 'react';
import { useDarkMode } from "../darkmode/useDarkMode";  
import { motion } from 'framer-motion';
import { href } from 'react-router-dom';
const projects = [
  {
    image: "./agriculrure.png",
    title: "Plant Disease Analysis ( React + DRF )",
    id:1,
    href:"https://github.com/Truongphamdev/agricular"
  },
  {
    image: "./car.png",
    title: "Online Car Selling Platform ( React + Laravel )",
    id:2,
    href:"https://github.com/Truongphamdev/car_shop"
  },
  {
    image: "./calo.png",
    title: "Calorie Intake Analysis ( React + DRF )",
    id:3,
    href:"https://github.com/Truongphamdev/calo"

  },
  {
    image: "./blog.jpeg",
    title: "My Blog ( Laravel )",
    id:4,
    href:"https://github.com/Truongphamdev/myblog"

  },

];

const Projects = () => {
    const [darkMode, toggleDarkMode] = useDarkMode();
  return (
    <motion.div
    initial={{ y: 5 }}
        animate={{ y: 0 }}
        exit={{ y: -10 }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.7, 0.25, 1],
        }}
    className="max-w-4xl mx-auto py-10 px-4  mt-6 rounded-2xl shadow-2xl border border-yellow-200 dark:border-[#4B3D10]">
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:scale-105 transition"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};
const ProjectCard = ({ image, title, href }) => {
  return (
    <a href={href}>
    <div className="border rounded-xl shadow-md p-3 bg-[#F9F6EA] hover:shadow-lg transition-all dark:bg-[#403D32] dark:text-white cursor-pointer">
      <img src={image} alt={title} className="rounded-md mb-3 w-full h-60 object-cover" />
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
    </div>
            
    </a>
  );
};


export default Projects;