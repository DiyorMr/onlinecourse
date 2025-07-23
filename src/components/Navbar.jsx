import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-4 shadow bg-white">
            <div className="flex items-center gap-20">
                <a href="/">
                    <img src="/img/Logo.svg" alt="Logo" className="h-8 w-auto" />
                </a>

                <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-orange-500 font-semibold" : "hover:text-orange-400"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/courses"
                            className={({ isActive }) =>
                                isActive ? "text-orange-500 font-semibold" : "hover:text-orange-400"
                            }
                        >
                            Courses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "text-orange-500 font-semibold" : "hover:text-orange-400"
                            }
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pricing"
                            className={({ isActive }) =>
                                isActive ? "text-orange-500 font-semibold" : "hover:text-orange-400"
                            }
                        >
                            Pricing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "text-orange-500 font-semibold" : "hover:text-orange-400"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="flex items-center gap-4">
                <Link to="/signup" className="text-gray-700 hover:underline">
                    Sign Up
                </Link>

                <Link
                    to="/login"
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 ml-4"
                >
                    Login
                </Link>
            </div>
        </nav>
    )
}

export default Navbar