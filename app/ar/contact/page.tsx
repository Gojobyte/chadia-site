import { envoyerMessage } from "@/app/(public)/contact/actions";

export const metadata = {
  title: "اتصل بنا · منظمة تشاديا",
  description:
    "منظمة تشاديا — حي كابالاي، ص.ب 6118 نجامينا. الهاتف ‎+235 65 62 62 40 · tidjani@chadia-ong.org.",
  alternates: {
    canonical: "/ar/contact",
    languages: { "x-default": "/contact", fr: "/contact", en: "/en/contact", ar: "/ar/contact" },
  },
};

export default function ArContactPage() {
  return (
    <>
      <section className="phero">
        <div className="phero-wrap">
          <div className="eyebrow">
            <span className="rule"></span> اتصال · بابنا مفتوح
          </div>
          <h1>فريق تشاديا <em>في خدمتكم.</em></h1>
          <p className="lede">
            جهة مانحة، شريك مؤسسي، شركة من القطاع الخاص، صحفي، منظمة مجتمع مدني أو مستفيد من
            أحد برامجنا — فريقنا رهن إشارتكم. <strong>الرد في غضون 48 ساعة عمل.</strong>
          </p>
          <div className="phero-meta">
            <span>المقر <strong>حي كابالاي · شارع بيزو · نجامينا</strong></span>
            <span>الهاتف <strong>‎+235 65 62 62 40</strong></span>
            <span>البريد <strong>tidjani@chadia-ong.org</strong></span>
            <span>الاثنين → الجمعة · 8ص–5م (UTC+1)</span>
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="contact-grid">
            <div>
              <div className="section-eyebrow">
                <span className="rule"></span> راسلونا
              </div>
              <h2>رسالة واحدة، <em>ردّ واحد.</em></h2>
              <p className="lede" style={{ fontSize: 15 }}>
                يعالج فريقُ تنسيق المنظمة النموذجَ أدناه. يُرجى تحديد موضوع طلبكم ليصل إلى
                الشخص المناسب.
              </p>

              <form className="contact-form" action={envoyerMessage}>
                {/* الحقل المخفي يُبقي صفحات التأكيد بالعربية. */}
                <input type="hidden" name="locale" value="ar" />
                <div className="hp-field" aria-hidden="true">
                  <label htmlFor="site_web">اتركوا هذا الحقل فارغًا</label>
                  <input id="site_web" name="site_web" tabIndex={-1} autoComplete="off" />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label htmlFor="prenom">الاسم الأول</label>
                    <input id="prenom" name="prenom" required />
                  </div>
                  <div>
                    <label htmlFor="nom">اسم العائلة</label>
                    <input id="nom" name="nom" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email">البريد الإلكتروني المهني</label>
                  <input id="email" type="email" name="email" required placeholder="name@organisation.org" />
                </div>
                <div>
                  <label htmlFor="organisation">المنظمة / الجهة</label>
                  <input id="organisation" name="organisation" />
                </div>
                <div>
                  <label htmlFor="objet">موضوع الطلب</label>
                  <select id="objet" name="objet">
                    <option>طلب معلومات عامة</option>
                    <option>شراكة مؤسسية (جهة مانحة، منظمة، وكالة)</option>
                    <option>شراكة مع القطاع الخاص (تدريب، استشارات)</option>
                    <option>متابعة برنامج جارٍ</option>
                    <option>صحافة / اتصال</option>
                    <option>طلب عمل / تدريب</option>
                    <option>أخرى</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message">الرسالة</label>
                  <textarea id="message" name="message" required minLength={10} placeholder="طلبكم، في بضعة أسطر…"></textarea>
                </div>
                <button type="submit" className="pbtn pbtn--accent" style={{ justifySelf: "start" }}>
                  إرسال الرسالة <i className="ph ph-paper-plane-tilt"></i>
                </button>
              </form>
            </div>

            <aside className="contact-info">
              <div className="section-eyebrow">
                <span className="rule"></span> البيانات الرسمية
              </div>
              <dl>
                <dt>المقر · نجامينا</dt>
                <dd>
                  <strong>حي كابالاي</strong><br />
                  مقابل ملعب إدريس محمد أويا<br />
                  نجامينا، جمهورية تشاد
                </dd>
                <dt>العنوان البريدي</dt>
                <dd><strong>ص.ب 6118 نجامينا</strong></dd>
                <dt>الهواتف</dt>
                <dd>
                  <strong>‎+235 65 62 62 40</strong><br />
                  <strong>‎+235 92 29 94 36</strong>
                </dd>
                <dt>البريد الإلكتروني</dt>
                <dd><strong>tidjani@chadia-ong.org</strong></dd>
                <dt>المدير العام</dt>
                <dd>
                  <strong>تجاني صالح</strong><br />
                  منسّق المكتب التنفيذي
                </dd>
              </dl>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
