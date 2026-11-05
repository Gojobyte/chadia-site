import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our mission · CHADIA NGO",
  description:
    "CHADIA — Chadia for the Development of Chad (CDT), an independent, non-political Chadian non-profit: vocational training, entrepreneurship support, water and sanitation, agriculture, education and health.",
  alternates: {
    canonical: "/en/mission",
    languages: { fr: "/mission", en: "/en/mission", ar: "/ar/mission" },
  },
};

const PILLARS = [
  {
    num: "01 · Principle",
    t: "Field proximity",
    intro:
      "Our team is 100 % Chadian national staff. Headquarters are in N'Djamena (Kabalaye district) and our worksites are deployed in the country's East and South zones, as close as possible to beneficiaries.",
    points: [
      "Headquarters in N'Djamena · operations in the East & South zones",
      "100 % Chadian staff (8 employees in 2024)",
      "Adult-learning methodology that values each trainee's experience",
    ],
  },
  {
    num: "02 · Principle",
    t: "Transparency by default",
    intro:
      "Our financial statements are filed every year with the Directorate-General of Taxation (OHADA SYSCOHADA accounting system). Our internal framework rests on a procedures manual, a project-management plan and a rigorous PSEA safeguarding policy.",
    points: [
      "Financial statements filed (2021, 2022, 2023, 2024)",
      "Certifying firm: Atrio Consultance, BP 6118 N'Djamena",
      "Confidential SEA / PSEA reporting mechanism",
    ],
  },
  {
    num: "03 · Principle",
    t: "Measurable impact",
    intro:
      "Every programme ends with a quantified activity report, an evaluation by the commissioning partner and post-action follow-up at 3 and 6 months. Beneficiaries' progress is measured by pre- and post-training tests.",
    points: [
      "SPE 2024 programme: 88 % skills-mastery rate",
      "AUDA-NEPAD 2022 programme: 145 entrepreneurs trained (3 countries)",
      "Systematic follow-up at 3 and 6 months",
    ],
  },
];

const ZONES = [
  { num: "01", nm: "N'Djamena", em: true, sub: "Headquarters · Kabalaye district · main operations", v: "HQ" },
  { num: "02", nm: "East zone", sub: "WASH/construction project managers · production engineer", v: "Active" },
  { num: "03", nm: "South zone", sub: "WASH/construction project managers · production engineer", v: "Active" },
  { num: "04", nm: "International", sub: "Documented missions: Rwanda · Côte d'Ivoire", v: "Occasional" },
];

const TIMELINE = [
  { yr: "Foundation", t: "CHADIA is born", d: "A Chadian non-profit association, independent and non-political, for the economic and social development of Chad." },
  { yr: "2021–2022 · structuring", t: "Official recognition", d: "Regular filing of SYSCOHADA-standard financial statements, certified by Atrio Consultance." },
  { yr: "2022 · first continental mission", t: "AUDA-NEPAD programme (African Union)", d: "MSME entrepreneurship seminars in 3 countries — N'Djamena, Kigali, Abidjan. 145 entrepreneurs trained, 138 business plans produced.", major: true },
  { yr: "15 October 2022 · governance", t: "Executive Bureau established", d: "Official composition: Coordinator Tidjani SALAH, Treasurer, Accounting secretary, Communications officer. Board chair: Khadidja Bouchoura Youssouf." },
  { yr: "2024 · private-sector partnership", t: "SPE entrepreneurship training", d: "Mission for Solar Power Enterprise — 15 entrepreneurs trained across 7 modules. 88 % mastery, 92 % satisfaction, certificate of excellence.", major: true },
  { yr: "2024 · year-end", t: "205 M FCFA in revenue", d: "Service revenue 205 M FCFA · net income 15.6 M FCFA · value added 60.3 M FCFA. SYSCOHADA-certified accounts, audit by Atrio Consultance." },
];

