import { AiFillGithub,AiFillLinkedin,AiOutlineMail} from "react-icons/ai"
import { useState } from "react";
import {motion} from 'framer-motion';
// import profileImage from '../public/1682471997680.jpg';
import './App.css';

import Skills from './skills';
import Footer from "./footer";
import {Contact,Navbar,Experience,Projects} from './components';

function App() {

  return (
    <div className=" bg-[#1d1d20] px-10">
      <header className=" min-h-screen">
        <Navbar />

        <div id="about"className=' text-center p-10'>
        <h2 className=' text-5xl py-2 text-[#cacaca] font-medium'>David Yu</h2>
        <h3 className=' text-2xl py-2 text-[#cacaca]'>Full Stack Developer</h3>
        <img className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-5 overflow-hidden" src="1682471997680.jpg" alt="profileImage"></img>
        <p className='text-md py-5 leading-8 text-[#cacaca]'>
I am an undergraduate student in Computer Science and have a particular interest in the collaborative nature of creating innovative projects, as well as expanding my understanding of diverse algorithms. Concurrently, I am enriching my skill set through enrollment in an intensive coding bootcamp program, with a primary focus on full-stack development.

While my professional passions lie in the realm of technology and programming, my personal interests provide a balanced contrast. In my leisure time, I engage in activities such as skateboarding and baking, which offer a refreshing change of pace from my technical pursuits.</p>
      </div>
      <div className=" text-5xl flex justify-center gap-16 py-3 pb-8 text-[#cacaca]">
        <a href="https://github.com/OppedRawen"><AiFillGithub /></a>
        
        <a href='https://www.linkedin.com/in/dawei-yu-578138227/'><AiFillLinkedin /></a>
        <AiOutlineMail />
      </div>
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
