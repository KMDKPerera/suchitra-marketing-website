export default function GiftsServicePage() {
    return (
        <section className="pt-32 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <h1 className="text-3xl md:text-4xl font-bold text-brandBlue">
                    Custom Gifts & Media
                </h1>

                <p className="mt-4 max-w-2xl text-gray-600">
                    Thoughtfully personalized gifts and specialty print items designed
                    to make lasting impressions.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {[
                        "Crystal Printing",
                        "Glass Printing",
                        "Rock Printing",
                        "Photo Frames",
                        "Light Boards",
                        "Customized Gift Items",
                    ].map((item) => (
                        <div
                            key={item}
                            className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition"
                        >
                            <h3 className="font-semibold">{item}</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Premium-quality personalized gift solutions.
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
