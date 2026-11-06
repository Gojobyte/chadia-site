import Image from "next/image";
import Link from "next/link";
import { PublicNav } from "./PublicNavCore";
import { LangSwitcher } from "./LangSwitcher";
import { PublicFx } from "./PublicFx";
import "@/app/public-theme.css";

export type Lang = "fr" | "en" | "ar";

/**
 * Coquille commune du site public — bandeau officiel, en-tête, pied de page —
 * paramétrée par langue. Une seule structure pour les trois versions : une
 * correction de lien ou de coordonnées se fait ici, une fois.
 *
 * Les trois versions du site couvrent les mêmes pages ; seuls les PDF des
 * rapports d'activité restent en français, et les pages le signalent.
 */
const DICT = {
  fr: {
    banner: (
      <>République du Tchad · CHADIA pour le Développement du Tchad (CDT) — enregistrée sous N° <strong>154/PCMT/PMT/MEPDCI/SE/SPONGAH/2021</strong> du 08/12/2021</>
    ),
    aide: "Aide",
    signaler: "Signaler une irrégularité",
    brandSub: "ONG nationale — Tchad",
    nav: [
      { href: "/mission", label: "Notre mission" },
      { href: "/precom", label: "Projet PRECOM" },
      { href: "/consolidation-paix", label: "Consolidation de la paix" },
      { href: "/resultats", label: "Résultats" },
      { href: "/gouvernance", label: "Gouvernance" },
      { href: "/contact", label: "Contact" },
    ],
    ftOrg: <>CHADIA <em>pour le Tchad</em></>,
    ftDesc:
      "CHADIA pour le Développement du Tchad (CDT) — ONG de droit tchadien à but non lucratif, enregistrée le 08/12/2021 auprès du Ministère de l'Économie, de la Planification du Développement et de la Coopération Internationale (Direction des ONG).",
    ftAdresse: (
      <>Quartier Kabalaye · en face stade Idriss Mahamat Ouya · Avenue Bezo — N&apos;Djamena, Tchad<br />Tél. : +235 65 62 62 40 / +235 92 29 94 36 · tidjani@chadia-ong.org</>
    ),
    colProjets: "Nos projets",
    liensProjets: [
      { href: "/precom", label: "Projet PRECOM (en cours)" },
      { href: "/consolidation-paix", label: "Consolidation de la paix (en cours)" },
      { href: "/resultats", label: "Résultats des projets" },
      { href: "/gouvernance", label: "Gouvernance & éthique" },
      { href: "/contact", label: "Mécanisme de plainte" },
    ],
    colSuivre: "Suivez-nous",
    newsletter: "Newsletter mensuelle",
    presse: "Presse · contact",
    youtube: "Chaîne YouTube",
    droits: "Tous droits réservés",
    agrement: "Agrément",
    home: "/",
  },
  en: {
    banner: (
      <>Republic of Chad · CHADIA for the Development of Chad (CDT) — registered under No. <strong>154/PCMT/PMT/MEPDCI/SE/SPONGAH/2021</strong> of 08/12/2021</>
    ),
    aide: "Help",
    signaler: "Report a concern",
    brandSub: "National NGO — Chad",
    nav: [
      { href: "/en/mission", label: "Our mission" },
      { href: "/en/precom", label: "PRECOM project" },
      { href: "/en/peacebuilding", label: "Peacebuilding" },
      { href: "/en/results", label: "Results" },
      { href: "/en/governance", label: "Governance" },
      { href: "/en/contact", label: "Contact" },
    ],
    ftOrg: <>CHADIA <em>for Chad</em></>,
    ftDesc:
      "CHADIA for the Development of Chad (CDT) — a non-profit NGO under Chadian law, registered on 08/12/2021 with the Ministry of Economy, Development Planning and International Cooperation (NGO Directorate).",
    ftAdresse: (
      <>Kabalaye district · opposite Idriss Mahamat Ouya stadium · Avenue Bezo — N&apos;Djamena, Chad<br />Tel.: +235 65 62 62 40 / +235 92 29 94 36 · tidjani@chadia-ong.org</>
    ),
    colProjets: "Our projects",
    liensProjets: [
      { href: "/en/precom", label: "PRECOM project (under way)" },
      { href: "/en/peacebuilding", label: "Peacebuilding — Lot 2 (under way)" },
      { href: "/en/results", label: "Project results" },
      { href: "/en/governance", label: "Governance & ethics" },
      { href: "/en/contact", label: "Complaint mechanism" },
    ],
    colSuivre: "Follow us",
    newsletter: "Monthly newsletter",
    presse: "Press · contact",
    youtube: "YouTube channel",
    droits: "All rights reserved",
    agrement: "Registration",
    home: "/en",
  },
  ar: {
    banner: (
      <>جمهورية تشاد · منظمة تشاديا لتنمية تشاد — مسجّلة تحت رقم <strong>154/PCMT/PMT/MEPDCI/SE/SPONGAH/2021</strong> بتاريخ 08/12/2021</>
    ),
    aide: "مساعدة",
    signaler: "الإبلاغ عن مخالفة",
    brandSub: "منظمة وطنية غير حكومية — تشاد",
    nav: [
      { href: "/ar/mission", label: "رسالتنا" },
      { href: "/ar/precom", label: "مشروع بريكوم" },
      { href: "/ar/peacebuilding", label: "توطيد السلام" },
      { href: "/ar/results", label: "النتائج" },
      { href: "/ar/governance", label: "الحوكمة" },
      { href: "/ar/contact", label: "اتصل بنا" },
    ],
    ftOrg: <>تشاديا <em>من أجل تشاد</em></>,
    ftDesc:
      "منظمة تشاديا لتنمية تشاد — منظمة غير حكومية تشادية لا تهدف إلى الربح، مسجّلة بتاريخ 08/12/2021 لدى وزارة الاقتصاد وتخطيط التنمية والتعاون الدولي (مديرية المنظمات غير الحكومية).",
    ftAdresse: (
      <>حي كابالاي · مقابل ملعب إدريس محمد أويا · شارع بيزو — نجامينا، تشاد<br />هاتف: ‎+235 65 62 62 40 / ‎+235 92 29 94 36 · tidjani@chadia-ong.org</>
    ),
    colProjets: "مشاريعنا",
    liensProjets: [
      { href: "/ar/precom", label: "مشروع بريكوم (قيد التنفيذ)" },
      { href: "/ar/peacebuilding", label: "توطيد السلام — الحزمة 2 (قيد التنفيذ)" },
      { href: "/ar/results", label: "نتائج المشاريع" },
      { href: "/ar/governance", label: "الحوكمة والأخلاقيات" },
      { href: "/ar/contact", label: "آلية الشكاوى" },
    ],
    colSuivre: "تابعونا",
    newsletter: "النشرة الشهرية",
    presse: "الصحافة · اتصال",
    youtube: "قناة يوتيوب",
    droits: "جميع الحقوق محفوظة",
    agrement: "رقم التسجيل",
    home: "/ar",
  },
} as const;

