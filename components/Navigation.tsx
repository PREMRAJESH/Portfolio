"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Moon, Sun } from "lucide-react";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isDark, setIsDark] = useState(true);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Goals", href: "#goals" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section
            const sections = navItems.map((item) => item.href.slice(1));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark");
    };

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "glass shadow-lg" : ""
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container-custom mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            className="text-2xl font-bold gradient-text-blue cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => scrollToSection("#home")}
                        >
                            P.R.S
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`relative text-sm font-medium transition-colors hover:text-blue-500 ${activeSection === item.href.slice(1)
                                        ? "text-blue-500"
                                        : "text-foreground/80"
                                        }`}
                                >
                                    {item.name}
                                    {activeSection === item.href.slice(1) && (
                                        <motion.div
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600"
                                            layoutId="activeSection"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="hidden md:flex items-center space-x-4">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                                aria-label="Toggle theme"
                            >
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <a
                                href="/Resume.pdf"
                                download="Prem_Sargara_Resume.pdf"
                                className="btn-primary flex items-center space-x-2"
                            >
                                <Download size={18} />
                                <span>Resume</span>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-lg glass"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-30 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            className="absolute top-20 left-4 right-4 glass rounded-2xl p-6"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                        >
                            <div className="flex flex-col space-y-4">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.name}
                                        onClick={() => scrollToSection(item.href)}
                                        className={`text-left py-2 px-4 rounded-lg transition-colors ${activeSection === item.href.slice(1)
                                            ? "bg-blue-600/20 text-blue-500"
                                            : "hover:bg-white/5"
                                            }`}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {item.name}
                                    </motion.button>
                                ))}
                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    <button
                                        onClick={toggleTheme}
                                        className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                                    >
                                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                                    </button>
                                    <a
                                        href="/Resume.pdf"
                                        download="Prem_Sargara_Resume.pdf"
                                        className="btn-primary flex items-center space-x-2"
                                    >
                                        <Download size={18} />
                                        <span>Resume</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
