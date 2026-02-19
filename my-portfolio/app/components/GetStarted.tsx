"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Users, Rocket, MessageCircle, FileText, Code, CheckCircle, ArrowRight, Send } from "lucide-react";
import { useState } from "react";

const steps = [
    {
        id: 1,
        step: "Step 1",
        title: "Share Your Vision",
        description:
            "Tell us about your goals and project requirements—just reach out for a free consultation.",
    },
    {
        id: 2,
        step: "Step 2",
        title: "Collaborate on a Solution",
        description:
            "We work together to define the scope and strategy. You review and approve the plan before we begin.",
    },
    {
        id: 3,
        step: "Step 3",
        title: "Watch Your Idea Come to Life",
        description:
            "Our expert team gets to work, keeping you in the loop with consistent updates. Most projects are delivered promptly, ready for launch!",
    },
];

/* ─── Step 1 Preview: "Share Your Vision" ─── */
function Step1Preview() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center"
        >
            {/* Icon */}


            <h3 className="mb-8 text-2xl font-semibold text-foreground">Share Your Vision</h3>

            {/* Dark Card */}
            <div className="relative w-80 h-100 rounded-[2.5rem] bg-[#111827] p-8 shadow-2xl overflow-hidden">
                <div className="absolute top-[-20%] right-[-20%] h-48 w-48 rounded-full bg-amber-500/5 blur-3xl" />

                {/* Loader Icon */}
                <div className="flex justify-center mb-6">
                    <div className="relative h-20 w-20">
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute inset-0"
                                style={{ transform: `rotate(${i * 45}deg)` }}
                            >
                                <div
                                    className="mx-auto h-5 w-1.5 rounded-full bg-white/25"
                                    style={{ animationDelay: `${i * 0.12}s`, animation: "pulse 1.2s ease-in-out infinite" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <h4 className="text-center text-3xl font-bold text-white leading-tight mb-10">
                    Tell us the<br />Goal
                </h4>

                <button className="w-full rounded-2xl bg-white/10 py-4 mt-20 text-lg font-semibold text-white backdrop-blur border border-white/10 hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                    <MessageCircle className="h-5 w-5" />
                    Free Discovery Call
                </button>
            </div>
        </motion.div>
    );
}

/* ─── Step 2 Preview: "Collaborate on a Solution" ─── */
function Step2Preview() {
    const milestones = ["Discovery & Research", "Architecture Design", "UX Wireframes", "Dev Roadmap"];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center"
        >
            {/* Icon */}


            <h3 className="mb-8 text-2xl font-semibold text-foreground">Define the Strategy</h3>

            {/* Blue Gradient Card */}
            <div className="relative w-80 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-8 shadow-2xl overflow-hidden">
                <div className="absolute bottom-[-10%] left-[-10%] h-40 w-40 rounded-full bg-white/10 blur-3xl" />

                {/* Document icon */}
                <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center">
                        <FileText className="h-8 w-8 text-white" />
                    </div>
                </div>

                {/* Milestones */}
                <div className="space-y-3 mb-8">
                    {milestones.map((m, i) => (
                        <motion.div
                            key={m}
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 + i * 0.12 }}
                            className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur border border-white/5"
                        >
                            <CheckCircle className="h-4 w-4 text-green-300 flex-shrink-0" />
                            <span className="text-sm font-medium text-white/90">{m}</span>
                        </motion.div>
                    ))}
                </div>

                <button className="w-full rounded-2xl bg-white py-4 text-lg font-semibold text-blue-700 hover:bg-blue-50 transition-all flex items-center justify-center gap-3">
                    <ArrowRight className="h-5 w-5" />
                    Approve the Plan
                </button>
            </div>
        </motion.div>
    );
}

/* ─── Step 3 Preview: "Watch Your Idea Come to Life" ─── */
function Step3Preview() {
    const progressItems = [
        { label: "Backend API", pct: 100 },
        { label: "Frontend UI", pct: 85 },
        { label: "Testing & QA", pct: 60 },
        { label: "Launch", pct: 30 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center"
        >
            {/* Icon */}


            <h3 className="mb-8 text-2xl font-semibold text-foreground">Building &amp; Launching</h3>

            {/* Green Gradient Card */}
            <div className="relative w-80 rounded-[2.5rem] bg-gradient-to-br from-emerald-600 to-green-700 p-8 shadow-2xl overflow-hidden">
                <div className="absolute top-[-15%] right-[-15%] h-40 w-40 rounded-full bg-lime-400/10 blur-3xl" />

                {/* Terminal-style header */}
                <div className="flex items-center gap-2 mb-6">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-300" />
                    <span className="ml-3 text-xs font-mono text-white/40">project-tracker</span>
                </div>

                {/* Progress bars */}
                <div className="space-y-4 mb-8">
                    {progressItems.map((item, i) => (
                        <div key={item.label}>
                            <div className="flex justify-between mb-1.5">
                                <span className="text-sm font-medium text-white/80">{item.label}</span>
                                <span className="text-xs font-mono text-white/40">{item.pct}%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${item.pct}%` }}
                                    transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
                                    className="h-full rounded-full bg-white/60"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <button className="w-full rounded-2xl bg-white py-4 text-lg font-semibold text-green-700 hover:bg-green-50 transition-all flex items-center justify-center gap-3">
                    <Send className="h-5 w-5" />
                    Ready for Launch
                </button>
            </div>
        </motion.div>
    );
}

const previewComponents = [Step1Preview, Step2Preview, Step3Preview];

export default function GetStarted() {
    const [activeStep, setActiveStep] = useState(1);

    const ActivePreview = previewComponents[activeStep - 1];

    return (
        <section id="contact" className="bg-[#F9FAFB] py-28 px-6 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl font-md tracking-tight text-foreground md:text-5xl">
                        How to Get Started with CodeDale
                    </h2>
                    <p className="mt-4 text-lg font-normal text-muted-foreground max-w-2xl mx-auto">
                        Just step away from those traditional old methods of hiring{" "}
                        <span className="italic">plus managing</span> and see for yourself
                    </p>
                </div>

                <div className="grid gap-16 lg:grid-cols-2 items-center">
                    {/* Left Side: Dynamic Preview */}
                    <div className="relative flex justify-center min-h-[620px] items-start pt-4">
                        <AnimatePresence mode="wait">
                            <ActivePreview key={activeStep} />
                        </AnimatePresence>
                    </div>

                    {/* Right Side: Step Selection */}
                    <div className="flex flex-col gap-4">
                        {steps.map((item) => (
                            <motion.div
                                key={item.id}
                                onMouseEnter={() => setActiveStep(item.id)}
                                className={`cursor-pointer rounded-[2rem] p-8 transition-all duration-400 border ${activeStep === item.id
                                    ? "bg-white card-shadow border-gray-100"
                                    : "border-transparent hover:bg-white/50"
                                    }`}
                            >
                                <span
                                    className={`text-xl font-bold transition-colors ${activeStep === item.id ? "text-foreground" : "text-gray-300"
                                        }`}
                                >
                                    {item.step}
                                </span>

                                <h3
                                    className={`mt-3 text-xl font-bold transition-colors ${activeStep === item.id ? "text-foreground" : "text-gray-400"
                                        }`}
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className={`mt-2 text-base leading-relaxed transition-colors ${activeStep === item.id ? "text-muted-foreground" : "text-gray-300"
                                        }`}
                                >
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
