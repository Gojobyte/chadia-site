import Image from "next/image";
import Link from "next/link";
import { LecteurVideo } from "@/components/public/LecteurVideo";

export const metadata = {
  title: "منظمة تشاديا · من أجل تنمية تشاد",
  description:
    "منظمة تشاديا لتنمية تشاد — منظمة وطنية تشادية غير حكومية، مسجّلة تحت رقم 154/PCMT/PMT/MEPDCI/SE/SPONGAH/2021. برامج تنموية، إصحاح حضري وبناء قدرات في نجامينا والأقاليم.",
  alternates: {
    canonical: "/ar",
    languages: { "x-default": "/", fr: "/", en: "/en", ar: "/ar" },
  },
};

const DOMAINS = [
  { num: "01", t: "التدريب المهني", d: "ريادة الأعمال والإدارة والمالية والقيادة — بمنهج تعليم الكبار الذي يبني على خبرة كل متدرّب." },
  { num: "02", t: "الاستشارات وريادة الأعمال", d: "مرافقة المؤسسات الصغيرة والمتوسطة: خطط أعمال قابلة للتمويل، تدريب وتيسير الوصول إلى التمويل." },
  { num: "03", t: "المياه والإصحاح والبناء", d: "ورش المياه والإصحاح والهندسة المدنية في منطقتي شرق البلاد وجنوبها." },
  { num: "04", t: "الزراعة والثروة الحيوانية", d: "دعم السلاسل الزراعية الرعوية: المحاصيل والتحويل والمنتجات والخدمات." },
  { num: "05", t: "التعليم", d: "برامج بناء القدرات ونقل المهارات في تشاد وفي المنطقة دون الإقليمية." },
  { num: "06", t: "الصحة والسلامة والبيئة", d: "مهام لفائدة وزارة الصحة العامة، وإطار للصحة والسلامة، وسياسة صارمة للحماية من الاستغلال والانتهاك الجنسيين." },
];

