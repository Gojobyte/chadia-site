import type { MetadataRoute } from "next";

const SITE = "https://ong-chadia.com";

/**
 * Consignes aux robots d'indexation (/robots.txt).
 *
 * Tout le site est ouvert : c'est un site public d'ONG, la visibilité est
 * l'objectif. Seules les pages de confirmation du formulaire sont écartées —
 * elles portent déjà un noindex, mais l'indiquer ici évite aux robots de
 * dépenser leur quota d'exploration à les visiter.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/contact/merci", "/contact/echec"],
    },
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
