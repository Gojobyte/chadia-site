import Link from "next/link";

export const metadata = {
  title: "تعذّر إرسال الرسالة · منظمة تشاديا",
  description: "تعذّر إرسال الرسالة. بيانات الاتصال المباشرة بمنظمة تشاديا.",
  robots: { index: false, follow: true },
};

export default function ArEchecPage() {
  return (
    <section className="phero">
      <div className="phero-wrap">
        <div className="eyebrow">
          <span className="rule"></span> اتصال · توقّف الإرسال
        </div>
        <h1>تعذّر <em>إرسال رسالتكم.</em></h1>
        <p className="lede">
          تأكّدوا من صحة بريدكم الإلكتروني ومن أن الرسالة <strong>لا تقلّ عن عشرة
          أحرف</strong> — هذان أكثر سببين شيوعًا. إن كان كل شيء مكتملًا، فخدمة الإرسال لدينا
          متوقفة مؤقتًا. <strong>طلبكم يهمّنا</strong> — إليكم طرق الوصول إلينا مباشرة.
        </p>
        <div className="phero-meta">
          <span>البريد <strong>tidjani@chadia-ong.org</strong></span>
          <span>الهاتف <strong>‎+235 65 62 62 40</strong></span>
          <span>الاثنين → الجمعة · 8ص–5م (UTC+1)</span>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
          <Link className="pbtn pbtn--accent" href="/ar/contact">
            إعادة المحاولة <i className="ph ph-arrow-counter-clockwise"></i>
          </Link>
          <a className="pbtn" href="mailto:tidjani@chadia-ong.org">
            راسلونا مباشرة
          </a>
        </div>
      </div>
    </section>
  );
}