export default function ArHomePage() {
  return (
    <>
      <section className="hero-full">
        <Image
          className="bg"
          src="/images/precom/chantier-himo-arbres.webp"
          alt="ورشة عمل مجتمعية كثيفة اليد العاملة تحت الأشجار، المقاطعة الأولى بنجامينا"
          width={1152}
          height={864}
          sizes="100vw"
          priority
        />
        <div className="veil"></div>
        <div className="hf-wrap">
          <div className="kicker">منظمة وطنية غير حكومية · نجامينا، تشاد</div>
          <h1>تنمية تشاد، <em>مشروعًا بعد مشروع.</em></h1>
          <p className="lede">
            <strong>تشاديا</strong> منظمة تشادية مستقلة وغير سياسية. ندرّب روّاد الأعمال، ونُصحّح
            الأحياء، ونرافق المجتمعات المحلية — بفريق وطني بنسبة 100 % وبشرط واحد:
            <strong> نتائج قابلة للقياس، منشورة ويمكن التحقق منها</strong>.
          </p>
          <div className="hf-actions">
            <Link href="/ar/mission" className="pbtn pbtn--accent">
              رسالتنا <i className="ph ph-arrow-left"></i>
            </Link>
            <Link href="/ar/contact" className="pbtn pbtn--inverse">
              اتصل بنا
            </Link>
          </div>
          <div className="hf-meta">
            <span>شعارنا <strong>« التثمين والتمكين وإطلاق عبقرية الإنسان »</strong></span>
            <span>رقم التسجيل <strong>154/PCMT/PMT/MEPDCI/SE/SPONGAH/2021</strong></span>
          </div>
        </div>
        <span className="credit">ورشة كثيفة اليد العاملة — نجامينا، 2026</span>
      </section>

      <section className="counters">
        <div className="counters-wrap">
          <div className="counter">
            <div className="l">قنوات صرف للتطهير · بريكوم</div>
            <div className="v">6 <em>كلم</em></div>
            <div className="d">صرف صحي أعيد تأهيله بأشغال كثيفة اليد العاملة في المقاطعة الأولى بنجامينا.</div>
          </div>
          <div className="counter">
            <div className="l">روّاد أعمال مدرَّبون · أودا-نيباد</div>
            <div className="v">145</div>
            <div className="d">ندوات للمؤسسات الصغرى في 3 بلدان — نجامينا وكيغالي وأبيدجان (2022).</div>
          </div>
          <div className="counter">
            <div className="l">إتقان المفاهيم · 2024</div>
            <div className="v">88 <em>%</em></div>
            <div className="d">قياس باختبارات قبلية وبعدية. نسبة الرضا: 92 %.</div>
          </div>
          <div className="counter">
            <div className="l">الإيرادات · سنة 2024</div>
            <div className="v">205 <em>مليون فرنك</em></div>
            <div className="d">قوائم مالية وفق نظام SYSCOHADA، مصادَق عليها من مكتب أتريو كونسلتانس.</div>
          </div>
        </div>
      </section>

      <section className="psection dark">
        <div className="psection-wrap">
          <div className="feature-grid">
            <div>
              <div className="badge-live" style={{ marginBottom: 18 }}>
                <span className="dot"></span> مشروع قيد التنفيذ
              </div>
              <h2>بريكوم. ضد الفيضانات، <em>مع السكان.</em></h2>
              <p className="lede">
                المكوّن الفرعي 2.2 من مشروع « بيلييه »، بتمويل من{" "}
                <strong style={{ color: "var(--color-page)" }}>البنك الدولي</strong> (منحة
                المؤسسة الدولية للتنمية)، وبتنفيذ من{" "}
                <strong style={{ color: "var(--color-page)" }}>برنامج الأمم المتحدة الإنمائي</strong>{" "}
                وتنفيذ ميداني من تشاديا: تطهير 6 كلم من قنوات الصرف بأشغال كثيفة اليد العاملة،
                وأنشطة مدرّة للدخل لفائدة نساء أحياء فرشا وميليزي وماجوريو.
              </p>
              <div className="feature-facts">
                <span>الانطلاق <strong>10 يونيو 2026</strong></span>
                <span>الأحياء <strong>فرشا · ميليزي · ماجوريو</strong></span>
                <span>مشاركة النساء <strong>30 % فأكثر</strong></span>
              </div>
              <div style={{ marginTop: 28 }}>
                <Link href="/ar/precom" className="pbtn pbtn--inverse">
                  صفحة المشروع الكاملة <i className="ph ph-arrow-up-left"></i>
                </Link>
              </div>
            </div>
            <div className="feature-photos">
              <figure className="pfigure tall">
                <Image src="/images/precom/gravilloneuse-concassage.webp" alt="امرأة تعمل في تكسير الحصى" width={1080} height={1080} sizes="(max-width: 900px) 50vw, 25vw" />
                <figcaption>نشاط مدرّ للدخل — تكسير الحصى</figcaption>
              </figure>
              <figure className="pfigure tall">
                <Image src="/images/precom/canal-engorge-rue.webp" alt="قناة صرف مسدودة بالنفايات في المقاطعة الأولى" width={1080} height={1080} sizes="(max-width: 900px) 50vw, 25vw" />
                <figcaption>قبل التطهير — فرشا</figcaption>
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
                <span className="dot"></span> مشروع قيد التنفيذ
              </div>
              <h2>حجر لميس. السلام يُبنى <em>بالمجتمعات المحلية.</em></h2>
              <p className="lede">
                الحزمة 2 من تعزيز مبادرات توطيد السلام التي تقودها منظمات المجتمع المدني في حوض
                بحيرة تشاد: بتمويل من <strong>صندوق بناء السلام</strong> الأممي، وتنفيذ من{" "}
                <strong>برنامج الأمم المتحدة الإنمائي</strong>، وتنسيق من{" "}
                <strong>لجنة حوض بحيرة تشاد</strong>، وتنفيذ ميداني من تشاديا — 44 منظمة مرافَقة،
                و88 مندوبًا مدرَّبًا، و2000 شتلة وُفّرت في أربع بلدات.
              </p>
              <div className="feature-facts">
                <span>الفترة <strong>2 سبتمبر → 1 ديسمبر 2026</strong></span>
                <span>البلدات <strong>غيتيه · ميتيرينيه · مهدة · بلترام</strong></span>
                <span>نسبة الإنجاز <strong>80 % حتى 18 أكتوبر 2026</strong></span>
              </div>
              <div style={{ marginTop: 28 }}>
                <Link href="/ar/peacebuilding" className="pbtn pbtn--accent">
                  صفحة المشروع الكاملة <i className="ph ph-arrow-up-left"></i>
                </Link>
              </div>
            </div>
            <div className="feature-photos">
              <figure className="pfigure tall">
                <Image src="/images/paix-lac-tchad/participants-assemblee-hd.webp" alt="جمعية مجتمعية في حفل إطلاق المشروع بحجر لميس" width={1400} height={1050} sizes="(max-width: 900px) 50vw, 25vw" />
                <figcaption>الإطلاق — حجر لميس</figcaption>
              </figure>
              <figure className="pfigure tall">
                <Image src="/images/paix-lac-tchad/prise-parole-participante.webp" alt="مشارِكة تأخذ الكلمة خلال حفل الإطلاق" width={1400} height={1050} sizes="(max-width: 900px) 50vw, 25vw" />
                <figcaption>الكلمة للمجتمعات</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="section-eyebrow">
            <span className="rule"></span> ستة مجالات · ميدان واحد
          </div>
          <h2>ما الذي <em>نفعله.</em></h2>
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
            <span className="rule"></span> بالفيديو
          </div>
          <h2>الإطلاق، <em>كما صُوّر في الميدان.</em></h2>
          <p className="lede" style={{ marginBottom: 36 }}>
            غطّت قناة تيلي تشاد حفل إطلاق مشروع حجر لميس. السلطات التقليدية والمصالح الفنية
            وسكان البلدات المعنية يشرحون ما ينتظرونه من المشروع (بالفرنسية).
          </p>
          <LecteurVideo
            id="vafyHnC0Pow"
            titre="ماساكوري — منظمة تشاديا: إطلاق الحزمة 2، حجر لميس"
            vignette="/images/paix-lac-tchad/video-vignette.webp"
            largeur={1600}
            hauteur={900}
          />
        </div>
      </section>

      <section className="cta">
        <div className="cta-wrap">
          <div>
            <h3>هل تودّون <em>التعاون معنا؟</em></h3>
            <p>
              جهة مانحة، شريك مؤسسي، شركة من القطاع الخاص، صحفي أو منظمة مجتمع مدني — يردّ
              فريقنا في غضون 48 ساعة عمل.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="pbtn pbtn--accent" href="/ar/contact">
              اتصل بنا <i className="ph ph-arrow-up-left"></i>
            </Link>
            <Link className="pbtn pbtn--inverse" href="/ar/mission">
              رسالتنا
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
