import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Contact from "../components/Contact";

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <Outlet />
            </main>
            <Contact />
        </>
    );
}
