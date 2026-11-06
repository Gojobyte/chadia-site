import Image from "next/image";
import Link from "next/link";
import { LecteurVideo } from "@/components/public/LecteurVideo";

export const metadata = {
  title: "Lot 2 Hadjer-Lamis · Peacebuilding · CHADIA NGO",
  description:
    "Lot 2 Hadjer-Lamis: community mobilisation and environment in four localities around Lake Chad. 44 organisations supported, 88 delegates trained, 2,000 seedlings. Financed by the UN Peacebuilding Fund through UNDP, coordinated by the Lake Chad Basin Commission.",
  alternates: {
    canonical: "/en/peacebuilding",
    languages: { fr: "/consolidation-paix", en: "/en/peacebuilding", ar: "/ar/peacebuilding" },
  },
};

const POLES = [
  { num: "01", nm: "Guité", em: true, sub: "with Mittériné and Mahada · Mani sub-prefecture, Haraz Albiar department", v: "33 organisations" },
  { num: "02", nm: "Baltram", sub: "Karal sub-prefecture, Dagana department · served by grouped field visits", v: "11 organisations" },
];

const OBJECTIFS = [
  {
    code: "SO 1", titre: "Civil-society organisations", taux: "90 %",
    corps: "Eleven organisations per locality — ten CSOs plus the peace-stabilisation committee — i.e. 44 organisations, each represented by two delegates. The three-module cycle is complete in all four localities: statutes and membership register; financial management; planning and accountability.",
    reste: "Handing over and certifying the registers produced by the organisations.",
  },
  {
    code: "SO 2", titre: "Value chains", taux: "70 %",
    corps: "Three value chains selected with the producers: cucumber, fish and charmoute. The cycle — identification, preservation and processing, business plan — was held in both hubs. On 10 October, 36 producers from 30 groups met by value chain rather than by village.",
    reste: "Producers' business plans, costing of needs — cold rooms, transport — and finding banks to support them.",
  },
  {
    code: "SO 3", titre: "Reforestation", taux: "80 %",
    corps: "Two thousand seedlings, five hundred per locality, twenty-five per beneficiary. The choice of species came from the groups themselves — mostly mango and eucalyptus, with strong demand for zeytoune. The project's only requirement: seedlings that withstand climate swings and flood submersion.",
    reste: "Planting in Mahada and the thirty-day survival check, beneficiary by beneficiary, targeting at least 80 % of seedlings alive.",
  },
  {
    code: "SO 4", titre: "Environmental governance", taux: "80 %",
    corps: "Twelve sessions led to community environmental-governance bureaus designated in assembly, and one written local convention per locality: protected regeneration areas, livestock corridors, graduated sanctions, customary conciliation. Traditional authorities have already validated them.",
    reste: "Administrative validation by the sub-prefects, formalisation of signatures and effective installation of the bureaus.",
  },
];

const ENTREE = [
  { n: "i.", t: "Administrative authority", s: "Audience upon presentation of the mission order: sub-prefect of Mani; sub-prefect then prefect of Karal for Baltram." },
  { n: "ii.", t: "Customary authorities", s: "Canton chief, village chiefs, boulamas." },
  { n: "iii.", t: "Peace-stabilisation committee", s: "The action plan is discussed and settled with it before approaching the organisations." },
  { n: "iv.", t: "First meeting with the organisations", s: "Each organisation is invited to produce every document it holds." },
  { n: "v.", t: "Individual review of the files", s: "Then selection of the ten organisations retained per locality." },
];

const GALERIE = [
  { src: "assemblee-organisations.webp", w: 1080, h: 810, cap: "Delegates of the organisations gathered in Guité" },
  { src: "filiere-poisson.webp", w: 762, h: 915, cap: "Fish landing site — the fish value chain" },
  { src: "assemblee-baltram.webp", w: 618, h: 1100, cap: "Meeting with the organisations of Baltram, September 2026" },
  { src: "champ-concombre.webp", w: 762, h: 1016, cap: "Cucumber field, Guité hub" },
  { src: "prise-parole-participante.webp", w: 1400, h: 1050, cap: "A participant speaks during the ceremony" },
  { src: "equipe-projet.webp", w: 762, h: 1016, cap: "The project team based in Guité" },
];

