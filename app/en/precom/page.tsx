import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "PRECOM project · CHADIA NGO",
  description:
    "PRECOM — Strengthening community resilience in N'Djamena's 1st district (Farcha, Milézi, Madjorio). Sub-component 2.2 of the PILIER project, financed by the World Bank, implemented by UNDP, executed by CHADIA NGO.",
  alternates: {
    canonical: "/en/precom",
    languages: { "x-default": "/precom", fr: "/precom", en: "/en/precom", ar: "/ar/precom" },
  },
};

const QUARTIERS = [
  { num: "01", nm: "Farcha", em: true, sub: "Riverside neighbourhood, exposed to the Chari river floods", v: "Priority" },
  { num: "02", nm: "Milézi", sub: "Weakened banks: drainage is the most urgent need", v: "Active" },
  { num: "03", nm: "Madjorio", sub: "Inhabited area where sanitation still needs strengthening", v: "Active" },
];

const ETAPES = [
  { yr: "Step 1 · preparation", t: "Preparation & targeting", d: "Identification of intervention sites and beneficiaries across the three neighbourhoods." },
  { yr: "Step 2 · mobilisation", t: "Community mobilisation", d: "Awareness-raising and organisation of groups, with neighbourhood delegates and block chiefs." },
  { yr: "Step 3 · works", t: "Drain clearing (labour-intensive)", d: "Cleaning of 6 km of traditional drains by local labour.", major: true },
  { yr: "Step 4 · income", t: "Income-generating activities & support", d: "Gravel crushing by women's groups, training and savings.", major: true },
  { yr: "Step 5 · sustainability", t: "Follow-up & consolidation", d: "Evaluation of results and durable anchoring of gains in the neighbourhoods." },
];

const RESULTATS = [
  { n: "i.", t: "Better drainage and fewer floods", s: "6 km of drains cleared in the most exposed areas." },
  { n: "ii.", t: "Improved sanitary conditions and living environment", s: "Less stagnant water, less waste in the canals." },
  { n: "iii.", t: "Higher incomes for vulnerable people", s: "Women's groups equipped, trained and supported." },
  { n: "iv.", t: "Local jobs for young people and women", s: "The labour-intensive approach favours human mobilisation over machinery." },
  { n: "v.", t: "A healthier, safer, more durable living environment", s: "Community ownership that outlives the project." },
];

const GALERIE = [
  { src: "canal-farcha-panorama.webp", w: 1080, h: 1080, cap: "Clogged open canal — Farcha, initial state" },
  { src: "eaux-stagnantes.webp", w: 1080, h: 1080, cap: "Stagnant water in the heart of the neighbourhood" },
  { src: "canal-dechets-betail.webp", w: 1080, h: 1080, cap: "Waste and stray livestock in the canal" },
  { src: "caniveau-traditionnel.webp", w: 1080, h: 1080, cap: "Traditional drain before clearing" },
  { src: "mobilisation-quartier.webp", w: 1152, h: 864, cap: "Residents mobilised along the route" },
  { src: "panneau-chantier.webp", w: 1152, h: 864, cap: "Worksite signage — labour-intensive works safety" },
  { src: "agent-gilet-canal.webp", w: 1152, h: 864, cap: "Supervision of the works along the canal" },
  { src: "gravilloneuses-groupe.webp", w: 1080, h: 810, cap: "Women's gravel-crushing group at work" },
  { src: "equipe-officiels.webp", w: 1080, h: 607, cap: "The project team and community stakeholders" },
];

