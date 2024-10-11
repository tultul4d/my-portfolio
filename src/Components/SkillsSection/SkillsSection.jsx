import React from 'react';

const skills = [
    {
        name: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        name: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
        name: "Firebase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
    },
    {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    
    // Add more skills as needed
];

const SkillsSection = () => {
    return (
        <div
        id='skill' className="mt-10from-gray-700 to-slate-600 py-10 p-10 ">
            <h2 className="text-center text-3xl font-bold mb-8">My Skills</h2>
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {skills.map(skill => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center bg-slate-500 p-4 shadow-lg rounded-lg transition-transform transform hover:scale-105">
                        <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            className="h-20 w-20 mb-4" // Increased size for better visibility
                        />
                        <h3 className="text-xl font-medium text-gray-800 mt-2">{skill.name}</h3> {/* Added margin for spacing */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;
