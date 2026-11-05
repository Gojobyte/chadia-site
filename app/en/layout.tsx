import { Fraunces, Archivo, IBM_Plex_Mono } from "next/font/google";
import { PublicShell } from "@/components/public/PublicShell";

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
