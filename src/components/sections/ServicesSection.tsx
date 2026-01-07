import Link from "next/link";

export default function ServicesSection() {
    return (
        <section id="services" className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        What We Do Best
                    </h2>
                    <p className="mt-4 text-base text-gray-600">
                        Focused expertise with supporting services built for quality and impact.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Printing & Stationery */}
                    <div className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 transition
                        hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="text-lg font-semibold text-brandBlue">
                            Printing & Stationery
                        </h3>

                        <p className="mt-2 text-sm text-gray-600">
                            Everyday and professional printing solutions.
                        </p>

                        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-800">
                            <li>• Digital Printing</li>
                            <li>• Visiting Cards</li>
                            <li>• Wedding Cards</li>
                            <li>• ID Cards</li>
                            <li>• Letter Heads</li>
                            <li>• Lamination & Binding</li>
                        </ul>

                        <Link
                            href="/services/printing"
                            className="mt-4 inline-block text-xs text-gray-500
                            group-hover:text-brandBlue transition"
                        >
                            View full services →
                        </Link>
                    </div>

                    {/* CNC, Laser & Craft (CENTER HERO) */}
                    <div className="group rounded-3xl border border-brandPurple/40 bg-gradient-to-br
                        from-white via-purple-50 to-white p-7 sm:p-8 shadow-md
                        hover:shadow-xl hover:-translate-y-1 transition">
                        <h3 className="text-xl font-semibold text-brandPurple">
                            CNC, Laser & Craft
                        </h3>

                        <p className="mt-3 text-sm text-gray-700 max-w-sm">
                            Precision CNC laser cutting and refined craftsmanship for branding,
                            décor, and custom creative projects.
                        </p>

                        <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-800">
                            <li>• CNC Laser Cutting</li>
                            <li>• Wooden Engraving</li>
                            <li>• MDF Cutting</li>
                            <li>• Acrylic Cutting</li>
                            <li>• Wall Décor & Panels</li>
                            <li>• Logo & Branding</li>
                        </ul>

                        <Link
                            href="/services/cnc"
                            className="mt-5 inline-block text-sm font-medium text-brandPurple
                            group-hover:underline"
                        >
                            Explore CNC work →
                        </Link>
                    </div>

                    {/* Custom Gifts & Media */}
                    <div className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 transition
                        hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="text-lg font-semibold text-brandBlue">
                            Custom Gifts & Media
                        </h3>

                        <p className="mt-2 text-sm text-gray-600">
                            Personalized gifts and specialty print items.
                        </p>

                        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-800">
                            <li>• Crystal Printing</li>
                            <li>• Glass Printing</li>
                            <li>• Rock Printing</li>
                            <li>• Photo Frames</li>
                            <li>• Light Boards</li>
                            <li>• Customized Gifts</li>
                        </ul>

                        <Link
                            href="/services/gifts"
                            className="mt-4 inline-block text-xs text-gray-500
                            group-hover:text-brandBlue transition"
                        >
                            View gift options →
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    );
}
