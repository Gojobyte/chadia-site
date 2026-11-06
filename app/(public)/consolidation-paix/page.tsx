import Image from "next/image";
import Link from "next/link";
import { LecteurVideo } from "@/components/public/LecteurVideo";

export const metadata = {
  title: "LOT 2 Hadjer-Lamis · Consolidation de la paix · ONG CHADIA",
  description:
    "LOT 2 Hadjer-Lamis : mobilisation communautaire et environnement dans quatre localités du pourtour du lac Tchad. 44 organisations accompagnées, 88 délégués formés, 2 000 plants. Financement du Fonds de consolidation de la paix des Nations unies via le PNUD, sous coordination de la Commission du Bassin du Lac Tchad.",
  alternates: {
    canonical: "/consolidation-paix",
    languages: { fr: "/consolidation-paix", en: "/en/peacebuilding", ar: "/ar/peacebuilding" },
  },
};

/* Deux pôles d'exécution, quatre localités. Haraz Albiar et Dagana sont les
   départements, Mani et Karal les sous-préfectures — distinction reprise du
   document de présentation du projet. */
const POLES = [
  {
    num: "01",
    nm: "Guité",
    em: true,
    sub: "avec Mittériné et Mahada · sous-préfecture de Mani, département de Haraz Albiar",
    v: "33 organisations",
  },
  {
    num: "02",
    nm: "Baltram",
    sub: "sous-préfecture de Karal, département de Dagana · desservi par descentes groupées",
    v: "11 organisations",
  },
];

/* Les quatre objectifs spécifiques, avec l'avancement arrêté au 18 octobre 2026.
   Les taux sont ceux de l'équipe de projet, repris tels quels. */
const OBJECTIFS = [
  {
    code: "OS 1",
    titre: "Organisations de la société civile",
    taux: "90 %",
    corps:
      "Onze organisations par localité — dix OSC et le comité de stabilisation de la paix — soit 44 organisations, chacune représentée par deux délégués. Le cycle de trois modules est clos dans les quatre localités : statuts et registre des membres ; gestion financière ; planification et redevabilité.",
    reste: "La remise et la certification des registres produits par les organisations.",
  },
  {
    code: "OS 2",
    titre: "Chaînes de valeur",
    taux: "70 %",
    corps:
      "Trois filières retenues avec les producteurs : le concombre, le poisson et la charmoute. Le cycle — identification, conservation et transformation, plan d'affaires — a été tenu dans les deux pôles. Le 10 octobre, 36 producteurs venus de 30 groupements ont été réunis par filière, et non par village.",
    reste:
      "Les plans d'affaires, le chiffrage des besoins — chambres froides, transport — et la recherche de banques pour accompagner les producteurs.",
  },
  {
    code: "OS 3",
    titre: "Reboisement",
    taux: "80 %",
    corps:
      "Deux mille plants, cinq cents par localité, vingt-cinq par bénéficiaire. Le choix des essences est venu des groupements eux-mêmes — manguier et eucalyptus en majorité, forte demande pour le zeytoune. Seule exigence du projet : des plants qui supportent les variations climatiques et la submersion en crue.",
    reste:
      "La mise en terre à Mahada et le contrôle de reprise à trente jours, bénéficiaire par bénéficiaire, pour une cible d'au moins 80 % de plants vivants.",
  },
  {
    code: "OS 4",
    titre: "Gouvernance environnementale",
    taux: "80 %",
    corps:
      "Douze sessions ont permis de désigner en assemblée les bureaux communautaires de gouvernance environnementale et de rédiger une convention locale par localité : mise en défens, couloirs de bétail, sanctions graduées, conciliation coutumière. Les autorités traditionnelles les ont déjà validées.",
    reste:
      "La validation administrative par les sous-préfets, la formalisation des signatures et l'installation effective des bureaux.",
  },
];

