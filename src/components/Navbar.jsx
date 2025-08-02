import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/courses", label: "Courses" },
        { href: "/about", label: "About Us" },
        { href: "/pricing", label: "Pricing" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-4">
            <div className="flex justify-between items-center">
                <Link to="/">
                    <img src="/img/Logo.svg" alt="Logo" className="h-8 w-auto" />
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-6 text-gray-700 font-medium">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link to={item.href} className="hover:text-orange-500">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-4">
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

                {/* Mobile */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col space-y-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 hover:text-orange-500"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link to="/signup" onClick={() => setIsOpen(false)}>
                        Sign Up
                    </Link>
                    <Link
                        to="/login"
                        onClick={() => setIsOpen(false)}
                        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                    >
                        Login
                    </Link>
                </div>
            )}
        </nav>
    );
}
