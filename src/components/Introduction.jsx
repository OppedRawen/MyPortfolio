import React from "react";

const Introduction = () => {
return(
<div id="about" className="flex justify-center min-h-screen items-center">
  <div className="container mx-auto max-w-screen-lg">
    <div className="flex flex-col md:flex-row justify-center">
      
      <div className="md:w-2/3 mx-6">
        <h2 className=" text-gray-400 font-bold text-2xl">About Me</h2>
        <p className="text-[#cacaca] mt-4">
          Hello! My name is David and I enjoy creating applications live on the internet. My coding journey began in high school when I joined a game development club, having no prior knowledge about what programming is. That's when I realized that games such as Doodle Jump and Flappy Bird, which I played on my phone, can be created by anyone with a computer. This discovery motivated me to pursue a major in computer science to delve deeper into the world of programming.
       
        </p>
        <p className="text-[#cacaca]  mt-4 mb-8">To further enhance my skills and knowledge, I also enrolled into a full stack coding bootcamp. I believe that this experience will provide me with a well-rounded understanding of web development, where I can better apply my skills to create more complex applications.</p>
        <p className="text-[#cacaca]  mt-4 mb-8">Beyond coding, I am also passionate about skateboarding, movies, and video games. One of my favorite things to do before a coding session is to go to a skatepark to clear my mind and get some exercise.</p>
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