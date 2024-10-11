import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-10">
            <div className="container mx-auto text-center">
                <h3 className="text-xl font-bold">Tultul Akter</h3>
                <p className="mt-2">Aspiring Software Developer | Passionate about coding and design</p>
                <div className="flex justify-center mt-4 space-x-6">
                <a 
                        href="https://github.com/tultul4d" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#465697] hover:underline">
                    <FaGithub />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/tultul-akter-963aa0306/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#465697] hover:underline h-6">
                        <FaLinkedinIn />
                    </a>
                </div>
                <p className="mt-4 text-sm">© {new Date().getFullYear()} Tultul Akter. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
