export default async function sitemap() {
  const routes = [
    { url: "https://anhnguyenan.netlify.app/", _updatedAt: "2025-03-01T02:37:06+00:00" },
    { url: "https://anhnguyenan.netlify.app/about-us", _updatedAt: "2025-03-01T02:37:06+00:00" },
    { url: "https://anhnguyenan.netlify.app/products", _updatedAt: "2025-03-01T02:37:06+00:00" },
    { url: "https://anhnguyenan.netlify.app/events", _updatedAt: "2025-03-01T02:37:06+00:00" },
    { url: "https://anhnguyenan.netlify.app/contact", _updatedAt: "2025-03-01T02:37:06+00:00" },
    { url: "https://anhnguyenan.netlify.app/product-details/palmyran", _updatedAt: "2025-03-01T02:37:06+00:00" },
    { url: "https://anhnguyenan.netlify.app/product-details/boron-vinaf24", _updatedAt: "2025-03-01T02:37:06+00:00" },
    { url: "https://anhnguyenan.netlify.app/product-details/phospho-gel", _updatedAt: "2025-03-01T02:37:06+00:00" },
    { url: "https://anhnguyenan.netlify.app/product-details/selika-kplus", _updatedAt: "2025-03-01T02:37:06+00:00" },
    { url: "https://anhnguyenan.netlify.app/product-details/amino-forte", _updatedAt: "2025-03-01T02:37:06+00:00" },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: route._updatedAt,
  }));
}
