import { AiFillGithub,AiFillLinkedin,AiOutlineMail} from "react-icons/ai"
import { useState } from "react";
import {motion} from 'framer-motion';
// import profileImage from '../public/1682471997680.jpg';
import './App.css';

import Skills from './skills';
import Footer from "./footer";
import {Contact,Navbar,Experience,Projects,About} from './components';

function App() {

  return (
    <div className=" bg-[#1d1d20] px-10">
      <header className=" min-h-screen">
        <Navbar />

        <About />
      </header>

      <Skills />

     <Experience />

      
      <Projects />
        <Contact />
      <Footer />
    </div>
  );
}

export default App;
