export const metadata = {
  title: "Results · CHADIA NGO",
  description:
    "Impact of CHADIA NGO programmes · AUDA-NEPAD 2022 (145 entrepreneurs), SPE 2024 (15 entrepreneurs, 88% mastery rate).",
  alternates: {
    canonical: "/en/results",
    languages: { "x-default": "/resultats", fr: "/resultats", en: "/en/results", ar: "/ar/results" },
  },
};

const IMPACT = [
  { l: "Entrepreneurs trained", v: "160", em: "+", d: "**145 under the AUDA-NEPAD programme** (Chad, Rwanda, Côte d'Ivoire) + 15 under the 2024 SPE programme. All MSME sectors and entrepreneurship training." },
  { l: "Business plans produced", v: "138", em: "", d: "**95% of AUDA-NEPAD participants** produced a personal business plan. 112 plans (77%) were validated by the final jury. 23 obtained bank or microfinance funding." },
  { l: "Average mastery rate", v: "88", em: "%", d: "**SPE 2024 programme · 7 modules**. Pre/post-test evaluation of all participants. The contractual 80% target was comfortably exceeded." },
  { l: "Countries of intervention", v: "3", em: "", d: "**Chad, Rwanda, Côte d'Ivoire**. International missions deployed under mandate from the African Union Development Agency (AUDA-NEPAD)." },
];

const SECTORS = [
  { tone: "s1", icon: "ph-graduation-cap", nm: "Entrepreneurship ", em: "training", sub: "Flagship programme · 7 modules · adult learning", ben: "160", benUnit: "entrepreneurs", pct: "60" },
  { tone: "s2", icon: "ph-drop", nm: "Water & ", em: "sanitation (WASH)", sub: "Construction worksites · East and South zones", ben: "Programmes", benUnit: "under way", pct: "20" },
  { tone: "s3", icon: "ph-bowl-food", nm: "Agriculture ", em: "& livestock", sub: "Agri-food processing · MSMEs", ben: "Programmes", benUnit: "under way", pct: "10" },
  { tone: "s4", icon: "ph-first-aid", nm: "Health ", em: "& safety", sub: "Capacity building for health personnel", ben: "Ministerial", benUnit: "certificates", pct: "5" },
  { tone: "s5", icon: "ph-book-open-text", nm: "Education", em: "", sub: "Dedicated technical directorate in the organisation chart", ben: "Programmes", benUnit: "under way", pct: "5" },
];

const FUNDING_REELS = [
  { color: "oklch(0.55 0.13 220)", nm: "AUDA-NEPAD / African Union", v: "43", dash: "43 88", offset: "0" },
  { color: "oklch(0.5 0.16 240)", nm: "Solar Power Enterprise (SPE)", v: "23", dash: "23 88", offset: "-43" },
  { color: "oklch(0.55 0.16 25)", nm: "Chadian ministries", v: "20", dash: "20 88", offset: "-66" },
  { color: "var(--color-mineral)", nm: "Other partners", v: "14", dash: "14 88", offset: "-86" },
];

