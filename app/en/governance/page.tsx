import Link from "next/link";

export const metadata = {
  title: "Governance · CHADIA NGO",
  description:
    "Chadian non-profit association. Board of directors, executive bureau and operational structure of CHADIA NGO for the development of Chad.",
  alternates: {
    canonical: "/en/governance",
    languages: { "x-default": "/gouvernance", fr: "/gouvernance", en: "/en/governance", ar: "/ar/governance" },
  },
};

const STRUCT = [
  {
    n: "01",
    nm: "General Assembly",
    sub: "Sovereign body — brings together founding and ordinary members. Votes the strategic plan, approves the annual accounts, elects the board of directors.",
    role: "Sovereign",
    freq: "Annual",
  },
  {
    n: "02",
    nm: "Board of ",
    em: "directors",
    sub: "3 members elected in general assembly — oversees strategic direction, guarantees compliance with the statutes, approves major financial commitments. Formalised on 15 October 2022.",
    role: "Strategy & oversight",
    freq: "Quarterly",
  },
  {
    n: "03",
    nm: "Executive ",
    em: "Bureau",
    sub: "Operational team led by the Coordinator — runs programme execution, treasury, procurement and communications. Act of 15 October 2022.",
    role: "Execution",
    freq: "Continuous",
  },
  {
    n: "04",
    nm: "Head of programmes",
    sub: "Coordinates 4 technical directorates: WASH/construction, Entrepreneurship/Training, Education, Agriculture/Livestock. Supervises the East and South zones.",
    role: "Programmes",
    freq: "Continuous",
  },
  {
    n: "05",
    nm: "Audit & Compliance",
    sub: "Internal audit, Procurement, Monitoring & Evaluation, Health/Safety/Environment officer. Atrio Consultance certifies the SYSCOHADA financial statements.",
    role: "Compliance",
    freq: "Continuous",
  },
];

export default function EnGovernancePage() {
  return (
    <>
      <section className="phero">
        <div className="phero-wrap">
          <div className="eyebrow">
            <span className="rule"></span> Governance · who decides
          </div>
          <h1>Decide <em>close to the field,</em> account for it <em>in the open.</em></h1>
          <p className="lede">
            <strong>CHADIA is a Chadian non-profit association</strong>, independent and
            non-political. Our governance rests on a <strong>board of directors</strong> of
            3 members elected in general assembly and an <strong>Executive Bureau</strong>{" "}
            led by a Coordinator. The official composition was formalised on{" "}
            <strong>15 October 2022</strong>.
          </p>
          <div className="phero-meta">
            <span>Status <strong>Chadian non-profit association</strong></span>
            <span>Headquarters <strong>Kabalaye district · N&apos;Djamena</strong></span>
            <span>PO Box <strong>6118 N&apos;Djamena</strong></span>
            <span>Accounting <strong>SYSCOHADA</strong> · Atrio Consultance</span>
          </div>
        </div>
      </section>

      <section className="struct">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Decision structure
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,64px)", lineHeight: 1, letterSpacing: "-0.02em", fontWeight: 400, margin: "0 0 32px", maxWidth: "22ch" }}>
            Five bodies, <em style={{ fontStyle: "italic", color: "var(--color-terracotta)" }}>one clear chain.</em>
          </h2>
          {STRUCT.map((s) => (
            <div key={s.n} className="struct-row">
              <div className="n">{s.n}</div>
              <div className="nm">
                {s.nm}{s.em && <em>{s.em}</em>}
                <small>{s.sub}</small>
              </div>
              <div className="role">{s.role}</div>
              <div className="freq">{s.freq}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="ethics">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> Ethics & safeguarding
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,64px)", lineHeight: 1, letterSpacing: "-0.02em", fontWeight: 400, margin: "0 0 8px", maxWidth: "22ch" }}>
            Three firm <em>commitments.</em>
          </h2>
          <p className="lede" style={{ fontSize: 15, color: "rgba(250,247,241,0.78)" }}>
            Safeguarding beneficiaries and our staff is governed by a documented system of
            prevention, reporting and referral.
          </p>
          <div className="ethics-grid">
            <div className="ethics-cell">
              <div className="l">01 · Reporting mechanism</div>
              <h4>Confidentiality <em>guaranteed</em></h4>
              <p>
                Any beneficiary, staff member or partner may report behaviour contrary to the
                Code of Conduct. Confidential form plus internal PSEA referral channels.
              </p>
              <Link href="/en/contact">File a report <i className="ph ph-arrow-up-right"></i></Link>
            </div>
            <div className="ethics-cell">
              <div className="l">02 · Annual financial audit</div>
              <h4>Certified <em>financial statements</em></h4>
              <p>
                <strong>Atrio Consultance</strong> (BP 6118 N&apos;Djamena). Filed each year
                under the OHADA SYSCOHADA system. FY 2021 to 2024 available to donors and
                partners on request.
              </p>
              <Link href="/en/contact">Request access to the financial statements <i className="ph ph-arrow-up-right"></i></Link>
            </div>
            <div className="ethics-cell">
              <div className="l">03 · Zero tolerance SEA / GBV</div>
              <h4>A public <em>policy</em></h4>
              <p>
                Individual code of conduct signed by every staff member, PSEA training plan,
                safe recruitment procedures, survivor referral pathways.
              </p>
              <Link href="/en/contact">Write to us to learn more <i className="ph ph-arrow-up-right"></i></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
