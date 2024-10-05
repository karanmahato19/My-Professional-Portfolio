import React from 'react'
import cplusplus from "../../public/cplusplus.png";
import java from "../../public/java.png";
import html5 from "../../public/html5.png";
import css from "../../public/css.png";
import JavaScript from "../../public/JavaScript.png";
import tailwind from "../../public/tailwind.png";
import sql from "../../public/sql.png";
import mongoDB from "../../public/mongoDB.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/nodejs.png";


function Skills() {
    const cardItem=[
        {
            id:11,
            logo:cplusplus,
            name:"C++",
        },
        {
            id:12,
            logo:java,
            name:"Java",
        },
        {
            id:13,
            logo:html5,
            name:"HTML",
        },
        {
            id:14,
            logo:css,
            name:"CSS",
        },
        {
            id:15,
            logo:JavaScript,
            name:"JavaScript",
        },
        {
            id:16,
            logo:tailwind,
            name:"Tailwind CSS",
        },
        {
            id:17,
            logo:sql,
            name:"SQL",
        },
        {
            id:18,
            logo:mongoDB,
            name:"MongoDB",
        },
        {
            id:19,
            logo:reactjs,
            name:"ReactJs",
        },
        {
            id:20,
            logo:nodejs,
            name:"NodeJs",
        }
    ]
  return (
    <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16 mb-10">
        <div>
            <h1 className="text-3xl font-bold mb-3">Skills</h1>
            <span className="text-lg">I have good knowledge and college experience in these following skills : </span>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-6 mb-3 mt-5">
               {
                cardItem.map(({id,logo,name,description}) =>(
                    <div className="flex flex-col text-center justify-center shadow-black rounded-full w-[60px] text-xs md:w-[90px] md:h-[90px] p-1 crusor-pointer hover:scale-105 duration-300" key={id}>
                        <img src={logo} className="border-[2px] rounded-full" alt=""/>
                        <div>
                            <div className="">{name}</div>
                        </div>
                    </div>
                ))
               } 
            </div>
        </div>
    </div>
  )
}

export default Skills

