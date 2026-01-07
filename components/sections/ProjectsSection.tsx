"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../animations/ScrollReveal";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Brain Tumor Detection",
            category: "AI / Machine Learning",
            problem: "Detecting brain tumors early is critical, but manual analysis is time-consuming and prone to human error.",
            contribution: "Built a deep learning-based brain tumor detection model using VGG-16 with transfer learning. Focused on model training, dataset handling, and evaluation.",
            techStack: ["Python", "TensorFlow", "Keras", "CNN", "Image Processing"],
            image: "🧠",
            liveLink: "#",
            githubLink: "https://github.com/PREMRAJESH",
            gradient: "from-purple-600 to-pink-600",
        },
        {
            title: "Smart Study Planner",
            category: "AI Productivity App",
            problem: "Students struggle to manage time, plan studies, and remain consistent.",
            contribution: "Developed an AI-powered study planner that helps students manage schedules, track progress, and improve study productivity.",
            techStack: ["React", "Node.js", "MongoDB", "AI APIs"],
            image: "📚",
            liveLink: "#",
            githubLink: "https://github.com/PREMRAJESH",
            gradient: "from-blue-600 to-cyan-600",
        },
        {
            title: "Natural Disaster Detector",
            category: "Web Development",
            problem: "Lack of quick awareness and historical insight during natural disasters.",
            contribution: "Built a platform that detects disaster information, visualizes historical disaster paths, and presents meaningful insights.",
            techStack: ["React", "APIs", "Tailwind CSS"],
            image: "🌪️",
            liveLink: "#",
            githubLink: "https://github.com/PREMRAJESH",
            gradient: "from-orange-600 to-red-600",
        },
        {
            title: "Real-Time Chat Application",
            category: "Web Development",
            problem: "Teams and students need real-time communication tools.",
            contribution: "Built a real-time chat app with live messaging, authentication, and responsive UI.",
            techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
            image: "💬",
            liveLink: "#",
            githubLink: "https://github.com/PREMRAJESH",
            gradient: "from-green-600 to-teal-600",
        },
        {
            title: "AI-Powered CI/CD Debugger",
            category: "DevOps & AI",
            problem: "Developers struggle understanding build failures and pipeline issues.",
            contribution: "Designed & developed an AI-powered analyzer that explains build failures, suggests fixes, and improves debugging experience.",
            techStack: ["Node.js", "AI APIs", "DevOps Tools"],
            image: "⚙️",
            liveLink: "#",
            githubLink: "https://github.com/PREMRAJESH",
            gradient: "from-blue-700 to-indigo-700",
        },
        {
            title: "CodeViz",
            category: "Full Stack Web App",
            problem: "Students struggle to understand how algorithms work step-by-step and how data structures change during execution.",
            contribution: "Built the entire platform including the code editor, runtime visualizer, and algorithm step engine.",
            techStack: ["React", "Next.js", "TypeScript", "Monaco Editor", "Framer"],
            image: "🧩",

            liveLink: "https://code-visualizer.vercel.app/",
            githubLink: "https://github.com/PREMRAJESH/CodeViz",
            gradient: "from-pink-600 to-purple-600",
        },
    ];

    return (
        <section id="projects" className="section-padding relative">
            <div className="container-custom">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Featured <span className="gradient-text-blue">Projects</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-6" />
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Real-world solutions built with modern technologies and engineering best practices
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <motion.div
                                className="glass rounded-3xl overflow-hidden group"
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="grid md:grid-cols-2 gap-8 p-8">
                                    {/* Project Visual */}
                                    <div className="relative h-full min-h-[250px] md:min-h-[300px]">
                                        {/* {project.video ? (
                                            <div className="absolute inset-0 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                                <video
                                                    src={project.video}
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-10">
                                                    <a
                                                        href={project.liveLink}
                                                        className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <ExternalLink className="w-6 h-6 text-white" />
                                                    </a>
                                                    <a
                                                        href={project.githubLink}
                                                        className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Github className="w-6 h-6 text-white" />
                                                    </a>
                                                </div>
                                            </div>
                                        ) : ( */}
                                        <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                                            {(project.image.startsWith('/') || project.image.startsWith('http')) ? (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <span className="relative z-10 text-8xl">{project.image}</span>
                                            )}
                                            <div className="absolute inset-0 bg-black/20" />

                                            {/* Overlay on hover */}
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                                <a
                                                    href={project.liveLink}
                                                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <ExternalLink className="w-6 h-6" />
                                                </a>
                                                <a
                                                    href={project.githubLink}
                                                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Github className="w-6 h-6" />
                                                </a>
                                            </div>
                                        </div>
                                        {/* )} */}

                                        {/* Glow effect */}
                                        <div className={`absolute -inset-4 bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl -z-10 group-hover:opacity-40 transition-opacity`} />
                                    </div>

                                    {/* Project Details */}
                                    <div className="flex flex-col justify-center space-y-4">
                                        <div>
                                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} text-white mb-3`}>
                                                {project.category}
                                            </span>
                                            <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                                        </div>

                                        <div className="space-y-3">
                                            <div>
                                                <h4 className="text-sm font-semibold text-blue-400 mb-1">THE PROBLEM</h4>
                                                <p className="text-muted-foreground">{project.problem}</p>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-cyan-400 mb-1">MY CONTRIBUTION</h4>
                                                <p className="text-muted-foreground">{project.contribution}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-purple-400 mb-2">TECH STACK</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-3 py-1 text-sm rounded-full glass border border-white/10"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-4 pt-4">
                                            <a
                                                href={project.liveLink}
                                                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink size={18} />
                                                <span className="font-medium">Live Demo</span>
                                            </a>
                                            <a
                                                href={project.githubLink}
                                                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github size={18} />
                                                <span className="font-medium">Source Code</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={0.4}>
                    <div className="text-center mt-12">
                        <p className="text-muted-foreground">
                            More projects available on{" "}
                            <a href="https://github.com/PREMRAJESH" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold">
                                GitHub →
                            </a>
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
