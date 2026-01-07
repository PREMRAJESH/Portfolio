"use client";

import { Target, Rocket, Code2, Briefcase, Globe, TrendingUp } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import TiltCard from "../ui/TiltCard";

export default function GoalsSection() {
    const goals = [
        {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Industry-Ready Engineer",
            description: "Become a strong, industry-ready engineer capable of tackling real-world challenges at scale",
            gradient: "from-blue-600 to-cyan-600",
        },
        {
            icon: <Code2 className="w-8 h-8" />,
            title: "GSoC 2026",
            description: "Crack Google Summer of Code 2026 and contribute to meaningful open-source projects.",
            gradient: "from-purple-600 to-pink-600",
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Real-World Projects",
            description: "Build meaningful professional-level projects that showcase real engineering thinking.",
            gradient: "from-cyan-600 to-blue-600",
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Top Placements",
            description: "Achieve top placement opportunities in leading tech companies and innovative startups.",
            gradient: "from-orange-600 to-red-600",
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Scalable Systems",
            description: "Develop scalable & intelligent systems that solve real problems.",
            gradient: "from-green-600 to-teal-600",
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Continuous Learning",
            description: "Keep learning AI, Web, Cloud, and cutting-edge technologies.",
            gradient: "from-pink-600 to-purple-600",
        },
    ];

    return (
        <section id="goals" className="section-padding relative">
            <div className="container-custom">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Goals & <span className="gradient-text-blue">Vision</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-6" />
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Driven by ambition and passion for technology. Here's what I'm working towards.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Goals Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {goals.map((goal, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <TiltCard className="h-full group relative overflow-hidden">
                                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${goal.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                                    <div className="text-white">{goal.icon}</div>
                                </div>

                                <h3 className="text-xl font-bold mb-3">{goal.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{goal.description}</p>

                                {/* Hover glow effect */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${goal.gradient} opacity-0 group-hover:opacity-10 transition-opacity blur-xl -z-10`} />
                            </TiltCard>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Vision Statement */}
                <ScrollReveal delay={0.6}>
                    <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-6 text-center">
                                My <span className="gradient-text-blue">Vision</span>
                            </h3>
                            <div className="space-y-4 text-lg text-muted-foreground max-w-4xl mx-auto text-center">
                                <p className="leading-relaxed">
                                    I want to <span className="text-foreground font-semibold">build a strong developer identity</span> and
                                    portfolio that truly represents me — not just as someone who knows how to code, but as someone who
                                    understands systems, solves problems creatively, and delivers real value.
                                </p>
                                <p className="leading-relaxed">
                                    Technology inspires me because it's where <span className="text-blue-400 font-semibold">creativity meets logic</span>,
                                    ideas become reality, and one person's code can impact millions.
                                </p>
                                <p className="leading-relaxed text-2xl font-bold text-foreground mt-8">
                                    Not just building software — building the future. 🚀
                                </p>
                            </div>
                        </div>

                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
