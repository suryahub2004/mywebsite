"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const solutions = [
    {
        title: "Web Development",
        images: [
            "https://cdn.dribbble.com/userupload/43640199/file/original-a3d207654a0f89c32a721376fcf09af6.jpg?resize=1200x889&vertical=center",
            "https://cdn.dribbble.com/userupload/17981244/file/original-5a0e9c56153f71244c22892a0e1d41d8.jpg?resize=2048x1536&vertical=center",
            "https://cdn.dribbble.com/userupload/45139327/file/c683b6b5988f89a94e557c5ab9046f13.png?resize=1504x1128&vertical=center"
        ]
    },
    {
        title: "App Development",
        images: [
            "https://cdn.dribbble.com/userupload/4246784/file/original-4c4b7fed25ff35d9f9427950bf4e4dc7.webp?resize=1504x1128&vertical=center",
            "https://cdn.dribbble.com/userupload/45367775/file/8908a67c0ca76b85d41284db8a30bb5a.png?resize=1024x1024&vertical=center",
            "https://cdn.dribbble.com/userupload/39935112/file/original-e1b82dae52eadcadf7855cf823373d0e.png?resize=2048x1536&vertical=center"
        ]
    },
    {
        title: "AI Applications",
        images: [
            "https://cdn.dribbble.com/userupload/18163744/file/original-3d96c1a5d85778ab05bbbf31bf1a9cb1.png?resize=2048x1537&vertical=center",
            "https://cdn.dribbble.com/userupload/45466886/file/8c440d3ee37b21fc51a3e133e0684d1e.png?resize=2048x1536&vertical=center",
            "https://cdn.dribbble.com/userupload/4624906/file/original-3eacfe9db64eb6dbd33e938a3c8efba5.jpg?resize=1504x1128&vertical=center"
        ]
    },
    {
        title: "Data Driven Products",
        images: [
            "https://cdn.dribbble.com/userupload/46385071/file/82050aa9420f69264f5cb69faf2f8271.png?resize=2048x1536&vertical=center",
            "https://cdn.dribbble.com/userupload/44111967/file/original-5721483c3bd02c20ed6326423747c3b3.jpg?resize=1504x1128&vertical=center",
            "https://cdn.dribbble.com/userupload/46688716/file/9ba758c3943ee1436b178e817c2bc8ec.jpg?resize=2048x1536&vertical=center"
        ]
    },
    {
        title: "Blockchain Technology",
        images: [
            "https://cdn.dribbble.com/userupload/15050197/file/original-f9221df03b55016bce2288df542676e9.png?resize=1504x1128&vertical=center",
            "https://cdn.dribbble.com/userupload/43917792/file/original-033140502f62d545f3bad76a9244085a.jpg?resize=2048x1536&vertical=center",
            "https://cdn.dribbble.com/userupload/42523779/file/original-5c1ddda02c5da6a5f3590c5efaceb7fb.png?resize=800x600&vertical=center"
        ]
    },
    {
        title: "UI/UX",
        images: [
            "https://cdn.dribbble.com/userupload/42825309/file/original-9d4ec93f3216e5b017cbe5e53393d17e.png?resize=2048x1536&vertical=center",
            "https://cdn.dribbble.com/userupload/43004251/file/original-8022df701bc51c3eef8c0bed977e3615.png?resize=2048x1536&vertical=center",
            "https://cdn.dribbble.com/userupload/44481835/file/b3165dc2d7281b6f4ef442ebe694a853.png?resize=2048x1536&vertical=center"
        ]
    },
    {
        title: "Logo Designing",
        images: [
            "https://cdn.dribbble.com/userupload/46011663/file/d893b4e113f0c0cb11e6f26cddc292ae.jpg?resize=1504x1003&vertical=center",
            "https://cdn.dribbble.com/userupload/45286242/file/550e6f9a8e6b934d68b0aecbac9c843a.jpg?resize=1024x1280&vertical=center",
            "https://cdn.dribbble.com/userupload/46763094/file/6eb8d2af10aa5ef55cdb4c5b2fa3a217.jpg?resize=2048x1365&vertical=center"
        ]
    },
    {
        title: "Rapid Prototyping and MVPs",
        images: [
            "https://cdn.dribbble.com/userupload/46017880/file/4b430ad718d26eeaaae1ce9c0fe32e9b.png?resize=2048x1536&vertical=center",
            "https://cdn.dribbble.com/userupload/43546159/file/original-cfa6fdc584a1417bed7498be69b61e14.png?resize=2048x1536&vertical=center",
            "https://cdn.dribbble.com/userupload/46535608/file/2be959e263439bc267cedcfb8ab5c336.png?resize=2048x1536&vertical=center"
        ]
    },
    {
        title: "Digital Marketing & SEO",
        images: [
            "https://cdn.dribbble.com/userupload/46461158/file/d77c0131bff5fa6cd88cd3888634a833.jpg?resize=2048x1536&vertical=center",
            "https://cdn.dribbble.com/userupload/42200437/file/original-d86fd686f6d0620d6692bc042a02930d.png?resize=800x600&vertical=center",
            "https://cdn.dribbble.com/userupload/46769941/file/a61393e9becbbccf791f3c0a09fa02e0.jpg?resize=2048x2038&vertical=center"
        ]
    }
];

