import Link from "next/link";

export const metadata = {
  title: "الحوكمة · منظمة تشاديا",
  description:
    "جمعية تشادية لا تهدف إلى الربح. مجلس الإدارة والمكتب التنفيذي والهيكل التشغيلي لمنظمة تشاديا لتنمية تشاد.",
  alternates: {
    canonical: "/ar/governance",
    languages: { fr: "/gouvernance", en: "/en/governance", ar: "/ar/governance" },
  },
};

const STRUCT = [
  {
    n: "01",
    nm: "الجمعية العامة",
    sub: "الهيئة السيادية — تجمع الأعضاء المؤسسين والمنخرطين. تصوّت على الخطة الاستراتيجية، وتصادق على الحسابات السنوية، وتنتخب مجلس الإدارة.",
    role: "سيادية",
    freq: "سنوية",
  },
  {
    n: "02",
    nm: "مجلس ",
    em: "الإدارة",
    sub: "3 أعضاء منتخبون في الجمعية العامة — يشرف على التوجهات الاستراتيجية، ويضمن الامتثال للنظام الأساسي، ويصادق على الالتزامات المالية الكبرى. أُقرّ في 15 أكتوبر 2022.",
    role: "استراتيجية ورقابة",
    freq: "فصلي",
  },
  {
    n: "03",
    nm: "المكتب ",
    em: "التنفيذي",
    sub: "فريق تشغيلي يقوده المنسّق — يدير تنفيذ البرامج والخزينة والمشتريات والاتصال. محضر 15 أكتوبر 2022.",
    role: "تنفيذ",
    freq: "مستمر",
  },
  {
    n: "04",
    nm: "مسؤول البرامج",
    sub: "ينسّق 4 مديريات فنية: المياه والإصحاح/البناء، ريادة الأعمال/التدريب، التعليم، الزراعة/الثروة الحيوانية. ويشرف على منطقتي الشرق والجنوب.",
    role: "برامج",
    freq: "مستمر",
  },
  {
    n: "05",
    nm: "التدقيق والامتثال",
    sub: "تدقيق داخلي، مشتريات، متابعة وتقييم، مسؤول صحة/سلامة/بيئة. ويصادق مكتب أتريو كونسلتانس على القوائم المالية وفق SYSCOHADA.",
    role: "امتثال",
    freq: "مستمر",
  },
];

export default function ArGovernancePage() {
  return (
    <>
      <section className="phero">
        <div className="phero-wrap">
          <div className="eyebrow">
            <span className="rule"></span> الحوكمة · من يقرّر عندنا
          </div>
          <h1>نقرّر <em>قرب الميدان،</em> ونحاسَب <em>في العلن.</em></h1>
          <p className="lede">
            <strong>تشاديا جمعية تشادية لا تهدف إلى الربح</strong>، مستقلة وغير سياسية. تقوم
            حوكمتنا على <strong>مجلس إدارة</strong> من 3 أعضاء منتخبين في الجمعية العامة،
            و<strong>مكتب تنفيذي</strong> يقوده منسّق. أُقرّت التشكيلة الرسمية في{" "}
            <strong>15 أكتوبر 2022</strong>.
          </p>
          <div className="phero-meta">
            <span>الصفة <strong>جمعية تشادية لا تهدف إلى الربح</strong></span>
            <span>المقر <strong>حي كابالاي · نجامينا</strong></span>
            <span>ص.ب <strong>6118 نجامينا</strong></span>
            <span>المحاسبة <strong>SYSCOHADA</strong> · مكتب أتريو كونسلتانس</span>
          </div>
        </div>
      </section>

      <section className="struct">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> هيكل القرار
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,64px)", lineHeight: 1.25, letterSpacing: "-0.02em", fontWeight: 400, margin: "0 0 32px", maxWidth: "22ch" }}>
            خمس هيئات، <em style={{ color: "var(--color-terracotta)" }}>سلسلة واضحة.</em>
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
            <span className="rule"></span> الأخلاقيات والحماية
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,64px)", lineHeight: 1.25, letterSpacing: "-0.02em", fontWeight: 400, margin: "0 0 8px", maxWidth: "22ch" }}>
            ثلاثة التزامات <em>راسخة.</em>
          </h2>
          <p className="lede" style={{ fontSize: 15, color: "rgba(250,247,241,0.78)" }}>
            حماية المستفيدين وموظفينا ينظّمها جهاز موثَّق للوقاية والإبلاغ والإحالة.
          </p>
          <div className="ethics-grid">
            <div className="ethics-cell">
              <div className="l">01 · آلية الإبلاغ</div>
              <h4>سرّية <em>مضمونة</em></h4>
              <p>
                يمكن لأي مستفيد أو موظف أو شريك الإبلاغ عن سلوك مخالف لمدونة السلوك. نموذج سرّي
                وقنوات إحالة داخلية للحماية من الاستغلال والانتهاك الجنسيين.
              </p>
              <Link href="/ar/contact">تقديم بلاغ <i className="ph ph-arrow-up-left"></i></Link>
            </div>
            <div className="ethics-cell">
              <div className="l">02 · تدقيق محاسبي سنوي</div>
              <h4>قوائم مالية <em>مصادَق عليها</em></h4>
              <p>
                مكتب <strong>أتريو كونسلتانس</strong> (ص.ب 6118 نجامينا). إيداع سنوي وفق نظام
                SYSCOHADA. سنوات 2021 إلى 2024 متاحة للجهات المانحة والشركاء عند الطلب.
              </p>
              <Link href="/ar/contact">طلب الاطلاع على القوائم المالية <i className="ph ph-arrow-up-left"></i></Link>
            </div>
            <div className="ethics-cell">
              <div className="l">03 · عدم التسامح مع الاستغلال والعنف</div>
              <h4>سياسة <em>معلنة</em></h4>
              <p>
                مدونة سلوك فردية يوقّعها كل موظف، خطة تدريب على الحماية، إجراءات توظيف آمن،
                ومسارات إحالة للناجيات.
              </p>
              <Link href="/ar/contact">راسلونا لمعرفة المزيد <i className="ph ph-arrow-up-left"></i></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
