import { AiFillGithub,AiFillLinkedin,AiOutlineMail} from "react-icons/ai"
import { useState } from "react";
import {motion} from 'framer-motion';
// import profileImage from '../public/1682471997680.jpg';
import './App.css';

import Skills from './skills';
import Footer from "./footer";
import {Contact} from './components';
function App() {
  const projects = [
    {
      title: "QuickCart Ecommerce",
      thumbnail: 'Ecommerce.png',
      description: 'A full stack ecommerce application built with an MVC design pattern and Stripe for payment integration ',
      technology: 'MySQL/Javascript/Handlebars/Tailwind/Express.js',
      github: 'https://github.com/OppedRawen/Marketplace-application'
    },
    {
      title: "MovieSearcher",
      thumbnail: 'Screenshot_20230213_072015.png',
      description: 'A frontend application that display movie reviews, trailers, and articles related using OMDB, youtube, and New York Times API ',
      technology: 'Javascript/html/css/Jquery/Bulma',
      github: 'https://github.com/OppedRawen/MovieSearch'
    },{
      title: "Image Generator(Coming Up)",
      thumbnail: 'be195c34-7f43-4f22-896b-dac5a96e8dab.png',
      description: 'A MERN stack application that utilize AI integration to generate Image ',
      technology: 'MySQL/Javascript/Handlebars/Tailwind/Express.js',
      github: 'https://github.com/OppedRawen/ImageGenerator'
    },
    {
      title: "Urspace",
      thumbnail: 'https://github.com/OppedRawen/urspace/raw/main/client/src/assets/screenshot.png',
      description: 'A MERN stack application that uses RapidAPI to load popular music as well as charting system ',
      technology: 'ReactJS/MongoDB/Tailwind/ExpressJS/',
      github: 'https://github.com/OppedRawen/urspace'
    }
  ];
  const experience =[
    {
      title: "Web Development Project Lead",
      company: "IVC Computer Science Club",
      duration: "March 2023- Present",
      description: ()=>(
        <ul>
          <li> Coordinated a diverse range of web development projects, assisting club members in navigating complexities and successfully building their own web applications.</li>
          <li>Organized competitive programming events, working effectively under pressure to deliver high-quality events that enhanced members' coding competencies and fostered a collaborative club culture. </li>
          <li> Managed the club's budget with a keen eye for optimization, ensuring the efficient allocation of resources to meet strategic objectives and support club activities.</li>
        </ul>
      )
    },
    {
      title: "Line Cook",
      company: "Din Tai Fung",
      duration: "Feburary 2023- Present",
      description: ()=>(
        <ul>
          <li> Collaborated with team members to optimize kitchen workflow at one of the busiest location of Din Tai Fung, serving over 1800 customers a day.</li>
          <li>Maintained high standards of quality and consistency for food and adhering to strict guidelines
Managed multiple tasks and priorities simultaneously to ensure timely completion of orders </li>
         
        </ul>
      )
    },
    {
      title: "Assistant Manager",
      company: "Champion's Curry",
      duration: "June 2021- January 2023",
      description: ()=>(
        <ul>
          <li>Supervised and trained team members, ensuring high standards of quality and services
Managed inventory and ordered supplies to optimize stock levels and minimize waste
Event planning and coordination with general managers for food promotionsSupervised</li>
       
         
        </ul>
      )
    },
  ]
  const animateProject = {
    hidden: { opacity: 0, y: 50 },
    animate: {
        opacity: 1, 
        y: 0,
        transition: {
            delay: 0.1,
            duration: 0.1,
            type: 'tween',
            delayChildren: 0.2,
            staggerChildren: 0.2
        }
    }
  };
  const animateProjectItem = {
    hidden: { opacity: 0, y: 50 },
    animate: { 
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.2,
            type: 'tween'
        }
    }
  };
  return (
    <div className=" bg-slate-50 px-10">
      <header className=" min-h-screen">
        <nav className=' py-10 mb-12 flex justify-between'>
      <h1 className=' text-xl font-burtons'>Portfolio</h1>
      <ul className=' flex items-center'>
          <li className=' ml-8 mr-8'><a href="#about">About Me</a></li>
          <li className=' ml-8 mr-8'><a href="#projects">Projects</a></li>
          <li className=' ml-8 mr-8'><a href="#">Contact</a></li>
         
          <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a></li>
        </ul>
        </nav>

        <div id="about"className=' text-center p-10'>
        <h2 className=' text-5xl py-2 text-teal-700 font-medium'>David Yu</h2>
        <h3 className=' text-2xl py-2'>Full Stack Developer</h3>
        <img className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-5 overflow-hidden" src="1682471997680.jpg" alt="profileImage"></img>
        <p className='text-md py-5 leading-8 text-gray-800'>
I am an undergraduate student in Computer Science and have a particular interest in the collaborative nature of creating innovative projects, as well as expanding my understanding of diverse algorithms. Concurrently, I am enriching my skill set through enrollment in an intensive coding bootcamp program, with a primary focus on full-stack development.

While my professional passions lie in the realm of technology and programming, my personal interests provide a balanced contrast. In my leisure time, I engage in activities such as skateboarding and baking, which offer a refreshing change of pace from my technical pursuits.</p>
      </div>
      <div className=" text-5xl flex justify-center gap-16 py-3 pb-8 text-gray-600">
        <a href="https://github.com/OppedRawen"><AiFillGithub /></a>
        
        <a href='https://www.linkedin.com/in/dawei-yu-578138227/'><AiFillLinkedin /></a>
        <AiOutlineMail />
      </div>
      </header>

      <Skills />

      <section id="experience" className="max-w-screen-lg m-auto md:pl-20 px-8 py-24 sm:py-32">
        <h2 className="text-3xl py-2 text-gray-500 font-medium text-center">Experience</h2>
        {experience.map((data)=>(
          <ol>
            <li>

            <p className=" flex flex-col md:flex-row relative border-l border-stone-300">
              <span className="inline-blox py-1 px-2 mr-4 font-medium text-white bg-gray-600 rounded-md">{data.duration}</span>
              <span className="mr-1 text-base md:text-lg font-medium text-slate-400">{data.company}</span>
              <p>{data.title}</p>
              </p>
              <p className="my-2 font-normal">
                {data.description()}
              </p>
            </li>
          </ol>
         
          
          
         
        ))}
      </section>

      <section id="projects" className=" text-3xl py-2 text-gray-500 font-medium text-center">
        <h2>Projects</h2>
      </section>
      <section className=" max-w-screen-xl m-auto md:pl-20 px-8 py-24 sm:32">
<motion.div className="w-full grid md:grid-cols-2 gap-8" variants={animateProject} initial="hidden" whileInView="animate" viewport={{once:true}}>
      {projects.map((project)=>(
        <motion.div key={project} className=" relative group" variants={animateProjectItem} viewport={{once:true}}>

          <div className=" w-full h-max aspect-auto overflow-hidden rounded-lg opacity-90 hover:opacity-100 transition-all shadow-lg dark:shadow-gray-900 cursor-pointer">
            <img src={project.thumbnail} alt={project.title} className="w-full"></img>

            <div className=" flex rounded-lg justify-center items-center transition-all duration-700 opacity-0 bg-gradient-to-t from-[#222222] via-slate-600 to-opacity-30 group-hover:opacity-90 absolute top-0 left-0 h-full w-full">
              <div className="absolute top left-0 w-full h-full flex justify-center items-end opacity-0 hover:opacity-100">
                <div className="flex-row text-center p-6">
                  <h3 className="mb-2 font-semibold text-sky-200 text-2xl uppercase drop-shadow-md tracking-tighter">{project.title}</h3>
                  <p className="text-white text-sm tracking-tight leading-snug drop-shadow-md">
                    {project.description}
                  </p>
                  <p className="text-sky-200 text-xs py-2">
                    {project.technology}
                  </p>
                  <div className="text-center text-5xl text-gray-600">
                    <a href={project.github} target="_blank" className="">
                    <AiFillGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          
          </div>

        </motion.div>
      ))}
      </motion.div>
      </section>
      
        <Contact />
      <Footer />
    </div>
  );
}

export default App;
