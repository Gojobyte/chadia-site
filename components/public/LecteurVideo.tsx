"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  /** Identifiant YouTube, la partie après « youtu.be/ ». */
  id: string;
  titre: string;
  vignette: string;
  largeur: number;
  hauteur: number;
};

/**
 * Lecteur en façade : la page affiche une simple image, et l'iframe YouTube
 * n'est créée qu'au clic.
 *
 * Une iframe YouTube posée directement dans la page télécharge près d'un
 * mégaoctet de scripts au chargement, même si personne ne lance la vidéo.
 * Sur les connexions visées par ce site, cela retarde l'affichage de tout le
 * reste. Ici, le coût n'est payé que par les visiteurs qui regardent.
 */
export function LecteurVideo({ id, titre, vignette, largeur, hauteur }: Props) {
  const [actif, setActif] = useState(false);

  if (actif) {
    return (
      <div className="video-cadre">
        <iframe
          // youtube-nocookie : pas de cookie de suivi déposé.
          // autoplay=1 : le visiteur a déjà cliqué, il attend la lecture.
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={titre}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="video-cadre video-facade"
      onClick={() => setActif(true)}
      aria-label={`Lire la vidéo : ${titre}`}
    >
      <Image src={vignette} alt="" width={largeur} height={hauteur} sizes="(max-width: 860px) 100vw, 100vw" />
      <span className="video-play" aria-hidden="true">
        <i className="ph ph-play"></i>
      </span>
    </button>
  );
}
