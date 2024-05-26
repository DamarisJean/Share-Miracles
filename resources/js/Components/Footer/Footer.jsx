import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaImagePortrait } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#2a4047] text-white py-8">
            <div className="container mx-auto px-4 flex flex-wrap justify-between">
                <div className="w-full md:w-1/2 lg:w-1/3 mb-6">
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p>If you have any questions, please reach out to us at:</p>
                    <a
                        href="mailto:Miracles@gmail.com"
                        className="text-blue-300 hover:text-blue-500"
                    >
                        ShareMiraclesWithUs@gmail.com
                    </a>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 mb-6">
                    <h4 className="text-xl font-semibold mb-4">Menu</h4>
                    <ul>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="/create" className="hover:text-gray-300">
                                Create
                            </a>
                        </li>
                        <li>
                            <a href="/login" className="hover:text-gray-300">
                                Log in
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-gray-300">
                                About Us
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 mb-6">
                    <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a
                            href="https://github.com/DamarisJean"
                            className="hover:text-gray-300"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/damaris-jjm/"
                            className="hover:text-gray-300"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://damarisjean.github.io/PortfolioDamaris/"
                            className="hover:text-gray-300"
                        >
                            <FaImagePortrait size={24} />
                        </a>
                    </div>
                </div>
                <div className="w-full pt-4 mt-4 border-t border-gray-500 text-center">
                    <p>
                        &copy; 2024 Miracles - Read the stories, Share your own.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
