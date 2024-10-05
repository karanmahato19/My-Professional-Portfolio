import React from 'react'
import bloodbank from "../../public/bloodbank.png";
import bookshop from "../../public/bookshop.png";


function Portfolio() {
    const cardItem=[
        {
            id:1,
            logo:bloodbank,
            name:"Blood Bank & Donor Management System",
            description:"This system uses PHP, HTML, CSS, JavaScript and SQL.",
            websiteLink:"https://www.google.com",
            sourceCodeLink:"https://www.facebook.com"
        },
        {
            id:2,
            logo:bookshop,
            name:"Bookshop Management System",
            description:"Developed in C++ using File Handling.",
            websiteLink:"https://www.instagramcom",
            sourceCodeLink:"https://www.twitter.com"
        }
    ]
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-5">
        <div>
            <h1 className="text-3xl font-bold mb-3">Portfolio</h1>
            <span className="underline text-xl font-semibold text-green-600">Featured Projects</span>
            <div className="grid md:grid-cols-2 md:flex flex-row gap-6 mb-3 mt-5">
               {
                cardItem.map(({id,logo,name,description,websiteLink,sourceCodeLink}) =>(
                    <div className="md:w-[225px] md:h-[250px] border-[2px] rounded-lg shadow-lg p-1 crusor-pointer hover:scale-105 duration-300" key={id}>
                        <img src={logo} className="ml-2 mt-2 w-[60px] h-[60px] md:w-[80px] md:h-[80px] p-1 rounded-full border-[2px]" alt=""/>
                        <div>
                            <div className="font-bold pr-2 pl-2 mt-2">{name}</div>
                            <p className="pl-2 pr-2 text-gray-500 text-sm">{description}</p>
                            <div className="text-xs space-x-2 ml-2 mt-3">
                                <a href={websiteLink} target="_blank"><button className="bg-gradient-to-r from-red-400 to-blue-800 text-white p-2 rounded-lg hover:scale-105 duration-300">Website</button></a>
                                <a href={sourceCodeLink} target="_blank"><button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 rounded-lg hover:scale-105 duration-300">Source Code</button></a>
                            </div>
                        </div>
                    </div>
                ))
               } 
            </div>
        </div>
    </div>
  )
}

export default Portfolio