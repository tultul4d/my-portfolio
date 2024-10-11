import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS এর স্টাইলশীটও ইমপোর্ট করতে হবে
 
import { IoArrowForward } from "react-icons/io5";

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 200, 
            once: true, 
        });
    }, []);

    return (
        <div 
            id="about" 
            className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
        >
            <div>
                <h2 
                    className="text-2xl md:text-4xl font-bold text-start mb-14"
                    data-aos="fade-up" 
                >
                    About Me
                </h2>
                <div className="md:flex flex-wrap flex-col md:flex-row items-center">
                    <img 
                        className="md:h-80 rounded-lg" 
                        src="https://i.ibb.co.com/wYp4k8t/Whats-App-Image-2024-10-11-at-11-42-01-34a080d9.jpg" 
                        alt="About Me" 
                        data-aos="zoom-in" 
                    />
                    <ul>
                        <div className="flex gap-3 py-4">
                            <IoArrowForward size={30} />
                            <span className="w-96">
                                <p 
                                    className="text-sm md:text-md font-semibold leading-tight"
                                    data-aos="fade-left" 
                                >
                                    My name is Tultul Akter and I am a passionate web developer based in Nowabgonj, Dhaka. 
                                    I hold a diploma in Computer Science from Dhaka Mohila Polytechnic Institute and 
                                    have a strong foundation in web technologies, including HTML, CSS, JavaScript, 
                                    and React.
                                </p>
                            </span>
                        </div>
                        <div className="flex gap-3 py-4">
                            <IoArrowForward size={30} />
                            <span className="w-96">
                                <p 
                                    className="text-sm md:text-md font-semibold leading-tight"
                                    data-aos="fade-left" // অ্যানিমেশন অ্যাড
                                >
                                    I enjoy working on challenging projects that allow me to solve problems creatively. 
                                    In my free time, I love reading tech blogs, exploring new programming languages, 
                                    and contributing to open-source projects.
                                </p>
                            </span>
                        </div>
                        <div className="flex gap-3 py-4">
                            <IoArrowForward size={30} />
                            <span className="w-96">
                                <p 
                                    className="text-sm md:text-md font-semibold leading-tight"
                                    data-aos="fade-left" // অ্যানিমেশন অ্যাড
                                >
                                    My goal is to become a full-stack developer and work with innovative teams that 
                                    are making a difference in the tech industry.
                                </p>
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
