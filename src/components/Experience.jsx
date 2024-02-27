import React from "react";
import {IoCaretForwardOutline} from "react-icons/io5"
import {motion} from "framer-motion";
const Experience = () => {
    const experience =[
      {
        year:"2023",
        title: "Math Tutor",
        company: "IVC Computer Science Club",
        duration: "September 2023 - Present",
        description: ()=>(
          <ul>
            <li className="mt-2"><span className=" inline-block text-gray-500"><IoCaretForwardOutline/></span>Tutored high school students in mathematics, covering Geometry, Algebra, and Calculus, adapting teaching methods to individual learning styles</li>
            <li className="mt-2"><span className=" inline-block text-gray-500"><IoCaretForwardOutline/></span>Achieved significant improvements in students’ grades, with increases up to 30% in test scores.</li>
            <li className="mt-2"> <span className=" inline-block text-gray-500"><IoCaretForwardOutline/></span>Developed and implemented personalized lesson plans and practice tests to track progress and address areas of difficulty </li>
       
          </ul>
        )
      },
        {
          year:"2023",
          title: "CS Club Project Lead",
          company: "IVC Computer Science Club",
          duration: "January 2023 - Present",
          description: ()=>(
            <ul>
              <li className="mt-2"><span className=" inline-block text-gray-500"><IoCaretForwardOutline/></span>Coordinated 2 full stack development projects, gaining hands-on experience in project management and team collaboration</li>
              <li className="mt-2"> <span className=" inline-block text-gray-500"><IoCaretForwardOutline/></span>Organized competitive programming events alongside a team of 5 into preparing for challenges like Codeforces competition </li>
              <li className="mt-2"><span className=" inline-block text-gray-500"><IoCaretForwardOutline/></span> Conducted and led coding workshops focused on web development, effectively teaching web development concepts to club members</li>
            </ul>
          )
        },
        {
          year:"2023",
          title: "Line Cook",
          company: "Din Tai Fung",
          duration: "Feburary 2023 - Present",
          description: ()=>(
            <ul>
              <li className="mt-2"><span className=" inline-block text-gray-500"><IoCaretForwardOutline/></span> Collaborated with team members to optimize kitchen workflow at one of the busiest location of Din Tai Fung, serving over 1800 customers a day.</li>
              <li className="mt-2"> <span className=" inline-block text-gray-500"><IoCaretForwardOutline/></span>Maintained high standards of quality and consistency for food and adhering to strict guidelines
    Managed multiple tasks and priorities simultaneously to ensure timely completion of orders </li>
             
            </ul>
          )
        },
        {
          year:"2021",
          title: "Assistant Manager",
          company: "Champion's Curry",
          duration: "June 2021 - January 2023",
          description: ()=>(
           
            <ul>
                 
              <li className="mt-2"><span className=" inline-block text-gray-500"><IoCaretForwardOutline/></span>Supervised and trained team members, ensuring high standards of quality and services
    Managed inventory and ordered supplies to optimize stock levels and minimize waste
    Event planning and coordination with general managers for food promotionsSupervised</li>
           
             
            </ul>
          )
        },
      ];
    return(
        <section id="experience" className="max-w-screen-lg m-auto md:pl-20 px-8 py-24 sm:py-32">
        <motion.h2 initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }} className="text-3xl py-2 text-gray-500 font-medium text-center">Experience</motion.h2>
        {experience.map((data)=>(
          <motion.ol className="flex flex-col md:flex-row relative border-l border-stone-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}>
            <li className="mb-10 ml-4"
        
          initial="hidden"
          whileInView="animate"
          viewport={{ once: true }}>

            <div className="absolute mt-1.5 -left-1.5 w-3 h-3 bg-stone-300 rounded-full">
              
            </div>
            <p className="flex flex-wrap flex-row justify-start items-center text-xs md:text-sm">
              <span className="inline-blox py-1 px-2 mr-4 font-medium text-white bg-gray-600 rounded-md">{data.year}</span>
              <span className="mr-1 text-base md:text-lg font-medium text-slate-400">{data.title} </span>
              <span className="text-[#cacaca] ml-1 font-medium text-lg"> @ {data.company}</span>
            </p>
            <p className="mt-3 text-xs sm:text-sm font-normal text-stone-400">
            {data.duration}
            </p>
            <p className="my-2 font-normal text-[#cacaca]">
                {data.description()}
            </p>

            {/* <div className=" flex flex-col md:flex-row relative border-l border-stone-300">
            
              <span className="inline-blox py-1 px-2 mr-4 font-medium text-white bg-gray-600 rounded-md">{data.duration}</span>
              <span className="mr-1 text-base md:text-lg font-medium text-slate-400">{data.company}</span>
              <p className="text-[#cacaca] ml-1 font-medium text-lg">{data.title}</p>
              </div>
              <div className="my-2 font-normal text-[#cacaca]">
                {data.description()}
              </div> */}

            </li>
          </motion.ol>
         
          
          
         
        ))}
      </section>
    );
};

export default Experience;