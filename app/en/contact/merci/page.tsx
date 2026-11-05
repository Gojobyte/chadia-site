import Link from "next/link";

export const metadata = {
  title: "Message sent · CHADIA NGO",
  description: "Your message has been delivered to the CHADIA coordination team.",
  robots: { index: false, follow: true },
};

export default function EnMerciPage() {
  return (
    <section className="phero">
      <div className="phero-wrap">
        <div className="eyebrow">
          <span className="rule"></span> Contact · message delivered
        </div>
        <h1>Thank you, <em>your message is on its way.</em></h1>
        <p className="lede">
          The CHADIA coordination team has received your request and will reply
          <strong> within 48 working hours</strong> to the e-mail address you provided —
          please also check your spam folder.
        </p>
        <div className="phero-meta">
          <span>Phone <strong>+235 65 62 62 40</strong></span>
          <span>Monday → Friday · 8 am–5 pm (UTC+1)</span>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
          <Link className="pbtn pbtn--accent" href="/en">
            Back to home <i className="ph ph-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
