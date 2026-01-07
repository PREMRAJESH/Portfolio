"use client";

import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import TiltCard from "../ui/TiltCard";

export default function AboutSection() {
    const highlights = [
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Practical Solutions",
            description: "Building real-world projects, not just academic exercises",
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Deep Understanding",
            description: "Understanding systems at a fundamental level",
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Constant Growth",
            description: "Always learning, experimenting, and improving",
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "People-Focused",
            description: "Creating software that actually helps people",
        },
    ];

    return (
        <section id="about" className="section-padding relative">
            <div className="container-custom">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            About <span className="gradient-text-blue">Me</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <ScrollReveal direction="left">
                        <div className="relative">
                            <div className="aspect-square rounded-2xl glass overflow-hidden glow-blue">
                                <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">👨‍💻</div>
                                        <p className="text-xl font-semibold">Software Engineer</p>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right" delay={0.2}>
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                I am a <span className="text-foreground font-semibold">Software Engineering student</span> passionate
                                about building real-world impactful software. I love working with{" "}
                                <span className="text-blue-400 font-semibold">Web Development</span>,{" "}
                                <span className="text-cyan-400 font-semibold">AI / Machine Learning</span>,{" "}
                                <span className="text-purple-400 font-semibold">Cloud technologies</span>, and
                                high-performance systems.
                            </p>

                            <p className="text-lg leading-relaxed text-muted-foreground">
                                I believe in creating <span className="text-foreground font-semibold">practical solutions</span> rather
                                than just academic projects, and I constantly push myself to learn, experiment, and improve.
                            </p>

                            <p className="text-lg leading-relaxed text-muted-foreground">
                                I enjoy solving problems, understanding systems deeply, and building products that actually help people.
                                Technology excites me because it's where <span className="text-blue-400 font-semibold">creativity meets logic</span> —
                                where ideas turn into reality.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Highlights Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <TiltCard className="h-full">
                                <div className="text-blue-500 mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </TiltCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
