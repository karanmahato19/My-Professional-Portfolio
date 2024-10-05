import React from 'react'
import twitter from "../../public/twitter.png";
import gfg from "../../public/gfg.png";
import leetcode from "../../public/leetcode.png";
import mail from "../../public/mail.png";
import linkedin from "../../public/linkedin.png";

function Footer() {
  return (
    <>
    <hr />
    <footer className="py-8">
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-3 md:mt-5">
        <div className="flex flex-col items-center justify-center">
            <div>
                   <ul className="flex space-x-3 md:space-x-5">
                            <a href="https://www.linkedin.com/in/karanmahato19" target="_blank">
                            <li className="">
                                <img src={linkedin} className="h-5 w-5 rounded-full" alt="" /></li>
                            </a>
                            <a href="https://leetcode.com/u/karanmahato19/" target="_blank">
                            <li className="">
                                <img src={leetcode} className="h-5 w-5 rounded-full" alt="" /></li>
                            </a>
                            <a href="https://www.geeksforgeeks.org/user/karanmahato19/" target="_blank">
                            <li className="">
                                <img src={gfg} className="h-5 w-5 rounded-full" alt="" /></li>
                            </a>
                            <a href="mailto:karanmahato7850@gmail.com" target="_blank">
                            <li className="">
                                <img src={mail} className="h-5 w-5 rounded-full" alt="" /></li>
                            </a>
                            <a href="https://x.com/karanmahato_19?t=mZyoQQXdYlVAko6mAFJMKQ&s=08" target="_blank">
                            <li className="hover:scale-125 duration-200 cursor-pointer">
                                <img src={twitter} className="h-5 w-5 rounded-full" alt="" />
                            </li>
                            </a>
                    </ul> 
            </div>
            <div className="text-xs md:text-sm mt-6 md:mt-6 border-t text-gray-400 pt-4 flex-col text-center">
                <p>&copy; 2024 karanmahato19. All rights reserved.</p>
                <p>Thanks to LearnCoding ❤️ </p>
            </div>
        </div>
    </div>
    </footer>
    </>
  )
}

export default Footer
