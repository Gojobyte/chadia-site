"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "./PublicShell";

/* Correspondance des slugs entre les langues : le français garde ses URL
   historiques, l'anglais et l'arabe utilisent des slugs anglais. Toute page
   hors de cette table renvoie vers l'accueil de la langue cible. */
const CORRESPONDANCES: Record<string, Record<Lang, string>> = {
  "": { fr: "/", en: "/en", ar: "/ar" },
  "/mission": { fr: "/mission", en: "/en/mission", ar: "/ar/mission" },
  "/contact": { fr: "/contact", en: "/en/contact", ar: "/ar/contact" },
  "/contact/merci": { fr: "/contact/merci", en: "/en/contact/merci", ar: "/ar/contact/merci" },
  "/contact/echec": { fr: "/contact/echec", en: "/en/contact/echec", ar: "/ar/contact/echec" },
  "/precom": { fr: "/precom", en: "/en/precom", ar: "/ar/precom" },
  "/consolidation-paix": { fr: "/consolidation-paix", en: "/en/peacebuilding", ar: "/ar/peacebuilding" },
  "/resultats": { fr: "/resultats", en: "/en/results", ar: "/ar/results" },
  "/gouvernance": { fr: "/gouvernance", en: "/en/governance", ar: "/ar/governance" },
};

/* Retrouve la clé canonique (slug français) depuis un chemin quelconque. */
function cle(pathname: string): string | null {
  for (const [base, versions] of Object.entries(CORRESPONDANCES)) {
    if (Object.values(versions).some((v) => v === pathname)) return base;
  }
  return null;
}

function cible(pathname: string, vers: Lang): string {
  const base = cle(pathname.replace(/\/$/, "") || "/");
  if (base === null) return vers === "fr" ? "/" : `/${vers}`;
  return CORRESPONDANCES[base][vers];
}

/**
 * Sélecteur FR / EN / عربي. Chaque libellé mène à la même page dans l'autre
 * langue quand elle existe, à l'accueil de cette langue sinon.
 */
export function LangSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname() ?? "/";
  const langues: { code: Lang; label: string }[] = [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
    { code: "ar", label: "عربي" },
  ];

  return (
    <div className="lang">
      {langues.map((l) =>
        l.code === lang ? (
          <span key={l.code} className="on" aria-current="true">{l.label}</span>
        ) : (
          <Link key={l.code} href={cible(pathname, l.code)} lang={l.code}>
            {l.label}
          </Link>
        )
      )}
    </div>
  );
}
