import React, { useState } from 'react'
import profile from "../../public/Profile3.png"
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
/**using Link */
import { Link } from "react-scroll";


function Navbar() {
  const [menu, setMenu] = useState(false)
  const navItems=[
    {
      id:1, 
      text:"Home"
    },
    {
      id:2, 
      text:"About"
    },
    {
      id:3, 
      text:"Portfolio"
    },
    {
      id:4, 
      text:"Skills"
    },
    {
      id:6, 
      text:"Contact"
    }
  ]
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between items-center h-16">
        <div className="flex space-x-2">  
          <img src={profile} className="h-12 w-12 rounded-full" alt="" />
          <h1 className="">
            <span className="text-xl text-red-800">K</span>ARAN <span className="text-xl text-red-800">M</span>AHATO
            <p className="text-xs text-gray-600">My Professional Portfolio</p>
          </h1>
        </div>
        {/*DeskTop Navigation bar*/}
        <div>
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({id, text}) => (
              <li className="hover:scale-125 duration-200 cursor-pointer" key={id}>
                <Link to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active">
                {text}</Link></li>
              ))}
          </ul>
          <div onClick={()=>setMenu(!menu)} className="md:hidden">
            {menu? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />} </div>
        </div>
      </div>
      {/*Mobile Navigation Bar*/}
      {
        menu && (
      <div className="bg-white">
        <ul className="md:hidden flex flex-col h-screen space-y-4 items-center justify-start">
          {navItems.map(({id, text}) => (
              <li className="border-t text-black text-xl pt-6 mt-10 hover:scale-125 duration-200 cursor-pointer" key={id}>
                <Link 
                onClick={()=>setMenu(!menu)} className="md:hidden"
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active">
                {text}</Link></li>
              ))}
              <li className="text-gray-400 text-center pt-40"><p>&copy; 2024 karanmahato19</p>
                  <p>All rights reserved</p></li>
        </ul>
      </div>
        )
      }
    </div>
    </>
  )
}

export default Navbar
