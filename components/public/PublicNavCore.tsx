"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export type NavItem = { href: string; label: string };

/**
 * Navigation principale, paramétrée par la liste d'entrées : la même mécanique
 * (menu mobile, entrée active) sert les trois versions linguistiques du site.
 */
export function PublicNav({ items }: { items: readonly NavItem[] }) {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);

  // Ferme automatiquement quand on change de page (navigation interne).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloque le scroll body quand le menu mobile est ouvert.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <i className={`ph ${open ? "ph-x" : "ph-list"}`} aria-hidden="true"></i>
      </button>

      <nav className={`main-nav ${open ? "is-open" : ""}`}>
        {items.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? "on" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
