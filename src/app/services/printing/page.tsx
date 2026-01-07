export default function PrintingServicePage() {
    return (
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
    );
}
