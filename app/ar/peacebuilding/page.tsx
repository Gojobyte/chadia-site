import Image from "next/image";
import Link from "next/link";
import { LecteurVideo } from "@/components/public/LecteurVideo";

export const metadata = {
  title: "الحزمة 2 حجر لميس · توطيد السلام · منظمة تشاديا",
  description:
    "الحزمة 2 حجر لميس: تعبئة مجتمعية وبيئة في أربع بلدات حول بحيرة تشاد. 44 منظمة مرافَقة، 88 مندوبًا مدرَّبًا، 2000 شتلة. بتمويل من صندوق بناء السلام الأممي عبر برنامج الأمم المتحدة الإنمائي، وتنسيق من لجنة حوض بحيرة تشاد.",
  alternates: {
    canonical: "/ar/peacebuilding",
    languages: { fr: "/consolidation-paix", en: "/en/peacebuilding", ar: "/ar/peacebuilding" },
  },
};

const POLES = [
  { num: "01", nm: "غيتيه", em: true, sub: "مع ميتيرينيه ومهدة · مقاطعة ماني الفرعية، محافظة حرز البيار", v: "33 منظمة" },
  { num: "02", nm: "بلترام", sub: "مقاطعة كارال الفرعية، محافظة دغانا · تُخدَم بنزولات ميدانية مجمَّعة", v: "11 منظمة" },
];

const OBJECTIFS = [
  {
    code: "هدف 1", titre: "منظمات المجتمع المدني", taux: "90 %",
    corps: "إحدى عشرة منظمة في كل بلدة — عشر منظمات مدنية إضافة إلى لجنة توطيد السلام — أي 44 منظمة، تمثَّل كل منها بمندوبَين. اكتملت دورة الوحدات الثلاث في البلدات الأربع: النظام الأساسي وسجل الأعضاء؛ الإدارة المالية؛ التخطيط والمساءلة.",
    reste: "تسليم السجلات التي أعدّتها المنظمات والمصادقة عليها.",
  },
  {
    code: "هدف 2", titre: "سلاسل القيمة", taux: "70 %",
    corps: "ثلاث سلاسل اختيرت مع المنتجين: الخيار والسمك والشرموط. عُقدت الدورة — تحديد السلسلة، الحفظ والتحويل، خطة الأعمال — في القطبين. وفي 10 أكتوبر اجتمع 36 منتجًا من 30 مجموعة بحسب السلسلة لا بحسب القرية.",
    reste: "خطط أعمال المنتجين، وتقدير الاحتياجات — غرف التبريد والنقل — والبحث عن مصارف لمرافقتهم.",
  },
  {
    code: "هدف 3", titre: "التشجير", taux: "80 %",
    corps: "ألفا شتلة، خمسمائة لكل بلدة، خمس وعشرون لكل مستفيد. اختيار الأنواع جاء من المجموعات نفسها — المانجو والكافور في الغالب، مع طلب قوي على الزيتون. شرط المشروع الوحيد: شتلات تتحمل تقلبات المناخ والغمر في موسم الفيضان.",
    reste: "الغرس في مهدة ومراقبة النجاح بعد ثلاثين يومًا، مستفيدًا بمستفيد، باستهداف 80 % على الأقل من الشتلات الحية.",
  },
  {
    code: "هدف 4", titre: "الحوكمة البيئية", taux: "80 %",
    corps: "اثنتا عشرة جلسة أفضت إلى تعيين مكاتب مجتمعية للحوكمة البيئية في جمعيات عامة، وصياغة اتفاقية محلية مكتوبة لكل بلدة: مناطق محمية للتجدد، ممرات للماشية، عقوبات متدرجة، وصلح عرفي. وقد صادقت عليها السلطات التقليدية.",
    reste: "المصادقة الإدارية من المقاطعات الفرعية، وإضفاء الطابع الرسمي على التوقيعات، والتنصيب الفعلي للمكاتب.",
  },
];

