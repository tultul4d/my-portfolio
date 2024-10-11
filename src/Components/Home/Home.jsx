import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import img from '../../../../img/WhatsApp Image 2024-09-26 at 20.22.06_bc744517.jpg'
import TextChange from '../TextChange';

const Home = () => {
    return (
        <div className="text-white flex justify-between items-start p-10 md:p-20 ">
           <div className="md:w-2/4 md:pt-10">
           <h1 className="text-3xl mb-5 md:text-6xl font-bold flex leading-normal tracking-tighter "><TextChange></TextChange></h1>
           <h2 className='text-2xl font-serif mb-4'>Jr. Front End Web Developer</h2>
           <p className="text-sm md:text-xl tracking-tight">I love building responsive, user-friendly websites and web applications. With a strong foundation in HTML, CSS, JavaScript, and React, I'm dedicated to creating efficient, scalable solutions. Let's work together to turn your ideas into reality. </p>
           <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] "><a href="#contact">Contact Me</a></button>
           <div className="flex space-x-4 mt-5 gap-3">
                    <a 
                        href="https://github.com/tultul4d" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:underline">
                    <FaGithub />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/tultul-akter-963aa0306/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:underline h-6">
                        <FaLinkedinIn />
                    </a>
                </div>
           </div>
           <div><img className="rounded-lg w-2/2 bg-slate-600" src={img} alt="" /></div>
        </div>
    );
};

export default Home;