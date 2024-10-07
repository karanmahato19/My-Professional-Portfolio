import React from 'react'

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <h1 className="text-3xl font-bold mb-3">About</h1>
        <div className="text-sm md:text-base text-justify space-y-2">
                    <p>I’m Karan Kumar Mahato, a passionate Web Developer currently
                        my B.Sc. in Computer Application at Marwari College Ranchi. 
                        With a strong foundation in HTML, CSS, JavaScript, and SQL, 
                        I specialize in creating efficient, user-friendly web applications.
                    </p>
                    <p>I have developed system like a Bookshop Management Syatem, My Professional Portfolio
                        which showcase my problem-solving abilities and my love for clean, 
                        functional code. I’m also familiar with C++, Java, and various web development frameworks.
                    </p>
        </div>
        <br />
        {/*Education Section*/}
        <div>
            <h1 className="text-green-600 underline font-semibold text-xl">Education</h1>
            <div className="space-y-3">
                <div>
                    <span className="font-semibold text-sm md:text-base">B.Sc. Computer Application</span>
                    <br />
                    <span className="text-gray-500 text-sm md:text-base">Marwari College Ranchi (2021-2024)</span> <br />
                    <span className="text-gray-500 text-sm md:text-base">Ranchi, Jharkhand</span>
                </div>
                <div>
                    <span className="font-semibold text-sm md:text-base">Intermediate In Science (PCM)</span>
                    <br />
                    <span className="text-gray-500 text-sm md:text-base">TATA DAV School Jamadoba (2019-2021)</span> <br />
                    <span className="text-gray-500 text-sm md:text-base">Dhanbad, Jharkhand</span>
                </div>
            </div>
        </div>
        <br />
        {/*Skills and Expertise Section */}
        <div>
            <h1 className="text-green-600 underline font-semibold text-xl">Technical Skills & Expertise</h1>
            <div>
                <span className="text-sm md:text-base">• <span className="font-semibold text-sm md:text-base">Languages:</span> C++, Java, Python</span> <br />
                <span className="text-sm md:text-base">• <span className="font-semibold text-sm md:text-base">Front-End:</span> HTML, JavaScript, CSS - Tailwind CSS, Framework - React </span> <br />
                  <span className="text-sm md:text-base">• <span className="font-semibold text-sm md:text-base">DataBase:</span> SQL, MongoDB</span> <br />
                 <span className="text-sm md:text-base">• <span className="font-semibold text-sm md:text-base">Data Structures and Algorithems:</span> Array, string, Searching, 
                    Sorting, Recursion</span> <br />
            </div>
            <br />
        </div>
        {/**Project Section */}
        <div>
            <h1 className="text-green-600 underline font-semibold text-xl">Project</h1>
                <div>
                    <span className="text-sm md:text-base">• <span className="font-semibold text-sm md:text-base">My Professional Portfolio</span> This system uses HTML, CSS, JavaScript, React and Node Js to observe my professional work
                        and experience to showcase myskills in the technologies.</span>
                     <br />
                    <span className="text-sm md:text-base">• <span className="font-semibold text-sm md:text-base">BookShop Management System</span> Developed in C++ using File Handling, 
                        enables efficient management of book inventories, 
                        customer transactions, and sales records.(Link will be added soon)
                    </span> <br />
                </div> <br /> 
        </div>
        {/**My Statement */}
        <div>
            <h1 className="text-green-600 underline font-semibold text-xl">Mission Statement</h1>
            <div className="text-sm md:text-base">
                <p>
                    "My mission is to showcase my passion for technology and design through innovative, 
                    user-centric solutions. By combining my expertise in programming languages, 
                    web development, and data management, I strive to create intuitive applications 
                    that solve real-world problems, enhance user experiences, and foster engagement. 
                    My portfolio reflects my commitment to continuous learning and my dedication to delivering 
                    high-quality work that resonates with users and clients alike."
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
