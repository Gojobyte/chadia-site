import { Amiri, IBM_Plex_Sans_Arabic, IBM_Plex_Mono } from "next/font/google";
import { PublicShell } from "@/components/public/PublicShell";

// Locale OpenGraph des pages arabes (ar_TD : arabe, Tchad).
export const metadata = {
  openGraph: {
    type: "website" as const,
    locale: "ar_TD",
    url: "https://ong-chadia.com/ar",
    siteName: "منظمة تشاديا",
  },
};

// La version arabe reçoit ses propres fontes, déclarées sur les MÊMES
// variables CSS que les fontes latines : tout le thème (titres serif,
// texte, étiquettes) bascule sans toucher une ligne de CSS.
// Amiri joue le rôle éditorial de Fraunces ; IBM Plex Sans Arabic celui
// d'Archivo. Le mono reste latin — il ne sert qu'aux numéros d'agrément,
// téléphones et dates, qui s'écrivent en chiffres occidentaux.
const display = Amiri({
  variable: "--pub-font-display",
  subsets: ["arabic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = IBM_Plex_Sans_Arabic({
  variable: "--pub-font-sans",
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--pub-font-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <PublicShell lang="ar" fontClasses={`${display.variable} ${sans.variable} ${mono.variable}`}>
      {children}
    </PublicShell>
  );
}
