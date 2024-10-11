


const Education = () => {
    return (
        <div
        id="education" className="education-section py-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
            <div className="max-w-4xl mx-auto ">
                <div className='flex justify-between '>
                <div className="max-w-sm bg-black bg-opacity-30 text-white rounded-lg shadow-lg overflow-hidden">
            <img
                className="w-full p-5 h-48 object-cover"
                src="https://i.ibb.co.com/XJG304R/Whats-App-Image-2024-10-11-at-15-11-58-719581ad.jpg"
                alt="Dhaka Mohila Polytechnic Institute"
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dhaka Mohila Polytechnic Institute</h3>
                <p className="text-gray-300">Diploma in Computer Science in Technology</p>
                <p className="text-gray-400">2021 - 2024</p>
            </div>
        </div>
                
        <div className="max-w-sm bg-black bg-opacity-30 text-white rounded-lg shadow-lg overflow-hidden">
    <img 
        src="https://i.ibb.co.com/r3V6mLz/IMG-6721.jpg" 
        alt="School" 
        className="w-full p-5 h-48 object-cover rounded-lg mb-4"
    />
    <div className="p-6">
    <h3 className="text-xl font-semibold mb-2">Nawabgonj Pilot Higher Secondary Girls School</h3>
    <p className="mb-1">Secondary School Certificate (SSC)</p>
    <p>Year: 2020 - 2021</p>
    </div>
</div>

                </div>
            </div>
        </div>
    );
};

export default Education;
