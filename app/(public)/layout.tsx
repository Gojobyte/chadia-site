import { Fraunces, Archivo, IBM_Plex_Mono } from "next/font/google";
import { PublicShell } from "@/components/public/PublicShell";

// Fonts de la direction « Prestige » — chargées uniquement pour le site
// public ; l'application privée reste sur les fonts Sahel du layout racine.
// Fraunces est variable (poids + axe optique) : les grands corps de titre
// s'affinent automatiquement, les italiques servent d'accent éditorial.
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

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <PublicShell lang="fr" fontClasses={`${display.variable} ${sans.variable} ${mono.variable}`}>
      {children}
    </PublicShell>
  );
}
