"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, CheckCircle, Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const challenges = [
    {
        id: 1,
        problemTitle: "Outdated Digital Presence",
        problemDesc: "Outdated website or app turns away potential clients.",
        solutionTitle: "Outdated Digital Presence",
        solutionDesc: "Modern web and app designs that impress and convert.",
        type: "Problem",
        visual: "mobile-mockup",
    },
    {
        id: 2,
        problemTitle: "Lack of Technical Expertise",
        problemDesc: "Struggling with evolving tech and costly in-house teams.",
        solutionTitle: "Your Extended Tech Team",
        solutionDesc: "Direct access to senior developers who scale with you.",
        type: "Problem",
        visual: "expert-team",
    },
    {
        id: 3,
        problemTitle: "Inefficient Processes",
        problemDesc: "Manual work and outdated tools slow teams down.",
        solutionTitle: "Automated Workflows",
        solutionDesc: "Custom automation that streamlines your entire operation.",
        type: "Problem",
        visual: "tech-flow",
    },
    {
        id: 4,
        problemTitle: "Inconsistent Branding",
        problemDesc: "Brand looks different across platforms, weakening trust.",
        solutionTitle: "Unified Brand Identity",
        solutionDesc: "Cohesive design systems that build authority everywhere.",
        type: "Problem",
        visual: "branding-grid",
    },
    {
        id: 5,
        problemTitle: "Low Online Visibility",
        problemDesc: "Brand buried in search results with weak presence.",
        solutionTitle: "Top-Tier SEO & Growth",
        solutionDesc: "Be found by the right people at the absolute top of search.",
        type: "Problem",
        visual: "logo-search",
    },
    {
        id: 6,
        problemTitle: "Ever-Changing Demands",
        problemDesc: "Business evolves but rigid solutions can't keep pace.",
        solutionTitle: "Future-Proof Scaling",
        solutionDesc: "Modular architectures built to grow as your business does.",
        type: "Problem",
        visual: "tfs-project",
    },
];

