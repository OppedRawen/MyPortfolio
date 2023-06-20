import React from "react";
import { AiFillGithub,AiFillLinkedin,AiOutlineMail} from "react-icons/ai"
const About = () => {


    return(
   
        <div id="about"className=' flex flex-col justify-center p-10 '>

        <div className="max-w-screen-lg mx-auto">
        <h3 className="text-[#54d5bb]">Hi, my name is</h3>    
        <h1 className=' text-6xl py-2 text-[#cacaca] font-medium'>David Yu</h1>
        <h3 className=' text-4xl py-2 text-[#8892b0]'>Full Stack Developer</h3>
        {/* <img className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-5 overflow-hidden" src="1682471997680.jpg" alt="profileImage"></img> */}
        <p className='text-lg py-5 leading-8 text-[#cacaca]'>
I am a full stack software engineer with a passion for technologies. I love to build and design accessible web applications. 
</p>
      </div>
      <div className=" text-5xl flex justify-center gap-16 py-3 pb-8 text-[#cacaca]">
        <a href="https://github.com/OppedRawen"><AiFillGithub /></a>
        
        <a href='https://www.linkedin.com/in/dawei-yu-578138227/'><AiFillLinkedin /></a>
        <AiOutlineMail />
        </div>
      </div>
     
    )
};

export default About;