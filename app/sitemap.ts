import type { MetadataRoute } from "next";

const SITE = "https://ong-chadia.com";

/**
 * Plan du site remis aux moteurs de recherche (/sitemap.xml).
 *
 * Les pages /contact/merci et /contact/echec en sont volontairement absentes :
 * elles sont marquées noindex, et une confirmation d'envoi n'a aucune valeur
 * dans un résultat de recherche.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Date fixe plutôt que new Date() : annoncer une modification à chaque build
  // alors que le contenu n'a pas bougé apprend aux moteurs à ignorer le champ.
  const miseAJour = new Date("2026-09-12");

  return [
    { url: SITE, lastModified: miseAJour, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/mission`, lastModified: miseAJour, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE}/precom`, lastModified: miseAJour, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/consolidation-paix`, lastModified: miseAJour, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/resultats`, lastModified: miseAJour, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/gouvernance`, lastModified: miseAJour, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE}/contact`, lastModified: miseAJour, changeFrequency: "yearly", priority: 0.7 },
    // Versions anglaise et arabe — accueil, mission et contact existent
    // dans les trois langues ; les pages projet détaillées restent en français.
    { url: `${SITE}/en`, lastModified: miseAJour, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/en/mission`, lastModified: miseAJour, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE}/en/contact`, lastModified: miseAJour, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE}/ar`, lastModified: miseAJour, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/ar/mission`, lastModified: miseAJour, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE}/ar/contact`, lastModified: miseAJour, changeFrequency: "yearly", priority: 0.6 },
  ];
}
