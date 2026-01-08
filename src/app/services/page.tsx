"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
    "All",
    "CNC",
    "Laser Cutting",
    "3D Printing",
    "Handmade",
];

const services = [
    {
        title: "CNC Wood & MDF Cutting",
        category: "CNC",
        description: "Precision CNC cutting for furniture panels, décor, and custom designs.",
    },
    {
        title: "CNC Acrylic Work",
        category: "CNC",
        description: "High-accuracy acrylic cutting for signage and display solutions.",
    },
    {
        title: "Laser Engraving",
        category: "Laser Cutting",
        description: "Detailed engraving on wood, acrylic, leather, and more.",
    },
    {
        title: "Laser Cutting",
        category: "Laser Cutting",
        description: "Clean and precise laser cuts for customized creative projects.",
    },
    {
        title: "3D Printing Prototypes",
        category: "3D Printing",
        description: "Rapid prototyping and custom 3D printed models.",
    },
    {
        title: "Custom 3D Models",
        category: "3D Printing",
        description: "Functional and decorative 3D printed products.",
    },
    {
        title: "Handmade Wall Art",
        category: "Handmade",
        description: "Unique handcrafted décor items with artistic detailing.",
    },
    {
        title: "Personalized Gifts",
        category: "Handmade",
        description: "Custom handmade gifts for special occasions.",
    },
];

export default function ServicesPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredServices =
        activeCategory === "All"
            ? services
            : services.filter(
                (service) => service.category === activeCategory
            );

    return (
        <section className="pt-32 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Our Services
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Explore our range of CNC, laser, 3D printing, and handmade
                        creative solutions.
                    </p>
                </div>

                {/* Filters */}
                <div className="mt-12 flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition
                                ${
                                activeCategory === category
                                    ? "bg-brandPurple text-white"
                                    : "border border-brandPurple text-brandPurple hover:bg-brandPurple/10"
                            }
                            `}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Services Grid */}
                <motion.div
                    layout
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredServices.map((service) => (
                            <motion.div
                                key={service.title}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3 }}
                                className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition"
                            >
                                <h3 className="text-lg font-semibold text-slate-900">
                                    {service.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    {service.description}
                                </p>
                                <span className="inline-block mt-4 text-xs font-medium text-brandPurple">
                                    {service.category}
                                </span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
