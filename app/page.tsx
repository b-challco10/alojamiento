import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import RoomGrid from "@/components/rooms/RoomGrid";
import FloatingWhatsapp from "@/components/layout/FloatingWhatsapp";
import About from "@/components/about/About";
import Location from "@/components/location/location";
import FAQ from "@/components/faq/FAQ";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <RoomGrid />
      <About />
      <Location />
      <FAQ />
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
