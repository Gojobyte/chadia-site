import { MissionContent } from "@/components/public/MissionContent";

export const metadata = {
  title: "Notre mission · ONG CHADIA",
  description:
    "Notre mission : contribuer au développement économique et social du Tchad par la formation professionnelle, l'eau-assainissement, l'agriculture et la santé.",
  alternates: {
    canonical: "/mission",
    languages: { fr: "/mission", en: "/en/mission", ar: "/ar/mission" },
  },
};

export default function MissionPage() {
  return <MissionContent />;
}
