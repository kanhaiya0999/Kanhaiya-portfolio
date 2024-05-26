import { Components_links, Domain, Footer_links } from "@/constdata";
import { MetadataRoute } from "next";

type ChangeFrequency =
  | "daily"
  | "always"
  | "hourly"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

const myChangeFrequency: ChangeFrequency = "daily";

export default function sitemap(): MetadataRoute.Sitemap {
  const all_footer_link = Footer_links.map((link) => {
    return {
      url: `${Domain}${link.link}`,
      lastModified: new Date(),
      changeFrequency: myChangeFrequency,
      priority: 0.8,
    };
  });

  const all_components_link = Components_links.map((link) => {
    return {
      url: `${Domain}${link.link}`,
      lastModified: new Date(),
      changeFrequency: myChangeFrequency,
      priority: 0.8,
    };
  });

  return [...all_footer_link, ...all_components_link];
}
