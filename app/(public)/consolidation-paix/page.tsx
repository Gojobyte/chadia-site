import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Consolidation de la paix · Hadjer-Lamis · ONG CHADIA",
  description:
    "Promotion des initiatives de consolidation de la paix menées par les OSC dans la région du bassin du lac Tchad — Lot 2 : Hadjer-Lamis. Projet financé par le Fonds de consolidation de la paix des Nations unies (PBF), mis en œuvre par le PNUD, exécuté par l'ONG CHADIA.",
};

/* Orthographes relevées sur la banderole officielle du lancement. */
const LOCALITES = [
  { num: "01", nm: "Haraz Albiar", em: true, sub: "Mittériné, Guité et Mahada", v: "Zone 1" },
  { num: "02", nm: "Dagana", sub: "Baltram", v: "Zone 2" },
];

const AXES = [
  {
    n: "i.",
    t: "Développement communautaire",
    s: "Structurer les organisations locales et soutenir les initiatives portées par les communautés elles-mêmes.",
  },
  {
    n: "ii.",
    t: "Protection de l'environnement",
    s: "Agir sur la dégradation des ressources naturelles, l'un des facteurs de tension dans le bassin du lac.",
  },
];

/* Formation de Bakara — les trois outils enseignés aux OSC partenaires. */
const OUTILS = [
  {
    num: "01",
    titre: "Les termes de référence",
    role: "planifier",
    desc: "Le document cadre : contexte, objectifs, résultats attendus, public cible, méthodologie, calendrier et budget — établis avant la mise en œuvre, jamais après.",
  },
  {
    num: "02",
    titre: "La liste de présence",
    role: "documenter",
    desc: "La preuve tangible que l'activité a eu lieu. Elle atteste qui a participé, valide les dépenses et sert de pièce justificative auprès du bailleur.",
  },
  {
    num: "03",
    titre: "Le rapport d'activité",
    role: "rendre compte",
    desc: "Ce qui a été réalisé, comment, avec quels résultats et quelles leçons — mis en regard des engagements pris dans les termes de référence.",
  },
];

/* Les dimensions déclarées correspondent aux fichiers réels : elles fixent le
   ratio et permettent à next/image de servir la bonne résolution. Toutes en
   4/3, la mise en page reste homogène. */
/* Six vues : la grille .pgallery se compose par cycles de six, ce nombre lui
   donne une mise en page complète. Les images issues de la captation vidéo
   sont en 1400×1050 ; le CSS impose de toute façon un ratio 4/3 en galerie. */
/* Ordre choisi d'après la grille : .pgallery donne une case large aux
   positions 1 et 5, moyenne aux positions 2 et 4, étroite aux 3 et 6. Les
   images les plus nettes occupent donc les grandes cases, et le cliché
   WhatsApp du lancement — le plus compressé — passe en petite case, où sa
   définition ne se remarque pas. */
const GALERIE = [
  { src: "participants-assemblee.webp", w: 1400, h: 1050, cap: "Autorités traditionnelles, femmes et services techniques réunis" },
  { src: "prise-parole-notable.webp", w: 1400, h: 1050, cap: "Prise de parole d'un responsable communautaire devant la presse" },
  { src: "lancement-banderole.webp", w: 1080, h: 810, cap: "Lancement officiel du Lot 2 — Hadjer-Lamis, 19 septembre 2026" },
  { src: "seance-projection.webp", w: 1400, h: 1050, cap: "Présentation des axes d'intervention aux participants" },
  { src: "prise-parole-participante.webp", w: 1400, h: 1050, cap: "Une participante s'exprime lors de la cérémonie" },
  { src: "temoignage-participant.webp", w: 1400, h: 1050, cap: "Témoignage recueilli auprès d'un participant" },
];