/* Chemin d'entrée dans chaque localité, tel que décrit par l'équipe. */
const ENTREE = [
  { n: "i.", t: "Autorité administrative", s: "Audience sur présentation de l'ordre de mission : sous-préfet de Mani ; sous-préfet puis préfet de Karal pour Baltram." },
  { n: "ii.", t: "Autorités coutumières", s: "Chef de canton, chefs de village, boulamas." },
  { n: "iii.", t: "Comité de stabilisation de la paix", s: "C'est avec lui que le plan d'action est discuté et arrêté, avant d'aller vers les organisations." },
  { n: "iv.", t: "Première réunion avec les organisations", s: "Chaque organisation est invitée à produire tous les documents dont elle dispose." },
  { n: "v.", t: "Examen individuel des dossiers", s: "Puis sélection des dix organisations retenues par localité." },
];

const GALERIE = [
  { src: "assemblee-organisations.webp", w: 1080, h: 810, cap: "Délégués des organisations réunis à Guité" },
  { src: "filiere-poisson.webp", w: 762, h: 915, cap: "Débarcadère de pêche — la filière poisson" },
  { src: "assemblee-baltram.webp", w: 618, h: 1100, cap: "Rencontre avec les organisations de Baltram, septembre 2026" },
  { src: "champ-concombre.webp", w: 762, h: 1016, cap: "Champ de concombre, pôle de Guité" },
  { src: "prise-parole-participante.webp", w: 1400, h: 1050, cap: "Une participante s'exprime lors de la cérémonie" },
  { src: "equipe-projet.webp", w: 762, h: 1016, cap: "L'équipe du projet installée à Guité" },
];

const EQUIPE = [
  { nom: "Tidjani SALAH", role: "Coordonnateur, chef de projet" },
  { nom: "Ousman Adoum SAMBA", role: "Responsable thématique mobilisation communautaire" },
  { nom: "Benjamin Gondjé NGUIRABÉ", role: "Responsable thématique environnement, ingénieur agronome" },
  { nom: "Djemenda NGARNAN", role: "Suivi-évaluation et communication" },
  { nom: "Allatessem GERALD", role: "Responsable administratif et financier" },
  { nom: "Moussa MARTIN", role: "Animateur communautaire, logisticien-magasinier" },
];

