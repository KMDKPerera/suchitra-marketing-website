import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full">

            {/* Main Footer */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-gray-400">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">

                    {/* Top Content */}
                    <div className="
                        flex flex-col
                        gap-10
                        md:flex-row md:justify-between md:items-start
                    ">

                        {/* Brand */}
                        <div className="max-w-md">
                            <Image
                                src="/logo.png"
                                alt="Suchithra Creations"
                                width={150}
                                height={50}
                                className="mb-4"
                                priority
                            />
                            <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                                CNC, laser cutting, printing, and custom creations.
                                <br className="hidden sm:block" />
                                Crafted with precision and care.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="text-left md:text-right">
                            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
                                Contact
                            </h4>
                            <ul className="space-y-2 text-sm sm:text-base">
                                <li>📞 +94 7X XXX XXXX</li>
                                <li>💬 WhatsApp available</li>
                                <li>📍 Sri Lanka</li>
                            </ul>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="my-8 border-t border-slate-700/70" />

                    {/* Bottom Bar */}
                    <div className="
                        flex flex-col
                        gap-4
                        text-xs sm:text-sm
                        md:flex-row md:justify-between md:items-center
                        text-gray-500
                    ">
                        <p className="text-center md:text-left">
                            © {new Date().getFullYear()} Suchithra Creation. All rights reserved.
                        </p>
                        <p className="text-center md:text-right">
                            Designed & built by{" "}
                            <span className="text-gray-300 font-medium">
                                Dasun Perera
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}
