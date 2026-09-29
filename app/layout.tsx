import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./sahel-tokens.css";
import "./globals.css";
// Phosphor Icons auto-hébergé (regular uniquement — duotone inutilisée) :
// bundlé/minifié par Next, police woff2 fingerprintée et cachée à vie,
// plus aucune requête vers unpkg (CSS bloquant tiers supprimé).
import "./fonts/phosphor/regular.css";

const display = Instrument_Serif({
  variable: "--font-display-next",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans-next",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-next",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  // metadataBase rend absolues les URL relatives des métadonnées (image de
  // partage, canonique). Sans elle, les réseaux sociaux reçoivent un chemin
  // relatif qu'ils ne savent pas résoudre : aucun aperçu ne s'affiche.
  metadataBase: new URL("https://ong-chadia.com"),

  // Valeurs de repli. Chaque page définit déjà ses propres titre et
  // description ; celles-ci servent aux pages qui l'oublieraient.
  title: "ONG CHADIA · Pour le développement du Tchad",
  description:
    "CHADIA pour le Développement du Tchad — ONG nationale enregistrée sous n° 154/PCMT/PMT/MEPDCI/SE/SPONGAH/2021. Programmes de développement, assainissement urbain et renforcement des capacités à N'Djamena et dans les provinces.",

  // Aperçu affiché lorsqu'un lien est partagé sur WhatsApp, Facebook ou
  // LinkedIn. L'image est app/opengraph-image.png : Next la détecte par son
  // nom de fichier et pose les balises og:image et twitter:image.
  // title et description sont volontairement absents ici : Next les reprend
  // de chaque page. Les figer donnerait le même aperçu à /precom qu'à
  // l'accueil, alors que chaque page mérite le sien.
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ong-chadia.com",
    siteName: "ONG CHADIA",
  },
  twitter: {
    card: "summary_large_image",
  },

  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
