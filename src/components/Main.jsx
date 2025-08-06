import React,{useEffect, useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import { PLUGIN_FULLSCREEN,PLUGIN_ZOOM } from "yet-another-react-lightbox";
import { Instagram, Github, Calendar, Mail, Phone, MapPin, Figma, Play, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { useDarkMode } from "./darkmode/useDarkMode";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { Navbar } from "./nav/Navbar";
export default function ProfileCard() {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [open,setOpen] = useState(false);


  useEffect(() => {
    document.title = "Trang Chủ | Trường Nguyễn";
  }, []);
  return (

    <motion.div 
      initial={{ y: 20 }}
  animate={{ y: 0 }}
  exit={{ y: -10 }}
  transition={{
    duration: 1,
    ease: [0.25, 0.7, 0.25, 1]
  }}>
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:scale-105 transition"
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  <div className="min-h-screen dark:bg-black flex items-center justify-center bg-white p-4">
    
                
      <div className="dark:border-[#4B3D10] w-full max-w-xs md:max-w-md rounded-2xl shadow-2xl border border-yellow-200">
        <div className="relative flex flex-col items-center p-4 pt-20">
          <motion.img
            src="/Trường.jpg" 
            alt="avatar"
            onClick={() => setOpen(true)}
            className="cursor-pointer dark:border-[#4B3D10] shadow-2xl absolute left-1/2 -translate-x-1/2 -top-20 w-48 h-40 rounded-xl object-cover border-4 border-yellow-200 mb-4 hover:scale-105 transition"
          />
          <h2 className="text-xl font-bold text-center dark:text-[#CCC0C0]">NGUYEN NHAT TRUONG</h2>
          <p className="text-sm text-center bg-yellow-100 text-red-900 px-4 py-1 rounded mt-1 dark:bg-[#4B3D10] dark:text-[#fff]">BACKEND DEV</p>

          <div className="flex gap-3 mt-4 ">
            <span className="group p-1 border-2 rounded border-pink-300 hover:bg-pink-400 cursor-pointer transition">
              <a href="https://instagram.com/truong.02.03" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-8 h-8 text-pink-400 hover:scale-110 transition group-hover:text-white" />
              </a>
            </span>
            <span className="group p-1 border-2 rounded border-blue-500 hover:bg-blue-500 cursor-pointer transition">
            <a href="https://www.facebook.com/me.truong.351" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-8 h-8 text-blue-500 hover:scale-110 transition group-hover:text-white" />
            </a>
            </span>
            <span className="group p-1 border-2 rounded border-black hover:bg-black cursor-pointer transition dark:border-white dark:hover:bg-white ">
            <a href="https://github.com/Truongphamdev" target="_blank" rel="noopener noreferrer">
              <Github className="w-8 h-8 text-black hover:scale-110 transition group-hover:text-white dark:text-white group-hover:dark:text-black transition" />
            </a>
            </span>
            <span className="group p-1 border-2 rounded border-pink-500 hover:bg-pink-500 cursor-pointer transition">
              <a href="https://www.figma.com/design/IFYC1IqQH8aY0H4A5ZZ6Tw/Untitled?t=6vjlSqw1lozvnpr8-0" target="_blank" rel="noopener noreferrer">
                <Figma className="w-8 h-8 text-pink-600 hover:scale-110 transition group-hover:text-white" />
              </a>
            </span>
          </div>

          <div className="dark:bg-[#3B3729] bg-[#F9F6EA] rounded-xl p-4 mt-4 w-full space-y-3 ">
            <div className="flex justify-center items-center gap-3 text-sm md:text-lg border-b pb-2 hover:scale-105 transition cursor-pointer">
              <Phone className="dark:bg-black dark:text-white w-8 h-8 p-2 bg-[#D9D9D9] text-gray-900 rounded" />
              <a href="tel:+840365908714" className="dark:text-white">0365908714</a>
            </div>
            <div className="flex justify-center items-center gap-3 text-sm md:text-lg border-b pb-2 hover:scale-105 transition cursor-pointer">
              <Mail className="dark:bg-black dark:text-white w-8 h-8 p-2 bg-[#D9D9D9] text-gray-900 rounded" />
              <a href="mailto:truongnguyen01653@gmail.com" className="dark:text-white">truongnguyen01653@gmail.com</a>
            </div>
            <div className="flex justify-center items-center gap-3 text-sm md:text-lg border-b pb-2 hover:scale-105 transition cursor-pointer">
              <MapPin className="dark:bg-black dark:text-white w-8 h-8 p-2 bg-[#D9D9D9] text-gray-900 rounded" />
              <a href="https://maps.app.goo.gl/YoeExux3EX4duGmA9" className="dark:text-white">Fleiku, Gia Lai</a>
            </div>
            <div className="flex justify-center items-center gap-3 text-sm md:text-lg  hover:scale-105 transition cursor-pointer">
              <Calendar className="dark:bg-black dark:text-white w-8 h-8 p-2 bg-[#D9D9D9] text-gray-900 rounded" />
              <span className="dark:text-white">2, March. 2005</span>
            </div>
          </div>

          <motion.button
  whileHover={{ scale: 1.05, color: "#000" }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
  className="dark:bg-[#C2B293] dark:text-[#3B3729] mt-4 w-full bg-yellow-300 text-black rounded-full py-2 font-semibold cursor-pointer"
>
  <a href="/my_cv.pdf" download="cv-truongnguyen.pdf">Download CV</a>
</motion.button>

        </div>
        
      <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={[{ src: "/Trường.jpg" }]}
      plugins={[Fullscreen, Zoom]}
        animation={{ fade: 250 }} 
        carousel={{ finite: true, preload: 0 }}
        controller={{ closeOnBackdropClick: true, closeOnPullDown: true }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null, 
        }}
/>
  </div>
      </div>
    </motion.div>
  );
}
