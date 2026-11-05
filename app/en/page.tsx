import Image from "next/image";
import Link from "next/link";
import { LecteurVideo } from "@/components/public/LecteurVideo";

export const metadata = {
  title: "CHADIA NGO · For the development of Chad",
  description:
    "CHADIA for the Development of Chad (CDT) — a national Chadian NGO registered under No. 154/PCMT/PMT/MEPDCI/SE/SPONGAH/2021. Development programmes, urban sanitation and capacity building in N'Djamena and the provinces.",
  alternates: {
    canonical: "/en",
    languages: { fr: "/", en: "/en", ar: "/ar" },
  },
};

const DOMAINS = [
  { num: "01", t: "Vocational training", d: "Entrepreneurship, management, finance and leadership — adult-learning methods that build on each trainee's experience." },
  { num: "02", t: "Advisory & entrepreneurship", d: "Support for SMEs and micro-businesses: bankable business plans, coaching, access to finance." },
  { num: "03", t: "Water, sanitation & construction", d: "WASH worksites and civil engineering deployed in the country's East and South zones." },
  { num: "04", t: "Agriculture & livestock", d: "Support for agro-pastoral value chains: crops, processing, products and services." },
  { num: "05", t: "Education", d: "Capacity-building and skills-transfer programmes in Chad and across the sub-region." },
  { num: "06", t: "Health, safety & environment", d: "Missions for the Ministry of Public Health, HSE framework and a rigorous PSEA safeguarding policy." },
];

