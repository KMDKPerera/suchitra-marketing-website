import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Suchithra Creation",
  description: "Creative digital solutions & branding.",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
      <Navbar/>
      <main className="pt-24">{children}</main>
      <Footer/>
      </body>
      </html>
  );
}
