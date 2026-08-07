/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pas de check ESLint en build : le linter tourne en CI.
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Les réponses de /_next/image gardent ce TTL minimum en cache
  // (défaut : 60 s seulement). Nos photos ne changent jamais → 31 jours.
  images: {
    minimumCacheTTL: 2678400,
  },

  async headers() {
    return [
      {
        // Les bundles statiques /_next/static/* ont un hash dans leur URL,
        // ils peuvent (doivent) être cachés agressivement.
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Photos du site public : pas de hash dans l'URL, mais elles ne
        // changent presque jamais. 7 jours de cache + 30 jours de grâce
        // (stale-while-revalidate : le navigateur sert la version cachée
        // et revalide en arrière-plan).
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=2592000",
          },
        ],
      },
      {
        // PDF des rapports d'activités (publics) : 1 jour + grâce de 7 jours
        // au cas où un document serait remplacé.
        source: "/docs/rapports-activites/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
