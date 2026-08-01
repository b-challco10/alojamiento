import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata = {
  title: "Alojamiento Flor de Coca",
  description: "Alojamiento en La Paz, Bolivia.",

  verification: {
    google: "YmrQAKOvi-3ozcZlRuQIfwx2UoXNIF7-XMdhO48NWS8"
  }
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