import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    console.log(formData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.send(
            'service_b76ztpn',  // Replace with actual service ID from EmailJS
            'template_bc72g3n', // Replace with actual template ID from EmailJS
            formData,
            'OtRs6LkBFkvNOw5F0'      // Replace with actual user ID (public key) from EmailJS
        )
        .then((response) => {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Clear form after submission
        }).catch((error) => {
            alert('Failed to send message. Please try again later.');
            console.error(error);
        });
    };

    return (
        <div
        id='contact' className="min-h-screen flex flex-col items-center justify-center  py-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="Your name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="Your email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900"
                        placeholder="Your message"
                        rows="5"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#465697] text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                    Send Message
                </button>
                <div className="mt-8">
                <h3 className="text-xl font-bold mb-2">Connect with me:</h3>
                <div className="flex space-x-4">
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
            </div>
            </form>
            
        </div>
    );
};

export default ContactUs;
