import { envoyerMessage } from "@/app/(public)/contact/actions";

export const metadata = {
  title: "Contact · CHADIA NGO",
  description:
    "CHADIA NGO — Kabalaye district, BP 6118 N'Djamena. Phone +235 65 62 62 40 · tidjani@chadia-ong.org.",
  alternates: {
    canonical: "/en/contact",
    languages: { "x-default": "/contact", fr: "/contact", en: "/en/contact", ar: "/ar/contact" },
  },
};

export default function EnContactPage() {
  return (
    <>
      <section className="phero">
        <div className="phero-wrap">
          <div className="eyebrow">
            <span className="rule"></span> Contact · an open door
          </div>
          <h1>The CHADIA team <em>is listening.</em></h1>
          <p className="lede">
            Donor, institutional partner, private company, journalist, civil-society
            organisation or programme beneficiary — our team is at your disposal.{" "}
            <strong>Reply within 48 working hours.</strong>
          </p>
          <div className="phero-meta">
            <span>Headquarters <strong>Kabalaye district · Avenue Bezo · N&apos;Djamena</strong></span>
            <span>Phone <strong>+235 65 62 62 40</strong></span>
            <span>E-mail <strong>tidjani@chadia-ong.org</strong></span>
            <span>Monday → Friday · 8 am–5 pm (UTC+1)</span>
          </div>
        </div>
      </section>

      <section className="psection">
        <div className="psection-wrap">
          <div className="contact-grid">
            <div>
              <div className="section-eyebrow">
                <span className="rule"></span> Write to us
              </div>
              <h2>One message, <em>one reply.</em></h2>
              <p className="lede" style={{ fontSize: 15 }}>
                The form below is handled by the NGO&apos;s coordination team. Please state the
                subject of your request so it reaches the right person.
              </p>

              <form className="contact-form" action={envoyerMessage}>
                {/* The hidden locale keeps the confirmation pages in English. */}
                <input type="hidden" name="locale" value="en" />
                <div className="hp-field" aria-hidden="true">
                  <label htmlFor="site_web">Leave this field empty</label>
                  <input id="site_web" name="site_web" tabIndex={-1} autoComplete="off" />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label htmlFor="prenom">First name</label>
                    <input id="prenom" name="prenom" required />
                  </div>
                  <div>
                    <label htmlFor="nom">Last name</label>
                    <input id="nom" name="nom" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email">Professional e-mail</label>
                  <input id="email" type="email" name="email" required placeholder="name@organisation.org" />
                </div>
                <div>
                  <label htmlFor="organisation">Organisation</label>
                  <input id="organisation" name="organisation" />
                </div>
                <div>
                  <label htmlFor="objet">Subject</label>
                  <select id="objet" name="objet">
                    <option>General enquiry</option>
                    <option>Institutional partnership (donor, NGO, agency)</option>
                    <option>Private-sector partnership (training, advisory)</option>
                    <option>Ongoing programme follow-up</option>
                    <option>Press / communications</option>
                    <option>Job / internship application</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required minLength={10} placeholder="Your request, in a few lines…"></textarea>
                </div>
                <button type="submit" className="pbtn pbtn--accent" style={{ justifySelf: "start" }}>
                  Send the message <i className="ph ph-paper-plane-tilt"></i>
                </button>
              </form>
            </div>

            <aside className="contact-info">
              <div className="section-eyebrow">
                <span className="rule"></span> Official details
              </div>
              <dl>
                <dt>Headquarters · N&apos;Djamena</dt>
                <dd>
                  <strong>Kabalaye district</strong><br />
                  Opposite Idriss Mahamat Ouya stadium<br />
                  N&apos;Djamena, Republic of Chad
                </dd>
                <dt>Postal address</dt>
                <dd><strong>BP 6118 N&apos;Djamena</strong></dd>
                <dt>Phones</dt>
                <dd>
                  <strong>+235 65 62 62 40</strong><br />
                  <strong>+235 92 29 94 36</strong>
                </dd>
                <dt>E-mail</dt>
                <dd><strong>tidjani@chadia-ong.org</strong></dd>
                <dt>Director General</dt>
                <dd>
                  <strong>Tidjani SALAH</strong><br />
                  Executive Bureau Coordinator
                </dd>
              </dl>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