export default function EnMissionPage() {
  return (
    <>
      <section className="hero-full">
        <Image
          className="bg"
          src="/images/tchad/guelta-archei-ennedi.webp"
          alt="The Guelta d'Archei in the Ennedi massif, UNESCO World Heritage, Chad"
          width={2400}
          height={1802}
          sizes="100vw"
          priority
        />
        <div className="veil"></div>
        <div className="hf-wrap">
          <div className="kicker">Our mission · who we are</div>
          <h1>CHADIA, <em>for the development</em> of Chad.</h1>
          <p className="lede">
            <strong>CHADIA — Chadia for the Development of Chad (CDT)</strong> is a Chadian
            non-profit association, independent and non-political. From N&apos;Djamena (Kabalaye
            district) we work in <strong>vocational training</strong>,{" "}
            <strong>entrepreneurship support</strong>, <strong>water and sanitation</strong>,{" "}
            <strong>agriculture and livestock</strong>, <strong>education</strong> and{" "}
            <strong>health and safety</strong>.
          </p>
          <div className="hf-meta">
            <span>Headquarters <strong>N&apos;Djamena · Kabalaye district</strong></span>
            <span><strong>8</strong> employees (FY 2024)</span>
            <span>Accounting <strong>SYSCOHADA</strong></span>
            <span>Phone <strong>+235 65 62 62 40</strong></span>
          </div>
        </div>
        <span className="credit">Guelta d&apos;Archei · Ennedi (UNESCO) — photo anmede · CC BY-SA 2.0</span>
      </section>

      <section className="manifesto">
        <div className="manifesto-wrap">
          <div>
            <p className="quote">
              Building capacity means <em>unlocking a country&apos;s potential.</em>
            </p>
            <p className="quote-by">
              <strong>Tidjani SALAH</strong>Director General · Executive Bureau Coordinator
            </p>
          </div>
          <div className="body">
            <p>
              CHADIA was born of a simple observation: Chad&apos;s <strong>micro, small and
              medium-sized enterprises</strong> make up most of the economic fabric, yet face
              structural constraints — limited access to finance, weak managerial capacity,
              difficult access to markets. We work to lift those obstacles, project by project,
              entrepreneur by entrepreneur.
            </p>
            <p>
              Our fields of expertise cover <strong>vocational training</strong>{" "}
              (entrepreneurship, finance, leadership), <strong>strategic advisory</strong> for
              SMEs, <strong>bankable business plans</strong>, <strong>water and sanitation
              (WASH)</strong>, <strong>construction</strong>, <strong>agriculture and
              livestock</strong>, <strong>education</strong> and <strong>health</strong>.
            </p>
            <p>
              Our methodology rests on <strong>adult learning</strong> and competency-based
              teaching. Our financial statements are filed annually under SYSCOHADA and
              certified by <strong>Atrio Consultance</strong>. Every mission closes with a
              certificate of satisfactory completion from the commissioning partner.
            </p>
          </div>
        </div>
      </section>

      <section className="pillars">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Three principles · one compass
          </div>
          <h2>What guides every <em>decision.</em></h2>
          <div className="pillars-grid">
            {PILLARS.map((p) => (
              <div key={p.num} className="pillar">
                <div className="num">{p.num}</div>
                <h3>{p.t}</h3>
                <p>{p.intro}</p>
                <ul>
                  {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="where">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Where we work
          </div>
          <h2>Chad <em>and beyond.</em></h2>
          <div className="where-grid">
            <div className="where-list">
              {ZONES.map((p) => (
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
            <div style={{ padding: 32, background: "var(--color-canvas)", border: "1px solid var(--color-line)", borderRadius: 6 }}>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--color-sepia)" }}>
                Our headquarters are in <strong>N&apos;Djamena (Kabalaye district, opposite the
                Idriss Mahamat Ouya stadium)</strong>. Two main intervention zones host our
                WASH and construction worksites, and our entrepreneurship training missions
                have been deployed in Chad, Rwanda and Côte d&apos;Ivoire for continental
                institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="psection-wrap">
          <div className="story-grid">
            <div>
              <div className="section-eyebrow">
                <span className="rule"></span> Milestones
              </div>
              <h2>Serving the <em>field.</em></h2>
              <p className="lede" style={{ fontSize: 15 }}>
                From the Executive Bureau to partnerships with the African Union and the
                private sector — a few structuring steps.
              </p>
            </div>
            <div className="timeline">
              {TIMELINE.map((t) => (
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

      <section className="cta">
        <div className="cta-wrap">
          <div>
            <h3>Would you like to <em>work with us?</em></h3>
            <p>
              Donor, institutional partner, private company, journalist or civil-society
              organisation — our team replies within 48 working hours at
              tidjani@chadia-ong.org or +235 65 62 62 40.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/en/contact" className="pbtn pbtn--accent">
              Contact us <i className="ph ph-arrow-up-right"></i>
            </Link>
            <Link href="/en" className="pbtn pbtn--inverse">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
