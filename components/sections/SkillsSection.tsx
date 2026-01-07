"use client";

import { Code, Brain, Cloud, Blocks, Wrench } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import TiltCard from "../ui/TiltCard";

export default function SkillsSection() {
    const skillCategories = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Web Development",
            color: "from-blue-600 to-cyan-600",
            skills: ["React", "Next.js", "JavaScript", "TypeScript", "Node.js", "Express", "Tailwind CSS", "REST APIs"],
        },
        {
            icon: <Brain className="w-8 h-8" />,
            title: "AI / Machine Learning",
            color: "from-purple-600 to-pink-600",
            skills: ["Python", "TensorFlow", "VGG-16", "Machine Learning Basics", "Computer Vision"],
        },
        {
            icon: <Cloud className="w-8 h-8" />,
            title: "Cloud & Tools",
            color: "from-cyan-600 to-blue-600",
            skills: ["Git", "GitHub", "Linux", "MongoDB", "MySQL", "Postman", "VS Code"],
        },
    ];
    return (
        <section id="skills" className="section-padding relative bg-gradient-to-b from-transparent to-blue-950/10">
            <div className="container-custom">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Skills & <span className="gradient-text-blue">Technologies</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-6" />
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A diverse toolkit for building modern, scalable, and intelligent applications
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <TiltCard className="h-full group">
                                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                                    <div className="text-white">{category.icon}</div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="px-3 py-1 text-sm rounded-full glass border border-white/10 hover:border-blue-500/50 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Hover glow effect */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity blur-xl -z-10`} />
                            </TiltCard>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Additional emphasis */}
                <ScrollReveal delay={0.6}>
                    <div className="mt-16 text-center glass rounded-2xl p-8">
                        <p className="text-lg text-muted-foreground">
                            <span className="text-foreground font-semibold">Always learning</span> —
                            exploring new frameworks, languages, and technologies to stay ahead in the rapidly evolving tech landscape.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
