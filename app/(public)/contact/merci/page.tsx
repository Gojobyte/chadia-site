import Link from "next/link";

export const metadata = {
  title: "Message envoyé · ONG CHADIA",
  description: "Votre message a bien été transmis à la coordination de l'ONG CHADIA.",
  // Une page de confirmation n'a aucune valeur dans un moteur de recherche,
  // et une indexation ferait remonter « merci » sur des requêtes de contact.
  robots: { index: false, follow: true },
};

export default function MerciPage() {
  return (
    <section className="phero">
      <div className="phero-wrap">
        <div className="eyebrow">
          <span className="rule"></span> Contact · message transmis
        </div>
        <h1>Merci, <em>votre message est parti.</em></h1>
        <p className="lede">
          La coordination de l&apos;ONG CHADIA a bien reçu votre demande et vous répondra
          <strong> sous 48 heures ouvrées</strong>. Notre réponse arrivera à l&apos;adresse
          e-mail que vous avez indiquée — pensez à vérifier vos courriers indésirables.
        </p>
        <div className="phero-meta">
          <span>Téléphone <strong>+235 65 62 62 40</strong></span>
          <span>Mobile <strong>+235 92 29 94 36</strong></span>
          <span>Lundi → vendredi · 8h–17h (UTC+1)</span>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
          <Link className="pbtn pbtn--accent" href="/">
            Retour à l&apos;accueil <i className="ph ph-arrow-right"></i>
          </Link>
          <Link className="pbtn" href="/precom">
            Découvrir le projet PRECOM
          </Link>
        </div>
      </div>
    </section>
  );
}
