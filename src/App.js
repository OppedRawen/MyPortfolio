import { AiFillGithub,AiFillLinkedin,AiOutlineMail} from "react-icons/ai"
import { useState } from "react";
import {motion} from 'framer-motion';
// import profileImage from '../public/1682471997680.jpg';
import './App.css';

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
      title: "ImageGenerator(Coming Up)",
      thumbnail: 'be195c34-7f43-4f22-896b-dac5a96e8dab.png',
      description: 'A MERN stack application that utilize AI integration to generate Image ',
      technology: 'MySQL/Javascript/Handlebars/Tailwind/Express.js',
      github: '#'
    }
  ];
  const animateProject = {
    hidden: { opacity: 0, y: 50 },
    animate: {
        opacity: 1, 
        y: 0,
        transition: {
            delay: 0.75,
            duration: 0.4,
            type: 'tween',
            delayChildren: 0.5,
            staggerChildren: 0.4
        }
    }
  };
  const animateProjectItem = {
    hidden: { opacity: 0, y: 50 },
    animate: { 
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            type: 'tween'
        }
    }
  };
  return (
    <div className=" bg-white px-10">
      <header className=" min-h-screen">
        <nav className=' py-10 mb-12 flex justify-between'>
      <h1 className=' text-xl font-burtons'>Portfolio</h1>
      <ul className=' flex items-center'>
          <li className=' ml-8 mr-8'>About Me</li>
          <li className=' ml-8 mr-8'>Projects</li>
          <li className=' ml-8 mr-8'>Contact</li>
         
          <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a></li>
        </ul>
        </nav>

        <div className=' text-center p-10'>
        <h2 className=' text-5xl py-2 text-teal-600 font-medium'>David Yu</h2>
        <img className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden" src="1682471997680.jpg" alt="profileImage"></img>
        <h3 className=' text-2xl py-2'>Full stack Developer</h3>
        <p className='text-md py-5 leading-8 text-gray-800'>hello im a full stack developer</p>
      </div>
      <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillGithub />
        <AiFillLinkedin />
        <AiOutlineMail />
      </div>
      </header>

      <section id="projects" className=" text-3xl py-2 text-gray-500 font-medium text-center">
        <h2>Projects</h2>
      </section>
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
                  <div className="text-center">
                    <a href={project.url} target="_blank">
                      
                    </a>
                  </div>
                </div>
              </div>
            </div>
          
          </div>

        </motion.div>
      ))}
      </motion.div>
      
    </div>
  );
}

export default App;
