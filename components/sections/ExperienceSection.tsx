"use client";

import { Award, Briefcase, GraduationCap, Trophy } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";

export default function ExperienceSection() {
    const experiences = [
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Web Development Intern",
            organization: "BrainyBeam Technologies",
            period: "Internship",
            description: "Built responsive web applications, improved UI experience, fixed bugs, and collaborated with the team to deliver features.",
            color: "bg-blue-600",
        },
        {
            icon: <GraduationCap className="w-6 h-6" />,
            title: "B.E. in Computer Engineering",
            organization: "Government Engineering College, Dahod",
            period: "Aug 2023 - Present",
            description: "Currently in 5th Semester. Worked on various Web Development and Machine Learning projects.",
            color: "bg-cyan-600",
        },
        {
            icon: <GraduationCap className="w-6 h-6" />,
            title: "Diploma in Computer Engineering",
            organization: "Government Polytechnic College, Dahod",
            period: "Sept 2020 - June 2023",
            description: "GPA: 8.33/10. Built strong foundation in CS fundamentals including Data Structures, DBMS, and Operating Systems.",
            color: "bg-purple-600",
        },
    ];

    const achievements = [
        "🏆 Strong Problem Solving Skills",
        "📜 Certified in Web Development",
        "🎯 Building Real-world AI & Web Projects",
        "⭐ Active Open Source Contributor",
        "📚 Continuous Learner in Tech",
    ];

    return (
        <section id="experience" className="section-padding relative bg-gradient-to-b from-blue-950/10 to-transparent">
            <div className="container-custom">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Experience & <span className="gradient-text-blue">Achievements</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-6" />
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            My journey in tech - learning, building, and growing
                        </p>
                    </div>
                </ScrollReveal>

                {/* Timeline */}
                {/* Timeline */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-600 to-purple-600" />

                        {experiences.map((exp, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="relative mb-12">
                                    <div className="flex items-start gap-6">
                                        {/* Timeline dot */}
                                        <div className="absolute left-8 -translate-x-1/2 z-10">
                                            <div className={`${exp.color} p-3 rounded-full shadow-lg`}>
                                                <div className="text-white">{exp.icon}</div>
                                            </div>
                                        </div>

                                        {/* Content card */}
                                        <div className="glass rounded-2xl p-6 ml-20 group hover:bg-white/5 transition-colors w-full">
                                            <span className="text-sm text-blue-400 font-semibold">{exp.period}</span>
                                            <h3 className="text-2xl font-bold mt-2 mb-1">{exp.title}</h3>
                                            <p className="text-cyan-400 font-medium mb-3">{exp.organization}</p>
                                            <p className="text-muted-foreground">{exp.description}</p>

                                            {/* Hover glow */}
                                            <div className={`absolute -inset-1 ${exp.color} opacity-0 group-hover:opacity-20 blur-xl -z-10 rounded-2xl transition-opacity`} />
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* Achievements Grid */}
                <ScrollReveal delay={0.3}>
                    <div className="glass rounded-3xl p-8">
                        <h3 className="text-2xl font-bold mb-6 text-center">Notable Achievements</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                                >
                                    <span className="text-2xl group-hover:scale-125 transition-transform">
                                        {achievement.split(" ")[0]}
                                    </span>
                                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                        {achievement.split(" ").slice(1).join(" ")}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