export default function Challenges() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (hoveredId === 6) {
            videoRef.current?.play();
        } else {
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    }, [hoveredId]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemAnim = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="services" className="grid-background relative bg-[#F9FAFB] py-32 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="mb-24 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-md tracking-tight text-foreground md:text-4xl lg:text-5xl"
                    >
                        The Challenges Modern
                        <br />
                        Business Face
                    </motion.h2>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {challenges.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemAnim}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="group relative flex flex-col overflow-hidden rounded-[3.5rem] bg-white p-5 border border-transparent transition-all duration-500 hover:card-shadow hover:border-gray-100"
                        >
                            {/* Visual Top Area */}
                            <div className="relative mb-10 flex h-80 items-center justify-center overflow-hidden rounded-[2.8rem] bg-[#F3F4F6]/50">

                                {/* Visual 1: Mobile Mockup */}
                                {item.id === 1 && (
                                    <div className="relative flex h-full w-full items-center justify-center">
                                        <AnimatePresence mode="wait">
                                            {hoveredId === 1 ? (
                                                <motion.div
                                                    key="stacked"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 1.1 }}
                                                    className="flex h-full w-full items-center justify-center gap-2 p-6"
                                                >
                                                    <img src="https://cdn.dribbble.com/userupload/46594743/file/c9922f470bb55b2facff0f6f3f5516a0.png?resize=2048x1536&vertical=center" className="h-4/5 w-1/3 rounded-2xl object-cover shadow-lg rotate-[-12deg]" alt="UI" />
                                                    <img src="https://cdn.dribbble.com/userupload/46653199/file/b9329155142cbc632add8340f667da10.png?resize=2048x1536&vertical=center" className="h-[90%] w-1/3 z-10 rounded-2xl object-cover shadow-2xl" alt="UI" />
                                                    <img src="https://cdn.dribbble.com/userupload/15261541/file/original-f0bb99d39b5d48f91c530d7f0e5e6fae.png?resize=1504x1128&vertical=center" className="h-4/5 w-1/3 rounded-2xl object-cover shadow-lg rotate-[12deg]" alt="UI" />
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="single"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="h-4/5 w-1/2 rounded-[2.5rem] bg-white p-3 shadow-xl"
                                                >
                                                    <img src="https://cdn.dribbble.com/userupload/46594743/file/c9922f470bb55b2facff0f6f3f5516a0.png?resize=2048x1536&vertical=center" className="h-full w-full rounded-[2rem] object-cover" alt="Single UI" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )}

                                {/* Visual 2: Expert Team */}
                                {item.id === 2 && (
                                    <div className="relative flex h-full w-full flex-col items-center justify-center p-8">
                                        <motion.div
                                            animate={{ scale: hoveredId === 2 ? 0.8 : 1, y: hoveredId === 2 ? -20 : 0 }}
                                            className="text-2xl font-bold text-gray-800"
                                        >
                                            Our Expert Team
                                        </motion.div>
                                        <AnimatePresence>
                                            {hoveredId === 2 && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="absolute bottom-12 flex gap-3"
                                                >
                                                    {[1, 2, 3, 4, 5].map(i => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            transition={{ delay: i * 0.05 }}
                                                            className="h-10 w-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center overflow-hidden shadow-md"
                                                        >
                                                            <img src={`https://i.pravatar.cc/150?u=team${i}`} className="h-full w-full object-cover" alt="Team" />
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )}

                                {/* Visual 3: Auto-scroll tech list */}
                                {item.id === 3 && (
                                    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                                        {/* Top/Bottom fade gradients */}
                                        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-[#F3F4F6]/90 to-transparent" />
                                        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#F3F4F6]/90 to-transparent" />

                                        <motion.div
                                            animate={{
                                                y: hoveredId === 3 ? [0, -280] : 0,
                                            }}
                                            transition={{
                                                y: {
                                                    duration: 8,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                },
                                            }}
                                            className="flex flex-col items-center gap-6"
                                        >
                                            {[
                                                "GitHub Actions",
                                                "PostgreSQL",
                                                "Docker",
                                                "Redis",
                                                "Kubernetes",
                                                "AWS",
                                                "GraphQL",
                                                "Terraform",
                                                "GitHub Actions",
                                                "PostgreSQL",
                                                "Docker",
                                                "Redis",
                                                "Kubernetes",
                                                "AWS",
                                                "GraphQL",
                                                "Terraform",
                                            ].map((tech, i) => {
                                                const isCenter = i % 8 === 2;
                                                return (
                                                    <span
                                                        key={`${tech}-${i}`}
                                                        className="whitespace-nowrap text-center font-bold transition-all duration-300"
                                                        style={{
                                                            fontSize: isCenter ? "1.75rem" : i % 8 === 1 || i % 8 === 3 ? "1.25rem" : "0.9rem",
                                                            opacity: isCenter ? 0.9 : i % 8 === 1 || i % 8 === 3 ? 0.4 : 0.15,
                                                            filter: isCenter ? "blur(0px)" : i % 8 === 1 || i % 8 === 3 ? "blur(1px)" : "blur(2.5px)",
                                                            color: isCenter ? "#1a1a2e" : "#6B7280",
                                                        }}
                                                    >
                                                        {tech}
                                                    </span>
                                                );
                                            })}
                                        </motion.div>
                                    </div>
                                )}


                                {/* Visual 4: Branding Grid */}
                                {item.id === 4 && (
                                    <div className="grid h-full w-full grid-cols-2 gap-2 p-6 transition-colors duration-500 group-hover:bg-gray-900">
                                        <motion.div
                                            animate={{
                                                backgroundColor: hoveredId === 4 ? "#0066FF" : "#000000ff",
                                                scale: hoveredId === 4 ? 1.05 : 1
                                            }}
                                            className="rounded-2xl p-4 flex flex-col justify-end"
                                        >
                                            <span className="text-[10px] font-bold text-white uppercase opacity-40">Identity</span>
                                            <span className="text-lg font-black text-white leading-none mt-1">Design System</span>
                                        </motion.div>
                                        <div className="grid grid-cols-2 grid-rows-2 gap-2">
                                            <motion.div animate={{ backgroundColor: hoveredId === 4 ? "#3B82F6" : "#000000ff" }} className="rounded-xl" />
                                            <motion.div animate={{ rotate: hoveredId === 4 ? 90 : 0 }} className="bg-white rounded-xl shadow-sm" />
                                            <motion.div animate={{ scale: hoveredId === 4 ? 0.5 : 1 }} className="bg-zinc-800 rounded-xl" />
                                            <motion.div animate={{ backgroundColor: hoveredId === 4 ? "#0066FF" : "#000000ff" }} className="rounded-xl" />
                                        </div>
                                        <motion.div
                                            animate={{ opacity: hoveredId === 4 ? 1 : 0.2 }}
                                            className="bg-zinc-100 rounded-2xl flex items-center justify-center"
                                        >
                                            <div className="h-8 w-8 rounded-full bg-blue-600" />
                                        </motion.div>
                                        <motion.div
                                            animate={{ borderRadius: hoveredId === 4 ? "50%" : "1rem" }}
                                            className="bg-blue-100 overflow-hidden"
                                        >
                                            <img src="https://cdn.dribbble.com/userupload/46532756/file/17f0b792afd8228b4479c5ced9f2146d.png?resize=2048x1638&vertical=center" className="h-full w-full object-cover" alt="Branding" />
                                        </motion.div>
                                    </div>
                                )}

                                {/* Visual 5: Search / SEO */}
                                {item.id === 5 && (
                                    <div className="relative flex h-full w-full flex-col items-center justify-center p-8">
                                        <div className="relative z-10 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl border border-gray-50">
                                            <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center">
                                                <Globe className="h-6 w-6 text-white" />
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="h-2 w-24 rounded bg-gray-100" />
                                                <div className="h-2 w-16 rounded bg-gray-50 mt-2" />
                                            </div>
                                        </div>
                                        <AnimatePresence>
                                            {hoveredId === 5 && (
                                                <div className="absolute inset-x-8 top-12 flex flex-col gap-3">
                                                    {[1, 2, 3].map(i => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: i * 0.1 }}
                                                            className="h-12 w-full rounded-xl bg-green-50/50 border border-green-100 flex items-center px-4"
                                                        >
                                                            <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                                                            <div className="h-2 w-1/2 rounded bg-green-200/50" />
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )}

                                {/* Visual 6: Video on hover */}
                                {item.id === 6 && (
                                    <div className="relative h-full w-full overflow-hidden rounded-[2.8rem]">
                                        <video
                                            ref={videoRef}
                                            src="https://cdn.dribbble.com/userupload/42727869/file/original-86dbd5964c5d65bf3957349b5959ceef.mp4"
                                            muted
                                            loop
                                            playsInline
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        {/* Play icon overlay when not hovered */}
                                        <motion.div
                                            animate={{ opacity: hoveredId === 6 ? 0 : 1 }}
                                            className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity"
                                        >
                                            {/* <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur">
                                                <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="#111827">
                                                    <polygon points="5,3 19,12 5,21" />
                                                </svg>
                                            </div> */}
                                        </motion.div>
                                    </div>
                                )}
                            </div>

                            {/* Text Area */}
                            <div className="px-3 pb-4">
                                <motion.span
                                    animate={{
                                        backgroundColor: hoveredId === item.id ? "#DCFCE7" : "#FEE2E2",
                                        color: hoveredId === item.id ? "#166534" : "#991B1B"
                                    }}
                                    className="inline-block rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider"
                                >
                                    {hoveredId === item.id ? "Solution" : item.type}
                                </motion.span>

                                <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground">
                                    {hoveredId === item.id ? item.solutionTitle : item.problemTitle}
                                </h3>

                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={hoveredId === item.id ? "solutionText" : "problemText"}
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        className="mt-4 text-lg leading-relaxed text-muted-foreground"
                                    >
                                        {hoveredId === item.id ? item.solutionDesc : item.problemDesc}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
