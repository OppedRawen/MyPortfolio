import React from "react";

const Introduction = () => {
return(
<div className="flex justify-center min-h-screen items-center">
  <div className="container mx-auto max-w-screen-lg">
    <div className="flex flex-col md:flex-row justify-center">
      <div className="md:w-1/3 flex justify-center md:justify-start">
        <img src="profile.jpg" className="w-60 h-60 rounded-full" alt="profileImage"/>
      </div>
      <div className="md:w-2/3 mx-6">
        <h2 className="text-[#8892b0] font-bold text-2xl">About Me</h2>
        <p className="text-[#cacaca] text-lg mt-4">
          Hello! My name is David and I enjoy creating things live on the internet. My interest in coding began back in when I was introduced into a game development club where I discovered that  games such as Doodle Jump and Flappy Birds that I am very familiar with can be made with knowledge in programming. This inspired me to major in computer science at Irvine Valley College, where I expanded my knowledge in coding languages, applied maths, and algorithm.
        </p>
        <p className="text-[#cacaca] mt-4 mb-10">When I'm not on my computer, I'm most likely enjoying my time at a skatepark</p>
      </div>
    </div>
  </div>
</div>
)
};

export default Introduction;