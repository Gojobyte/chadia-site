"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "./PublicShell";

/* Seules ces pages existent dans les trois langues. Toute autre page renvoie
   vers l'accueil de la langue cible plutôt que vers une 404. */
const BASES = ["", "/mission", "/contact", "/contact/merci", "/contact/echec"];

function cible(pathname: string, vers: Lang): string {
  // Ramène le chemin courant à sa base sans préfixe de langue.
  const sansPrefixe = pathname.replace(/^\/(en|ar)(?=\/|$)/, "") || "/";
  const base = sansPrefixe === "/" ? "" : sansPrefixe;
  const connu = BASES.includes(base);
  const prefixe = vers === "fr" ? "" : `/${vers}`;
  if (!connu) return prefixe || "/";
  return `${prefixe}${base}` || "/";
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
