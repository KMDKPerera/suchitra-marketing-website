"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/constants/navLinks";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-100">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Suchithra Creations Logo"
                        width={140}
                        height={50}
                        priority
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navLinks.map((link) =>
                        link.submenu ? (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => setServicesOpen(true)}
                                onMouseLeave={() => setServicesOpen(false)}
                            >
                                <button className="flex items-center gap-1 hover:text-brandPurple transition">
                                    {link.name}
                                    <span className={`transition ${servicesOpen ? "rotate-180" : ""}`}>▾</span>
                                </button>

                                <AnimatePresence>
                                    {servicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="island-dropdown shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)]"

                                        >
                                            {link.submenu.map((sublink) => (
                                                <Link
                                                    key={sublink.name}
                                                    href={sublink.href}
                                                    className="block px-5 py-3 text-sm hover:bg-purple-50 hover:text-brandPurple transition"
                                                >
                                                    {sublink.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="hover:text-brandPurple transition"
                            >
                                {link.name}
                            </Link>
                        )
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden w-10 h-10 flex items-center justify-center border rounded-md"
                >
                    ☰
                </button>
            </nav>

            {/* Mobile Menu */}
            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden bg-white border-t border-gray-100"
                    >
                        <div className="px-4 py-6 space-y-6">

                            {/* Services Accordion */}
                            <div>
                                <button
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                    className="flex w-full items-center justify-between text-base font-medium"
                                >
                                    <span>Services</span>
                                    <span
                                        className={`transition-transform ${
                                            servicesOpen ? "rotate-180" : ""
                                        }`}
                                    >
              ▾
            </span>
                                </button>

                                <AnimatePresence>
                                    {servicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="mt-4 pl-4 space-y-3 text-sm text-gray-700"
                                        >
                                            <Link
                                                href="/services/cnc"
                                                onClick={() => setOpen(false)}
                                                className="block"
                                            >
                                                CNC, Laser & Craft
                                            </Link>

                                            <Link
                                                href="/services/printing"
                                                onClick={() => setOpen(false)}
                                                className="block"
                                            >
                                                Printing & Stationery
                                            </Link>

                                            <Link
                                                href="/services/gifts"
                                                onClick={() => setOpen(false)}
                                                className="block"
                                            >
                                                Custom Gifts & Media
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Other Links */}
                            <Link
                                href="#work"
                                onClick={() => setOpen(false)}
                                className="block text-base"
                            >
                                Work
                            </Link>

                            <Link
                                href="#contact"
                                onClick={() => setOpen(false)}
                                className="block text-base"
                            >
                                Contact
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    );
}