const ENTREE = [
  { n: "i.", t: "السلطة الإدارية", s: "مقابلة بعد تقديم أمر المهمة: نائب محافظ ماني؛ ثم نائب محافظ كارال فالمحافظ بالنسبة لبلترام." },
  { n: "ii.", t: "السلطات التقليدية", s: "رئيس الكانتون ورؤساء القرى والبُلامات." },
  { n: "iii.", t: "لجنة توطيد السلام", s: "معها تُناقَش خطة العمل وتُقَرّ قبل التوجه إلى المنظمات." },
  { n: "iv.", t: "أول اجتماع مع المنظمات", s: "تُدعى كل منظمة إلى تقديم كل الوثائق التي بحوزتها." },
  { n: "v.", t: "فحص الملفات فرديًا", s: "ثم اختيار المنظمات العشر المعتمدة في كل بلدة." },
];

const GALERIE = [
  { src: "assemblee-organisations.webp", w: 1080, h: 810, cap: "مندوبو المنظمات مجتمعون في غيتيه" },
  { src: "filiere-poisson.webp", w: 762, h: 915, cap: "مرسى الصيد — سلسلة السمك" },
  { src: "assemblee-baltram.webp", w: 618, h: 1100, cap: "لقاء مع منظمات بلترام، سبتمبر 2026" },
  { src: "champ-concombre.webp", w: 762, h: 1016, cap: "حقل خيار، قطب غيتيه" },
  { src: "prise-parole-participante.webp", w: 1400, h: 1050, cap: "مشارِكة تتحدث خلال الحفل" },
  { src: "equipe-projet.webp", w: 762, h: 1016, cap: "فريق المشروع المقيم في غيتيه" },
];

const EQUIPE = [
  { nom: "تجاني صالح", role: "المنسّق، رئيس المشروع" },
  { nom: "عثمان آدم سامبا", role: "مسؤول محور التعبئة المجتمعية" },
  { nom: "بنجامين غونجيه نغيرابيه", role: "مسؤول محور البيئة، مهندس زراعي" },
  { nom: "جيمندا نغارنان", role: "المتابعة والتقييم والاتصال" },
  { nom: "ألاتسّم جيرالد", role: "المسؤول الإداري والمالي" },
  { nom: "موسى مارتن", role: "منشّط مجتمعي، لوجستي وأمين مخزن" },
];

