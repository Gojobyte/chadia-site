import Link from "next/link";

export const metadata = {
  title: "تم إرسال الرسالة · منظمة تشاديا",
  description: "وصلت رسالتكم إلى فريق تنسيق منظمة تشاديا.",
  robots: { index: false, follow: true },
};

export default function ArMerciPage() {
  return (
    <section className="phero">
      <div className="phero-wrap">
        <div className="eyebrow">
          <span className="rule"></span> اتصال · وصلت الرسالة
        </div>
        <h1>شكرًا، <em>رسالتكم في طريقها.</em></h1>
        <p className="lede">
          تلقّى فريق تنسيق تشاديا طلبكم وسيردّ <strong>في غضون 48 ساعة عمل</strong> على
          عنوان البريد الذي أدخلتموه — يُرجى أيضًا مراجعة مجلد الرسائل غير المرغوب فيها.
        </p>
        <div className="phero-meta">
          <span>الهاتف <strong>‎+235 65 62 62 40</strong></span>
          <span>الاثنين → الجمعة · 8ص–5م (UTC+1)</span>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
          <Link className="pbtn pbtn--accent" href="/ar">
            العودة إلى الرئيسية <i className="ph ph-arrow-left"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
