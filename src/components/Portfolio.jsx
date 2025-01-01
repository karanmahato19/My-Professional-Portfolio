import React from 'react'
import portfolio from "../../public/portfolio.jpg";
import bookshop from "../../public/bookshop.png";
import studysync from "../../public/studysync.png";
import leetcode from "../../public/leetcode.png";


function Portfolio() {
    /**making card items for shwing project */
    const cardItem=[
        {
            id:1,
            logo:portfolio,
            name:"My Professional Portfolio Website",
            description:"This system uses HTML, CSS, JavaScript and React.",
            websiteLink:"https://karanmahato19.netlify.app/",
            sourceCodeLink:"https://github.com/karanmahato19/My-Professional-Portfolio.git"
        },
        {
            id:2,
            logo:bookshop,
            name:"Bookshop Management System",
            description:"Developed in C++ using File Handling.",
            websiteLink:"#LinkAddedSoon",
            sourceCodeLink:"https://github.com/karanmahato19/Bookshop-Management-System.git"
        },
        {
            id:3,
            logo:leetcode,
            name:"LeetCode Matric Web Application",
            description:"Shows stats of a LeetCode user. HTML, CSS, JavaScript.",
            websiteLink:"https://karanmahato19.github.io/LeetCode-Matric/",
            sourceCodeLink:"https://github.com/karanmahato19/LeetCode-Matric.git"
        },
        {
            id:4,
            logo:studysync,
            name:"StudySync Education Website",
            description:"Basic level frontend project using HTML and CSS.",
            websiteLink:"https://karanmahato19.github.io/StudySync-Website/",
            sourceCodeLink:"https://github.com/karanmahato19/StudySync-Website.git"
        }
        
    ]
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-5">
        <div>
            <h1 className="text-3xl font-bold mb-3">Portfolio</h1>
            <span className="underline text-xl font-semibold text-green-600">Featured Projects</span>
            <div className="grid md:grid-cols-2 md:flex flex-row gap-6 mb-3 mt-5">
               {
                /**mapping array here (use learnCodeing for help) & making a box like structure*/
                cardItem.map(({id,logo,name,description,websiteLink,sourceCodeLink}) =>(
                    <div className="md:w-[225px] md:h-[250px] border-[1px] rounded-lg shadow-lg p-1 crusor-pointer hover:scale-105 hover:border-blue-600 duration-300" key={id}>
                        <img src={logo} className="ml-2 mt-2 w-[60px] h-[60px] md:w-[80px] md:h-[80px] p-1 rounded-full border-[2px]" alt=""/>
                        <div>
                            <div className="text-sm pr-2 pl-2 mt-2">{name}</div>
                            <p className="pl-2 pr-2 text-gray-500 text-xs">{description}</p>
                            <div className="text-xs space-x-2 ml-2 mt-3 flex align-bottom">
                                <a href={websiteLink} target="_blank"><button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 pl-5 pr-5 rounded-lg hover:scale-105 duration-300">View</button></a>
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
