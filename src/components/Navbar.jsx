import React from "react";
import {motion} from 'framer-motion';
import {HiOutlineDesktopComputer} from 'react-icons/hi';

const Navbar = () => {

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

    return(

  <nav className="sticky py-8 mb-12 flex justify-between text-[#cacaca]">
    <div className="flex justify-between h-full w-full text-sm px-6">
      {/* <h1 className="text-lg font-burtons font-semibold">Portfolio</h1> */}
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 3, delay: 1.75}}
      viewport={{once:true}}
      >
        <a href="/">
        <HiOutlineDesktopComputer className="text-3xl font-bold w-10 h-10"/>  
        </a>
       
      </motion.div>
    
      
        <div>
        <ul className="hidden md:flex md:items-center list-none">
        <motion.li initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 2 }} viewport={{ once: true }} className="mr-6 font-medium hover:text-emerald-400 cursor-pointer">
            <motion.a
              href="#about"
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleLinkClick(e, "about")}
            
            >
              About Me
            </motion.a>
          </motion.li>
          <motion.li initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 2.25 }} viewport={{ once: true }} className="mr-6 font-medium hover:text-emerald-400 cursor-pointer">
            <motion.a
              href="#experience"
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleLinkClick(e, "experience")}
            >
              Experience
            </motion.a>
          </motion.li>
          <motion.li initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 2.5 }} viewport={{ once: true }} className="mr-6 font-medium hover:text-emerald-400 cursor-pointer">
            <motion.a
              href="#projects"
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleLinkClick(e, "projects")}
            >
              Projects
            </motion.a>
          </motion.li>
          <motion.li initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 2.75 }} viewport={{ once: true }} className="mr-6 font-medium hover:text-emerald-400 cursor-pointer">
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleLinkClick(e, "contact")}
            >
              Contact
            </motion.a>
          </motion.li>
          <motion.li initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 3 }} viewport={{ once: true }} className="mr-6 font-medium hover:text-emerald-400 cursor-pointer">
          <a
              
              href="https://drive.google.com/file/d/1gQf3OObUH9TczDxI3mrK6nMgi3IrJLPL/view?usp=sharing"
              target="_blank" // Add target="_blank" to open the link in a new tab
              rel="noopener noreferrer" // Add rel="noopener noreferrer" for security reasons
            >
              Resume
            </a>
          </motion.li>
        </ul>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;