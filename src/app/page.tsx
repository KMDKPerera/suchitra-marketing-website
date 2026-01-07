import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FeaturedWork from "@/components/sections/FeaturedWork";
import HowItWorks from "@/components/sections/HowItWorks";
import ContactCTA from "@/components/sections/CTA";

export default function Home() {
    return (
        <>
            <Hero />
            <ServicesSection />
            <WhyChooseUs />
            <FeaturedWork/>
            <HowItWorks/>
            <ContactCTA/>
        </>
    );
}
