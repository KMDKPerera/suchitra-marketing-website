export default function PrintingServicePage() {
    return (
        <>
        <section className="pt-32 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <h1 className="text-3xl md:text-4xl font-bold text-brandBlue">
                    Printing & Stationery
                </h1>

                <p className="mt-4 max-w-2xl text-gray-600">
                    Reliable everyday and professional printing services with consistent
                    quality and attention to detail.
                </p>

                <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "Digital Printing",
                        "Visiting Cards",
                        "Wedding Cards",
                        "ID Cards",
                        "Letterheads",
                        "Lamination & Binding",
                    ].map((item) => (
                        <li
                            key={item}
                            className="rounded-xl border border-gray-200 p-5 text-sm hover:shadow transition"
                        >
                            {item}
                        </li>
                    ))}
                </ul>

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
