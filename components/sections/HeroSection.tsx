"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import dynamic from "next/dynamic";
import ScrollReveal from "../animations/ScrollReveal";

const Scene3D = dynamic(() => import("../3d/Scene3D"), { ssr: false });

export default function HeroSection() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [show3D, setShow3D] = useState(false);

    const roles = [
        "Software Engineering Student & Developer",
        "Web Developer",
        "AI/ML Enthusiast",
        "Cloud Explorer",
        "Problem Solver",
    ];

    useEffect(() => {
        // Defer 3D scene load to improve initial interaction performance (INP)
        const timer = setTimeout(() => setShow3D(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 animate-gradient-xy" />

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

            {/* 3D Scene Background - Lazy Loaded */}
            <div className={`absolute inset-0 z-0 transition-opacity duration-1000 pointer-events-none ${show3D ? 'opacity-50' : 'opacity-0'}`}>
                {show3D && <Scene3D />}
            </div>

            <div className="container-custom relative z-10 section-padding text-center">
                <div className="animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 text-shadow">
                        Hi, I&apos;m{" "}
                        <span className="gradient-text-blue">P.R.S</span>
                    </h1>
                </div>

                <ScrollReveal delay={0.2}>
                    <div className="h-20 md:h-24 mb-8">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-blue-400">
                            {text}
                            <span className="animate-pulse">|</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                        Passionate about building <span className="text-blue-400 font-semibold">real-world impactful software</span>.
                        <br />
                        Exploring AI, Web, Cloud, and cutting-edge technologies.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.6}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                        <button
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                            className="btn-primary"
                        >
                            Get In Touch
                        </button>
                        <button
                            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                            className="btn-secondary"
                        >
                            View Projects
                        </button>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.8}>
                    <div className="flex items-center justify-center gap-6 mb-16">
                        <motion.a
                            href="https://github.com/PREMRAJESH"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full glass hover:bg-white/10 transition-all"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github size={24} />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/gecdhd-comp-prem-sargara/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full glass hover:bg-white/10 transition-all"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Linkedin size={24} />
                        </motion.a>
                        <motion.a
                            href="mailto:sargarapremrajesh@gmail.com"
                            className="p-3 rounded-full glass hover:bg-white/10 transition-all"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail size={24} />
                        </motion.a>
                    </div>
                </ScrollReveal>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ArrowDown size={32} className="text-blue-500 opacity-50" />
                </motion.div>

            </div>
        </section>
    );
}
