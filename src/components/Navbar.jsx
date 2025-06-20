import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false);

    const links = ["Home", "About Us", "Services", "Product", "Projects", "News", "Contact"];

    return (
        <header className="bg-white shadow-md px-6 py-4">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-sky-600 font-medium">
                    {links.map((item) => (
                        <a
                            key={item}
                            href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                            onClick={() => setActive(item)}
                            className="relative group"
                        >
                            {item}
                            {active === item && (
                                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-red-600 rounded-sm"></span>
                            )}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-sky-600"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="md:hidden flex flex-col mt-4 space-y-4 text-sky-600 font-medium px-4">
                    {links.map((item) => (
                        <a
                            key={item}
                            href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                            onClick={() => {
                                setActive(item);
                                setMenuOpen(false);
                            }}
                            className={`relative ${active === item ? "text-red-600 font-semibold" : ""
                                }`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};
