"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
    children: ReactNode;
    className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
    return (
        <motion.div
            className={`glass rounded-2xl p-6 card-3d ${className}`}
            whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.3 },
            }}
            style={{
                transformStyle: "preserve-3d",
            }}
        >
            {children}
        </motion.div>
    );
}