/* Default (compact) positions — small stacked cluster */
const defaultPositions = [
    { x: -20, y: 8, rotate: -8, scale: 1 },
    { x: 0, y: -4, rotate: 2, scale: 1.05 },
    { x: 20, y: 6, rotate: 10, scale: 1 },
];

/* Hovered (expanded) positions — fanned out, much bigger */
const hoveredPositions = [
    { x: -100, y: -20, rotate: -12, scale: 1.8 },
    { x: 0, y: -40, rotate: 0, scale: 1.9 },
    { x: 100, y: -15, rotate: 10, scale: 1.8 },
];

export default function Solutions() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <section className="bg-[#F9FAFB] py-28 px-6 overflow-visible">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-md tracking-tight text-foreground md:text-5xl">
                        Solutions Tailored for Your Growth
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Discover our full-service offerings — crafted to deliver reliability, scalability, and results
                    </p>
                </div>

                {/* 3x3 Grid */}
                <div className="relative">
                    {[0, 1, 2].map((row) => (
                        <div key={row}>
                            {/* Dashed divider */}
                            <div className="border-t border-dashed border-gray-300 my-0" />
                            <div className="grid grid-cols-1 md:grid-cols-3">
                                {solutions.slice(row * 3, row * 3 + 3).map((item, colIdx) => {
                                    const idx = row * 3 + colIdx;
                                    const isHovered = hoveredIdx === idx;

                                    return (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.04 }}
                                            onMouseEnter={() => setHoveredIdx(idx)}
                                            onMouseLeave={() => setHoveredIdx(null)}
                                            className="relative flex flex-col items-center py-12 px-4 cursor-pointer"
                                            style={{ zIndex: isHovered ? 50 : 1 }}
                                        >
                                            {/* Stacked images */}
                                            <div className="relative h-24 w-32 mb-6">
                                                {item.images.map((img, i) => {
                                                    const pos = isHovered
                                                        ? hoveredPositions[i]
                                                        : defaultPositions[i];

                                                    return (
                                                        <motion.div
                                                            key={i}
                                                            animate={{
                                                                x: pos.x,
                                                                y: pos.y,
                                                                rotate: pos.rotate,
                                                                scale: pos.scale,
                                                            }}
                                                            transition={{
                                                                type: "spring",
                                                                stiffness: 200,
                                                                damping: 20,
                                                            }}
                                                            className="absolute left-1/2 top-1/2 -ml-8 -mt-6 h-16 w-16 overflow-hidden rounded-lg border-2 border-white shadow-md"
                                                            style={{ zIndex: i === 1 ? 3 : 2 - i }}
                                                        >
                                                            <img
                                                                src={img}
                                                                alt={item.title}
                                                                className="h-full w-full object-cover"
                                                                draggable={false}
                                                            />
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>

                                            <h3 className={`text-base font-semibold text-center transition-colors duration-200 ${isHovered ? "text-primary" : "text-foreground"}`}>
                                                {item.title}
                                            </h3>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                    {/* Bottom dashed line */}
                    <div className="border-t border-dashed border-gray-300" />
                </div>
            </div>
        </section>
    );
}
