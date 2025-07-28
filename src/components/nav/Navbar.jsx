import React, { useState,useEffect } from "react";
import { BookUser, BookHeart, AlignVerticalSpaceAround, BadgeDollarSign, BriefcaseBusiness, Menu } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// filepath: d:\work_space\Portfolio\portfolio\src\components\nav\Navbar.jsx
export const Navbar = () => {
  const location = useLocation();
  const activeTab = location.pathname;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dark = localStorage.getItem("theme");
useEffect(() => {
  setLoading(false); 
}, [location.pathname]);

const handleTab = (href) => {
  setLoading(true);
  setTimeout(() => {
    navigate(href);       
    setIsOpen(false);
  }, 500); 
};


  const navItems = [
    { icon: <BookHeart className="w-8 h-8 mr-2" />, label: "Profile", href: "/profile" },
    { icon: <BookUser className="w-8 h-8 mr-2" />, label: "About", href: "/about" },
    { icon: <AlignVerticalSpaceAround className="w-8 h-8 mr-2" />, label: "Experience", href: "/experience" },
    { icon: <BadgeDollarSign className="w-8 h-8 mr-2" />, label: "Skills", href: "/skill" },
    { icon: <BriefcaseBusiness className="w-8 h-8 mr-2" />, label: "Projects", href: "/projects" },
  ];

  return (
    <motion.div


    >
      {/* desktop navbar */}
      <div className="bg-white dark:bg-black shadow-md hidden md:block fixed top-1/4 left-0 h-96 w-56 border-yellow-200 border rounded-r-2xl p-4">
        <div className="flex flex-col items-center space-y-4 ">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={activeTab === item.href}
              loading={loading}
              onClick={() => handleTab(item.href)}
            />
          ))}
        </div>
      </div>
      {/* mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#B7A261] p-2 rounded-xl shadow-lg"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>
      {/* mobile navbar */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white dark:bg-black z-40 flex flex-col items-center justify-center space-y-6 px-4">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={activeTab === item.href}
              loading={loading}
              onClick={() => handleTab(item.href)}
            />
          ))}
        </div>
      )}
      {/* loading spinner */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-black flex items-center justify-center z-50">
          {dark === "dark" ? (
            <img src="beandark.gif" alt="loading" className="w-50 h-50" />
          ) : (
            <img src="bean.gif" alt="loading" className="w-50 h-50" />
          )}
        </div>
      )}
    </motion.div>
  );
};

const NavItem = ({ icon, label, href, isActive, loading, onClick }) => (
  <Link
    to={href}
    onClick={(e) => {
      e.preventDefault();
       if (!loading) onClick();
    }}
    className={`w-full flex justify-center items-center p-3 rounded-xl text-md font-semibold transition
      ${
        isActive
          ? "bg-[#B7A261] text-white dark:text-black"
          : "bg-[#FEF6DD] text-black dark:bg-[#3B3729] dark:text-white hover:bg-[#B7A261] hover:text-white dark:hover:text-black"
      }`}
  >
    {icon}
    <span>{label}</span>
  </Link>
);