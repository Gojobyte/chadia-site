import Link from "next/link";

export const metadata = {
  title: "Message not sent · CHADIA NGO",
  description: "The message could not be delivered. Direct contact details for CHADIA NGO.",
  robots: { index: false, follow: true },
};

export default function EnEchecPage() {
  return (
    <section className="phero">
      <div className="phero-wrap">
        <div className="eyebrow">
          <span className="rule"></span> Contact · delivery interrupted
        </div>
        <h1>Your message <em>could not be sent.</em></h1>
        <p className="lede">
          Check that your e-mail address is correct and that your message is
          <strong> at least ten characters long</strong> — the two most common causes. If
          everything was complete, our sending service is temporarily unavailable.
          <strong> Your request matters to us</strong> — here is how to reach us directly.
        </p>
        <div className="phero-meta">
          <span>E-mail <strong>tidjani@chadia-ong.org</strong></span>
          <span>Phone <strong>+235 65 62 62 40</strong></span>
          <span>Monday → Friday · 8 am–5 pm (UTC+1)</span>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
          <Link className="pbtn pbtn--accent" href="/en/contact">
            Try the form again <i className="ph ph-arrow-counter-clockwise"></i>
          </Link>
          <a className="pbtn" href="mailto:tidjani@chadia-ong.org">
            Write to us directly
          </a>
        </div>
      </div>
    </section>
  );
}
