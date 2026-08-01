import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alojamiento-flor-de-coca.vercel.app"),

  title: {
    default: "Alojamiento Flor de Coca | La Paz, Bolivia",
    template: "%s | Alojamiento Flor de Coca",
  },

  description:
    "Alojamiento Flor de Coca en La Paz, Bolivia. Habitaciones cómodas con WiFi, agua caliente, Android TV y atención las 24 horas. Reserva fácilmente por WhatsApp.",

  keywords: [
    "Alojamiento La Paz",
    "Hospedaje La Paz",
    "Habitaciones La Paz",
    "Hotel La Paz",
    "Flor de Coca",
    "Alojamiento Bolivia",
    "Reserva por WhatsApp",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://alojamiento-flor-de-coca.vercel.app",
  },

  verification: {
    google: "YmrQAKOvi-3ozcZlRuQIfwx2UoXNIF7-XMdhO48NWS8",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={rubik.variable}>
        {children}
      </body>
    </html>
  );
}