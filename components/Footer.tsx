"use client";

import { Heart, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        { icon: <Github size={20} />, href: "https://github.com/PREMRAJESH", label: "GitHub" },
        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/gecdhd-comp-prem-sargara/", label: "LinkedIn" },
        { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
        { icon: <Mail size={20} />, href: "mailto:sargarapremrajesh@gmail.com", label: "Email" },
    ];

    return (
        <footer className="relative border-t border-white/10">
            <div className="container-custom px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold gradient-text-blue mb-3">Portfolio</h3>
                        <p className="text-muted-foreground">
                            Building the future, one line of code at a time.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-3">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-muted-foreground hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold mb-3">Connect</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg glass hover:bg-white/10 transition-all hover:scale-110"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-muted-foreground text-sm">
                        © {currentYear} Portfolio. All rights reserved.
                    </p>
                    <p className="text-muted-foreground text-sm flex items-center gap-2">
                        Crafted with <Heart size={16} className="text-red-500" /> and Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
}
