"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";

/**
 * Traitement du formulaire de contact public.
 *
 * L'envoi passe par Resend (service d'envoi transactionnel) plutôt que par la
 * boîte Google Workspace de l'ONG : si le site subit une vague de spam, c'est
 * la réputation du sous-domaine d'envoi qui trinque, jamais celle des adresses
 * utilisées pour échanger avec les bailleurs.
 */

// Configurables sans redéploiement, via les variables d'environnement Vercel.
// Les valeurs par défaut permettent au site de fonctionner dès maintenant,
// avant même que la boîte partagée contact@ n'existe.
const DESTINATAIRE = process.env.CONTACT_TO || "tidjani@chadia-ong.org";
const EXPEDITEUR = process.env.CONTACT_FROM || "Site CHADIA <formulaire@chadia-ong.org>";

const MAX_COURT = 120;
const MAX_LONG = 5000;

// Volontairement permissive : le rôle d'une regex d'email est d'écarter les
// saisies manifestement fausses, pas de décider ce qu'est une adresse valide.
const EMAIL_VALIDE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function champ(formData: FormData, nom: string, max: number): string {
  const brut = formData.get(nom);
  return typeof brut === "string" ? brut.trim().slice(0, max) : "";
}

function echapper(valeur: string): string {
  return valeur
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function envoyerMessage(formData: FormData) {
  // Pot de miel : un champ invisible à l'écran, que seuls les robots
  // remplissent. On les renvoie vers la page de confirmation sans rien
  // envoyer — un bot à qui l'on signale son échec ajuste sa tentative
  // suivante, autant le laisser croire qu'il a réussi.
  if (champ(formData, "site_web", MAX_COURT)) {
    redirect("/contact/merci");
  }

  const prenom = champ(formData, "prenom", MAX_COURT);
  const nom = champ(formData, "nom", MAX_COURT);
  const email = champ(formData, "email", MAX_COURT);
  const organisation = champ(formData, "organisation", MAX_COURT);
  const objet = champ(formData, "objet", MAX_COURT) || "Demande d'information générale";
  const message = champ(formData, "message", MAX_LONG);

  // Le navigateur valide déjà ces champs via `required`. Cette vérification
  // est le filet : un robot qui poste directement sur l'action ignore le HTML.
  if (!prenom || !nom || !EMAIL_VALIDE.test(email) || message.length < 10) {
    redirect("/contact/echec");
  }

  const cleApi = process.env.RESEND_API_KEY;
  if (!cleApi) {
    console.error("[contact] RESEND_API_KEY absente — message non transmis", { email, objet });
    redirect("/contact/echec");
  }

  const lignes = [
    `Objet        : ${objet}`,
    `Nom          : ${prenom} ${nom}`,
    `E-mail       : ${email}`,
    `Organisation : ${organisation || "—"}`,
    "",
    message,
  ].join("\n");

  let transmis = false;

  try {
    const resend = new Resend(cleApi);

    const { error } = await resend.emails.send({
      from: EXPEDITEUR,
      to: [DESTINATAIRE],
      subject: `[Site CHADIA] ${objet} — ${prenom} ${nom}`,
      // Reply-To porte l'adresse du visiteur, jamais From : usurper l'expéditeur
      // ferait échouer les contrôles SPF/DKIM et enverrait le message en spam.
      // Ici, « Répondre » ouvre bien une réponse vers le visiteur.
      replyTo: email,
      text: lignes,
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;font-size:15px;color:#1c1917;line-height:1.6">
          <p style="margin:0 0 20px;font-size:13px;color:#78716c">
            Message reçu via le formulaire de <strong>ong-chadia.com</strong>
          </p>
          <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:20px">
            <tr><td style="padding:4px 16px 4px 0;color:#78716c">Objet</td><td style="padding:4px 0"><strong>${echapper(objet)}</strong></td></tr>
            <tr><td style="padding:4px 16px 4px 0;color:#78716c">Nom</td><td style="padding:4px 0">${echapper(prenom)} ${echapper(nom)}</td></tr>
            <tr><td style="padding:4px 16px 4px 0;color:#78716c">E-mail</td><td style="padding:4px 0"><a href="mailto:${echapper(email)}">${echapper(email)}</a></td></tr>
            <tr><td style="padding:4px 16px 4px 0;color:#78716c">Organisation</td><td style="padding:4px 0">${echapper(organisation) || "—"}</td></tr>
          </table>
          <div style="border-left:3px solid #d6d3d1;padding-left:16px;white-space:pre-wrap">${echapper(message)}</div>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] Resend a refusé l'envoi", error);
    } else {
      transmis = true;
    }
  } catch (err) {
    // Panne réseau, clé révoquée, quota dépassé : le visiteur doit être
    // informé plutôt que de croire son message parti.
    console.error("[contact] échec de l'appel à Resend", err);
  }

  // `redirect` lève une exception interne à Next.js pour interrompre le rendu :
  // il doit rester hors du try/catch, sinon le catch l'avalerait et la
  // redirection n'aurait jamais lieu.
  redirect(transmis ? "/contact/merci" : "/contact/echec");
}
