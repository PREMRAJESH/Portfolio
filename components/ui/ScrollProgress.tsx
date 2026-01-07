"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / scrollHeight) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener("scroll", updateScrollProgress);
        return () => window.removeEventListener("scroll", updateScrollProgress);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 z-50 origin-left"
            style={{ scaleX: scrollProgress / 100 }}
            initial={{ scaleX: 0 }}
        />
    );
}
