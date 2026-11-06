import { Fraunces, Archivo, IBM_Plex_Mono } from "next/font/google";
import { PublicShell } from "@/components/public/PublicShell";

// Remplace la locale OpenGraph héritée (fr_FR) : les aperçus de partage des
// pages anglaises s'annoncent en anglais. Le merge Next étant superficiel,
// le bloc openGraph se redéclare en entier.
export const metadata = {
  openGraph: {
    type: "website" as const,
    locale: "en_GB",
    url: "https://ong-chadia.com/en",
    siteName: "CHADIA NGO",
  },
};

// Mêmes fonts latines que la version française : l'anglais partage
// l'identité typographique du site.
const display = Fraunces({
  variable: "--pub-font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const sans = Archivo({
  variable: "--pub-font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--pub-font-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <PublicShell lang="en" fontClasses={`${display.variable} ${sans.variable} ${mono.variable}`}>
      {children}
    </PublicShell>
  );
}
