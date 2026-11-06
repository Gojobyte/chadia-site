import type { MetadataRoute } from "next";

const SITE = "https://ong-chadia.com";

/* Les sept pages du site et leurs trois versions linguistiques. Une seule
   table : ajouter une page ici suffit à la déclarer dans les trois langues. */
const PAGES: {
  fr: string;
  en: string;
  ar: string;
  freq: "monthly" | "yearly";
  prio: number;
}[] = [
  { fr: "/", en: "/en", ar: "/ar", freq: "monthly", prio: 1 },
  { fr: "/mission", en: "/en/mission", ar: "/ar/mission", freq: "yearly", prio: 0.8 },
  { fr: "/precom", en: "/en/precom", ar: "/ar/precom", freq: "monthly", prio: 0.8 },
  { fr: "/consolidation-paix", en: "/en/peacebuilding", ar: "/ar/peacebuilding", freq: "monthly", prio: 0.8 },
  { fr: "/resultats", en: "/en/results", ar: "/ar/results", freq: "monthly", prio: 0.7 },
  { fr: "/gouvernance", en: "/en/governance", ar: "/ar/governance", freq: "yearly", prio: 0.6 },
  { fr: "/contact", en: "/en/contact", ar: "/ar/contact", freq: "yearly", prio: 0.7 },
];

/**
 * Plan du site remis aux moteurs de recherche (/sitemap.xml).
 *
 * Chaque URL déclare ses équivalents linguistiques (alternates) : c'est l'un
 * des trois canaux hreflang reconnus par Google, en plus des balises <link>
 * déjà posées dans le <head> des pages. Les deux canaux racontent la même
 * chose — condition pour que Google serve la bonne langue à chaque visiteur.
 *
 * Les pages /contact/merci et /contact/echec en sont volontairement absentes :
 * elles sont noindex, une confirmation d'envoi n'a rien à faire dans un
 * résultat de recherche.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Date fixe plutôt que new Date() : annoncer une modification à chaque build
  // alors que le contenu n'a pas bougé apprend aux moteurs à ignorer le champ.
  const miseAJour = new Date("2026-11-06");

  return PAGES.flatMap((p) =>
    ([p.fr, p.en, p.ar] as const).map((chemin) => ({
      url: `${SITE}${chemin === "/" ? "" : chemin}`,
      lastModified: miseAJour,
      changeFrequency: p.freq,
      priority: p.prio,
      alternates: {
        languages: {
          "x-default": `${SITE}${p.fr === "/" ? "" : p.fr}`,
          fr: `${SITE}${p.fr === "/" ? "" : p.fr}`,
          en: `${SITE}${p.en}`,
          ar: `${SITE}${p.ar}`,
        },
      },
    }))
  );
}
