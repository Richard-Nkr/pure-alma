import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const shroomsGarden = localFont({
  src: "./fonts/Shrooms_Garden.ttf",
  variable: "--font-shrooms",
  display: "swap",
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
      data-theme="light"
      data-astryx-theme="butter"
      className={`${inter.variable} ${oswald.variable} ${shroomsGarden.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-amla-blue font-sans text-amla-cream">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
