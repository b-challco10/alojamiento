"use client";

import { useState } from "react";
import { MapPin, MessageCircle, Menu, X } from "lucide-react";
import Image from "next/image";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Habitaciones", href: "#habitaciones" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "FAQ", href: "#faq" }
  ];

  const handleLinkClick = () => {
    setOpenMenu(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<a href="#inicio" className="flex items-center">
  <Image
    src="/logo/logo.png"
    alt="FLOR DE COCA"
    width={180}
    height={60}
    priority
    className="h-12 w-auto md:h-14"
  />
</a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="font-medium text-gray-700 transition hover:text-green-700">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://wa.me/59168011257" target="_blank" className="flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-white transition hover:bg-green-700">
            <MessageCircle size={18} />
            <span className="hidden sm:block">WhatsApp</span>
          </a>

          <button onClick={() => setOpenMenu(!openMenu)} className="rounded-xl p-2 text-gray-700 hover:bg-gray-100 lg:hidden">
            {openMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {openMenu && (
        <div className="border-t bg-white px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <a key={link.name} href={link.href} onClick={handleLinkClick} className="font-medium text-gray-700 transition hover:text-green-700">
                {link.name}
              </a>
            ))}

            <a href="https://wa.me/59168011257" target="_blank" className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3 text-white">
              <MessageCircle size={18} />
              Contactar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}