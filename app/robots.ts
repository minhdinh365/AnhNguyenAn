import { MetadataRoute, Metadata } from "next";

export const metadata:Metadata = {
  title: "Anh Nguyễn An",
  robots: {
    index: true,
    follow: true,
  },
};

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/privacy"],
      },
    ],
    sitemap: "https://anhnguyenan.netlify.app/sitemap.xml",
  };
}