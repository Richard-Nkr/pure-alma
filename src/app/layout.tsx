import type { Metadata } from "next";
import { DM_Sans, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const dmSans = DM_Sans({
  variable: "--font-body",
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
  title: "AMLA. Amlou artisanal aux amandes et huile d'argan",
  description:
    "AMLA, l'amlou marocain artisanal : amandes torréfiées, huile d'argan pure et miel. 100% naturel, sans additifs, préparé à la main.",
  keywords: [
    "amlou",
    "huile d'argan",
    "amandes",
    "miel",
    "pâte à tartiner naturelle",
    "produit marocain",
  ],
  openGraph: {
    title: "AMLA. Amlou artisanal",
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
      className={`${dmSans.variable} ${oswald.variable} ${shroomsGarden.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-amla-blue font-sans text-amla-cream">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
