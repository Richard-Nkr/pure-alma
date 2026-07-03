import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pure Alma — Amlou artisanal aux amandes & huile d'argan",
  description:
    "Pure Alma, l'amlou marocain artisanal : amandes torréfiées, huile d'argan pure et miel. 100% naturel, sans additifs, préparé à la main.",
  keywords: [
    "amlou",
    "huile d'argan",
    "amandes",
    "miel",
    "pâte à tartiner naturelle",
    "produit marocain",
  ],
  openGraph: {
    title: "Pure Alma — Amlou artisanal",
    description:
      "L'amlou marocain 100% naturel : amandes, argan et miel. Préparé à la main.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-cacao">
        {children}
      </body>
    </html>
  );
}
