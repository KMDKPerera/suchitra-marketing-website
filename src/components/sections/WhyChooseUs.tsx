export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Why Choose Us
                    </h2>
                    <p className="mt-4 text-base text-gray-600">
                        We focus on quality, precision, and reliability. delivering results
                        you can trust.
                    </p>
                </div>

                {/* Points */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Card 1 */}
                    <div className="group rounded-2xl bg-white p-6 shadow-sm border border-gray-200
                          hover:-translate-y-1 hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-brandPurple">
                            Precision Craftsmanship
                        </h3>
                        <p className="mt-3 text-sm text-gray-600">
                            High-accuracy CNC laser cutting and detailed finishing for
                            professional results.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group rounded-2xl bg-white p-6 shadow-sm border border-gray-200
                          hover:-translate-y-1 hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-brandPurple">
                            Custom-Made Solutions
                        </h3>
                        <p className="mt-3 text-sm text-gray-600">
                            Every project is tailored no mass production, only personalized
                            creations.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group rounded-2xl bg-white p-6 shadow-sm border border-gray-200
                          hover:-translate-y-1 hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-brandPurple">
                            Fast Turnaround
                        </h3>
                        <p className="mt-3 text-sm text-gray-600">
                            Efficient workflows ensure timely delivery without compromising
                            quality.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="group rounded-2xl bg-white p-6 shadow-sm border border-gray-200
                          hover:-translate-y-1 hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-brandPurple">
                            Trusted Local Service
                        </h3>
                        <p className="mt-3 text-sm text-gray-600">
                            A reliable local business offering clear communication and honest
                            pricing.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
