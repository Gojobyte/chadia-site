import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "مشروع بريكوم · منظمة تشاديا",
  description:
    "بريكوم — تعزيز صمود المجتمعات المحلية في المقاطعة الأولى بنجامينا (فرشا، ميليزي، ماجوريو). المكوّن الفرعي 2.2 من مشروع بيلييه، بتمويل من البنك الدولي وتنفيذ من برنامج الأمم المتحدة الإنمائي وتنفيذ ميداني من منظمة تشاديا.",
  alternates: {
    canonical: "/ar/precom",
    languages: { "x-default": "/precom", fr: "/precom", en: "/en/precom", ar: "/ar/precom" },
  },
};

const QUARTIERS = [
  { num: "01", nm: "فرشا", em: true, sub: "حي على ضفة النهر، معرّض لفيضانات نهر شاري", v: "أولوية" },
  { num: "02", nm: "ميليزي", sub: "ضفاف هشّة: الصرف هو الحاجة الأكثر إلحاحًا", v: "نشط" },
  { num: "03", nm: "ماجوريو", sub: "منطقة مأهولة لا يزال الإصحاح فيها بحاجة إلى تعزيز", v: "نشط" },
];

const ETAPES = [
  { yr: "الخطوة 1 · التحضير", t: "التحضير والاستهداف", d: "تحديد مواقع التدخل والمستفيدين في الأحياء الثلاثة." },
  { yr: "الخطوة 2 · التعبئة", t: "التعبئة المجتمعية", d: "توعية السكان وتنظيم المجموعات، مع مندوبي الأحياء ورؤساء المربعات." },
  { yr: "الخطوة 3 · الأشغال", t: "تطهير القنوات (كثيف اليد العاملة)", d: "تنظيف 6 كلم من القنوات التقليدية بسواعد محلية.", major: true },
  { yr: "الخطوة 4 · الدخل", t: "أنشطة مدرّة للدخل ومرافقة", d: "تكسير الحصى من قبل مجموعات نسائية، مع تدريب وادّخار.", major: true },
  { yr: "الخطوة 5 · الاستدامة", t: "المتابعة وترسيخ المكتسبات", d: "تقييم النتائج وترسيخ المكتسبات في الأحياء على نحو دائم." },
];

const RESULTATS = [
  { n: "i.", t: "صرف أفضل وفيضانات أقل", s: "تطهير 6 كلم من القنوات في المناطق الأكثر تعرّضًا." },
  { n: "ii.", t: "ظروف صحية وإطار معيشي أفضل", s: "مياه راكدة أقل ونفايات أقل في القنوات." },
  { n: "iii.", t: "دخل أعلى للفئات الهشّة", s: "مجموعات نسائية مجهَّزة ومدرَّبة ومرافَقة." },
  { n: "iv.", t: "فرص عمل محلية للشباب والنساء", s: "النهج كثيف اليد العاملة يفضّل التعبئة البشرية على المكننة." },
  { n: "v.", t: "إطار معيشي أكثر صحة وأمانًا واستدامة", s: "تملّك مجتمعي يستمر بعد نهاية المشروع." },
];

const GALERIE = [
  { src: "canal-farcha-panorama.webp", w: 1080, h: 1080, cap: "قناة مكشوفة مسدودة — فرشا، الحالة الأولى" },
  { src: "eaux-stagnantes.webp", w: 1080, h: 1080, cap: "مياه راكدة في قلب الحي" },
  { src: "canal-dechets-betail.webp", w: 1080, h: 1080, cap: "نفايات ومواشٍ سائبة في القناة" },
  { src: "caniveau-traditionnel.webp", w: 1080, h: 1080, cap: "قناة تقليدية قبل التطهير" },
  { src: "mobilisation-quartier.webp", w: 1152, h: 864, cap: "تعبئة السكان على طول المسار" },
  { src: "panneau-chantier.webp", w: 1152, h: 864, cap: "لافتات الورشة — سلامة الأشغال" },
  { src: "agent-gilet-canal.webp", w: 1152, h: 864, cap: "الإشراف على الأشغال على طول القناة" },
  { src: "gravilloneuses-groupe.webp", w: 1080, h: 810, cap: "مجموعة نسائية لتكسير الحصى أثناء العمل" },
  { src: "equipe-officiels.webp", w: 1080, h: 607, cap: "فريق المشروع والفاعلون المجتمعيون" },
];