export default function ConsolidationPaixPage() {
  return (
    <>
      <section className="hero-full">
        <Image
          className="bg"
          src="/images/paix-lac-tchad/assemblee-lancement.webp"
          alt="Habitants des localités concernées réunis lors du lancement du projet à Guité"
          width={2560}
          height={1440}
          sizes="100vw"
          priority
        />
        <div className="veil"></div>
        <div className="hf-wrap">
          <div className="kicker">LOT 2 Hadjer-Lamis · projet en cours</div>
          <h1>La paix se construit <em>par les communautés.</em></h1>
          <p className="lede">
            <strong>Mobilisation communautaire et environnement dans quatre localités du
            pourtour du lac Tchad.</strong> Un projet financé par le Fonds de consolidation de
            la paix des Nations unies, à travers le PNUD, sous la coordination de la Commission
            du Bassin du Lac Tchad, et exécuté par l&apos;ONG CHADIA.
          </p>
          <div className="hf-actions">
            <span className="badge-live" style={{ color: "var(--pub-yellow)" }}>
              <span className="dot"></span> En exécution — 2 septembre au 1ᵉʳ décembre 2026
            </span>
          </div>
          <div className="hf-meta">
            <span>Financement <strong>Fonds de consolidation de la paix (PBF)</strong></span>
            <span>Mise en œuvre <strong>PNUD</strong></span>
            <span>Coordination régionale <strong>Commission du Bassin du Lac Tchad</strong></span>
            <span>Localités <strong>Guité · Mittériné · Mahada · Baltram</strong></span>
          </div>
        </div>
        <span className="credit">Lancement officiel — Guité, 19 septembre 2026</span>
      </section>

      <section className="counters">
        <div className="counters-wrap">
          <div className="counter">
            <div className="l">Organisations accompagnées</div>
            <div className="v">44</div>
            <div className="d">Onze par localité, dont le comité de stabilisation de la paix.</div>
          </div>
          <div className="counter">
            <div className="l">Délégués formés</div>
            <div className="v">88</div>
            <div className="d">Deux par organisation, sur dix-sept sessions de formation.</div>
          </div>
          <div className="counter">
            <div className="l">Plants mis à disposition</div>
            <div className="v">2 000</div>
            <div className="d">Cinq cents par localité, vingt-cinq par bénéficiaire.</div>
          </div>
          <div className="counter">
            <div className="l">Avancement au 18 oct. 2026</div>
            <div className="v">80 <em>%</em></div>
            <div className="d">Moyenne des quatre objectifs, estimée par l&apos;équipe de projet.</div>
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Le projet
          </div>
          <h2>Quatre localités, <em>deux pôles d&apos;exécution.</em></h2>
          <p className="lede">
            Le projet travaille dans quatre localités de la province du Hadjer-Lamis. Sur le
            terrain, CHADIA les sert depuis deux pôles : <strong>Guité</strong>, choisie comme
            centre d&apos;exécution, accueille le bureau de projet et les sessions regroupées des
            trois localités de la sous-préfecture de Mani ; <strong>Baltram</strong>, dans la
            sous-préfecture de Karal, est desservie par des descentes de plusieurs jours.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            Les travaux ont démarré le 2 septembre 2026 par une mission de cadrage de onze
            jours. Le lancement officiel s&apos;est tenu à Guité le 19 septembre, en présence des
            autorités administratives et coutumières.
          </p>

          <div className="where-grid" style={{ marginTop: 40 }}>
            <div className="where-list">
              {POLES.map((p) => (
                <div key={p.num} className="row">
                  <div className="num">{p.num}</div>
                  <div className="nm">
                    {p.em ? <em>{p.nm}</em> : p.nm}
                    <small>{p.sub}</small>
                  </div>
                  <div className="v">{p.v}</div>
                </div>
              ))}
            </div>
            <figure className="pfigure">
              <Image
                src="/images/paix-lac-tchad/carte-zone-intervention.webp"
                alt="Carte de la zone d'intervention du LOT 2 : provinces du Lac et du Hadjer-Lamis, avec les localités de Guité, Mittériné, Mahada et Baltram"
                width={900}
                height={424}
                sizes="(max-width: 860px) 100vw, 50vw"
              />
              <figcaption>Zone d&apos;intervention du LOT 2, province du Hadjer-Lamis</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="psection alt">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> La méthode
          </div>
          <h2>Entrer par <em>le comité de stabilisation de la paix.</em></h2>
          <p className="lede">
            Le PNUD a mis en place dans chaque localité un comité de stabilisation de la paix.
            CHADIA conduit son intervention <strong>avec lui et à travers lui</strong> : il est
            la porte d&apos;entrée du projet, le relais de la convocation et le premier
            interlocuteur. Il compte comme la onzième organisation de sa localité et participe
            aux formations.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            C&apos;est lui qui fournit les listes : les dix meilleures organisations de sa
            localité, les groupements réellement actifs sur les filières — et non ceux qui
            s&apos;en réclament — et les bénéficiaires des plants.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            La composante société civile a commencé par une question simple : quelles
            organisations existent réellement. <strong>Une centaine de groupements ont été
            recensés, la plupart sans activité réelle.</strong> C&apos;est ce constat, et non une
            hypothèse de départ, qui fonde le contenu des formations — et qui justifie que les
            organisations produisent leurs outils au lieu qu&apos;on les leur distribue.
          </p>

          <div className="impact-list" style={{ marginTop: 44 }}>
            {ENTREE.map((e) => (
              <div key={e.n} className="imp">
                <div className="n">{e.n}</div>
                <div>
                  <strong>{e.t}</strong>
                  <small>{e.s}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="psection dark">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Résultats · état arrêté au 18 octobre 2026
          </div>
          <h2>Les quatre objectifs, <em>et ce qui reste à faire.</em></h2>
          <p className="lede">
            Les taux ci-dessous sont des estimations établies par l&apos;équipe de projet, objectif
            par objectif. La moyenne s&apos;établit à 80 %.
          </p>

          <div className="chain chain--2" style={{ marginTop: 44 }}>
            {OBJECTIFS.map((o) => (
              <div key={o.code} className="node">
                <div className="role">{o.code} · avancement {o.taux}</div>
                <div className="who">{o.titre}</div>
                <p>{o.corps}</p>
                <p style={{ marginTop: 12, fontStyle: "italic" }}>
                  Ce qui reste — {o.reste}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Changement climatique
          </div>
          <h2>Les Dumba, <em>se protéger de l&apos;eau saison après saison.</em></h2>
          <p className="lede">
            Dans le Hadjer-Lamis, le climat sahélien impose deux contraintes à la fois : la
            sécheresse et la désertification d&apos;un côté, la crue du Chari et du lac Tchad de
            l&apos;autre. Les cultures de décrue qui font vivre les quatre localités se trouvent
            exactement là où l&apos;eau monte.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            La réponse des communautés porte un nom local : les <strong>Dumba</strong>. Des
            mini-barrages faits de sacs remplis de terre, alignés en travers des parcelles et le
            long du fleuve, qui retiennent la crue à l&apos;extérieur des champs de mil, de sorgho
            et de concombre. Ils sont rebâtis chaque année, avant la montée des eaux.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            <strong>Rien de cela n&apos;a été financé de l&apos;extérieur.</strong> Les producteurs
            construisent et entretiennent ces ouvrages depuis des décennies sur leurs propres
            cotisations : chaque chef de famille verse sa part, et ceux qui ne peuvent pas
            prendre place sur le chantier contribuent financièrement. Pour le seul site de
            Goré-Sara, les cotisations réunies représentent environ 2 000 000 FCFA, et la part
            demandée à chaque chef de famille atteint 5 000 FCFA.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            La limite est connue de tous : un ouvrage en sacs de terre ne tient qu&apos;une saison.
            C&apos;est pourquoi la question d&apos;<strong>ouvrages durables</strong> prenant le relais
            des Dumba figure parmi les points que le projet doit arbitrer avec le bailleur et
            les autorités.
          </p>

          <div className="pgallery" style={{ marginTop: 40 }}>
            <figure className="pfigure">
              <Image src="/images/paix-lac-tchad/dumba-digue.webp" alt="Digue en sacs de terre alignés le long d'une parcelle" width={762} height={844} sizes="(max-width: 860px) 100vw, 33vw" />
              <figcaption>Les sacs alignés un à un pour fermer le passage de l&apos;eau</figcaption>
            </figure>
            <figure className="pfigure">
              <Image src="/images/paix-lac-tchad/dumba-chantier.webp" alt="Chantier collectif de construction d'une digue en sacs de terre" width={1100} height={619} sizes="(max-width: 860px) 100vw, 33vw" />
              <figcaption>Un chantier entièrement manuel, mobilisé pendant des jours</figcaption>
            </figure>
            <figure className="pfigure">
              <Image src="/images/paix-lac-tchad/dumba-remplissage.webp" alt="Remplissage des sacs de terre sur le site même" width={762} height={1016} sizes="(max-width: 860px) 100vw, 33vw" />
              <figcaption>Le remplissage des sacs, sur le site même</figcaption>
            </figure>
          </div>

          <h3 style={{ marginTop: 56, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 28 }}>
            Ce que le projet apporte à l&apos;adaptation
          </h3>
          <p className="lede" style={{ fontSize: 15 }}>
            Le LOT 2 ne construit pas de digue. Il travaille sur ce qui rend la protection
            durable : <strong>les arbres, les règles d&apos;usage et les instances qui les font
            respecter</strong> — des essences choisies pour supporter la crue, une convention
            locale écrite par localité, et un bureau de gouvernance environnementale désigné en
            assemblée, composé de sept collèges.
          </p>
        </div>
      </section>

      <section className="psection alt">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Histoire de terrain
          </div>
          <h2>Le concombre <em>de Guité.</em></h2>
          <p className="lede">
            Le projet n&apos;a pas créé la filière du concombre : <strong>il l&apos;a fait
            écrire.</strong> Des années avant toute intervention extérieure, l&apos;association des
            producteurs de Guité avait envoyé l&apos;un des siens à Abéché étudier les débouchés. Il
            en était revenu avec des semences choisies pour le goût auquel les consommateurs
            d&apos;Abéché sont habitués, et un calendrier de semis calculé pour expédier pendant la
            rupture.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            Les producteurs ont aussi appris à se limiter. En portant les expéditions de trois à
            six camions par semaine, ils ont constaté que plus ils envoyaient, plus ils
            inondaient le marché et cassaient leur propre prix. La décision collective a été de
            revenir à environ trois camions de sept tonnes par semaine, et de s&apos;y tenir.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            La séance du 10 octobre a mis un chiffre sur ce que chacun savait : <strong>c&apos;est
            le transport qui absorbe la plus grande part de la valeur.</strong> De là est née la
            décision des producteurs de se constituer en coopérative et d&apos;acquérir leur propre
            camion.
          </p>

          <div className="counters-wrap" style={{ marginTop: 40, padding: 0 }}>
            <div className="counter">
              <div className="l">Par camion de 7 tonnes</div>
              <div className="v">200 <em>sacs</em></div>
              <div className="d">Environ 35 kg par sac.</div>
            </div>
            <div className="counter">
              <div className="l">Prix du sac au producteur</div>
              <div className="v">4 000 → 2 000 <em>F</em></div>
              <div className="d">Du début à la fin de la saison.</div>
            </div>
            <div className="counter">
              <div className="l">Transport d&apos;un sac vers Abéché</div>
              <div className="v">5 000 <em>F</em></div>
              <div className="d">Le poste qui absorbe la plus grande part de la valeur.</div>
            </div>
            <div className="counter">
              <div className="l">Camion visé par la coopérative</div>
              <div className="v">18 <em>M F</em></div>
              <div className="d">Prix estimé par les producteurs.</div>
            </div>
          </div>
          <p className="lede" style={{ fontSize: 13, marginTop: 20 }}>
            Chiffres recueillis auprès des producteurs lors de la séance du 10 octobre 2026 ;
            ils restent à confirmer par relevé contradictoire. Les volumes annuels, les revenus
            par campagne et les pertes après récolte ne sont pas encore mesurés.
          </p>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Reportage vidéo
          </div>
          <h2>Le lancement, <em>filmé sur place.</em></h2>
          <p className="lede" style={{ marginBottom: 36 }}>
            Télé Tchad a couvert la cérémonie de lancement à Guité. Autorités traditionnelles,
            représentants des services techniques et habitants des localités concernées y
            expliquent ce qu&apos;ils attendent du projet.
          </p>

          <LecteurVideo
            id="vafyHnC0Pow"
            titre="MASSAKORY — ONG CHADIA : lancement du LOT 2, Hadjer-Lamis"
            vignette="/images/paix-lac-tchad/video-vignette.webp"
            largeur={1600}
            hauteur={900}
          />

          <p className="lede" style={{ fontSize: 14, marginTop: 20 }}>
            Vidéo publiée sur la chaîne{" "}
            <a href="https://www.youtube.com/@Chadiaong" target="_blank" rel="noopener noreferrer">
              YouTube de l&apos;ONG CHADIA
            </a>.
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

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> L&apos;équipe
          </div>
          <h2>Qui conduit <em>le projet.</em></h2>
          <p className="lede">
            Le coordonnateur et le responsable administratif et financier sont basés à
            N&apos;Djaména ; le reste de l&apos;équipe est installé dans les localités.
          </p>
          <div className="impact-list" style={{ marginTop: 36 }}>
            {EQUIPE.map((m) => (
              <div key={m.nom} className="imp">
                <div className="n">—</div>
                <div>
                  <strong>{m.nom}</strong>
                  <small>{m.role}</small>
                </div>
              </div>
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
