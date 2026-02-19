"use client";

import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#work" },
    { name: "Achievements", href: "#achievements" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
            <div className="flex w-full max-w-7xl items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    {/* <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white"> */}
                    {/* <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
                        </svg> */}

                    {/* <span className="text-2xl font-bold tracking-tight text-primary"></span> */}
                </div>

                {/* Floating Nav Links */}
                <div className={`hidden items-center gap-1 rounded-full border border-white/40 bg-white/70 px-6 py-3 backdrop-blur-md transition-all duration-300 md:flex ${scrolled ? 'pill-shadow border-white/80 py-2' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <a href="https://calendly.com/suryazsurya04/30min" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 rounded-full bg-[#111827] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-black hover:pr-5">
                    Book a Call
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:rotate-45">
                        <MoveUpRight className="h-3 w-3" />
                    </span>
                </a>
            </div>
        </nav >
    );
}
