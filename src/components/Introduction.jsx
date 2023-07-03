import React from "react";

const Introduction = () => {
return(
<div id="about" className="flex justify-center min-h-screen items-center">
  <div className="container mx-auto max-w-screen-lg">
    <div className="flex flex-col md:flex-row justify-center">
      
      <div className="md:w-2/3 mx-6">
        <h2 className=" text-gray-400 font-bold text-2xl">About Me</h2>
   
        <p className="text-[#cacaca] mt-4 text-[16px] leading-6">
          Hello! My name is David and I am a passionate programmer who enjoys creating live applications. My coding journey began in high school when I stumbled upon a game development club. That's when I realized that games such as Doodle Jump and Flappy Bird, which I played on my phone, can be created by anyone with a computer. During which, I dove into the complexities of programming 2D games in Java, grasping concepts like motion physics. This discovery motivated me to pursue a major in computer science to delve deeper into the world of programming.
       
        </p>
        <p className="text-[#cacaca]  mt-4 mb-8 text-[16px] leading-6">Seeking to refine and further expand my skills, I also enrolled into a full stack coding bootcamp. This intensive program enhanced my understanding of web development and allowed me to master advanced framworks and tools, including React.js in the front-end and Node.js for back-end services. I also learned to efficiently manage application assets and modules using Webpack, These key skills now enable me to develop complex, performant, and user-centric web applications, such as an eCommerce platform and social media applcation.</p>
        <p className="text-[#cacaca]  mt-4 mb-8 text-[16px] leading-6">Beyond coding, I am also passionate about skateboarding, movies, and video games. One of my favorite things to do before a coding session is to go to a skatepark to clear my mind and get some exercise.</p>
      </div>
      <div className="md:w-1/3 flex justify-center md:justify-start mt-5">
        <img src="profile.jpg" className="w-60 h-60 mt-10 rounded-md" alt="profileImage"/>
      </div>
    </div>
  </div>
</div>
)
};

export default Introduction;