const CASES = [
  {
    titre: "AUDA-NEPAD · 145 MSME entrepreneurs",
    em: "Chad · Rwanda · Côte d'Ivoire",
    period: "February → April 2022",
    desc: "Seminar in entrepreneurial engineering, business management and marketing of agro-pastoral products. 3 sites (N'Djamena, Kigali, Abidjan), 7 thematic modules, 138 business plans produced.",
    metrics: [
      { l: "Beneficiaries", v: "145" },
      { l: "Women trained", v: "48%" },
      { l: "Plans validated", v: "112" },
      { l: "Funding obtained", v: "23" },
      { l: "Budget", v: "43.1 M FCFA" },
    ],
    attestation: "Certificate of satisfaction issued by Mr Amine IDRISS ADOUM KARAMA, DIICIR Director at AUDA-NEPAD · 14 November 2022.",
    pdf: "/docs/rapports-activites/rapport-auda-nepad-2022.pdf",
  },
  {
    titre: "Solar Power Enterprise · Entrepreneurial Development Training",
    em: "N'Djamena · Chad",
    period: "April → June 2024",
    desc: "Training programme for 15 SPE partner entrepreneurs. 7 two-day modules covering entrepreneurship, business planning, financial management, strategy, marketing, financing and leadership.",
    metrics: [
      { l: "Beneficiaries", v: "15" },
      { l: "Attendance rate", v: "98%" },
      { l: "Concept mastery", v: "88%" },
      { l: "Overall satisfaction", v: "92%" },
      { l: "Budget", v: "22.9 M FCFA" },
    ],
    attestation: "Certificate of Satisfactory Completion issued by Mr Terap Haggar, SPE Director General · 10 July 2024. Rated “Excellence” on 3 dimensions (Technical Expertise, Quality of Materials, Professionalism).",
    pdf: "/docs/rapports-activites/rapport-activite-2024-spe.pdf",
  },
  {
    titre: "National programme · Capacity building for health personnel",
    em: "Ministry of Public Health · Chad",
    period: "2023 – 2024",
    desc: "Training and support mission for Chadian health personnel under the national capacity-building programme. Modules covering reproductive health, nutrition and protection against gender-based violence.",
    metrics: [
      { l: "Commissioned by", v: "MoPH Chad" },
      { l: "Target province", v: "Ouaddaï" },
      { l: "RH / GBV axis", v: "5 sub-axes" },
      { l: "Status", v: "Closed" },
    ],
    attestation: "Certificate of satisfaction issued by the Ministry of Public Health of Chad.",
    pdf: "/docs/rapports-activites/rapport-renforcement-personnel-sante.pdf",
  },
];