const EQUIPE = [
  { nom: "Tidjani SALAH", role: "Coordinator, project lead" },
  { nom: "Ousman Adoum SAMBA", role: "Thematic lead, community mobilisation" },
  { nom: "Benjamin Gondjé NGUIRABÉ", role: "Thematic lead, environment — agronomist" },
  { nom: "Djemenda NGARNAN", role: "Monitoring, evaluation and communication" },
  { nom: "Allatessem GERALD", role: "Administrative and financial officer" },
  { nom: "Moussa MARTIN", role: "Community facilitator, logistician-storekeeper" },
];

export default function EnPeacebuildingPage() {
  return (
    <>
      <section className="hero-full">
        <Image
          className="bg"
          src="/images/paix-lac-tchad/assemblee-lancement.webp"
          alt="Residents of the concerned localities gathered at the project launch in Guité"
          width={2560}
          height={1440}
          sizes="100vw"
          priority
        />
        <div className="veil"></div>
        <div className="hf-wrap">
          <div className="kicker">Lot 2 Hadjer-Lamis · project under way</div>
          <h1>Peace is built <em>by the communities.</em></h1>
          <p className="lede">
            <strong>Community mobilisation and environment in four localities around Lake
            Chad.</strong> A project financed by the UN Peacebuilding Fund, through UNDP,
            coordinated by the Lake Chad Basin Commission and executed by CHADIA NGO.
          </p>
          <div className="hf-actions">
            <span className="badge-live" style={{ color: "var(--pub-yellow)" }}>
              <span className="dot"></span> Under way — 2 September to 1 December 2026
            </span>
          </div>
          <div className="hf-meta">
            <span>Financing <strong>Peacebuilding Fund (PBF)</strong></span>
            <span>Implementation <strong>UNDP</strong></span>
            <span>Regional coordination <strong>Lake Chad Basin Commission</strong></span>
            <span>Localities <strong>Guité · Mittériné · Mahada · Baltram</strong></span>
          </div>
        </div>
        <span className="credit">Official launch — Guité, 19 September 2026</span>
      </section>

      <section className="counters">
        <div className="counters-wrap">
          <div className="counter">
            <div className="l">Organisations supported</div>
            <div className="v">44</div>
            <div className="d">Eleven per locality, including the peace-stabilisation committee.</div>
          </div>
          <div className="counter">
            <div className="l">Delegates trained</div>
            <div className="v">88</div>
            <div className="d">Two per organisation, across seventeen training sessions.</div>
          </div>
          <div className="counter">
            <div className="l">Seedlings supplied</div>
            <div className="v">2,000</div>
            <div className="d">Five hundred per locality, twenty-five per beneficiary.</div>
          </div>
          <div className="counter">
            <div className="l">Progress as of 18 Oct 2026</div>
            <div className="v">80 <em>%</em></div>
            <div className="d">Average across the four objectives, estimated by the project team.</div>
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> The project
          </div>
          <h2>Four localities, <em>two execution hubs.</em></h2>
          <p className="lede">
            The project works in four localities of Hadjer-Lamis province. On the ground,
            CHADIA serves them from two hubs: <strong>Guité</strong>, chosen as the execution
            centre, hosts the project office and the grouped sessions of the three localities
            of Mani sub-prefecture; <strong>Baltram</strong>, in Karal sub-prefecture, is
            served by multi-day field visits.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            Work began on 2 September 2026 with an eleven-day scoping mission. The official
            launch was held in Guité on 19 September, in the presence of administrative and
            customary authorities.
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
                alt="Map of the Lot 2 intervention area: Lake and Hadjer-Lamis provinces, with the localities of Guité, Mittériné, Mahada and Baltram"
                width={900}
                height={424}
                sizes="(max-width: 860px) 100vw, 50vw"
              />
              <figcaption>Lot 2 intervention area, Hadjer-Lamis province</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="psection alt">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> The method
          </div>
          <h2>Entering through <em>the peace-stabilisation committee.</em></h2>
          <p className="lede">
            UNDP has set up a peace-stabilisation committee in each locality. CHADIA conducts
            its work <strong>with it and through it</strong>: it is the project&apos;s entry
            point, the relay for convening people and the first interlocutor. It counts as
            the eleventh organisation of its locality and takes part in the training.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            It provides the lists: the ten best organisations of its locality, the groups
            genuinely active in the value chains — not merely those claiming to be — and the
            seedling beneficiaries.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            The civil-society component began with a simple question: which organisations
            actually exist. <strong>About a hundred groups were surveyed, most without any
            real activity.</strong> That finding — not a prior assumption — is what shapes
            the training content, and why the organisations produce their own tools instead
            of receiving them ready-made.
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
            <span className="rule"></span> Results · status as of 18 October 2026
          </div>
          <h2>The four objectives, <em>and what remains.</em></h2>
          <p className="lede">
            The rates below are estimates established by the project team, objective by
            objective. The average stands at 80 %.
          </p>

          <div className="chain chain--2" style={{ marginTop: 44 }}>
            {OBJECTIFS.map((o) => (
              <div key={o.code} className="node">
                <div className="role">{o.code} · progress {o.taux}</div>
                <div className="who">{o.titre}</div>
                <p>{o.corps}</p>
                <p style={{ marginTop: 12, fontStyle: "italic" }}>
                  What remains — {o.reste}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Climate change
          </div>
          <h2>The Dumba: <em>holding back the water, season after season.</em></h2>
          <p className="lede">
            In Hadjer-Lamis the Sahelian climate imposes two constraints at once: drought and
            desertification on one side, the flooding of the Chari and Lake Chad on the
            other. The flood-recession crops that sustain the four localities sit exactly
            where the water rises.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            The communities&apos; answer has a local name: the <strong>Dumba</strong>.
            Mini-dams made of earth-filled bags, lined up across the plots and along the
            river, keeping the floodwater out of the millet, sorghum and cucumber fields.
            They are rebuilt every year, before the waters rise.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            <strong>None of this was externally funded.</strong> The producers have built and
            maintained these structures for decades on their own contributions: every head of
            family pays a share, and those who cannot join the worksite contribute
            financially. For the Goré-Sara site alone, the pooled contributions amount to
            about 2,000,000 FCFA, with each head of family asked for 5,000 FCFA.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            Everyone knows the limit: a structure of earth bags lasts one season. That is why
            the question of <strong>durable structures</strong> taking over from the Dumba is
            among the points the project must settle with the donor and the authorities.
          </p>

          <div className="pgallery" style={{ marginTop: 40 }}>
            <figure className="pfigure">
              <Image src="/images/paix-lac-tchad/dumba-digue.webp" alt="Dyke of earth bags lined up along a plot" width={762} height={844} sizes="(max-width: 860px) 100vw, 33vw" />
              <figcaption>The bags lined up one by one to block the water&apos;s path</figcaption>
            </figure>
            <figure className="pfigure">
              <Image src="/images/paix-lac-tchad/dumba-chantier.webp" alt="Collective worksite building an earth-bag dyke" width={1100} height={619} sizes="(max-width: 860px) 100vw, 33vw" />
              <figcaption>An entirely manual worksite, mobilised for days</figcaption>
            </figure>
            <figure className="pfigure">
              <Image src="/images/paix-lac-tchad/dumba-remplissage.webp" alt="Filling the earth bags on site" width={762} height={1016} sizes="(max-width: 860px) 100vw, 33vw" />
              <figcaption>Filling the bags, on the site itself</figcaption>
            </figure>
          </div>

          <h3 style={{ marginTop: 56, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 28 }}>
            What the project brings to adaptation
          </h3>
          <p className="lede" style={{ fontSize: 15 }}>
            Lot 2 does not build dykes. It works on what makes protection durable:{" "}
            <strong>the trees, the rules of use and the bodies that enforce them</strong> —
            species chosen to withstand the flood, one written local convention per locality,
            and a community environmental-governance bureau designated in assembly, made up
            of seven colleges.
          </p>
        </div>
      </section>

      <section className="psection alt">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Field story
          </div>
          <h2>The cucumber <em>of Guité.</em></h2>
          <p className="lede">
            The project did not create the cucumber value chain: <strong>it had it written
            down.</strong> Years before any outside intervention, the Guité producers&apos;
            association sent one of its own to Abéché to study the market. He came back with
            seeds chosen for the taste Abéché consumers are used to, and a sowing calendar
            designed to ship during the supply gap.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            The producers also learned to limit themselves. Raising shipments from three to
            six trucks a week, they found that the more they sent, the more they flooded the
            market and crushed their own price. The collective decision was to come back to
            about three seven-tonne trucks a week, and to hold to it.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            The session of 10 October put a figure on what everyone knew:{" "}
            <strong>transport absorbs the largest share of the value.</strong> From that came
            the producers&apos; decision to form a cooperative and buy their own truck.
          </p>

          <div className="counters-wrap" style={{ marginTop: 40, padding: 0 }}>
            <div className="counter">
              <div className="l">Per seven-tonne truck</div>
              <div className="v">200 <em>bags</em></div>
              <div className="d">About 35 kg per bag.</div>
            </div>
            <div className="counter">
              <div className="l">Price per bag to the producer</div>
              <div className="v">4,000 → 2,000 <em>F</em></div>
              <div className="d">From the start to the end of the season.</div>
            </div>
            <div className="counter">
              <div className="l">Transporting one bag to Abéché</div>
              <div className="v">5,000 <em>F</em></div>
              <div className="d">The cost line that absorbs the largest share of the value.</div>
            </div>
            <div className="counter">
              <div className="l">Truck targeted by the cooperative</div>
              <div className="v">18 <em>M F</em></div>
              <div className="d">Price estimated by the producers.</div>
            </div>
          </div>
          <p className="lede" style={{ fontSize: 13, marginTop: 20 }}>
            Figures collected from the producers during the session of 10 October 2026; they
            remain to be confirmed by cross-checking. Annual volumes, per-season income and
            post-harvest losses are not yet measured.
          </p>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Video report
          </div>
          <h2>The launch, <em>filmed on site.</em></h2>
          <p className="lede" style={{ marginBottom: 36 }}>
            Télé Tchad covered the launch ceremony in Guité. Traditional authorities,
            technical services and residents of the concerned localities explain what they
            expect from the project (in French).
          </p>

          <LecteurVideo
            id="vafyHnC0Pow"
            titre="MASSAKORY — CHADIA NGO: launch of Lot 2, Hadjer-Lamis"
            vignette="/images/paix-lac-tchad/video-vignette.webp"
            largeur={1600}
            hauteur={900}
          />

          <p className="lede" style={{ fontSize: 14, marginTop: 20 }}>
            Video published on the NGO&apos;s{" "}
            <a href="https://www.youtube.com/@Chadiaong" target="_blank" rel="noopener noreferrer">
              YouTube channel
            </a>.
          </p>
        </div>
      </section>

      <section className="psection alt">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> In pictures
          </div>
          <h2>The project <em>on the ground.</em></h2>
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
            <span className="rule"></span> The team
          </div>
          <h2>Who runs <em>the project.</em></h2>
          <p className="lede">
            The coordinator and the administrative and financial officer are based in
            N&apos;Djamena; the rest of the team lives in the localities.
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
            <h3>Do you work <em>in the Lake Chad basin?</em></h3>
            <p>
              Civil-society organisation, technical partner or donor — our team replies
              within 48 working hours.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="pbtn pbtn--accent" href="/en/contact">
              Contact us <i className="ph ph-arrow-up-right"></i>
            </Link>
            <Link className="pbtn pbtn--inverse" href="/en/precom">
              See the PRECOM project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
