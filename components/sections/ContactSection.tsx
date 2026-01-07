"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../animations/ScrollReveal";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/sargarapremrajesh@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    _subject: `New Portfolio Message: ${formData.subject}`, // Custom subject for your inbox
                })
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setSubmitStatus("idle"), 5000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error("FAILED...", error);
            alert("Something went wrong. Please try again later.");
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            value: "sargarapremrajesh@gmail.com",
            link: "mailto:sargarapremrajesh@gmail.com",
            gradient: "from-blue-600 to-cyan-600",
        },
        {
            icon: <Github className="w-6 h-6" />,
            title: "GitHub",
            value: "@PREMRAJESH",
            link: "https://github.com/PREMRAJESH",
            gradient: "from-purple-600 to-pink-600",
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            title: "LinkedIn",
            value: "Prem Sargara",
            link: "https://www.linkedin.com/in/gecdhd-comp-prem-sargara/",
            gradient: "from-cyan-600 to-blue-600",
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Location",
            value: "Dahod, Gujarat, India",
            link: null,
            gradient: "from-green-600 to-teal-600",
        },
    ];

    return (
        <section id="contact" className="section-padding relative bg-gradient-to-b from-blue-950/10 to-transparent">
            <div className="container-custom">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Get In <span className="gradient-text-blue">Touch</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-6" />
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Looking for opportunities, collaborations, or just want to say hi?
                            I'd love to hear from you!
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Methods */}
                    <ScrollReveal direction="left">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>

                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={index}
                                    href={method.link || undefined}
                                    target={method.link ? "_blank" : undefined}
                                    rel={method.link ? "noopener noreferrer" : undefined}
                                    className={`glass rounded-2xl p-6 flex items-center gap-4 group ${method.link ? 'cursor-pointer hover:bg-white/5' : 'cursor-default'} transition-colors`}
                                    whileHover={method.link ? { x: 10 } : {}}
                                >
                                    <div className={`p-3 rounded-lg bg-gradient-to-br ${method.gradient} group-hover:scale-110 transition-transform`}>
                                        <div className="text-white">{method.icon}</div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">{method.title}</p>
                                        <p className="font-semibold">{method.value}</p>
                                    </div>
                                </motion.a>
                            ))}

                            <div className="glass rounded-2xl p-6 mt-8">
                                <h4 className="font-semibold mb-2">Current Status</h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-muted-foreground">Available for internships and opportunities</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Contact Form */}
                    <ScrollReveal direction="right" delay={0.2}>
                        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none resize-none transition-colors"
                                        placeholder="Your message..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {submitStatus === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-center"
                                    >
                                        Message sent successfully! I'll get back to you soon.
                                    </motion.div>
                                )}
                            </div>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
