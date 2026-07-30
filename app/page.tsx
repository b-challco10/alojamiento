import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import RoomGrid from "@/components/rooms/RoomGrid";
import FloatingWhatsapp from "@/components/layout/FloatingWhatsapp";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <RoomGrid />
      <FloatingWhatsapp />
    </>
  );
}