export default function ConsolidationPaixPage() {
  return (
    <>
      <section className="hero-full">
        <Image
          className="bg"
          src="/images/paix-lac-tchad/assemblee-communautaire.webp"
          alt="Assemblée communautaire réunie lors du lancement du projet : chefs traditionnels, femmes et habitants des localités concernées"
          width={1920}
          height={1080}
          sizes="100vw"
          priority
        />
        <div className="veil"></div>
        <div className="hf-wrap">
          <div className="kicker">Projet en cours · Lot 2 — Hadjer-Lamis</div>
          <h1>La paix se construit <em>par les communautés.</em></h1>
          <p className="lede">
            <strong>Promotion des initiatives de consolidation de la paix menées par les
            organisations de la société civile dans la région du bassin du lac Tchad.</strong> Un
            projet financé par le Fonds de consolidation de la paix des Nations unies, mis en
            œuvre par le PNUD et exécuté par l&apos;ONG CHADIA dans la province du Hadjer-Lamis.
          </p>
          <div className="hf-actions">
            <span className="badge-live" style={{ color: "var(--pub-yellow)" }}>
              <span className="dot"></span> En exécution — lancé le 19 septembre 2026
            </span>
          </div>
          <div className="hf-meta">
            <span>Financement <strong>Fonds de consolidation de la paix (PBF)</strong></span>
            <span>Mise en œuvre <strong>PNUD</strong></span>
            <span>Exécution locale <strong>ONG CHADIA</strong></span>
            <span>Zone <strong>Hadjer-Lamis · bassin du lac Tchad</strong></span>
          </div>
        </div>
        <span className="credit">Lancement officiel — Hadjer-Lamis, septembre 2026</span>
      </section>

      <section className="counters">
        <div className="counters-wrap">
          <div className="counter">
            <div className="l">Zones d&apos;intervention</div>
            <div className="v">2</div>
            <div className="d">Haraz Albiar et Dagana, dans la province du Hadjer-Lamis.</div>
          </div>
          <div className="counter">
            <div className="l">Localités couvertes</div>
            <div className="v">4</div>
            <div className="d">Mittériné, Guité, Mahada et Baltram.</div>
          </div>
          <div className="counter">
            <div className="l">Axes d&apos;intervention</div>
            <div className="v">2</div>
            <div className="d">Développement communautaire et protection de l&apos;environnement.</div>
          </div>
          <div className="counter">
            <div className="l">Lancement officiel</div>
            <div className="v">19 <em>sept.</em></div>
            <div className="d">Cérémonie tenue en 2026 devant les autorités et les communautés.</div>
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Contexte & enjeux
          </div>
          <h2>Le bassin du lac Tchad, <em>où la ressource fait la paix.</em></h2>
          <p className="lede">
            Dans le bassin du lac Tchad, la pression sur les ressources naturelles nourrit les
            tensions entre communautés : accès à l&apos;eau, aux pâturages et aux terres
            cultivables. Les conflits liés au pastoralisme y trouvent souvent leur origine.
            Protéger l&apos;environnement et structurer les organisations locales n&apos;est donc pas
            un objectif parallèle à la paix — <strong>c&apos;en est un levier direct</strong>.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            C&apos;est la conviction qui porte ce projet : les organisations de la société civile
            connaissent leur territoire, ses équilibres et ses fractures. Leur donner les moyens
            d&apos;agir revient à confier la consolidation de la paix à ceux qui y vivent.
            La devise du projet le résume :
            <em> « Valoriser, responsabiliser, faire sortir le génie de l&apos;Homme »</em>.
          </p>

          {/* Hors .pgallery : la grille y impose un ratio 4/3 qui amputerait le
              texte de la banderole. Conservée en 16/9, elle reste lisible. */}
          <figure className="pfigure wide" style={{ marginTop: 40 }}>
            <Image
              src="/images/paix-lac-tchad/banderole-officielle.webp"
              alt="Banderole officielle du projet : Lot 2 Hadjer-Lamis, financé par le PBF, mis en œuvre par le PNUD, exécuté par l'ONG CHADIA, avec les logos de la République du Tchad, du PNUD, de la Commission du Bassin du Lac Tchad, du Peacebuilding Fund et de CHADIA"
              width={1600}
              height={900}
              sizes="(max-width: 860px) 100vw, 100vw"
            />
            <figcaption>
              La banderole du lancement : République du Tchad, PNUD, Commission du Bassin
              du Lac Tchad, Peacebuilding Fund et ONG CHADIA
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="psection alt">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Terrain d&apos;intervention
          </div>
          <h2>Deux zones, <em>quatre localités.</em></h2>
          <div className="where-grid" style={{ marginTop: 36 }}>
            <div className="where-list">
              {LOCALITES.map((l) => (
                <div key={l.num} className="row">
                  <div className="num">{l.num}</div>
                  <div className="nm">
                    {l.em ? <em>{l.nm}</em> : l.nm}
                    <small>{l.sub}</small>
                  </div>
                  <div className="v">{l.v}</div>
                </div>
              ))}
            </div>
            <figure className="pfigure">
              <Image
                src="/images/paix-lac-tchad/participants-assemblee.webp"
                alt="Assemblée de participants : chefs traditionnels, femmes et représentants des services techniques"
                width={1400}
                height={1050}
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ aspectRatio: "4 / 3" }}
              />
              <figcaption>Les communautés réunies lors du lancement du projet</figcaption>
            </figure>
          </div>

          <div className="impact-list" style={{ marginTop: 44 }}>
            {AXES.map((a) => (
              <div key={a.n} className="imp">
                <div className="n">{a.n}</div>
                <div>
                  <strong>{a.t}</strong>
                  <small>{a.s}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Renforcement des capacités · Bakara, 24-25 août 2026
          </div>
          <h2>Outiller les OSC, <em>pas seulement les financer.</em></h2>
          <p className="lede">
            Un financement ne produit d&apos;effet durable que si l&apos;organisation qui le reçoit sait
            en rendre compte. CHADIA a réuni les organisations de la société civile partenaires
            pendant deux jours autour des trois documents qui structurent toute activité — et
            dont la maîtrise conditionne l&apos;accès aux financements futurs.
          </p>

          <div className="timeline" style={{ marginTop: 40 }}>
            {OUTILS.map((o) => (
              <div key={o.num} className="node">
                <div className="yr">{o.num} · {o.role}</div>
                <h3>{o.titre}</h3>
                <p>{o.desc}</p>
              </div>
            ))}
          </div>

          <p className="lede" style={{ fontSize: 15, marginTop: 36 }}>
            Ces trois documents forment un cycle : <strong>le TdR planifie, la liste de présence
            documente, le rapport rend compte.</strong> Employés systématiquement, ils
            construisent la redevabilité d&apos;une organisation — et avec elle, sa crédibilité
            auprès des bailleurs.
          </p>
        </div>
      </section>

      <section className="psection alt">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> En images
          </div>
          <h2>Le projet <em>sur le terrain.</em></h2>
          <div className="pgallery" style={{ marginTop: 36 }}>
            {GALERIE.map((g) => (
              <figure key={g.src} className="pfigure">
                <Image
                  src={`/images/paix-lac-tchad/${g.src}`}
                  alt={g.cap}
                  width={g.w}
                  height={g.h}
                  sizes="(max-width: 860px) 100vw, 33vw"
                />
                <figcaption>{g.cap}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-wrap">
          <div>
            <h3>Vous intervenez <em>dans le bassin du lac Tchad ?</em></h3>
            <p>
              Organisation de la société civile, partenaire technique ou bailleur — nos équipes
              répondent sous 48 heures ouvrées.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="pbtn pbtn--accent" href="/contact">
              Nous contacter <i className="ph ph-arrow-up-right"></i>
            </Link>
            <Link className="pbtn pbtn--inverse" href="/precom">
              Voir le projet PRECOM
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
