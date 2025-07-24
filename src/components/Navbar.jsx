import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="shadow bg-white px-6 md:px-32 py-4">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <a href="/">
                    <img src="/img/Logo.svg" alt="Logo" className="h-8 w-auto" />
                </a>

                {/* Hamburger button */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Desktop nav */}
                <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                    {["/", "/courses", "/about", "/pricing", "/contact"].map((path, idx) => {
                        const labels = ["Home", "Courses", "About Us", "Pricing", "Contact"];
                        return (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive ? "text-orange-500 font-semibold" : "hover:text-orange-400"
                                    }
                                >
                                    {labels[idx]}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop auth */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/signup" className="text-gray-700 hover:underline">
                        Sign Up
                    </Link>
                    <Link
                        to="/login"
                        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                    >
                        Login
                    </Link>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden mt-4 space-y-3 text-gray-700 font-medium">
                    {["/", "/courses", "/about", "/pricing", "/contact"].map((path, idx) => {
                        const labels = ["Home", "Courses", "About Us", "Pricing", "Contact"];
                        return (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    isActive ? "block text-orange-500 font-semibold" : "block hover:text-orange-400"
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {labels[idx]}
                            </NavLink>
                        );
                    })}

                    <Link
                        to="/signup"
                        className="block hover:underline"
                        onClick={() => setIsOpen(false)}
                    >
                        Sign Up
                    </Link>
                    <Link
                        to="/login"
                        className="block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                        onClick={() => setIsOpen(false)}
                    >
                        Login
                    </Link>
                </div>
            )}
        </nav>
    );
}
