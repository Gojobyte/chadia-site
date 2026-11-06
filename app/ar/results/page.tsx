export const metadata = {
  title: "النتائج · منظمة تشاديا",
  description:
    "أثر برامج منظمة تشاديا · أودا-نيباد 2022 (145 رائد أعمال)، SPE سنة 2024 (15 رائد أعمال، نسبة إتقان 88%).",
  alternates: {
    canonical: "/ar/results",
    languages: { fr: "/resultats", en: "/en/results", ar: "/ar/results" },
  },
};

const IMPACT = [
  { l: "روّاد أعمال مدرَّبون", v: "160", em: "+", d: "**145 في برنامج أودا-نيباد** (تشاد، رواندا، كوت ديفوار) + 15 في برنامج SPE سنة 2024. جميع قطاعات المؤسسات الصغرى والتدريب الريادي." },
  { l: "خطط أعمال مُعدَّة", v: "138", em: "", d: "**95% من مشاركي أودا-نيباد** أعدّوا خطة أعمال شخصية. صودق على 112 خطة (77%) في لجنة التحكيم النهائية، وحصلت 23 على تمويل مصرفي أو من مؤسسات التمويل الأصغر." },
  { l: "متوسط نسبة الإتقان", v: "88", em: "%", d: "**برنامج SPE سنة 2024 · 7 وحدات**. تقييم قبلي وبعدي لجميع المشاركين. الهدف التعاقدي البالغ 80% تُجووز بوضوح." },
  { l: "بلدان التدخل", v: "3", em: "", d: "**تشاد ورواندا وكوت ديفوار**. مهام دولية نُفّذت بتكليف من وكالة تنمية الاتحاد الأفريقي (أودا-نيباد)." },
];

const SECTORS = [
  { tone: "s1", icon: "ph-graduation-cap", nm: "التدريب ", em: "الريادي", sub: "البرنامج الرائد · 7 وحدات · تعليم الكبار", ben: "160", benUnit: "رائد أعمال", pct: "60" },
  { tone: "s2", icon: "ph-drop", nm: "المياه ", em: "والإصحاح", sub: "ورش بناء · منطقتا الشرق والجنوب", ben: "برامج", benUnit: "جارية", pct: "20" },
  { tone: "s3", icon: "ph-bowl-food", nm: "الزراعة ", em: "والثروة الحيوانية", sub: "تحويل غذائي-زراعي · مؤسسات صغرى", ben: "برامج", benUnit: "جارية", pct: "10" },
  { tone: "s4", icon: "ph-first-aid", nm: "الصحة ", em: "والسلامة", sub: "بناء قدرات العاملين الصحيين", ben: "شهادات", benUnit: "وزارية", pct: "5" },
  { tone: "s5", icon: "ph-book-open-text", nm: "التعليم", em: "", sub: "مديرية فنية مخصصة في الهيكل التنظيمي", ben: "برامج", benUnit: "جارية", pct: "5" },
];

const FUNDING_REELS = [
  { color: "oklch(0.55 0.13 220)", nm: "أودا-نيباد / الاتحاد الأفريقي", v: "43", dash: "43 88", offset: "0" },
  { color: "oklch(0.5 0.16 240)", nm: "Solar Power Enterprise (SPE)", v: "23", dash: "23 88", offset: "-43" },
  { color: "oklch(0.55 0.16 25)", nm: "وزارات تشادية", v: "20", dash: "20 88", offset: "-66" },
  { color: "var(--color-mineral)", nm: "شركاء آخرون", v: "14", dash: "14 88", offset: "-86" },
];

