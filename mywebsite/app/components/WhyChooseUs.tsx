"use client";

import { motion } from "framer-motion";

/* ─── Custom SVG Icon Components matching the reference style ─── */

function ImpactIcon() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Globe */}
            <circle cx="36" cy="42" r="20" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2" />
            <ellipse cx="36" cy="42" rx="10" ry="20" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <line x1="16" y1="42" x2="56" y2="42" stroke="#2563EB" strokeWidth="1.5" />
            <line x1="36" y1="22" x2="36" y2="62" stroke="#2563EB" strokeWidth="1.5" />
            {/* Chat bubbles */}
            <rect x="48" y="10" rx="6" width="24" height="16" fill="#1E3A5F" />
            <circle cx="55" cy="18" r="1.5" fill="white" />
            <circle cx="60" cy="18" r="1.5" fill="white" />
            <circle cx="65" cy="18" r="1.5" fill="white" />
            <polygon points="50,26 54,26 50,32" fill="#1E3A5F" />
            {/* Dollar bubble */}
            <circle cx="18" cy="20" r="10" fill="#1E3A5F" />
            <text x="18" y="24" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">$</text>
        </svg>
    );
}

function DeliveryIcon() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Person body */}
            <circle cx="40" cy="28" r="8" fill="#1E3A5F" />
            <path d="M28 52 C28 40 52 40 52 52" fill="#2563EB" />
            {/* Arms raised holding clock */}
            <line x1="30" y1="46" x2="22" y2="30" stroke="#1E3A5F" strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="46" x2="58" y2="30" stroke="#1E3A5F" strokeWidth="3" strokeLinecap="round" />
            {/* Clock */}
            <circle cx="40" cy="16" r="12" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2" />
            <line x1="40" y1="16" x2="40" y2="10" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
            <line x1="40" y1="16" x2="46" y2="16" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
            <circle cx="40" cy="16" r="1.5" fill="#1E3A5F" />
            {/* Stars */}
            <circle cx="18" cy="18" r="2" fill="#2563EB" />
            <circle cx="62" cy="18" r="2" fill="#2563EB" />
            <circle cx="14" cy="26" r="1.5" fill="#93C5FD" />
            <circle cx="66" cy="26" r="1.5" fill="#93C5FD" />
        </svg>
    );
}

function PricingIcon() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Money bag */}
            <path d="M25 35 C25 25 55 25 55 35 L58 60 C58 65 22 65 22 60 Z" fill="#2563EB" />
            <ellipse cx="40" cy="62" rx="18" ry="4" fill="#1E40AF" />
            {/* Bag tie */}
            <path d="M32 28 Q40 20 48 28" stroke="#1E3A5F" strokeWidth="3" fill="none" strokeLinecap="round" />
            <rect x="34" y="25" rx="2" width="12" height="6" fill="#1E3A5F" />
            {/* Dollar sign */}
            <circle cx="40" cy="46" r="10" fill="#DBEAFE" />
            <text x="40" y="51" textAnchor="middle" fill="#2563EB" fontSize="14" fontWeight="bold">$</text>
            {/* Clock on top */}
            <circle cx="56" cy="18" r="9" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" />
            <line x1="56" y1="18" x2="56" y2="13" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="56" y1="18" x2="60" y2="18" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

function ProblemSolversIcon() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Person silhouette */}
            <circle cx="28" cy="42" r="8" fill="#1E3A5F" />
            <path d="M16 62 C16 52 40 52 40 62" fill="#1E3A5F" />
            {/* Chat bubble with gears */}
            <rect x="38" y="14" rx="8" width="34" height="28" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" />
            <polygon points="42,42 48,42 42,50" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />
            {/* Lines in chat */}
            <line x1="46" y1="24" x2="64" y2="24" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
            <line x1="46" y1="30" x2="60" y2="30" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
            <line x1="46" y1="36" x2="56" y2="36" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
            {/* Small gear */}
            <circle cx="18" cy="24" r="6" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" />
            <circle cx="18" cy="24" r="2" fill="#2563EB" />
        </svg>
    );
}

