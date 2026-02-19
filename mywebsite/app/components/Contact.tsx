"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const budgetOptions = [
    "Select a budget",
    "Less than $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
];

export default function Contact() {
    const [budget, setBudget] = useState("Select a budget");
    const [budgetOpen, setBudgetOpen] = useState(false);

    return (
        <section id="contact-form" className="bg-white py-28 px-6">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-20 lg:grid-cols-2">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-between"
                    >
                        <div>
                            <span className="text-sm font-medium text-muted-foreground">
                                Book a call
                            </span>
                            <h2 className="mt-4 text-5xl font-md tracking-tight text-foreground md:text-6xl">
                                Let&apos;s Collaborate
                            </h2>
                            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                                Reach out and let&apos;s explore how we can bring your ideas to
                                life. Whether you&apos;re ready to begin or just have questions.
                            </p>
                        </div>

                        <div className="mt-16">
                            <p className="text-2xl font-semibold text-foreground">
                                +91 93923 53177
                            </p>
                            <p className="mt-2 text-2xl font-semibold text-foreground">
                                [EMAIL_ADDRESS]
                            </p>
                            <p className="mt-4 max-w-xs text-base text-muted-foreground leading-relaxed">
                                Reach out to us via email or give us a call, we are happy to
                                assist you!
                            </p>

                            {/* Social Links */}
                            <div className="mt-10 flex flex-col gap-3">
                                <a
                                    href="#"
                                    className="group flex items-center gap-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                                >
                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    Instagram
                                </a>
                                <a
                                    href="#"
                                    className="group flex items-center gap-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                                >
                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col gap-5"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        {/* Name */}
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full rounded-2xl border border-gray-200 bg-[#F9FAFB] px-6 py-4 text-base text-foreground outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                        />

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-2xl border border-gray-200 bg-[#F9FAFB] px-6 py-4 text-base text-foreground outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                        />

                        {/* Company + Phone Row */}
                        <div className="grid grid-cols-2 gap-5">
                            <input
                                type="text"
                                placeholder="Company name"
                                className="w-full rounded-2xl border border-gray-200 bg-[#F9FAFB] px-6 py-4 text-base text-foreground outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                            />
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full rounded-2xl border border-gray-200 bg-[#F9FAFB] px-6 py-4 text-base text-foreground outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                            />
                        </div>

                        {/* Budget Dropdown */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setBudgetOpen(!budgetOpen)}
                                className="flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-[#F9FAFB] px-6 py-4 text-base text-left outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                            >
                                <span
                                    className={
                                        budget === "Select a budget"
                                            ? "text-gray-400"
                                            : "text-foreground"
                                    }
                                >
                                    {budget}
                                </span>
                                <ChevronDown
                                    className={`h-5 w-5 text-gray-400 transition-transform ${budgetOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            {budgetOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute left-0 right-0 top-full z-20 mt-2 rounded-2xl border border-gray-100 bg-white py-2 shadow-xl"
                                >
                                    {budgetOptions.map((opt) => (
                                        <button
                                            key={opt}
                                            type="button"
                                            onClick={() => {
                                                setBudget(opt);
                                                setBudgetOpen(false);
                                            }}
                                            className={`w-full px-6 py-3 text-left text-sm transition-colors hover:bg-gray-50 ${budget === opt
                                                ? "font-semibold text-primary"
                                                : "text-foreground"
                                                }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        {/* Message Textarea */}
                        <textarea
                            placeholder="What can we help you with?"
                            rows={5}
                            className="w-full resize-none rounded-2xl border border-gray-200 bg-[#F9FAFB] px-6 py-4 text-base text-foreground outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                        />

                        {/* Submit */}
                        <button
                            type="submit"
                            className="mt-2 w-full rounded-2xl bg-[#111827] py-5 text-lg font-semibold text-white transition-all hover:bg-[#1F2937] hover:shadow-xl active:scale-[0.98]"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
