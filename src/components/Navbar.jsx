import React from "react";

const Navbar = () => {

    return(
        <nav className=' py-10 mb-12 flex justify-between text-[#cacaca]'>
    <h1 className=' text-lg font-burtons'>Portfolio</h1>
            <div className="flex justify-end text-sm">
           
        <ul className=' flex items-center'>
            <li className=' ml-6 mr-6'><a href="#about">About Me</a></li>
            <li className=' ml-6 mr-6'><a href="#about">Experience</a></li>
            <li className=' ml-6 mr-6'><a href="#projects">Projects</a></li>
            <li className=' ml-6 mr-6'><a href="#contact">Contact</a></li>
           
            <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8' href='https://drive.google.com/file/d/1NQh2d7mnP6IkLeX13L5u4RGLhtw_9ClD/view?usp=drive_link'>Resume</a></li>
          </ul>
            </div>
       
          </nav>
    );
};

export default Navbar;