import React from 'react'
import twitter from "../../public/twitter.png";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import profile2 from "../../public/profile2.jpg";
import linkedin from "../../public/linkedin.png";
import gfg from "../../public/gfg.png";
import leetcode from "../../public/leetcode.png";
import mail from "../../public/mail.png";


function Home() {
  return (
    <>
      {/**parent div is for the web app look */}
       <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 md:my-10">
        {/*Home Page Content*/}
        {/**dividing the home page screen in 2 parts, for intro and photo */}
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mt-8 md:mt-20 order-2 md:order-1 space-y-0 md:space-y-2">
                    <span className="text-sm md:text-xl">Welcome In My Feed</span>
                    <div className="space-y-3">
                    <div className="flex space-x-0 text-lg md:text-3xl">
                        <h1 className="font-bold">Hello, I'm <span className="">Karan Mahato</span> a <ReactTyped className="text-red-700 font-bold"
                                strings={[" Developer", " Programmer", " Coder"]}
                                typeSpeed={50}
                                backSpeed={50}
                                loop={true}
                            />
                        </h1>  
                    </div>
                    <div className="text-justify text-sm md:text-lg space-y-2">
                        <p>With a deep interest in coding and design, 
                            I’m constantly learning and eager to take on challenging projects that 
                            allow me to grow both personally and professionally. Let's connect and build 
                            something great together!
                        </p>
                    </div>
                    </div>
                    {/*Social Media Ions*/}
                    <div className="flex flex-col items-center justify-between space-y-6 md:space-y-12">
                        <div className="mt-10 md:mt-16 space-y-2 md:space-y-3">
                        <h1 className="text-center md:text-xl">Available On</h1>
                        <ul className="flex space-x-3 md:space-x-5 text-9xl md:text-9xl">
                            <a href="https://www.linkedin.com/in/karanmahato19" target="_blank">
                            <li className="hover:scale-125 duration-200 cursor-pointer">
                                <img src={linkedin} className="h-7 w-7 rounded-full" alt="" /></li>
                            </a>
                            <a href="https://leetcode.com/u/karanmahato19/" target="_blank">
                            <li className="hover:scale-125 duration-200 cursor-pointer">
                                <img src={leetcode} className="h-7 w-7 rounded-full" alt="" /></li>
                            </a>
                            <a href="https://www.geeksforgeeks.org/user/karanmahato19/" target="_blank">
                            <li className="hover:scale-125 duration-200 cursor-pointer">
                                <img src={gfg} className="h-7 w-7 rounded-full" alt="" /></li>
                            </a>
                            <a href="mailto:karanmahato7850@gmail.com" target="_blank">
                            <li className="hover:scale-125 duration-200 cursor-pointer">
                                <img src={mail} className="h-7 w-7 rounded-full" alt="" /></li>
                            </a>
                            <a href="https://x.com/karanmahato_19?t=mZyoQQXdYlVAko6mAFJMKQ&s=08" target="_blank">
                            <li className="hover:scale-125 duration-200 cursor-pointer">
                                <img src={twitter} className="h-7 w-7 rounded-full" alt="" />
                            </li>
                            </a>
                        </ul> 
                        </div>
                        <div className="justify-center space-y-3">
                        <h1 className="text-center md:text-xl">Currently Working Skills</h1>
                        <div className="flex justify-center space-x-6 md:space-x-5 text-3xl">
                           <FaReact className="hover:scale-125 duration-200 cursor-pointer rounded-full border-[2px]"/>
                           <SiExpress className="hover:scale-125 duration-200 cursor-pointer rounded-full border-[2px]"/>
                           <SiMongodb className="hover:scale-125 duration-200 cursor-pointer rounded-full border-[2px]"/>
                           <FaNodeJs className="hover:scale-125 duration-200 cursor-pointer rounded-full border-[2px]"/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/3 mt-5 ml-12 mr-12 md:ml-60 md:mt-40 order-1 md:order-2">
                    <div className="flex justify-center"><img src={profile2} className="rounded-full justify-center shadow-xl mx-auto md:mx-5 mb-3 w-60 h-60 md:w-80 md:h-80 object-cover
                    transform transition-transform hover:scale-105 duration-300"/></div>
                    <div className="mt-5 md:ml-0 md:mt-10 flex flex-row md:flex-row text-center justify-center pl-10 md:pl-14 pr-10 space-y-3 md:space-y-0 md:space-x-5">
                        <a href="mailto:karanmahato7850@gmail.com"><button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-xl rounded-full border-[2px] mt-3 md:mt-0 px-5 md:px-4 py-2 cursor-pointer hover:scale-105 duration-200">Contact</button></a>
                        <a href="https://drive.google.com/file/d/1y6gAtLp43hr0i_tNG_5IQBN5kprbVdBO/view" target="_blank"><button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-xl rounded-full border-[2px] px-5 md:px-4 py-2 cursor-pointer hover:scale-105 duration-200">Resume</button></a>
                    </div>
                </div>
            </div>
       </div>
       <hr />
    
    </>
  )
}

export default Home
