import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://chicoscissorsharpener.com";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/about-us`, lastModified: new Date() },
    { url: `${base}/contact-us`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
  ];
}
