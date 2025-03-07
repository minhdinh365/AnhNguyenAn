import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://anhnguyenan.netlify.app";

  return [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString(), changeFrequency: "always" },
    { url: `${baseUrl}/about-us`, lastModified: new Date().toISOString(), changeFrequency: "always" },
    { url: `${baseUrl}/products`, lastModified: new Date().toISOString(), changeFrequency: "always" },
    { url: `${baseUrl}/events`, lastModified: new Date().toISOString(), changeFrequency: "always" },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString(), changeFrequency: "always" },
    { url: `${baseUrl}/product-details/palmyran`, lastModified: new Date().toISOString(), changeFrequency: "always" },
    { url: `${baseUrl}/product-details/boron-vinaf24`, lastModified: new Date().toISOString(), changeFrequency: "always" },
    { url: `${baseUrl}/product-details/phospho-gel`, lastModified: new Date().toISOString(), changeFrequency: "always" },
    { url: `${baseUrl}/product-details/selika-kplus`, lastModified: new Date().toISOString(), changeFrequency: "always" },
    { url: `${baseUrl}/product-details/amino-forte`, lastModified: new Date().toISOString(), changeFrequency: "always" },
  ];
}