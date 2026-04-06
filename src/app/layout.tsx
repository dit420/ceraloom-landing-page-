import type { Metadata } from "next";
import { Noto_Serif, Manrope, Pacifico } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ceraloom",
  description: "Crafting timeless vessels that celebrate the harmony between earth and home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${notoSerif.variable} ${manrope.variable} ${pacifico.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed-variant overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
