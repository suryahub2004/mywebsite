"use client";

import { Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";

const tagsRow1 = [
    "Web Development",
    "App Development",
    "AI Applications",
    "Data Driven Products",
    "Blockchain Technology",
    "Cloud & DevOps",
    "UI/UX",
    "Logo Designing",
    "Web Development",
    "App Development",
    "AI Applications",
    "Data Driven Products",
    "Blockchain Technology",
    "Cloud & DevOps",
    "UI/UX",
    "Logo Designing",
];

const tagsRow2 = [
    "Rapid Prototyping and MVPs",
    "Digital Marketing & SEO",
    "Brand Strategy",
    "E-Commerce Solutions",
    "SaaS Development",
    "API Integrations",
    "Performance Optimization",
    "Rapid Prototyping and MVPs",
    "Digital Marketing & SEO",
    "Brand Strategy",
    "E-Commerce Solutions",
    "SaaS Development",
    "API Integrations",
    "Performance Optimization",
];

export default function CTA() {
    return (
        <section className="bg-[#111111] py-24 px-6 overflow-hidden">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-4xl font-md tracking-tight text-white md:text-5xl lg:text-6xl leading-tight">
                    You&apos;ve reached the end — now let&apos;s start something new!
                </h2>

                <div className="mt-12 flex justify-center">
                    <a
                        href="https://calendly.com/suryazsurya04/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#111827] transition-all hover:scale-105 hover:shadow-2xl hover:shadow-white/10 active:scale-95"
                    >
                        <Sparkles className="h-5 w-5 text-[#111827]" />
                        Let&apos;s Connect
                    </a>

                </div>
            </div>

            {/* Bottom Auto-Scroll Area */}
            <div className="mt-24 rounded-[2.5rem] border border-white/10 bg-[#1A1A1A] px-8 py-12 mx-auto max-w-6xl">
                <p className="text-center text-lg text-white/60 mb-10">
                    Trust us we are good at this :)
                </p>

                {/* Scrolling Tags Row 1 - Left to Right */}
                <div className="relative mb-6 overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10" />

                    <div className="flex w-max animate-scroll-left gap-4">
                        {tagsRow1.map((tag, i) => (
                            <div
                                key={`r1-${i}`}
                                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 whitespace-nowrap"
                            >
                                <span className="h-2 w-2 rounded-full bg-white/20" />
                                <span className="text-sm font-medium text-white/50">{tag}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Center Logo Divider */}
                <div className="flex items-center justify-center gap-6 my-4">
                    <div className="h-px flex-1 bg-white/10" />
                    <div className="rounded-2xl border border-white/15 bg-white/5 px-8 py-3 text-xl font-md text-white/80 backdrop-blur-sm">
                        SURYA
                    </div>
                    <div className="h-px flex-1 bg-white/10" />
                </div>

                {/* Scrolling Tags Row 2 - Right to Left */}
                <div className="relative mt-6 overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10" />

                    <div className="flex w-max animate-scroll-right gap-4">
                        {tagsRow2.map((tag, i) => (
                            <div
                                key={`r2-${i}`}
                                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 whitespace-nowrap"
                            >
                                <CheckCircle className="h-4 w-4 text-white/30" />
                                <span className="text-sm font-medium text-white/50">{tag}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
