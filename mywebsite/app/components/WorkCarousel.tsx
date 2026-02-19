"use client";

import { motion } from "framer-motion";

const workItems = [
    {
        title: "Execution Without Gaps.",
        description: "We imagined the extraordinary: a 3D immersive experience. CodeDale brought it to life with precision and creativity.",
        author: "Nino Gorbach",
        role: "COO, ATH",
        quote: "Pushing boundaries is what we do",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Fintech Revolution",
        description: "CodeDale built our fintech mobile app for loans and insurance, with live application tracking and a rewards + referral system.",
        author: "Narasimha Reddy",
        role: "Founder & CEO of TFS",
        quote: "Loved building it with you",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "AI Learning Platform",
        description: "CodeDale built Fluent Pro: an AI-powered English learning platform with personalized feedback for students.",
        author: "Sujith Reddy Gopu",
        role: "Founder of Fluent Pro",
        quote: "Excited for the future",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    }
];

export default function WorkCarousel() {
    return (
        <section id="work" className="bg-[#F9FAFB] py-24 px-6 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-nowrap gap-12 pb-12 overflow-x-auto no-scrollbar snap-x">
                    {workItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="min-w-[450px] flex-shrink-0 snap-center rounded-[3.5rem] bg-white p-8 card-shadow md:min-w-[700px]"
                        >
                            {/* Image Block */}
                            <div className="relative mb-8 h-96 overflow-hidden rounded-[3rem]">
                                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-12">
                                    <h3 className="text-5xl font-bold text-white leading-tight">{item.title}</h3>
                                </div>
                            </div>

                            {/* Testimonial Block */}
                            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                                <div className="flex-1">
                                    <div className="relative rounded-[2rem] bg-[#F3F4F6] p-8 before:absolute before:-bottom-4 before:left-8 before:h-8 before:w-8 before:bg-[#F3F4F6] before:[clip-path:polygon(0_0,100%_0,0_100%)]">
                                        <p className="text-lg font-medium leading-relaxed text-[#1F2937]">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="mt-8 flex items-center gap-4 px-2">
                                        <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                                            <img src={`https://i.pravatar.cc/150?u=${item.author}`} alt={item.author} className="h-full w-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="text-base font-bold text-foreground">{item.author}</p>
                                            <p className="text-sm text-muted-foreground">{item.role}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end gap-2 md:pb-4">
                                    <div className="rounded-2xl bg-white p-6 pill-shadow border border-gray-100 min-w-[200px]">
                                        <p className="text-base font-semibold text-foreground italic">&quot;{item.quote}&quot;</p>
                                        <p className="mt-2 text-right text-[10px] font-bold uppercase tracking-wider text-primary">CodeDale</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Custom scrollbar indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {[0, 1, 2].map((i) => (
                        <div key={i} className={`h-2.5 rounded-full transition-all duration-300 ${i === 1 ? 'bg-primary w-10' : 'bg-gray-200 w-2.5'}`} />
                    ))}
                </div>
            </div>
        </section>
    );
}
