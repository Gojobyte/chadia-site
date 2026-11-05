import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "رسالتنا · منظمة تشاديا",
  description:
    "تشاديا — منظمة تشادية مستقلة وغير سياسية لا تهدف إلى الربح: التدريب المهني، مرافقة ريادة الأعمال، المياه والإصحاح، الزراعة، التعليم والصحة.",
  alternates: {
    canonical: "/ar/mission",
    languages: { fr: "/mission", en: "/en/mission", ar: "/ar/mission" },
  },
};

const PILLARS = [
  {
    num: "01 · مبدأ",
    t: "القرب من الميدان",
    intro:
      "فريقنا مكوَّن بنسبة 100 % من كوادر وطنية تشادية. المقر في نجامينا (حي كابالاي)، وتنتشر ورشنا في منطقتي شرق البلاد وجنوبها، في أقرب نقطة من المستفيدين.",
    points: [
      "المقر في نجامينا · عمليات في منطقتي الشرق والجنوب",
      "كوادر تشادية 100 % (8 موظفين سنة 2024)",
      "منهج تعليم الكبار الذي يُثمّن خبرة كل متدرّب",
    ],
  },
  {
    num: "02 · مبدأ",
    t: "الشفافية قاعدةً",
    intro:
      "تودَع قوائمنا المالية كل سنة لدى المديرية العامة للضرائب (نظام المحاسبة SYSCOHADA). ويقوم إطارنا الداخلي على دليل إجراءات وخطة لإدارة المشاريع وسياسة صارمة للحماية من الاستغلال والانتهاك الجنسيين.",
    points: [
      "قوائم مالية مودَعة (2021، 2022، 2023، 2024)",
      "مكتب المصادقة: أتريو كونسلتانس، ص.ب 6118 نجامينا",
      "آلية سرّية للإبلاغ عن الاستغلال والانتهاك الجنسيين",
    ],
  },
  {
    num: "03 · مبدأ",
    t: "أثر قابل للقياس",
    intro:
      "يُختَم كل برنامج بتقرير نشاط مرقّم، وتقييم من الجهة المكلِّفة، ومتابعة بعدية في الشهر الثالث والسادس. ويقاس تقدّم المستفيدين باختبارات قبل التدريب وبعده.",
    points: [
      "برنامج SPE سنة 2024: نسبة إتقان 88 %",
      "برنامج أودا-نيباد 2022: تدريب 145 رائد أعمال (3 بلدان)",
      "متابعة منهجية في الشهر الثالث والسادس",
    ],
  },
];

const ZONES = [
  { num: "01", nm: "نجامينا", em: true, sub: "المقر · حي كابالاي · العمليات الرئيسية", v: "المقر" },
  { num: "02", nm: "منطقة الشرق", sub: "رؤساء مشاريع مياه وبناء · مهندس إنتاج", v: "نشطة" },
  { num: "03", nm: "منطقة الجنوب", sub: "رؤساء مشاريع مياه وبناء · مهندس إنتاج", v: "نشطة" },
  { num: "04", nm: "دوليًا", sub: "مهام موثّقة: رواندا · كوت ديفوار", v: "ظرفي" },
];

const TIMELINE = [
  { yr: "التأسيس", t: "ميلاد تشاديا", d: "جمعية تشادية لا تهدف إلى الربح، مستقلة وغير سياسية، من أجل التنمية الاقتصادية والاجتماعية لتشاد." },
  { yr: "2021–2022 · الهيكلة", t: "الاعتراف الرسمي", d: "إيداع منتظم للقوائم المالية وفق معيار SYSCOHADA، بمصادقة مكتب أتريو كونسلتانس." },
  { yr: "2022 · أول مهمة قارية", t: "برنامج أودا-نيباد (الاتحاد الأفريقي)", d: "ندوات في ريادة الأعمال للمؤسسات الصغرى في 3 بلدان — نجامينا وكيغالي وأبيدجان. تدريب 145 رائد أعمال وإعداد 138 خطة أعمال.", major: true },
  { yr: "15 أكتوبر 2022 · الحوكمة", t: "تنصيب المكتب التنفيذي", d: "التشكيلة الرسمية: المنسّق تجاني صالح، أمين الخزينة، كاتب الحسابات، مسؤول الاتصال. رئاسة مجلس الإدارة: خديجة بوشورة يوسف." },
  { yr: "2024 · شراكة مع القطاع الخاص", t: "تدريب SPE في ريادة الأعمال", d: "مهمة لفائدة شركة Solar Power Enterprise — تدريب 15 رائد أعمال على 7 وحدات. إتقان 88 %، رضا 92 %، وشهادة تميّز.", major: true },
  { yr: "2024 · ختام السنة المالية", t: "إيرادات بـ 205 ملايين فرنك", d: "إيرادات خدمات 205 ملايين فرنك · نتيجة صافية 15.6 مليونًا · قيمة مضافة 60.3 مليونًا. حسابات مصادَق عليها وفق SYSCOHADA، وتدقيق من أتريو كونسلتانس." },
];