function renderDesc(d: string) {
  const parts = d.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={i}>{p.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

export default function EnResultsPage() {
  return (
    <>
      <section className="phero">
        <div className="phero-wrap">
          <div className="eyebrow">
            <span className="rule"></span> Results · what we have done
          </div>
          <h1>Measure, <em>publish,</em> stand behind it.</h1>
          <p className="lede">
            Our programmes close with <strong>quantified activity reports</strong>,{" "}
            <strong>certificates of satisfactory completion</strong> issued by each
            commissioning partner, and <strong>post-training follow-up at 3 and 6
            months</strong>. All the data presented here comes from signed official reports
            (AUDA-NEPAD, SPE, Ministry of Public Health).
          </p>
          <div className="phero-meta">
            <span><strong>160+</strong> entrepreneurs trained</span>
            <span><strong>3</strong> countries of intervention</span>
            <span>Period <strong>2022 – 2024</strong></span>
            <span>Certificates <strong>signed by commissioning partners</strong></span>
          </div>
        </div>
      </section>

      <section className="impact">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Overview
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,64px)", lineHeight: 1, letterSpacing: "-0.02em", fontWeight: 400, margin: "0 0 32px", maxWidth: "24ch" }}>
            Four verifiable <em style={{ fontStyle: "italic", color: "var(--color-terracotta)" }}>figures.</em>
          </h2>
          <div className="impact-grid">
            {IMPACT.map((i) => (
              <div key={i.l} className="imp">
                <div className="l">{i.l}</div>
                <div className="v">{i.v}{i.em && <em>{i.em}</em>}</div>
                <div className="d">{renderDesc(i.d)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sectors">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Breakdown by field
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,64px)", lineHeight: 1, letterSpacing: "-0.02em", fontWeight: 400, margin: "0 0 32px", maxWidth: "22ch" }}>
            Five fields <em style={{ fontStyle: "italic", color: "var(--color-terracotta)" }}>of action.</em>
          </h2>
          <div className="sectors-grid">
            <div>
              {SECTORS.map((s) => (
                <div key={s.nm} className="sec-row">
                  <div className={`ic ${s.tone}`}><i className={`ph ${s.icon}`}></i></div>
                  <div className="body">
                    <div className="nm">
                      {s.nm}{s.em && <em>{s.em}</em>}
                      <small>{s.sub}</small>
                    </div>
                    <div className="ben">{s.ben} <em>{s.benUnit}</em></div>
                    <div className="pct">{s.pct}%</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="donut-card">
              <div className="section-eyebrow" style={{ marginBottom: 0 }}>
                <span className="rule"></span> Source of funds (referenced projects)
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 400, margin: "8px 0 4px", lineHeight: 1, letterSpacing: "-0.01em" }}>
                Partner <em style={{ fontStyle: "italic", color: "var(--color-terracotta)" }}>mix</em>
              </h3>
              <p style={{ fontSize: 12, color: "var(--color-shale)", margin: "0 0 8px", fontFamily: "var(--font-mono)" }}>
                Based on referenced projects (extracts)
              </p>
              <div className="donut-wrap">
                <svg className="donut" viewBox="0 0 42 42">
                  <circle cx="21" cy="21" r="15.91" fill="none" stroke="var(--color-canvas)" strokeWidth="6"></circle>
                  {FUNDING_REELS.map((f) => (
                    <circle
                      key={f.nm}
                      cx="21" cy="21" r="15.91"
                      fill="none"
                      stroke={f.color}
                      strokeWidth="6"
                      strokeDasharray={f.dash}
                      strokeDashoffset={f.offset}
                      transform="rotate(-90 21 21)"
                    />
                  ))}
                  <text x="21" y="21" textAnchor="middle" dominantBaseline="central" fontFamily="Instrument Serif" fontSize="6" fill="var(--color-ink)">100%</text>
                </svg>
              </div>
              <div className="donut-legend">
                {FUNDING_REELS.map((f) => (
                  <div key={f.nm} className="row">
                    <span className="sw" style={{ background: f.color }}></span>
                    <span>{f.nm}</span>
                    <span className="v">{f.v}<em>%</em></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Case studies · referenced projects
          </div>
          <h2>Three missions, <em>three certificates.</em></h2>
          <p className="lede">
            Flagship programmes illustrate our methodology and execution rigour. Each closed
            with a detailed activity report and an official certificate from the
            commissioning partner.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 32 }}>
            {CASES.map((c) => (
              <article
                key={c.titre}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-line)",
                  borderRadius: 8,
                  padding: 32,
                }}
              >
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--color-terracotta)", marginBottom: 8 }}>
                  {c.period}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.015em", margin: "0 0 12px" }}>
                  {c.titre} <em style={{ fontStyle: "italic", color: "var(--color-terracotta)" }}>· {c.em}</em>
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--color-sepia)", margin: "0 0 24px", maxWidth: "60ch" }}>
                  {c.desc}
                </p>
                <div style={{ display: "grid", gridTemplateColumns: `repeat(${c.metrics.length}, 1fr)`, gap: 0, padding: "16px 0", borderTop: "1px solid var(--color-line)", borderBottom: "1px solid var(--color-line)" }}>
                  {c.metrics.map((m, i, arr) => (
                    <div
                      key={m.l}
                      style={{
                        padding: "0 16px",
                        borderRight: i === arr.length - 1 ? "none" : "1px dashed var(--color-line-strong)",
                      }}
                    >
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--color-stone)", fontWeight: 600 }}>{m.l}</div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.1, marginTop: 4 }}>{m.v}</div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, lineHeight: 1.5, color: "var(--color-shale)", margin: "16px 0 0", fontStyle: "italic" }}>
                  <i className="ph-fill ph-seal-check" style={{ color: "var(--color-success)", marginRight: 4 }}></i>
                  {c.attestation}
                </p>
                {c.pdf && (
                  <div style={{ marginTop: 16 }}>
                    <a
                      href={c.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px", background: "var(--color-canvas)", border: "1px solid var(--color-line-strong)", borderRadius: 4, fontSize: 13, color: "var(--color-ink)", textDecoration: "none", fontWeight: 500 }}
                    >
                      <i className="ph ph-file-pdf" style={{ color: "var(--color-terracotta)" }}></i>
                      See the full activity report (in French)
                      <i className="ph ph-arrow-up-right" style={{ fontSize: 12 }}></i>
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
