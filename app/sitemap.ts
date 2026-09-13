import type { MetadataRoute } from "next";
import { simulators } from "@/consts/simulators";

const SITE_URL = "https://www.simulandum.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/simuladores",
    "/blog/exani-iii",
    "/blog/posgrados-con-beca-en-mexico",
    "/blog/acredita-bach",
    "/blog/guia-acredita-bach-nem",
    "/blog/consejos-aprobar-acredita-bach-nem",
    "/creditos",
    "/contacto",
  ];

  const simulatorRoutes = simulators
    .filter(
      (grupo) =>
        grupo.examen === "EXANI-III" ||
        grupo.examen === "ACREDITA-BACH"
    )
    .flatMap((grupo) =>
      grupo.simulacros
        .filter((sim) => sim.estado === "listo")
        .map((sim) => `/simuladores/${sim.id}`)
    );

  const allRoutes = [...staticRoutes, ...simulatorRoutes];

  return allRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/blog/")
      ? "monthly"
      : "weekly",
    priority:
      path === "/"
        ? 1
        : path === "/simuladores"
        ? 0.95
        : path.startsWith("/blog/")
        ? 0.9
        : path.startsWith("/simuladores/")
        ? 0.9
        : 0.8,
  }));
}