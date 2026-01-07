import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out forwards",
                "slide-up": "slideUp 0.6s ease-out forwards",
                "slide-down": "slideDown 0.6s ease-out forwards",
                "glow": "glow 2s ease-in-out infinite alternate",
                "float": "float 3s ease-in-out infinite",
                "gradient": "gradient 8s linear infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideDown: {
                    "0%": { opacity: "0", transform: "translateY(-20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                glow: {
                    "0%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" },
                    "100%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.8)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                gradient: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};

export default config;