export default function ArPeacebuildingPage() {
  return (
    <>
      <section className="hero-full">
        <Image
          className="bg"
          src="/images/paix-lac-tchad/assemblee-lancement.webp"
          alt="سكان البلدات المعنية مجتمعون في حفل إطلاق المشروع بغيتيه"
          width={2560}
          height={1440}
          sizes="100vw"
          priority
        />
        <div className="veil"></div>
        <div className="hf-wrap">
          <div className="kicker">الحزمة 2 حجر لميس · مشروع قيد التنفيذ</div>
          <h1>السلام يُبنى <em>بالمجتمعات المحلية.</em></h1>
          <p className="lede">
            <strong>تعبئة مجتمعية وبيئة في أربع بلدات حول بحيرة تشاد.</strong> مشروع بتمويل
            من صندوق بناء السلام الأممي، عبر برنامج الأمم المتحدة الإنمائي، وتنسيق من لجنة
            حوض بحيرة تشاد، وتنفيذ ميداني من منظمة تشاديا.
          </p>
          <div className="hf-actions">
            <span className="badge-live" style={{ color: "var(--pub-yellow)" }}>
              <span className="dot"></span> قيد التنفيذ — من 2 سبتمبر إلى 1 ديسمبر 2026
            </span>
          </div>
          <div className="hf-meta">
            <span>التمويل <strong>صندوق بناء السلام</strong></span>
            <span>التنفيذ <strong>برنامج الأمم المتحدة الإنمائي</strong></span>
            <span>التنسيق الإقليمي <strong>لجنة حوض بحيرة تشاد</strong></span>
            <span>البلدات <strong>غيتيه · ميتيرينيه · مهدة · بلترام</strong></span>
          </div>
        </div>
        <span className="credit">الإطلاق الرسمي — غيتيه، 19 سبتمبر 2026</span>
      </section>

      <section className="counters">
        <div className="counters-wrap">
          <div className="counter">
            <div className="l">منظمات مرافَقة</div>
            <div className="v">44</div>
            <div className="d">إحدى عشرة في كل بلدة، بما فيها لجنة توطيد السلام.</div>
          </div>
          <div className="counter">
            <div className="l">مندوبون مدرَّبون</div>
            <div className="v">88</div>
            <div className="d">اثنان عن كل منظمة، على مدى سبع عشرة جلسة تدريبية.</div>
          </div>
          <div className="counter">
            <div className="l">شتلات موفَّرة</div>
            <div className="v">2000</div>
            <div className="d">خمسمائة لكل بلدة، خمس وعشرون لكل مستفيد.</div>
          </div>
          <div className="counter">
            <div className="l">الإنجاز حتى 18 أكتوبر 2026</div>
            <div className="v">80 <em>%</em></div>
            <div className="d">متوسط الأهداف الأربعة، بتقدير فريق المشروع.</div>
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> المشروع
          </div>
          <h2>أربع بلدات، <em>قطبا تنفيذ.</em></h2>
          <p className="lede">
            يعمل المشروع في أربع بلدات من محافظة حجر لميس. وفي الميدان تخدمها تشاديا من قطبين:
            <strong> غيتيه</strong>، المختارة مركزًا للتنفيذ، تستضيف مكتب المشروع والجلسات
            المجمَّعة لبلدات مقاطعة ماني الفرعية الثلاث؛ و<strong>بلترام</strong>، في مقاطعة
            كارال الفرعية، تُخدَم بنزولات ميدانية تمتد عدة أيام.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            بدأت الأشغال في 2 سبتمبر 2026 بمهمة تأطير استغرقت أحد عشر يومًا. وأقيم الإطلاق
            الرسمي في غيتيه يوم 19 سبتمبر بحضور السلطات الإدارية والتقليدية.
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
                alt="خريطة منطقة تدخل الحزمة 2: محافظتا البحيرة وحجر لميس، مع بلدات غيتيه وميتيرينيه ومهدة وبلترام"
                width={900}
                height={424}
                sizes="(max-width: 860px) 100vw, 50vw"
              />
              <figcaption>منطقة تدخل الحزمة 2، محافظة حجر لميس</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="psection alt">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> المنهجية
          </div>
          <h2>الدخول عبر <em>لجنة توطيد السلام.</em></h2>
          <p className="lede">
            أنشأ برنامج الأمم المتحدة الإنمائي في كل بلدة لجنة لتوطيد السلام. وتعمل تشاديا
            <strong> معها ومن خلالها</strong>: فهي بوابة المشروع، وقناة الدعوة، والمحاور
            الأول. وتُحتسب المنظمةَ الحادية عشرة في بلدتها وتشارك في التدريبات.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            وهي التي تقدّم القوائم: أفضل عشر منظمات في بلدتها، والمجموعات النشطة فعلًا في
            السلاسل — لا تلك التي تدّعي ذلك — والمستفيدين من الشتلات.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            بدأ مكوّن المجتمع المدني بسؤال بسيط: أي المنظمات موجودة فعلًا.{" "}
            <strong>أُحصيت نحو مائة مجموعة، معظمها بلا نشاط حقيقي.</strong> هذه الملاحظة — لا
            فرضية مسبقة — هي ما يؤسس محتوى التدريبات، ويبرر أن تُعِدّ المنظمات أدواتها بنفسها
            بدل أن تُوزَّع عليها جاهزة.
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
            <span className="rule"></span> النتائج · الوضع حتى 18 أكتوبر 2026
          </div>
          <h2>الأهداف الأربعة، <em>وما تبقّى.</em></h2>
          <p className="lede">
            النسب أدناه تقديرات أعدّها فريق المشروع، هدفًا بهدف. والمتوسط 80 %.
          </p>

          <div className="chain chain--2" style={{ marginTop: 44 }}>
            {OBJECTIFS.map((o) => (
              <div key={o.code} className="node">
                <div className="role">{o.code} · الإنجاز {o.taux}</div>
                <div className="who">{o.titre}</div>
                <p>{o.corps}</p>
                <p style={{ marginTop: 12, fontStyle: "normal", opacity: 0.85 }}>
                  ما تبقّى — {o.reste}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> تغيّر المناخ
          </div>
          <h2>الدُمبا: <em>صدّ الماء، موسمًا بعد موسم.</em></h2>
          <p className="lede">
            في حجر لميس يفرض المناخ الساحلي قيدين معًا: الجفاف والتصحر من جهة، وفيضان نهر
            شاري وبحيرة تشاد من جهة أخرى. وزراعات الانحسار التي تعيش منها البلدات الأربع تقع
            تحديدًا حيث يرتفع الماء.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            جواب المجتمعات يحمل اسمًا محليًا: <strong>الدُمبا</strong>. سدود مصغّرة من أكياس
            مملوءة بالتراب، تُصفّ عبر الحقول وعلى طول النهر، فتُبقي ماء الفيضان خارج حقول
            الدخن والذرة والخيار. وتُبنى من جديد كل سنة قبل ارتفاع المياه.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            <strong>لم يُموَّل شيء من هذا من الخارج.</strong> فالمنتجون يبنون هذه المنشآت
            ويصونونها منذ عقود باشتراكاتهم الخاصة: يدفع كل رب أسرة حصته، ومن لا يستطيع العمل
            في الورشة يساهم ماليًا. وفي موقع غوري-سارا وحده بلغت الاشتراكات المجمَّعة نحو
            2,000,000 فرنك، وبلغت حصة كل رب أسرة 5,000 فرنك.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            والحدّ معروف للجميع: منشأة من أكياس التراب لا تصمد إلا موسمًا واحدًا. ولهذا فإن
            مسألة <strong>المنشآت الدائمة</strong> التي تخلف الدُمبا من النقاط التي على
            المشروع حسمها مع الممول والسلطات.
          </p>

          <div className="pgallery" style={{ marginTop: 40 }}>
            <figure className="pfigure">
              <Image src="/images/paix-lac-tchad/dumba-digue.webp" alt="سدّ من أكياس التراب مصفوفة على طول حقل" width={762} height={844} sizes="(max-width: 860px) 100vw, 33vw" />
              <figcaption>الأكياس تُصفّ كيسًا كيسًا لسدّ طريق الماء</figcaption>
            </figure>
            <figure className="pfigure">
              <Image src="/images/paix-lac-tchad/dumba-chantier.webp" alt="ورشة جماعية لبناء سد من أكياس التراب" width={1100} height={619} sizes="(max-width: 860px) 100vw, 33vw" />
              <figcaption>ورشة يدوية بالكامل، تُعبَّأ لأيام</figcaption>
            </figure>
            <figure className="pfigure">
              <Image src="/images/paix-lac-tchad/dumba-remplissage.webp" alt="ملء أكياس التراب في الموقع نفسه" width={762} height={1016} sizes="(max-width: 860px) 100vw, 33vw" />
              <figcaption>ملء الأكياس، في الموقع نفسه</figcaption>
            </figure>
          </div>

          <h3 style={{ marginTop: 56, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 28 }}>
            ما يقدّمه المشروع للتكيّف
          </h3>
          <p className="lede" style={{ fontSize: 15 }}>
            الحزمة 2 لا تبني سدودًا، بل تعمل على ما يجعل الحماية دائمة:{" "}
            <strong>الأشجار وقواعد الاستخدام والهيئات التي تفرض احترامها</strong> — أنواع
            مختارة لتتحمل الفيضان، واتفاقية محلية مكتوبة لكل بلدة، ومكتب مجتمعي للحوكمة
            البيئية يُعيَّن في جمعية عامة ويتكون من سبع هيئات.
          </p>
        </div>
      </section>

      <section className="psection alt">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> حكاية من الميدان
          </div>
          <h2>خيار <em>غيتيه.</em></h2>
          <p className="lede">
            لم يُنشئ المشروع سلسلة الخيار: <strong>بل جعلها تُكتَب.</strong> فقبل أي تدخل
            خارجي بسنوات، أرسلت جمعية منتجي غيتيه أحد أعضائها إلى أبشي لدراسة الأسواق. وعاد
            ببذور مختارة للمذاق الذي اعتاده مستهلكو أبشي، وبرزنامة زرع محسوبة للشحن في فترة
            الانقطاع.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            وتعلّم المنتجون أيضًا أن يحدّوا من أنفسهم. فحين رفعوا الشحنات من ثلاث إلى ست
            شاحنات أسبوعيًا، وجدوا أنهم كلما أرسلوا أكثر أغرقوا السوق وكسروا سعرهم. فكان
            القرار الجماعي العودة إلى نحو ثلاث شاحنات من سبعة أطنان أسبوعيًا، والالتزام بذلك.
          </p>
          <p className="lede" style={{ fontSize: 15 }}>
            وجلسة 10 أكتوبر وضعت رقمًا على ما يعرفه الجميع: <strong>النقل يستهلك الحصة الأكبر
            من القيمة.</strong> ومن هنا جاء قرار المنتجين تأسيس تعاونية وشراء شاحنتهم الخاصة.
          </p>

          <div className="counters-wrap" style={{ marginTop: 40, padding: 0 }}>
            <div className="counter">
              <div className="l">في شاحنة السبعة أطنان</div>
              <div className="v">200 <em>كيس</em></div>
              <div className="d">نحو 35 كلغ في الكيس.</div>
            </div>
            <div className="counter">
              <div className="l">سعر الكيس للمنتج</div>
              <div className="v">4000 → 2000 <em>ف</em></div>
              <div className="d">من بداية الموسم إلى نهايته.</div>
            </div>
            <div className="counter">
              <div className="l">نقل كيس واحد إلى أبشي</div>
              <div className="v">5000 <em>ف</em></div>
              <div className="d">البند الذي يستهلك الحصة الأكبر من القيمة.</div>
            </div>
            <div className="counter">
              <div className="l">الشاحنة التي تستهدفها التعاونية</div>
              <div className="v">18 <em>مليون ف</em></div>
              <div className="d">سعر قدّره المنتجون.</div>
            </div>
          </div>
          <p className="lede" style={{ fontSize: 13, marginTop: 20 }}>
            أرقام جُمعت من المنتجين في جلسة 10 أكتوبر 2026؛ ولا تزال بحاجة إلى تثبيت بمعاينة
            مقابلة. الأحجام السنوية ودخل الموسم وخسائر ما بعد الحصاد لم تُقَس بعد.
          </p>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> تقرير مصوّر
          </div>
          <h2>الإطلاق، <em>كما صُوّر في الميدان.</em></h2>
          <p className="lede" style={{ marginBottom: 36 }}>
            غطّت قناة تيلي تشاد حفل الإطلاق في غيتيه. السلطات التقليدية والمصالح الفنية وسكان
            البلدات المعنية يشرحون ما ينتظرونه من المشروع (بالفرنسية).
          </p>

          <LecteurVideo
            id="vafyHnC0Pow"
            titre="ماساكوري — منظمة تشاديا: إطلاق الحزمة 2، حجر لميس"
            vignette="/images/paix-lac-tchad/video-vignette.webp"
            largeur={1600}
            hauteur={900}
          />

          <p className="lede" style={{ fontSize: 14, marginTop: 20 }}>
            الفيديو منشور على{" "}
            <a href="https://www.youtube.com/@Chadiaong" target="_blank" rel="noopener noreferrer">
              قناة المنظمة على يوتيوب
            </a>.
          </p>
        </div>
      </section>

      <section className="psection alt">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> بالصور
          </div>
          <h2>المشروع <em>في الميدان.</em></h2>
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
            <span className="rule"></span> الفريق
          </div>
          <h2>من يقود <em>المشروع.</em></h2>
          <p className="lede">
            المنسّق والمسؤول الإداري والمالي مقيمان في نجامينا؛ وبقية الفريق مقيمة في
            البلدات.
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
            <h3>هل تعملون <em>في حوض بحيرة تشاد؟</em></h3>
            <p>
              منظمة مجتمع مدني، شريك فني أو جهة مانحة — يردّ فريقنا في غضون 48 ساعة عمل.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="pbtn pbtn--accent" href="/ar/contact">
              اتصل بنا <i className="ph ph-arrow-up-left"></i>
            </Link>
            <Link className="pbtn pbtn--inverse" href="/ar/precom">
              مشروع بريكوم
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
