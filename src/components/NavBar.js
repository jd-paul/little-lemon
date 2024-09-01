import React, { useState } from 'react';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setAboutOpen(false); // Close About dropdown when opening Menu
    };

    const toggleAbout = () => {
        setAboutOpen(!aboutOpen);
        setMenuOpen(false); // Close Menu dropdown when opening About
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 transition-all duration-200 font-poppins font-bold text-lg bg-teal-900 bg-custom-accent text-white py-4 px-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <a className="flex items-center text-white hover:text-custom-accent_main transition duration-200 cursor-pointer">
                    Little Lemon
                </a>
                <div className="flex space-x-4 relative">
                    {/* Menu dropdown */}
                    <div className="relative">
                        <button
                            onClick={toggleMenu}
                            className="hidden md:block bg-transparent text-white px-4 py-2 rounded-md hover:bg-custom-accent hover:text-custom-accent_main transition duration-200 cursor-pointer hover:bg-white hover:text-teal-900"
                        >
                            Menu
                        </button>
                        {menuOpen && (
                            <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 animate-fade-slide-down">
                                <a href="#" className="block px-4 py-2 text-teal-900 hover:bg-custom-accent hover:text-teal-700">Appetizers</a>
                                <a href="#" className="block px-4 py-2 text-teal-900 hover:bg-custom-accent hover:text-teal-700">Main Courses</a>
                                <a href="#" className="block px-4 py-2 text-teal-900 hover:bg-custom-accent hover:text-teal-700">Desserts</a>
                            </div>
                        )}
                    </div>
                    {/* About dropdown */}
                    <div className="relative">
                        <button
                            onClick={toggleAbout}
                            className="hidden md:block bg-transparent text-white px-4 py-2 rounded-md hover:bg-custom-accent hover:text-custom-accent_main transition duration-200 cursor-pointer hover:bg-white hover:text-teal-900"
                        >
                            About
                        </button>
                        {aboutOpen && (
                            <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 animate-fade-slide-down">
                                <a href="#" className="block px-4 py-2 text-teal-900 hover:bg-custom-accent hover:text-teal-700">Our Story</a>
                                <a href="#" className="block px-4 py-2 text-teal-900 hover:bg-custom-accent hover:text-teal-700">Team</a>
                                <a href="#" className="block px-4 py-2 text-teal-900 hover:bg-custom-accent hover:text-teal-700">Careers</a>
                            </div>
                        )}
                    </div>
                    {/* Contact button */}
                    <button className="px-4 py-2 rounded-md transition duration-200 bg-custom-accent text-white border border-white hover:bg-custom-accent_main hover:bg-white hover:text-teal-900 cursor-pointer">
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