export default function EnHomePage() {
  return (
    <>
      <section className="hero-full">
        <Image
          className="bg"
          src="/images/precom/chantier-himo-arbres.webp"
          alt="Community labour-intensive worksite under the trees, 1st district of N'Djamena"
          width={1152}
          height={864}
          sizes="100vw"
          priority
        />
        <div className="veil"></div>
        <div className="hf-wrap">
          <div className="kicker">National NGO · N&apos;Djamena, Chad</div>
          <h1>The development of Chad, <em>project by project.</em></h1>
          <p className="lede">
            <strong>CHADIA</strong> is an independent, non-political Chadian NGO. We train
            entrepreneurs, clean up neighbourhoods and support communities — with a 100 %
            national team and one requirement: <strong>measurable, published, verifiable
            results</strong>.
          </p>
          <div className="hf-actions">
            <Link href="/en/mission" className="pbtn pbtn--accent">
              Our mission <i className="ph ph-arrow-right"></i>
            </Link>
            <Link href="/en/contact" className="pbtn pbtn--inverse">
              Contact us
            </Link>
          </div>
          <div className="hf-meta">
            <span>Motto <strong>“Value people, empower them, bring out their genius”</strong></span>
            <span>Registration <strong>No. 154/PCMT/PMT/MEPDCI/SE/SPONGAH/2021</strong></span>
          </div>
        </div>
        <span className="credit">Labour-intensive worksite — N&apos;Djamena, 2026</span>
      </section>

      <section className="counters">
        <div className="counters-wrap">
          <div className="counter">
            <div className="l">Drains to clear · PRECOM</div>
            <div className="v">6 <em>km</em></div>
            <div className="d">Drainage restored through labour-intensive works in N&apos;Djamena&apos;s 1st district.</div>
          </div>
          <div className="counter">
            <div className="l">Entrepreneurs trained · AUDA-NEPAD</div>
            <div className="v">145</div>
            <div className="d">MSME seminars in 3 countries — N&apos;Djamena, Kigali, Abidjan (2022).</div>
          </div>
          <div className="counter">
            <div className="l">Skills mastery · SPE 2024</div>
            <div className="v">88 <em>%</em></div>
            <div className="d">Measured by pre/post-training tests. Satisfaction: 92 %.</div>
          </div>
          <div className="counter">
            <div className="l">Revenue · FY 2024</div>
            <div className="v">205 <em>M FCFA</em></div>
            <div className="d">SYSCOHADA financial statements filed, certified by Atrio Consultance.</div>
          </div>
        </div>
      </section>

      <section className="psection dark">
        <div className="psection-wrap">
          <div className="feature-grid">
            <div>
              <div className="badge-live" style={{ marginBottom: 18 }}>
                <span className="dot"></span> Project under way
              </div>
              <h2>PRECOM. Against the floods, <em>with the residents.</em></h2>
              <p className="lede">
                Sub-component 2.2 of the PILIER project, financed by the{" "}
                <strong style={{ color: "var(--color-page)" }}>World Bank</strong> (IDA grant),
                implemented by <strong style={{ color: "var(--color-page)" }}>UNDP</strong> and
                executed by CHADIA: 6 km of drains cleared through labour-intensive works, and
                income-generating activities for women in the Farcha, Milézi and Madjorio
                neighbourhoods.
              </p>
              <div className="feature-facts">
                <span>Launched <strong>10 June 2026</strong></span>
                <span>Neighbourhoods <strong>Farcha · Milézi · Madjorio</strong></span>
                <span>Women&apos;s participation <strong>≥ 30 %</strong></span>
              </div>
              <div style={{ marginTop: 28 }}>
                <Link href="/precom" className="pbtn pbtn--inverse">
                  Full project page (in French) <i className="ph ph-arrow-up-right"></i>
                </Link>
              </div>
            </div>
            <div className="feature-photos">
              <figure className="pfigure tall">
                <Image src="/images/precom/gravilloneuse-concassage.webp" alt="Woman gravel worker crushing stone" width={1080} height={1080} sizes="(max-width: 900px) 50vw, 25vw" />
                <figcaption>Income-generating work — gravel crushing</figcaption>
              </figure>
              <figure className="pfigure tall">
                <Image src="/images/precom/canal-engorge-rue.webp" alt="Drainage canal clogged with waste in the 1st district" width={1080} height={1080} sizes="(max-width: 900px) 50vw, 25vw" />
                <figcaption>Before clearing — Farcha</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="psection alt">
        <div className="psection-wrap">
          <div className="feature-grid">
            <div>
              <div className="badge-live" style={{ marginBottom: 18 }}>
                <span className="dot"></span> Project under way
              </div>
              <h2>Hadjer-Lamis. Peace is built <em>by the communities.</em></h2>
              <p className="lede">
                Lot 2 of the promotion of peacebuilding initiatives led by civil-society
                organisations in the Lake Chad basin: financed by the UN{" "}
                <strong>Peacebuilding Fund</strong>, implemented by <strong>UNDP</strong>,
                coordinated by the <strong>Lake Chad Basin Commission</strong> and executed by
                CHADIA — 44 organisations supported, 88 delegates trained and 2,000 seedlings
                supplied across four localities.
              </p>
              <div className="feature-facts">
                <span>Period <strong>2 Sept → 1 Dec 2026</strong></span>
                <span>Localities <strong>Guité · Mittériné · Mahada · Baltram</strong></span>
                <span>Progress <strong>80 % as of 18 Oct 2026</strong></span>
              </div>
              <div style={{ marginTop: 28 }}>
                <Link href="/consolidation-paix" className="pbtn pbtn--accent">
                  Full project page (in French) <i className="ph ph-arrow-up-right"></i>
                </Link>
              </div>
            </div>
            <div className="feature-photos">
              <figure className="pfigure tall">
                <Image src="/images/paix-lac-tchad/participants-assemblee-hd.webp" alt="Community assembly at the project launch in Hadjer-Lamis" width={1400} height={1050} sizes="(max-width: 900px) 50vw, 25vw" />
                <figcaption>Launch — Hadjer-Lamis</figcaption>
              </figure>
              <figure className="pfigure tall">
                <Image src="/images/paix-lac-tchad/prise-parole-participante.webp" alt="A participant takes the floor during the launch ceremony" width={1400} height={1050} sizes="(max-width: 900px) 50vw, 25vw" />
                <figcaption>Communities speak</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Six fields · one ground
          </div>
          <h2>What we <em>do.</em></h2>
          <div className="domains-grid" style={{ marginTop: 40 }}>
            {DOMAINS.map((d) => (
              <div key={d.num} className="domain">
                <div className="num">{d.num}</div>
                <h3>{d.t}</h3>
                <p>{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> On film
          </div>
          <h2>The launch, <em>filmed on site.</em></h2>
          <p className="lede" style={{ marginBottom: 36 }}>
            Télé Tchad covered the launch ceremony of the Hadjer-Lamis project. Traditional
            authorities, technical services and residents explain what they expect from it
            (in French).
          </p>
          <LecteurVideo
            id="vafyHnC0Pow"
            titre="MASSAKORY — CHADIA NGO: launch of Lot 2, Hadjer-Lamis"
            vignette="/images/paix-lac-tchad/video-vignette.webp"
            largeur={1600}
            hauteur={900}
          />
        </div>
      </section>

      <section className="cta">
        <div className="cta-wrap">
          <div>
            <h3>Would you like to <em>work with us?</em></h3>
            <p>
              Donor, institutional partner, private company, journalist or civil-society
              organisation — our team replies within 48 working hours.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="pbtn pbtn--accent" href="/en/contact">
              Contact us <i className="ph ph-arrow-up-right"></i>
            </Link>
            <Link className="pbtn pbtn--inverse" href="/en/mission">
              Our mission
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
