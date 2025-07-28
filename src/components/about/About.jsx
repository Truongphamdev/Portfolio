import React from "react";
import { useDarkMode } from "../darkmode/useDarkMode";
import { Navbar } from "../nav/Navbar";
import { motion } from "framer-motion";
export const About = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <>

    <motion.div
  initial={{ y: 5 }}
  animate={{ y: 0 }}
  exit={{ y: -10 }}
  transition={{
    duration: 0.5,
    ease: [0.25, 0.7, 0.25, 1]
  }}
      id="about"
      className="min-h-screen dark:bg-black bg-white text-black dark:text-white pt-6"
    >
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 bg-gray-200 cursor-pointer dark:bg-gray-700 p-2 rounded-full hover:scale-105 transition"
      >
        {darkMode ? "🌞" : "🌙"}
      </button>

     

      <div className="max-w-5xl mx-auto p-6 rounded-2xl shadow-2xl border border-yellow-200 dark:border-[#4B3D10] ">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p className="mb-4 text-lg">
          I am a passionate and self-motivated web developer with hands-on
          experience in building responsive and user-friendly websites using
          modern technologies such as React, Laravel, and Django. I enjoy
          learning new tools and frameworks, and I’m always looking for
          opportunities to apply my knowledge in real-world projects.
        </p>
        <p className="mb-8 text-lg">
          My goal is to become a full-stack developer who not only builds
          efficient web systems but also contributes to better user experiences
          and clean code practices.
        </p>

        <h2 className="text-3xl font-bold mb-6">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            img={"/1.png"}
            title="Web Front-End Development"
            content="With React.js and Tailwind CSS, 
            I create engaging front-end interfaces that are both intuitive and optimized for various screen sizes."
          />
            <Card
            img={"/2.png"}
              title="UI/UX Practices"
              content="Understanding UI/UX fundamentals, I build interfaces that are both intuitive and visually engaging."
            />
          <Card
          img={"/3.png"}
            title="Back-End Development"
            content="Experienced in building RESTful APIs using Laravel and Django. I develop secure, scalable backend services."
          />
          <Card
          img={"/4.png"}
            title="Full-Stack Web Apps"
            content="I can independently develop full-stack applications, handling everything from front-end design to API and database integration."
          />
        </div>
      </div>
    </motion.div>
        </>
  );
};

const Card = ({ img, title, content }) => (
  <div className="bg-[#FDF4F4] dark:bg-[#625839] rounded-xl shadow hover:scale-[1.02] transition-all grid grid-cols-3 gap-2 ">
    <div className="col-span-1 flex justify-center">
      <img src={img} alt={title} className="w-48 h-full object-cover rounded-lg " />
    </div>
    <div className="col-span-2 flex flex-col justify-center">
      <h3 className="text-xl font-bold text-black dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-md">{content}</p>
    </div>
  </div>
);

