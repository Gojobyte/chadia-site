import Link from "next/link";

export const metadata = {
  title: "Envoi impossible · ONG CHADIA",
  description: "Le message n'a pas pu être transmis. Coordonnées directes de l'ONG CHADIA.",
  robots: { index: false, follow: true },
};

/**
 * Filet de sécurité du formulaire.
 *
 * Affichée lorsque la validation échoue ou que le service d'envoi est
 * indisponible. Le principe : ne jamais laisser un visiteur sans recours —
 * les coordonnées directes figurent sur la page, il peut nous joindre
 * immédiatement par un autre canal.
 */
export default function EchecPage() {
  return (
    <section className="phero">
      <div className="phero-wrap">
        <div className="eyebrow">
          <span className="rule"></span> Contact · envoi interrompu
        </div>
        <h1>Votre message <em>n&apos;a pas pu être transmis.</em></h1>
        <p className="lede">
          Vérifiez que votre adresse e-mail est correcte et que votre message fait
          <strong> au moins dix caractères</strong> — ce sont les deux causes les plus
          fréquentes. Si tout était complet, c&apos;est notre service d&apos;envoi qui est
          momentanément indisponible. <strong>Votre demande nous intéresse</strong> :
          voici comment nous joindre sans passer par le formulaire.
        </p>
        <div className="phero-meta">
          <span>E-mail <strong>tidjani@chadia-ong.org</strong></span>
          <span>Téléphone <strong>+235 65 62 62 40</strong></span>
          <span>Mobile <strong>+235 92 29 94 36</strong></span>
          <span>Siège <strong>Quartier Kabalaye · avenue Bezo · N&apos;Djamena</strong></span>
          <span>Lundi → vendredi · 8h–17h (UTC+1)</span>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
          <Link className="pbtn pbtn--accent" href="/contact">
            Réessayer le formulaire <i className="ph ph-arrow-counter-clockwise"></i>
          </Link>
          <a className="pbtn" href="mailto:tidjani@chadia-ong.org">
            Écrire directement
          </a>
        </div>
      </div>
    </section>
  );
}
