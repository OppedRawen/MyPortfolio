import React from "react";
import {motion} from "framer-motion";

const About = () => {

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
    return(
   
        <div className=' flex flex-col justify-center p-10 '>

        <div className="max-w-screen-md mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        className="text-[#54d5bb]">Hi, my name is</motion.h3>    
         <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          viewport={{ once: true }}
         className=' text-6xl py-2 text-[#cacaca] font-medium'>David Yu</motion.h1>
         <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
         className=' text-4xl py-2 text-[#8892b0]'>Full Stack Developer</motion.h3>
        {/* <img className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-5 overflow-hidden" src="1682471997680.jpg" alt="profileImage"></img> */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.25 }}
          viewport={{ once: true }}
         className='text-lg py-5 leading-8 text-[#cacaca]'>
I am a full stack software engineer, passionate about problem solving and enhancing user interface. I love to learn about different algorithms and the latest frameworks. Also an active skateboarder and video game enthusiast. 
</motion.p>
      </div>
      <div className=" text-5xl flex justify-center gap-16 py-3 pb-8 ">
        {/* <a href="https://github.com/OppedRawen"><AiFillGithub /></a>
        

        
        <a href='https://www.linkedin.com/in/dawei-yu-578138227/'><AiFillLinkedin /></a>
        <AiOutlineMail /> */}
        <motion.a
  href="#projects"
  className=" text-3xl inline-block rounded-lg px-4 py-2 text-teal-500 border border-teal-500 bg-transparent"
  initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          viewport={{ once: true }}
  onClick={(e) => handleLinkClick(e, "projects")}
>
  <span className="">Projects</span>
</motion.a>
<motion.a
  href="#contact"
  className=" text-3xl inline-block px-4 py-2 rounded-lg text-teal-500 border border-teal-500 bg-transparent"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1.5 }}
  viewport={{ once: true }}
  onClick={(e) => handleLinkClick(e, "contact")}
>
  <span className="">Contact Me!</span>
</motion.a>
        </div>
      </div>
     
    )
};

export default About;