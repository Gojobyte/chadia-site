/**
 * Génère les images d'identité du site depuis le logo officiel :
 *   app/icon.png              favicon (onglet, favoris, écran d'accueil)
 *   app/apple-icon.png        icône iOS
 *   app/opengraph-image.png   aperçu au partage (WhatsApp, Facebook, LinkedIn)
 *
 * Next.js détecte ces noms de fichiers automatiquement et pose les balises
 * correspondantes — aucune configuration à écrire.
 */
import sharp from "sharp";

const MARK = "public/images/brand/logo-mark.webp";
const PAPIER = "#faf7f1"; // --color-page
const FORET = "#11291e";  // --pub-forest
const VERT = "#17734d";   // --pub-green

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* ── Favicon : logo sur fond papier, avec marge pour rester lisible en 16px ── */
async function icone(taille, sortie) {
  const marge = Math.round(taille * 0.12);
  const logo = await sharp(MARK)
    .resize(taille - marge * 2, taille - marge * 2, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: { width: taille, height: taille, channels: 4, background: PAPIER },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toFile(sortie);

  console.log(`✓ ${sortie} (${taille}×${taille})`);
}

/* ── Image de partage 1200×630 ── */
async function ogImage(sortie) {
  const L = 1200, H = 630;

  // Le texte passe par un SVG : sharp ne dessine pas de texte directement.
  // Polices système (DejaVu Serif / Lato) — Instrument Serif n'est pas
  // installée ici, mais le rendu reste fidèle à l'esprit éditorial du site.
  // Fond papier plutôt que vert foncé : le sigle « CDT » du logo est découpé
  // en transparence, il disparaîtrait sur un fond sombre.
  const fond = Buffer.from(`
    <svg width="${L}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${L}" height="${H}" fill="${PAPIER}"/>
      <rect x="0" y="0" width="${L}" height="10" fill="${VERT}"/>
      <rect x="0" y="${H - 10}" width="${L}" height="10" fill="${FORET}"/>
      <text x="420" y="270" font-family="DejaVu Serif" font-size="104" fill="${FORET}" letter-spacing="2">CHADIA</text>
      <text x="424" y="330" font-family="Lato, DejaVu Sans" font-size="30" fill="#6b7d72" letter-spacing="1">
        ${esc("ONG nationale — République du Tchad")}
      </text>
      <line x1="424" y1="380" x2="1080" y2="380" stroke="#d6cfc2" stroke-width="1"/>
      <text x="424" y="432" font-family="Lato, DejaVu Sans" font-size="26" fill="${FORET}">
        ${esc("Pour le développement du Tchad")}
      </text>
      <text x="424" y="500" font-family="DejaVu Sans Mono" font-size="22" fill="${VERT}">ong-chadia.com</text>
    </svg>`);

  const logo = await sharp(MARK).resize(260, 280, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();

  await sharp(fond)
    .composite([{ input: logo, left: 110, top: 175 }])
    .png()
    .toFile(sortie);

  console.log(`✓ ${sortie} (${L}×${H})`);
}

await icone(512, "app/icon.png");
await icone(180, "app/apple-icon.png");
await ogImage("app/opengraph-image.png");
