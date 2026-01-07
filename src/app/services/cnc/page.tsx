export default function CNCServicePage() {
    return (
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
    );
}

function ServiceCard({ title }: { title: string }) {
    return (
        <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">
                High-quality, precision-finished solutions tailored to your needs.
            </p>
        </div>
    );
}