export default function EnPrecomPage() {
  return (
    <>
      <section className="hero-full">
        <Image
          className="bg"
          src="/images/precom/beneficiaires-arbres.webp"
          alt="Women beneficiaries gathered in the shade near gravel heaps"
          width={1080}
          height={810}
          sizes="100vw"
          priority
        />
        <div className="veil"></div>
        <div className="hf-wrap">
          <div className="kicker">Project under way · sub-component 2.2 of the PILIER project</div>
          <h1>PRECOM. Resilience <em>through the community.</em></h1>
          <p className="lede">
            <strong>Strengthening community resilience in N&apos;Djamena&apos;s 1st district —
            Farcha, Milézi and Madjorio.</strong> A micro-project financed by the World Bank,
            implemented by UNDP and executed by CHADIA NGO, for sanitation and better living
            conditions in the neighbourhoods most exposed to flooding.
          </p>
          <div className="hf-actions">
            <span className="badge-live" style={{ color: "var(--pub-yellow)" }}>
              <span className="dot"></span> Under way — launched on 10 June 2026 at CHADIA headquarters, Kabalaye
            </span>
          </div>
          <div className="hf-meta">
            <span>Financing <strong>World Bank · IDA grant</strong></span>
            <span>Implementation <strong>UNDP</strong></span>
            <span>Local execution <strong>CHADIA NGO</strong></span>
            <span>Area <strong>1st district · N&apos;Djamena</strong></span>
          </div>
        </div>
        <span className="credit">Women&apos;s groups — Farcha, June 2026</span>
      </section>

      <section className="counters">
        <div className="counters-wrap">
          <div className="counter">
            <div className="l">Flood-related deaths · Chad 2024</div>
            <div className="v">576</div>
            <div className="d">Climate change strikes a country caught between the Chari and the Logone.</div>
          </div>
          <div className="counter">
            <div className="l">People affected · 2024</div>
            <div className="v">1.9 <em>M</em></div>
            <div className="d">Nationwide, during the 2024 rainy season.</div>
          </div>
          <div className="counter">
            <div className="l">Drainage network cleared · 2024</div>
            <div className="v">+250 <em>km</em></div>
            <div className="d">In N&apos;Djamena: prevention proved itself. PRECOM extends that effort.</div>
          </div>
          <div className="counter">
            <div className="l">Drains to clear · PRECOM</div>
            <div className="v">6 <em>km</em></div>
            <div className="d">Traditional drains cleaned through labour-intensive works in three neighbourhoods.</div>
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Context & stakes
          </div>
          <h2>N&apos;Djamena facing <em>the floods.</em></h2>
          <p className="lede">
            Squeezed between the Chari and Logone rivers and heavy rains, the capital bears
            the full force of climate change. In 2024 it held up better thanks to preventive
            drainage measures — PRECOM builds on that momentum. Farcha-Milézi is among the
            most exposed areas: weakened banks, high river flow. The project acts where the
            need is most urgent.
          </p>
          <div className="duo" style={{ marginTop: 40 }}>
            <figure className="pfigure sq">
              <Image src="/images/precom/canal-engorge-rue.webp" alt="Canal clogged with waste in the middle of the street" width={1080} height={1080} sizes="(max-width: 860px) 100vw, 50vw" />
              <figcaption>Clogged canal — field observation, 1st district</figcaption>
            </figure>
            <figure className="pfigure sq">
              <Image src="/images/precom/eaux-stagnantes.webp" alt="Black stagnant water in a neighbourhood drain" width={1080} height={1080} sizes="(max-width: 860px) 100vw, 50vw" />
              <figcaption>Stagnant water — the source of floods and disease</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="psection alt">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Intervention area
          </div>
          <h2>Three neighbourhoods, <em>one front.</em></h2>
          <div className="where-grid" style={{ marginTop: 36 }}>
            <div className="where-list">
              {QUARTIERS.map((q) => (
                <div key={q.num} className="row">
                  <div className="num">{q.num}</div>
                  <div className="nm">
                    {q.em ? <em>{q.nm}</em> : q.nm}
                    <small>{q.sub}</small>
                  </div>
                  <div className="v">{q.v}</div>
                </div>
              ))}
            </div>
            <figure className="pfigure">
              <Image src="/images/precom/canal-farcha-panorama.webp" alt="Panoramic view of Farcha's open canal" width={1080} height={1080} sizes="(max-width: 860px) 100vw, 50vw" style={{ aspectRatio: "4 / 3" }} />
              <figcaption>Farcha&apos;s open canal, before intervention</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Component 1 · sanitation
          </div>
          <h2>Clearing 6 km <em>of drains.</em></h2>
          <p className="lede">
            Draining rainwater and runoff, reducing risk in exposed neighbourhoods — works
            carried out as <strong>labour-intensive public works</strong>: priority goes to
            local employment rather than machinery, with the direct involvement of young
            people and women.
          </p>
          <div className="duo" style={{ marginTop: 40 }}>
            <figure className="pfigure sq">
              <Image src="/images/precom/caniveau-macone-neuf.webp" alt="Masonry drain clogged with waste before clearing" width={1080} height={1080} sizes="(max-width: 860px) 100vw, 50vw" />
              <figcaption>Before — clogged masonry drain</figcaption>
            </figure>
            <figure className="pfigure sq">
              <Image src="/images/precom/agent-gilet-canal.webp" alt="Labour-intensive teams clearing a drainage canal" width={1152} height={864} sizes="(max-width: 860px) 100vw, 50vw" />
              <figcaption>During — clearing in progress</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="psection alt">
        <div className="psection-wrap">
          <div className="feature-grid">
            <div>
              <div className="section-eyebrow">
                <span className="rule"></span> Component 2 · income-generating activities
              </div>
              <h2>The women <em>gravel crushers.</em></h2>
              <p className="lede">
                Crushing and selling gravel: a structured income-generating activity that
                strengthens the economic autonomy of vulnerable women, organised in groups.
              </p>
              <div className="impact-list" style={{ maxWidth: "56ch" }}>
                <div className="imp"><div className="n">a.</div><p>Beneficiaries <small>Vulnerable women organised in groups.</small></p></div>
                <div className="imp"><div className="n">b.</div><p>Material support <small>Protective equipment and crushing tools.</small></p></div>
                <div className="imp"><div className="n">c.</div><p>Income <small>Gravel production and sale.</small></p></div>
                <div className="imp"><div className="n">d.</div><p>Sustainability <small>Training, savings and close support.</small></p></div>
              </div>
            </div>
            <div className="feature-photos">
              <figure className="pfigure tall">
                <Image src="/images/precom/gravilloneuse-concassage.webp" alt="Woman crushing gravel" width={1080} height={1080} sizes="(max-width: 900px) 50vw, 25vw" />
                <figcaption>Gravel crushing</figcaption>
              </figure>
              <figure className="pfigure tall">
                <Image src="/images/precom/gravilloneuses-travail.webp" alt="Women's gravel-crushing group at work" width={1080} height={1080} sizes="(max-width: 900px) 50vw, 25vw" />
                <figcaption>A group at work — Farcha</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="psection dark">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Community approach
          </div>
          <h2>Labour-intensive works: local jobs <em>at the heart of the project.</em></h2>
          <p className="lede">
            The labour-intensive approach favours human mobilisation over machinery, to
            maximise social and economic impact in the neighbourhoods.
          </p>
          <div className="feature-facts" style={{ fontSize: 13, gap: 40 }}>
            <span>Workforce <strong>local youth & women</strong></span>
            <span>Women&apos;s participation target <strong>≥ 30 % (UNDP)</strong></span>
            <span>Ground <strong>Farcha · Milézi · Madjorio</strong></span>
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Oversight · from donor to field
          </div>
          <h2>Financing & <em>governance.</em></h2>
          <div className="chain" style={{ marginTop: 40 }}>
            <div className="node">
              <div className="role">Financing</div>
              <div className="who">World Bank</div>
              <p>US$150 M IDA grant — PILIER project (2023), 6 years, 4 components.</p>
            </div>
            <div className="node">
              <div className="role">Component 2.2</div>
              <div className="who">Community interventions</div>
              <p>US$20 M dedicated to community resilience in N&apos;Djamena.</p>
            </div>
            <div className="node">
              <div className="role">Implementation</div>
              <div className="who">UNDP</div>
              <p>Implementing agent for the sub-component.</p>
            </div>
            <div className="node hot">
              <div className="role">Local execution</div>
              <div className="who">CHADIA NGO</div>
              <p>Field execution through the PRECOM micro-project.</p>
            </div>
          </div>
          <p style={{ margin: "32px 0 0", fontSize: 14, color: "var(--color-shale)", maxWidth: "70ch", lineHeight: 1.6 }}>
            Alongside the project: the <strong style={{ color: "var(--color-ink)" }}>1st district town hall</strong>{" "}
            (institutional support and local validation), the{" "}
            <strong style={{ color: "var(--color-ink)" }}>neighbourhood delegates and block chiefs</strong>, youth and
            women&apos;s associations, and the beneficiary population — at the heart of
            implementation and ownership.
          </p>
        </div>
      </section>

      <section className="psection alt">
        <div className="psection-wrap">
          <div className="story-grid">
            <div>
              <div className="section-eyebrow">
                <span className="rule"></span> Implementation
              </div>
              <h2>The main <em>steps.</em></h2>
              <p className="lede" style={{ fontSize: 15 }}>
                The phases follow one another over the micro-project&apos;s lifetime, from site
                identification to the consolidation of gains.
              </p>
            </div>
            <div className="timeline">
              {ETAPES.map((t) => (
                <div key={t.yr} className={`tl-row ${t.major ? "major" : ""}`}>
                  <div className="yr">{t.yr}</div>
                  <h4>{t.t}</h4>
                  <p>{t.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Impact
          </div>
          <h2>Expected <em>results.</em></h2>
          <div className="impact-list" style={{ marginTop: 36, maxWidth: "72ch" }}>
            {RESULTATS.map((r) => (
              <div key={r.n} className="imp">
                <div className="n">{r.n}</div>
                <p>{r.t}<small>{r.s}</small></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="psection alt">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Gallery · field report
          </div>
          <h2>The project <em>in pictures.</em></h2>
          <div className="pgallery" style={{ marginTop: 40 }}>
            {GALERIE.map((g) => (
              <figure key={g.src} className="pfigure">
                <Image src={`/images/precom/${g.src}`} alt={g.cap} width={g.w} height={g.h} sizes="(max-width: 860px) 100vw, 50vw" />
                <figcaption>{g.cap}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="feature-grid">
            <div>
              <div className="section-eyebrow">
                <span className="rule"></span> 10 June 2026 · Kabalaye
              </div>
              <h2>The official <em>launch.</em></h2>
              <p className="lede">
                The launch ceremony was held on 10 June 2026 at CHADIA headquarters in
                Kabalaye (west side of the Idriss Mahamat Ouya stadium), in the presence of
                partners, local authorities and representatives of the beneficiary
                communities.
              </p>
              <div className="phero-meta" style={{ borderTop: "1px solid var(--color-line)" }}>
                <span>Project motto <strong>“Value people, empower them, bring out their genius”</strong></span>
              </div>
            </div>
            <div>
              <figure className="pfigure wide" style={{ marginBottom: 20 }}>
                <Image src="/images/precom/lancement-salle.webp" alt="Hall of the PRECOM launch ceremony" width={1080} height={607} sizes="(max-width: 860px) 100vw, 50vw" />
                <figcaption>Launch ceremony — CHADIA headquarters, Kabalaye</figcaption>
              </figure>
              <figure className="pfigure wide">
                <Image src="/images/precom/lancement-intervenant.webp" alt="Speaker presenting the PRECOM project at the launch" width={1080} height={607} sizes="(max-width: 860px) 100vw, 50vw" />
                <figcaption>Presentation of the micro-project to stakeholders</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-wrap">
          <div>
            <h3>Let&apos;s act together for a <em>healthier, more resilient neighbourhood.</em></h3>
            <p>
              The project&apos;s success rests on everyone&apos;s mobilisation and ownership.
              Residents, associations, partners: contact the PRECOM team at
              tidjani@chadia-ong.org or +235 65 62 62 40.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/en/contact" className="pbtn pbtn--accent">
              Contact the team <i className="ph ph-arrow-up-right"></i>
            </Link>
            <Link href="/en/results" className="pbtn pbtn--inverse">
              Published results <i className="ph ph-chart-bar"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
