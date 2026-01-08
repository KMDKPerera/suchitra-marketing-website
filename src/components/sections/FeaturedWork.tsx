import Image from "next/image";

const works = [
    {
        title: "CNC Wall Décor Panel",
        category: "CNC / Laser Cutting",
        image: "https://images.unsplash.com/photo-1602526432604-029a709e131c",
    },
    {
        title: "Custom Acrylic Signage",
        category: "Laser Cutting",
        image: "https://images.unsplash.com/photo-1598300053654-5c2b14d66b07",
    },
    {
        title: "Wood Engraved Logo",
        category: "Wood Engraving",
        image: "https://images.unsplash.com/photo-1616628182506-28b9c9f9f1b6",
    },
    {
        title: "Personalized Gift Frame",
        category: "Custom Gifts",
        image: "https://images.unsplash.com/photo-1607082349566-1870a4c1a06f",
    },
    {
        title: "Laser Cut MDF Design",
        category: "MDF Cutting",
        image: "https://images.unsplash.com/photo-1581092334554-1c2c5c74f4d0",
    },
    {
        title: "Brand Nameplate",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da",
    },
];


export default function FeaturedWork() {
    return (
        <section id="work" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Featured Work
                    </h2>
                    <p className="mt-4 text-base text-gray-600">
                        A glimpse of our CNC, laser, and custom creation projects.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {works.map((work, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl overflow-hidden border border-gray-200 bg-white
                         hover:-translate-y-1 hover:shadow-lg transition"
                        >
                            {/* Image */}
                            <div className="relative h-56 w-full">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                <span className="text-xs text-brandPurple font-medium">
                  {work.category}
                </span>
                                <h3 className="mt-2 text-base font-semibold text-slate-900">
                                    {work.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
