"use client";

import { motion } from "framer-motion";
import { Lightbulb, Settings, PackageCheck } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            id: 1,
            title: "Share Your Idea",
            desc: "Tell us what you need design, size, material, or reference.",
            icon: Lightbulb,
        },
        {
            id: 2,
            title: "We Design & Craft",
            desc: "Precision CNC, laser cutting, or custom work done carefully.",
            icon: Settings,
        },
        {
            id: 3,
            title: "Receive the Final Product",
            desc: "Quality-checked and delivered ready to use.",
            icon: PackageCheck,
        },
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        How It Works
                    </h2>
                    <p className="mt-4 text-base text-gray-600">
                        From idea to finished product  a simple, transparent process.
                    </p>
                </div>

                {/* Steps */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: "easeOut",
                                }}
                                className="rounded-2xl bg-white border border-gray-200 p-6 text-center"
                            >
                                {/* Animated Icon */}
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="mx-auto mb-4 flex h-14 w-14 items-center justify-center
                                        rounded-full bg-brandPurple/10 text-brandPurple"
                                >
                                    <Icon size={26} />
                                </motion.div>

                                <h3 className="text-lg font-semibold text-slate-900">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    {step.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