const CASES = [
  {
    titre: "أودا-نيباد · 145 رائد أعمال",
    em: "تشاد · رواندا · كوت ديفوار",
    period: "فبراير ← أبريل 2022",
    desc: "ندوة في هندسة ريادة الأعمال وإدارة المؤسسات وتسويق المنتجات الزراعية الرعوية. 3 مواقع (نجامينا، كيغالي، أبيدجان)، 7 وحدات موضوعية، 138 خطة أعمال.",
    metrics: [
      { l: "المستفيدون", v: "145" },
      { l: "نساء مدرَّبات", v: "48%" },
      { l: "خطط مصادَق عليها", v: "112" },
      { l: "تمويلات محصَّلة", v: "23" },
      { l: "الميزانية", v: "43.1 مليون ف" },
    ],
    attestation: "شهادة رضا سلّمها السيد أمين إدريس آدم كرامة، مدير DIICIR في أودا-نيباد · 14 نوفمبر 2022.",
    pdf: "/docs/rapports-activites/rapport-auda-nepad-2022.pdf",
  },
  {
    titre: "Solar Power Enterprise · تدريب في التطوير الريادي",
    em: "نجامينا · تشاد",
    period: "أبريل ← يونيو 2024",
    desc: "برنامج تدريبي لخمسة عشر رائد أعمال من شركاء SPE. سبع وحدات من يومين تغطي ريادة الأعمال وخطة الأعمال والإدارة المالية والاستراتيجية والتسويق والتمويل والقيادة.",
    metrics: [
      { l: "المستفيدون", v: "15" },
      { l: "نسبة الحضور", v: "98%" },
      { l: "إتقان المفاهيم", v: "88%" },
      { l: "الرضا العام", v: "92%" },
      { l: "الميزانية", v: "22.9 مليون ف" },
    ],
    attestation: "شهادة حسن تنفيذ سلّمها السيد تراب حقار، المدير العام لـ SPE · 10 يوليو 2024. تقييم « تميّز » في 3 أبعاد (الخبرة الفنية، جودة المواد، الاحترافية).",
    pdf: "/docs/rapports-activites/rapport-activite-2024-spe.pdf",
  },
  {
    titre: "برنامج وطني · بناء قدرات العاملين الصحيين",
    em: "وزارة الصحة العامة · تشاد",
    period: "2023 – 2024",
    desc: "مهمة تدريب ومرافقة للعاملين الصحيين التشاديين في إطار البرنامج الوطني لبناء القدرات. وحدات في الصحة الإنجابية والتغذية والحماية من العنف القائم على النوع الاجتماعي.",
    metrics: [
      { l: "الجهة المكلِّفة", v: "وزارة الصحة" },
      { l: "الإقليم المستهدف", v: "وداي" },
      { l: "محور الصحة الإنجابية", v: "5 محاور فرعية" },
      { l: "الحالة", v: "مُقفَل" },
    ],
    attestation: "شهادة رضا سلّمتها وزارة الصحة العامة التشادية.",
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

export default function ArResultsPage() {
  return (
    <>
      <section className="phero">
        <div className="phero-wrap">
          <div className="eyebrow">
            <span className="rule"></span> النتائج · ما أنجزناه
          </div>
          <h1>نقيس، <em>وننشر,</em> ونتحمّل المسؤولية.</h1>
          <p className="lede">
            تُختَم برامجنا <strong>بتقارير نشاط مرقّمة</strong>، و<strong>شهادات حسن
            تنفيذ</strong> تسلّمها كل جهة مكلِّفة، و<strong>متابعة بعد التدريب في الشهر
            الثالث والسادس</strong>. جميع البيانات المعروضة هنا مأخوذة من تقارير رسمية موقَّعة
            (أودا-نيباد، SPE، وزارة الصحة العامة).
          </p>
          <div className="phero-meta">
            <span><strong>+160</strong> رائد أعمال مدرَّب</span>
            <span><strong>3</strong> بلدان تدخل</span>
            <span>الفترة <strong>2022 – 2024</strong></span>
            <span>شهادات <strong>موقَّعة من الجهات المكلِّفة</strong></span>
          </div>
        </div>
      </section>

      <section className="impact">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> نظرة عامة
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,64px)", lineHeight: 1.25, letterSpacing: "-0.02em", fontWeight: 400, margin: "0 0 32px", maxWidth: "24ch" }}>
            أربعة أرقام <em style={{ color: "var(--color-terracotta)" }}>قابلة للتحقق.</em>
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
            <span className="rule"></span> التوزيع بحسب المجال
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,64px)", lineHeight: 1.25, letterSpacing: "-0.02em", fontWeight: 400, margin: "0 0 32px", maxWidth: "22ch" }}>
            خمسة مجالات <em style={{ color: "var(--color-terracotta)" }}>للعمل.</em>
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
                <span className="rule"></span> مصدر التمويل (مشاريع مرجعية)
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 400, margin: "8px 0 4px", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                مزيج <em style={{ color: "var(--color-terracotta)" }}>الشركاء</em>
              </h3>
              <p style={{ fontSize: 12, color: "var(--color-shale)", margin: "0 0 8px", fontFamily: "var(--font-mono)" }}>
                على أساس المشاريع المرجعية (مقتطفات)
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
            <span className="rule"></span> دراسات حالة · مشاريع مرجعية
          </div>
          <h2>ثلاث مهام، <em>ثلاث شهادات.</em></h2>
          <p className="lede">
            برامج رائدة تبيّن منهجيتنا وصرامتنا في التنفيذ. اختُتم كل منها بتقرير نشاط مفصّل
            وشهادة رسمية من الجهة المكلِّفة.
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
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.015em", margin: "0 0 12px" }}>
                  {c.titre} <em style={{ color: "var(--color-terracotta)" }}>· {c.em}</em>
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--color-sepia)", margin: "0 0 24px", maxWidth: "60ch" }}>
                  {c.desc}
                </p>
                <div style={{ display: "grid", gridTemplateColumns: `repeat(${c.metrics.length}, 1fr)`, gap: 0, padding: "16px 0", borderTop: "1px solid var(--color-line)", borderBottom: "1px solid var(--color-line)" }}>
                  {c.metrics.map((m, i, arr) => (
                    <div
                      key={m.l}
                      style={{
                        padding: "0 16px",
                        borderLeft: i === arr.length - 1 ? "none" : "1px dashed var(--color-line-strong)",
                      }}
                    >
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--color-stone)", fontWeight: 600 }}>{m.l}</div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.2, marginTop: 4 }}>{m.v}</div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, lineHeight: 1.6, color: "var(--color-shale)", margin: "16px 0 0" }}>
                  <i className="ph-fill ph-seal-check" style={{ color: "var(--color-success)", marginLeft: 4 }}></i>
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
                      التقرير الكامل (بالفرنسية)
                      <i className="ph ph-arrow-up-left" style={{ fontSize: 12 }}></i>
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
