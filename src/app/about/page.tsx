"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <section className="pt-32 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                        About Us
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg">
                        Turning ideas into finely crafted creations through
                        precision, creativity, and passion.
                    </p>
                </motion.div>

                {/* Content */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-semibold text-slate-900">
                            Who We Are
                        </h2>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Suchithra Creations is a creative workshop specializing
                            in CNC machining, laser cutting, 3D printing, and
                            handmade craftsmanship. We blend modern technology
                            with artistic skill to deliver high-quality,
                            customized solutions for individuals and businesses.
                        </p>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            From custom signage and décor to prototypes and
                            personalized gifts, every project is handled with
                            precision, attention to detail, and a commitment to
                            excellence.
                        </p>
                    </motion.div>

                    {/* Right Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {[
                            {
                                title: "Precision Craftsmanship",
                                desc: "Advanced machinery combined with skilled hands.",
                            },
                            {
                                title: "Custom Solutions",
                                desc: "Every design tailored to your exact needs.",
                            },
                            {
                                title: "Modern Technology",
                                desc: "CNC, laser, and 3D printing expertise.",
                            },
                            {
                                title: "Creative Passion",
                                desc: "Design-driven thinking in every project.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition"
                            >
                                <h3 className="font-semibold text-slate-900">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Mission & Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    <div className="rounded-2xl bg-gray-50 p-8">
                        <h3 className="text-xl font-semibold text-slate-900">
                            Our Mission
                        </h3>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            To deliver precision-crafted creative solutions that
                            exceed expectations while maintaining quality,
                            reliability, and innovation in every project.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-gray-50 p-8">
                        <h3 className="text-xl font-semibold text-slate-900">
                            Our Vision
                        </h3>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            To become a trusted name in creative manufacturing
                            and custom fabrication, recognized for innovation,
                            craftsmanship, and customer satisfaction.
                        </p>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-24 text-center"
                >
                    <h3 className="text-2xl font-semibold text-slate-900">
                        Let’s Create Something Amazing
                    </h3>
                    <p className="mt-3 text-gray-600">
                        Have an idea in mind? We’re here to bring it to life.
                    </p>
                    <button className="mt-6 rounded-xl bg-brandPurple px-10 py-3 text-white font-medium hover:opacity-90 transition">
                        Contact Us
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
