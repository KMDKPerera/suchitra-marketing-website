export default function CNCServicePage() {
    return (
        <>
            {/* CNC Services Section */}
            <section className="pt-32 pb-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    <h1 className="text-3xl md:text-4xl font-bold text-brandPurple">
                        CNC, Laser & Craft
                    </h1>

                    <p className="mt-4 max-w-2xl text-gray-600">
                        Precision CNC laser cutting and refined craftsmanship for branding,
                        décor, signage, and custom creative projects.
                    </p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ServiceCard title="CNC Laser Cutting" />
                        <ServiceCard title="Wooden & MDF Engraving" />
                        <ServiceCard title="Acrylic Cutting & Etching" />
                        <ServiceCard title="Wall Décor & Panels" />
                        <ServiceCard title="Custom Logos & Branding" />
                        <ServiceCard title="Creative Craft Work" />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-brandPurple text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold">
                        Have an Idea in Mind?
                    </h2>

                    <p className="mt-4 max-w-xl mx-auto text-base text-white/90">
                        Let’s bring your concept to life with precision CNC work,
                        creative laser cutting, and custom craftsmanship.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="https://wa.me/947XXXXXXXX"
                            target="_blank"
                            className="rounded-xl bg-white px-6 py-3 font-medium text-brandPurple
                            hover:bg-gray-100 transition"
                        >
                            WhatsApp Us
                        </a>

                        <a
                            href="tel:+947XXXXXXXX"
                            className="rounded-xl border border-white px-6 py-3 font-medium
                            hover:bg-white hover:text-brandPurple transition"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

function ServiceCard({title}: { title: string }) {
    return (
        <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">
                High-quality, precision-finished solutions tailored to your needs.
            </p>
        </div>
    );
}
