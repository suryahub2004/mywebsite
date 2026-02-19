"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight, Video } from "lucide-react";

export default function Hero() {
    return (
        <section className="grid-background relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20">
            {/* Background radial gradient for focus */}
            <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-white/20 via-transparent to-transparent opacity-50" />

            {/* Status Pill */}
            {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2 text-sm font-medium pill-shadow"
            >
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-muted-foreground">Only 2 open slots available!</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </motion.div> */}

            {/* Main Headline */}
            <div className="relative z-10 mx-auto max-w-5xl text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl leading-[1.2] tracking-tight text-black md:text-4xl lg:text-[4rem]"
                >
                    <span className="inline items-baseline">
                        Building Scalable Digital{" "}
                        {/* 3D Box Icon */}
                        <span className="inline-flex h-8 w-8 -rotate-6 items-center justify-center rounded-lg bg-white shadow-md md:h-11 md:w-11 align-middle">
                            <svg viewBox="0 0 24 24" className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                <line x1="12" y1="22.08" x2="12" y2="12" />
                            </svg>
                        </span>{" "}
                        {/* Figma Icon */}
                        <span className="inline-flex h-8 w-8 rotate-3 items-center justify-center rounded-lg bg-white shadow-md md:h-11 md:w-11 align-middle">
                            <svg viewBox="0 0 38 57" className="h-5 w-5 md:h-6 md:w-6">
                                <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
                                <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
                                <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
                                <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
                                <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
                            </svg>
                        </span>
                    </span>
                    <br />
                    <span className="inline items-baseline">
                        Products That Drive Real{" "}
                        {/* Lightning Bolt Icon */}
                        <span className="inline-flex h-8 w-8 -rotate-3 items-center justify-center rounded-lg bg-white shadow-md md:h-11 md:w-11 align-middle">
                            <svg viewBox="0 0 24 24" className="h-5 w-5 md:h-6 md:w-6" fill="none">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#F97316" stroke="#EA580C" strokeWidth="1" strokeLinejoin="round" />
                            </svg>
                        </span>{" "}
                        Impact
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto mt-8 max-w-2xl text-base font-normal text-muted-foreground md:text-lg"
                >
                    I help startups and growing businesses turn ideas into high-performance web applications with clean design and solid engineering.
                </motion.p>



                {/* Central CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 flex flex-col items-center gap-6"
                >
                    <a href="https://calendly.com/suryazsurya04/30min" target="_blank" rel="noopener noreferrer" className="flex h-16 items-center gap-4 rounded-full bg-[#111827] px-8 text-lg font-semibold text-white transition-all hover:scale-105 active:scale-95">
                        {/* <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary"> */}
                        {/* <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white">
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5" />
                                <path d="M2 12l10 5 10-5" />
                            </svg> */}
                        {/* </div> */}
                        Book a 30-Min call
                    </a>

                    {/* Social Proof */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                                >
                                    <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="User" className="h-full w-full object-cover" />
                                </div>
                            ))}
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-xs font-bold text-muted-foreground">
                                +30
                            </div>
                        </div>
                        <div className="text-left">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-sm font-medium text-muted-foreground">
                                From 30+ reviews
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Floating Testimonial Cards (Animated) */}
            {/* <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute left-[-5%] top-[60%] hidden w-80 rotate-[-8deg] rounded-3xl bg-white p-8 pill-shadow md:block"
            >
                <p className="text-sm italic leading-relaxed text-muted-foreground">
                    &quot;We were close to giving up. CodeDale rebuilt our confidence and delivered
                    our fintech mobile app end-to-end.&quot;
                </p>
                <div className="mt-4 flex flex-col">
                    <span className="text-sm font-bold text-foreground">- Narasimha Reddy</span>
                    <span className="text-xs text-muted-foreground">CEO, TFS</span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute right-[-5%] top-[55%] hidden w-80 rotate-[10deg] rounded-3xl bg-white p-8 pill-shadow md:block"
            >
                <p className="text-sm italic leading-relaxed text-muted-foreground">
                    &quot;CodeDale brought Fluent Pro to life: an AI-powered English learning
                    platform with personalized feedback.&quot;
                </p>
                <div className="mt-4 flex flex-col">
                    <span className="text-sm font-bold text-foreground">- Sujith Reddy Gopu</span>
                    <span className="text-xs text-muted-foreground">CEO, Fluent Pro</span>
                </div>
            </motion.div> */}
        </section >
    );
}
