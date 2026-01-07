import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import GoalsSection from "@/components/sections/GoalsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ParticleBackground from "@/components/effects/ParticleBackground";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Background Effects */}
            <ParticleBackground />

            {/* Navigation */}
            <Navigation />

            {/* Scroll Progress */}
            <ScrollProgress />

            {/* Sections */}
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <GoalsSection />
            <ContactSection />

            {/* Footer */}
            <Footer />
        </main>
    );
}
