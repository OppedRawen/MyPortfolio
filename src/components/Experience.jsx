import React from "react";

const Experience = () => {
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
      ];
    return(
        <section id="experience" className="max-w-screen-lg m-auto md:pl-20 px-8 py-24 sm:py-32">
        <h2 className="text-3xl py-2 text-gray-500 font-medium text-center">Experience</h2>
        {experience.map((data)=>(
          <ol>
            <li>

            <p className=" flex flex-col md:flex-row relative border-l border-stone-300">
              <span className="inline-blox py-1 px-2 mr-4 font-medium text-white bg-gray-600 rounded-md">{data.duration}</span>
              <span className="mr-1 text-base md:text-lg font-medium text-slate-400">{data.company}</span>
              <p className="text-[#cacaca]">{data.title}</p>
              </p>
              <p className="my-2 font-normal text-[#cacaca]">
                {data.description()}
              </p>
            </li>
          </ol>
         
          
          
         
        ))}
      </section>
    );
};

export default Experience;