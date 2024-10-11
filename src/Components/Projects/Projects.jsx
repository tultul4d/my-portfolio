import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration
    }, []);

    const projects = [
        {
            id: 1,
            tecnologes: "MERN stack",
            name: "Blood Donation",
            title: "The Blood Donation App is designed to facilitate blood donations by connecting donors and recipients. The Blood Donation App is designed to facilitate blood donations by connecting donors and recipients...",
            live: "https://quiet-crisp-f52bfa.netlify.app/",
            github: "https://github.com/tultul4d/blood-donation-client.git"
        },
        {
            id: 2,
            tecnologes: "MERN stack",
            name: "Ur.Chosen",
            title: "The platform offers product comparison features that allow users to compare the prices, reviews, and features of multiple products, helping them choose the best one for their needs...",
            live: "https://darling-pika-43d08c.netlify.app/",
            github: "https://github.com/tultul4d/alternative-product-website.git"
        },
        {
            id: 3,
            name: "TrekTrex",
            tecnologes: "HTML, CSS, JavaScript, Tailwind CSS",
            title: "Tourism Management website helps in organizing, promoting, and managing tourism-related services for travel agencies, tour operators, and tourists...",
            live: "https://tourism-management-websi-c0728.web.app/home",
            github: "https://github.com/tultul4d/tourism-management-client.git"
        },
    ];

    return (
        <div id="project" className="mt-10 p-10">
            <div className="text-center">
                <h2 className="font-bold text-3xl mb-6 text-center" data-aos="fade-up">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-up" 
                        >
                            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                            <h1>{project.tecnologes}</h1>
                            <p className="text-sm font-mono mt-3">{project.title}</p>
                            <div className="flex justify-between">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline hover:text-blue-700 mt-5"
                                >
                                    View Live Project
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline hover:text-blue-700 mt-5"
                                >
                                    View Github
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