function CollaborationIcon() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Puzzle piece 1 */}
            <rect x="12" y="12" rx="4" width="28" height="28" fill="#1E3A5F" />
            <circle cx="40" cy="26" r="6" fill="#1E3A5F" />
            <circle cx="26" cy="40" r="6" fill="#1E3A5F" />
            {/* Puzzle piece 2 */}
            <rect x="40" y="40" rx="4" width="28" height="28" fill="#2563EB" />
            <circle cx="40" cy="54" r="6" fill="#2563EB" />
            <circle cx="54" cy="40" r="6" fill="#2563EB" />
            {/* Connection nodes */}
            <circle cx="40" cy="40" r="4" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2" />
            {/* Decorative dots */}
            <circle cx="60" cy="20" r="3" fill="#DBEAFE" />
            <circle cx="20" cy="60" r="3" fill="#DBEAFE" />
            {/* Arrow lines */}
            <line x1="46" y1="18" x2="56" y2="18" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
            <line x1="18" y1="50" x2="18" y2="56" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function TalentIcon() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Target */}
            <circle cx="34" cy="40" r="22" fill="none" stroke="#DBEAFE" strokeWidth="3" />
            <circle cx="34" cy="40" r="15" fill="none" stroke="#93C5FD" strokeWidth="2" />
            <circle cx="34" cy="40" r="8" fill="#2563EB" />
            <circle cx="34" cy="40" r="3" fill="white" />
            {/* Arrows hitting target */}
            <line x1="56" y1="18" x2="40" y2="34" stroke="#1E3A5F" strokeWidth="2.5" strokeLinecap="round" />
            {/* Arrow head */}
            <polygon points="40,34 44,28 46,36" fill="#1E3A5F" />
            {/* Arrow feathers */}
            <line x1="56" y1="18" x2="60" y2="14" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="56" y1="18" x2="62" y2="18" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="56" y1="18" x2="56" y2="12" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
            {/* Sparkles */}
            <circle cx="64" cy="30" r="2" fill="#93C5FD" />
            <circle cx="58" cy="10" r="1.5" fill="#DBEAFE" />
        </svg>
    );
}

const features = [
    {
        title: "Impact-Driven Solutions",
        description:
            "Every product we build is custom-crafted to create real business impact.",
        icon: ImpactIcon,
    },
    {
        title: "Fast & Reliable Delivery",
        description:
            "Get high-quality results in days or weeks, not months.",
        icon: DeliveryIcon,
    },
    {
        title: "Transparent & Fair Pricing",
        description:
            "Honest, customized pricing with no hidden fees or surprises.",
        icon: PricingIcon,
    },
    {
        title: "Expert Problem Solvers",
        description:
            "We tackle technical and creative challenges with innovative solutions.",
        icon: ProblemSolversIcon,
    },
    {
        title: "Seamless Collaboration",
        description:
            "Clear communication and feedback at every stage of the project.",
        icon: CollaborationIcon,
    },
    {
        title: "Direct Access to Top Talent",
        description:
            "Work directly with senior experts—no long-term hiring needed.",
        icon: TalentIcon,
    },
];

export default function WhyChooseUs() {
    return (
        <section id="achievements" className="bg-[#F9FAFB] py-28 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="mb-24 text-center">
                    <h2 className="text-4xl font-md tracking-tight text-foreground md:text-5xl">
                        Why Choose Us?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Discover the advantages of partnering with a tech team that&apos;s
                        built for results and client success:
                    </p>
                </div>

                <div className="grid gap-x-16 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                <feature.icon />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">
                                {feature.title}
                            </h3>
                            <p className="mt-3 leading-relaxed text-muted-foreground max-w-xs">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
