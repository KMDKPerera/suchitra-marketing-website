"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


export default function Hero() {
    return (
        <section
            className="
                bg-white
                pt-16 sm:pt-20 md:pt-24
                pb-20 sm:pb-24
            "
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div className="
                    grid grid-cols-1 md:grid-cols-2
                    gap-12 lg:gap-16
                    items-center
                ">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center md:text-left"
                    >
                        <h1 className="
                            text-3xl
                            sm:text-4xl
                            lg:text-5xl
                            font-bold
                            leading-tight
                            text-slate-900
                        ">
                            Turning Ideas Into <br />
                            <span className="text-brandPurple">
                                Creative Reality
                            </span>
                        </h1>

                        <p className="
                            mt-6
                            text-base
                            sm:text-lg
                            text-gray-600
                            max-w-xl
                            mx-auto
                            md:mx-0
                        ">
                            CNC work, laser cutting, 3D printing, and handmade
                            creations — crafted with precision, creativity,
                            and passion.
                        </p>

                        <div className="
                            mt-8
                            flex
                            flex-col
                            sm:flex-row
                            gap-4
                            justify-center
                            md:justify-start
                        ">
                            <button className="
                                rounded-xl
                                bg-brandPurple
                                px-8 py-3
                                text-white
                                font-medium
                                hover:opacity-90
                                transition
                            ">
                                Get a Quote
                            </button>
                            <Link href="/services">

                            <button className="
                                rounded-xl
                                border border-brandPurple
                                px-8 py-3
                                font-medium
                                text-brandPurple
                                hover:bg-brandPurple/10
                                transition
                            ">
                                Our Services
                            </button></Link>
                        </div>
                    </motion.div>

                    {/* Right Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="flex justify-center md:justify-end"
                    >
                        <div className="
                            w-full
                            max-w-sm
                            lg:max-w-md
                        ">
                            <Image
                                src="/logo.png"
                                alt="Suchithra Creations Logo"
                                width={480}
                                height={180}
                                priority
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