export default function ArMissionPage() {
  return (
    <>
      <section className="hero-full">
        <Image
          className="bg"
          src="/images/tchad/guelta-archei-ennedi.webp"
          alt="قلتة أرشي في كتلة إنيدي الجبلية، تراث عالمي لليونسكو، تشاد"
          width={2400}
          height={1802}
          sizes="100vw"
          priority
        />
        <div className="veil"></div>
        <div className="hf-wrap">
          <div className="kicker">رسالتنا · من نحن</div>
          <h1>تشاديا، <em>من أجل تنمية</em> تشاد.</h1>
          <p className="lede">
            <strong>تشاديا — منظمة تشاديا لتنمية تشاد</strong> جمعية تشادية لا تهدف إلى الربح،
            مستقلة وغير سياسية. من نجامينا (حي كابالاي) نعمل في{" "}
            <strong>التدريب المهني</strong>، و<strong>مرافقة ريادة الأعمال</strong>،
            و<strong>المياه والإصحاح</strong>، و<strong>الزراعة والثروة الحيوانية</strong>،
            و<strong>التعليم</strong>، و<strong>الصحة والسلامة</strong>.
          </p>
          <div className="hf-meta">
            <span>المقر <strong>نجامينا · حي كابالاي</strong></span>
            <span><strong>8</strong> موظفين (سنة 2024)</span>
            <span>المحاسبة <strong>SYSCOHADA</strong></span>
            <span>الهاتف <strong>‎+235 65 62 62 40</strong></span>
          </div>
        </div>
        <span className="credit">قلتة أرشي · إنيدي (اليونسكو) — تصوير anmede · CC BY-SA 2.0</span>
      </section>

      <section className="manifesto">
        <div className="manifesto-wrap">
          <div>
            <p className="quote">
              بناء القدرات هو <em>إطلاق طاقات بلد بأكمله.</em>
            </p>
            <p className="quote-by">
              <strong>تجاني صالح</strong>المدير العام · منسّق المكتب التنفيذي
            </p>
          </div>
          <div className="body">
            <p>
              وُلدت تشاديا من ملاحظة بسيطة: تشكّل <strong>المؤسسات الصغرى والصغيرة
              والمتوسطة التشادية</strong> جلّ النسيج الاقتصادي، لكنها تواجه قيودًا هيكلية —
              وصول محدود إلى التمويل، وضعف في القدرات الإدارية، وصعوبة في الوصول إلى الأسواق.
              نعمل على رفع هذه العقبات، مشروعًا بعد مشروع، ورائد أعمال بعد آخر.
            </p>
            <p>
              تغطي مجالات خبرتنا <strong>التدريب المهني</strong> (ريادة الأعمال، المالية،
              القيادة)، و<strong>الاستشارات الاستراتيجية</strong> للمؤسسات الصغيرة والمتوسطة،
              و<strong>إعداد خطط أعمال قابلة للتمويل</strong>، و<strong>المياه
              والإصحاح</strong>، و<strong>البناء</strong>، و<strong>الزراعة والثروة
              الحيوانية</strong>، و<strong>التعليم</strong>، و<strong>الصحة</strong>.
            </p>
            <p>
              يقوم منهجنا على <strong>تعليم الكبار</strong> والتعلّم القائم على الكفايات.
              تودَع قوائمنا المالية سنويًا وفق نظام SYSCOHADA ويصادق عليها مكتب{" "}
              <strong>أتريو كونسلتانس</strong>. وتُختَم كل مهمة بشهادة حسن تنفيذ من الجهة
              المكلِّفة.
            </p>
          </div>
        </div>
      </section>

      <section className="pillars">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> ثلاثة مبادئ · بوصلة واحدة
          </div>
          <h2>ما يوجّه كل <em>قرار.</em></h2>
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
            <span className="rule"></span> أين نعمل
          </div>
          <h2>تشاد <em>وما بعدها.</em></h2>
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
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "var(--color-sepia)" }}>
                مقرّنا في <strong>نجامينا (حي كابالاي، مقابل ملعب إدريس محمد أويا)</strong>.
                تستضيف منطقتا تدخّل رئيسيتان ورش المياه والإصحاح والبناء، وقد نُفّذت مهامنا
                التدريبية في ريادة الأعمال في تشاد ورواندا وكوت ديفوار لفائدة مؤسسات قارية.
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
                <span className="rule"></span> محطات
              </div>
              <h2>في خدمة <em>الميدان.</em></h2>
              <p className="lede" style={{ fontSize: 15 }}>
                من تنصيب المكتب التنفيذي إلى الشراكة مع الاتحاد الأفريقي والقطاع الخاص —
                بعض المحطات المؤسِّسة.
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
            <h3>هل تودّون <em>التعاون معنا؟</em></h3>
            <p>
              جهة مانحة، شريك مؤسسي، شركة خاصة، صحفي أو منظمة مجتمع مدني — يردّ فريقنا في
              غضون 48 ساعة عمل على tidjani@chadia-ong.org أو ‎+235 65 62 62 40.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/ar/contact" className="pbtn pbtn--accent">
              اتصل بنا <i className="ph ph-arrow-up-left"></i>
            </Link>
            <Link href="/ar" className="pbtn pbtn--inverse">
              العودة إلى الرئيسية
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
