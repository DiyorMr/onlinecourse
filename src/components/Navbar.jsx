import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { href: "#home", label: "Home" },
        { href: "#courses", label: "Courses" },
        { href: "#about", label: "About Us" },
        { href: "#pricing", label: "Pricing" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow transition-all duration-300 px-6 md:px-32 py-4">
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
                    {navItems.map(({ href, label }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className="hover:text-orange-400 transition-colors duration-200"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop auth */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="#signup" className="text-gray-700 hover:underline">
                        Sign Up
                    </a>
                    <a
                        href="#login"
                        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                    >
                        Login
                    </a>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden mt-4 space-y-3 text-gray-700 font-medium">
                    {navItems.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className="block hover:text-orange-400"
                            onClick={() => setIsOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        href="#signup"
                        className="block hover:underline"
                        onClick={() => setIsOpen(false)}
                    >
                        Sign Up
                    </a>
                    <a
                        href="#login"
                        className="block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                        onClick={() => setIsOpen(false)}
                    >
                        Login
                    </a>
                </div>
            )}
        </nav>
    );
}