export function PublicShell({
  lang,
  fontClasses,
  children,
}: {
  lang: Lang;
  fontClasses: string;
  children: React.ReactNode;
}) {
  const t = DICT[lang];
  const contact = lang === "fr" ? "/contact" : `/${lang}/contact`;

  return (
    <div className={`pub ${fontClasses}`} lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <PublicFx />
      <div className="gov-banner">
        <div className="wrap">
          <span>{t.banner}</span>
          <div className="right">
            <Link href={contact}><i className="ph ph-question"></i> {t.aide}</Link>
            <Link href={contact}><i className="ph ph-shield-check"></i> {t.signaler}</Link>
          </div>
        </div>
      </div>

      <header className="site">
        <div className="site-wrap">
          <Link href={t.home} className="site-brand">
            <Image
              className="mark-img"
              src="/images/brand/logo-mark.webp"
              alt="CHADIA"
              width={41}
              height={44}
              priority
            />
            <span className="nm">
              CHADIA
              <em>{t.brandSub}</em>
            </span>
          </Link>
          <PublicNav items={t.nav} />
          <LangSwitcher lang={lang} />
        </div>
      </header>

      <main>{children}</main>

      <footer className="siteft">
        <div className="siteft-wrap">
          <div>
            <Image
              className="ft-logo"
              src="/images/brand/logo-mark.webp"
              alt="CHADIA pour le Développement du Tchad"
              width={59}
              height={64}
            />
            <div className="org">{t.ftOrg}</div>
            <p className="desc">{t.ftDesc}</p>
            <p className="desc" style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>
              {t.ftAdresse}
            </p>
          </div>
          <div>
            <h5>{t.colProjets}</h5>
            {t.liensProjets.map((l) => (
              <Link key={l.href + l.label} href={l.href}>{l.label}</Link>
            ))}
          </div>
          <div>
            <h5>{t.colSuivre}</h5>
            <a href="https://www.youtube.com/@Chadiaong" rel="noreferrer noopener" target="_blank">
              {t.youtube}
            </a>
            <Link href={contact}>{t.newsletter}</Link>
            <Link href={contact}>{t.presse}</Link>
            <a href="mailto:tidjani@chadia-ong.org">tidjani@chadia-ong.org</a>
          </div>
        </div>
        <div className="ft-word" aria-hidden="true">CHADIA</div>
        <div className="legal">
          <span>© 2014–{new Date().getFullYear()} CHADIA · {t.droits}</span>
          <span>{t.agrement} <strong>N° 154/PCMT/PMT/MEPDCI/SE/SPONGAH/2021</strong></span>
        </div>
      </footer>
    </div>
  );
}
