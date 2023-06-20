import React from "react";
import { AiFillGithub,AiFillLinkedin,AiOutlineMail} from "react-icons/ai"

const Sidebar=()=>{

    return(
        <div className="fixed top-0 left-0 h-screen w-20 flex flex-col justify-center items-center bg-[#1a1a1a] text-[#cacaca]">

            <a href="https://github.com/OppedRawen"><AiFillGithub /></a>
            <a href='https://www.linkedin.com/in/dawei-yu-578138227/'><AiFillLinkedin /></a>
            <AiOutlineMail />
        </div>
    )
};

export default Sidebar;