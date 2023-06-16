import React from "react";

const Navbar = () => {

    return(
        <nav className=' py-10 mb-12 flex justify-between text-[#cacaca]'>
        <h1 className=' text-xl font-burtons'>Portfolio</h1>
        <ul className=' flex items-center'>
            <li className=' ml-8 mr-8'><a href="#about">About Me</a></li>
            <li className=' ml-8 mr-8'><a href="#projects">Projects</a></li>
            <li className=' ml-8 mr-8'><a href="#">Contact</a></li>
           
            <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a></li>
          </ul>
          </nav>
    );
};

export default Navbar;