export default function ArPrecomPage() {
  return (
    <>
      <section className="hero-full">
        <Image
          className="bg"
          src="/images/precom/beneficiaires-arbres.webp"
          alt="نساء مستفيدات مجتمعات في الظل قرب أكوام الحصى"
          width={1080}
          height={810}
          sizes="100vw"
          priority
        />
        <div className="veil"></div>
        <div className="hf-wrap">
          <div className="kicker">مشروع قيد التنفيذ · المكوّن الفرعي 2.2 من مشروع بيلييه</div>
          <h1>بريكوم. الصمود <em>بالمجتمع المحلي.</em></h1>
          <p className="lede">
            <strong>تعزيز صمود المجتمعات المحلية في المقاطعة الأولى بنجامينا — فرشا وميليزي
            وماجوريو.</strong> مشروع مصغّر بتمويل من البنك الدولي، وتنفيذ من برنامج الأمم
            المتحدة الإنمائي، وتنفيذ ميداني من منظمة تشاديا، من أجل الإصحاح وتحسين الإطار
            المعيشي في الأحياء الأكثر تعرّضًا للفيضانات.
          </p>
          <div className="hf-actions">
            <span className="badge-live" style={{ color: "var(--pub-yellow)" }}>
              <span className="dot"></span> قيد التنفيذ — أُطلق في 10 يونيو 2026 بمقر تشاديا، كابالاي
            </span>
          </div>
          <div className="hf-meta">
            <span>التمويل <strong>البنك الدولي · منحة المؤسسة الدولية للتنمية</strong></span>
            <span>التنفيذ <strong>برنامج الأمم المتحدة الإنمائي</strong></span>
            <span>التنفيذ الميداني <strong>منظمة تشاديا</strong></span>
            <span>المنطقة <strong>المقاطعة الأولى · نجامينا</strong></span>
          </div>
        </div>
        <span className="credit">المجموعات النسائية — فرشا، يونيو 2026</span>
      </section>

      <section className="counters">
        <div className="counters-wrap">
          <div className="counter">
            <div className="l">وفيات الفيضانات · تشاد 2024</div>
            <div className="v">576</div>
            <div className="d">تغيّر المناخ يضرب بلدًا محصورًا بين نهري شاري ولوغون.</div>
          </div>
          <div className="counter">
            <div className="l">المتضررون · 2024</div>
            <div className="v">1.9 <em>مليون</em></div>
            <div className="d">على المستوى الوطني، خلال موسم أمطار 2024.</div>
          </div>
          <div className="counter">
            <div className="l">شبكة صرف طُهّرت · 2024</div>
            <div className="v">+250 <em>كلم</em></div>
            <div className="d">في نجامينا: الوقاية أثبتت جدواها، وبريكوم يواصل هذا الجهد.</div>
          </div>
          <div className="counter">
            <div className="l">قنوات للتطهير · بريكوم</div>
            <div className="v">6 <em>كلم</em></div>
            <div className="d">قنوات تقليدية تُنظَّف بأشغال كثيفة اليد العاملة في ثلاثة أحياء.</div>
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> السياق والرهانات
          </div>
          <h2>نجامينا في مواجهة <em>الفيضانات.</em></h2>
          <p className="lede">
            العاصمة، المحصورة بين نهري شاري ولوغون وتحت أمطار غزيرة، تتلقى صدمة تغيّر المناخ
            كاملة. في 2024 صمدت على نحو أفضل بفضل تدابير الصرف الوقائية — وفي هذا المسار يندرج
            بريكوم. وتُعدّ فرشا-ميليزي من أكثر المناطق تعرّضًا: ضفاف هشّة وتدفق نهري مرتفع.
            يعمل المشروع حيث الحاجة أشد إلحاحًا.
          </p>
          <div className="duo" style={{ marginTop: 40 }}>
            <figure className="pfigure sq">
              <Image src="/images/precom/canal-engorge-rue.webp" alt="قناة مسدودة بالنفايات وسط الشارع" width={1080} height={1080} sizes="(max-width: 860px) 100vw, 50vw" />
              <figcaption>قناة مسدودة — معاينة ميدانية، المقاطعة الأولى</figcaption>
            </figure>
            <figure className="pfigure sq">
              <Image src="/images/precom/eaux-stagnantes.webp" alt="مياه راكدة سوداء في قناة حيّ" width={1080} height={1080} sizes="(max-width: 860px) 100vw, 50vw" />
              <figcaption>مياه راكدة — مصدر الفيضانات والأمراض</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="psection alt">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> ميدان التدخل
          </div>
          <h2>ثلاثة أحياء، <em>جبهة واحدة.</em></h2>
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
              <Image src="/images/precom/canal-farcha-panorama.webp" alt="منظر بانورامي لقناة فرشا المكشوفة" width={1080} height={1080} sizes="(max-width: 860px) 100vw, 50vw" style={{ aspectRatio: "4 / 3" }} />
              <figcaption>قناة فرشا المكشوفة، قبل التدخل</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> المكوّن 1 · الإصحاح
          </div>
          <h2>تطهير 6 كلم <em>من القنوات.</em></h2>
          <p className="lede">
            تصريف مياه الأمطار والجريان، وتقليص المخاطر في الأحياء المعرّضة — أشغال تُنفَّذ
            <strong> بكثافة اليد العاملة</strong>: الأولوية للتشغيل المحلي لا للمكننة، بمشاركة
            مباشرة من الشباب والنساء.
          </p>
          <div className="duo" style={{ marginTop: 40 }}>
            <figure className="pfigure sq">
              <Image src="/images/precom/caniveau-macone-neuf.webp" alt="قناة مبنية مسدودة بالنفايات قبل التطهير" width={1080} height={1080} sizes="(max-width: 860px) 100vw, 50vw" />
              <figcaption>قبل — قناة مبنية مسدودة</figcaption>
            </figure>
            <figure className="pfigure sq">
              <Image src="/images/precom/agent-gilet-canal.webp" alt="فرق كثيفة اليد العاملة تطهّر قناة صرف" width={1152} height={864} sizes="(max-width: 860px) 100vw, 50vw" />
              <figcaption>أثناء — التطهير جارٍ</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="psection alt">
        <div className="psection-wrap">
          <div className="feature-grid">
            <div>
              <div className="section-eyebrow">
                <span className="rule"></span> المكوّن 2 · الأنشطة المدرّة للدخل
              </div>
              <h2>نساء <em>تكسير الحصى.</em></h2>
              <p className="lede">
                تكسير الحصى وبيعه: نشاط مدرّ للدخل منظَّم يعزز الاستقلال الاقتصادي للنساء
                الهشّات، المنظَّمات في مجموعات.
              </p>
              <div className="impact-list" style={{ maxWidth: "56ch" }}>
                <div className="imp"><div className="n">أ.</div><p>المستفيدات <small>نساء هشّات منظَّمات في مجموعات.</small></p></div>
                <div className="imp"><div className="n">ب.</div><p>الدعم المادي <small>معدات حماية وأدوات تكسير.</small></p></div>
                <div className="imp"><div className="n">ج.</div><p>الدخل <small>إنتاج الحصى وتسويقه.</small></p></div>
                <div className="imp"><div className="n">د.</div><p>الاستدامة <small>تدريب وادّخار ومرافقة قريبة.</small></p></div>
              </div>
            </div>
            <div className="feature-photos">
              <figure className="pfigure tall">
                <Image src="/images/precom/gravilloneuse-concassage.webp" alt="امرأة تكسّر الحصى" width={1080} height={1080} sizes="(max-width: 900px) 50vw, 25vw" />
                <figcaption>تكسير الحصى</figcaption>
              </figure>
              <figure className="pfigure tall">
                <Image src="/images/precom/gravilloneuses-travail.webp" alt="مجموعة نسائية لتكسير الحصى أثناء العمل" width={1080} height={1080} sizes="(max-width: 900px) 50vw, 25vw" />
                <figcaption>مجموعة أثناء العمل — فرشا</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="psection dark">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> النهج المجتمعي
          </div>
          <h2>كثافة اليد العاملة: التشغيل المحلي <em>في قلب المشروع.</em></h2>
          <p className="lede">
            يفضّل هذا النهج التعبئة البشرية على المكننة، لتعظيم الأثر الاجتماعي والاقتصادي في
            الأحياء.
          </p>
          <div className="feature-facts" style={{ fontSize: 13, gap: 40 }}>
            <span>اليد العاملة <strong>شباب الأحياء ونساؤها</strong></span>
            <span>هدف مشاركة النساء <strong>30 % فأكثر (برنامج الأمم المتحدة الإنمائي)</strong></span>
            <span>الميدان <strong>فرشا · ميليزي · ماجوريو</strong></span>
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> الإشراف · من الممول إلى الميدان
          </div>
          <h2>التمويل <em>والحوكمة.</em></h2>
          <div className="chain" style={{ marginTop: 40 }}>
            <div className="node">
              <div className="role">التمويل</div>
              <div className="who">البنك الدولي</div>
              <p>منحة بـ 150 مليون دولار — مشروع بيلييه (2023)، 6 سنوات، 4 مكوّنات.</p>
            </div>
            <div className="node">
              <div className="role">المكوّن 2.2</div>
              <div className="who">التدخلات المجتمعية</div>
              <p>20 مليون دولار مخصصة لصمود المجتمعات في نجامينا.</p>
            </div>
            <div className="node">
              <div className="role">التنفيذ</div>
              <div className="who">برنامج الأمم المتحدة الإنمائي</div>
              <p>وكيل تنفيذ المكوّن الفرعي.</p>
            </div>
            <div className="node hot">
              <div className="role">التنفيذ الميداني</div>
              <div className="who">منظمة تشاديا</div>
              <p>التنفيذ في الميدان عبر مشروع بريكوم المصغّر.</p>
            </div>
          </div>
          <p style={{ margin: "32px 0 0", fontSize: 14, color: "var(--color-shale)", maxWidth: "70ch", lineHeight: 1.7 }}>
            إلى جانب المشروع: <strong style={{ color: "var(--color-ink)" }}>بلدية المقاطعة الأولى</strong> (دعم مؤسسي
            ومصادقة محلية)، و<strong style={{ color: "var(--color-ink)" }}>مندوبو الأحياء ورؤساء المربعات</strong>،
            وجمعيات الشباب والنساء، والسكان المستفيدون — في قلب التنفيذ والتملّك.
          </p>
        </div>
      </section>

      <section className="psection alt">
        <div className="psection-wrap">
          <div className="story-grid">
            <div>
              <div className="section-eyebrow">
                <span className="rule"></span> التنفيذ
              </div>
              <h2>الخطوات <em>الكبرى.</em></h2>
              <p className="lede" style={{ fontSize: 15 }}>
                تتعاقب المراحل على مدى عمر المشروع، من تحديد المواقع إلى ترسيخ المكتسبات.
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
            <span className="rule"></span> الأثر
          </div>
          <h2>النتائج <em>المنتظرة.</em></h2>
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
            <span className="rule"></span> معرض الصور · تقرير ميداني
          </div>
          <h2>المشروع <em>بالصور.</em></h2>
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
                <span className="rule"></span> 10 يونيو 2026 · كابالاي
              </div>
              <h2>الإطلاق <em>الرسمي.</em></h2>
              <p className="lede">
                أقيم حفل الإطلاق في 10 يونيو 2026 بمقر تشاديا في كابالاي (غرب ملعب إدريس محمد
                أويا)، بحضور الشركاء والسلطات المحلية وممثلي المجتمعات المستفيدة.
              </p>
              <div className="phero-meta" style={{ borderTop: "1px solid var(--color-line)" }}>
                <span>شعار المشروع <strong>« التثمين والتمكين وإطلاق عبقرية الإنسان »</strong></span>
              </div>
            </div>
            <div>
              <figure className="pfigure wide" style={{ marginBottom: 20 }}>
                <Image src="/images/precom/lancement-salle.webp" alt="قاعة حفل إطلاق مشروع بريكوم" width={1080} height={607} sizes="(max-width: 860px) 100vw, 50vw" />
                <figcaption>حفل الإطلاق — مقر تشاديا، كابالاي</figcaption>
              </figure>
              <figure className="pfigure wide">
                <Image src="/images/precom/lancement-intervenant.webp" alt="متحدث يقدّم مشروع بريكوم خلال الإطلاق" width={1080} height={607} sizes="(max-width: 860px) 100vw, 50vw" />
                <figcaption>تقديم المشروع المصغّر لأصحاب المصلحة</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-wrap">
          <div>
            <h3>لنعمل معًا من أجل حيّ <em>أكثر صحة وصمودًا.</em></h3>
            <p>
              يقوم نجاح المشروع على تعبئة الجميع وتملّكهم له. سكانًا وجمعيات وشركاء: تواصلوا مع
              فريق بريكوم على tidjani@chadia-ong.org أو ‎+235 65 62 62 40.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/ar/contact" className="pbtn pbtn--accent">
              التواصل مع الفريق <i className="ph ph-arrow-up-left"></i>
            </Link>
            <Link href="/ar/results" className="pbtn pbtn--inverse">
              النتائج المنشورة <i className="ph ph-chart-bar"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
