const Navbar = () => {
    return (
        <div className="navbar bg-gray-900 p-3 text-white shadow-lg rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl font-bold text-blue-400 hover:text-blue-500">
                    Tultul
                </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    <li><a href="#" className="hover:text-blue-100 transition">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-100 transition">About</a></li>
                    <li><a href="#education" className="hover:text-blue-100 transition">Education</a></li>
                    <li><a href="#skill" className="hover:text-blue-100 transition">Skill</a></li>
                    <li><a href="#project" className="hover:text-blue-100 transition">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-100 transition">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
