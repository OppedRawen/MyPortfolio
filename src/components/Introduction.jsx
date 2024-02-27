import React from "react";
import {motion} from "framer-motion";
const Introduction = () => {
return(
<div id="about" className="flex justify-center min-h-screen items-center">
  <div className="container mx-auto max-w-screen-lg">
    <div className="flex flex-col md:flex-row justify-center">
      
      <div className="md:w-2/3 mx-6">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
       className=" text-gray-400 font-bold text-2xl">About Me</motion.h2>
   
   <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.75 }}
        viewport={{ once: true }}
       className="text-[#cacaca] mt-4 text-[16px] leading-6">
        I was first exposed to programming because of my interest in video games. Back when I was still a sophomore in highschool, I joined a game development club. That's when I realized that games such as CSGO and League of Legends, which I played often, can be created with a good understanding of programming. During my time in the club, I dove into the complexities of coding <span className="font-bold text-[#54d5bb]">2D games in Java</span>, grasping concepts like <span className="font-bold text-[#54d5bb]">motion physics</span> and <span className="font-bold text-[#54d5bb]">geometry</span>.
       
        </motion.p>
        <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.75 }}
        viewport={{ once: true }}
       className="text-[#cacaca]  mt-4 mb-8 text-[16px] leading-6">During my second year of college, I also enrolled into a full stack coding bootcamp. This  program enhanced my understanding of web development and allowed me to master advanced framworks and tools, including <span className="font-bold text-[#54d5bb]">React.js</span> in the front-end and <span className="font-bold text-[#54d5bb]">Node.js</span> for back-end services. I also learned to efficiently manage application assets and modules using <span className="font-bold text-[#54d5bb]">Webpack</span>, These key skills now enable me to develop complex, performant, and user-centric web applications, such as an eCommerce platform and social media applcation.
       </motion.p>
       <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.75 }}
        viewport={{ once: true }}
       className="text-[#cacaca]  mt-4 mb-8 text-[16px] leading-6">Beyond coding, I am also an active skateboarder, and I enjoy cooking, and playing video games. I recently just got into baking as well, so experimenting with new recipes on TikTok has became my favorite past time.
       </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.75 }}
        viewport={{ once: true }}
      className=" md:w-1/3 flex justify-center md:justify-start mt-5">
        <img src="profile.jpg" className="w-60 h-60 mt-10 rounded-lg shadow-lg opacity-70 hover:opacity-100 transition-all ease-in duration-300" alt="profileImage"/>
      </motion.div>
    </div>
  </div>
</div>
)
};

export default Introduction;