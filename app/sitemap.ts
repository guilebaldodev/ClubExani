import type { MetadataRoute } from "next";
import { simulators } from "@/consts/simulators";

const SITE_URL = "https://www.simulandum.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/simuladores",
    "/blog/exani-iii",
    "/creditos",
    "/contacto",
  ];

  const simulatorRoutes = simulators
    .filter((grupo) => grupo.examen === "EXANI-III")
    .flatMap((grupo) =>
      grupo.simulacros
        .filter((sim) => sim.estado === "listo")
        .map((sim) => `/simuladores/${sim.id}`)
    );

  const allRoutes = [...staticRoutes, ...simulatorRoutes];

  return allRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
